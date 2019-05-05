// 榜单部分
var forms1 = [
    {
    num:1,
    src: '-m-61d143b9d77049c78820c0aa08871da0_100x100.jpg',
    name: '3701_NUEST打榜组',
    money: '￥7.0万'
},
{
    num:2,
    src: '552799f8d976492c82bfe34488a11ddb.gif',
    name: 'MonstaXFree中文站',
    money: '￥6,533'
},
{
    num:3,    
    src: 'de83013c0e5cff7bd2bd1de28f864229_100x100.jpeg',
    name: '金秀贤吧',
    money: '￥6,497'
},
{
    num:4,
    src: '-M-fcbaf0f67519a20d7f992a6e880c46b7_100x100.jpg',
    name: 'T-ara逗比组',
    money: '￥3,756'
},
{
    num:5,
    src: '-M-704008a1a776b8c9873af8ae7bc70923_100x100.jpg',
    name: 'SONDER_李宜缜个站',
    money: '￥2,520'
}
];
var forms2 = [
    {
    num:1,
    src: 'yzky9xxoj.jpg',
    name: 'Nuest吧',
    money: '￥2,300'
},
{
    num:2,
    src: '-m-fcbaf0f67519a20d7f992a6e880c46b7_100x100.jpg',
    name: 'T-ara逗比组',
    money: '￥2,086'
},
{
    num:3,    
    src: '-M-fe2b73fbc8222a9b689b04b12d543934_100x100.jpg',
    name: '小gHosT-倩er',
    money: '￥2,085'
},
{
    num:4,
    src: 'header56.gif',
    name: '用户3598359939',
    money: '￥1,988'
},
{
    num:5,
    src: 'header56.gif',
    name: 'ju夫人',
    money: '￥1,820'
}
];
// 生成两个ul
for(var i = 0;i<2;i++){
    var $ul = $('<ul></ul>').appendTo('.crowd-nav-right-form .form-box')
}
// 生成列表内容1
for (var i = 0; i < forms1.length; i++) {
var $li = $('<li></li>').appendTo('.crowd-nav-right-form .form-box ul:eq(0)'),
    obj = forms1[i];
var htmlLi = `
<span class="index-${obj.num}"></span>
<a href="javascript:"><img src="images/${obj.src}" alt="">
    <i>${obj.name}</i>
</a>
<em>${obj.money}</em>
`;
$li.html(htmlLi);
}
// 生成列表内容2
for (var i = 0; i < forms2.length; i++) {
    var $li = $('<li></li>').appendTo('.crowd-nav-right-form .form-box ul:eq(1)'),
        obj = forms2[i];
    var htmlLi = `
    <span class="index-${obj.num}"></span>
    <a href="javascript:"><img src="images/${obj.src}" alt="">
        <i>${obj.name}</i>
    </a>
    <em>${obj.money}</em>
    `;
    $li.html(htmlLi);
    }
// 点击切换榜单
// 显示第一个榜单
$('.crowd-nav-right-form .form-box ul').eq(0).css('display','block');
// 切换榜单
$('.crowd-nav-right-form-title a').eq(0).click(function(){
    $('.crowd-nav-right-form-title .slide').animate({
        left: 1,
    });
    $('.crowd-nav-right-form .form-box ul').eq(0).css('display','block').siblings().css('display','none');

})
$('.crowd-nav-right-form-title a').eq(1).click(function(){
    $('.crowd-nav-right-form-title .slide').animate({
        left: 91,
    });
    $('.crowd-nav-right-form .form-box ul').eq(1).css('display','block').siblings().css('display','none');
})