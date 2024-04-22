// value submission in table

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var address = document.getElementById('address').value;
    var pincode = document.getElementById('pincode').value;
    var gender = document.getElementById('gender').value;
    var state = document.getElementById('state').value;
    var country = document.getElementById('country').value;

    // Get selected food options
    var foodArray = [];
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    checkboxes.forEach(function(checkbox) {
      foodArray.push(checkbox.value);
    });

    // Create a new row for the table
    var tableBody = document.getElementById('tableBody');
    var newRow = tableBody.insertRow();

    // Insert cells into the new row
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);

    // Add values to the cells
    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = pincode;
    cell4.innerHTML = address;
    cell5.innerHTML = state;
    cell6.innerHTML = country;
    cell7.innerHTML = gender;
    cell8.innerHTML = foodArray.join(', ');

    // Clear form fields
    document.getElementById('myForm').reset();
  });