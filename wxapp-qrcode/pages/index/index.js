var app = getApp();

Page({
	data: {
		pinyinText: '',
	},
	onLoad: function () {

	},
	onInput: function (e) {
		console.log(e);
		var char = e.detail.value;
		console.log('---', char);
		char = char && char.trim();
		console.log('输入内容：' + char);
	}
});
