const addProblemForm = document.getElementById('formdata');
addProblemForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const userId = localStorage.getItem('userId');
    // const problemName = document.getElementById("username").value;
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
    // formData.append("username", problemName);
    formData.append("Description", problemDescription);
    formData.append("ProblemImg", problemImage, );
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