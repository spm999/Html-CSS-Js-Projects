let currentPage = 1;
const totalPages = 3;

function validatePage() {
    let isValid = true;
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (currentPage === 1) {
        if (name === '') {
            isValid = false;
            document.getElementById('nameError').innerText = "Name is required";
        } else {
            document.getElementById('nameError').innerText = "";
        }
    } else if (currentPage === 2) {
        if (email === '') {
            isValid = false;
            document.getElementById('emailError').innerText = "Email is required";
        } else {
            document.getElementById('emailError').innerText = "";
        }
    } else if (currentPage === 3) {
        if (message === '') {
            isValid = false;
            document.getElementById('messageError').innerText = "Message is required";
        } else {
            document.getElementById('messageError').innerText = "";
        }
    }

    return isValid;
}

function nextPage() {
    if (validatePage()) {
        if (currentPage < totalPages) {
            document.getElementById(`page${currentPage}`).classList.remove('active');
            currentPage++;
            document.getElementById(`page${currentPage}`).classList.add('active');
        }
    }
}

function prevPage() {
    if (currentPage > 1) {
        document.getElementById(`page${currentPage}`).classList.remove('active');
        currentPage--;
        document.getElementById(`page${currentPage}`).classList.add('active');
    }
}

function submitForm() {
    if (validatePage()) {
        // Collect form data
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Print form details
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        // Clear input fields
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';

        // Optionally, you can also display the details on the page
        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('output');
        detailsDiv.innerHTML = `
    <h2>Form Details</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;
        document.body.appendChild(detailsDiv);
    }
}
