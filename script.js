// ========== 链接数据：以后只需改这个数组 ==========
const linkGroups = [
    {
        title: "免费作品收听",
        icon: "🎧",
        desc: "免费作品在线播放、Fanbox 合集",
        items: [
            {
                title: "免费作品在线播放 / 下载",
                desc: "按分类浏览我的免费音频与视频，可以在线播放，也可以下载保存。支持搜索、播放列表、定时停止，更适合手机收听。",
                url: "https://ting.jiyu12.com",
                tag: "推荐入口",
                btnText: "进入播放器"
            },
            {
                title: "Fanbox 免费作品合集",
                desc: "旧版免费音频合集入口，部分作品说明和历史合集可以在这里查看。",
                url: "https://jiyu12.fanbox.cc/",
                tag: "免费作品",
                btnText: "进入"
            }
        ]
    },
    {
        title: "解锁付费作品",
        icon: "💎",
        desc: "付费作品站、淘宝店、作品简介",
        items: [
            {
                title: "Payhip 付费作品站",
                desc: "主要付费作品网站，包含完整作品、作品介绍、试听片段和更新内容。兑换码使用方法，以及如何注册海外支付方式，请查看「说明公告」里的详细教程。",
                url: "https://payhip.com/jiyu12",
                tag: "付费作品",
                btnText: "查看"
            },
            {
                title: "淘宝店：纪屿十二的店铺",
                desc: "淘宝购买后，我会发送付费作品兑换码。可进入上方 Payhip 付费作品站兑换，兑换码使用方法请看「说明公告」。如果不想使用兑换码，也可以在淘宝把邮箱发给我，我会直接把作品发送到你的邮箱。淘宝作品编号和付费作品期数一一对应，购买前请务必先查看下方「付费作品简介文档」。",
                url: "https://shop538816235.taobao.com/",
                tag: "国内购买",
                btnText: "打开"
            },
            {
                title: "付费作品简介文档",
                desc: "作品简介、设定和说明文档。如果付费作品站打不开，或者想在淘宝购买前先了解作品内容，可以先在这里查看简介。",
                url: "https://stupendous-cobweb-50f.notion.site/2-30305c676dee80999cbdef5b1c6111c6?source=copy_link",
                tag: "作品简介",
                btnText: "查看"
            }
        ]
    },
    {
        title: "个人主页",
        icon: "🌊",
        desc: "X / 微博 / B站 / 抖音 / 网易云 / YouTube",
        items: [
            {
                title: "X / Twitter：纪屿十二 @JiYuan1208",
                desc: "主要更新号，新作品发布通知、作品动态和日常公告都会放在这里。",
                url: "https://x.com/JiYuan1208",
                tag: "主要更新",
                btnText: "打开"
            },
            {
                title: "X / Twitter：纪屿十二 @jiyuan1802",
                desc: "早期作品、碎碎念和更日常一点的内容。",
                url: "https://x.com/jiyuan1802",
                tag: "碎碎念",
                btnText: "打开"
            },
            {
                title: "微博：纪屿十二",
                desc: "面向国内听众的主要更新入口，发布内容和 X 大号基本一致。",
                url: "https://weibo.com/u/5985243129",
                tag: "国内更新",
                btnText: "打开"
            },
            {
                title: "微博小号：纪红豆_",
                desc: "日常碎碎念和可爱红豆人格出没地，偏轻松一点。",
                url: "https://weibo.com/u/7727199267",
                tag: "小号日常",
                btnText: "打开"
            },
            {
                title: "B站：纪屿十二",
                desc: "视频、音频、动态和一些公开内容更新。",
                url: "https://space.bilibili.com/23695960/",
                tag: "视频平台",
                btnText: "打开"
            },
            {
                title: "YouTube：纪屿十二",
                desc: "海外视频平台主页，后续可以放公开视频、片段或其他内容。",
                url: "https://youtube.com/@jiyu12?si=zTEDcqyciBc9Mu0A",
                tag: "视频平台",
                btnText: "打开"
            },
            {
                title: "QQ 作品群：超自然现象研究院",
                desc: "作品通知、交流与群内更新入口。群号：199632272。",
                url: "https://qm.qq.com/q/9cl4pMR47m",
                tag: "QQ群",
                btnText: "加入"
            },
            {
                title: "抖音：纪屿十二",
                desc: "短视频平台主页，也可以在抖音直接搜索抖音号：95228341469。",
                url: "https://www.douyin.com/user/MS4wLjABAAAAc4GLQPny4hPeTETeo58D3-HGFpnIyd86hoSX8Y-aRfqqTqkjP0qZXsog8Xhx9uCn?from_tab_name=main",
                tag: "短视频",
                btnText: "打开"
            },
            {
                title: "网易云音乐：纪屿十二",
                desc: "播客、助眠哄睡内容，以及一些原创音乐和作品主题曲。",
                url: "https://y.music.163.com/m/user?id=7802823742&dlt=0846&app_version=9.4.70",
                tag: "播客 / 音乐",
                btnText: "打开"
            },
            {
                title: "小红书主页",
                desc: "日常分享 / 作品动态 / 碎碎念",
                url: "【这里替换成我的小红书主页链接】",
                tag: "小红书",
                btnText: "打开小红书"
            },
            {
                title: "P站主页",
                desc: "部分公开视频内容入口，不是完整作品库。",
                url: "https://cn.pornhub.com/model/jiyu12",
                tag: "公开视频 / 18+",
                btnText: "打开"
            }
        ]
    },
    {
        title: "小工具",
        icon: "🎲",
        desc: "今天听什么、调教飞行棋 / 调教卡牌等",
        items: [
            {
                title: "今天听什么随机推荐器",
                desc: "随机推荐免费作品，也可以作为不知道听什么时的网页小工具入口。",
                url: "https://haofan.jiyu12.com/",
                tag: "随机推荐",
                btnText: "进入"
            },
            {
                title: "调教飞行棋 / 调教卡牌",
                desc: "互动玩法小工具，目前正在优化中，等待上线～",
                url: "#",
                futureUrl: "https://feixingqi.jiyu12.com/",
                tag: "优化中",
                btnText: "暂未开放",
                pendingHint: "调教飞行棋 / 调教卡牌正在优化中，等待上线～"
            },
            {
                title: "更多小工具",
                desc: "以后新做的网页、小工具、小游戏会继续放在这里。",
                url: "#",
                tag: "预留",
                btnText: "待补充"
            }
        ]
    },
    {
        title: "我的声音",
        icon: "🎙️",
        desc: "AI 智能体 / 导航语音包",
        modalDesc: "这里放一些和我的声音有关的小东西，比如 AI 智能体和导航语音包。",
        items: [
            {
                title: "豆包 AI 智能体",
                desc: "我做的豆包 AI 智能体入口，可以用来体验一些互动或辅助功能。",
                url: "https://doubao.com/bot/VVTwXUuS",
                tag: "AI 智能体",
                btnText: "打开"
            },
            {
                title: "高德地图 AI 领航员",
                desc: "我做的高德地图 AI 领航员语音包。整体声音人机味会比较重，不过我额外录制了一些本音色的趣味语音，会在特定地点或场景下触发。",
                url: "https://static5.gaode.com/activity/2020CommonLanding117/cn/2024TripExternalShare/index.html?id=283&digital_id=9cb613f8a8bf4b188a01d751b84056fe&share_from=digitalProShare&shareScene=digital_list_super_digital",
                tag: "导航语音包",
                btnText: "打开领取链接",
                copyCode: "951339",
                copyBtnText: "复制至尊码",
                copySuccessText: "至尊码已复制",
                safetyHint: "打开链接后输入至尊码【951339】，领取你的专属 AI 领航员。"
            },
            {
                title: "百度地图语音包",
                desc: "我做的百度地图导航语音包。复制口令后打开百度地图，可以领取或使用对应语音包。",
                url: "https://map.baidu.com/zt/y2019/qinniao/index.html?id=4-1779852963457854&timestamp=1779856137",
                tag: "导航语音包",
                btnText: "打开百度地图链接",
                copyCode: "3:/ 纪屿十二https://map.baidu.com/zt/y2019/qinniao/index.html?id=4-1779852963457854&timestamp=1779856137 复制这条消息打开百度地图3.s:/¥^4u5AZBz9Kf^碱堷劃寄蔠釿咕街",
                copyBtnText: "复制口令",
                copySuccessText: "百度地图口令已复制"
            },
            {
                title: "百度地图趣味语音",
                desc: "我做的百度地图趣味语音。复制口令后打开百度地图，可以领取或使用对应语音。",
                url: "https://map.baidu.com/zt/y2019/qinniao/index.html?id=4-1779855731927475&timestamp=1779855790",
                tag: "趣味语音",
                btnText: "打开百度地图链接",
                copyCode: "5:/ 纪屿十二趣味语音https://map.baidu.com/zt/y2019/qinniao/index.html?id=4-1779855731927475&timestamp=1779855790 复制这条消息打开百度地图3.s:/¥^yrZOlF0eXp^夌拤洱恆槳碌丼笋",
                copyBtnText: "复制口令",
                copySuccessText: "百度地图趣味语音口令已复制"
            }
        ]
    },
    {
        title: "说明公告",
        icon: "📢",
        desc: "兑换码教程、海外支付方式说明",
        items: [
            {
                title: "兑换码使用方法",
                desc: "购买后不知道怎么使用兑换码的话，可以查看教程。链接一和链接二内容作用相同，可优先打开链接一，打不开再试链接二。",
                tag: "教程",
                links: [
                    {
                        label: "链接一",
                        url: "https://docs.qq.com/doc/DUHB2aktCVmN3YXhs"
                    },
                    {
                        label: "链接二",
                        url: "https://stupendous-cobweb-50f.notion.site/PayPal-2df05c676dee80139bffdba631253ab5"
                    }
                ]
            },
            {
                title: "海外支付方式注册说明",
                desc: "没有海外支付方式、想注册备用支付方式的话，可以查看教程。链接一和链接二是不同平台的备用入口，可优先打开链接一，打不开再试链接二。",
                tag: "教程",
                links: [
                    {
                        label: "链接一",
                        url: "https://stupendous-cobweb-50f.notion.site/2c905c676dee80e79e5fda239957d984"
                    },
                    {
                        label: "链接二",
                        url: "https://docs.qq.com/doc/DUEVZYkJwZEhkd3JN"
                    }
                ]
            }
        ]
    }
];

