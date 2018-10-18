Page({
	data: {
		hot: 'top-hoverd-btn',
		film: '',
		book: '',
		telv: '',
		active: '',
		music: '',
		other: '',
		other1: ''
	},
	onLoad: function (options) {
		console.log('douban Launching ...');
	},
	onReady: function () {
		//Do some when page ready.
		console.log('douban onReady ...');
	},
	onShow: function () {
		//Do some when page show.
		console.log('douban onShow ...');
	},
	onHide: function () {
		//Do some when page hide.
		console.log('douban onHide ...');
	},
	onUnload: function () {
		//Do some when page unload.
		console.log('douban onUnload ...');
	},
	onPullDownRefresh: function () {
		//Do some when page pull down.
		console.log('douban onPullDownRefresh ...');
	},
	updateBtnStatus: function (k) {
		this.setData({
			hot: this.getHoverd('hot', k),
			film: this.getHoverd('film', k),
			book: this.getHoverd('book', k),
			telv: this.getHoverd('telv', k),
			active: this.getHoverd('active', k),
			music: this.getHoverd('music', k),
			other: this.getHoverd('other', k),
			other1: this.getHoverd('other1', k)
		});
	},
	getHoverd: function (src, dest) {
		return (src === dest ? 'top-hoverd-btn' : '');
	},
	toHot: function () {
		console.log('hot');
		this.updateBtnStatus('hot');
	},
	toFilm: function () {
		console.log('film');
		this.updateBtnStatus('film');
	},
	toReadBook: function () {
		console.log('readbook');
		this.updateBtnStatus('book');
	},
	toTelv: function () {
		console.log('telv');
		this.updateBtnStatus('telv');
	},
	toActive: function () {
		console.log('active');
		this.updateBtnStatus('active');
	},
	toMusic: function () {
		console.log('music');
		this.updateBtnStatus('music');
	},
	toOther: function () {
		console.log('other');
		this.updateBtnStatus('other');
	},
	toOther1: function () {
		console.log('other1');
		this.updateBtnStatus('other1');
	},
})
