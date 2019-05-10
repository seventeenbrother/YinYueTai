window.requestAnimationFrame = window.requestAnimationFrame || function (a) { return setTimeout(a, 1000 / 60) };
window.cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;
function FragmentBanner(option) {

	//实例化时，可传的参数
	this.whiteList = ['container', 'controller', 'size', 'imgs', 'size', 'grid', 'index', 'fnTime', 'boxTime', 'type'];

	//容器将包容控制器
	this.container = '.banner';

	//默认的控制器
	this.controller = {
		view: '.banner-view',
		btn: '.banner-btn',
		num: '.banner-number',
		progre: '.banner-progres'
	};

	//栅格 行*列
	this.grid = {
		line: 5,
		list: 10
	};

	//容器的大小
	this.size = {
		width: 1200,
		height: 675,
	};

	//切换类型
	this.type = 1;

	//索引位置
	this.index = 0;

	//函数每次切换时间
	this.fnTime = 5000;

	//栅格每次运动时间
	this.boxTime = 2000;

	//栅格运动结束的时间
	this.activeTime = new Date();

	// 判断可选属性是否存在，存在并设置
	for (var a = 0, attrLenght = this.whiteList.length; a < attrLenght; a++) {

		var attr = this.whiteList[a];
		if (option[attr] != undefined) {
			this[attr] = option[attr];
		}
	}

	// ***************************************************
	// 判断过后没有执行函数，？？？？
	for (var i in option) {
		if (this.whiteList[i] !== undefined) { ; }
	}
	// ***************************************************
	// 调用原型中的方法
	this.init();
}