/** 首页文件夹卡片专用 SVG（Modal 仍使用 linkGroups.icon 表情） */
const FOLDER_ICON_VINYL = `<svg class="folder-icon-svg" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M875.008 295.424a34.133333 34.133333 0 1 0-58.197333 35.669333c35.328 57.514667 53.930667 123.562667 53.930666 191.488 0 201.898667-164.352 366.250667-366.250666 366.250667S138.24 724.48 138.24 522.581333 302.592 156.330667 504.490667 156.330667c18.773333 0 34.133333-15.36 34.133333-34.133334s-15.36-34.133333-34.133333-34.133333C264.874667 88.064 69.973333 282.965333 69.973333 522.581333s194.901333 434.517333 434.517334 434.517334 434.517333-194.901333 434.517333-434.517334c0.170667-80.384-22.016-159.061333-64-227.157333z" fill="#7DD3FC"></path><path d="M501.248 389.973333c-77.653333 0-140.8 63.146667-140.8 140.8s63.146667 140.8 140.8 140.8 140.8-63.146667 140.8-140.8V224.256c0-19.456 15.872-35.328 35.328-35.328 19.456 0 35.328 15.872 35.328 35.328 0 18.773333 15.36 34.133333 34.133333 34.133333s34.133333-15.36 34.133334-34.133333c0-57.173333-46.421333-103.594667-103.594667-103.594667s-103.594667 46.421333-103.594667 103.594667v186.026667a140.526933 140.526933 0 0 0-72.533333-20.309334z m0 213.333334a72.704 72.704 0 0 1-72.533333-72.533334 72.704 72.704 0 0 1 72.533333-72.533333 72.704 72.704 0 0 1 72.533333 72.533333 72.704 72.704 0 0 1-72.533333 72.533334z" fill="#7DD3FC"></path></svg>`;

