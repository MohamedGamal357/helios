// const form = document.getElementById("form");

// form.addEventListener("submit", (e) => {
//     console.log(e);
//     e.preventDefault();

//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     const token = localStorage.Item('token'); // الحصول على ال token


//     fetch("https://darwish1337-001-site1.gtempurl.com/Auth/Login", {
//         method: "post",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email: email, password: password }),
//     })

//     .then((res) => {
//             console.log(res);
//             if (res.ok) {
//                 return res.json();
//             } else {
//                 throw new Error("Invalid email or password");
//             }

//         })
//         .then((data) => {
//             window.location.href = "addprop.html"
//             console.log("Logged in successfully!", data);


//             alert(data, "mail")
//         })
//         .catch(error => {
//             console.error("Error:",  error);

//         });
// });

// const form = document.getElementById("form");

// form.addEventListener("submit", (e) => {
//     console.log(e);
//     e.preventDefault();

//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     fetch("https://darwish1337-001-site1.gtempurl.com/Auth/Login", {
//         method: "post",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email: email, password: password }),
//     })

//     .then((res) => {
//             console.log(res);
//             if (res.ok) {
//                 return res.json();
//             } else {
//                 throw new Error("Invalid email or password");
//             }

//         })
//         .then((data) => {
//             // تخزين ال token في localStorage
//             localStorage.setItem('UserId', data.UserId); // افترض أن ال API ترجع token في response
//             localStorage.setItem('token', data.token); // افترض أن ال API ترجع token في response

//             window.location.href = "addprop.html"
//             console.log("Logged in successfully!", data);

//             alert("Logged in successfully!", "mail")
//         })
//         .catch(error => {
//             console.error("Error:",  error);

//         });
// });

form.addEventListener("submit", (e) => {
    console.log(e);
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log(`Email: ${email}, Password: ${password}`); // إضافة هذا السطر ليعرض بيانات تسجيل الدخول في Console

    fetch("https://darwish1337-001-site1.gtempurl.com/Auth/Login", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
    })

    .then((res) => {
            console.log(res);
            if (res.ok) {
                return res.json();
            } else {
                throw new Error("Invalid email or password");
            }

        })
        .then((data) => {
            console.log(`Login data: ${JSON.stringify(data)}`);
            localStorage.setItem('userId', data.userId);
            localStorage.setItem('user', JSON.stringify(data.user));
            // localStorage.setItem('displayName', data[0].problems[0].user.displayName);
            localStorage.setItem('token', data.token);
            localStorage.setItem('username', email); // Add this line to store the username
            localStorage.setItem('type', data.type); // Add this line to store the type

            window.location.href = "home.html"
            console.log("Logged in successfully!", data);

            alert("Logged in successfully!", "mail")
        })
        .catch(error => {
            console.error("Error:", error);
            alert(`Error: ${error.message}`); // Display error message in alert box
        });
});