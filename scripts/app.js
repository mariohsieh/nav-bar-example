$(document).ready(function() {
    $('.page-link').on('click', function() {
        $('.page-link').parent().removeClass('active');
        $(this).parent().addClass('active');
    });
});