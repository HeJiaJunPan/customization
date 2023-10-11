#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os
import re
import subprocess
import urllib.request
import urllib.error

def updateConfig(fileName, pattern, replaceStr):
    origin = None
    pattern = re.compile(pattern)

    with open(fileName, 'r', encoding='utf-8') as f:
        origin = f.read()

    with open(fileName, 'w', encoding='utf-8') as f:
        newString = pattern.sub(replaceStr, origin)
        f.write(newString)

def downloadTracker(url):
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:6.0) Gecko/20100101 Firefox/6.0'
        }
        request = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(request) as f:
            s = f.read().decode('utf-8')
            return ','.join(s.split())
    except urllib.error.HTTPError:
        print('从网络下载BT Tracker发生错误...')

def restart():
    currentDir = os.path.dirname(__file__)
    cmd = r'aria2c.exe --conf-path=aria2.conf -D'
    subprocess.Popen(r'taskkill /fi "imagename eq aria2c.exe" /f', shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE).wait()
    subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, cwd=currentDir)


if __name__ == '__main__':
    url = r'https://raw.gitmirror.com/ngosang/trackerslist/master/trackers_best_ip.txt'
    fileName = os.path.join(os.path.dirname(__file__), 'aria2.conf')
    pattern = r'bt-tracker=.*'
    replaceString = r'bt-tracker=' + downloadTracker(url)
    updateConfig(fileName, pattern, replaceString)
    restart()