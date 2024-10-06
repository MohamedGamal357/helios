// // addprop.js

// // Get the username element
// const usernameElement = document.querySelector(".span1");

// // Check if there's a stored username in local storage
// const storedUsername = localStorage.getItem("username");
// // If a username exists, display it; otherwise, show "اسم المستخدم"
// if (storedUsername) {
//     usernameElement.textContent = storedUsername;
// } else {
//     usernameElement.textContent = "اسم المستخدم";
//     typeElement.textContent = ""; // clear the type element if no username is stored
// }

// // ... Rest of your addprop.js code ...

// // ... Rest of your addprop.js code ...
// const addProblemForm = document.getElementById('formdata');
// addProblemForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const userId = localStorage.getItem('userId');
//     const problemName = document.getElementById("Name").value;
//     const problemDescription = document.getElementById("Description").value;
//     const problemImage = document.getElementById("ProblemImg").files[0];
//     const problemCategory = document.querySelector("input[name='Categories']:checked");
//     const token = localStorage.getItem('token');

//     if (!userId) {
//         console.error("UserId is not available in local storage");
//         return;
//     }

//     const formData = new FormData();
//     formData.append("UserId", userId);
//     formData.append("Name", problemName);
//     formData.append("Description", problemDescription);
//     formData.append("ProblemImg", problemImage, problemImage.name);
//     formData.append("CategoryId", problemCategory.value);

//     fetch('https://darwish1337-001-site1.gtempurl.com/api/Problem/AddProblem', {
//             method: 'post',
//             body: formData,
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         })
//         .then(response => {
//             console.log(response);
//             window.location.href = "home.html"
//         })
//         .catch(error => {
//             console.log(error);
//         });
// });

// addprop.js

// Get the username element
const usernameElement = document.querySelector(".span1");

// Check if there's a stored username in local storage
const storedUsername = localStorage.getItem("username");
// If a username exists, display it; otherwise, show "اسم المستخدم"
if (storedUsername) {
    usernameElement.textContent = storedUsername;
} else {
    usernameElement.textContent = "اسم المستخدم";
    typeElement.textContent = ""; // clear the type element if no username is stored
}

//... Rest of your addprop.js code...

//... Rest of your addprop.js code...
const addProblemForm = document.getElementById('formdata');
addProblemForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const userId = localStorage.getItem('userId');
    const problemName = document.getElementById("Name").value;
    const problemDescription = document.getElementById("Description").value;
    const problemImage = document.getElementById("ProblemImg").files[0];
    const problemCategory = document.querySelector("input[name='Categories']:checked");
    const token = localStorage.getItem('token');

    if (!userId) {
        console.error("UserId is not available in local storage");
        return;
    }

    const formData = new FormData();
    formData.append("UserId", userId);
    formData.append("Name", problemName);
    formData.append("Description", problemDescription);
    formData.append("ProblemImg", problemImage, problemImage.name);
    formData.append("CategoryId", problemCategory.value);

    // Store categoryId in localStorage
    localStorage.setItem("categoryId", problemCategory.value);

    fetch('https://darwish1337-001-site1.gtempurl.com/api/Problem/AddProblem', {
            method: 'post',
            body: formData,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            console.log(response);
            window.location.href = "home.html"
        })
        .catch(error => {
            console.log(error);
        });
});