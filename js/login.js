document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);
    // get password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log("userPassword");

    if (userEmail == 'asdf@asd.com' && userPassword == 'asdf') {
        window.location.href = 'banking.html';
    }
});

