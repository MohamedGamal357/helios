const form = document.querySelector('#formdata');
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const goverID = document.querySelector('#town');
const cityID = document.querySelector('#city');
// //////////////////////////////////////////////
form.addEventListener('submit', function(event) {
    // console.log(firstname.value)
    event.preventDefault();
    const userData = {
            firstname: firstName.value,
            lastname: lastName.value,
            usertype: "Factor",
            phoneNumber: phoneNumber.value,
            email: email.value,
            password: password.value,
            confirmPassword: confirmPassword.value,
            goverID: goverID.value,
            cityID: cityID.value
        }
        // send the user object to the server
    fetch("https://darwish1337-001-site1.gtempurl.com/Auth/FactorRegisttration", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData),
        })
        .then((data) => {
            console.log(data);
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Your account has been created successfully!'
            });

            // redirect to login page
            // window.location.href = './login.html';
        })
        .catch(error => {
            // handle error
            console.log(error);
            alert('الكود فية مشكلة او اللينك .....');        
        });
});

document.addEventListener("DOMContentLoaded", function() {
    function fetchGovers() {
        fetch("https://darwish1337-001-site1.gtempurl.com/Address/GetAllGovers")
            .then((data) => {
                return data.json();
                // console.log(data)
            })
            .then((res) => {
                // console.log(res);
                const goverselect = document.querySelector("#town");
                res.map((data) => {
                    // console.log(data.id)
                    // console.log(data.name.en)
                    const option = document.createElement("option");
                    option.value = data.id;
                    option.textContent = data.nameEN;
                    goverselect.appendChild(option);
                });
            });

    }

    fetchGovers();

})

goverID.addEventListener("change", function() {
    const goverID = this.value;

    function fetchGovers(id) {
        fetch(`https://darwish1337-001-site1.gtempurl.com/Address/GetGoverCities/${id}`)
            .then((data) => {
                return data.json();
                // console.log(data)
            })
            .then((res) => {
                // console.log(res);
                const goverselect = document.querySelector("#city");
                res.map((data) => {
                    // console.log(data.id)
                    // console.log(data.name.en)
                    const option = document.createElement("option");
                    option.value = data.id;
                    option.textContent = data.nameEN;
                    goverselect.appendChild(option);
                });
            });

    }

    fetchGovers(goverID);
})