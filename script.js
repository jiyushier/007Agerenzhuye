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
                desc: "付费作品的主要解锁网站，可以直接购买作品，也可以使用兑换码兑换。兑换码使用方法和海外支付方式说明，请查看「说明公告」。",
                url: "https://payhip.com/jiyu12",
                tag: "付费作品",
                btnText: "查看"
            },
            {
                title: "查看作品简介与试听",
                desc: "购买前建议先查看作品简介和试听片段，确认内容合适后再选择购买方式。",
                tag: "购买前先看",
                links: [
                    {
                        label: "查看作品简介",
                        action: "paidIntro"
                    },
                    {
                        label: "进入播放器试听",
                        url: "https://ting.jiyu12.com"
                    }
                ]
            },
            {
                title: "淘宝店购买",
                desc: "通过淘宝购买后，我会发送付费作品站的兑换码。兑换码可在第一个付费作品网站中兑换作品。如果不想使用兑换码，也可以在淘宝私信我你的邮箱，我会把音频链接发送到你的邮箱。如果不想跳转链接，也可以在淘宝搜索店铺名：纪屿十二的店铺。",
                url: "https://shop538816235.taobao.com/",
                tag: "兑换码购买",
                btnText: "打开淘宝店"
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
                title: "调教飞行棋 / 调教卡牌",
                desc: "互动玩法小工具，飞行棋入口已开放。",
                url: "https://feixingqi.jiyu12.com/",
                tag: "已开放",
                btnText: "进入"
            },
            {
                title: "红豆便贴",
                desc: "电脑桌面透明便签，支持百分百透明和文字穿透。",
                tag: "桌面工具",
                links: [
                    {
                        label: "看演示",
                        url: "https://www.bilibili.com/video/BV15rE56jEyq/?share_source=copy_web&vd_source=2eca37d412ac2c07e2cde810726e8ad5"
                    },
                    {
                        label: "下载",
                        url: "https://audio.jiyu12.com/tools/hongdou-note/hongdou-note-windows.zip?v=20260609-tray-exit"
                    }
                ]
            },
            {
                title: "项目完成进度",
                desc: "把任务拆成步骤，一项一项完成。适合记录重复活动、打卡流程、发布流程、学习计划，也可以当成简单备忘录使用。点进网站后有更具体的使用说明。",
                url: "https://progress.jiyu12.com/",
                tag: "进度工具",
                btnText: "打开"
            },
            {
                title: "今天听什么随机推荐器",
                desc: "随机推荐免费作品，也可以作为不知道听什么时的网页小工具入口。",
                url: "https://haofan.jiyu12.com/",
                tag: "随机推荐",
                btnText: "进入"
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
                title: "高德地图语音包",
                desc: "高德地图语音包已上架，因免费分享次数有限，设置为最低 1 元。可以先试听再决定是否购买。整体 AI 味较重，但有一些本音色趣味语音，会在特定地点或场景下触发。",
                url: "https://surl.amap.com/7WP0rDE1ddz3",
                tag: "导航语音包",
                btnText: "打开试听 / 购买页面"
            },
            {
                title: "百度地图语音包",
                desc: "包含百度地图导航语音包和趣味语音。复制对应口令后打开百度地图，即可领取或使用。",
                tag: "导航语音包",
                links: [
                    {
                        label: "打开语音包",
                        url: "https://map.baidu.com/zt/y2019/qinniao/index.html?id=4-1779852963457854&timestamp=1779856137"
                    },
                    {
                        label: "复制语音包口令",
                        copyCode: "3:/ 纪屿十二https://map.baidu.com/zt/y2019/qinniao/index.html?id=4-1779852963457854&timestamp=1779856137 复制这条消息打开百度地图3.s:/¥^4u5AZBz9Kf^碱堷劃寄蔠釿咕街",
                        copySuccessText: "语音包口令已复制"
                    },
                    {
                        label: "打开趣味语音",
                        url: "https://map.baidu.com/zt/y2019/qinniao/index.html?id=4-1779855731927475&timestamp=1779855790"
                    },
                    {
                        label: "复制趣味语音口令",
                        copyCode: "5:/ 纪屿十二趣味语音https://map.baidu.com/zt/y2019/qinniao/index.html?id=4-1779855731927475&timestamp=1779855790 复制这条消息打开百度地图3.s:/¥^yrZOlF0eXp^夌拤洱恆槳碌丼笋",
                        copySuccessText: "趣味语音口令已复制"
                    }
                ]
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

const paidWorksRaw = `
022-边骂边操，操完再哄（粗口调教）
时长：43分钟
这一期没有复杂剧情，就是一场非常直接、纯粹、高强度的粗口羞辱调教。
从一开始，主人就会把你一步步按进“只会发情、只会听话、只会求主人继续”的状态里。越被骂越兴奋，越被羞辱越想要，在命令、嘲弄、压迫和调教里，慢慢把理智和羞耻心全部交出去。
抽脸、抽胸、抽屁股、学狗叫、羞耻复述、自己动手配合命令、狗链牵引、窗边展示幻想、公共羞辱幻想、尿意控制、高潮控制……玩法密集，几乎没有铺垫，主打从头爽到尾的精神支配感。
每一句羞辱都贴着耳朵往里钻，每一次命令都把你调教得更乖、更淫荡、更离不开主人。
但被狠狠欺负完之后，也会被温柔地抱进怀里，亲亲、揉揉、哄哄。刚才那些凶狠的话，都只是属于我们之间的甜蜜互动游戏。你还是主人最疼的小宝贝，是被占有、被宠爱、被温柔抱在怀里的小公主。
⚠️涉及元素：粗口羞辱、精神支配、D/s、犬化、命令互动、抽打、羞耻复述、学狗叫、狗链、窗边展示幻想、公共羞耻幻想、身体标记幻想、尿意控制、高潮控制、强占有欲、操后安抚、亲亲抱抱、温柔 aftercare

021-今天也是好乖的小狗（温柔调教）
时长：80分钟
主人回家的时候，小狗就已经乖乖等着了。
眼睛亮亮的，期待着主人的奖励。
明明害羞得发抖，却还是会听话地张嘴、跪好，被主人一点点调教成最乖的小狗。
舔手指、口交、深喉、蒙眼，在命令、夸奖和一记记巴掌里，被欺负到眼泪汪汪。
你越乖，主人就越想狠狠疼爱你；
你越骚，主人就越想把你操到不停撒娇求饶。
抽红的地方会被亲亲，疼的地方会被揉一揉。
哭花的小脸会被擦干净，再被主人抱进怀里，好好哄、好好夸、好好疼。
今天也是好乖的小狗。
今天，也要被主人疼爱到最后。
⚠️涉及元素：主人×小狗、口交、深喉、舔胸、蒙眼、镜前、拍照记录、巴掌抽脸、鸡巴打脸；抽胸、抽屁股、皮带、边抽边操、后入、颜射、超长甜蜜 aftercare、各种亲亲哄哄夸夸

020-人鱼：深海标记（强制爱）
时长：50分钟
你本该死在那场风暴里。
冰冷的海水灌入口鼻，意识一点点被吞没。
就在你以为一切结束的时候，有人把你从死亡中拖了回来。
他救了你。
为你取暖，为你处理伤口，让你活下来。
你以为他是个好人，可没想到他根本不是人类。
当人鱼不再是传说中的生物，当你被拖入无尽的深海，你才会明白，活着的代价是什么……
⚠️涉及元素：强制爱、人外（人鱼）、异形生殖器、深海交配、强制口 / 深喉、窒息、群体注视、强制顺从

019-嫂子开门，我是我哥（背德+纯爱）
时长：77分钟
“嫂子开门，我是我哥。”
他用一句玩笑般的谎话，推开了那扇不该打开的门。
他对你示好，关心你的生活，制造浪漫，一点一点填补你心里的空缺——除了那个名义上的身份，他似乎才是更懂你、更适合你的人……
你不是没有拒绝过。只是每一次，他都能用更温柔、也更危险的方式让你动摇。
直到那天——装病、示弱、靠近，他一步步逼近你，把你努力维持的冷静与克制彻底撕开，让你再也无法逃避自己真实的情绪。
黑暗中，追逐、躲藏、呼吸交错——他一步步逼近，不再给你退路。
分不清是主动还是被动，当你们靠近的那一刻，一切早已失控。
⚠️涉及元素：强制、背德、引诱、偷窥、镜前、温馨日常

018-你喂的流浪狗找上门来了！（纯爱）
时长：75分钟
你住的小区里有一只可爱的小流浪狗。和别的狗狗不一样，它第一眼就认定了你。
对别人总是凶巴巴的，只吃你喂的东西，也只会对你撒娇。每次见到你，尾巴都会摇得停不下来。
你一直犹豫要不要把它带回家。一方面担心它更喜欢外面的自由，一方面又怕自己工作太忙，没办法好好陪它。
直到有一天，下起了很大的雨。你一次又一次忍不住看向窗外，才发现自己对那只小狗的担心，早就超过了想象。
就在你犹豫要不要出门去找它的时候——家门忽然被敲响了。
门外那只浑身湿透、可怜巴巴看着你的“人”，居然说——他就是那只一直等着你的小流浪狗。
等等…小狗怎么会说人话？
谁不想拥有一只只对自己撒娇、又黏人又听话的小狗呢？更何况——它还可以变成你的男朋友。
接下来，就和这只只认你一个主人的小狗，一起探索更多只属于你们之间的秘密吧。
⚠️涉及元素：把小狗玩哭、舔胸、后入、女上、大量前戏、温馨日常

017-厨房捣乱，逃跑失败被狠狠爆操（日常）
时长：26分钟
看着正在厨房为你认真做饭的男友，你小心思一动，打算给男友做饭增加一点难度。
手不安分地在他身上游走，在耳边吹气，喘息挑逗。
恶作剧成功你正准备转身逃跑。却被一把抓住，直接拽回怀里。
你心里非常清楚捣乱逃跑失败的后果。不狠狠挨一顿操，是绝对跑不掉了。
⚠️涉及元素：舌吻、揉胸、蹭B、大量前戏

016-穿越进ABO世界（男A女O）
时长：28分钟
【ABO】世界观简介（听前须知）https://stupendous-cobweb-50f.notion.site/ABO-2f505c676dee804f9c46daf566d0a234?source=copy_link
一觉醒来你穿越到与地球几乎无异的平行世界，唯一不同的是这里实行ABO性别体系。你并未察觉自己已成为Omega，更不知道正处于发情期来临的边缘。
像往常一样，你出门买饭，却因发情期突然发作而在街头晕倒，信息素引来路人注目。经营书店的Alpha男主将你救回店中，试图为你注射抑制剂缓解症状。
然而，你对这个世界一无所知，完全不了解ABO的生理规则，更不懂什么是发情期、抑制剂与标记。你以为男主给你打针是意图不轨，因此拼命抗拒，导致错过了使用抑制剂的最佳时机。
随着信息素持续扩散与交织，男主也因长时间接触你的信息素而进入易感期，理智逐渐崩溃。最终在生理本能的驱动下，你们完成了永久标记，从陌生走向绑定，展开一段由误会、本能与责任交织的关系。
⚠️涉及元素：ABO、强制爱

015-男友出差终于回来啦（日常）
时长：21分钟
出差许久的男朋友终于回家啦。
听到熟悉的声音，你迫不及待扑向他怀里，思念和欲望在一瞬间爆发。
紧贴的身体、急切的吻，每一次触碰都点燃深埋的渴望。
熟悉的气息、热烈的心跳，把压抑太久的思念和欲望彻底释放。
这是一个简单的小日常作品，带你体验和男友久别重逢时，最自然、最直接的甜蜜时刻。

014-训犬师的专属调教（SM调教）
时长：35分钟
一通看似寻常的客户电话，一场精心伪装的咨询。
你在电话里描述着一只“非常固执”、“需要被彻底管教”的狗狗，语气急切，甚至试探着询问“鞭子”和“特别结实的项圈”。训犬师耐心回应，心中却逐渐升起疑云——你所描述的细节，似乎超出了寻常宠物的范畴。
直到你独自走进宠物店，直到他凝视着你：“难道…您说的‘它’，不是指的狗，而是您自己？”
空气凝固。你的沉默、紧张、细微的颤抖，已经给出了回答。
你亲口承认，渴望被调教，主动来到这里，请求他像训练一只绝对服从的狗一样训练你。
安全词确立，游戏开始。羞耻与快感交织，每一次疼痛都是服从的证明。你的身体、意志、欲望，全部交付于他。最终，你完全成为他的宠物，归属与支配达到极致。
⚠️涉及元素：SM、D/s、宠物扮演（人宠 / 犬化）、服从训练、心理调教、精神支配、道具玩弄、SP、疼痛调教、羞耻玩法、自愿强制（轻）、高潮控制、爬行

013-欲望列车（背德NTR）
时长：33分钟
白日的机场，喧嚣中隐藏着你们悄悄升起的欲火；深夜的列车，寂静中弥漫着无法抗拒的缠绵。
你在人群中故意挑起男友的注意，明知众目睽睽，却无法抑制久别后的渴望。
当你们偷偷溜进机场男厕所，紧张与刺激交织，每一次轻喘都像火焰，点燃他在隔壁低沉呼吸的渴望。
夜幕下的火车上，男友沉睡疲惫，而他的靠近让你的心跳逐渐加速。从初见的悸动到被迫面对错位的刺激，你与身边每个人的存在都成为身体和心灵的催化剂……
每一次耳语、每一次靠近，都在悄然撕开心理的防线，让你的欲望无可遏制地奔涌。
⚠️涉及元素：轻微强制、耳语挑逗、公共场所、背德、人前

012-微醺的告白（纯爱）
时长：53分钟
「醋意发酵的夜，他借酒壮胆敲开你的房门。」
同窗的献殷勤让他灌醉自己，却终于在醉意中失控——
从生涩表白到激烈交合，从颤抖的指尖到发烫的身体……当行李箱里的小玩具暴露在灯光下，今晚的“毕业考核”才刚刚开始。
💗涉及元素：超长前戏，超多夸夸，AFTERCARE!

011-男生宿舍3（纯爱）
时长：45分钟
「舞会化妆间里的偷情，藏着最汹涌的醋意与真相。」
渣男捧着花在礼堂等待，他却把你拽进无人角落——
你被捏着下巴转向镜子：“看清楚，现在操你的人是谁。”
从报复到心动，从误会到真相，这一次，不再放手了。
⚠️涉及元素：舌吻、舔B、蹭B、大量前戏、粗口羞辱、打屁股、耳语、吃醋、占有欲满分

010-温泉之旅2（背德+3P）
时长：88分钟
「温泉私密双人行，却变成三人游戏。」
白天他是体贴入微的忠犬男友，夜里却窥见最不堪的秘密——当兄弟的手抚上女友的腿，当谎言在缆车中无声蔓延……
这一次的温泉，滚烫的不只是水。
⚠️涉及元素：缆车play、指奸、粗口羞辱、灌肠、当众排泄、3P、肛交、水中窒息、双龙等

009-反击游戏2（3P粗口）
时长：44分钟
「片场之上，他是任人拿捏的男演员，片场之下，他才是掌控一切的导演。」
一场精心策划的“讲戏”，一杯动了手脚的奶茶，你落入他精心设下的情欲陷阱，昔日高高在上的女神，终将成为掌中玩物……
⚠️涉及元素：粗口羞辱、3P、双龙、舔脚（男舔女）、下药、内射

008-男生宿舍2（纯爱NTR）
时长：53分钟
你独自来到KTV买醉，碰巧遇上了他，但他好像没认出你；
你想起了在他宿舍度过的那个下午，酒壮怂人胆，不由自主地扑到他怀里；
然后你把他带到了你的包间，那滋味比你记忆中的还要好，要不是中途你男友的电话突然打来….
之后，你跟他去了那个熟悉的宿舍，今夜的缠绵注定要有第三人的存在！
⚠️涉及元素：女主出轨（有原因）、大量粗口羞辱、激烈行为、SP、强制、吃醋、耳语、三人共处一室（过程1V1）

007-我的班长大人2（纯爱）
时长：47分钟
图书馆自习的午后，校霸男友表面睡觉实则蓄谋已久。一道物理题成了赌注，输的人要乖乖听话。
书本遮掩下，指尖在裙底肆意游走，喘息压抑在安静的书架之间。
“不会的题，我教你……但这里的‘作业’，得由我亲自批改。”
从讲台到书架，从挑衅到守护，这场甜蜜的“欺负”还在继续——因为喜欢你，才想占有你的全部。
⚠️注意事项：图书馆（公共场合）、大量耳语/悄悄话、轻微粗口羞辱、指奸、强制

006-温泉之旅1（背德NTR）
时长：50分钟
假期将至，你和男友计划已久的甜蜜浪漫温泉之旅却因为第三个人的加入变得意外连连，
夜晚的房间里，男友化身小泰迪想跟你做点羞羞的事情，但旁边的床上还睡着另一个人，
当男友睡着后，你决定独自前往温泉，却不知一场危险的角逐即将在水中拉开帷幕……
⚠️注意事项：涉及女主出轨、粗口羞辱、水中做爱

005-你如星光2（纯爱）
时长：44分钟
你是否还记得那年夏天的那个少年，还有你和他之间未完待续的故事？
当时的你们懵懂青涩，他在你的帐篷外守护着你，被蚊子叮了满身的包，你们还一起对流星许愿，然后一场大雨把你们之间的距离拉得更近……
还记得那次露营发生了什么其他有趣的事情吗？这一次，你将重新回到那个夏天，继续谱写和他的故事……
愿我们无论经历多少风雨，都能守护爱情最初的美好。如果你还未曾经历过，那祝福你，属于你的美好即将到来。
💗纯爱纯爱纯爱！！

004-反击游戏1（粗口羞辱）
时长：36分钟
为了挽救生命垂危的妹妹，不惜出卖尊严，委身于手握资源的女导演，却在付出一切后遭到背叛。
在绝望与愤怒的驱使下，他从顺从的玩物转变为复仇者，对曾经操控他命运的女人展开了激烈而残酷的反击。
⚠️涉及元素：反差、大量粗口、侮辱性言语、粗暴行为、QJ、扇脸及其他部位、窒息、体内射尿、强制喷尿、三洞齐开（全程1V1，有道具）等，介意者慎入！

003-暗之花1（末日纯爱）
时长：34分钟
2102年，人类世界爆发了一种极其可怕的丧尸病毒，生存者寥寥无几。你是一名普通的女大学生，被同班同学所救，并跟着他踏上了末日求生之路。
他看似冷酷毒舌，却有一颗温柔善良的心，虽然总嫌弃你是累赘，但一直没有抛下你，还总在危险时刻保护你。
这一天，你们外出寻找物资，不幸被丧尸围困在了一个小超市的仓库里，黑暗的狭小空间拉近了你和他之间的距离，在那一刻，他终于对你吐露了隐藏已久的心声。
⚠️注意事项：开头和结尾有少量丧尸元素（中间无）、少量虐心情节

002-我的班长大人1（粗口）
时长：35分钟
男主：爱逃课爱打架放荡不羁的痞子校霸
女主：爱学习爱劳动品学兼优的漂亮班花
理论上完全不会有交集的人，阴差阳错被安排在同一天值日；
初夏放学后空无一人的教学楼，傍晚蜜色的阳光斜照进安静教室；
两个人会发生什么特别的故事？
表面上看起来又凶又痞的男生内心其实……
平日里自律克制的漂亮女生私底下却……
让你回味那个会因为一个瞬间心动的年纪，重温又甜又涩的青春悸动！
💗心动时刻：让你回味那个会因为一个瞬间心动的年纪，重温又甜又涩的青春悸动！

001-牛郎体验（SM）
时长：23分钟
男主：财阀独子，曾桀骜不驯，冷酷无情
女主：家境殷实，财务自由，纵情享乐的野蛮千金
风光无限的财阀独子遭遇灭顶之灾，被最亲密的人背叛，被最信任的人出卖，家破人亡的他只能带着妹妹流亡异地。
迫于生计的他只能委身泥泞，向女客人提供“定制服务”，配合女客人癖好使用各种小道具进行“戏虐游戏”，这些他只能隐忍，曾经的骄傲也只能死死地压在内心最深处……
谁能拒绝一个男人掩埋自己的骄傲发出的低沉嘶吼呢？
⚠️注意事项：含有男主被道具玩弄、马眼棒、扇脸、跪在地上爬、被命令羞辱等情节！
`.trim();

function parsePaidWorks(raw) {
    const lines = raw.split(/\r?\n/);
    const works = [];
    let current = null;

    lines.forEach((line) => {
        const cleanLine = line.replace(/\*\*/g, "").trim();
        const titleMatch = cleanLine.match(/^(\d{3})-(.+)$/);

        if (titleMatch) {
            if (current) {
                works.push(current);
            }
            current = {
                id: titleMatch[1],
                title: titleMatch[2].trim(),
                duration: "",
                body: []
            };
            return;
        }

        if (!current || !cleanLine) {
            return;
        }

        if (!current.duration && cleanLine.startsWith("时长：")) {
            current.duration = cleanLine.replace("时长：", "").trim();
            return;
        }

        current.body.push(cleanLine);
    });

    if (current) {
        works.push(current);
    }

    return works;
}

const paidWorks = parsePaidWorks(paidWorksRaw);

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
    btn.textContent = item.copyBtnText || item.label || "复制";
    btn.addEventListener("click", async (e) => {
        e.preventDefault();
        const copied = await copyText(item.copyCode);
        showToast(copied ? item.copySuccessText || "已复制" : "复制失败，请手动复制");
    });
    return btn;
}

