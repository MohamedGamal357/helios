const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    console.log(e);
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


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
            window.location.href = "/gemy/home.html"
            console.log("Logged in successfully!", data);
            alert(data, "mail")
        })
        .catch(error => {
            console.error("Error:", error);
        });
});