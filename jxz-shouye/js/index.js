(function(){
    // bigBanner部分，轮播效果的实现
var flag, index = 0;
$('.bigBanner li').eq(index).css('display', 'block').siblings().css('display', 'none');

function timer() {
    flag = setInterval(function () {
        $('.controls').eq(index).css('color', '#fff');
        index++;
        if (index >= $('.bigBanner li').length) {
            index = 0;
        }
        $('.bigBanner li').eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
        $('.controls').eq(index).css('color', '#52e2c0');
    }, 5000);
};
timer();
$('.bigBanner li').mouseenter(function () {
    clearInterval(flag);
});
$('.bigBanner li').mouseleave(function () {
    timer();
});
$('.controls').mouseenter(function () {
    clearInterval(flag);
    $(this).css('color', '#52e2c0').siblings().css('color', '#fff');
    $('.bigBanner li').eq($(this).index()).stop().fadeIn(500).siblings().stop().fadeOut(500);
});
$('.controls').mouseleave(function () {
    index = $(this).index();
    timer();
});

// 首播模块
// 小轮播是功能实现
var flag1, index1 = 0;
function timer1() {
    flag1 = setInterval(function () {
        index1++;
        if (index1 > 2) {
            index1 = 0;
        }
        $('.list1 div').eq(index1).stop().slideDown(2000).siblings().stop().slideUp(2000);
    }, 5000);
};
timer1();
$('.first .list1').on('mouseenter', function () {
    $('.prev').css('display', 'block');
    $('.next').css('display', 'block');
    clearInterval(flag1);
});
$('.first .list1').on('mouseleave', function () {
    $('.prev').css('display', 'none');
    $('.next').css('display', 'none');
    timer1();
});
$('.prev').on('click', function () {
    $('.prev').css('display', 'block');
    $('.next').css('display', 'block');
    
    if (index1 >=2) {
        index1 = 0;
    }
    index1++;
    $('.list1 div').eq(index1).stop().show(10).siblings().stop().hide(10);
    return false;
})
var index2=1;
$('.next').on('click', function () {
    
    $('.prev').css('display', 'block');
    $('.next').css('display', 'block');
    
    if (index2 >=2) {
        index2 = 0;
    }
    index2++;
    $('.list1 div').eq(index2).stop().show(10).siblings().stop().hide(10);
    return false;
});



var datas1 = [{src1: '2-1.jpg',h51:'我欢喜喜欢你',p1:'焦迈奇',src2: '2-2.png',h52:'Just Say So feat.蔡健雅 - Official Music Video',p2:'路壹Lu1 & 蔡健雅'},
{src1: '2-3.jpg',h51:'Hard To Get 30s预告',p1:'蔡徐坤',src2: '2-4.jpg',h52:'豆你玩',p2:'路壹Lu1 & 蔡健雅'},
{src1: '2-5.jfif',h51:'前任 电影《下一任:前任》主题曲',p1:'何洁',src2: '2-6.jfif',h52:'有什么不敢面对 官方版',p2:'丁当'},
{src1: '2-6.jfif',h51:'超可爱',p1:'谭杰希',src2: '2-8.jpg',h52:'小楷 官方版',p2:'段林希'},
{src1: '2-9.jpg',h51:'看到风 官方版',p1:'冯提莫',src2: '2-10.jpg',h52:'宅男配狗 天长地久  《狗眼看人心》主题曲',p2:'好妹妹乐队'},
{src1: '2-11.png',h51:'奇怪的帽子(台北音乐会纪录片)',p1:'关喆',src2: '2-12.jpg',h52:'让爱久一点 电影《最佳男友进化论》推广曲',p2:'刘惜君'},
];
var datas2 = [{src1: '3-1.jpg',h51:'关于现实的母女对话 电视剧《爱上你治愈我》推广曲',p1:'黄小琥 & 赵文多',src2: '3-2.jpg',h52:'友情岁月(兄弟版)电影《转型团伙》宣传推广曲',p2:'吴镇宇 & 摩登兄弟刘宇宁'}, 
{src1: '3-3.png',h51:'所以我爱',p1:'卫兰',src2: '3-4.jpg',h52:'白发',p2:'方大同'},
{src1: '3-5.jpg',h51:'Oxygen',p1:'王嘉尔',src2: '3-6.jpg',h52:'友情岁月(怀旧版) 电影《转型团伙》主题曲',p2:'吴镇宇 & 乔杉'},
{src1: '3-6.jpg',h51:'Oxygen TEASER_40',p1:'王嘉尔',src2: '3-8.jpg',h52:'Oxygen TEASER_30',p2:'王嘉尔'},
{src1: '3-9.jpg',h51:'Hello,I said',p1:'王诗安',src2: '3-10.jpg',h52:'你是真的离开我',p2:'谢和弦'},
{src1: '3-11.png',h51:'爱情摩天轮(Ft. 安苡葳Anne, DJ CK)',p1:'臭屁婴仔',src2: '3-12.jpg',h52:'后来',p2:'潘裕文'},
];
var datas3 = [{src1: '4-1.jpg',h51:'关于现实的母女对话 电视剧《爱上你治愈我》推广曲',p1:'黄小琥 & 赵文多',src2: '4-2.jpg',h52:'友情岁月(兄弟版)电影《转型团伙》宣传推广曲',p2:'吴镇宇 & 摩登兄弟刘宇宁'}, 
{src1: '4-3.jpg',h51:'所以我爱',p1:'卫兰',src2: '4-4.png',h52:'白发',p2:'方大同'},
{src1: '4-5.jpg',h51:'Oxygen',p1:'王嘉尔',src2: '4-6.jpg',h52:'友情岁月(怀旧版) 电影《转型团伙》主题曲',p2:'吴镇宇 & 乔杉'},
{src1: '4-6.jpg',h51:'Oxygen TEASER_40',p1:'王嘉尔',src2: '4-8.jpg',h52:'Oxygen TEASER_30',p2:'王嘉尔'},
{src1: '4-9.jpg',h51:'Hello,I said',p1:'王诗安',src2: '4-10.jpg',h52:'你是真的离开我',p2:'谢和弦'},
{src1: '4-11.jpg',h51:'爱情摩天轮(Ft. 安苡葳Anne, DJ CK)',p1:'臭屁婴仔',src2: '4-12.jpg',h52:'后来',p2:'潘裕文'},
];
var datas4 = [{src1: '5-1.jpg',h51:'关于现实的母女对话 电视剧《爱上你治愈我》推广曲',p1:'黄小琥 & 赵文多',src2: '5-2.jpg',h52:'友情岁月(兄弟版)电影《转型团伙》宣传推广曲',p2:'吴镇宇 & 摩登兄弟刘宇宁'}, 
{src1: '5-3.jpg',h51:'所以我爱',p1:'卫兰',src2: '5-4.jpg',h52:'白发',p2:'方大同'},
{src1: '5-5.jpg',h51:'Oxygen',p1:'王嘉尔',src2: '5-6.jpg',h52:'友情岁月(怀旧版) 电影《转型团伙》主题曲',p2:'吴镇宇 & 乔杉'},
{src1: '5-6.jpg',h51:'Oxygen TEASER_40',p1:'王嘉尔',src2: '5-8.jpg',h52:'Oxygen TEASER_30',p2:'王嘉尔'},
{src1: '5-9.jpg',h51:'Hello,I said',p1:'王诗安',src2: '5-10.jpg',h52:'你是真的离开我',p2:'谢和弦'},
{src1: '5-11.jpg',h51:'爱情摩天轮(Ft. 安苡葳Anne, DJ CK)',p1:'臭屁婴仔',src2: '5-12.jpg',h52:'后来',p2:'潘裕文'},
];
var datas5 = [{src1: '6-1.jpg',h51:'关于现实的母女对话 电视剧《爱上你治愈我》推广曲',p1:'黄小琥 & 赵文多',src2: '6-2.jpg',h52:'友情岁月(兄弟版)电影《转型团伙》宣传推广曲',p2:'吴镇宇 & 摩登兄弟刘宇宁'}, 
{src1: '6-3.jpg',h51:'所以我爱',p1:'卫兰',src2: '6-4.jpg',h52:'白发',p2:'方大同'},
{src1: '6-5.jpg',h51:'Oxygen',p1:'王嘉尔',src2: '6-6.jpg',h52:'友情岁月(怀旧版) 电影《转型团伙》主题曲',p2:'吴镇宇 & 乔杉'},
{src1: '6-6.jpg',h51:'Oxygen TEASER_40',p1:'王嘉尔',src2: '6-8.jpg',h52:'Oxygen TEASER_30',p2:'王嘉尔'},
{src1: '6-9.jpg',h51:'Hello,I said',p1:'王诗安',src2: '6-10.jpg',h52:'你是真的离开我',p2:'谢和弦'},
{src1: '6-11.jpg',h51:'爱情摩天轮(Ft. 安苡葳Anne, DJ CK)',p1:'臭屁婴仔',src2: '6-12.jpg',h52:'后来',p2:'潘裕文'},
];

//封装动态添加函数1
function addLi(datas,show1,n,file){
    for(var i=0;i<datas.length;i++){
    var obj=datas[i];
    $('<div class="list"></div>').appendTo(show1).html( `
    <div>
        <a href="#">
            <img src="img/${file}/${n}/${obj.src1}" alt="">
            <h5>${obj.h51}</h5>
            <p>${obj.p1}</p>
        </a>
    </div>
    <div>
        <a href="#">
            <img src="img/${file}/${n}/${obj.src2}" alt="">
            <h5>${obj.h52}</h5>
            <p>${obj.p2}</p>
        </a>
    </div>


    `)
  }
}
addLi(datas1,'.first .content-show1',2,'first appear');
addLi(datas2,'.first .content-show2',3,'first appear');
addLi(datas3,'.first .content-show3',4,'first appear');
addLi(datas4,'.first .content-show4',5,'first appear');
addLi(datas5,'.first .content-show5',6,'first appear');

//首播模块的Tab切换实现
$('.first .nav-name').eq(0).addClass('active');
$('.first .nav-name').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    var num = $(this).index()/2;
    $('.first .father>li').eq(num).css('display','block').siblings().css('display','none');
    return false;
});