const folderCardIcons = {
    "免费作品收听": FOLDER_ICON_VINYL,
    "解锁付费作品": FOLDER_ICON_VINYL,
    "个人主页": `<svg class="folder-icon-svg profile-icon-svg" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M970.914322 158.896552C961.242483 158.896552 953.37931 151.031084 953.37931 141.396303L953.37931 741.362317C953.37931 731.803083 961.204259 723.862069 971.158687 723.862069L512 723.862069 392.827586 723.862069C385.739052 723.862069 378.814623 725.995555 372.955242 729.984918L165.506966 871.226297 220.689655 900.413793 220.689655 759.172414C220.689655 739.671058 204.880666 723.862069 185.37931 723.862069L53.114545 723.862069C62.757606 723.862069 70.62069 731.714701 70.62069 741.362317L70.62069 141.396303C70.62069 151.04429 62.784547 158.896552 53.085678 158.896552L970.914322 158.896552ZM0 141.396303 0 741.362317C0 770.738476 23.775887 794.482759 53.114545 794.482759L185.37931 794.482759 150.068966 759.172414 150.068966 900.413793C150.068966 928.772255 181.810564 945.561194 205.251655 929.601289L412.69993 788.35991 392.827586 794.482759 512 794.482759 971.158687 794.482759C1000.441626 794.482759 1024 770.574954 1024 741.362317L1024 141.396303C1024 112.03298 1000.249821 88.275862 970.914322 88.275862L53.085678 88.275862C23.749275 88.275862 0 112.074028 0 141.396303ZM741.547538 388.413793C761.048894 388.413793 776.857882 372.604804 776.857882 353.103448 776.857882 333.602092 761.048894 317.793103 741.547538 317.793103L264.827586 317.793103C245.32623 317.793103 229.517241 333.602092 229.517241 353.103448 229.517241 372.604804 245.32623 388.413793 264.827586 388.413793L741.547538 388.413793ZM264.827586 494.344828C245.32623 494.344828 229.517241 510.153816 229.517241 529.655172 229.517241 549.156529 245.32623 564.965517 264.827586 564.965517L741.547538 564.965517C761.048894 564.965517 776.857882 549.156529 776.857882 529.655172 776.857882 510.153816 761.048894 494.344828 741.547538 494.344828L264.827586 494.344828Z" fill="#7DD3FC"></path></svg>`,
    "小工具": `<svg class="folder-icon-svg tool-icon-svg" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M407.04 485.888H73.728c-35.328 0-64-28.672-64-64V84.48C9.728 49.152 38.4 20.48 73.728 20.48h333.312c35.328-1.536 65.536 25.6 67.072 60.928v336.896c2.048 35.328-25.6 65.536-60.928 67.072-1.536 0.512-3.584 0.512-6.144 0.512z m0-401.408H76.8l4.096 330.752h326.144V84.48z m357.376 418.304c-17.408 0.512-34.304-6.656-46.592-19.456L532.48 297.984c-25.6-24.576-26.624-65.024-2.56-90.624 0.512-1.024 1.536-1.536 2.56-2.56l184.32-184.832c24.576-25.6 65.024-26.624 90.624-2.56 1.024 0.512 1.536 1.536 2.56 2.56l184.832 185.344c25.6 24.576 26.624 65.024 2.56 90.624-0.512 1.024-1.536 1.536-2.56 2.56l-184.832 185.344c-12.288 11.776-28.672 18.944-45.568 18.944z m-174.08-248.32l179.2 175.616L947.2 254.464l-177.664-181.248-179.2 181.248zM407.04 1024H73.728c-35.328 0-64-28.672-64-64v-339.456c0-35.328 28.672-64 64-64h333.312c35.328-1.536 65.536 25.6 67.072 60.928v336.896c3.072 35.328-22.528 66.56-57.856 69.632h-9.216z m0-401.408l-330.24 3.072 4.096 330.752 326.144-3.072v-330.752zM935.424 1024h-333.824c-35.328 0-64-28.672-64-64v-339.456c0-35.328 28.672-64 64-64h333.824c35.328 0 64 28.672 64 64v333.824c3.072 35.328-23.04 66.56-57.856 69.632h-6.144z m-3.584-403.968l-330.24 3.072 4.096 330.752 326.144-3.072v-330.752z" fill="currentColor"></path></svg>`,
    "我的声音": `<svg class="folder-icon-svg" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M544 896h128a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64h128v-65.44C300.576 814.4 160 663.616 160 480a32 32 0 0 1 64 0 288 288 0 0 0 576 0 32 32 0 0 1 64 0c0 183.616-140.576 334.4-320 350.56V896zM512 64a224 224 0 0 1 224 224v192a224 224 0 0 1-448 0V288A224 224 0 0 1 512 64z m0 64a160 160 0 0 0-160 160v192a160 160 0 0 0 320 0V288a160 160 0 0 0-160-160z" fill="currentColor"></path></svg>`,
    "说明公告": `<svg class="folder-icon-svg notice-icon-svg" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M592.011636 974.615273a34.816 34.816 0 0 1-23.552-9.122909l-208.337454-190.417455-4.840727 0.139636H220.672A174.266182 174.266182 0 0 1 46.545455 601.134545V424.773818a174.359273 174.359273 0 0 1 174.126545-174.173091h134.609455c1.629091 0 3.258182 0.046545 4.840727 0.139637l208.337454-190.417455a34.955636 34.955636 0 0 1 58.461091 25.786182v853.597091a35.095273 35.095273 0 0 1-34.909091 34.909091zM368.733091 704.232727c9.448727 0 20.48 2.885818 26.810182 8.657455l161.559272 147.688727V165.329455L395.543273 313.018182a35.095273 35.095273 0 0 1-27.787637 8.890182c-7.214545-0.977455-9.821091-1.442909-12.474181-1.442909H220.672A104.448 104.448 0 0 0 116.363636 424.773818v176.360727a104.401455 104.401455 0 0 0 104.308364 104.261819h134.609455c2.699636 0 5.259636-0.465455 7.866181-0.837819a53.061818 53.061818 0 0 1 5.585455-0.325818z m345.367273-20.805818a181.76 181.76 0 0 0 119.528727-170.496 181.806545 181.806545 0 0 0-119.482182-170.449454 34.955636 34.955636 0 0 0-23.831273 65.62909 111.802182 111.802182 0 0 1 73.495273 104.820364 111.802182 111.802182 0 0 1-73.448727 104.820364 34.862545 34.862545 0 0 0 11.869091 67.723636 34.071273 34.071273 0 0 0 11.869091-2.048z m120.226909 99.048727a325.213091 325.213091 0 0 0-0.186182-539.136 34.909091 34.909091 0 0 0-39.098182 57.902546 255.301818 255.301818 0 0 1 0.093091 423.377454 34.909091 34.909091 0 1 0 39.191273 57.856z" fill="currentColor"></path></svg>`
};

