
function saveToDb(event)  {
    event.preventDefault();

    const name= event.target.name.value;
    const phone= event.target.phone.value;
    const email = event.target.email.value;

    const userDetail = {
        name,
        phone,
        email
    }
    axios.post("http://localhost:5000/form/users", userDetail)
    .then((response) => {
        showUser(response.data);
    })
    .catch(err => {
        console.log(err);
    })

}



function showUser(user) {

    const parentElement = document.getElementById('users');

    const childElement = document.createElement('li');
    childElement.className = 'list-group-item';
    childElement.appendChild(document.createTextNode(`Name: ${user.name} , Phone: ${user.phoneNo}, Email: ${user.email}`));

    const delbtn = document.createElement('button');
    const editBtn = document.createElement('button');

    delbtn.className = 'btn btn-danger btn-sm float-right delete';
    editBtn.className = 'btn btn-sm btn-dark float-right';

    delbtn.textContent = 'DELETE';
    editBtn.textContent = 'EDIT';

    childElement.appendChild(delbtn);
    childElement.appendChild(editBtn);
    parentElement.appendChild(childElement);

    delbtn.onclick = () => {
        const userId = user.id; 
        axios.delete(`http://localhost:5000/form/users/${userId}`)
        .then(res => {
            console.log(res.data);
            
            parentElement.removeChild(childElement);
        })
        .catch(error => {
            console.error('Error deleting user detail:', error);
          
        });
    }

}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("http://localhost:5000/form/users")
    .then((response) => {
           for(var i=0;i<response.data.length;i++){
                showUser(response.data[i]);
           }
    })
    .catch(err => console.log(err));
})

