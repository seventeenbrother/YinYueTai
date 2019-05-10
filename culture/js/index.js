// 目的1： 滚动条滚动控制今日团是否固定 以及 回到顶部按钮是否显示
// 目的2： 点击回到顶部按钮，实现回到顶部（动画版）

// 【 目的1： 滚动条滚动控制今日团是否固定 以及 回到顶部按钮是否显示】
// 获取今日团距离文档的位置
var _top = $('.xiqu').offset().top;   // 注意：top不要当做变量名，因为已经为window使用。所以设置无效。
// 给window注册滚动条滚动事件
$(window).scroll(function () {
  // 获取页面卷去的间距
  var v = $(this).scrollTop();
  console.log(v);
  //判断
  if (v >= _top) {
    // 今日团要固定
    $('.xiqu').addClass('active');
    // 显示回到顶部按钮
    $('.top').show();
  } else {
    // 今日团要重新回到标准流
    $('.xiqu').removeClass('active');
    // 隐藏回到顶部按钮
    $('.top').hide();
  }
});


// 目的2： 【点击回到顶部按钮，实现回到顶部（京东版）】
// $('.top').click(function () { 
//   $(window).scrollTop(0);
// });


// 目的2： 【点击回到顶部按钮，实现回到顶部（淘宝版-带动画的）】
$('.top').click(function () { 
  // DOM操作scollTop: 
  // document.body.scrollTop        document.body → body
  // document.documentElement.scrollTop  document.documentElement → html

  // 动谁？动画操作的一定是某一个标签元素.
  // 注意：若滚动条，在窗口上时，若设置动画时，操作的元素是html 和 body
  // 动什么属性？   scrollTop:目标值
  $('html,body').animate({scrollTop:0},500);
});

