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
            localStorage.setItem('token', data.token);
            localStorage.setItem('username', email); // Add this line to store the username
            localStorage.setItem('type', data.type); // Add this line to store the type
            localStorage.setItem('data', data); // Add this line to store the type

            window.location.href = ""
            console.log("Logged in successfully!", data);

            alert("Logged in successfully!", "mail")
        })
        .catch(error => {
            console.error("Error:", error);

        });
});