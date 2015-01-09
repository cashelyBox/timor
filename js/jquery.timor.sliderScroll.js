(function($){
    $.fn.sliderScroll=function(options){
        var defaults={
            position:'top'
        };
    var opt=$.extend(defaults,options);
            var _this=$(this),_positionY=_this.position().top,_offsetY=_this.offset().top,_offsetX=_this.offset().left,_width=_this.outerWidth();
            $(window).scroll(function(){
                console.log(_offsetY);
                if($(window).scrollTop()>=_offsetY){
                    if(_this.next("div.timor-scroll-box").length<=0){
                        $("<div class='timor-scroll-box'></div>").width(_this.outerWidth(true)).height(_this.outerHeight(true)).insertAfter(_this);
                        _this.css({
                            top:0
                        });
                    }
                    _this.addClass("timor-position-fx").parent().addClass("timor-position-re");
                    _this.width(_width);
                }else{
                    _this.next("div.timor-scroll-box").remove();
                    _this.removeClass("timor-position-fx").removeAttr("style").parent().removeClass("timor-position-re");
                }
            });
        }
})(jQuery);