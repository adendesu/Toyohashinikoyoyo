$(function($){
    $('.bg-switcher1').bgSwitcher({
    images:['images/tyokokojo.png','images/tyokomaki.png','images/tyokosyatyo.png'],
    interval: 5000,
    loop: true
});
$('.bg-switcher2').bgSwitcher({
    images:['images/toyohasikare-udon.png','images/kare-udon.png','images/kare-udongyudon.png'],
    interval: 5000,
    loop: true
});
$('.bg-switcher3').bgSwitcher({
    images:['images/kyoryu.png','images/syokubutu.png','images/sa-kito.png','images/nonhoi.png'],
    interval: 5000,
    loop: true
});
$('.bg-switcher4').bgSwitcher({
    images:['images/tikuwa1.png','images/tikuwa2.png','images/tikuwaya.png'],
    interval: 5000,
    loop: true
});
$(window).scroll(function(){
    var targetElement = $('.fadein').offset().top;
    var scroll =$(window).scrollTop();
    var windowHeight = $(window).height();
    if(scroll> targetElement - windowHeight + 200){
        $('.fadein').css('opacity',1);
        $('.fadein').css('transform','translateY(0)');
    }
});
});