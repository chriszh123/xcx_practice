//app.js
App({
	onLaunch: function () {
		//调用API从本地缓存中获取数据
		var logs = wx.getStorageSync('logs') || [];
		// unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
		logs.unshift(Date.now());
		wx.setStorageSync('logs', logs);
	},
	globalData: {
		userInfo: null
	},
	getUserInfo: function (cb) {
		var that = this;
		if (this.globalData.userInfo) {
			typeof cb == "function" && cb(this.globalData.userInfo);
		} else {
			//调用登录接口
			wx.login({
				success: res => {
					wx.getUserInfo({
						withCredentials: false,
						success: res => {
							that.globalData.userInfo = res.userInfo;
							typeof cb == "function" && cb(this.globalData.userInfo);
							console.log("wx.login->wx.getUserInfo:success, that.globalData.userInfo:" + that.globalData.userInfo);
						},
						fail: () => {
							console.log("wx.login->wx.getUserInfo:error");
						},
						complete: () => {
							console.log("wx.login->wx.getUserInfo:complete");
						}
					});
				},
				fail: () => {
					console.log("wx.login:error");
				},
				complete: () => {
					console.log("wx.login:complete");
				}
			});
		}
	}
})
