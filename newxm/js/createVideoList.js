!function() {
    // 数据
    var datas = [
      { title: '你也有今天', src: './upload/zdtm/1.jpg', author: '蔡依林', time: '2019.05.09', type: '高清', timeLong: '03:22'},
      { title: '你也有今天', src: './upload/zdtm/2.jpg', author: '蔡依林', time: '2019.05.09', type: '高清', timeLong: '03:22'},
      { title: '你也有今天', src: './upload/zdtm/3.jpg', author: '蔡依林', time: '2019.05.09', type: '高清', timeLong: '03:22'},
      { title: '你也有今天', src: './upload/zdtm/4.jpg', author: '蔡依林', time: '2019.05.09', type: '高清', timeLong: '03:22'},
      { title: '你也有今天', src: './upload/zdtm/5.jpg', author: '蔡依林', time: '2019.05.09', type: '高清', timeLong: '03:22'},
      { title: '你也有今天', src: './upload/zdtm/6.jpg', author: '蔡依林', time: '2019.05.09', type: '高清', timeLong: '03:22'},
      { title: '你也有今天', src: './upload/zdtm/7.jpg', author: '蔡依林', time: '2019.05.09', type: '高清', timeLong: '03:22'},
      { title: '你也有今天', src: './upload/zdtm/8.jpg', author: '蔡依林', time: '2019.05.09', type: '高清', timeLong: '03:22'},
      { title: '你也有今天', src: './upload/zdtm/9.jpg', author: '蔡依林', time: '2019.05.09', type: '高清', timeLong: '03:22'},
      { title: '你也有今天', src: './upload/zdtm/10.jpg', author: '蔡依林', time: '2019.05.09', type: '高清', timeLong: '03:22'},
    ];
    for (var i = 0; i < datas.length; i++) {
        var str = `
        <li>
            <img src="${datas[i].src}" alt="">
            <p class="active">${datas[i].title}</p>
            <p>艺人： <span>${datas[i].author}</span></p>
            <p>发布时间： ${datas[i].time}</p>
            <div class="tag tag1">${datas[i].type}</div>
            <div class="time">${datas[i].timeLong}</div>
        </li>
        `;
        $('.video-list .content ul').append(str);
    }
}();