function createPaidIntroButton(item) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "link-btn";
    btn.textContent = item.label || "查看作品简介";
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        openPaidIntroPanel();
    });
    return btn;
}

function createPaidWorkElement(work) {
    const detail = document.createElement("details");
    detail.className = "paid-work-item";

    const summary = document.createElement("summary");
    summary.className = "paid-work-summary";

    const title = document.createElement("span");
    title.className = "paid-work-title";
    title.textContent = `${work.id} - ${work.title}`;

    const duration = document.createElement("span");
    duration.className = "paid-work-duration";
    duration.textContent = work.duration;

    summary.appendChild(title);
    summary.appendChild(duration);
    detail.appendChild(summary);

    const body = document.createElement("div");
    body.className = "paid-work-body";
    work.body.forEach((line) => {
        const p = document.createElement("p");
        p.textContent = line;
        body.appendChild(p);
    });

    detail.appendChild(body);
    return detail;
}

function openPaidIntroPanel() {
    const iconEl = document.getElementById("modal-icon");
    const titleEl = document.getElementById("modal-title");
    const descEl = document.getElementById("modal-desc");
    const linksRoot = document.getElementById("modal-links");

    if (!linksRoot) return;

    populateGroupIcon(iconEl, "解锁付费作品", "💎", "modal");
    titleEl.textContent = "付费作品简介与试听";
    descEl.textContent = "购买前建议先查看简介和试听片段，确认内容合适后再选择购买方式。";

    linksRoot.innerHTML = "";

    const actions = document.createElement("div");
    actions.className = "modal-link-actions paid-intro-actions";

    const backBtn = document.createElement("button");
    backBtn.type = "button";
    backBtn.className = "link-btn";
    backBtn.textContent = "返回购买入口";
    backBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (activeModalIndex !== null) {
            openModal(activeModalIndex);
        }
    });

    const playerLink = document.createElement("a");
    playerLink.href = "https://ting.jiyu12.com";
    playerLink.className = "link-btn";
    playerLink.textContent = "进入播放器试听";
    playerLink.target = "_blank";
    playerLink.rel = "noopener noreferrer";

    actions.appendChild(backBtn);
    actions.appendChild(playerLink);
    linksRoot.appendChild(actions);

    const introWrap = document.createElement("div");
    introWrap.className = "paid-intro-panel";

    paidWorks.forEach((work) => {
        introWrap.appendChild(createPaidWorkElement(work));
    });

    linksRoot.appendChild(introWrap);
}

function appendItemLinkActions(container, item) {
    if (Array.isArray(item.links) && item.links.length > 0) {
        item.links.forEach((linkItem) => {
            if (!linkItem) {
                return;
            }
            if (linkItem.action === "paidIntro") {
                container.appendChild(createPaidIntroButton(linkItem));
                return;
            }
            if (linkItem.copyCode) {
                container.appendChild(createCopyAction(linkItem));
                return;
            }
            if (isPendingUrl(linkItem.url)) {
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

const MODAL_QUERY_MAP = {
    paid: "解锁付费作品"
};

function openModalFromQuery() {
    const key = new URLSearchParams(window.location.search).get("modal");
    if (!key) return;
    const title = MODAL_QUERY_MAP[key];
    if (!title) return;
    const index = linkGroups.findIndex((group) => group.title === title);
    if (index >= 0) {
        openModal(index);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    renderFolders();
    initModal();
    initBubbles();
    openModalFromQuery();
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
