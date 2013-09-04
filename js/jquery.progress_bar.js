(function ($) {

	$.fn.progressBar = function (params) {
		var self = this,
		progressBar = {
			parent: self,
			done: self.find('.progress_bar__done'),
			undone: self.find('.progress_bar__undone'),
			percentage: self.find('.progress_bar__percentage'),
			doneNum: 0,
			interval: null,
			leftShift: 100,
			setInterval: function (interval) {
				var self = this,
				interval = setInterval(function () {
					if (self.doneNum > 100) {
						clearInterval(interval);
						return false;
					}

					self.done.css({'left': '-' + self.leftShift + '%'});
					self.percentage.text(self.doneNum + '%');
					self.leftShift -= 1;

					self.doneNum += 1;
				}, interval);
			},
			init: function (params) {
				this.setInterval(params.interval);
			}
		};


		progressBar.init(params);
	}
	
	
		
	
} (jQuery));