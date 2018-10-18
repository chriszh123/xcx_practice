var app = getApp();

Page({
	data: {
		detail: {}
	},
	onload: function (opts) {
		console.log(app.globalData.plist[opts.index]);
		this.setData({
			detail: app.globalData.plist[opts.index]
		});
	}
});
