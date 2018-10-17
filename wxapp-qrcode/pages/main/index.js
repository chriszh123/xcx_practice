var QR = require("../../utils/qrcode.js");
Page({
	data: {
		/*
    官网说hidden只是简单的控制显示与隐藏，组件始终会被渲染，
    但是将canvas转化成图片走的居然是fail，hidden为false就是成功的
    所以这里手动控制显示隐藏canvas
    */
		maskHidden: true,
		imagePath: '',
		placeholder: 'http://baidu.com',
		imageList: []
	},
	onload: function (options) {
		// 页面初始化 options为页面跳转所带来的参数
		var size = this.setCanvasSize(); //动态设置画布大小
		var initUrl = this.data.placeholder;
		this.createQrCode(initUrl, 'mycanvas', size.w, size.h);
		console.log("Page->onload:initUrl:" + initUrl);
	},
	onReady: function () {
		console.log("Page->onReady");
	},
	onShow: function () {
		//页面显示
		console.log("Page->onShow");
	},
	onHide: function () {
		//页面隐藏
		console.log("Page->onHide");
	},
	onUnload: function () {
		//页面关闭
		console.log("Page->onUnload");
	},
	setCanvasSize: function () {
		//适配不同屏幕大小的canvas
		var size = {};
		try {
			var res = wx.getSystemInfoSync();
			var scale = 750 / 686; //不同屏幕下canvas的适配比例；设计稿是750宽
			var width = res.windowWidth / scale;
			var height = width; //canvas画布为正方形
			size.w = width;
			size.h = height;
		} catch (e) {
			// Do something when catch error
			console.log('获取设备信息失败' + e);
		}

		return size;
	},
	createQrCode: function (url, canvasId, cavW, cavH) {
		//调用插件中的draw方法，绘制二维码图片
		QR.qrApi.draw(url, canvasId, cavW, cavH);
		var that = this;
		//二维码生成之后调用canvasToTempImage();延迟3s，否则获取图片路径为空
		var st = setTimeout(() => {
			that.canvasToTempImage();
			clearTimeout(st);
		}, 3000);
	},
	canvasToTempImage: function () {
		//获取临时缓存照片路径，存入data中
		var that = this;
		wx.canvasToTempFilePath({
			canvasId: 'mycanvas',
			success: function (res) {
				var tempFilePath = res.tempFilePath;
				console.log('tempFilePath = ' + tempFilePath);
				that.setData({
					imagePath: tempFilePath
				});
			},
			fail: function (res) {
				console.log(res);
			}
		});
	},
	previewImg: function (e) {
		// 点击图片进行预览，长按保存分享图片
		//var img = this.data.imagePath;
		var img = `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495693185410&di=e28cc03d2ae84130eabc2
		 6bf0fc7495f&imgtype=0&src=http%3A%2F%2Fpic36.photophoto.cn%2F20150814%2F0005018308986502_b.jpg`;
		if (img && img != '') {
			this.data.imageList.unshift(img);
		}

		console.log("previewImg img:" + img);
		console.log("previewImg this.data.imageList:" + this.data.imageList);
		// 这个接口, 按照官方示例, 可能只支持 http 或者 https 协议的网络图片地址.
		// 微信本地的图片点击打开是黑的：wxfile://tmp_dc7fccd3897df1b6c6133311ce0ca453f59ced01324c3d76.png
		if (this.data.imageList && this.data.imageList.length > 0) {
			console.log("previewImg->this.data.imageList");
			wx.previewImage({
				urls: this.data.imageList //需要预览的图片链接列表,
			});
		} else {
			console.log("previewImg->img");
			wx.previewImage({
				//current: img, // 当前显示图片的http链接
				urls: [img] //需要预览的图片链接列表,
			});
        }
        
		// 同步清理本地数据缓存
		wx.clearStorageSync();
		console.log("previewImg success!");
	},
	formSubmit: function (e) {
		var that = this;
		var url = e.detail.value.url;
		url = url === '' ? (that.data.placeholder) : (url);
		that.setData({
			maskHidden: false
		});
		wx.showToast({
			title: '生成中...', //提示的内容,
			icon: 'loading', //图标,
			duration: 2000, //延迟时间,
			//mask: true, //显示透明蒙层，防止触摸穿透,
			success: res => {}
		});

		var st = setTimeout(() => {
			wx.hideToast();
			var size = that.setCanvasSize();
			//绘制二维码
			that.createQrCode(url, 'mycanvas', size.w, size.h);
			that.setData({
				maskHidden: true
			});
			clearTimeout(st);
		}, 2000);
	},
	chooseImge: function () {
		var that = this;
		console.log(1);
		wx.chooseImage({
			count: '9', //最多可以选择的图片张数,
			sizeType: ["original", "compressed"], // 所选的图片的尺寸
			sourceType: ["album", "camera"], // 选择图片的来源
			success: res => {
				this.setData({
					imageList: res.tempFilePaths //返回图片的本地文件路径列表 tempFilePaths,
				});
			},
			fail: () => {
				console.log("chooseImge->fail");
			},
			complete: () => {
				console.log("chooseImge->complete");
			}
		});
	}
});
