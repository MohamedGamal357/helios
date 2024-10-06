document.addEventListener("DOMContentLoaded", function() {
    const goverID = document.querySelector('#town');
    const cityID = document.querySelector('#city');
    const errorContainer = document.querySelector('#error-container');
    const successMessage = document.querySelector('#success-message');

    function fetchGovers() {
        fetch("https://darwish1337-001-site1.gtempurl.com/Address/GetAllGovers")
            .then((response) => response.json())
            .then((res) => {
                res.forEach((data) => {
                    const option = document.createElement("option");
                    option.value = data.id;
                    option.textContent = data.name;
                    goverID.appendChild(option);
                });
            })
            .catch(error => {
                displayError('Failed to load governorates.');
                console.error(error);
            });
    }

    function fetchCities(id) {
        fetch(`https://darwish1337-001-site1.gtempurl.com/Address/GetGoverCities/${id}`)
            .then((response) => response.json())
            .then((res) => {
                cityID.innerHTML = '<option value=""></option>'; // Clear previous options
                res.forEach((data) => {
                    const option = document.createElement("option");
                    option.value = data.id;
                    option.textContent = data.name;
                    cityID.appendChild(option);
                });
            })
            .catch(error => {
                displayError('Failed to load cities.');
                console.error(error);
            });
    }

    function displayError(message) {
        errorContainer.innerHTML = ''; // Clear previous errors
        const error = document.createElement('div');
        error.className = 'error';
        error.innerText = message;
        errorContainer.appendChild(error);
    }

    function displaySuccess(message) {
        successMessage.innerText = message;
        setTimeout(function() {
            successMessage.innerText = '';
        }, 3000);
    }

    fetchGovers();

    goverID.addEventListener("change", function() {
        fetchCities(this.value);
    });

    // Progress bar and form steps logic
    const slidePage = document.querySelector(".slide-page");
    const nextBtnFirst = document.querySelector(".firstNext");
    const prevBtnSec = document.querySelector(".prev-1");
    const nextBtnSec = document.querySelector(".next-1");
    const prevBtnThird = document.querySelector(".prev-2");
    const nextBtnThird = document.querySelector(".next-2");
    const prevBtnFourth = document.querySelector(".prev-3");
    const submitBtn = document.querySelector(".submit");
    const progressText = document.querySelectorAll(".step p");
    const progressCheck = document.querySelectorAll(".step .check");
    const bullet = document.querySelectorAll(".step .bullet");
    let current = 1;

    nextBtnFirst.addEventListener("click", function(event) {
        event.preventDefault();
        if (validateStep1()) {
            slidePage.style.marginLeft = "-25%";
            bullet[current - 1].classList.add("active");
            progressCheck[current - 1].classList.add("active");
            progressText[current - 1].classList.add("active");
            current += 1;
        }
    });

    nextBtnSec.addEventListener("click", function(event) {
        event.preventDefault();
        if (validateStep2()) {
            slidePage.style.marginLeft = "-50%";
            bullet[current - 1].classList.add("active");
            progressCheck[current - 1].classList.add("active");
            progressText[current - 1].classList.add("active");
            current += 1;
        }
    });

    nextBtnThird.addEventListener("click", function(event) {
        event.preventDefault();
        if (validateStep3()) {
            slidePage.style.marginLeft = "-75%";
            bullet[current - 1].classList.add("active");
            progressCheck[current - 1].classList.add("active");
            progressText[current - 1].classList.add("active");
            current += 1;
        }
    });

    submitBtn.addEventListener("click", function(event) {
        event.preventDefault();

        // Validate form data for submission
        const firstname = document.getElementById("firstname").value.trim();
        const lastname = document.getElementById("lastname").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirm-password").value.trim();
        const phone = document.getElementById("phone-number").value.trim();
        const cityPhone = document.getElementById("city-select").value.trim();

        if (!validateStep1() || !validateStep2() || !validateStep3()) {
            return;
        }

        if (firstname === '' || lastname === '' || email === '' || password === '' || confirmPassword === '' || phone === '') {
            displayError("Please fill in all fields.");
            return;
        }

        if (password.length < 8) {
            displayError("Password should be at least 8 characters long.");
            return;
        }

        if (phone.length < 11) {
            displayError("Phone should be at least 11 characters long.");
            return;
        }

        if (password !== confirmPassword) {
            displayError("Passwords do not match.");
            return;
        }

        // Simulate form submission (replace with actual submission logic)
        setTimeout(function() {
            form.reset(); // Reset form fields
            displaySuccess("Registration successful!");
            current = 1; // Reset form progress
            slidePage.style.marginLeft = "0%";
            bullet.forEach(b => b.classList.remove("active"));
            progressCheck.forEach(c => c.classList.remove("active"));
            progressText.forEach(t => t.classList.remove("active"));
        }, 1000);
    });

    prevBtnSec.addEventListener("click", function(event) {
        event.preventDefault();
        slidePage.style.marginLeft = "0%";
        bullet[current - 2].classList.remove("active");
        progressCheck[current - 2].classList.remove("active");
        progressText[current - 2].classList.remove("active");
        current -= 1;
    });

    prevBtnThird.addEventListener("click", function(event) {
        event.preventDefault();
        slidePage.style.marginLeft = "-25%";
        bullet[current - 2].classList.remove("active");
        progressCheck[current - 2].classList.remove("active");
        progressText[current - 2].classList.remove("active");
        current -= 1;
    });

    prevBtnFourth.addEventListener("click", function(event) {
        event.preventDefault();
        slidePage.style.marginLeft = "-50%";
        bullet[current - 2].classList.remove("active");
        progressCheck[current - 2].classList.remove("active");
        progressText[current - 2].classList.remove("active");
        current -= 1;
    });

    document.querySelector("#city-select").addEventListener("change", function() {
        document.querySelector("#phone-code").value = this.value;
    });

    const citySelect = document.getElementById("city-select");
    const phoneCode = document.getElementById("phone-code");
    const flagIcon = document.getElementById("flag-icon");

    citySelect.addEventListener("change", function() {
        const selectedOption = citySelect.options[citySelect.selectedIndex];
        const code = selectedOption.value;
        const flag = selectedOption.getAttribute("data-flag");
        phoneCode.value = code;
        flagIcon.className = `flag-icon flag-icon-${flag}`;
    });

    function validateStep1() {
        const firstname = document.getElementById("firstname").value.trim();
        const lastname = document.getElementById("lastname").value.trim();
        const cityselect = document.getElementById("city-select").value;
        const phone = document.getElementById("phone-number").value;

        if (firstname === '') {
            displayError("Please Fill First Name Feild");
            return false;
        }

        if (lastname === '') {
            displayError("Please Fill Last Name Feild");
            return false;
        }

        if (cityselect === '') {
            displayError("Please Fill Selected City Feild");
            return false;
        }

        if (phone === '') {
            displayError("Please Fill Phone Number Feild");
            return false;
        }

        return true;
    }

    function validateStep2() {
        const town = document.getElementById("town").value;
        const city = document.getElementById("city").value;

        if (town === '') {
            displayError("Please select a Governorate");
            return false;
        }

        if (city === '') {
            displayError("Please select a City");
            return false;
        }

        return true;
    }
    function validateStep3() {
            // Validate email format and domain
        const email = document.getElementById("email").value.trim();
        const allowedDomains = ["gmail.com", "hotmail.com", "outlook.com", "yahoo.com", "msn.com", "icloud.com"];
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const domain = email.split("@")[1];
    
        if (!emailPattern.test(email)) {
            displayError("You Forget Pattern Of Email @");
                return false; // Invalid email format
                
            }

        if (!allowedDomains.includes(domain)) {
            displayError("Domain not allowed Input Valid Domain");
                 return false; // Domain not allowed
            }

        if (email === '') {
            displayError("Please fill in the Email field");
            return false;
        }
       return true;
    }
});
