$(function() {
    $("form").submit(function(e) {
        $('input[type=password]').focus();
        return $(".invalid").length == 0; // true if error free, false if there was an error
    })
    $('input[type=password]').keyup(function(e) {
        var pswd = $(this).val();
        check(pswd.length >= 8,'#length');
        check(pswd.match(/[A-Za-z]/),'#letter');
        check(pswd.match(/[A-Z]/),'#capital');
        check(pswd.match(/\d/),'#number');
		//check(pswd.match(/[!@#$%\^&*(){}[\]<>?/|\-]/), '#special');
    }).focus(function() {
        $('#pswd_info').show();
    }).blur(function() {
        $('#pswd_info').hide();
    });
    function check(error,errorField){
        $(errorField).toggleClass("invalid",!error).toggleClass("valid",!!error)
    }
});