//娱乐模块数据
datas6=[{src1: '2.jpg',h51:'Style & Delicate',p1:'霉霉最新现场自弹自唱2首热单',src2: '3.jpg',h52:'《π-volume.1》幕后花絮',p2:'一起进入鹿晗无限不循环的音乐世界'}, 
{src1: '4.jpg',h51:'《π-volume.1》先导片',p1:'卫兰',src2: '5.jpg',h52:'白发',p2:'方大同'},
{src1: '6.jpg',h51:'Oxygen',p1:'王嘉尔',src2: '7.jpg',h52:'友情岁月(怀旧版) 电影《转型团伙》主题曲',p2:'吴镇宇 & 乔杉'},
{src1: '8.jpg',h51:'Oxygen TEASER_40',p1:'王嘉尔',src2: '9.jpg',h52:'Oxygen TEASER_30',p2:'王嘉尔'},
];
datas7=[{src1: '2.jpg',h51:'关于现实的母女对话 电视剧《爱上你治愈我》推广曲',p1:'黄小琥 & 赵文多',src2: '3.jpg',h52:'友情岁月(兄弟版)电影《转型团伙》宣传推广曲',p2:'吴镇宇 & 摩登兄弟刘宇宁'}, 
{src1: '4.jpg',h51:'所以我爱',p1:'卫兰',src2: '5.jpg',h52:'白发',p2:'方大同'},
{src1: '6.jpg',h51:'Oxygen',p1:'王嘉尔',src2: '7.jpg',h52:'友情岁月(怀旧版) 电影《转型团伙》主题曲',p2:'吴镇宇 & 乔杉'},
{src1: '8.jpg',h51:'Oxygen TEASER_40',p1:'王嘉尔',src2: '9.jpg',h52:'Oxygen TEASER_30',p2:'王嘉尔'},
];
datas8=[{src1: '2.jpg',h51:'关于现实的母女对话 电视剧《爱上你治愈我》推广曲',p1:'黄小琥 & 赵文多',src2: '3.jpg',h52:'友情岁月(兄弟版)电影《转型团伙》宣传推广曲',p2:'吴镇宇 & 摩登兄弟刘宇宁'}, 
{src1: '4.jpg',h51:'所以我爱',p1:'卫兰',src2: '5.jpg',h52:'白发',p2:'方大同'},
{src1: '6.jpg',h51:'Oxygen',p1:'王嘉尔',src2: '7.jpg',h52:'友情岁月(怀旧版) 电影《转型团伙》主题曲',p2:'吴镇宇 & 乔杉'},
{src1: '8.jpg',h51:'Oxygen TEASER_40',p1:'王嘉尔',src2: '9.jpg',h52:'Oxygen TEASER_30',p2:'王嘉尔'},
];
datas9=[{src1: '2.jpg',h51:'关于现实的母女对话 电视剧《爱上你治愈我》推广曲',p1:'黄小琥 & 赵文多',src2: '3.jpg',h52:'友情岁月(兄弟版)电影《转型团伙》宣传推广曲',p2:'吴镇宇 & 摩登兄弟刘宇宁'}, 
{src1: '4.jpg',h51:'所以我爱',p1:'卫兰',src2: '5.jpg',h52:'白发',p2:'方大同'},
{src1: '6.jpg',h51:'Oxygen',p1:'王嘉尔',src2: '7.jpg',h52:'友情岁月(怀旧版) 电影《转型团伙》主题曲',p2:'吴镇宇 & 乔杉'},
{src1: '8.jpg',h51:'Oxygen TEASER_40',p1:'王嘉尔',src2: '9.jpg',h52:'Oxygen TEASER_30',p2:'王嘉尔'},
];
//娱乐模块
addLi(datas6,'.entertainment .content-show1',1,'entertainment');
addLi(datas7,'.entertainment .content-show2',2,'entertainment');
addLi(datas8,'.entertainment .content-show3',3,'entertainment');
addLi(datas9,'.entertainment .content-show4',4,'entertainment');


