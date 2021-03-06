import Mock from 'mockjs';
// 式神数据
Mock.mock(/heros/, {
    data: [
    {
        "_id": "591734e24efedb26eb79e391",
        "name": "辉夜姬",
        "cv": "竹达彩奈",
        "rarity": "SSR",
        "type": "辅助",
        "pkExponent": "4",
        "brushMapExponent": "2",
        "awaken": {
            "skill": "技能【火鼠裘】增强，战斗开始立刻施放幻境。",
            "material": [
                {
                    "count": "8",
                    "name": "风转轮·中级"
                },
                {
                    "count": "16",
                    "name": "风转轮·高级"
                },
                {
                    "count": "8",
                    "name": "天雷鼓·中级"
                },
                {
                    "count": "16",
                    "name": "天雷鼓·高级"
                }
            ],
            "crit": {
                "to": "B",
                "from": "B"
            },
            "speed": {
                "to": "A",
                "from": "C"
            },
            "defense": {
                "to": "B",
                "from": "C"
            },
            "life": {
                "to": "S",
                "from": "S"
            },
            "attack": {
                "to": "B",
                "from": "C"
            }
        },
        "heroMatchInfo": {
            "matchRemark": "阵容点评：辉夜姬也可以算做一个打火机，同时她可以扣对方的鬼火，这里建议带狰御魂，青行灯也是带狰，利用反击来消耗对方。独眼小僧带薙魂，挡刀触发反伤的被动，椒图连线，雨女解BUFF 。神乐带通灵冥蝶，用来降低对面治疗用的。",
            "matchInfo": "搭配方案：神乐+辉夜姬、青行灯、椒图、独眼小僧、雨女。",
            "heroMatchImg": "//img.18183.com/uploads/allimg/170122/62-1F122140109.jpg"
        },
        "heroYuxun": {
            "six": "6号位：生命加成",
            "four": "4号位：效果抵抗",
            "two": "2号位：生命加成",
            "matchRemark": "搭配点评：带木魅的作用就是用来减对方鬼火的，非常容易打乱对面的节奏。",
            "matchInfo": "搭配方案一：木魅4件套+效果抵抗2件"
        },
        "heroRemark": {
            "remark": "辉夜姬虽然也是个打火机，但不同的是，她不是主动递火的。回火都是被动，而且看概率的，想用她直接替换打火机座敷的位置是不可能的，不过她可以穿插在各种阵容当中就是。"
        },
        "__v": 0,
        "skills": [
            {
                "upgrade": [
                    "Lv.2技能伤害额外+5%",
                    "Lv.3技能伤害额外+5%",
                    "Lv.4技能伤害额外+5%",
                    "Lv.5技能伤害额外+10%"
                ],
                "effect": "辉夜姬召唤灵气攻击敌人，对目标造成攻击100%伤害。有10%概率打掉对方一点鬼火。",
                "Consumption": 0,
                "name": "蓬莱玉枝"
            },
            {
                "upgrade": [
                    "lv.2 触发概率增至35%",
                    "lv.3 触发概率增至40%"
                ],
                "effect": "辉夜姬受到攻击时，有30%的概率回复1点鬼火，在己方幻境中，使友方单位受到攻击时，同样有几率回复1点鬼火。战斗开始立刻施放幻境。",
                "Consumption": 0,
                "name": "火鼠裘"
            },
            {
                "upgrade": [
                    "lv.2 结界效果强化：增加友方全体单位20%的防御",
                    "lv.3 结界效果强化：增加友方全体单位15%的效果抵抗",
                    "lv.4 结界效果强化：增加友方全体单位25%的防御",
                    "lv.5 结界效果强化：增加友方全体单位20%的效果抵抗"
                ],
                "effect": "辉夜姬施放一个龙首之玉形成的幻境，持续2回合，幻境内增加全体友方单位15%的防御和10%的抵抗效果，同时每个己方单位行动前有67%的概率回复1点鬼火。",
                "Consumption": 2,
                "name": "龙首之玉"
            }
        ]
    },
    ]
});

