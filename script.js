// ========== 链接数据：以后只需改这个数组 ==========
const linkGroups = [
    {
        title: "免费作品收听",
        icon: "🎧",
        desc: "免费作品、全部作品、云盘入口、随机推荐",
        items: [
            {
                title: "Fanbox 免费作品合集",
                desc: "全部免费音频作品入口，各种类型的作品都会收录在这里。",
                url: "https://jiyu12.fanbox.cc/",
                tag: "免费作品",
                btnText: "进入"
            },
            {
                title: "免费作品云盘一",
                desc: "国内听众可用的免费作品合集云盘。如果找不到作品，可以把显示顺序切换为按时间排序。",
                url: "https://www.mediafire.com/folder/z8dyss6c76y32/%E5%85%8D%E8%B4%B9%E4%BD%9C%E5%93%81%E5%90%88%E9%9B%86",
                tag: "云盘",
                btnText: "打开"
            },
            {
                title: "免费作品云盘二",
                desc: "备用免费作品云盘入口，国内听众也可以直接打开。",
                url: "https://gofile.io/d/KMBMCU",
                tag: "备用云盘",
                btnText: "打开"
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
                desc: "主要付费作品网站，包含完整作品、作品介绍、试听片段和更新内容。",
                url: "https://payhip.com/jiyu12",
                tag: "付费作品",
                btnText: "查看"
            },
            {
                title: "淘宝店：纪屿十二的店铺",
                desc: "给没有海外支付方式的国内听众使用，作品内容和付费站基本一致。",
                url: "https://shop538816235.taobao.com/",
                tag: "国内购买",
                btnText: "打开"
            },
            {
                title: "付费作品简介文档",
                desc: "如果付费作品网站打不开，可以先在这里查看作品简介、设定和说明。",
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
                title: "Twitter / X 大号",
                desc: "主要更新号，新作品发布通知、作品动态和日常公告都会放在这里。",
                url: "https://x.com/JiYuan1208",
                tag: "主要更新",
                btnText: "打开"
            },
            {
                title: "Twitter / X 小号",
                desc: "早期作品、碎碎念和更日常一点的内容。",
                url: "https://x.com/jiyuan1802",
                tag: "碎碎念",
                btnText: "打开"
            },
            {
                title: "微博主页",
                desc: "面向国内听众的主要更新入口，发布内容和 X 大号基本一致。",
                url: "https://weibo.com/u/5985243129",
                tag: "国内更新",
                btnText: "打开"
            },
            {
                title: "微博小号：纪屿十二的分身",
                desc: "微博碎碎念小号，作用类似 X 小号，会放一些更日常的内容。",
                url: "https://weibo.com/u/7727199267",
                tag: "碎碎念",
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
                url: "https://jiyushier.github.io/005b-eating/",
                tag: "随机推荐",
                btnText: "进入"
            },
            {
                title: "调教飞行棋 / 调教卡牌",
                desc: "互动玩法小工具，目前正在优化中，等待上线～",
                url: "#",
                tag: "优化中",
                btnText: "暂未开放",
                pendingHint: "调教飞行棋 / 调教卡牌正在优化中，等待上线～"
            },
            {
                title: "豆包 AI 智能体",
                desc: "我做的豆包 AI 智能体入口，可以用来体验一些互动或辅助功能。",
                url: "https://doubao.com/bot/VVTwXUuS",
                tag: "AI 智能体",
                btnText: "打开"
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
        title: "说明公告",
        icon: "📢",
        desc: "站点公告与通知",
        items: [
            {
                title: "公告",
                desc: "暂无公告。",
                url: "#",
                tag: "暂无",
                btnText: "暂无公告",
                pendingHint: "暂无公告。"
            }
        ]
    }
];

/** 首页文件夹卡片专用 SVG（Modal 仍使用 linkGroups.icon 表情） */
const FOLDER_ICON_VINYL = `<svg class="folder-icon-svg" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M875.008 295.424a34.133333 34.133333 0 1 0-58.197333 35.669333c35.328 57.514667 53.930667 123.562667 53.930666 191.488 0 201.898667-164.352 366.250667-366.250666 366.250667S138.24 724.48 138.24 522.581333 302.592 156.330667 504.490667 156.330667c18.773333 0 34.133333-15.36 34.133333-34.133334s-15.36-34.133333-34.133333-34.133333C264.874667 88.064 69.973333 282.965333 69.973333 522.581333s194.901333 434.517333 434.517334 434.517334 434.517333-194.901333 434.517333-434.517334c0.170667-80.384-22.016-159.061333-64-227.157333z" fill="#ffffff"></path><path d="M501.248 389.973333c-77.653333 0-140.8 63.146667-140.8 140.8s63.146667 140.8 140.8 140.8 140.8-63.146667 140.8-140.8V224.256c0-19.456 15.872-35.328 35.328-35.328 19.456 0 35.328 15.872 35.328 35.328 0 18.773333 15.36 34.133333 34.133333 34.133333s34.133333-15.36 34.133334-34.133333c0-57.173333-46.421333-103.594667-103.594667-103.594667s-103.594667 46.421333-103.594667 103.594667v186.026667a140.526933 140.526933 0 0 0-72.533333-20.309334z m0 213.333334a72.704 72.704 0 0 1-72.533333-72.533334 72.704 72.704 0 0 1 72.533333-72.533333 72.704 72.704 0 0 1 72.533333 72.533333 72.704 72.704 0 0 1-72.533333 72.533334z" fill="#ffffff"></path></svg>`;

const folderCardIcons = {
    "免费作品收听": FOLDER_ICON_VINYL,
    "解锁付费作品": FOLDER_ICON_VINYL,
    "个人主页": `<svg class="folder-icon-svg" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M970.914322 158.896552C961.242483 158.896552 953.37931 151.031084 953.37931 141.396303L953.37931 741.362317C953.37931 731.803083 961.204259 723.862069 971.158687 723.862069L512 723.862069 392.827586 723.862069C385.739052 723.862069 378.814623 725.995555 372.955242 729.984918L165.506966 871.226297 220.689655 900.413793 220.689655 759.172414C220.689655 739.671058 204.880666 723.862069 185.37931 723.862069L53.114545 723.862069C62.757606 723.862069 70.62069 731.714701 70.62069 741.362317L70.62069 141.396303C70.62069 151.04429 62.784547 158.896552 53.085678 158.896552L970.914322 158.896552ZM0 141.396303 0 741.362317C0 770.738476 23.775887 794.482759 53.114545 794.482759L185.37931 794.482759 150.068966 759.172414 150.068966 900.413793C150.068966 928.772255 181.810564 945.561194 205.251655 929.601289L412.69993 788.35991 392.827586 794.482759 512 794.482759 971.158687 794.482759C1000.441626 794.482759 1024 770.574954 1024 741.362317L1024 141.396303C1024 112.03298 1000.249821 88.275862 970.914322 88.275862L53.085678 88.275862C23.749275 88.275862 0 112.074028 0 141.396303ZM741.547538 388.413793C761.048894 388.413793 776.857882 372.604804 776.857882 353.103448 776.857882 333.602092 761.048894 317.793103 741.547538 317.793103L264.827586 317.793103C245.32623 317.793103 229.517241 333.602092 229.517241 353.103448 229.517241 372.604804 245.32623 388.413793 264.827586 388.413793L741.547538 388.413793ZM264.827586 494.344828C245.32623 494.344828 229.517241 510.153816 229.517241 529.655172 229.517241 549.156529 245.32623 564.965517 264.827586 564.965517L741.547538 564.965517C761.048894 564.965517 776.857882 549.156529 776.857882 529.655172 776.857882 510.153816 761.048894 494.344828 741.547538 494.344828L264.827586 494.344828Z" fill="#e6e6e6"></path></svg>`,
    "小工具": `<svg class="folder-icon-svg" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M431.339424 549.69553 194.782753 549.69553c-21.871123 0-39.666418 17.796318-39.666418 39.667441l0 236.553601c0 21.87317 17.795295 39.667441 39.666418 39.667441l236.556671 0c21.871123 0 39.665395-17.794271 39.665395-39.667441L471.004819 589.362972C471.004819 567.491849 453.210547 549.69553 431.339424 549.69553zM430.205601 824.780703 195.9176 824.780703 195.9176 590.497818l234.288001 0L430.205601 824.780703z" fill="#e6e6e6"></path><path d="M192.211185 508.24242l236.557694 0c21.871123 0 39.665395-17.794271 39.665395-39.664372l0-236.557694c0-21.871123-17.794271-39.664372-39.665395-39.664372L192.211185 192.355983c-21.871123 0-39.664372 17.793248-39.664372 39.664372l0 236.557694C152.547837 490.448148 170.340061 508.24242 192.211185 508.24242zM193.349101 233.155201l234.284931 0 0 234.285954L193.349101 467.441155 193.349101 233.155201z" fill="#e6e6e6"></path><path d="M813.097104 547.127032 576.541457 547.127032c-21.862937 0-39.646975 17.794271-39.646975 39.665395l0 236.555647c0 21.871123 17.784038 39.665395 39.646975 39.665395l236.555647 0c21.881356 0 39.683814-17.794271 39.683814-39.665395L852.780919 586.792427C852.780919 564.921303 834.978461 547.127032 813.097104 547.127032zM811.980677 822.213227 577.69677 822.213227 577.69677 587.927273l234.283908 0L811.980677 822.213227z" fill="#e6e6e6"></path><path d="M859.52553 314.327942 720.943264 175.745676c-7.087419-7.064906-16.504906-10.956539-26.51591-10.956539-10.008958 0-19.422352 3.891633-26.5374 10.981099L529.377274 314.303382c-7.110955 7.089465-11.026124 16.522302-11.026124 26.561959s3.91517 19.473517 11.000542 26.536376l138.539286 138.559752c7.080256 7.080256 16.501836 10.980076 26.529213 10.980076 10.016121 0 19.436678-3.891633 26.547633-10.980076L859.550089 367.380228C874.147552 352.73774 874.136296 328.939731 859.52553 314.327942zM694.429401 471.41363 563.900555 340.865341 694.429401 210.318076l130.547265 130.547265L694.429401 471.41363z" fill="#e6e6e6"></path></svg>`,
    "说明公告": `<svg class="folder-icon-svg" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M560.633 162.477c-13.901-6.832-28.731-5.465-40.683 3.757-43.652 33.684-158.527 135.172-177.84 152.27H195.421c-35.74 0-64.817 29.077-64.817 64.817v233.126c0 35.74 29.077 64.82 64.817 64.82h125.75C347.076 704.61 471.183 816.17 519.74 854.64c6.955 5.506 14.927 8.299 23.145 8.299 5.772 0 11.665-1.378 17.415-4.159 20.77-10.048 37.668-38.89 37.668-64.293V226.552c0-25.213-16.748-53.957-37.334-64.075z m-5.879 632.01c0 8.774-6.611 19.758-11.158 23.91-54.496-43.754-196.609-172.036-198.065-173.35-0.01-0.01-0.02-0.016-0.03-0.024-3.946-4.275-9.58-6.968-15.858-6.968H195.421c-11.913 0-21.606-9.693-21.606-21.606V383.322c0-11.913 9.693-21.606 21.606-21.606h150.567c4.353 0 8.399-1.3 11.79-3.514a21.473 21.473 0 0 0 10.394-5.056c1.295-1.148 127.486-112.995 175.377-150.524 4.524 4.04 11.204 15.081 11.204 23.93v567.936zM799.893 512.648c-5.564-85.615-69.287-140.72-71.996-143.024-9.09-7.728-22.726-6.626-30.456 2.467-7.729 9.09-6.626 22.726 2.466 30.455 0.524 0.446 52.474 45.351 56.865 112.905 2.918 44.875-16.032 90.163-56.32 134.607-8.013 8.842-7.344 22.505 1.498 30.52a21.53 21.53 0 0 0 14.504 5.598c5.886 0 11.75-2.392 16.015-7.096 48.444-53.442 71.129-109.438 67.424-166.432z" fill="#dbdbdb"></path><path d="M916.537 408.311c-33.194-93.424-95.514-149.89-98.15-152.248-8.895-7.953-22.553-7.193-30.508 1.703-7.954 8.894-7.192 22.553 1.702 30.508 0.563 0.504 56.696 51.358 86.238 134.505 17.195 48.393 21.879 97.97 13.923 147.354-10.062 62.459-40.517 125.212-90.518 186.518-7.542 9.247-6.16 22.858 3.088 30.4a21.52 21.52 0 0 0 13.643 4.862c6.268 0 12.486-2.715 16.757-7.951 54.864-67.269 88.406-136.9 99.692-206.956 9.123-56.63 3.785-113.386-15.867-168.695z" fill="#dbdbdb"></path></svg>`
};

function createFolderIconElement(title, fallbackIcon) {
    const wrap = document.createElement("span");
    wrap.className = "folder-icon";

    const svgMarkup = folderCardIcons[title];
    if (svgMarkup) {
        wrap.classList.add("folder-icon--svg");
        wrap.innerHTML = svgMarkup;
        return wrap;
    }

    wrap.textContent = fallbackIcon || "📁";
    return wrap;
}

function isPendingUrl(url) {
    return !url || url === "#" || url.trim() === "#";
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
    actions.appendChild(createLinkAction(item));

    card.appendChild(head);
    card.appendChild(p);
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

    iconEl.textContent = group.icon || "";
    titleEl.textContent = group.title;
    descEl.textContent = group.desc || "";

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
