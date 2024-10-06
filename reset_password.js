const form = document.getElementById("form");
form.addEventListener("submit",(a) =>{
    console.log(a);
    a.preventDefault();

const email = document.getElementById('email').value;
const code = document.getElementById('code').value;
const newPassword= document.getElementById('newPassword').value;
const confirmNewPassword = document.getElementById('confirmNewPassword').value;
fetch('https://darwish1337-001-site1.gtempurl.com/Auth/ResetPassword', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email,
        code,
        newPassword,
        confirmNewPassword
    }),
})
.then((res) => {
    console.log(res);
    if (res.ok) {
    return res.json();
    } 
    
})
.then(data => {
    window.location.href="/Farag/login/login.html"
    console.log('Success:',data); 
    alert(data," successful")
})
.catch(error => {
    console.error('Error:', error);
});
});


