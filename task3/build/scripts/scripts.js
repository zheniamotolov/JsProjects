!function(i,e){i(function(){i(".choose-buttons").find("button").on("click",function(){if("js"===i(this).data("type")){i(".css-slider").css("display","none");var e=i(".slider");e.css("display","block"),e.data("slider")||e.Slider()}if("css"===i(this).data("type")){var t=this;i(".slider").css("display","none"),this.currentSlideNumber=0,this.prevSlideNumber=0,this.$container=i(".css-slider").css("display","block"),this.$sectionSwitch=this.$container.find(".section-switch"),this.$imageTitleList=this.$container.find(".image-title-list"),this.$imageTitleListUl=this.$imageTitleList.find("ul"),this.$imageSlider=this.$container.find(".image-slider"),this.$imageSliderUl=this.$imageSlider.find("ul"),this.imageTitleListLength=this.$imageTitleListUl.children().length,this.imageTitleListItemHeight=this.$imageTitleListUl.height()/this.imageTitleListLength,this.$imageTitleList.css("height",3*this.imageTitleListItemHeight),this.$imageTitleList.css("overflow-y","hidden"),this.$sliderDivs=t.$imageSliderUl.children().find(".image");for(var s=0;s<this.$imageTitleListUl.children().length;++s)this.$imageTitleListUl.children().eq(s).attr("data-number",s);this.$sectionSwitch.on("click",".image-section",function(){t.$imageTitleListUl.css({"margin-top":-i(this).data("section")*t.imageTitleListItemHeight*3}),t.currentSlideNumber=3*i(this).data("section"),t.$sliderDivs.eq(t.prevSlideNumber).removeClass("slide-out"),t.prevSlideNumber!==t.currentSlideNumber&&(t.$sliderDivs.removeClass("slide-out"),t.$sliderDivs.eq(t.prevSlideNumber).removeClass("active").addClass("slide-out"),t.$sliderDivs.eq(t.currentSlideNumber).addClass("active")),t.prevSlideNumber=t.currentSlideNumber}),this.$imageTitleListUl.on("click","li",function(){t.currentSlideNumber=i(this).data("number"),t.$sliderDivs.eq(t.prevSlideNumber).removeClass("slide-out"),t.prevSlideNumber!==t.currentSlideNumber&&(t.$sliderDivs.removeClass("slide-out"),t.$sliderDivs.eq(t.prevSlideNumber).removeClass("active").addClass("slide-out"),t.$sliderDivs.eq(t.currentSlideNumber).addClass("active")),t.prevSlideNumber=t.currentSlideNumber})}})})}(jQuery),function(i,e){i.fn.Slider=function(){return this.each(function(e,s){i(s).data("slider",new t(s))})};var t=function(e){this.$container=i(e),this.$sectionSwitch=this.$container.find(".section-switch"),this.$imageTitleList=this.$container.find(".image-title-list"),this.$imageTitleListUl=this.$imageTitleList.find("ul"),this.$imageSlider=this.$container.find(".image-slider"),this.$imageSliderUl=this.$imageSlider.find("ul"),this.init()};t.prototype.init=function(){this.imageTitleListLength=this.$imageTitleListUl.children().length,this.imageTitleListItemHeight=this.$imageTitleListUl.height()/this.imageTitleListLength,this.$imageTitleList.css("height",3*this.imageTitleListItemHeight),this.$imageTitleList.css("overflow-y","hidden");for(i=0;i<this.$sectionSwitch.children().length;++i)this.$sectionSwitch.children().eq(i).attr("data-section",i);for(var i=0;i<this.$imageTitleListUl.children().length;++i)this.$imageTitleListUl.children().eq(i).attr("data-number",i);this.sliderImageWidth=this.$imageSlider.find("div.image").width(),this.$imageSlider.css("width",this.sliderImageWidth),this.$imageSlider.css("overflow-x","hidden"),this.$imageSliderUl.css("width",this.sliderImageWidth).css("height",this.sliderImageWidth),this.$imageSliderUl.find("li").css({float:"left",position:"absolute"}).find("div.image").css({width:this.sliderImageWidth,display:"none"}).eq(0).css("display","block"),this.currentSlideNumber=0,this.prevSlideNumber=0,this.bindSectionSwitch(),this.setAndBindSliderSwitch()},t.prototype.bindSectionSwitch=function(){var e=this,t=0;this.$sectionSwitch.on("click",".image-section",function(s){s.preventDefault();var l=i(this).data("section");if(l!==t){e.$imageTitleListUl.stop().animate({"margin-top":-l*e.imageTitleListItemHeight*3});var r=e.$imageSliderUl.find("li div.image");e.currentSlideNumber=3*l,r.eq(e.prevSlideNumber).hide("slide",{direction:"right"},400),r.eq(e.currentSlideNumber).show("slide",{direction:"left"},400,function(){e.prevSlideNumber=e.currentSlideNumber}),t=l}})},t.prototype.setAndBindSliderSwitch=function(){var e=this;this.$imageTitleListUl.on("click","li",function(){var t=e.$imageSliderUl.find("li div.image");e.currentSlideNumber=i(this).data("number"),e.currentSlideNumber!==e.prevSlideNumber&&(t.eq(e.prevSlideNumber).hide("slide",{direction:"right"},300),t.eq(e.currentSlideNumber).show("slide",{direction:"left"},300)),e.prevSlideNumber=e.currentSlideNumber})}}(jQuery);