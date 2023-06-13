function sign_up (e){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = {
        username : username,
        email : email,
        password : password,
    }
    var json = JSON.stringify(user);
    localStorage.setItem(username, json)
    alert("đăng kí thành công , vui lòng đăng nhập")
    window.location.href="index.html"
}
function sign_in (e){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if(user == null){
        alert("Đăng nhập thất bại!")
    }
    else if(username == data.username && password == data.password){
        alert("Đăng nhập thành công!")    
        window.location.href="VTT.html"
    }
    else{
        alert("Đăng nhập thất bại!")
    }
}