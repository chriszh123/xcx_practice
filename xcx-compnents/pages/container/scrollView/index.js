var order = ['red', 'yellow', 'blue', 'green', 'red'];

Page({
	data: {
		'toView': 'red',
		'scrollTop': 100
	},
	upper: function (e) {
        console.log('upper');
		console.log(e);
	},
	lower: function (e) {
        console.log('lower');
		console.log(e);
	},
	scroll: function (e) {
        console.log('scroll');
		console.log(e);
	},
	tap: function (e) {
        console.log('tap');
		for (var i = 0; i < order.length; i++) {
			if (this.data.toView === order[i]) {
				this.setData({
					toView: order[i + 1]
				});
				break;
			}
		}
	},
	tapMove: function (e) {
        console.log('tapMove');
		this.setData({
			scrollTop: this.data.scrollTop + 10
		});
	}
});
