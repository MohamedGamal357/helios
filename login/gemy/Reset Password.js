// // // // // Get the form element
// // // // const form = document.getElementById('password-reset-form');

// // // // // Add an event listener for the form submission
// // // // form.addEventListener('submit', (event) => {
// // // //     // Prevent the default form submission behavior
// // // //     event.preventDefault();

// // // //     // Get the email input value
// // // //     const newpassword = document.getElementById('newpassword').value;

// // // //     // Get the new password input value
// // // //     const newPassword = document.getElementById('confirmpassword').value;

// // // //     // Check if the email and new password are not empty
// // // //     if (!newpassword || !confirmpassword) {
// // // //         // If they are empty, show an error message
// // // //         alert(' new password are required.');
// // // //         return;
// // // //     }

// // // //     // Send a POST request to the API endpoint
// // // //     fetch('http://muhameddarwish-001-site1.ftempurl.com/api/Account/ConfirmResetPassword        ', {
// // // //             method: 'post',
// // // //             headers: {
// // // //                 'Content-Type': 'application/json'
// // // //             },
// // // //             body: JSON.stringify({ newPassword, confirmpassword })
// // // //         })
// // // //         .then(response => {
// // // //             // Check if the response is successful
// // // //             if (response.ok) {
// // // //                 // If it is, show a success message and redirect to the login page
// // // //                 alert('Your password has been reset. Please log in.');
// // // //                 window.location.href = './login.html';
// // // //             } else {
// // // //                 // If it's not, show an error message
// // // //                 throw new Error('Something went wrong.');
// // // //             }
// // // //         })
// // // //         .catch(error => {
// // // //             // Log any errors
// // // //             console.error(error);
// // // //             alert('Something went wrong. Please try again later.');
// // // //         });
// // // // });
// // // // Get the form element

// // // // Get form element
// // // const form = document.getElementById('password-reset-form');

// // // // Listen for form submission
// // // form.addEventListener('submit', function(event) {
// // //     // Prevent default form submission behavior
// // //     event.preventDefault();

// // //     // Get form field values
// // //     const newPassword = document.getElementById('newpassword').value;
// // //     const confirmPassword = document.getElementById('confirmpassword').value;

// // //     // Validate form fields
// // //     if (newPassword !== confirmPassword) {
// // //         alert('New password and confirm password do not match.');
// // //         return;
// // //     }

// // //     // Send form data to server for password reset
// // //     const formData = new FormData(form);
// // //     fetch('http://muhameddarwish-001-site1.ftempurl.com/api/Account/ConfirmResetPassword', {
// // //             method: 'get',
// // //             body: formData
// // //         })
// // //         .then(response => response.json())
// // //         .then(data => {
// // //             if (data.success) {
// // //                 alert('Password has been reset successfully.');
// // //                 form.reset();
// // //             } else {
// // //                 alert('Error: ' + data.message);
// // //             }
// // //         })
// // //         .catch(error => {
// // //             console.error('Error:', error);
// // //             alert('An error occurred while resetting your password.');
// // //         });
// // // });

// // // Get form element
const form = document.getElementById('password-reset-form');

// Listen for form submission
form.addEventListener('submit', function(event) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Get form field values
    const newPassword = document.getElementById('newpassword').value;
    const confirmPassword = document.getElementById('confirmpassword').value;

    // Validate form fields
    if (newPassword !== confirmPassword) {
        alert('New password and confirm password do not match.');
        return;
    }

    // Send form data to server for password reset
    const formData = new FormData(form);
    const queryString = new URLSearchParams(formData).toString();

    fetch("http://muhameddarwish-001-site1.ftempurl.com/api/Account/ConfirmResetPassword", {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Password has been reset successfully.');
                form.reset();
            } else {
                alert('Error: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while resetting your password.');
        });
});
// // Get form element
// const form = document.getElementById('password-reset-form');

// // Listen for form submission
// form.addEventListener('submit', function(event) {
//     // Prevent default form submission behavior
//     event.preventDefault();

//     // Get form field values
//     const newPassword = document.getElementById('newpassword').value;
//     const confirmPassword = document.getElementById('confirmpassword').value;

//     // Validate form fields
//     if (newPassword !== confirmPassword) {
//         alert('New password and confirm password do not match.');
//         return;
//     }

//     // Send form data to server for password reset
//     const formData = new FormData(form);
//     const queryString = new URLSearchParams(formData).toString();
//     // const url = `http://muhameddarwish-001-site1.ftempurl.com/api/Account/ConfirmResetPassword?${queryString}`;

//     fetch(url, {
//             method: 'GET',
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data.success) {
//                 alert('Password has been reset successfully.');
//                 form.reset();

//                 // Store new password in local storage
//                 localStorage.setItem('newPassword', newPassword);
//             } else {
//                 alert('Error: ' + data.message);
//             }
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             alert('An error occurred while resetting your password.');
//         });
// });// Check if the user has a saved password reset token in local storage
if (localStorage.getItem('resetToken')) {
    // If there is a token, use it to make an API GET request to the server to retrieve the user's information
    fetch('https://http://muhameddarwish-001-site1.ftempurl.com/api/Account/ConfirmResetPassword        .com / api / users ', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('resetToken')}`
            }
        })
        .then(response => response.json())
        .then(data => {
            // Once the user's information is retrieved, populate the form fields with their information
            document.getElementById('newpassword').value = data.password;
            document.getElementById('confirmpassword').value = data.password;
        })
        .catch(error => console.error('Error:', error));
}

// When the user submits the form, save the new password and the confirmation password in local storage
document.getElementById('password-reset-form').addEventListener('submit', function(event) {
    event.preventDefault();
    localStorage.setItem('newPassword', document.getElementById('newpassword').value);
    localStorage.setItem('confirmPassword', document.getElementById('confirmpassword').value);
});