//娱乐模块的Tab切换实现
$('.entertainment .ul>li').eq(0).stop().show().find('.list').css('display','block');
$('.entertainment .nav-name').eq(0).addClass('active');
$('.entertainment .nav-name').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    var num = $(this).index()/2;
    $('.entertainment .ul>li').eq(num).css('display','block').siblings().css('display','none');
    $('.entertainment .ul>li').eq(num).find('.list').css('display','block');
    return false;
});

//热播推荐
var data1 = [{src: '/recommend/1.jpg',h5:'幸福指南 现场版',p:'品冠2019《幸福指南》创刊展',className:'group1'},
{src: '/recommend/2.jpg',h5:'北京·我们”一场追逐梦想的故事',p:'北京现代舞团原创现代舞剧《北京我们》新闻发布会',className:'group1'},
{src: '/recommend/3.jpg',h5:'为音乐之路再添新里程碑',p:'唱作大神李荣浩入驻北京杜莎夫人蜡像',className:'group1'},
{src: '/recommend/4.jpg',h5:'开拓全新音乐版图',p:'胡夏第五张个人专辑《念·旧》发布会',className:'group1'},
{src: '/recommend/5.jpg',h5:'我们不像我们 现场版',p:'丁当新专辑发片记者会',className:'group1'},
{src: '/recommend/6.jpg',h5:'对岸&怎么了&美美&小蘑菇 现场版',p:'孟慧圆“你知道我知道你”巡演北京站',className:'group1'},

];
var data2=[{src: '/recommend/7.jpg',h5:'TEAM SPARK火星团助阵',p:'第十四届亚洲模特盛典',className:'group2'},
{src: '/recommend/8.jpg',h5:'缔造全新视听盛宴',p:'梁欢「我们去未来」新专辑发布会',className:'group2'},
{src: '/recommend/9.jpg',h5:'开启业内新文旅时代',p:'“戈壁天堂”发布启动会',className:'group2'},
{src: '/recommend/10.jpg',h5:'“甜蜜风暴”正式起航',p:'王心凌CYNDI LOVES 2SING巡演发布会',className:'group2'},
{src: '/recommend/11.jpg',h5:'周深,陆虎,王心凌到场助阵',p:'“流行音乐全金榜年度盛典”启动记者会',className:'group2'},
{src: '/recommend/12.jpg',h5:'Kylie Jenner的美妆哲学',p:'金小妹最新视频',className:'group2'},];
var data3=[{src: '/recommend/13.jpg',h5:'韬斯曼首支前序视频',p:'中二少年黄子韬！',className:'group3'},
{src: '/recommend/14.jpg',h5:'开创中西方音乐对话新形式',p:'杭盖乐队2019新专辑发布会',className:'group3'},
{src: '/recommend/15.jpg',h5:'为公益发声',p:'MusicRadio音乐之声爱心慈善晚会 群访环节',className:'group3'},
{src: '/recommend/16.jpg',h5:'《单身》概念影像Chapter 1',p:'黄子韬',className:'group3'},
{src: '/recommend/17.jpg',h5:'分享成长与经历',p:'周冬雨生日见面会',className:'group3'},
{src: '/recommend/18.jpg',h5:'用歌声温暖寒冷冬季',p:'谢春花“花语时”北京演唱会',className:'group3'},];
var data4=[{src: '/recommend/19.jpg',h5:'DARE TO SING LIVE SESSION ',p:'02 - 《请回答》Live',className:'group4'},
{src: '/recommend/20.jpg',h5:'蔡徐坤《Wait Wait Wait》',p:'MV制作特辑',className:'group4'},
{src: '/recommend/21.jpg',h5:'GAI新专辑歌曲现场演唱',p:'《光宗耀祖》发布会暨巡演启动仪式',className:'group4'},
{src: '/recommend/22.jpg',h5:'首站成都已开启预定',p:'林宥嘉IDOL爱多世界巡回演唱会发布会',className:'group4'},
{src: '/recommend/23.jpg',h5:'新事业版图开启',p:'2019赖冠霖初见未来发布',className:'group4'},
{src: '/recommend/24.jpg',h5:'群星共聚一堂',p:'2018微博之夜盛典',className:'group4'},];
var data5=[{src: '/recommend/25.jpg',h5:'星耀分享虚拟明星时尚盛典',p:'',className:'group5'},
{src: '/recommend/26.jpg',h5:'《沙出重维》纪录片之京新大穿越',p:'',className:'group5'},
{src: '/recommend/27.jpg',h5:'调侃自己360度全死角',p:'高晓松蜡像揭幕',className:'group5'},
{src: '/recommend/28.jpg',h5:'新歌连唱',p:'许巍新专辑《无尽光芒》举行首唱会',className:'group5'},
{src: '/recommend/29.jpg',h5:'完美舞台点燃现场',p:'ChicChili“HI!CC”新歌分享会',className:'group5'},
{src: '/recommend/30.jpg',h5:'关喆变“咖啡师”实力宠粉',p:'“咖啡店的第一个故事”一日店长活动',className:'group5'},];

