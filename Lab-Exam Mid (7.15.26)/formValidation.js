console.log("Connected");

function submitForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const studentId = document.getElementById("studentId").value;
    const email = document.getElementById("email").value;
    const credit = document.getElementById("credit").value;
    const department = document.getElementById("department").value;

    let hasError = false;

    if (!firstName) {
        document.getElementById("firstNameError").innerHTML = "First name is required";
        hasError = true;
    } else {
        document.getElementById("firstNameError").innerHTML = "";
    }

    if (!lastName) {
        document.getElementById("lastNameError").innerHTML = "Last name is required";
        hasError = true;
    } else {
        document.getElementById("lastNameError").innerHTML = "";
    }

    if (!studentId) {
        document.getElementById("studentIdError").innerHTML = "Student ID is required";
        hasError = true;
    } else if (studentId.indexOf("-") == -1) {
        document.getElementById("studentIdError").innerHTML = "Student ID must contain -";
        hasError = true;
    } else {
        document.getElementById("studentIdError").innerHTML = "";
    }

    if (!email) {
        document.getElementById("emailError").innerHTML = "Email is required";
        hasError = true;
    } else if (email.indexOf("@student.aiub.edu") == -1) {
        document.getElementById("emailError").innerHTML = "Email must contain @student.aiub.edu";
        hasError = true;
    } else {
        document.getElementById("emailError").innerHTML = "";
    }

    if (credit == "") {
        document.getElementById("creditError").innerHTML = "Credit is required";
        hasError = true;
    } else if (credit < 0) {
        document.getElementById("creditError").innerHTML = "Credit cannot be less than 0";
        hasError = true;
    } else if (credit >= 148) {
        document.getElementById("creditError").innerHTML = "Credit must be less than 148";
        hasError = true;
    } else {
        document.getElementById("creditError").innerHTML = "";
    }

    if (!department) {
        document.getElementById("departmentError").innerHTML = "Department is required";
        hasError = true;
    } else {
        document.getElementById("departmentError").innerHTML = "";
    }

    if (!hasError) {
        var tableBody = document.getElementById("studentTableBody");
        var newRow = tableBody.insertRow();

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);

        cell1.innerHTML = firstName;
        cell2.innerHTML = lastName;
        cell3.innerHTML = studentId;
        cell4.innerHTML = email;
        cell5.innerHTML = credit;
        cell6.innerHTML = department;

        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("studentId").value = "";
        document.getElementById("email").value = "";
        document.getElementById("credit").value = "";
        document.getElementById("department").value = "";
    }

    return false;
}