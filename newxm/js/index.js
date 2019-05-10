var data1=[{src: '1.jpg',h5:'TEAM SPARK火星团助阵',p:'第十四届亚洲模特盛典',className:'group1',span:89.0},
{src: '2.jpg',h5:'缔造全新视听盛宴',p:'梁欢「我们去未来」新专辑发布会',className:'group1',span:91.1},
{src: '3.jpg',h5:'开启业内新文旅时代',p:'“戈壁天堂”发布启动会',className:'group1',span:76.3},
{src: '4.jpg',h5:'“甜蜜风暴”正式起航',p:'王心凌CYNDI LOVES 2SING巡演发布会',className:'group1',span:65.6},
{src: '5.jpg',h5:'周深,陆虎,王心凌到场助阵',p:'“流行音乐全金榜年度盛典”启动记者会',className:'group1',span:65.6},
];
var data2=[{src: '6.jpg',h5:'TEAM SPARK火星团助阵',p:'第十四届亚洲模特盛典',className:'group2',span:123},
{src: '7.jpg',h5:'缔造全新视听盛宴',p:'梁欢「我们去未来」新专辑发布会',className:'group2',span:345},
{src: '8.jpg',h5:'开启业内新文旅时代',p:'“戈壁天堂”发布启动会',className:'group2',span:45.6},
{src: '9.png',h5:'“甜蜜风暴”正式起航',p:'王心凌CYNDI LOVES 2SING巡演发布会',className:'group2',span:65.4},
{src: '10.jpg',h5:'周深,陆虎,王心凌到场助阵',p:'“流行音乐全金榜年度盛典”启动记者会',className:'group2',span:65.6},
];

function addLi1(datas){
    for(var i=0;i<datas.length;i++){
    var obj=datas[i];
    $('<li class="list"></li>').addClass(obj.className).appendTo('.ul').html( `
    <a href="#">
        <img src="./upload/zzdb/${obj.src}" alt="">
        <h5>${obj.h5}</h5>
        <p class="active">${obj.p}</p>  
    </a>
    <span>${obj.span}</span>
    `)
  }
}
addLi1(data1);
addLi1(data2);
// addLi1(data3);
// addLi1(data4);
var arr=[$('.group1'),$('.group2')]
var i=1;
$('.ul .list').hide();
arr[0].show();
$('.replace').click(function(){
    arr[i-1].hide();
    if(i>arr.length-1){
        i=0;
    }
    arr[i].show();
    i++;
return false;
});
$(function(){
    
})