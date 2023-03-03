$(document).on('click', '#submit_login', function() {
    let data = {
        email: $('#username').val(),
        password: $('#password').val()
    }
    console.log(data.email, data.password)

});
$(document).on('click', '#submit_register', function() {
    if ($('#password').val() != $('#password2').val()) {
        $('#password').css('box-shadow', '0px 0px 20px red inset');
        $('#password2').css('box-shadow', '0px 0px 20px red inset');
    } else {
        let data = {
            user: $('#user').val(),
            email: $('#email').val(),
            password: $('#password').val()
        }
        console.log(data.email, data.password)
    }
})

$(document).delegate('.form-control', 'keyup', function(e) {
    if (e.keyCode == 13) {
        if ($('#login-button').is(':visible')) {
            $('#submit_login').click();
        } else {
            $('#submit_register').click();
        }
    }
});