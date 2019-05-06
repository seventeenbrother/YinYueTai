var lists = [{
        src: 'images/-M-298e6a01c0d9f7105fd43fd3f76ac8b9_180x180.jpg',
        title: '黄致列爱豆IDOL应援站'
    },
    {
        src: 'images/-m-a98603d0fe4c4b1678c8206bf3b0736a_100x100.jpg',
        title: 'ShiningU朴昭妍个站'
    },
    {
        src: 'images/-m-e1ce670eb8aba2c362f6713004abfb3e_180x180.jpg',
        title: '李砚全国后援会'
    },
    {
        src: 'images/-m-9397543e19ec71a33c61c94f1e7332b2_180x180.jpg',
        title: 'BornThisWay_崔珉起信仰站'
    },
    {
        src: 'images/-M-6d400482302b0a0e214ca88556c49318_180x180.jpg',
        title: 'SEVENTEEN_POLARLIGHT极光站'
    },
    {
        src: 'images/-m-afcddca06543469ee4ddc4c5ad1719b1_180x180.jpg',
        title: 'Shield_朴孝敏个站'
    },
    {
        src: 'images/-m-eec84edda6a72a45681239a349f209ec_180x180.jpg',
        title: '百度姜涩琪吧'
    },
    {
        src: 'images/-m-ee28b6ba86b9f51a6a815a3640ab863e_100x100.jpg',
        title: '黄景瑜石家庄粉丝后援会'
    },
    {
        src: 'images/-m-cad026cf42ad1e5289fefeffa9d5fd51_180x180.jpg',
        title: 'WNS防弹黄暴团'
    },
    {
        src: 'images/-m-8f5aac4c566c446f8a2e13ef6aa4646f_180x180.jpg',
        title: '王力宏吧后援会'
    },
];
// 生成列表内容
for(var i = 0;i<lists.length;i++) {
    var $li = $('<li></li>').appendTo('.crowd-bottom-list ul'),
        obj = lists[i];
    var html = `
    <a href="javascript:" class="list-img"><img src="${obj.src}" alt=""></a>
    <a href="javascript:"  class="bottom-list-title">${obj.title}</a>
    <span class="add-focus">
        <i></i>
    </span>
    `;
    $li.html(html);
}