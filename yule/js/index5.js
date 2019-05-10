// 初始化
function my$(element) {
    return document.querySelectorAll(element);
}
function getStyle(element, sx) {
    return getComputedStyle(element, null)[sx] || element.currentStyle[sx];
}
function getScroll(){
    return document.body.scrollTop||document.documentElement.scrollTop;
}
function animation(element, target, stepm, fn) {
    clearInterval(element.anima);
    //创建函数
    //过度动画
    element.anima = setInterval(function () {
        var flag = true;
        for (var key in target) {
            if (key == 'opacity') {
                var count = 100 * (getStyle(element, key));
                var step = stepm/2;
                step = count < target[key] * 100 ? step : -step;
                count += step;
                if (Math.abs(target[key] * 100 - count) <= Math.abs(step)) {
                    count = target[key] * 100;
                }
                element.style[key] = count / 100;
                if (target[key] * 100 != count) {
                    flag = false;
                }
            }
            if(key =='scrollTop'){
                var count = getScroll();
                var step = (target[key]-getScroll())/10;
                step = step>0? Math.ceil(step) : Math.floor(step);
                count += step;
                element[key] = count;
                if (target[key] != count) {
                    flag = false;
                }
            }
            else {
                var count = parseInt(getStyle(element, key));
                var step = stepm;
                step = count < target[key] ? step : -step;
                count += step;
                if (Math.abs(target[key] - count) <= Math.abs(step)) {
                    count = target[key];
                }
                element.style[key] = count + 'px';
                if (target[key] != count) {
                    flag = false;
                }
            }
        }
        if (flag) {
            clearInterval(element.anima);
            if (fn) {
                fn();
            }
        }
    }, 20);
}
(function () {
    var index = 0;
    var zd;
    var zanT = true;
    // banner轮播图开始
    var banner_img = [{ name: 'yule-banner1.jpg', href: '#', txt: '唱作大神李荣浩入驻北京杜莎夫人蜡像馆 为音乐之路再添新里程碑' }, { name: 'yule-banner2.jpg', href: "#", txt: '《​复仇者联盟4：终局之战》逆转一切,不惜一切代价！' }, { name: 'yule-banner3.jpg', href: "#", txt: '《大侦探皮卡丘》首映好评如潮！双雷同框实力卖萌' }, { name: 'yule-banner4.jpg', href: "#", txt: '电影《催眠.裁决》是人性的扭曲还是道德的沦丧' }, { name: 'yule-banner5.jpg', href: "#", txt: '品冠专辑限定演唱会幸福起航' }];
    var banner_top = my$('.banner-top')[0];
    var banner_top_ul = banner_top.querySelector('ul');
    var imgWidth = parseInt(getStyle(banner_top, 'width'));
    var items = banner_top.querySelector('.items');
    //设置轮播图片与下牌按钮
    for (var i = 0; i < banner_img.length; i++) {
        var li = document.createElement('li');
        li.innerHTML = '<a href=' + banner_img[i]['href'] + '>' + '<img src="' + '../images/' + banner_img[i]['name'] + '"' + '>' + '</a>'
        var aList = document.createElement('a');
        aList.href = banner_img[i].href;
        aList.innerText = banner_img[i]['txt'];
        var abg = document.createElement('a');
        abg.href = banner_img[i].href;
        li.appendChild(aList);
        li.appendChild(abg);
        banner_top_ul.appendChild(li);
        var a = document.createElement('a');
        a.href = banner_img[i].href;
        a.setAttribute('index', i);
        items.appendChild(a);
    }
    var last_li = banner_top_ul.firstElementChild.cloneNode(true);
    banner_top_ul.appendChild(last_li);
    //设置前后按钮
    var anniu_prev = banner_top.querySelector('.anniu-prev');
    var anniu_next = banner_top.querySelector('.anniu-next');
    banner_top.onmouseover = function (e) {
        anniu_prev.style.display = 'block';
        anniu_next.style.display = 'block';
        if (e.target == anniu_prev) {
            anniu_prev.className = 'anniu-prev anStatic';
        }
        if (e.target == anniu_next) {
            anniu_next.className = 'anniu-next anStatic';
        }
        clearInterval(zd);
    }
    banner_top.onmouseout = function (e) {
        anniu_prev.style.display = 'none';
        anniu_next.style.display = 'none';
        if (e.target == anniu_prev) {
            anniu_prev.className = 'anniu-prev';
        }
        if (e.target == anniu_next) {
            anniu_next.className = 'anniu-next';
        }
        zdPlay();
    }
    //设置一排小按钮事件
    var items_a = items.querySelectorAll('a');
    var imgList = banner_top_ul.querySelectorAll('li');
    items_a[0].className = 'active';
    //改良轮播图  BUG已完全修复
    items.onmouseover = function (e) {
        if (e.target != items) {
            if (zanT) {
                zanT = false;
                var tou = index;
                items_a[tou].className = '';
                e.target.className = 'active';
                index = e.target.getAttribute('index');
                if (Math.abs(index - tou) > 1) {

                    if (index > tou) {
                        var clone = imgList[index].cloneNode(true);
                        tou++;
                        var fn = function () {
                            zanT = true;
                            banner_top_ul.removeChild(banner_top_ul.children[tou]);
                            banner_top_ul.style.left = -index * imgWidth + 'px';
                        }
                        banner_top_ul.insertBefore(clone, banner_top_ul.children[tou]);
                        animation(banner_top_ul, { left: -tou * imgWidth }, 40, fn);
                    }
                    else {
                        var clone = imgList[tou].cloneNode(true);
                        banner_top_ul.insertBefore(clone, banner_top_ul.children[parseInt(index) + 1]);
                        var fn = function () {
                            zanT = true;
                            banner_top_ul.removeChild(banner_top_ul.children[parseInt(index) + 1]);
                        }
                        banner_top_ul.style.left = (-index - 1) * imgWidth + 'px';
                        animation(banner_top_ul, { left: -(index * imgWidth) }, 40, fn);
                    }
                }
                else {
                    animation(banner_top_ul, { left: -index * imgWidth }, 40, function () { zanT = true });
                }
            }
        }
    }
    //前后按钮事件
    anniu_next.onclick = function () {
        if (zanT) {
            items_a[index].className = '';
            index++;
            zanT = false;
            if (index >= items_a.length) {
                items_a[0].className = 'active';
                var fn = function () {
                    banner_top_ul.style.left = '0px';
                    index = 0;
                    zanT = true;
                }
                animation(banner_top_ul, { left: -index * imgWidth }, 40, fn);
            }
            else {
                items_a[index].className = 'active';
                animation(banner_top_ul, { left: -index * imgWidth }, 40, function () { zanT = true });
            }
        }
    }
    anniu_prev.onclick = function () {
        if (zanT) {
            zanT = false;
            items_a[index].className = '';
            index--;
            if (index < 0) {
                index = items_a.length;
                banner_top_ul.style.left = -index * imgWidth + 'px';
                index--;
            }
            items_a[index].className = 'active';
            animation(banner_top_ul, { left: -index * imgWidth }, 40, function () { zanT = true });
        }
    }
    function zdPlay() {
        clearInterval(zd);
        zd = setInterval(function () {
            anniu_next.onclick();
        }, 3000);
    };
    zdPlay();
    // 给轮播图添加动画
    // 轮播图结束
    // 右边顶级推荐开始
    var right_Top_Tj = [{ innerText: '蔡徐坤海外公演主题曲《Bigger》炸裂上线', href: '#' },
    { innerText: '陈立农寻找心底最深处的另“一半”', href: '#' },
    { innerText: '林彦俊《刚好的伤口》MV温暖上线', href: '#' },
    { innerText: '马天宇《观心》湛蓝系写真曝光', href: '#' },
    { innerText: '百大金曲百万爱心晚会在沪举办', href: '#' },
    { innerText: '“漫威之父”斯坦·李去世', href: '#' }
    ];

    function getElementList(father, son, sj, smallSon) {
        if (smallSon.length > 1) {
            for (var i = 0; i < sj[0].length; i++) {
                var child = document.createElement(son);
                father.appendChild(child);
                for (var j = 0; j < smallSon.length; j++) {
                    var smallS = document.createElement(smallSon[j]);
                    for (var k in sj[j][i]) {
                        smallS[k] = sj[j][i][k];
                    }
                    child.appendChild(smallS);
                }
            }
        }
        else {
            for (var i = 0; i < sj.length; i++) {
                var child = document.createElement(son);
                father.appendChild(child);
                if (smallSon.length == 1) {
                    var sonSon = document.createElement(smallSon);
                    for (var key in sj[i]) {
                        sonSon[key] = sj[i][key];
                    }
                    child.appendChild(sonSon);
                }

                else {
                    for (var key in sj[i]) {
                        child[key] = sj[i][key];
                    }
                }
            }
        }
    };
    //创建rightContent推荐顶部list列表
    var tuiJTop_ul = my$('.tuiJTop_ul')[0];
    getElementList(tuiJTop_ul, 'li', right_Top_Tj, 'a');
    my$('.TopImg')[0].onmouseenter = function () {
        my$('.tuiJTop_ul li a')[0].className = 'action';
    }
    my$('.TopImg')[0].onmouseleave = function () {
        my$('.tuiJTop_ul li a')[0].className = '';
    }
    //娱乐头条列表
    var yuletoutiao = [[{ href: '#', innerText: '胡彦斌新歌变最甜“告白体”： 只做你的“宝藏男友”' }, { href: '#', innerText: '孙燕姿二宝性别卖关子 小名曝光萌炸' }, { href: '#', innerText: '王大陆自嘲“太傻”吻黑张一山' },
    { href: '#', innerText: '陈翔出轨影片流出！带妹回家“被女友毛晓彤撞见' }, { href: '#', innerText: '张柏芝林志颖再度合体 现身街头拍摄新歌MV' }],
    [{ innerText: '全能唱作歌手胡彦斌今年在音乐上持续发力，保持着一月一首新歌发布的高产节奏，十月份的全新创作单曲《宝藏男友》也按照于歌迷的约定于10月30日上线。 ”' }, { innerText: '对于粉丝好奇的二宝性别，孙燕姿语带玄机表示之后再分享，但透露已取好小名「Poppy」。' },
    { innerText: '高能回归立志变成熟，王大陆自黑“上季太傻”。《高能少年团》第二季的五位少年带着满满激情和正能量集结，将在冒险中感受成长，在成长中体验冒险。' },
    { innerText: '毛晓彤近日首度提及这段恋情，她说2人分手“另有原因”，在分手后的2个月里，整个人处于“懵的”状态' }, { innerText: '张柏芝演出过《喜剧之王》、《我家有一只河东狮》（《河东狮吼》）等经典电影，昨日她拖著行李箱现身台北东区街头，任贤齐也在场，据悉是为了替好友林志颖的MV跨刀演出而现身。' }
    ]
    ];
    var ylttUl = my$('.ylttUl')[0];
    getElementList(ylttUl, 'li', yuletoutiao, ['a', 'p']);

    //华语模块批量生产
    var huaYu = my$('.huaYu')[0];
    var huayuList = [[
        { href: '#', innerText: 'S.H.E复古卡带机开箱！　等3个月掉时光隧道' },
        { href: '#', innerText: '王子邱胜翊推抒情MV 合作林予晞同台尬戏' },
        { href: '#', innerText: '付辛博颖儿喜添宝宝 网友算八字陈学冬难过' },
        { href: '#', innerText: '阿信生日晒童年旧照 感叹人生珍贵有得有失' },
        { href: '#', innerText: '邓紫棋靠绯闻男友画面甜 戴情侣帽合照' },
        { href: '#', innerText: '杨丞琳为工作付出代价 “祈祷不要开刀”' },
        { href: '#', innerText: '被爆与辣妹狂欢 贺军翔发声明:与真实相悖' },
        { href: '#', innerText: 'SpeXial新辑帅炸！4人将约满恐成告别作' },
        { href: '#', innerText: '陶喆出道20周年重新诠释《爱，很简单》' },
        { href: '#', innerText: '年度闺蜜阿肆郭采洁 N个甜蜜瞬羡煞旁人' },
        { href: '#', innerText: '青春不再！F4朱孝天暴肥惊见双下巴、油脸！' },
        { href: '#', innerText: 'Ella与金马奖导演联手 携新作回归大屏幕' },
        { href: '#', innerText: '章子怡现身母校 与师妹张雪迎合影似姐妹花' },
        { href: '#', innerText: '萧煌奇浪漫携手安心亚 甜蜜合唱婚礼歌曲' },],
    [{ innerText: '女子天团S.H.E刚满16周年，9月份开直播和粉丝一同庆生，当时就宣布了发行“16周年纪念卡带”的好消息，而经过了3个月的预购、制作终于完成，送到每一个购买者的手中，记者也收到购买成品，兴奋开箱。' },
    { innerText: '王子邱胜翊首发个人EP《Attention！》获得歌迷热烈支持，EP热销架上扫空紧急追加再出货，而让歌迷期待已久的第二波抒情主打《我怎么可能与你无关》MV首播，MV筹划期间，邱胜翊与企划一同参与选角讨论，事前还到处取经广纳各方意见，甚至询问好友曾之乔的意见。' },
    { innerText: '付辛博和颖儿在微博晒照公开已有宝宝。颖儿发文称：“感谢宝贝的到来，今年最好的生日礼物”，随后付辛博转发：“生日快乐，从今天起我有两个宝贝啦”。' },
    { innerText: '12月6日，五月天阿信晒出童年时与妈妈的合照纪念自己的生日。照片中，他留着短发，靠在妈妈的身上。陈妈妈对着镜头露出灿烂的微笑，看上去十分富有神采。' },
    { innerText: '香港歌手邓紫棋9月爆出新恋情，被拍到富二代兼造型师Mark Ngai到东京秘密约会，感情进展备受外界好奇。她30日晚间被朋友晒出一张合照，素颜甜靠男方，还双双戴着情侣帽，吸引大批网友涌入祝福。' },
    { innerText: '杨丞琳出道18年，因工作关系得常穿高跟鞋，造成拇指外翻的毛病，她今在ins晒出脚穿矫正器的照片，并无奈写道：「嗯...最近开始戴矫正器了！拇指外翻真的很痛苦，赤脚都会刺痛！没办法，职业病啊！' },
    { innerText: '贺军翔工作室29日发声明严肃澄清，指“未经查证之报导，更与真实严重相悖，本工作室仅代贺军翔先生，对该不实报导表示严正之抗议”。' },
    { innerText: '为了这张专辑形象概念照，SpeXial特别拉出3天时间拍摄，一路到桃园、宜兰等地拍摄，连续几天休息不到三小时，天未亮便出发至目的地准备，问他们会不会辛苦？团员皆都表示：“不会！我们很珍惜在一起工作的气氛，就算再累，一看到彼此，精神都来了！”' },
    { innerText: '陶喆出道20周年，将发新专辑，重新诠释1993年创作的《爱，很简单》，自曝20年前曾把这首歌拿给很多唱片公司及艺人听，盼能有伯乐赏识，没想到却不被看好、没人想买这首歌，一直到1997年出道靠自己实力唱红《爱，很简单》。' },
    { innerText: '在前不久发布的《世界上的另一个我》的MV中，郭采洁，阿肆首次同框，就联合发糖。拥抱，自拍，背靠背坐着聊天……一系列亲密互动让粉丝疯狂为这对“年度闺蜜”打电话。然而各位殊不知两位小姐姐在拍摄现场比MV更甜。用郭采洁的话来说就是“两人第一次见面，就紧密的相处了。” 究竟两人幕后有多紧密？别着急，《世界上的另一个我》MV花絮短片今日曝光，为你揭晓郭采洁与阿肆第一次网友见面的N个甜蜜瞬间。' },
    { innerText: '台湾偶像团体F4近况陆续曝光，先前言承旭和林志玲在国外密会一事，引起不少人关注，周渝民边拍戏边当奶爸，吴建豪则是忙接代言、出席活动，而第4人朱孝天在26日被直击现身江苏无锡，他参加商演开金口唱歌，不过却有网友发现久违的他竟然身形暴肥、发福，打光时脸部甚至油光满面，引起一阵讨论。' },
    { innerText: '作为娱乐圈永远不可能被忽视的焦点之一，一年一度的金马奖成为关注华语电影的人们的影坛盛世，11月25日第54届金马奖盛大举行，转而大家又会期待在2018年又有什么好的华语电影会和观众见面。 据悉，2018年影视歌主持多元发展 Ella陈嘉桦将携手金马奖导演苏哲贤再添力作《超级码力》，苏哲贤导演曾在2010年以《街舞狂潮》荣获金马奖， Ella陈嘉桦曾在2016年以电影《缺角一族》荣获相当于最佳女演员奖的大阪电影节“药师真珠演员赏”，两位的合作可谓强强联合，实力不容小觑。' },
    { innerText: '11月26日，章子怡新闻发言官方微博发布一组章子怡现身母校中央戏剧学院的照片，一袭黑衣的章子怡气场十足，尽显国际巨星范儿。章子怡和小师妹张雪迎合影，张雪迎手拿自拍杆，见到国际巨星师姐也是高兴得合不拢嘴。38岁的章子怡和20岁的张雪迎合影，两人站在一起像足姐妹花。' },
    { innerText: '华纳音乐旗下国台语双声带“金曲歌王”萧煌奇（Ricky）新歌《咱结婚好吗》是台语歌坛难得一见的浪漫甜蜜情歌，他携手安心亚一起对唱，两人更一起拍摄音乐录像带，打扮成60年代的摩登复古风，萧煌奇说：“当初写这首歌，是想着安心亚量身定做，感觉这首歌很适合贤慧、又有幸福感的女生，在我心目中心亚就是这样的幸福女神。”' },]];
    getElementList(huaYu, 'li', huayuList, ['a', 'p']);
    //海外模块批量生产
    var haiWai = my$('.haiWai')[0];
    var haiWaiList = [[
        { href: '#', innerText: '刘亚仁卷入舌战纠纷 被TOP案吸毒女留言怒怼' },
        { href: '#', innerText: '赛琳娜染金发独自参加全美音乐奖 比伯点赞暗发糖' },
        { href: '#', innerText: '防弹少年团破吉尼斯纪录 微醺直播呆萌可爱' },
        { href: '#', innerText: '黄致列确定9日发新曲 加入11月歌坛大战' },
        { href: '#', innerText: 'SJ回归新专辑在即 成员私下拍摄花絮公开' },
        { href: '#', innerText: '原少女时代徐贤成立工作室 个人独立活动' },
        { href: '#', innerText: '李钟硕秀智《当你沉睡时》蝉联收视冠军' },
        { href: '#', innerText: 'EXID确定11月7日发新专辑 率智参与录音新曲' },
        { href: '#', innerText: '韩网友票选最差公司 YMC第一YG、SM上榜' },
        { href: '#', innerText: '金桐俊坦言偶运会超累 微笑称后辈都该去' },
        { href: '#', innerText: '2月公开恋情 传Lady Gaga与经纪人男友订婚？' },
        { href: '#', innerText: '宋一国带三胞胎走红毯 宝贝变小绅士超萌' },
        { href: '#', innerText: 'GOT7新专辑《7 for 7》公开日程及歌单' },
        { href: '#', innerText: 'INFINITE前成员HOYA签新东家与池昌旭同门' },
    ],
    [
        { innerText: '与T.O.P一起吸食大麻被抓的练习生韩瑞熙与演员刘亚仁SNS上进行舌战。29日，韩瑞熙留言：“大叔！我真的是很好奇才这样，宝贵而宝贵的高三女（部分网站称援交和卖淫未成年少女的称呼）？那是什么呀？真的很好奇啊，我现在正处好奇心很多的年龄…嘿嘿还有那时大叔是25岁。”' },
        { innerText: '25岁的歌手赛琳娜·戈麦兹（Selena Gomez）献出了自己的复出首唱，并以一头狂野的金色波波头卷发亮相，一改之前甜美的甜美黑发形象。这是赛琳娜自去年9月接受肾移植手术后的首次表演，她在颁奖礼上演唱了自己的新歌《狼》（Wolves）。' },
        { innerText: '防弹少年团受邀在全美音乐奖表演，不但事前上遍通告做宣传，更在现场俨然成为“人形立牌”被许多欧美歌手邀请合照，精彩的演出和现场粉丝们的超大应援声都引以话题，在当地掀起一股BTS效应。' },
        { innerText: '黄致列所属经纪公司2日表示：新曲是与此前发行的《每天听的歌》一样的感性抒情曲，是黄致列展现他音乐色彩的延长线。”' },
        { innerText: 'Super Junior成员艺声在微博晒出各位成员为新专辑拍摄的花絮照。Super Junior正规8辑《PLAY》将于6日正式发行。' },
        { innerText: '徐珠贤近日正在与某广告公司代表商议成立她自己的经纪公司，这名广告公司代表从多年以前开始就与少女时代有过多次合作，深得徐珠贤的信赖，不久前与SM公司合约期满后没有选择续约的徐贤很有可能在他的帮助下成立自己的经纪公司。' },
        { innerText: '据韩国收视率调查公司最新发布数据，昨晚播出的两集《当你沉睡时》分别创下了7.3%和8.9%的收视率，这一成绩与该剧上周7.9%和8.9%的收视率基本持平，让《当你沉睡时》再次夺得了韩国周三周四剧收视冠军。' },
        { innerText: '公司方面表示：“率智此次也参与了新专辑的录制，但是否参加打歌活动还需继续观察她的身体状况，目前无法确定。”' },
        { innerText: '韩国网络论坛instiz就票选“最差的经纪公司”，管理Wanna One的YMC获得2成投票率获得第一。' },
        { innerText: '金桐俊偶像男团ZE：A帝国之子出身，近来转战拍戏，15日举办FM。他对粉丝有求必应，一听到“想看腹肌”就大方掀开衬衫，放送六块肌不手软。' },
        { innerText: '知情人称：“克里斯蒂安捧着超大钻戒求了婚，Gaga虽点头却还没公开晒出戒指，因为她还没准备好发表声明。”' },
        { innerText: '第22届釜山国际电影节于10月12日晚开幕，宋一国和三胞胎大韩 、民国、万岁绅士范亮相。' },
        { innerText: '所属社JYP方面之前公开了GOT7的回归预告，预告末尾的"7 FOR 7"和"2017.10.10"表明了回归日期。随后又陆续公布新专《7 for 7》回归日程以及歌单。期待主打曲《You Are》！' },
        { innerText: 'Glorious Ent方面26日正式对外宣布，已经与李浩沅签订了专属合约。Glorious Ent表示：“李浩沅曾通过出演多部作品在演技方面获得认可，也是兼具演唱、Rap、舞蹈等全面实力的歌手。”' },
    ]];
    //海外 华语切换
    getElementList(haiWai, 'li', haiWaiList, ['a', 'p']);
    my$('.quanqiu ul')[1].style.display = 'block';
    for (var i = 1; i < my$('.quanqiu ul').length; i++) {
        my$('.quanAnd')[i - 1].index = i;
        my$('.quanAnd')[i - 1].onmouseenter = function () {
            for (var j = 1; j < my$('.quanqiu ul').length; j++) {
                my$('.quanqiu ul')[j].style.display = 'none';
                my$('.quanAnd')[j - 1].className = 'quanAnd';
            }
            my$('.quanqiu ul')[this.index].style.display = 'block';
            this.className = 'quanAnd quan_top';
        }
    }
    //台哥报报 和台哥专栏放大效果
    for (var i = 0; i < my$('.bg').length; i++) {
        my$('.bg')[i].onmouseenter = function () {
            this.className = 'anima bg';
        }
        my$('.bg')[i].onmouseleave = function () {
            this.className = 'bg';
        }
    }
    // 你好八卦模块批量
    var niHaoBaGua = my$('.niHaoBaGua ul')[0];
    var niHaoBaGua_list = [{ href: '#', innerHTML: '1&nbsp;&nbsp;&nbsp;老艺术家朱时茂再度偷腥？与美女上演车吻大戏' }
        , { href: '#', innerHTML: '2&nbsp;&nbsp;&nbsp;什么？炎亚纶自爆曾因为抑郁症服药' },
    { href: '#', innerHTML: '3&nbsp;&nbsp;&nbsp;再度被拍到一同过夜，林更新王丽坤这次跑不了了吧？' },
    { href: '#', innerHTML: '4&nbsp;&nbsp;&nbsp;李晟晒孕肚宣布怀孕，小燕子和尔康要当爸妈啦' },
    { href: '#', innerHTML: '5&nbsp;&nbsp;&nbsp;艾玛斯通与新男友低调约会 搂肩四目相对显恩爱' },
    { href: '#', innerHTML: '6&nbsp;&nbsp;&nbsp;青春逃不了杀猪刀，朱孝天现在长这样……' },
    { href: '#', innerHTML: '7&nbsp;&nbsp;&nbsp;什么？神曲《小苹果》涉嫌抄袭？王太利怒了！' },
    { href: '#', innerHTML: '8&nbsp;&nbsp;&nbsp;潘玮柏澳洲同游吴昕被抓到惹？假戏真做吗' },
    { href: '#', innerHTML: '9&nbsp;&nbsp;&nbsp;与其他成员闹不和退出少女时代？徐贤这样回答' },
    { href: '#', innerHTML: '10&nbsp;&nbsp;&nbsp;王思聪把张靓颖认成蕾哈娜？？' },
    ];
    getElementList(niHaoBaGua, 'li', niHaoBaGua_list, 'a');
    // 明星圈最新模块
    var zuiXin = my$('.zuiXin')[0];
    var zuiXin_list = [
        [{ href: '#', innerHTML: '<img src="../images/zuix3.jpg">' }, { href: '#', innerHTML: '<img src="../images/zuix4.jpg">' },
        { href: '#', innerHTML: '<img src="../images/zuix1.jpg">' }, { href: '#', innerHTML: '<img src="../images/zuix2.jpg">' }],
        [{ href: '#', innerText: '品冠2019《幸福指南编辑部》首揭幕  专辑限定演唱会联动起航' },
        { href: '#', innerText: '创作俱佳实力新人文慧如、林恺伦Karencici 畅谈新专 最新榜单为生活发声' },
        { href: '#', innerText: '视感升级！娜扎封面大片玩转新气质  盐系猫眼妆清爽自然' },
        { href: '#', innerText: '高艳津子携北京现代舞团寻梦北京“北京·我们”一场追逐梦想的故事 ' }],
        [{ innerText: '昨天 13:23' }, { innerText: '前天 14:01' }, { innerText: '前天 13:10' }, { innerText: '前天 13:05' }],
        [{ href: '#', innerText: '品冠' }, { href: '#', innerText: '文慧如' }, { href: '#', innerText: '娜扎' }, { href: '#', innerText: '高艳津子' }]
    ];
    getElementList(zuiXin, 'li', zuiXin_list, ['a', 'a', 'span', 'a']);
    // 星访谈批量化
    var xinFTan = my$('.xinFTan')[0];
    var xinFTan_list = [[
        { href: '#', innerHTML: '<i></i>Star!调查团 KARD专访', className: 'xinFBT' },
        { href: '#', innerHTML: '<i></i>Star!调查团 - MONSTA X独家专访', className: 'xinFBT' },
        { href: '#', innerHTML: '<i></i>罗志祥|让成龙变胆小的戏精本精', className: 'xinFBT' },
        { href: '#', innerHTML: '<i></i>ASTRO专访|阿童木幼儿园正式开业', className: 'xinFBT' },
        { href: '#', innerHTML: "<i></i>STAR!调查团 圣诞特辑 NU'EST W", className: 'xinFBT' },
        { href: '#', innerHTML: '<i></i>小十七最爱中国美食大盘点', className: 'xinFBT' },
        { href: '#', innerHTML: '<i></i>别叫我霸道总裁 - 秦俊杰专访', className: 'xinFBT' },
    ],
    [{ href: '#', innerHTML: '<img src="../images/xft1.jpg">', className: 'xinFTP' },
    { href: '#', innerHTML: '<img src="../images/xft2.jpg">', className: 'xinFTP' },
    { href: '#', innerHTML: '<img src="../images/xft3.jpg">', className: 'xinFTP' },
    { href: '#', innerHTML: '<img src="../images/xft4.jpg">', className: 'xinFTP' },
    { href: '#', innerHTML: '<img src="../images/xft5.jpg">', className: 'xinFTP' },
    { href: '#', innerHTML: '<img src="../images/xft6.jpg">', className: 'xinFTP' },
    { href: '#', innerHTML: '<img src="../images/xft7.jpg">', className: 'xinFTP' }]];
    getElementList(xinFTan, 'li', xinFTan_list, ['a', 'a']);
    // 初始化星访谈事件
    var num = 0;
    my$('.xinFBT')[0].className = 'xinFBT action';
    my$('.xinFBT i')[0].className = 'xdBg';
    my$('.xinFTP')[0].style.display = 'block';
    for (var i = 0; i < my$('.xinFBT').length; i++) {
        my$('.xinFBT')[i].index = i;
        my$('.xinFBT')[i].onmouseenter = function () {
            my$('.xinFBT')[num].className = 'xinFBT';
            my$('.xinFTan i')[num].className = '';
            my$('.xinFTP')[num].style.display = 'none';
            this.className = 'xinFBT action';
            num = this.index;
            my$('.xinFBT i')[this.index].className = 'xdBg';
            my$('.xinFTP')[this.index].style.display = 'block';
        }
    }
    //初始化台哥高清 BUG已解决
    var tgHdImg = my$('.tgHdImg')[0];
    var tgHdImg_list = [{ href: '#', innerHTML: '<img src="../images/tg1.jpg"><span>化身精灵优雅轻盈</span>' },
    { href: '#', innerHTML: '<img src="../images/tg2.jpg"><span>大胆尝试新风格</span>' },
    { href: '#', innerHTML: '<img src="../images/tg9.jpg"><span>张艺兴清新慵懒风雅致撩人</span>' },
    { href: '#', innerHTML: '<img src="../images/tg10.jpg"><span>迪丽热巴封面露迷人香肩</span>' },
    { href: '#', innerHTML: '<img src="../images/tg3.jpg"><span>刘涛开年封面与雕塑共舞</span>' },
    { href: '#', innerHTML: '<img src="../images/tg4.jpg"><span>美到犯规！高圆圆着深V白裙露齿甜笑气质迷人</span>' },
    { href: '#', innerHTML: '<img src="../images/tg12.jpg"><span>井柏然造型多变充满少年感</span>' },
    { href: '#', innerHTML: '<img src="../images/tg11.jpg"><span>张艺兴再书冬日音乐情书</span>' },
    { href: '#', innerHTML: '<img src="../images/tg6.jpg"><span>周冬雨缤纷圣诞化身精灵</span>' },
    { href: '#', innerHTML: '<img src="../images/tg5.jpg"><span>金所炫展现20岁自信感</span>' },
    { href: '#', innerHTML: '<img src="../images/tg14.jpg"><span>杨幂狂甩秀发大秀修长美腿</span>' },
    { href: '#', innerHTML: '<img src="../images/tg13.jpg"><span>秀智美貌发光耀眼迷人</span>' },
    { href: '#', innerHTML: '<img src="../images/tg7.jpg"><span>刘亦菲黄色长裙散发迷人魅力</span>' },
    { href: '#', innerHTML: '<img src="../images/tg8.jpg"><span>SEVENTEEN帅气13人展现真挚面貌</span>' },
    { href: '#', innerHTML: '<img src="../images/tg16.jpg"><span>刘昊然时尚写真曝光</span>' },
    { href: '#', innerHTML: '<img src="../images/tg15.jpg"><span>王俊凯开年大片</span>' },
    ];
    for (var i = 0; i < tgHdImg_list.length / 4; i++) {
        var li = document.createElement('li');
        my$('.tgHdImg')[0].appendChild(li);
        for (var j = 0; j < 2; j++) {
            var div1 = document.createElement('div');
            div1.className = 'tab';
            li.appendChild(div1);
        }
    }
    var tabNum = 0;
    for (var i = 0; i < my$('.tab').length; i++) {
        my$('.tab')[i].index = 0;
        my$('.tab')[i].newPlay = true;
        for (var j = 0; j < 2; j++) {
            var tab = document.createElement('a');
            tab.index=j;
            my$('.tab')[i].appendChild(tab);
            for (var key in tgHdImg_list[tabNum]) {
                tab[key] = tgHdImg_list[tabNum][key];
            }
            tabNum++;
        }
        my$('.tab')[i].querySelectorAll('a')[0].className = 'aBlock';
    }
        var fnm = function () {
            this.className='';
        this.querySelector('img').style.top = 0;
        this.querySelector('img').style.left = 0;
        this.querySelector('img').style.opacity = '1';
        this.querySelector('img').style.zIndex=1;
        this.parentNode['index']++;
        if ( this.parentNode['index'] > 1) {
            this.parentNode['index'] = 0;
        };
        if(this.parentNode['index']==0){
            this.previousElementSibling.className='aBlock';
        }
        else{
            this.nextElementSibling.className='aBlock';
        }
        this.parentNode.newPlay = true;

    };

    for (var i = 0; i < my$('.tab').length; i++) {
            my$('.tab')[i].onmouseenter = function () {
                this.onmouseleave = function () {
                    if (this.newPlay) {
                        var aBLock=this.querySelector('.aBlock');
                        this.newPlay = false;
                        var suiJ = parseInt(Math.random() * 4);
                        var opa=parseInt(Math.random() * 2);
                        switch (suiJ) {
                            case 0:
                                animation(aBLock.querySelector('img'), { 'left': -this.offsetWidth, opacity: opa}, 15, fnm.bind(aBLock));
                                break;
                            case 1:
                                animation(aBLock.querySelector('img'), { 'left': this.offsetWidth, opacity: opa}, 15, fnm.bind(aBLock));
                                break;
                            case 2:
                                animation(aBLock.querySelector('img'), { 'top': this.offsetHeight, opacity: opa}, 15, fnm.bind(aBLock));
                                break;
                            case 3:
                                animation(aBLock.querySelector('img'), { 'top': -this.offsetHeight, opacity: opa}, 15, fnm.bind(aBLock));
                                break;
                        }
                    }
                }
            };
        }

    // 影视圈
    // 影视最新批量
    var zuiXin_yinshi = my$('.zuiXin_yinshi')[0];
    var zuiXin_yinshi_list = [[{ href: '#', innerHTML: '<img src="../images/kd1.jpg">' },
    { href: '#', innerHTML: '<img src="../images/kd2.jpg">' },
    { href: '#', innerHTML: '<img src="../images/kd3.jpg">' },
    { href: '#', innerHTML: '<img src="../images/kd4.jpg">' },
    { href: '#', innerHTML: '<img src="../images/kd5.jpg">' },
    { href: '#', innerHTML: '<img src="../images/kd6.jpg">' }],
    [{ href: '#', innerText: '“五一必选”《雪暴》口碑暴涨被赞“主旋律商业兼具” 老狼点赞神仙阵容“演技让人五体投地”' },
    { href: '#', innerText: '不负众望！“多金”电影《罗马》定档5月10日' },
    { href: '#', innerText: '《X战警：黑凤凰》发布九大角色海报 黑暗来袭！X战警无一幸免' },
    { href: '#', innerText: '《神奇乐园历险记》口碑爆发  票房逆袭获亲子观众青睐 ' },
    { href: '#', innerText: '张震笑称倪妮像猫黄觉像狗想亲廖凡 《雪暴》力闯“五一档”守护时代的“森林英雄”' },
    { href: '#', innerText: '《追龙Ⅱ》强势定档6月6日 梁家辉古天乐演绎双雄争霸 ' }],
    [{ innerText: '今天 13:45' },
    { innerText: '今天 13:40' },
    { innerText: '今天 13:38' },
    { innerText: '今天 13:20' },
    { innerText: '今天 13:15' },
    { innerText: '今天 13:10' }],
    [{ href: '#', innerText: '张震' },
    { href: '#', innerText: '罗马' },
    { href: '#', innerText: 'X战警' },
    { href: '#', innerText: '神奇乐园历险记' },
    { href: '#', innerText: '张震' },
    { href: '#', innerText: '梁家辉' }]
    ];
    getElementList(zuiXin_yinshi, 'li', zuiXin_yinshi_list, ['a', 'a', 'span', 'a']);
    //正在热映
    var newHot_yin = my$('.newHot_yin')[0];
    var newHot_yinList = [
        [
            { src: '../images/hotyin1.jpg' },
            { src: '../images/hotyin2.jpg' },
            { src: '../images/hotyin3.jpg' },
            { src: '../images/hotyin4.jpg' },
            { src: '../images/hotyin5.jpg' },
        ],
        [
            { innerText: '复仇者联盟4：终局之战' },
            { innerText: '小飞象' },
            { innerText: '夏目友人帐' },
            { innerText: '流浪地球' },
            { innerText: '疯狂外星人' },
        ],
        [
            { innerHTML: '<span>导演:</span>安东尼·罗素,乔·罗素' },
            { innerHTML: '<span>导演:</span>蒂姆·波顿' },
            { innerHTML: '<span>导演:</span>森贵弘,伊藤秀树' },
            { innerHTML: '<span>导演:</span>郭帆' },
            { innerHTML: '<span>导演:</span>宁浩' },

        ],
        [
            { innerText: '主演:' },
            { innerText: '主演:' },
            { innerText: '主演:' },
            { innerText: '主演:' },
            { innerText: '主演:' },
        ],
        [
            { className: 'zhuYan', innerText: '小罗伯特·唐尼/克里斯·埃文斯/马克·鲁法洛/克里斯·海姆斯沃斯/小罗伯特·唐尼/斯嘉丽·约翰逊/' },
            { className: 'zhuYan', innerText: '伊娃·格林 / 科林·法瑞尔 / 迈克尔·基顿 / 妮可·帕克 / 芬利·霍宾斯' },
            { className: 'zhuYan', innerText: '神谷浩史/井上和彦' },
            { className: 'zhuYan', innerText: '吴京/屈楚萧/李光洁/吴孟达/赵今麦' },
            { className: 'zhuYan', innerText: '黄渤/沈腾' },
        ],
        [
            { innerText: '182分钟-动作/科幻/奇幻/冒险' },
            { innerText: '112分钟-奇幻 / 冒险' },
            { innerText: '104分钟-妖怪/治愈' },
            { innerText: '125分钟-科幻/灾难/冒险' },
            { innerText: '116分钟-喜剧/剧情/科幻' },

        ],
        [
            {
                innerText: '[ 《复仇者联盟4：终局之战》将是漫威宇宙“无限传奇”（The Infinity Saga)的终结篇，是漫威电影宇宙十年的一个重要节点，结束部分英雄电影的故事，但也将展开新的剧情，呈现新的更为广阔宏大的宇宙观，未来也将出现新的超级英雄，继续漫威超级英雄激动人心的故事。漫威影业荣誉出品《复仇者联盟4：终局之战》，故事发生在灭霸消灭宇宙一半的生灵并重创复仇者联盟之后，剩余的英雄被迫背水一战，为22部漫威电影写下传奇终章。]'
            },
            { innerText: '[ 迪士尼全新真人版《小飞象》改编自1941年推出的迪士尼同名经典动画，讲述了生来因一双大耳朵而遭人嘲笑的小飞象，在众人的帮助下逐渐拥抱自己的与众不同，成就一段逆风翱翔的暖心传奇。  ]' },
            {
                innerText: '[ 每天在人与妖怪之间过着忙碌日子的夏目，偶然与过去的同学・结城重逢了，以此想起了于妖怪有关的苦涩记忆。此时，夏目认识了在归还名字的妖怪记忆中出现的女性·津村容莉枝。知晓玲子的她，现在和独子椋雄一起平静地生活着。夏目通过和他们交流，心里也变得平静下来。但是这对母子所居住的城镇，似乎潜藏着神秘的妖怪。在调查此事回来的路上，寄生于猫咪老师身体上的“妖之种”，在藤原家的庭院中，一夜之间就长成树结出果实。不知为什么，吃掉了与自己形状相似果实的猫咪老师，竟然分裂成了3个？ ]'
            },
            {
                innerText: '[ 在不远的将来，太阳急速衰老膨胀，地球面临被吞没的灭顶之灾。为拯救地球，人类在地球表面建造了上万座行星发动机，以逃离太阳系寻找新的家园，地球和人类就此踏上预计长达2500年的宇宙流浪之旅。在完成这一宏伟计划的进程中，无数人挺身而出上演了可歌可泣的传奇故事，九死一生的冒险和对人性的终极拷问也同时上演。 ]'
            },
            {
                innerText: '[ 耿浩（黄渤饰）与一心想发大财的好兄弟大飞（沈腾饰），经营着各自惨淡的“事业”，然而“天外来客”的意外降临，打破了二人平静又拮据的生活。神秘的西方力量也派出“哼哈二将”在全球寻找外星人踪影。啼笑皆非的跨物种对决，别开生面的“星战”，在中国某海边城市激情上演。 ]'
            }
        ]
    ]
    getElementList(newHot_yin, 'li', newHot_yinList, ['img', 'h4', 'p', 'p', 'p', 'p', 'p']);
    //正在热映按钮
    var newBot_a = my$('.newBot')[0].querySelectorAll('a');
    var newHot_yin_list = newHot_yin.querySelectorAll('li');
    var newHot_yin_index = 0;
    newHot_yin_list[0].className = 'nowXians';
    newBot_a[0].onclick = function () {
        if (newHot_yin_index > 0) {
            newBot_a[1].className = 'colorB';
            newHot_yin_list[newHot_yin_index].className = '';
            newHot_yin_index--;
            newHot_yin_list[newHot_yin_index].className = 'nowXians';
            if (newHot_yin_index == 0) {
                newBot_a[0].className = '';
                newHot_yin_index = 0;
            }
        }
    }
    newBot_a[1].onclick = function () {
        if (newHot_yin_index < newHot_yin_list.length - 1) {
            newBot_a[0].className = 'colorB';
            newHot_yin_list[newHot_yin_index].className = '';
            newHot_yin_index++;
            newHot_yin_list[newHot_yin_index].className = 'nowXians';
            if (newHot_yin_index >= newHot_yin_list.length - 1) {
                newBot_a[1].className = '';
                newHot_yin_index == newHot_yin_list.length - 1;
            }
        }
    }
    //即将热映
    var jJHot_yin = my$('.jJHot_yin')[0];
    var jJHot_yinList = [
        [
            { src: '../images/jjhot1.jpg' },
            { src: '../images/jjhot2.jpg' },
            { src: '../images/jjhot3.jpg' },
            { src: '../images/jjhot4.jpg' },
            { src: '../images/jjhot5.jpg' },
        ],
        [
            { innerText: '复仇者联盟4：终局之战' },
            { innerText: '在乎你' },
            { innerText: '风中有朵雨做的云' },
            { innerText: '小飞象' },
            { innerText: '死侍2：我爱我家' },
        ],
        [
            { innerHTML: '<span>导演:</span>安东尼·罗素,乔·罗素' },
            { innerHTML: '<span>导演:</span>毕国智' },
            { innerHTML: '<span>导演:</span>娄烨' },
            { innerHTML: '<span>导演:</span>蒂姆·波顿' },
            { innerHTML: '<span>导演:</span>大卫·雷奇' },

        ],
        [
            { innerText: '主演:' },
            { innerText: '主演:' },
            { innerText: '主演:' },
            { innerText: '主演:' },
            { innerText: '主演:' },
        ],
        [
            { className: 'zhuYan', innerText: '小罗伯特·唐尼/克里斯·埃文斯/马克·鲁法洛/克里斯·海姆斯沃斯/小罗伯特·唐尼/斯嘉丽·约翰逊/' },
            { className: 'zhuYan', innerText: '俞飞鸿 / 大泽隆夫 / 木下彩音 / 卢洋洋 / 前田公辉' },
            { className: 'zhuYan', innerText: '井柏然/宋佳/马思纯/秦昊/陈妍希/张颂文' },
            { className: 'zhuYan', innerText: '伊娃·格林 / 科林·法瑞尔 / 迈克尔·基顿 / 妮可·帕克 / 芬利·霍宾斯' },
            { className: 'zhuYan', innerText: '瑞安·雷诺兹/乔什·布洛林/莫瑞娜·巴卡琳/朱利安·迪尼森/莎姬·贝兹' },
        ],
        [
            { innerText: '182分钟-动作/科幻/奇幻/冒险' },
            { innerText: '120分钟-爱情' },
            { innerText: '129分钟-剧情/悬疑/犯罪' },
            { innerText: '112分钟-奇幻 / 冒险' },
            { innerText: '119分钟-喜剧/剧情/科幻' },

        ],
        [
            { innerText: '2019年04月24日中国大陆上映' },
            { innerText: '2019年04月12日中国大陆上映' },
            { innerText: '2019年04月04日中国大陆上映' },
            { innerText: '2019年03月29日美国/中国大陆上映' },
            { innerText: '2019年01月25日中国大陆上映' },

        ],
        [
            {
                innerText: '[ 《复仇者联盟4：终局之战》将是漫威宇宙“无限传奇”（The Infinity Saga)的终结篇，是漫威电影宇宙十年的一个重要节点，结束部分英雄电影的故事，但也将展开新的剧情，呈现新的更为广阔宏大的宇宙观，未来也将出现新的超级英雄，继续漫威超级英雄激动人心的故事。漫威影业荣誉出品《复仇者联盟4：终局之战》，故事发生在灭霸消灭宇宙一半的生灵并重创复仇者联盟之后，剩余的英雄被迫背水一战，为22部漫威电影写下传奇终章。]'
            },
            { innerText: '[ “国内知名女设计师袁元（俞飞鸿饰），日本留学归国，气质出众，事业成功，多年的合伙人雷明也对她照顾有加。然而，看似人生赢家的袁元，内心深处却始终隐藏着一个难以放下的心结。在遇到事业瓶颈时，一位日本女孩（木下彩音饰）的突然出现打破了袁元原本风平浪静的生活，一段关于北海道的神秘往事也随之展开。 ]' },
            {
                innerText: '[ 沿海小城，年轻警官杨家栋（井柏然饰）初来乍到，恰遇建委主任唐奕杰（张颂文饰）坠楼身亡，杨家栋展开调查，惨遭革职、追杀，一路逃往香港，与死者女儿小诺（马思纯饰）意外邂逅，在小诺的协助下继续追查，浑然不觉自己正落入一个纯情陷阱 ]'
            },
            {
                innerText: '[ 迪士尼全新真人版《小飞象》改编自1941年推出的迪士尼同名经典动画，讲述了生来因一双大耳朵而遭人嘲笑的小飞象，在众人的帮助下逐渐拥抱自己的与众不同，成就一段逆风翱翔的暖心传奇。  ]'
            },
            {
                innerText: '[ 该片讲述死侍成立“X特工队”以保护年轻的变种人拉塞尔，以免他受到通过时间旅行前来的变种人士兵“电索”的追击的故事 ]'
            }
        ]
    ]
    getElementList(jJHot_yin, 'li', jJHot_yinList, ['img', 'h4', 'p', 'p', 'p', 'p', 'p', 'p']);
    var newBot_a_two = my$('.nowBot')[0].querySelectorAll('a');
    var jJHot_yin_list = jJHot_yin.querySelectorAll('li');
    var jJHot_yin_index = 0;
    jJHot_yin_list[0].className = 'nowXians';
    newBot_a_two[0].onclick = function () {
        if (jJHot_yin_index > 0) {
            newBot_a_two[1].className = 'colorB';
            jJHot_yin_list[jJHot_yin_index].className = '';
            jJHot_yin_index--;
            jJHot_yin_list[jJHot_yin_index].className = 'nowXians';
            if (jJHot_yin_index == 0) {
                newBot_a_two[0].className = '';
                jJHot_yin_index = 0;
            }
        }
    }
    newBot_a_two[1].onclick = function () {
        if (jJHot_yin_index < jJHot_yin_list.length - 1) {
            newBot_a_two[0].className = 'colorB';
            jJHot_yin_list[jJHot_yin_index].className = '';
            jJHot_yin_index++;
            jJHot_yin_list[jJHot_yin_index].className = 'nowXians';
            if (jJHot_yin_index >= jJHot_yin_list.length - 1) {
                newBot_a_two[1].className = '';
                jJHot_yin_index == jJHot_yin_list.length - 1;
            }
        }
    }
    // 合作伙伴
    var heZuo = my$('.heZuo')[0];
    var heZuo_Ul = heZuo.querySelectorAll('ul');
    var heZuo_Ul_oneList = [
        [
            { href: '#', innerHTML: "<img src='../images/hezuohuoban1.jpg'>" },
            { href: '#', innerHTML: "<img src='../images/hezuohuoban2.jpg'>" },
            { href: '#', innerHTML: "<img src='../images/hezuohuoban3.jpg'>" },
            { href: '#', innerHTML: "<img src='../images/hezuohuoban4.jpg'>" },
            { href: '#', innerHTML: "<img src='../images/hezuohuoban5.jpg'>" },
            { href: '#', innerHTML: "<img src='../images/hezuohuoban6.jpg'>" },
            { href: '#', innerHTML: "<img src='../images/hezuohuoban7.jpg'>" },
            { href: '#', innerHTML: "<img src='../images/hezuohuoban8.jpg'>" },
            { href: '#', innerHTML: "<img src='../images/hezuohuoban9.jpg'>" },
            { href: '#', innerHTML: "<img src='../images/hezuohuoban10.jpg'>" },
            { href: '#', innerHTML: "<img src='../images/hezuohuoban11.jpg'>" },
            { href: '#', innerHTML: "<img src='../images/hezuohuoban12.jpg'>" },
            { href: '#', innerHTML: "<img src='../images/hezuohuoban13.jpg'>" }

        ],
        [
            { innerText: 'KBS', href: '#' },
            { innerText: 'MBS', href: '#' },
            { innerText: '相信音乐', href: '#' },
            { innerText: '华城国际', href: '#' },
            { innerText: '少城时代', href: '#' },
            { innerText: '天娱传媒', href: '#' },
            { innerText: '海蝶音乐', href: '#' },
            { innerText: '美妙音乐', href: '#' },
            { innerText: '美梦成真音乐', href: '#' },
            { innerText: '摩登天空', href: '#' },
            { innerText: '华谊音乐', href: '#' },
            { innerText: '光线传媒', href: '#' },
            { innerText: '宇乐乐文化传媒', href: '#' }

        ]
    ];
    var heZuo_Ul_twoList = [
        [{ href: '#', innerHTML: "<img src='../images/hezuohuoban14.jpg'>" },
        { href: '#', innerHTML: "<img src='../images/hezuohuoban15.jpg'>" },
        { href: '#', innerHTML: "<img src='../images/hezuohuoban16.jpg'>" },
        { href: '#', innerHTML: "<img src='../images/hezuohuoban17.jpg'>" },
        { href: '#', innerHTML: "<img src='../images/hezuohuoban18.jpg'>" },
        { href: '#', innerHTML: "<img src='../images/hezuohuoban19.jpg'>" },
        { href: '#', innerHTML: "<img src='../images/hezuohuoban20.jpg'>" },
        { href: '#', innerHTML: "<img src='../images/hezuohuoban21.jpg'>" },
        { href: '#', innerHTML: "<img src='../images/hezuohuoban22.jpg'>" },
        { href: '#', innerHTML: "<img src='../images/hezuohuoban23.jpg'>" },
        { href: '#', innerHTML: "<img src='../images/hezuohuoban24.jpg'>" },
        { href: '#', innerHTML: "<img src='../images/hezuohuoban25.jpg'>" },
        { href: '#', innerHTML: "<img src='../images/hezuohuoban26.jpg'>" },
        { href: '#', innerHTML: "<img src='../images/hezuohuoban27.jpg'>" }
        ],
        [
            { innerText: '环球音乐', href: '#' },
            { innerText: '华纳音乐', href: '#' },
            { innerText: '索尼音乐', href: '#' },
            { innerText: '华研国际', href: '#' },
            { innerText: '英皇娱乐', href: '#' },
            { innerText: '滚石唱片', href: '#' },
            { innerText: '杰威尔音乐', href: '#' },
            { innerText: '福茂唱片', href: '#' },
            { innerText: '爱贝克思娱乐', href: '#' },
            { innerText: 'YG Entertainment', href: '#' },
            { innerText: 'JYP Entertainment', href: '#' },
            { innerText: 'SM Entertainment', href: '#' },
            { innerText: 'Star Empire ', href: '#' },
            { innerText: 'Pledis ', href: '#' }
        ]
    ];
    getElementList(heZuo_Ul[0], 'li', heZuo_Ul_oneList, ['a', 'a']);
    getElementList(heZuo_Ul[1], 'li', heZuo_Ul_twoList, ['a', 'a']);
    var wxHzPlay_zd;
    var UlIndex = 0;
    var ulHeight = heZuo_Ul[0].offsetHeight;
    var ulFather = my$('.ulFather')[0];
    // 合作伙伴动画
        function f1() {
        wxHzPlay_zd = setInterval(function () {
            UlIndex++;
            animation(ulFather, { opacity: 0 }, 6, function () {
                animation(ulFather, { opacity: 1 },6);
                if (UlIndex >= 2) {
                    UlIndex = 0;
                }
                my$('.ulFather')[0].style.top = -ulHeight * UlIndex + 'px';
            });
        }, 3000);
    }
    animation(ulFather, { opacity: 0 }, 6,function(){
         my$('.ulFather')[0].style.top = -ulHeight * UlIndex + 'px'; 
            animation(ulFather, { opacity: 1 }, 6);
        })
    f1();
    my$('.ulFather')[0].onmouseenter = function () {
        clearInterval(wxHzPlay_zd)
    }
    my$('.ulFather')[0].onmouseleave = function () {
        f1();
    }

    // 回到顶部

    my$('.topBot')[0].style.top=window.innerHeight+'px';
    var topBotFlag=true;
    window.onscroll=function(){
        if(getScroll()>=window.innerHeight-150){
            my$('.topBot')[0].style.display='block';
            if(topBotFlag&&parseInt(my$('.topBot')[0].style.top)==window.innerHeight){
                console.log(parseInt(my$('.topBot')[0].style.top));
                topBotFlag=false;
            animation(my$('.topBot')[0],{top:window.innerHeight-150},16,function(){
                topBotFlag=true;
            });
            }
        }
        else{
            my$('.topBot')[0].style.display='none';
            my$('.topBot')[0].style.top=window.innerHeight+'px';
        }
    }
    my$('.topBot')[0].onclick=function(){
       animation(document.documentElement,{scrollTop:0});
        animation(document.body,{scrollTop:0});
    }
})();

