var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');

// storing name input and email input in local storage

var form = document.getElementById('my-form');
var userList = document.getElementById('users');
form.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault()

    if(nameInput.value === '' || emailInput.value === ''){
        alert('Please enter all fields');
    }

    

    else{
        //create li list
     const li = document.createElement('li');

     li.appendChild(document.createTextNode(`${nameInput.value}-${emailInput.value}`));
     
     var delBtn = document.createElement('button');     
     delBtn.appendChild(document.createTextNode('Delete'));
     delBtn.className= 'btnDel';

     li.appendChild(delBtn);
     userList.appendChild(li);

     // storing user in form of objects
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

        // del btn event listener 
        delBtn.addEventListener('click', function(){
            // remove list 
            userList.removeChild(li);
            
            //also remove list from local storage
            const userIndex = users.indexOf(newUser);
            if (userIndex !== -1) {
                users.splice(userIndex, 1);
                localStorage.setItem('UserDetails', JSON.stringify(users));
            }

        });
        
    }

    nameInput.value='';
    emailInput.value='';
    
}