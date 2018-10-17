//获取应用实例
Page({
	data: {
		new: 'top-hoverd-btn',
		good: '',
		child: '',
		mom: '',
		girl: '',
		shoe: '',
		home: '',
		beauti: '',
		food: '',
		hidden: false
	},
	updateBtnStatus: function (k) {
		this.setData({
			new: this.getHoverd('new', k),
			good: this.getHoverd('good', k),
			child: this.getHoverd('child', k),
			mom: this.getHoverd('mom', k),
			girl: this.getHoverd('girl', k),
			shoe: this.getHoverd('shoe', k),
			home: this.getHoverd('home', k),
			beauti: this.getHoverd('beauti', k),
			food: this.getHoverd('food', k)
		});
	},
	getHoverd: function (src, dest) {
		return (src === dest ? 'top-hoverd-btn' : '');
	}
});
