function Slider() {
	this.imagesUrls = [];
	this.currentImageIndex = 0;
	this.showPrevBtn = null;
	this.showNextBtn = null; 
	this.slideImage = null;

	this.start = function(elId) {
				var that = this;

				var elSelector = '#' + elId;
				var el = document.querySelector(elSelector);

				this.showPrevBtn = el.querySelector('.show-prev-btn');
				this.showNextBtn = el.querySelector('.show-next-btn');
				this.slideImage = el.querySelector('.slide-img');


				this.showPrevBtn.addEventListener('click', function (e) {
					that.onShowPrevBtnClick(e);
				});

				this.showNextBtn.addEventListener('click', function (e) {
					that.onShowNextBtnClick();
				});


				this.imagesUrls.push('https://cdn.motor1.com/images/mgl/Xgqje/s1/bugatti-divo-spotted-in-germany.jpg');
				this.imagesUrls.push('https://cdn.motor1.com/images/mgl/pOzRg/s1/bugatti-divo-spotted-in-germany.jpg');
				this.imagesUrls.push('https://cdn.motor1.com/images/mgl/lXqRM/s1/bugatti-divo-spotted-in-germany.jpg');
				this.imagesUrls.push('https://cdn.motor1.com/images/mgl/PKAL2/s1/bugatti-divo-spotted-in-germany.jpg');



				this.slideImage.src = this.imagesUrls[this.currentImageIndex];
				this.showPrevBtn.disabled = true;


			};

	this.onShowPrevBtnClick = function(e) {
				this.currentImageIndex--;
				this.slideImage.src = this.imagesUrls[this.currentImageIndex];
				this.showNextBtn.disabled = false;
				if (this.currentImageIndex === 0 ) {
					this.showPrevBtn.disabled = true;
				}
			};
	this.onShowNextBtnClick = function(e) {
				this.currentImageIndex++;
				this.slideImage.src = this.imagesUrls[this.currentImageIndex];
				this.showPrevBtn.disabled = false;
				
				if (this.currentImageIndex === (this.imagesUrls.length - 1) ) {
					this.showNextBtn.disabled = true;
				}
			
			};

}

