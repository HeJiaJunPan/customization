// ==UserScript==
// @name        New script bilibili.com
// @namespace   Violentmonkey Scripts
// @match       https://www.bilibili.com/video/*
// @grant       none
// @version     1.0
// @author      -
// @description 2024/7/20 17:46:50
// ==/UserScript==

(function () {
    function localElement() {
        let domain = window.location.host;
        if (domain === 'www.youtube.com') {
            return {
                host: 'youtube',
                video: document.querySelector('#container .html5-video-container video'),
                control: document.querySelector('#container .ytp-right-controls')
            };
        } else if (domain === 'www.bilibili.com') {
            return {
                host: 'bilibili',
                video: document.querySelector('#playerWrap .bpx-player-video-wrap video'),
                control: document.querySelector('#arc_toolbar_report .video-toolbar-left')
            };
        }
    }

    // 复制当前帧到剪贴板
    function captureImage(video) {
        let canvas = document.createElement('canvas');
        // 设置画布与当前帧宽高一致
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0);
        // 返回base64编码url
        //let baseUrl = canvas.toDataURL('image/png');
        // 转为Blob对象，写入剪贴板
        canvas.toBlob(async (blob) => {
            let data = new ClipboardItem({ "image/png": blob });
            await navigator.clipboard.write([data]);
        }, 'image/png');

        canvas.remove();
    };

    // 截图流程：播放状态先暂停再截图和继续播放
    function capture(video) {
        if (!video.paused) {
            video.pause();
            captureImage(video);
            video.play();
        } else {
            captureImage(video);
        }
    }

    // 创建截图按钮
    let button;
    if (localElement().host === 'youtube') {
        button = document.createElement('button');
        button.innerHTML = '<svg t="1721465122238" class="icon" height="100%" width="100%" viewBox="-320 -320 1600 1600" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12138" width="200" height="200"><path d="M815.296 902.336h-179.2c-19.2 0-32-12.8-32-32s12.8-32 32-32h179.2c19.2 0 32-12.8 32-32v-140.8c0-19.2 12.8-32 32-32s32 12.8 32 32v147.2c-6.4 51.2-51.2 89.6-96 89.6z m-454.4 0h-147.2c-51.2 0-89.6-38.4-89.6-89.6v-153.6c0-19.2 12.8-32 32-32s32 12.8 32 32v147.2c0 19.2 12.8 32 32 32h153.6c19.2 0 32 12.8 32 32-12.8 19.2-25.6 32-44.8 32z m-211.2-512c-19.2 0-32-12.8-32-32v-147.2c0-51.2 38.4-89.6 89.6-89.6h153.6c19.2 0 32 12.8 32 32s-12.8 32-32 32h-147.2c-19.2 0-32 12.8-32 32v147.2c0 12.8-12.8 25.6-32 25.6z m723.2 0c-19.2 0-32-12.8-32-32v-147.2c0-19.2-12.8-32-32-32h-172.8c-12.8 0-32-12.8-32-32s12.8-32 25.6-32h185.6c51.2 0 89.6 38.4 89.6 89.6v147.2c0 25.6-12.8 38.4-32 38.4z m-588.8-64h70.4v-32h-70.4v32z" p-id="12139" fill="#ffffff"></path><path d="M764.096 345.536c19.2 0 32 12.8 32 32v281.6c0 19.2-12.8 38.4-32 38.4h-473.6c-19.2 0-32-12.8-32-32v-281.6c0-19.2 12.8-38.4 32-38.4h108.8c12.8-6.4 19.2-19.2 25.6-32 12.8-19.2 25.6-19.2 25.6-19.2h128s38.4 0 51.2 19.2c6.4 12.8 12.8 25.6 25.6 32h108.8z m-236.8 89.6c-25.6 0-51.2 12.8-70.4 38.4-12.8 25.6-12.8 51.2 0 76.8 12.8 25.6 38.4 38.4 70.4 38.4 44.8 0 76.8-32 76.8-76.8 0-19.2-6.4-38.4-25.6-57.6-6.4-6.4-25.6-19.2-51.2-19.2z m179.2 38.4c12.8 0 25.6-6.4 32-19.2 6.4-12.8 6.4-25.6 0-32-6.4-6.4-19.2-12.8-32-12.8-19.2 0-32 12.8-32 32s12.8 32 32 32z" p-id="12140" fill="#ffffff"></path></svg>';
        button.classList.add('ytp-button');

    } else if (localElement().host === 'bilibili') {
        button = document.createElement('div');
        button.classList.add('toolbar-left-item-wrap')
        button.innerHTML = `<div class="video-toolbar-left-item" style="width:100%;padding-right:25px;"><svg t="1721473203177" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4302" width="28" height="28"><path d="M896 192H781.1c-30.8 0-57.2-21.9-62.9-52.2L706.5 77c-1.4-7.6-8-13-15.7-13H333.3c-7.7 0-14.3 5.5-15.7 13l-11.8 62.7c-5.7 30.3-32.1 52.2-62.9 52.2H128C57.3 192 0 249.3 0 320v512c0 70.7 57.3 128 128 128h768c70.7 0 128-57.3 128-128V320c0-70.7-57.3-128-128-128zM160 352c-17.7 0-32-14.3-32-32 0-8.8 3.6-16.8 9.4-22.6 5.8-5.8 13.8-9.4 22.6-9.4h64c17.7 0 32 14.3 32 32 0 8.8-3.6 16.8-9.4 22.6-5.8 5.8-13.8 9.4-22.6 9.4h-64z m352 512c-150.2 0-272-121.8-272-272s121.8-272 272-272 272 121.8 272 272-121.8 272-272 272z" p-id="4303" fill="#515151"></path><path d="M720 592c0 55.6-21.6 107.8-60.9 147.1S567.6 800 512 800s-107.8-21.6-147.1-60.9S304 647.6 304 592s21.6-107.8 60.9-147.1S456.4 384 512 384s107.8 21.6 147.1 60.9S720 536.4 720 592z" p-id="4304" fill="#61666d"></path></svg></div>`;
    }

    button.addEventListener('click', function () {
        let video = localElement().video;
        capture(video);

    });


    // 若播放器控制条出现，添加截图按钮，并取消元素监听
    observer = new MutationObserver((mutationList, observer) => {
        let = control = localElement().control;
        if (control) {
            control.insertBefore(button, control.firstChild);
            observer.disconnect();
        }
    })


    observer.observe(document.querySelector('body'), {
        childList: true, // 观察目标子节点的变化，是否有添加或者删除
        attributes: true, // 观察属性变动
        subtree: true, // 观察后代节点，默认为 false
    })


})();
