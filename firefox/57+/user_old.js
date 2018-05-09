# pref(key,value) 会覆盖默认设置,在删除之后会恢复默认设置.
# user_pref(key,value)等同于从about:config修改,删除之后,修改的设置仍然有效.

/*==========选项卡里的设置==========*/
user_pref("security.OCSP.enabled", 0); /*禁用OSCP验证*/
user_pref("layers.acceleration.disabled", false);/*自动启用硬件加速*/
user_pref("privacy.userContext.enabled", false);/*不启用身份标签页*/


/*==========火狐同步选项==========*/
user_pref("services.sync.engine.addons", false);/*不同步附加组件*/
user_pref("services.sync.engine.history", false);/*不同步历史记录*/
user_pref("services.sync.engine.passwords", false);/*不同步密码*/
user_pref("services.sync.engine.prefs", false);/*不同步首选项*/
user_pref("services.sync.engine.prefs.modified", false);/*不同步首选项*/
user_pref("services.sync.engine.tabs", false);/*不同步标签页*/


/*==========插件设置==========*/
user_pref("media.gmp-provider.enabled", false);/*禁用openh264、eme插件*/
user_pref("media.gmp-manager.url", ""); /*完全不下载GMP Open H264*/
user_pref("media.gmp-gmpopenh264.autoupdate", false);/*关闭openh264插件的自动更新*/
user_pref("media.gmp-eme-adobe.autoupdate", false);/*关闭eme插件的自动更新*/
user_pref("dom.ipc.plugins.enabled", false);/*关闭插件的防崩溃保护*/
user_pref("dom.ipc.plugins.flash.disable-protected-mode", true);/*flash去沙箱*/

 
/*==========标签设置==========*/
user_pref("browser.tabs.animate", false);/*禁用标签动画效果*/
user_pref("browser.tabs.loadBookmarksInTabs", true);/*新标签打开书签*/
user_pref("browser.link.open_external", 3);/*外部程序调用浏览器时新标签打开*/
user_pref("browser.search.openintab", true);/*搜索栏新标签页打开*/
user_pref("browser.tabs.loadBookmarksInBackground", true);/*书签后台打开*/


/*==========浏览器增强设置==========*/
user_pref("browser.sessionhistory.max_total_viewers", 5);/*快进快退*/
user_pref("network.http.speculative-parallel-limit", 0);/*关闭火狐静默请求*/
user_pref("extensions.pocket.enabled", false);/*关闭火狐中的pocket*/
user_pref("extensions.webservice.discoverURL","http://127.0.0.1");/*禁用附加组件建议*/
user_pref("extensions.getAddons.cache.enabled", false); /*扩展页面不自动下载推荐内容*/
user_pref("dom.webnotifications.enabled", false);/*关闭WEB推送通知*/
user_pref("dom.webnotifications.serviceworker.enabled", false);/*关闭WEB推送通知*/
user_pref("browser.reader.detectedFirstArticle", true);/*关闭阅读界面提示*/
user_pref("network.IDN_show_punycode", true);/*防止第三方钓鱼网站*/
user_pref("reader.parse-on-load.enabled", false);/*禁用阅读模式*/
user_pref("general.useragent.locale", "zh-cn");/*使用中文语言*/
user_pref("extensions.screenshots.disabled", true);/*禁用自带截图*/
user_pref("browser.download.animateNotifications",false); /*取消下载提醒动画*/
user_pref("browser.fullscreen.animate",false); /*取消全屏动画*/
user_pref("general.autoScroll", false);/*禁用自动滚屏*/
user_pref("privacy.userContext.enabled", false);/*不启用身份标签页*/
/*关闭ssl不安全内容和混合内容保护*/
user_pref("security.mixed_content.block_active_content", false);
user_pref("security.mixed_content.block_display_content", false);
user_pref("gfx.direct2d.disabled", true);/*关闭网页图层绘制的gpu加速*/