//封装动态添加函数2
function addLi1(datas,show){
    for(var i=0;i<datas.length;i++){
    var obj=datas[i];
    $('<li class="list"></li>').addClass(obj.className).appendTo(show).html( `
    <a href="#">
        <img src="img${obj.src}" alt="">
        <h5>${obj.h5}</h5>
        <p>${obj.p}</p>
    </a>
    `)
  }
}
addLi1(data1,'.recommend .ul');
addLi1(data2,'.recommend .ul');
addLi1(data3,'.recommend .ul');
addLi1(data4,'.recommend .ul');
addLi1(data5,'.recommend .ul');
var arr=[$('.group1'),$('.group2'),$('.group3'),$('.group4'),$('.group5')]
var a=1;
$('.recommend .ul .list').hide();
arr[0].stop().show();
//换一换按钮功能实现
$('.change').click(function(){
    arr[a-1].stop().hide();
    if(a>arr.length-1){
        a=0;
    }
    arr[a].stop().show();
    a++;
return false;
})

//主打星:防弹少年团
var data6=[{src: '/main star/1.jpg',h5:'IDOL - TMA2019 ',p:'现场版 19/04/24',className:'group'},
{src: '/main star/2.jpg',h5:'Boy With Luv',p:'',className:'group'},
{src: '/main star/3.jpg',h5:'Make It Right - M COUNTDOWN ',p:'现场版 19/04/18',className:'group'},
{src: '/main star/4.jpg',h5:'待机室采访防弹少年团 ',p:'人气歌谣 19/04/21',className:'group'},
{src: '/main star/5.jpg',h5:'舞蹈练习室Boy With Luv',p:'防弹少年团 19/04/21',className:'group'},
{src: '/main star/6.jpg',h5:'Boy With Luv - 音乐中心 ',p:'现场版 中字 19/04/20',className:'group'},
];
addLi1(data6,'.main-star .ul');
  
