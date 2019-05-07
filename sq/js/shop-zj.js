// jquery方法：

// 当input获得焦点
$('input[type=text]').click(function () {
    $(this).css('background-position', '-1px -1px').next().css('background-position', '-465px -53px');
    $('.hot-search').css('display', 'block');
    // 鼠标进入.hot-search
    $('.hot-search').mouseenter(function () {
        $('.hot-search').css('display', 'block');
    })
    // 点击搜索不变化
    // $(this).next().click(function(){
    //     $(this).css('background-position', '-465px -53px');
    // })
})

// 当input失去焦点
$('input[type=text]').blur(function () {
    $(this).css('background-position', '-1px -44px').next().css('background-position', '-461px -10px');

})
// 当鼠标离开input
$('input[type=text]').mouseleave(function () {
    $('.hot-search').css('display', 'none');
})

// 头部导航下边框
$('.headFot').find('li').click(function () {
    $(this).children().addClass('active').parent().siblings().children().removeClass('active');
    return false;
})

// 筛选按钮
var span = $('.xl').children().children();
span.eq(0).click(function () {
    span.eq(1).removeClass();
    if ($(this).hasClass('down')) {
        $(this).addClass('up').removeClass('down');
    } else {
        $(this).addClass('down').removeClass('up');
    }
})
span.eq(1).click(function () {
    span.eq(0).removeClass();
    if ($(this).hasClass('down')) {
        $(this).addClass('up').removeClass('down');
    } else {
        $(this).addClass('down').removeClass('up');
    }
})

$('.xz').children().children().click(function () {
    $(this).toggleClass('active').parent().siblings().children().removeClass();

})


// 内容1jquery
// 公司
var company = ['SM Entertainment', '韩国其他公司', 'YG Entertainment', 'SM Entertainment', '韩国其他公司', 'YG Entertainment', 'JYP Entertainment', 'FNC Entertainment', 'CUBE Entertainment', '内地其他公司', 'Jellyfish Entertainment', 'TS Entertainment', 'STARSHIP Entertainment', 'BigHit Entertainment', 'Pledis Entertainment', 'MBK Entertainment', 'CJES Entertainment', '日本其他公司', '相信音乐', '环球唱片', '欧美其他公司', 'Top Media', '环球中国', 'Woolim Entertainment', 'WM Entertainment', '天娱传媒华研国际', '艺人工作室', '海蝶音乐', '华纳唱片', 'LOEN Entertainment', '天浩盛世', '英皇娱乐', '港台其他公司', 'Columbia Records', 'Fantagio Entertainment', '乐华娱乐'];

var ul = $('.m-m-bot').find('ul');
for (let i = 0; i < company.length; i++) {
    $('<li></li>').appendTo(ul).text(company[i]);

}


// 艺人
var actor = ['100%', '2PM', 'Astro(韩国)', 'Apink', 'AOA', 'B.A.P', 'BigBang', 'BTOB', 'B1A4', 'CNBLUE', '陈奕迅', 'DIA', '动漫专属', 'EXO', ' 防弹少年团', 'FTISLAND', 'GOT7', 'GFriend', '圭贤(Super Junior)', 'gugudan', 'G-Dragon(BigBang)', 'Highlight', '黄子韬', 'iKON', 'Infinite', ' 金俊秀', '金在中', 'Jessica', 'Justin', 'Bieber', 'MONSTA', 'XMaroon 5', 'NCTNUEST', 'OH MY GIRL', 'PENTAGON', '朴宝蓝', '群星', 'Red Velvet', '少女时代', 'Super Junior', 'SHINee', 'Seventeen', 'SF9', '水晶男孩', '神话', '申彗星', 'TWICETaylor', 'SwiftT-ara', 'UP10TION', 'VIXX', '五月天', 'WANNA·ONEX', '薛之谦', '宇宙少女', '张国荣', '赵传']
var ul = $('.m-b-bot').find('ul');
for (let i = 0; i < actor.length; i++) {
    $('<li></li>').appendTo(ul).text(actor[i]);
}

