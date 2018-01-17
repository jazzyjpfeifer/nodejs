$(document).ready(function(){
    $('.menu .item').on('click', function() {
        $('.menu .item').removeClass('active');
        $(this).addClass('active');
    });
})