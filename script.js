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

function isPendingUrl(url) {
    return !url || url === "#" || url.trim() === "#";
}

function createLinkAction(item) {
    if (isPendingUrl(item.url)) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "link-btn link-btn-pending";
        btn.textContent = item.btnText || "待补充";
        btn.addEventListener("click", () => {
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

function lockBodyScroll() {
    const scrollY = window.scrollY;
    document.body.dataset.scrollY = String(scrollY);
    document.documentElement.classList.add("modal-open");
    document.body.classList.add("modal-open");
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
}

function unlockBodyScroll() {
    const scrollY = Number(document.body.dataset.scrollY || 0);
    document.documentElement.classList.remove("modal-open");
    document.body.classList.remove("modal-open");
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
    delete document.body.dataset.scrollY;
    window.scrollTo(0, scrollY);
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
    lockBodyScroll();
}

function closeModal() {
    const modal = document.getElementById("folder-modal");
    if (!modal) return;

    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    unlockBodyScroll();
    activeModalIndex = null;
}

function renderFolders() {
    const root = document.getElementById("folder-grid-root");
    if (!root) return;

    linkGroups.forEach((group, index) => {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "folder-card";
        card.setAttribute("aria-label", `打开 ${group.title}`);

        const icon = document.createElement("span");
        icon.className = "folder-icon";
        icon.textContent = group.icon || "📁";

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

        card.addEventListener("click", () => openModal(index));
        root.appendChild(card);
    });
}

function initModal() {
    const modal = document.getElementById("folder-modal");
    if (!modal) return;

    modal.querySelectorAll("[data-modal-close]").forEach((el) => {
        el.addEventListener("click", closeModal);
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
