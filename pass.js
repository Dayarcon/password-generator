const passwordbox= document.getElementById("password");
const lenght=12;
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwquz";
const number="123457890";
const symbol="!@#$%^&*()_+=<>";
const character=uppercase+lowercase+number+symbol;
function rdom(){
    let password="";
        password+=uppercase[Math.floor(Math.random()*uppercase.length)];
        password+=lowercase[Math.floor(Math.random()*lowercase.length)];
        password+=number[Math.floor(Math.random()*number.length)];
        password+=symbol[Math.floor(Math.random()*symbol.length)];
        while (lenght>password.length) {
            password+=character[Math.floor(Math.random()*character.length)];
        }
    passwordbox.value = password;
}
function copy(){
    var textocopy = document.getElementById(password);
    password.select();
    document.execCommand('copy');
    alert('Password copied!');
}