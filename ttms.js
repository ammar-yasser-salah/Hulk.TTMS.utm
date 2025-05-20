    if (localStorage.getItem("web.fc.utm.my_usersession") == null) {
        alert("Should not allow user to display this page!");
        window.location.replace("ttms-login.html");
    }