//音乐V榜
$('.program img').stop().hide();
for(var i=0;i<$('.program img').length;i+=3){
    $('.program img').eq(i).stop().show().next().css('color','#52e2c0')
};
$('.program dl dd').mouseenter(function(){
    $(this).find('img').stop().show().next().css('color','#52e2c0').end().end().siblings().find('img').hide().next().css('color','#000');
    return false;
})


// 官方合作专区

//官方合作专区数据
datas10=[{src1: '2.jpg',h51:'YOUNG',p1:' ',src2: '3.jpg',h52:'We Go Up',p2:''}, 
{src1: '4.jpg',h51:'Road',p1:' ',src2: '5.jpg',h52:'Our Page',p2:' '},
{src1: '6.jpg',h51:'#Cookie Jar',p1:' ',src2: '7.jpg',h52:'Something New',p2:' '},
{src1: '8.jpg',h51:'I Want You',p1:' ',src2: '9.jpg',h52:'Good Evening',p2:' '},
];
datas11=[];
datas12=[{src1: '2.jpg',h51:'LOOK',p1:' ',src2: '3.jpg',h52:'Wake Me Up',p2:' '}, 
{src1: '4.jpg',h51:'District 9',p1:' ',src2: '5.jpg',h52:'晚安 连我的份一起',p2:' '},
{src1: '6.jpg',h51:'HOLIDAY  完整版',p1:' ',src2: '7.jpg',h52:'Spread My Wings Performance Video',p2:' '},
{src1: '8.jpg',h51:'Quit',p1:' ',src2: '9.jpg',h52:'Party Shots',p2:' '},
];
addLi(datas10,'.Official-cooperation .content-show1',1,'Official cooperation');
addLi(datas11,'.Official-cooperation .content-show2',2,'Official cooperation');
addLi(datas12,'.Official-cooperation .content-show3',3,'Official cooperation');