// 式神视频
Mock.mock(/heroVideo/, {
    data:[
    {
        "_id": "59172cd3f68ccd24e129de85",
        "href": "http://www.18183.com/yys/201705/851769.html",
        "imgSrc": "http://img.18183.com/uploads/allimg/170512/102-1F5121434360-L.jpg",
        "title": "小臣阴阳师：改版后的1C神奶-童女解说",
        "__v": 0,
        "desc": [
            "阴阳师童女在体验服加强了，变成了可以一战的奶妈，下面带来張小臣的视频解说，看看改版的1C神奶-童女技能怎么样。"
        ]
    },
    {
        "_id": "59172d8162121922f7634187",
        "href": "http://www.18183.com/yys/201705/851501.html",
        "imgSrc": "http://img.18183.com/uploads/allimg/170512/102-1F5121044070-L.jpg",
        "title": "跨服斗技视频：最后的高速公鹿就是莽",
        "__v": 0,
        "desc": [
            "阴阳师跨服斗技小鹿男对战视频分享给大家，因为在体验服已经对小鹿男进行了技能加强，所以这是最后的高速公鹿了，请记住我现在超（hen）凶（ruo）的样子！"
        ]
    },
    {
        "_id": "59172d8162121922f7634188",
        "href": "http://www.18183.com/yys/201705/851233.html",
        "imgSrc": "http://img.18183.com/uploads/allimg/170511/102-1F5111A3200-L.jpg",
        "title": "刷御灵副本3层阵容视频：平均2分钟一场",
        "__v": 0,
        "desc": [
            "阴阳师御魂3层通关阵容视频分享给大家，这可能是目前已知的刷御灵最佳阵容，平均2分钟一场快不快？下面来看看各个式神的属性配置。"
        ]
    },
    {
        "_id": "59172d8162121922f7634189",
        "href": "http://www.18183.com/yys/201705/850980.html",
        "imgSrc": "http://img.18183.com/uploads/allimg/170511/102-1F5111415540-L.jpg",
        "title": "大天狗新皮肤【崇天高云】实战演示视频",
        "__v": 0,
        "desc": [
            "阴阳师大天狗新皮肤【崇天高云】实战演示视频分享给大家，可以通关秘闻副本暴风之巅第10层获得，下面来看看长什么样，你喜欢么？"
        ]
    },
    {
        "_id": "59172d8162121922f763418a",
        "href": "http://www.18183.com/yys/201705/850637.html",
        "imgSrc": "http://img.18183.com/uploads/allimg/170511/102-1F5110955430-L.jpg",
        "title": "风暴之巅大天狗副本1-10层通关视频",
        "__v": 0,
        "desc": [
            "阴阳师风暴之巅大天狗副本1-10层通关视频分享给大家，这个不算是教学，是冰冷之海直播时的实况，不过看一遍之后了解一下副本特性，基本上就能过了。除非式神练度差的比较多。"
        ]
    },
    {
        "_id": "59172d8162121922f763418b",
        "href": "http://www.18183.com/yys/201705/849898.html",
        "imgSrc": "http://img.18183.com/uploads/allimg/170510/102-1F5101005440-L.jpg",
        "title": "300%暴伤白狼速控流斗技：核弹箭仙来袭",
        "__v": 0,
        "desc": [
            "阴阳师300%暴伤白狼速控流斗技视频，核弹箭仙来袭。作为单体输出式神，下面来看看白狼在达到300%暴击伤害后会有什么样的输出能力。"
        ]
    },
    {
        "_id": "59172d8162121922f763418c",
        "href": "http://www.18183.com/yys/201705/849577.html",
        "imgSrc": "http://img.18183.com/uploads/allimg/170509/102-1F5091615180-L.jpg",
        "title": "跨服斗技视频：从未见过如此之欧的雪女",
        "__v": 0,
        "desc": [
            "阴阳师跨服斗技视频：从未见过如此之欧的雪女。如果对面不是纯血欧皇，那一定是我非得人神共愤。"
        ]
    },
    {
        "_id": "59172d8162121922f763418d",
        "href": "http://www.18183.com/yys/201705/849222.html",
        "imgSrc": "http://img.18183.com/uploads/allimg/170509/102-1F509105F20-L.jpg",
        "title": "结界突破51级萌新被29级大佬吊打视频",
        "__v": 0,
        "desc": [
            "阴阳师结界突破51级萌新被29级大佬吊打视频，这不是压级，也不是演习，下面来看看真相到底是什么，你是不是也遇到类似的情况呢？"
        ]
    },
    {
        "_id": "59172d8162121922f763418e",
        "href": "http://www.18183.com/yys/201705/848888.html",
        "imgSrc": "http://img.18183.com/uploads/allimg/170508/102-1F50QF6140-L.jpg",
        "title": "4连抽ssr：这才是阴阳师真正的欧洲人",
        "__v": 0,
        "desc": [
            "阴阳师什么样才是真正的欧洲人呢？本篇就来分享下4连抽得到4个ssr式神的视频，虽然声音和画面不同步，但是欧气还是可以来吸一口的。"
        ]
    },
    {
        "_id": "59172d8162121922f763418f",
        "href": "http://www.18183.com/yys/201705/848738.html",
        "imgSrc": "http://img.18183.com/uploads/allimg/170508/102-1F50Q456400-L.jpg",
        "title": "百鬼百科：鸩只是一只鸟却被用来害人",
        "__v": 0,
        "desc": [
            "阴阳师鸩的百鬼百科视频：她是中国汉书中记载的一种毒鸟，所以并不是妖怪仅仅是一种鸟类。虽然是一只鸟，却被用来害人，下面听听她的故事。"
        ]
    },
    {
        "_id": "59172d8162121922f7634190",
        "href": "http://www.18183.com/yys/201705/848554.html",
        "imgSrc": "http://img.18183.com/uploads/170508/102-1F50Q1205B21.jpg",
        "title": "阴阳师憋尿视频：两个奶妈之间的战斗",
        "__v": 0,
        "desc": [
            "阴阳师憋尿局视频加速版：两个奶妈之间的战斗是什么样的呢？下面来看看萤草和惠比寿之间的战争，到底谁才是奶妈界的佼佼者。"
        ]
    },
    {
        "_id": "59172d8162121922f7634191",
        "href": "http://www.18183.com/yys/201705/848168.html",
        "imgSrc": "http://img.18183.com/uploads/allimg/170507/102-1F50G441540-L.jpg",
        "title": "第22章剧情视频重制版:八歧大蛇的秘谋",
        "__v": 0,
        "desc": [
            "阴阳师第22章剧情:八歧大蛇的秘谋视频重制版带给大家，部分对白和剧情调整了，在体验服里面率先更新，感兴趣的可以提前看看剧透。"
        ]
    }
    ]
});
// 式神攻略
Mock.mock(/heroStrategy/, {
    data:[
    {
        "_id": "59172cd3f68ccd24e129de84",
        "href": "http://www.18183.com/yys/201705/852198.html",
        "imgSrc": "http://img.18183.com/uploads/170513/102-1F5131051214S.jpg",
        "title": "阴阳师匣中少女技能怎么样 SR匣中少女点评",
        "__v": 0,
        "desc": [
            "阴阳师匣中少女技能怎么样呢？她值不值得培养?本篇就带来关于SR新式神匣中少女技能的介绍，作为在体验服率先上架的可辅助型式神，她的技能会如何。"
        ]
    },
    {
        "_id": "59172d8062121922f763417c",
        "href": "http://www.18183.com/yys/201705/851819.html",
        "imgSrc": "http://img.18183.com/uploads/allimg/170512/102-1F512150I40-L.jpg",
        "title": "一图流：阴阳师花鸟卷小姐姐培养攻略",
        "__v": 0,
        "desc": [
            "阴阳师花鸟卷作为SSR级的奶妈式神，也是颜值当担，本篇就带来花鸟卷小姐姐的养成攻略，看看技能、御魂、阵容方面都有哪些搭配方式，给大家参考下。"
        ]
    },
    {
        "_id": "59172d8062121922f763417d",
        "href": "http://www.18183.com/yys/201705/851624.html",
        "imgSrc": "http://img.18183.com/uploads/170512/102-1F51212053YQ.jpg",
        "title": "前瞻：阴阳师式神技能大改动将带来什么",
        "__v": 0,
        "desc": [
            "阴阳师体验服迎来了10个式神的技能改动，那么这将带来什么影响呢？本篇就来分享下科普达人@燃玉的前瞻分析，看看各式神的技能说明。"
        ]
    },
    {
        "_id": "59172d8062121922f763417e",
        "href": "http://www.18183.com/yys/201705/851533.html",
        "imgSrc": "http://img.18183.com/uploads/allimg/170512/102-1F5121054270-L.jpg",
        "title": "50级低练度阵容通关雨女副本10层攻略",
        "__v": 0,
        "desc": [
            "阴阳师雨女副本10层需要一定的练度才能通关。本篇就来分享50级低练度阵容，总结下就是这个阵容因为不太缺火，所以容错率还挺高的。"
        ]
    },
    {
        "_id": "59172d8062121922f763417f",
        "href": "http://www.18183.com/yys/201705/850845.html",
        "imgSrc": "http://img.18183.com/uploads/allimg/170511/102-1F5111112490-L.jpg",
        "title": "阴阳师妖琴师攻略：技能/御魂/阵容解读",
        "__v": 0,
        "desc": [
            "阴阳师妖琴师是一个伪拉条式神，本篇攻略就来总结下妖琴师的技能、御魂、阵容，看看妖琴师的余音有什么样的妙用，在这个版本会有什么样的表现和技巧。"
        ]
    },
    {
        "_id": "59172d8062121922f7634180",
        "href": "http://www.18183.com/yys/201705/850627.html",
        "imgSrc": "http://img.18183.com/uploads/allimg/170511/102-1F5110944370-L.jpg",
        "title": "冰冷之海:5月10日式神技能调整实测报告",
        "__v": 0,
        "desc": [
            "5月10日阴阳师体验服式神技能调整实测报告带给大家，由解说大神@冰冷之海进行详细说明，看看这次的ssr加强、雪女削弱等式神调整都有哪些影响，给大家参考下。"
        ]
    },
    {
        "_id": "59172d8062121922f7634181",
        "href": "http://www.18183.com/yys/201705/850582.html",
        "imgSrc": "http://img.18183.com/uploads/allimg/170510/102-1F5102304140-L.jpg",
        "title": "阴阳师大天狗副本暴风之巅1-10层攻略",
        "__v": 0,
        "desc": [
            "阴阳师大天狗副本暴风之巅1-10层通关阵容攻略分享给大家，奖励大天狗皮肤【崇天高云】。下面来看看大天狗副本1-10层都有哪些奖励、难点和通关技巧。"
        ]
    },
    {
        "_id": "59172d8062121922f7634182",
        "href": "http://www.18183.com/yys/201705/850568.html",
        "imgSrc": "http://img.18183.com/uploads/allimg/170510/102-1F5101T4280-L.jpg",
        "title": "阴阳师现世悬赏怎么玩 现世妖怪在哪里打",
        "__v": 0,
        "desc": [
            "阴阳师现世悬赏怎么玩？阴阳师现世妖怪在哪里打？本篇就带来新版本现世悬赏的玩法奖励说明，看看这个新的悬赏玩法都有哪些。"
        ]
    },
    {
        "_id": "59172d8062121922f7634183",
        "href": "http://www.18183.com/yys/201705/850123.html",
        "imgSrc": "http://img.18183.com/uploads/allimg/170510/102-1F5101123250-L.jpg",
        "title": "以津真天和鸩哪个好 两大SR新式神对比",
        "__v": 0,
        "desc": [
            "阴阳师以津真天和鸩哪个好？作为两大SR新式神，都是带有羽毛的。本篇就来对比下以津真天和鸩的技能和实战效果，看看哪个给好用。"
        ]
    },
    {
        "_id": "59172d8062121922f7634184",
        "href": "http://www.18183.com/yys/201705/849621.html",
        "imgSrc": "http://img.18183.com/uploads/allimg/170509/102-1F5091A4090-L.jpg",
        "title": "阴阳师6000个御魂纳奉怎么样快速清理",
        "__v": 0,
        "desc": [
            "阴阳师御魂纳奉是用来清理多余的御魂，6000个上限的御魂怎么样快速清理呢？本攻略针对有大量御魂不知道怎么清理的老玩家，同时也欢迎萌新来看。"
        ]
    },
    {
        "_id": "59172d8062121922f7634185",
        "href": "http://www.18183.com/yys/201705/849170.html",
        "imgSrc": "http://img.18183.com/uploads/allimg/170509/102-1F509102Q00-L.jpg",
        "title": "鸩斗技实战攻略：6星鸩对战各阵容技巧",
        "__v": 0,
        "desc": [
            "阴阳师鸩在斗技里面的实战攻略心得分享给大家，看看在6星鸩对战各阵容都有哪些玩法技巧和机制说明，给在斗技中喜欢鸩的玩家参考下。"
        ]
    },
    {
        "_id": "59172d8062121922f7634186",
        "href": "http://www.18183.com/yys/201611/738482.html",
        "imgSrc": "http://img.18183.com/uploads/allimg/161118/102-16111Q552370-L.jpg",
        "title": "阴阳师斗技阵容合集 各大流派阵容汇总",
        "__v": 0,
        "desc": [
            "阴阳师斗技阵容搭配非常多样化，都是随着版本的变化而改变。18183小编就带来各大流派阵容的合集，看看每个流派的玩法说明和式神选择。"
        ]
    }
    ]
})
