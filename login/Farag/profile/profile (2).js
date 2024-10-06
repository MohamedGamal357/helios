// document.getElementById('form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission
    
//     // var Id = '3f8a134b-000b-4789-8f16-b73ce4c70498'; // Assuming you have the ID from somewhere in your logic
//     var FirstName = document.getElementById('first-name').value;
//     var LastName = document.getElementById('last-name').value;
//     var UserType = document.getElementById('UserType').value;
//     var Job = document.getElementById('Job').value;
//     fetch("https://darwish1337-001-site1.gtempurl.com/Users/UpdateUserProfile",{
//         method: 'PUT',
//         headers:{
//             "Content-Type": "application/json",
            
//         },
//         body:JSON.stringify({
//             FirstName,LastName,UserType,Job
//     })
//     })
//     .then((res) => {
//         console.log(res);
//         if (res.ok) {
//         return res.json();
//         } 
        
//     })
//     .then((data) => {
//     // localStorage.setItem("Id","3f8a134b-000b-4789-8f16-b73ce4c70498");    
//     console.log("Logged in successfully!", data);
//     // console.log( localStorage.getItem(Id));



//     alert('Profile information saved!');
// });
// // });
// var FirstName = document.getElementById('FirstName').value;
// var LastName = document.getElementById('LastName').value;
// var UserType = document.getElementById('UserType').value;
// var Job = document.getElementById('Job').value;

// fetch('https://darwish1337-001-site1.gtempurl.com/Users/UpdateUserProfile', {
//   method: 'PUT',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     FirstName,
//     LastName,
//     UserType,
//     Job
//   }),
//   mode: 'cors',
//   credentials: 'include' // شمل الأ증ازات (مثل ملفات تعريف الارتباط) في الطلب
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error('خطأ:', error));