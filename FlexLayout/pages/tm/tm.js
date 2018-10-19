//获取应用实例
var app = getApp();
Page({
	data: {
		plist: []
	},
	onLoad: function (options) {
		console.log('tm Launching ...');
	},
	onReady: function () {

	},
	onShow: function () {
		var that = this;
		setInterval(function () {
			that.intervalMonit();
		}, 1000);
	},
	onHide: function () {

	},
	onUnload: function () {

	},
	onPullDownRefresh: function () {

	},
	intervalMonit: function () {
		var that = this;
		// wx.request({
		// 	url: 'http://localhost:8080', //开发者服务器接口地址",
		// 	header: {
		// 		'Content-Type': 'application/json'
		// 	},
		// 	method: 'POST',
		// 	dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
		// 	success: res => {
		// 		app.globalData.plist = res.data;
		// 		that.setData({
		// 			plist: res.data
		// 		});
		// 	},
		// 	fail: () => {},
		// 	complete: () => {}
		// });
	},
	go: function (e) {
		wx.navigateTo({
			url: '../detail/detail?index=' + e.currentTarget.id
		});
	}
})
