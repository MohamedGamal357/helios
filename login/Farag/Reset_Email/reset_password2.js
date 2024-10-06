
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    console.log(e);
    e.preventDefault();
    
    const email=document.getElementById("email").value;
    
    fetch("https://darwish1337-001-site1.gtempurl.com/Auth/SendEmailResetPassword",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify({
            email:email

        }),
    })
    .then((res)=>{
        console.log(res);
        if (res.ok) {
            return res.json();
        } 
        })
        .then((data)=>{
    
            console.log("successfully",data);
            alert(data,"mail")
        });
    })