//官方合作专区的Tab切换实现
$('.Official-cooperation .ul>li').eq(0).stop().show();
$('.Official-cooperation .nav-name').eq(0).addClass('active');
$('.Official-cooperation .nav-name').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    var num = $(this).index()/2;
    $('.Official-cooperation .ul>li').eq(num).css('display','block').siblings().css('display','none');
    return false;
});

//精品悦单
$('.list2').on('mouseenter',function(){
    $(this).find('.hideBox').stop().show();
});
$('.list2').on('mouseleave',function(){
    $(this).find('.hideBox').stop().hide();
});
$('.list2').eq(5).find('.hideBox').css({
    top:0,
    left:-250+'px'
});

// 猜你喜欢
// 猜你喜欢数据
var data6 = [{src: '/pick/1.jpg',h5:'Boom Boom SBS 现场版 10/05/16',p:'Super Junior',className:'group6'},
{src: '/pick/2.jpg',h5:'Sorry Sorry (Remix) 金唱片现场版 09/12/10',p:'Super Junior',className:'group6'},
{src: '/pick/3.jpg',h5:'Love Me Boy 预告版',p:'UP Girls',className:'group6'},
{src: '/pick/4.jpg',h5:'I Wanna Love You Super Show3北京场饭拍版 10/10/23',p:'Super Junior',className:'group6'},
{src: '/pick/5.jpg',h5:'Into The Rhythm SBS人气歌谣现场版 10/12/12',p:'徐仁英',className:'group6'},
{src: '/pick/6.jpg',h5:'Love Love Love 预告版',p:'After School',className:'group6'},

];
var data7=[{src: '/pick/7.jpg',h5:'It\'s You 现场版',p:'Super Junior',className:'group7'},
{src: '/pick/8.jpg',h5:'Lucifer MBC音乐中心 仁川韩流节现场版 10/09/04',p:'SHINee',className:'group7'},
{src: '/pick/9.jpg',h5:'Keep Your Head Down 预告Highlight版',p:'东方神起',className:'group7'},
{src: '/pick/10.jpg',h5:'Lucifer KBS2 音乐银行现场版 10/07/30',p:'SHINee',className:'group7'},
{src: '/pick/11.jpg',h5:'在街上 MBC Radio Star Super Show现场版 10/09/23',p:'圭贤(Super Junior)&Super Junior',className:'group7'},
{src: '/pick/12.jpg',h5:'Bonamana 美人啊 完整3D现场版',p:'Super Junior',className:'group7'},];
var data8=[{src: '/pick/13.jpg',h5:'Our love 日本现场版',p:'Super Junior',className:'group8'},
{src: '/pick/14.jpg',h5:'SPAO 2010 FW 花絮版',p:'Super Junior',className:'group8'},
{src: '/pick/15.jpg',h5:'Hoot KBS2音乐银行现场版 10/11/19',p:'少女时代',className:'group8'},
{src: '/pick/16.jpg',h5:'《待机室花絮 KBS2 音乐银行现场版 10/07/16',p:'Super Junior',className:'group8'},
{src: '/pick/17.jpg',h5:'待机室 KBS2音乐银行现场版 10/07/23',p:'Super Junior',className:'group8'},
{src: '/pick/18.jpg',h5:'Run Devil Run & Oh! - KBS 歌谣大祝祭 现场版 10/12/30',p:'少女时代',className:'group8'},];
var data9=[{src: '/pick/19.jpg',h5:'Hoot SBS歌谣大战 现场版 10/12/29',p:'少女时代',className:'group9'},
{src: '/pick/20.jpg',h5:'七年间的爱 柳熙烈的写生簿现场版 09/07/18',p:'圭贤(Super Junior)&Super Junior',className:'group9'},
{src: '/pick/21.jpg',h5:'与朋友相爱时 预告版',p:'Beige',className:'group9'},
{src: '/pick/22.jpg',h5:'删除记忆',p:'车盈霏',className:'group9'},
{src: '/pick/23.jpg',h5:'2010MAMA Nominate Spot 1',p:'日韩群星',className:'group9'},
{src: '/pick/24.jpg',h5:'YA YA YA KBS2音乐银行现场版 10/12/03',p:'T-ara',className:'group9'},];
var data10=[{src: '/pick/25.jpg',h5:'Hoot 预告版',p:'少女时代',className:'group10'},
{src: '/pick/26.jpg',h5:'Hot Times SBS人气歌谣现场版 10/12/19',p:'S.M THE BALLAD',className:'group10'},
{src: '/pick/27.jpg',h5:'Hoot & Oh! 2010 Melon Music Awards颁奖礼现场 10/12/15',p:'少女时代',className:'group10'},
{src: '/pick/28.jpg',h5:'Lucifer KBS2音乐银行现场版 10/08/13',p:'SHINee',className:'group10'},
{src: '/pick/29.jpg',h5:'Let\'s Go',p:'韩国群星',className:'group10'},
{src: '/pick/30.jpg',h5:'Aing SBS人气歌谣现场版 10/12/26',p:'Orange Caramel',className:'group10'},];

addLi1(data6,'.like .ul');
addLi1(data7,'.like .ul');
addLi1(data8,'.like .ul');
addLi1(data9,'.like .ul');
addLi1(data10,'.like .ul');
var arr1=[$('.group6'),$('.group7'),$('.group8'),$('.group9'),$('.group10')]
var j=1;
$('.like .ul .list').stop().hide();
arr1[0].stop().show();
// 换一换功能
$('.change2').click(function(){
    arr1[j-1].stop().hide();
    if(j>arr1.length-1){
        j=0;
    }
    arr1[j].stop().show();
    j++;
return false;
})
})();

//回到顶部
var _top = $('.entertainment').offset().top;
$(window).scroll(function(){
    var v = $(window).scrollTop();
    if(v >= _top){  
        $('.return_top').css('display','block').stop().animate({
        bottom:100+'px'
        },500)
    }else{
        $('.return_top').stop().hide();
    }
});
$('.return_top').click(function() { 
    $('html,body').stop().animate({ scrollTop: 0 }, 1000,'linear');
});
