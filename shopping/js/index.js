
// 大轮播图

// 定义一个变量表示当前显示的是哪一项，默认从0开始
var index = 0;
// 给右侧按钮注册click
$('.arrow-right').click(function () {
    // 更新小点
    $('.controls a').eq(index).removeClass('active');
    // 更新索引 
    index++;
    // 判断索引
    if (index >= $('.li').length) {
        index = 0;
    }
    // 通过索引找到对应的轮播项，设置为显示。其他同级的兄弟要隐藏
    $('.li')
        .eq(index)     // 找到对应的轮播项
        .stop().fadeIn(500)   // 让对应的轮播项淡入显示
        .siblings()    // 找到其他同级的兄弟li
        .fadeOut(500); // 淡出隐藏
    // 更新小点
    $('.controls a').eq(index).addClass('active');
});

// 给左侧按钮注册click
$('.arrow-left').click(function () {
    // 更新小点
    $('.controls a').eq(index).removeClass('active');
    // 更新索引 
    index--;
    // 判断索引
    if (index < 0) {
        index = 3;
    }
    // 通过索引找到对 应的轮播项，设置为显示。其他同级的兄弟要隐藏
    $('.li')
        .eq(index)     // 找到对应的轮播项
        .stop().fadeIn(500)   // 让对应的轮播项淡入显示
        .siblings()    // 找到其他同级的兄弟li
        .fadeOut(500); // 淡出隐藏
    // 更新小点
    $('.controls a').eq(index).addClass('active');
});

// 给小点注册事件
$('.controls a').click(function () {
    // 找到轮播当前项，淡出隐藏
    $('.slider .li').eq(index).fadeOut(500);
    // 找到当前的小点，样式恢复默认
    $('.controls a').eq(index).removeClass('active');
    // 获取当前小点的索引，更改index
    index = $(this).index();
    // 下一个轮播项淡入显示
    $('.slider .li').eq(index).stop().fadeIn(500);
    // 找到当前的小点，样式突出显示
    $('.controls a').eq(index).addClass('active');
});


  // 自动轮播
  // 定时器
  var timer;
  function autoPlay()
  {
    timer = setInterval(function()
    {
      index++;
      $('.controls a').removeClass('active');

      if (index == $('.slider >ul >li').length)
      {
        index = 0;
      }
      $('.controls a').eq(index).addClass('active');

      $('.slider >ul >li').eq(index).fadeIn().siblings().fadeOut();

    },1500)
  }
  // 在全局下启动定时器
  autoPlay();

  // 鼠标进入的时候轮播暂停
  $('.slider >ul >li').mouseenter(function()
  {
    clearInterval(timer);

  })
  // 鼠标离开定时器开启
  $('.slider >ul >li').mouseleave(function()
  {
    autoPlay();
  })
 

            // 小轮播图

// 定义一个变量表示当前显示的是哪一项，默认从0开始
var i = 0;
// 给右侧按钮注册click
$('.one').click(function () {
    // 更新小点
    $('.dian a').eq(i).removeClass('dong');
    // 更新索引 
    i++;
    // 判断索引
    if (i >= $('.ul').length) {
        i = 0;
    }
    // 通过索引找到对应的轮播项，设置为显示。其他同级的兄弟要隐藏
    $('.ul')
        .eq(i)     // 找到对应的轮播项
        .stop().fadeIn(500)   // 让对应的轮播项淡入显示
        .siblings()    // 找到其他同级的兄弟li
        .fadeOut(500); // 淡出隐藏
    // 更新小点
    $('.dian a').eq(i).addClass('dong');
});

// 给左侧按钮注册click
$('.three').click(function () {
    // 更新小点
    $('.dian a').eq(i).removeClass('dong');
    // 更新索引 
    i--;
    // 判断索引
    if (i < 0) {
        i = 1;
    }
    // 通过索引找到对 应的轮播项，设置为显示。其他同级的兄弟要隐藏
    $('.ul')
        .eq(i)     // 找到对应的轮播项
        .stop().fadeIn(500)   // 让对应的轮播项淡入显示
        .siblings()    // 找到其他同级的兄弟li
        .fadeOut(500); // 淡出隐藏
    // 更新小点
    $('.dian a').eq(i).addClass('dong');
});





// TOP榜



$('.top-two').click(function () {

    $('.toplisp')
        .fadeIn(500)  
        .siblings()    
        .fadeOut(500); 
});

// 给左侧按钮注册click
$('.top-one').click(function () {

    // 通过索引找到对 应的轮播项，设置为显示。其他同级的兄弟要隐藏
    $('.toplimx')    
        .fadeIn(500)   
        .siblings()   
        .fadeOut(500);
});

// 大家喜欢

var suoy = 0;
$('.huan').click(function () {
    // 更新小点
    // $('.controls a').eq(index).removeClass('active');
    // 更新索引 
    suoy++;
    // 判断索引
    if (suoy >= $('.xhli').length) {
        suoy = 0;
    }
    // 通过索引找到对应的轮播项，设置为显示。其他同级的兄弟要隐藏
    $('.xhli')
        .eq(suoy)     // 找到对应的轮播项
        .stop().fadeIn(500)   // 让对应的轮播项淡入显示
        .siblings()    // 找到其他同级的兄弟li
        .fadeOut(500); // 淡出隐藏
    // 更新小点
    // $('.controls a').eq(suoy).addClass('active');
});


// 推荐专辑

$('.spb').click(function () {

    $('.tjzjlin')
        .fadeIn(500)  
        .siblings()    
        .fadeOut(500); 
});

// 给左侧按钮注册click
$('.mxb').click(function () {

    // 通过索引找到对 应的轮播项，设置为显示。其他同级的兄弟要隐藏
    $('.tjzjlib')    
        .fadeIn(500)   
        .siblings()   
        .fadeOut(500);
});



        // 回到顶部

var _top = $('.top-top').offset().top;
// 给window注册滚动条滚动事件
$(window).scroll(function () {
  // 获取页面卷去的间距
  var v = $(this).scrollTop();
  console.log(v);
  //判断
  if (v >= _top) {
    // 今日团要固定
    $('.top-top').addClass('active');
    // 显示回到顶部按钮
    $('.top').show();
  } else {
    // 今日团要重新回到标准流
    $('.top-top').removeClass('active');
    // 隐藏回到顶部按钮
    $('.top').hide();
  }
});

$('.top').click(function () { 

  $('html,body').animate({scrollTop:0},500);
});


// 获取1楼距离文档的位置
var _top = $('.zxbb').offset().top;
// 给window注册scroll事件
$(window).scroll(function () {
  // 【 目的1：滚动条滚动控制 楼梯导航 是否显示】
  // 获取页面卷去的间距
  var v = $(this).scrollTop();
  // 判断
  if (v >= _top) {
    $('.subnav').show();
  } else {
    $('.subnav').hide();
  }

  // 【目的2：滚动条滚动控制 楼层对应的楼梯项是否选中】
  for (var i = $('.jd').length - 1; i >= 0; i--) {
    if (v >= $('.jd').eq(i).offset().top ) {
      $('.subnav li').eq(i).addClass('current').siblings().removeClass();
      break;
    }
  }


});

//【目的3：点击楼梯导航项，控制页面滚动到对应的楼层】
$('.subnav li').click(function () { 
  // 获取当前导航项的索引
  var index = $(this).index();
  // 根据索引获取对应的楼层 距离 文档的位置
  var v = $('.jd').eq(index).offset().top;
  // 设置给scrollTop
  // $(window).scrollTop(v);
  $('html,body').animate({
    scrollTop:v
  }, 500);
});