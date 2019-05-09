$('.thead a').mouseenter(function(){
        $(this).css('color','#29ddbc')
        .parent().siblings().find('a').css('color','#000');
})
var index = 0;
$('.arrow-right').click(re);
function re() {
    index++;
    if (index >= $('.slider li').length) {
        index = 0;
    }
    $('.slider li').eq(index).fadeIn(500).siblings().fadeOut(500);
    $('.slider li span').css('display','block');
}
$('.arrow-left').click(rr)
    function rr(){
        index--;
    if(index<0){
        index=$('.slider li').length - 1;
    }
    $('.slider li').eq(index).fadeIn(500).siblings().fadeOut(500);
    $('.slider li span').css('display','block');
}
var dd;
function dsq(){
     dd=setInterval(function(){
        re();
    },4000)
}
dsq();
$('.slider').mouseenter(function () {
    clearInterval(dd);
})
$('.slider').mouseleave(function () {
    dsq();
})
$('.banner li').mouseenter(function(){
    $(this).find('.ul2').css('display','block');
    $(this).find('.ul1').css('display','none');

    $(this).siblings().find('.ul1').css('display','block');
    $(this).siblings().find('.ul2').css('display','none');

})
$('.xc2 .arrow-right').click(function(){
    var z='-1253px';
    var zz='-766px';
    $('.xc ul').css('left',z);
    $('.xc .xcu').css('left',zz);
    $('.xc .arrow-right').css('right',0);
})
$('.xc2 .arrow-left').click(function(){
    var z='0px'
    $('.xc ul').css('left',z);
    var zz='486px';
    $('.xc .xcu').css('left',zz);
    $('.xc .arrow-right').css('right',11);
})
$('.zb2 .arrow-right').click(function(){
    var z='-1270px'
    $('.zb ul').css('left',z);
})
$('.zb2 .arrow-left').click(function(){
    var z='0px'
    $('.zb ul').css('left',z);
})
$('.yzzy2 .arrow-right').click(function(){
    var z='-1270px'
    $('.yzzy ul').css('left',z);
})
$('.yzzy2 .arrow-left').click(function(){
    var z='0px'
    $('.yzzy ul').css('left',z);
})
$('.xy2 .arrow-right').click(function(){
    var z='-1270px'
    $('.xy ul').css('left',z);
})
$('.xy2 .arrow-left').click(function(){
    var z='0px'
    $('.xy ul').css('left',z);
})
$('.fz2 .arrow-right').click(function(){
    var z='-1270px'
    $('.fz ul').css('left',z);
})
$('.fz2 .arrow-left').click(function(){
    var z='0px'
    $('.fz ul').css('left',z);
})
$('.lxs2 .arrow-right').click(function(){
    var z='-1270px'
    $('.lxs ul').css('left',z);
})
$('.lxs2 .arrow-left').click(function(){
    var z='0px'
    $('.lxs ul').css('left',z);
})
$('.ych2 .arrow-right').click(function(){
    var z='-1270px'
    $('.ych ul').css('left',z);
})
$('.ych2 .arrow-left').click(function(){
    var z='0px'
    $('.ych ul').css('left',z);
})