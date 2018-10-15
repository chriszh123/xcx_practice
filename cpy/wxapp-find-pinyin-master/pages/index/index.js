var app = getApp();
var pinyin = require('../../utils/pinyin.js');

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
		if (char.length == 1) {
			if (pinyin.hasOwnProperty(char)) {
				console.log(pinyin[char].join(','));
				this.setData({
					'pinyinText': pinyin[char].join(',')
				});
			} else {
				this.setData({
					'pinyinText': '你写的字，我找不到，对不起！'
				});
			}
		} else {
			this.setData({
				'pinyinText': '请输入一个字'
			})
		}
	}
});
