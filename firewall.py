#!/usr/bin/env python3
# -*- coding:utf-8 -*-

import os


def addRuleForFirewall(name, program, dir='out', action='block', enable='yes'):
    cmd = r'netsh advfirewall firewall add rule name="%s" dir=%s action=%s program="%s" enable=%s' % (name, dir, action, program, enable)
    print(cmd)
    os.system(cmd)


def blockDir(dir, prefix):
    for path, dirs, files in os.walk(dir):
        for file in files:
            if file.endswith(r'.exe') or file.endswith(r'.dll'):
                program = os.path.join(os.path.abspath(path), file)
                name = r'%s -> %s' % (prefix, program)
                addRuleForFirewall(name, program)

if __name__ == '__main__':
    dir = os.path.abspath(r'D:\Software\SogouInput')
    blockDir(dir, '搜狗输入法')