function populateGroupIcon(element, title, fallbackIcon, variant = "folder") {
    const isModal = variant === "modal";
    const svgMarkup = folderCardIcons[title];

    element.innerHTML = "";
    element.className = isModal ? "modal-icon" : "folder-icon";

    if (svgMarkup) {
        element.classList.add(isModal ? "modal-icon--svg" : "folder-icon--svg");
        element.innerHTML = svgMarkup;
        return;
    }

    element.textContent = fallbackIcon || "📁";
}

function createFolderIconElement(title, fallbackIcon) {
    const wrap = document.createElement("span");
    populateGroupIcon(wrap, title, fallbackIcon, "folder");
    return wrap;
}

function isPendingUrl(url) {
    return !url || url === "#" || url.trim() === "#";
}

function showToast(message) {
    const toast = document.createElement("div");
    toast.textContent = message;
    toast.style.cssText = [
        "position:fixed",
        "left:50%",
        "bottom:24px",
        "transform:translateX(-50%)",
        "z-index:9999",
        "padding:10px 14px",
        "border-radius:999px",
        "background:rgba(10,24,38,0.92)",
        "color:#fff",
        "font-size:14px",
        "box-shadow:0 10px 30px rgba(0,0,0,0.24)",
        "pointer-events:none"
    ].join(";");
    document.body.appendChild(toast);
    window.setTimeout(() => {
        toast.remove();
    }, 1600);
}