// ---------原型对象--------------------------
FragmentBanner.prototype = {
	// 设置原型对象的指向
	constructor: FragmentBanner,

	init: function () {
		// 获取容器
		this.container = document.querySelector(this.container);
		// 判断容器是否获取成功
		if (!this.container) {
			// 容器获取失败提示信息
			return alert('获取banner容器失败');
		} else {
			// 设置容器的宽高
			this.container.style.width = this.size.width + 'px';
			this.container.style.height = this.size.height + 'px';
		}
		// 添加elem属性，值为对象
		this.elem = {};
		for (var e in this.controller) {
			// 将选择的控制器添加到elem的属性中
			this.elem[e] = this.container.querySelector(this.controller[e]);
			// 控制器不存在时的提示
			if (this.elem[e] == null) {
				return alert('获取' + e + '容器失败');
			}
		}
		//获取栅格的宽高
		var w = this.size.width / this.grid.list,
			h = this.size.height / this.grid.line;
		// 设置elem.viewBox为数组，也就是实例化一个数组
		this.elem.viewBox = new Array();
		// 多少行
		for (var i = 0, iL = this.grid.line; i < iL; i++) {
			// 多少列
			for (var j = 0, jL = this.grid.list; j < jL; j++) {
				// 创建i元素
				var newI = document.createElement('i');
				// 设置css样式
				this.setCss(newI, {
					width: w + 'px',
					height: h + 'px',
					left: 0,
					top: 0,
					opacity: 1,
					backgroundImage: 'url("' + this.imgs[this.index] + '")',
					backgroundSize: this.size.width + 'px ' + this.size.height + 'px',
					backgroundPosition: w * -j + 'px ' + h * -i + 'px'
				});
				// 将创建的元素添加到类名为banner-view的div中
				this.elem.view.appendChild(newI);
				// 将创建的元素追加到viewbox数组中
				this.elem.viewBox.push(newI);
			}
		}

		//按钮动作
		for (var b = 1; b >= 0; b--) {
			// 创建span作为按钮
			var oB = document.createElement('span');
			// 设置span内的尖括号<>
			(b) ? oB.innerHTML = '&lt;' : oB.innerHTML = '&gt;';
			// 设置按钮索引
			oB.setIndex = b;
			// 添加按钮点击事件
			oB.onclick = function (obj) {
				// 调用展示动画
				this.show({
					switch: true,
					change: obj.setIndex == 0
				});
				// 绑定预设参数为当前按钮oB
			}.bind(this, oB);
			// 将创建的按钮添加到elem的btn属性中
			this.elem.btn.appendChild(oB);
		}

		//图片数量小圆点的设置
		for (var n = 0, nL = this.imgs.length; n < nL; n++) {
			// 创建i元素
			var oI = document.createElement('i');
			// 设置索引值
			oI.setIndex = n;
			// 添加点击事件
			oI.onclick = function (obj) {
				//显示动画
				this.show({
					switch: true,
					change: obj.setIndex
				});
				// 绑定预设参数为当前原点oI
			}.bind(this, oI)
			// 将创建的i添加到elem的num属性中
			this.elem.num.appendChild(oI);
		}
		// 将num中的所有i赋值到elem的numFind属性中
		this.elem.numFind = this.elem.num.querySelectorAll('i');
		//创建两个进度条
		this.progre = new Array;
		for (var p = 1; p >= 0; p--) {
			// 创建i元素当进度条
			var oP = document.createElement('i');
			// 设置css样式
			this.setCss(oP, {
				width: 0,
				backgroundColor: p ? '#00c3ff' : '#ffc300'
			});
			// 创建的进度条添加到elem的progre属性中
			this.elem.progre.appendChild(oP);
			// 创建的进度条存放到progre数组中
			this.progre.push(oP);
		}
		//显示动画
		this.show();
		// 设置索引为index的i元素类名为on
		this.elem.numFind[this.index].className = 'on';
	},
	// 设置索引值函数
	setIndex: function () {
		// 设置当前索引为 index和图片数组长度的余数
		this.index %= this.imgs.length;
		// 当索引小于0时，将索引赋值为图片数组长度减1
		this.index = (this.index < 0) ? this.imgs.length - 1 : this.index;
		// 设置索引为index的i元素类名为on
		this.elem.numFind[this.index].className = 'on';
	},
	// 获取时间
	getTypeTime: function () {
		// 创建一个数组
		var timer = new Array();
		// 判断type的值（1或2）
		switch (this.type) {
			case 1://数组中有两个随机数
				// 数组中追加一个随机数
				timer.push(this.boxTime / 4 + Math.random() * this.boxTime / 4);
				// 复制第一个随机数追加到数组中
				timer.push(timer[0]);
				break;
			default://数组中有一个包含一个随机数和固定数的数组和这两个数字的和
				// 追加一个包含一个随机数和固定数的数组
				timer.push([Math.random() * this.boxTime / 5, this.boxTime / 10 * 3]);
				// 追加这两个数字的和
				timer.push(timer[0][0] + timer[0][1]);
				break;
		}
		// 返回这个数组
		return timer;
	},
	show: function (order) {
		// 判断是否有传值，有则直接用，无则赋值为对象
		order = order || {};
		// 判断当前时间是否大于栅格运动结束时间
		if (new Date() >= this.activeTime) {
			// 删除索引为index的i元素类名
			this.elem.numFind[this.index].className = '';
			//下次播放动画时候的进度条的css样式
			this.setCss(this.progre[1], { width: 0 })
				// 链式编程直接.调用动画函数
				.anime(this.progre[1], {
					width: this.size.width
				}, this.fnTime, function () {
					// 显示动画
					this.show({
						switch: true,
						change: true
					});
					// 绑定函数内的this指向
				}.bind(this));
			// 创建一个开关
			var status = true,
				// 设置活动时间初始为0
				activeTime = 0;
			// 为每一个i元素块设置动画
			for (var i = 0, iL = this.elem.viewBox.length; i < iL; i++) {
				// 开始时间
				var startTime = this.getTypeTime(),
					// 结束时间
					endTime = this.getTypeTime(),
					// 取出每一个i元素块
					obj = this.elem.viewBox[i];
				// 将活动时间设置为三个时间中的最大值
				activeTime = Math.max(activeTime, startTime[1] + endTime[1]);
				// 动画 参数：元素 动画属性 动画开始时间 函数
				this.anime(obj, {
					left: Math.ceil(Math.random() * this.size.width * 2 - this.size.width),
					top: Math.ceil(Math.random() * this.size.height * 2 - this.size.height),
					opacity: 0
				}, startTime[0], function (obj) {

					if (order.switch && status) {
						// 判断order.change是否为数字类型
						if (/number/i.test(typeof order.change)) {
							this.index = order.change;
						} else {
							(order.change) ? ++this.index : --this.index;
						}
						this.setIndex();
						this.elem.numFind[this.index].className = 'on';
						status = false;
					}

					this.setCss(obj, { backgroundImage: 'url("' + this.imgs[this.index] + '")' })
						.anime(obj, {
							left: 0,
							top: 0,
							opacity: 1
						}, endTime[0]);
					// 绑定this指向，预设参数为obj也就是带背景图的i元素
				}.bind(this, obj));
			}
			//栅格结束运动的时间
			this.activeTime = new Date(new Date().getTime() + activeTime);

			this.setCss(this.progre[0], { width: 0 })
				.anime(this.progre[0], {
					width: this.size.width
				}, activeTime);
		}
	},
	// 设置css样式的函数
	setCss: function (obj, json) {
		// 遍历
		for (c in json) {
			// 是否为透明属性
			if (c == 'opacity') {
				// 透明度
				obj.style.opacity = c;
				// 透明度 ie兼容写法
				obj.style.filter = "alpha(opacity=" + (json[c] * 100) + ")";
			} else {
				// 其他样式的设置
				obj.style[c] = json[c];
			}
		}
		// 返回当前的对象
		return this;
	},
	// 动画函数 参数： 元素  属性  结束时间
	anime: function (obj, attr, endTime, callback) {

		(obj.timer) && cancelAnimationFrame(obj.timer);

		var cssJosn = obj.currentStyle || getComputedStyle(obj, null),
			start = {}, end = {}, goTime;

		//设置初始属性值和结束属性值
		for (var key in attr) {

			if (attr[key] != parseFloat(cssJosn[key])) {

				start[key] = parseFloat(cssJosn[key]);
				end[key] = attr[key] - start[key];
			}
		}

		goTime = new Date();

		if (endTime instanceof Array) {

			(function delayFn() {

				if ((new Date() - goTime) >= endTime[0]) {

					endTime = endTime[1];
					goTime = new Date();
					ref();
				} else {

					obj.timer = requestAnimationFrame(delayFn);
				}
			})();
		} else {

			ref();
		}


		function ref() {

			var prop = (new Date() - goTime) / endTime;
			(prop >= 1) ? prop = 1 : obj.timer = requestAnimationFrame(ref);
			for (var key in start) {

				var val = -end[key] * prop * (prop - 2) + start[key];

				if (key == 'opacity') {

					obj.style.opacity = val;
					obj.style.filter = "alpha(opacity=" + (val * 100) + ")";
				} else {

					obj.style[key] = val + 'px';
				}
			}
			(prop === 1) && callback && callback.call(obj);
		};
	}
}