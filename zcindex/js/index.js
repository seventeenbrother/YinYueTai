// 新闻数据
var news = [{
        one: '李钟硕秀智《当你沉睡时》蝉联收视冠军',
        two: '35岁唐宁被曝已离婚 曾演《大唐双龙传》',
        three: '白百何出轨门后携子现身！亲昵尽显母爱',
        four: '王源送的?甜馨收到男神送礼物 爱不释手一脸开心',
        five: '心疼！杨洋穿高领长袖竟是为遮身上的伤',
        six: '王俊凯考场遭堵截 公司怒挂照片谴责',
        seven: '亮瞎眼！古装剧里得罪造型师的女星们',
        eight: '韩星高雅拉与SM合约到期 今后去向引关注',
        nine: '蒋劲夫谈“吻”黄子韬：嘴唇好软，我好幸福！',
        ten: '韩外交部：已向中方传达对“限韩令”忧虑',
        eleven: '17岁少女偶像宣布毕业 似受恋爱绯闻影响',
        twelve: '为什么娶丁文琪？林宥嘉甜称：她适合做老婆',
        thirteen: '网曝王源王祖蓝"王牌2"当队长 谢娜白百何退出',
        fourteen: '张艺兴《天天》再现性感地板舞 自曝为专辑失眠',
        fifteen: '甜馨易烊千玺昔日合影曝光 大眼尖下巴星味儿足',
    },
    {
        one: '鹿晗关晓彤“公开”秀恩爱 小情侣撒狗粮',
        two: 'Winner宋旻浩助阵EPIK HIGH新歌',
        three: '魏晨为十周年巡演狂健身 肌肉荷尔蒙炸裂',
        four: '2017上半年女团评价排行榜',
        five: '宋一国带三胞胎走红毯 萌娃变绅士萌cry',
        six: '杨丞琳称婚礼不在海岛 竟因这三点爱上李荣浩',
        seven: '林宥嘉带老婆看极光 "脚架视角"泄蜜月地',
        eight: 'Ella晒照庆祝儿子满月 小劲宝身高体重曝光',
        nine: 'MXM专访 系上音乐人生的第一粒纽扣',
        ten: '崔始源爱犬咬人事件反转',
        eleven: 'EXID确定11月7日发新专辑 率智参与录音',
        twelve: '为TWICE新曲《SIGNAL》SHOWCASE舞台公开',
        thirteen: '王嘉尔15岁混血师妹撞衫杨幂baby 谁输谁赢',
        fourteen: '暖心!Hebe演唱会送福利 坐粉丝旁唱歌惹尖叫',
        fifteen: 'HIGH起来！女团练习室点击量排行Top15',
    }
]
// 创建新闻列表
for (var i = 0; i < news.length; i++) {
    // 创建轮播新闻li
    var lis = news[i];
    var $li = $('<li></li>');
    $li.appendTo('.crowd-nav-right-news-main ul')
    // var $div = $('<div></div>');
    // $div.appendTo($firstLi);
    for (var key in lis) {
        var $div = $('<div></div>'),
            $a = $('<a></a>');
        $a.text(lis[key]);
        $a.appendTo($div);
        $div.appendTo($li);
    }
}
// 触碰问号显示规则
$('.crowd-nav-right-form .block').mouseenter(function () {
    $('.crowd-nav-right-form .rule').css('display', 'block')
})
$('.crowd-nav-right-form>h4>.block').mouseleave(function () {
    $('.crowd-nav-right-form .rule').css('display', 'none')
})
// 回到顶部
$(window).scroll(function () {
    var _top = $(this).scrollTop();
    if (_top > 700) {
        $('.back-top').css('display', 'block').animate({
            bottom: 100
        }, 500);
    } else {
        // $('.back-top').css('display','none').animate({bottom: -10},0);
        $('.back-top').css({
            display: 'none',
            bottom: 0
        })

    }
})
$('.back-top').click(function () {
    $('html').animate({
        scrollTop: 0
    }, 500);
})
// crowd-nav部分鼠标触碰图片放大
$('.crowd-box .big-img').mouseenter(function(){
    $(this).children().stop().animate({
        marginTop: -14,
        marginLeft: -14,
        width: '110%',   
    },500);
})
// crowd-nav部分鼠标离开图片缩小
$('.crowd-box .big-img').mouseleave(function(){
    $(this).children().stop().animate({
        width: '100%',
        marginTop: 0,
        marginLeft: 0
    },500);
})

