const tabLogin = document.getElementById('tab-login');
const tabRegister = document.getElementById('tab-register');
const form = document.getElementById('loginForm');


tabLogin.addEventListener('click', ()=>{
tabLogin.classList.add('active');tabLogin.classList.remove('inactive');
tabRegister.classList.remove('active');tabRegister.classList.add('inactive');
});


tabRegister.addEventListener('click', ()=>{
tabRegister.classList.add('active');tabRegister.classList.remove('inactive');
tabLogin.classList.remove('active');tabLogin.classList.add('inactive');
alert('Register tab clicked — replace with register flow as needed.');
});


form.addEventListener('submit', (e)=>{
e.preventDefault();
const acc = document.getElementById('account').value.trim();
const key = document.getElementById('key').value.trim();
if(!acc){
alert('Please enter your account number.');
return;
}
if(!/^[0-9]+$/.test(acc)){
alert('Account number must contain digits only.');
return;
}
if(!key){
alert('Please enter your login key.');
return;
}
alert('Logging in...\nAccount: ' + acc);
});