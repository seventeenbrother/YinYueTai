var mvs = [{
        src: 'images/-M-8acef7f687e98de5be9649458ef158e3_240x135.jpg',
        playCount: 104865,
        message: 19,
        introduce: '小童星是怎样炼成的 V榜有话说EP19 - 音悦V榜 & 张一山 & 杨紫',
        userIcon: 'images/0D2E01407BDFEF857A653F4DBBB1A979_100x100.jpeg',
        userName: '音悦V榜'
    },
    {
        src: 'images/-M-1bbefd9a85ce8187772a3bbea853d87d_240x135.png',
        playCount: 87702,
        message: 28,
        introduce: 'Wanna One Cinematic Teaser - WANNA·ONE',
        userIcon: 'images/-M-145d2834c380aa64979c157d1fee53ce_100x100.jpg',
        userName: '新沙洞扛把子'
    },
    {
        src: 'images/eef40a1d4e8145d20b7164d58073d506_240x135.jpg',
        playCount: 33189,
        message: 2,
        introduce: 'HEY!再见 饭制版  - 周杰伦 & 金秀贤',
        userIcon: 'images/-M-22bfdbc2d35b586c77fc96f759e4d1bc_100x100.jpg',
        userName: 'UniqueKK'
    },
    {
        src: 'images/-M-d18aa22f54205934e19e18190f8fa23f_240x135.jpg',
        playCount: 1292220,
        message: 227,
        introduce: 'EP199 韩国性感山脉  - YYT特别企划 & 李孝利 & 全烋星(Secret) & 朴孝敏(T-ara) & 朴智妍 & 金泫雅 & 佳仁(B.E.G) & 宣美(Wonder Girls)',
        userIcon: 'images/0D2E01407BDFEF857A653F4DBBB1A979_100x100.jpeg',
        userName: '音悦V榜'
    },
    {
        src: 'images/46e5c7faa43c6c6f720e39c15035f53d_240x135.jpg',
        playCount: 33099,
        message: 14,
        introduce: '恋するフォーチュンクッキー & Talk (CDTV スペシャル!ハロウィン音楽祭2017)17/10/25 - AKB48',
        userIcon: 'images/72fb8549jw1e8qgp5bmzyj2050050aa8.jpg',
        userName: 'camaro2008'
    },
    {
        src: 'images/7d05224113db59836fadcb559822d3d2_240x135.jpg',
        playCount: 100858,
        message: 27,
        introduce: '韩国六年级学生跳<我呀我> - 模仿翻唱 & 舞蹈视频',
        userIcon: 'images/-M-0f1c83164ce48e573cbd9e5b51f341f3_100x100.jpg',
        userName: 'Lius_iiiiiii'
    },
    {
        src: 'images/4ecfecbbb4b41b4436472090107516f4_240x135.jpg',
        playCount: 34127,
        message: 3,
        introduce: 'UNIQ LIFE S2 EP5汶翰的收拾行李 TIP! 中文字幕 16/12/02(UNIQ字幕组) - UNIQ & 李汶翰(UNIQ)',
        userIcon: 'images/-M-fe2b73fbc8222a9b689b04b12d543934_100x100.jpg',
        userName: 'UNIQ字幕组'
    },
    {
        src: 'images/692c6ce200999d22babc7136e47fdfa6_240x135.jpg',
        playCount: 54745,
        message: 12,
        introduce: '皮克斯《寻梦环游记》定档11月24日全国上映 亡灵世界奇幻历险温情暖心 - 看点新片预告',
        userIcon: 'images/AA09013F4159D4E2EC502C706F5AED57_100x100.jpeg',
        userName: '流苏的旧时光'
    }
];
// 生成列表内容
for (var i = 0; i < mvs.length; i++) {
    var obj = mvs[i];
    var $li = $('<li></li>').appendTo('.crowd-mv-main ul');
    var htmlLi = `
                            <div class="mv-top">
                                <a href="javascript:">
                                    <img src="${obj.src}" alt="">
                                    <span class="mv-play"></span>
                                    <span class="mv-bg"></span>
                                    <div class="mv-top-bottom">
                                        <i class="mv-play-counts">${obj.playCount}</i>
                                        <i class="mv-message">${obj.message}</i>
                                    </div>
                                </a>
                            </div>
                            <div class="mv-bottom">
                                <p class="mv-introduce"><a href="javascript:">${obj.introduce}</a></p>
                                <p class="mv-user">
                                    <img src="${obj.userIcon}" alt="">
                                    <span>${obj.userName}</span>
                                </p>
                            </div>
    `
$li.html(htmlLi);
}