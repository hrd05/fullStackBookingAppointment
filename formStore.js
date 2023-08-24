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
        var user = {
            name: nameInput.value,
            email: emailInput.value
        }
        var StoredUser = JSON.stringify(user);
        localStorage.setItem('UserDetails',StoredUser);
    }

    nameInput.value='';
    emailInput.value='';
    
}