// span变化
$('.m-m-one').click(function () {
    if ($(this).hasClass('active')) { //有类名
        // 删除active，变为原来的样子
        $(this).removeClass('active');
        $('.m-m-bot').stop().animate({
            height: 60
        }, 1000)
    } else { //无类名
        // 增加active，变为收起鼠标不触碰状态
        $(this).addClass('active');
        $('.m-m-bot').stop().animate({
            height: 200
        }, 1000)
    }
})
$('.m-m-two').click(function () {
    if ($(this).hasClass('active')) { //有类名
        // 删除active，变为原来的样子
        $(this).removeClass('active');
        $('.m-b-bot').stop().animate({
            height: 60
        }, 1000)
    } else { //无类名
        // 增加active，变为收起鼠标不触碰状态
        $(this).addClass('active');
        $('.m-b-bot').stop().animate({
            height: 200
        }, 1000)
    }
})


// 内容2jquery添加
var arr = [{
    arc: '1.jpg',
    price: 51
}, {
    arc: '2.jpg',
    price: 52
}, {
    arc: '3.jpg',
    price: 53
}, {
    arc: '4.jpg',
    price: 54
}, {
    arc: '5.jpg',
    price: 55
}, {
    arc: '6.jpg',
    price: 56
}, {
    arc: '7.jpg',
    price: 57
}, {
    arc: '8.jpg',
    price: 58
}, {
    arc: '9.jpg',
    price: 59
}, {
    arc: '10.jpg',
    price: 60
}, {
    arc: '11.jpg',
    price: 61
}, {
    arc: '12.jpg',
    price: 62
}, {
    arc: '13.jpg',
    price: 63
}];

var ul = $('.c-bot').find(('ul'));
for (let i = 0; i < arr.length; i++) {
    var boj = arr[i];
    var li = $('<li></li>').appendTo(ul);
    var a = $('<a/>').appendTo(li).attr('href', '#');
    var img = $('<img/>').appendTo(a).attr('src', './img/' + boj.arc);
    var p = $('<p></p>').appendTo(a).text('【五折包邮-全款现货】SHINee 迷你5辑');
    var div = $('<div></div>').appendTo(li).addClass('like');
    $('<span></span>').appendTo(div).text('￥' + boj.price);
    var span_cli = $('<span></span>').appendTo(div).addClass('span_cli');
    var span_cou = $('<span></span>').appendTo(div).addClass('span_cou').text('2');
}

$('.span_cli').mouseenter(function () {
    $(this).addClass('active');
})
$('.span_cli').mouseleave(function () {
    $(this).removeClass('active');
})

ul.on('click', '.span_cli', function () {
    var num = $(this).next().text();
    num++;
    $(this).next().text(num);
})

// 页数


/*
    由于结构的原因，$('.ys a ').index()是从1开始。而$('.ys a ').eq()则是从0开始。。定义num为全局变量！初始为1。
    因为默认active的元素index=1。 两者要相等
    
    当鼠标点击时: 先将点击的元素的index赋值给num。然后用num判断是否为1.为1时关闭上一页按钮，不为1时开启上一页按钮
                然后将点击的元素给类名。其他去掉类名
    当点击上一页时：首先num自身要-1，达到上一页的num。其次要想达到上一页。num和eq相差2。在 num减一的基础上再减一才达到要求
                
    
*/
var num = 1;

$('.ys a ').click(function () {
    num = $(this).index();
    if (num != 1) {
        $('.sy').addClass('act');
    } else {
        $('.sy').removeClass('act');
    }
    $(this).addClass('active').siblings().removeClass('active');
    return false;
})
//    当上一页显示时。注册点击事件
$('.sy').click(function () {
    num = num - 1;
    if (num > 1) {
        $('.ys a ').eq(num - 1).addClass('active').siblings().removeClass('active');
    } else {
        num = 1;
        $('.sy').removeClass('act');
        $('.ys a').eq(0).addClass('active').siblings().removeClass('active');

    }

})
// 点击下一页

$('.xy').click(function () {
    $('.sy').addClass('act');
    num = num + 1;
    if (num <= $('.ys a').length) {
        $('.ys a ').eq(num - 1).addClass('active').siblings().removeClass('active');

    } else {
        num = $('.ys a').length;
        $('.ys a ').eq(num - 1).addClass('active').siblings().removeClass('active')

    }
})