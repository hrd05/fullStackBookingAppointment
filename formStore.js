var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');

// storing name input and email input in local storage

var form = document.getElementById('my-form');

form.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault()

    if(nameInput.value === '' || emailInput.value === ''){
        alert('Please enter all fields');
    }
    else{
        var newUser = {
            name: nameInput.value,
            email: emailInput.value
        }
        var storedUsers = localStorage.getItem('UserDetails');
        var users = [];

        if (storedUsers) {
            users = JSON.parse(storedUsers);
        }

        // Add the new user to the array
        users.push(newUser);

        // Store the updated user array back to local storage
        localStorage.setItem('UserDetails', JSON.stringify(users));
    }

    nameInput.value='';
    emailInput.value='';
    
}