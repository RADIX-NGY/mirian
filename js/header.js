$(function() {
    var header = $('#header');
    //表示位置
    var headerTop = header.offset().top+200;
    //ナビゲーションの高さ（シャドウの分だけ足してます）
    var showFlag = false;
    //ナビゲーションの位置まできたら表示
    $(window).scroll(function () {
        var winTop = $(this).scrollTop();
        if (winTop >= headerTop) {
            if (showFlag == false) {
                showFlag = true;
                header
                    .addClass('is-fixed')
                    .stop().animate({'top' : '0px'}, 0);
            }
        } else if (winTop <= headerTop) {
            if (showFlag) {
                showFlag = false;
                header.stop().animate({'top' : '0px'} , 0, function(){
                    header.removeClass('is-fixed');
                });
            }
        }
    });
});