/*==========关闭安全检测健康中心类==========*/
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.healthreport.documentServerURI", "");
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("breakpad.reportURL", "");
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled.v2", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("browser.safebrowsing.enabled", false);/*阻止已报告的攻击站点*/
user_pref("browser.safebrowsing.malware.enabled", false);/*阻止已报告的钓鱼网站*/


/*==========隐私相关==========*/
user_pref("browser.polaris.enabled", false);/*彻底关闭跟踪保护*/
user_pref("privacy.trackingprotection.pbmode.enabled", false);/*彻底关闭跟踪保护*/
user_pref("browser.send_pings", false);/*禁止ping 服务*/
user_pref("browser.newtabpage.directory.ping", "");/*禁止新标签页面的建议磁贴和增强磁贴*/
user_pref("browser.urlbar.suggest.searches", false);/*禁止地址栏搜索提供搜索建议*/


/*==========关闭烦人提示==========*/
user_pref("browser.rights.3.shown", false);/*火狐首次启动时是否已显示的权利通知*/
user_pref("browser.startup.homepage_override.mstone", "ignore");/*首次运行提示*/
user_pref("browser.newtabpage.activity-stream.migrationExpired", true);/*导入其他浏览器数据提示*/
user_pref("browser.onboarding.state", "watermark");/*关闭操作导览*/
user_pref("browser.onboarding.tour.onboarding-tour-addons.completed", true);
user_pref("browser.onboarding.tour.onboarding-tour-customize.completed", true);
user_pref("browser.onboarding.tour.onboarding-tour-default-browser.completed", true);
user_pref("browser.onboarding.tour.onboarding-tour-performance.completed", true);
user_pref("browser.onboarding.tour.onboarding-tour-private-browsing.completed", true);
user_pref("browser.onboarding.tour.onboarding-tour-screenshots.completed", true);
user_pref("browser.onboarding.tour.onboarding-tour-sync.completed", true);
  

//平滑滚动参数
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 150);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 150);
user_pref("mousewheel.acceleration.factor", 15);
user_pref("mousewheel.acceleration.start", 3);
user_pref("mousewheel.default.delta_multiplier_y", 160);


//标签页固定的网站
user_pref("browser.newtabpage.activity-stream.enabled", false);/*旧版 New Tab*/
user_pref("browser.newtabpage.columns", 6);//新标签页列数
user_pref("browser.newtabpage.rows", 3);//新标签页行数
user_pref("browser.newtabpage.pinned", "[{\"url\":\"https://music.163.com/\",\"label\":\"Music\"},{\"url\":\"https://www.bilibili.com/\",\"label\":\"Bilibili\"},{\"url\":\"https://www.zhihu.com/\",\"label\":\"Zhihu\"},{\"url\":\"https://flipboard.com/\",\"label\":\"Flipboard\"},{\"url\":\"https://tieba.baidu.com/\",\"label\":\"Tieba\"},{\"url\":\"https://pan.baidu.com/disk/home\",\"label\":\"百度云\"},{\"url\":\"https://www.cnblogs.com/\",\"label\":\" cnblogs\"},{\"url\":\"https://zh.wikipedia.org/zh-cn/\",\"label\":\"Wiki\"},{\"url\":\"https://www.google.com.hk/\",\"label\":\"Google\"},{\"url\":\"https://plus.google.com/\",\"label\":\"Google+\"},{\"url\":\"https://www.youtube.com/\",\"label\":\" YouTube\"},{\"url\":\"https://translate.google.cn/#auto/zh-CN/\",\"label\":\"Translate\"},{\"url\":\"http://www.runningcheese.com/\",\"label\":\"奶酪\"},{\"url\":\"http://www.guancha.cn/\",\"label\":\"观察者\"},{\"url\":\"http://www.ifeng.com/\",\"label\":\"凤凰网\"},{\"url\":\"https://www.ted.com/\",\"label\":\"TED\"},{\"url\":\"https://www.landiannews.com/\",\"label\":\"蓝点网\"},{\"url\":\"https://github.com/\",\"label\":\"Github\"}]");