async function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (_err) {
            // Fall back to the textarea method below.
        }
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();

    let copied = false;
    try {
        copied = document.execCommand("copy");
    } catch (_err) {
        copied = false;
    }
    textarea.remove();
    return copied;
}

function createCopyAction(item) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "link-btn";
    btn.textContent = item.copyBtnText || "复制";
    btn.addEventListener("click", async (e) => {
        e.preventDefault();
        const copied = await copyText(item.copyCode);
        showToast(copied ? item.copySuccessText || "已复制" : "复制失败，请手动复制");
    });
    return btn;
}

function appendItemLinkActions(container, item) {
    if (Array.isArray(item.links) && item.links.length > 0) {
        item.links.forEach((linkItem) => {
            if (!linkItem || isPendingUrl(linkItem.url)) {
                return;
            }
            const link = document.createElement("a");
            link.href = linkItem.url;
            link.className = "link-btn";
            link.textContent = linkItem.label || "打开";
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            container.appendChild(link);
        });
        if (item.copyCode) {
            container.appendChild(createCopyAction(item));
        }
        return;
    }

    container.appendChild(createLinkAction(item));
    if (item.copyCode) {
        container.appendChild(createCopyAction(item));
    }
}

function createLinkAction(item) {
    if (isPendingUrl(item.url)) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "link-btn link-btn-pending";
        btn.textContent = item.btnText || "待补充";
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            alert(item.pendingHint || "链接待补充");
        });
        return btn;
    }

    const link = document.createElement("a");
    link.href = item.url;
    link.className = "link-btn";
    link.textContent = item.btnText || "打开";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    return link;
}

