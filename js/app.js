/*
* ProgressBar JavaScript plugin. 
* (c) 2013, happyCoda. 
* MIT License. 
* https://github.com/happyCoda/progress_bar
*/


window.onload = function () {
	var progressBar = {
		parent: document.querySelector('.progress_bar'),
		done: document.querySelector('.progress_bar__done'),
		undone: document.querySelector('.progress_bar__undone'),
		percentage: document.querySelector('.progress_bar__percentage'),
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

				self.done.style.left = '-' + self.leftShift + '%';
				self.percentage.textContent = self.doneNum + '%';
				self.leftShift -= 1;

				self.doneNum += 1;
			}, interval);
		},
		init: function (params) {
			this.setInterval(params.interval);
		}
	};


	progressBar.init({interval: 100});
};