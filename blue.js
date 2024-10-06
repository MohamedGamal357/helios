// function showAlert() {
//     var alertBox = document.createElement("div");
//     alertBox.innerHTML = `
//       <h2>إضافة محتوى</h2>
//       <input type="text" id="name" placeholder="أدخل الاسم">
//       <br><br>
//       <textarea id="content" placeholder="أدخل المحتوى"></textarea>
//       <br><br>
//       <button onclick="addContent()">إضافة</button>
//       <button onclick="closeAlert()">إلغاء</button>
//     `;
//     alertBox.style.position = "fixed";
//     alertBox.style.top = "50%";
//     alertBox.style.left = "50%";
//     alertBox.style.transform = "translate(-50%, -50%)";
//     alertBox.style.background = "#f0f0f0";
//     alertBox.style.border = "1px solid #ccc";
//     alertBox.style.padding = "20px";
//     alertBox.style.width = "300px";
//     alertBox.style.textAlign = "center";
//     document.body.appendChild(alertBox);
// }

// function closeAlert() {
//     document.body.removeChild(document.querySelector("div"));
// }

// function addContent() {
//     var name = document.getElementById("name").value;
//     var content = document.getElementById("content").value;
//     // هنا يمكنك إضافة الكود لتحديث المحتوى أو إرساله إلى الخادم
//     alert("تم إضافة المحتوى بنجاح!");
//     closeAlert();
// }
// JavaScript
// JavaScript
const addBtn = document.getElementById('add-btn');

addBtn.addEventListener('click', () => {
    const alertBox = document.createElement('div');
    alertBox.innerHTML = `
    <input type="text" id="name-input" placeholder="أدخل الاسم">
    <input type="text" id="content-input" placeholder="أدخل المحتوي">
    <button id="add-btn-inner">إضافة</button>
    <button id="update-btn">تحديث</button>
    <button id="delete-btn">حذف</button>
  `;

    alertBox.style.position = 'absolute';
    alertBox.style.top = '50%';
    alertBox.style.left = '50%';
    alertBox.style.transform = 'translate(-50%, -50%)';
    alertBox.style.background = 'white';
    alertBox.style.padding = '20px';
    alertBox.style.border = '1px solid #ccc';
    alertBox.style.borderRadius = '10px';
    alertBox.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';

    document.body.appendChild(alertBox);

    const addBtnInner = document.getElementById('add-btn-inner');
    const updateBtn = document.getElementById('update-btn');
    const deleteBtn = document.getElementById('delete-btn');

    addBtnInner.addEventListener('click', () => {
        // API link for add
        const apiUrl = 'https://example.com/add';
        const name = document.getElementById('name-input').value;
        const content = document.getElementById('content-input').value;

        fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, content })
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    });

    updateBtn.addEventListener('click', () => {
        // API link for update
        const apiUrl = 'https://example.com/update';
        const name = document.getElementById('name-input').value;
        const content = document.getElementById('content-input').value;

        fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, content })
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    });

    deleteBtn.addEventListener('click', () => {
        // API link for delete
        const apiUrl = 'https://example.com/delete';
        const name = document.getElementById('name-input').value;
        const content = document.getElementById('content-input').value;

        fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, content })
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    });
});

addBtn.addEventListener('click', async() => {
    // ... rest of the code ...

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, content })
        });

        const result = await response.json();
        if (result.success) {
            window.location.href = "home.html";

            function createProblemElement(problem) {
                const problemDiv = document.createElement('div');
                problemDiv.classList.add('form-group');

                problemDiv.innerHTML = `
                    <img class="sha" src="./شاك.png" alt="">
                    <h3>${problem.title}</h3>
                    <img class="photo" src="./شخص.png" alt="">
                    <p class="prgr">${problem.description}</p>
                    <p class="more">المزيد</p>
                `;

                return problemDiv;
            }
            console.log('مشكلة جديدة تم إضافتها بنجاح!');
        } else {
            console.error('حدث خطأ أثناء إضافة المشكلة!');
        }
    } catch (error) {
        console.error('Error adding problem:', error);
    }
});