function createModalLinkCard(item) {
    const card = document.createElement("article");
    card.className = "modal-link-card";

    const head = document.createElement("div");
    head.className = "modal-link-head";

    const h3 = document.createElement("h3");
    h3.textContent = item.title;
    head.appendChild(h3);

    if (item.tag) {
        const tag = document.createElement("span");
        tag.className = "link-tag";
        tag.textContent = item.tag;
        head.appendChild(tag);
    }

    const p = document.createElement("p");
    p.className = "modal-link-desc";
    p.textContent = item.desc;

    const actions = document.createElement("div");
    actions.className = "modal-link-actions";
    appendItemLinkActions(actions, item);

    card.appendChild(head);
    card.appendChild(p);

    if (item.safetyHint) {
        const safety = document.createElement("p");
        safety.className = "modal-link-safety";
        safety.textContent = item.safetyHint;
        card.appendChild(safety);
    }

    card.appendChild(actions);
    return card;
}

let activeModalIndex = null;
let modalScrollY = 0;
let isPageScrollLocked = false;

function preventBackgroundTouchMove(e) {
    const dialog = document.querySelector(".modal-dialog");
    if (dialog && dialog.contains(e.target)) {
        return;
    }
    e.preventDefault();
}

function lockPageScroll() {
    if (isPageScrollLocked) {
        return;
    }

    modalScrollY =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
    isPageScrollLocked = true;

    document.documentElement.classList.add("modal-open");
    document.body.classList.add("modal-open");

    document.body.style.position = "fixed";
    document.body.style.top = `-${modalScrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    document.addEventListener("touchmove", preventBackgroundTouchMove, {
        passive: false
    });
}

function unlockPageScroll() {
    if (!isPageScrollLocked) {
        return;
    }

    const scrollY = modalScrollY;

    document.removeEventListener("touchmove", preventBackgroundTouchMove);

    document.documentElement.classList.remove("modal-open");
    document.body.classList.remove("modal-open");

    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";

    isPageScrollLocked = false;
    modalScrollY = 0;

    if (typeof window.scrollTo === "function") {
        try {
            window.scrollTo({ top: scrollY, left: 0, behavior: "instant" });
        } catch (_err) {
            window.scrollTo(0, scrollY);
        }
    }
    document.documentElement.scrollTop = scrollY;
    document.body.scrollTop = scrollY;
}

function openModal(groupIndex) {
    const group = linkGroups[groupIndex];
    if (!group) return;

    const modal = document.getElementById("folder-modal");
    const iconEl = document.getElementById("modal-icon");
    const titleEl = document.getElementById("modal-title");
    const descEl = document.getElementById("modal-desc");
    const linksRoot = document.getElementById("modal-links");

    if (!modal || !linksRoot) return;

    if (activeModalIndex === null) {
        lockPageScroll();
    }

    populateGroupIcon(iconEl, group.title, group.icon, "modal");
    titleEl.textContent = group.title;
    descEl.textContent = group.modalDesc || group.desc || "";

    linksRoot.innerHTML = "";
    group.items.forEach((item) => {
        linksRoot.appendChild(createModalLinkCard(item));
    });

    activeModalIndex = groupIndex;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
    const modal = document.getElementById("folder-modal");
    if (!modal) return;

    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    activeModalIndex = null;
    unlockPageScroll();
}

function renderFolders() {
    const root = document.getElementById("folder-grid-root");
    if (!root) return;

    linkGroups.forEach((group, index) => {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "folder-card";
        card.setAttribute("aria-label", `打开 ${group.title}`);

        const icon = createFolderIconElement(group.title, group.icon);

        const title = document.createElement("h2");
        title.className = "folder-title";
        title.textContent = group.title;

        const desc = document.createElement("p");
        desc.className = "folder-desc";
        desc.textContent = group.desc;

        const hint = document.createElement("span");
        hint.className = "folder-hint";
        hint.textContent = "查看入口";

        card.appendChild(icon);
        card.appendChild(title);
        card.appendChild(desc);
        card.appendChild(hint);

        card.addEventListener("click", (e) => {
            e.preventDefault();
            openModal(index);
        });
        root.appendChild(card);
    });
}

function initModal() {
    const modal = document.getElementById("folder-modal");
    if (!modal) return;

    modal.querySelectorAll("[data-modal-close]").forEach((el) => {
        el.addEventListener("click", (e) => {
            e.preventDefault();
            closeModal();
        });
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("is-open")) {
            closeModal();
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderFolders();
    initModal();
    initBubbles();
});

function initBubbles() {
    const container = document.getElementById("particles-container");
    if (!container) return;

    const BUBBLE_COUNT = 18;

    function createBubble() {
        if (!document.body.contains(container)) return;

        const bubble = document.createElement("div");
        bubble.classList.add("bubble");

        const size = Math.random() * 7 + 3;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}vw`;

        const duration = Math.random() * 16 + 12;
        bubble.style.animationDuration = `${duration}s`;
        bubble.style.animationDelay = `${Math.random() * 10}s`;

        container.appendChild(bubble);

        bubble.addEventListener(
            "animationend",
            () => {
                bubble.remove();
                createBubble();
            },
            { once: true }
        );
    }

    for (let i = 0; i < BUBBLE_COUNT; i++) {
        createBubble();
    }
}
