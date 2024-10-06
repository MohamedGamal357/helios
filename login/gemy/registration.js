// // // select the form element
// // const form = document.getElementById('formdata');

// // // listen for form submit event
// // form.addEventListener('submit', function(event) {
// //     // prevent the form from submitting
// //     event.preventDefault();

// //     // get the form data
// //     const formData = new FormData(form);

// //     // get the values of the form fields
// //     const name = formData.get('name');
// //     const last = formData.get('last');
// //     const town = formData.get('town');
// //     const city = formData.get('city');
// //     const job = formData.get('job');
// //     const email = formData.get('email');
// //     const password = formData.get('password');
// //     const Confirmation = formData.get('Confirmation');
// //     // check if passwords match
// //     if (password !== Confirmation) {
// //         alert('Passwords do not match');
// //         return;
// //     }

// //     // create a new user object
// //     const user = {
// //         name,
// //         last,
// //         town,
// //         city,
// //         job,
// //         email,
// //         password
// //     };

// //     // send the user object to the server
// //     fetch('https://myservices.runasp.net/api/Account/CustomerRegisttration', {
// //             method: 'POST',
// //             headers: {
// //                 'Content-Type': 'application/json'
// //             },
// //             body: JSON.stringify(user)
// //         })
// //         .then(response => response.json())
// //         .then(data => {
// //             // handle successful registration
// //             console.log(data);
// //             alert('Registration successful');
// //             // redirect to login page
// //             window.location.href = './login.html';
// //         })
// //         .catch(error => {
// //             // handle error
// //             console.error(error);
// //             alert('الكود فية مشكلة او اللينك .....');        
// //         });
// // });// select the form element
// // const form = document.getElementById('formdata');

// // // listen for form submit event
// // form.addEventListener('submit', function(event) {
// //     // prevent the form from submitting
// //     event.preventDefault();

// //     // get the form data
// //     const formData = new FormData(form);

// //     // get the values of the form fields
// //     const name = formData.get('name');
// //     const last = formData.get('last');
// //     const town = formData.get('town');
// //     const city = formData.get('city');
// //     const job = formData.get('job');
// //     const email = formData.get('email');
// //     const password = formData.get('password');
// //     const Confirmation = formData.get('Confirmation');
// //     // check if passwords match
// //     if (password !== Confirmation) {
// //         alert('Passwords do not match');
// //         return;
// //     }

// //     // create a new user object
// //     const user = {
// //         name,
// //         last,
// //         town,
// //         city,
// //         job,
// //         email,
// //         password,
// //         Confirmation
// //     };

// //     // send the user object to the server
// //     fetch('https://myservices.runasp.net/api/Account/CustomerRegisttration', {
// //             method: 'POST',
// //             headers: {
// //                 'Content-Type': 'application/json'
// //             },
// //             body: JSON.stringify(user)
// //         })
// //         .then(response => response.json())
// //         .then(data => {
// //             // handle successful registration
// //             console.log(data);
// //             alert('Registration successful');
// //             // redirect to login page
// //             window.location.href = './login.html';
// //         })
// //         .catch(error => {
// //             // handle error
// //             console.error(error);
// //             alert('الكود فية مشكلة او اللينك .....');
// //         });
// // });



// // select the form element
// const form = document.querySelector('#formdata');
// const user = {
//     name,
//     last,
//     town,
//     city,
//     job,
//     email,
//     password,
//     Confirmation

// };
// // listen for form submit event
// form.addEventListener('submit', function(event) {
//     // prevent the form from submitting
//     event.preventDefault();

//     // get the form data
//     const formData = new FormData(form);

//     // get the values of the form fields
//     const name = formData.get('name');
//     const last = formData.get('last');
//     const town = formData.get('town');
//     const city = formData.get('city');
//     const job = formData.get('job');
//     const email = formData.get('email');
//     const password = formData.get('password');

//     const Confirmation = formData.get('Confirmation');
//     if (password == Confirmation) {
//         Swal.fire({
//             position: "center",
//             icon: "success",
//             title: "Registration successful",
//             showConfirmButton: false,
//             timer: 2000
//         });
//         window.location.href = './login.html';
//     } else {
//         alert('Passwords do not match');
//         return;
//     }



//     // create a new user object
//     const user = {
//         name,
//         last,
//         town,
//         city,
//         job,
//         email,
//         password
//     };

//     // send the user object to the server
//     fetch('https://myservices.runasp.net/api/Account/CustomerRegisttration', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(user)
//         })
//         .then(response => response.json())
//         .then(data => {
//             // handle successful registration
//             console.log(data);
//             Swal.fire({
//                 position: "center",
//                 icon: "success",
//                 title: "Registration successful",
//                 showConfirmButton: false,
//                 timer: 2000
//             });
//             // alert('Registration successful');
//             // const Toast = Swal.mixin({
//             //     toast: true,
//             //     position: "top-end",
//             //     showConfirmButton: false,
//             //     timer: 30000,
//             //     timerProgressBar: true,
//             //     didOpen: (toast) => {
//             //         toast.onmouseenter = Swal.stopTimer;
//             //         toast.onmouseleave = Swal.resumeTimer;
//             //     }
//             // });
//             // Toast.fire({
//             //     icon: "success",
//             //     title: "Signed in successfully"
//             // });
//             // redirect to login page
//             window.location.href = './login.html';
//         })
//         .catch(error => {
//             // handle error
//             console.error(error);
//             alert('الكود فية مشكلة او اللينك .....');
//         });
// });