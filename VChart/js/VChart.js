window.onload = function () {

  // V榜--周榜 start
  var datas = [
    {
      h3: 'V榜TOP10',
      p1: '球音乐超IN指标！Global TOP10 MV Countdown！',
      src: './picture/v1.jpg',
      a: 'V榜TOP10 2019 第十六期 蔡徐坤&蔡依林&westlife&防弹少年团&BabyKingdom',
      p2: '2019年第16期V榜TOP10,带你全面掌握五地榜单!本周内地蔡徐坤、港台蔡依林、欧美Westlife、韩国防弹少年团、日本BabyKingdom强势夺冠!更多精彩节目里见!'
    },
    {
      h3: 'V榜看音乐',
      p1: '为你推荐全球美妙好音乐，我的音乐我做主！',
      src: './picture/v2.jpg',
      a: 'VMA欧美年度热单表彰大会 V榜看音乐EP19',
      p2: '一年一度的全球音乐盛典MTV音乐录影带颁奖礼又来啦!!,不过今天小编的重点可不是讨论这些奖项,划重点!!推荐!推荐!小编这期只是纯私心推荐一些心水的舞台表演,各位看官们就只管好好欣赏吧~'
    },
    {
      h3: 'V榜密谈室',
      p1: '全明星顶配阵容，专业音乐的解读，超级有趣的回应，创造全新的化学效果，再度掀起狂潮！',
      src: './picture/v3.jpg',
      a: '新人&quot;相声组&quot;LiCong李聪&Veegee专访 音悦密谈室EP50',
      p2: '【音悦密谈室】新人&quot;相声&quot;李聪和Veegee的专访来啦!一向以舞蹈为主的LiCong李聪下次MV想要拍百人齐舞,自己却要上演内心戏?原来活泼可爱的十九岁少女Veegee自我形象居然是&quot;高冷&quot;?二位在镜头前疯狂&quot;互殴&quot;又是为了什么?不是组合胜似组合的他们默契度又如何呢?还有绝赞清唱现场快来戳节目观看!'
    },
    {
      h3: 'V榜有话说',
      p1: '海纳百川，带你看尽天下！这里有无比诚恳的称赞也有无比毒舌的吐槽！史上无敌爆笑“调侃”旋风来袭！',
      src: './picture/v4.jpg',
      a: '18年新番前瞻 V榜有话说EP20',
      p2: 'Hello小伙伴们,蛋黄酱我又回来了!一个多月没见,这就到了2018年日本新番表的公开时间了。经过我这一整年的搜罗整理,发现明年将有很多部实力口碑不错的续作相继回归。那么今天,蛋黄酱就给大家推荐一些期待度颇高的18年新番吧!'
    },
    {
      h3: 'V榜特别企划',
      p1: '这里有前沿的音乐动脉和MV时尚潮流，奇特巧妙的独家盘点，打造新鲜，好玩，有范儿的特别节目！',
      src: './picture/v5.jpg',
      a: 'EP226 11月K-POP歌坛神仙打架现场',
      p2: '各路爱豆们为了年底冲业绩纷纷出新歌,年末的歌谣界竞争想必也会非常激烈,一场大型神仙打架将隆重上演。今天小编就为大家盘点一下11月究竟会有哪些爱豆会加入到这批回归浪潮中~'
    }
  ];
  var week_c = document.getElementById('week-chart');
  var lis = week_c.getElementsByClassName('section-l')[0].getElementsByTagName("li");
  for (let i = 0; i < lis.length; i++) {
    lis[i].index = i;
    lis[i].onclick = function () {
      weekChart(lis, this.index);
    }
  }
  weekChart(lis);
  function weekChart(lis, index) {
    if (index == undefined) {
      var weeks = new Date();
      var weekNum = weeks.getDay();
      if (weekNum > 0 && weekNum < 6) {
        index = weekNum - 1;
      } else {
        index = parseInt(Math.random() * 5);
      }
    }
    var sec_r = document.getElementById("section-r");
    var oH3 = sec_r.querySelector("h3");
    var oImg = sec_r.querySelector("img");
    var oA = sec_r.querySelector("a");
    var oPs = sec_r.querySelectorAll("p");
    oH3.innerHTML = datas[index].h3;
    oImg.src = datas[index].src;
    oA.innerHTML = datas[index].a;
    oPs[0].innerHTML = datas[index].p1;
    oPs[1].innerHTML = datas[index].p2;
    for (let i = 0; i < lis.length; i++) {
      lis[i].className = '';
    }
    lis[index].className = 'sec-active';
  }

  // V榜--周榜 end
  // 周榜冠军 start
  var championData = [
    {
      src: './picture/champion1.jpg',
      h4: '没有意外 官方版',
      a: '蔡徐坤',
      oi: ['595453', '53', '296', '1402', '37333', '430311', '556']
    },
    {
      src: './picture/champion4.jpg',
      h4: '首領!BURACO',
      a: 'BabyKingdom',
      oi: ['2453', '3245', '234', '3452', '45354', '45345', '123']
    },
    {
      src: './picture/champion2.jpg',
      h4: '红衣女孩 官方版',
      a: '蔡依林',
      oi: ['45312', '458', '63784', '45453', '453342', '8789', '456']
    },
    {
      src: './picture/champion4.jpg',
      h4: '没有意外 官方版',
      a: '蔡徐坤',
      oi: ['73845', '5445', '2453', '458', '68745', '89342', '4535']
    }, {
      src: './picture/champion5.jpg',
      h4: 'Better Man',
      a: 'Westlife',
      oi: ['43578', '534', '738', '1355', '6378', '73854', '453']
    },
    {
      src: './picture/champion1.jpg',
      h4: 'Boy With Luv',
      a: '防弹少年团',
      oi: ['595453', '53', '296', '1402', '37333', '430311', '556']
    }
  ];
  var timer;
  var column_t = my$('chamList');
  var champion_b = document.querySelector(".champion-b");
  var lists = column_t.querySelectorAll("li");
  var indexNum = 0;
  for (let i = 0; i < lists.length; i++) {
    lists[i].index = i;
    lists[i].onclick = function () {
      indexNum = this.index;
      weekChampion(championData, indexNum);
    };
  }
  champion_b.onmouseenter = function () {
    clearInterval(timer);
  }
  champion_b.onmouseleave = function () {
    autoPlay();
  }


  function autoPlay() {
    clearInterval(timer);
    timer = setInterval(function () {
      indexNum++;
      indexNum %= lists.length;
      weekChampion(championData, indexNum);
    }, 1000);
  }
  function weekChampion(championData, index) {
    var lists = document.querySelector('#chamList').querySelectorAll("li");
    var oImg = document.querySelector('.champion-img').querySelector("img");
    var ch_data = document.querySelector('.champion-data');
    var oH4 = ch_data.querySelector('h4');
    var oA = ch_data.querySelector('a');
    var oIs = ch_data.querySelectorAll("i");
    for (let i = 0; i < lists.length; i++) {
      lists[i].className = '';
    }
    lists[index].className = "bd-active";
    oImg.src = championData[index].src;
    oH4.innerHTML = championData[index].h4;
    oA.innerHTML = championData[index].a;
    for (let i = 0; i < oIs.length; i++) {
      oIs[i].innerHTML = championData[index].oi[i];
    }
  }
  autoPlay();
  var returntop = document.querySelector('.hide');
  returntop.onclick = function name(params) {
    var html = document.documentElement;
    animate(html, scrollY)
    // html.scroll(0, 0);

  }
  window.onscroll = function () {
    if (scrollY > 1000) {
      returntop.className = 'returntop';
    } else {
      returntop.className = 'hide';
    }
  }
  function animate(element, current) {
    clearInterval(element.timeid);
    element.timeid = setInterval(function () {
      var flag = true;
      var target = 0;
      var step = (target - current) / 10;
      step = step > 0 ? Math.ceil(step) : Math.floor(step);
      current += step;
      element.scroll(0, current);
      if (current != target) {
        flag = false;
      }
      if (flag) {
        clearInterval(element.timeid);
      }
    }, 20);
  }
  function my$(id) {
    return document.getElementById(id);
  }





}
