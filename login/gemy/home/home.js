document.addEventListener("DOMContentLoaded", (e) => {
    const token = localStorage.getItem('token');
    const data = localStorage.getItem('data');
    // const problemElement = document.createElement('div');
    const problemElement = document.createElement('div');

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


    fetch('https://darwish1337-001-site1.gtempurl.com/api/Problem/GetProblems', {
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
                  <h3>${problem.name}</h3>
                  <img class="photo" src="./شخص.png" alt="">
                  <p class="prgr">${problem.description}</p>
                  <img class="sha" src="https://darwish1337-001-site1.gtempurl.com/assets/images/problems/${problem.problemImg}" alt="">
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

const deleteButton = document.getElementById('deleteButton');

deleteButton.addEventListener('click', async() => {
    const problemId = 123; // Replace 123 with the actual problem ID
    try {
        const response = await fetch(`https://darwish1337-001-site1.gtempurl.com/api/Problem/DeleteProblemById?problemId=${problemId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log(`Problem with ID ${problemId} deleted successfully`);
            // You can also update the UI to reflect the deletion
            // For example, you can remove the problem from a list
            // document.getElementById('problemList').removeChild(document.getElementById(`problem-${problemId}`));
        } else {
            console.error(`Error deleting problem: ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});