var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');

var form = document.getElementById('my-form');
var userList = document.getElementById('users');
form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        alert('Please enter all fields');
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} - ${emailInput.value}`));

        var editBtn = document.createElement('button');
        editBtn.appendChild(document.createTextNode('Edit'));
        editBtn.className = 'editBtn';
        li.appendChild(editBtn);

        var delBtn = document.createElement('button');
        delBtn.appendChild(document.createTextNode('Delete'));
        delBtn.className = 'btnDel';
        li.appendChild(delBtn);

        userList.appendChild(li);

        var newUser = {
            name: nameInput.value,
            email: emailInput.value
        };

        var storedUsers = localStorage.getItem(newUser.name);
        var users = [];

        if (storedUsers) {
            users = JSON.parse(storedUsers);
        }

        users.push(newUser);

        localStorage.setItem(newUser.name, JSON.stringify(users));

        editBtn.addEventListener('click', function() {
            nameInput.value = newUser.name;
            emailInput.value = newUser.email;
            userList.removeChild(li);

            const userIndex = users.indexOf(newUser);
            if (userIndex !== -1) {
                users.splice(userIndex, 1);
                localStorage.setItem(newUser.name, JSON.stringify(users));
            }
        });

        delBtn.addEventListener('click', function() {
            userList.removeChild(li);

            const userIndex = users.indexOf(newUser);
            if (userIndex !== -1) {
                users.splice(userIndex, 1);
                localStorage.setItem(newUser.name, JSON.stringify(users));
            }
        });
    }

    nameInput.value = '';
    emailInput.value = '';
}
