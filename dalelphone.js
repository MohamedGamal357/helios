document.addEventListener("DOMContentLoaded", (e) => {
    const token = localStorage.getItem('token');
    const problemElement = document.createElement('div');
    problemElement.className = 'mo';

    const usernameElement = document.querySelector(".span1");

    // Check if there's a stored username in local storage

    // Check if there's a stored username in local storage
    const storedUsername = localStorage.getItem("username");
    // If a username exists, display it; otherwise, show "اسم المستخدم"
    if (storedUsername) {
        usernameElement.textContent = storedUsername;
    } else {
        usernameElement.textContent = "اسم المستخدم";
        typeElement.textContent = ""; // clear the type element if no username is stored
    }

    // Retrieve values from localStorage
    const name = localStorage.getItem('name');
    const Description = localStorage.getItem('Description');
    const categoryId = localStorage.getItem('categoryId');

    fetch('https://darwish1337-001-site1.gtempurl.com/Category/GetCategoriesWithProblem', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then((data) => {
            console.log(data);
            data.forEach(problem => {
                const problemHTML = `
                <div class="form-group">
                    <img class="photo" src="./1مستخدم.jpeg" alt="">
                    <h3>${problem.name}</h3>
                    <p class="prgr">${description}</p>
                    <img class="sha" src="https://darwish1337-001-site1.gtempurl.com/assets/images/problems/${problem.problemImg}" alt="">
                    <a href="https://wa.me/${problem.whatsappNumber}" target="_blank" class="mooo">
                        <img src="https://cdn-icons-png.flaticon.com/512/124/124034.png" alt="WhatsApp" width="24" height="24">
                    </a>
                </div>
            `;
                problemElement.innerHTML += problemHTML;
            });
            document.body.appendChild(problemElement);
        })
        .catch(error => {
            console.error(error);
        });
});