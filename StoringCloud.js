 
 function saveToLocalStorageEvent(event){
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;

    const userDetails = {
        name,
        email 
    }
   // localStorage.setItem(email, JSON.stringify(userDetails));
   axios.post("https://crudcrud.com/api/1e63f4158a234ffe934fca13e6497982/appointmentData", userDetails)
   .then((res)=>{
    showUserOnScreen(res.data)
    console.log(res);
   })
   .catch(err=>console.log(err));
    //showUserOnScreen(userDetails)
 }

 window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/1e63f4158a234ffe934fca13e6497982/appointmentData")
    .then((res)=>{
        for(var i=0;i<res.data.length;i++)
        {
            showUserOnScreen(res.data[i]);
        }
    })
    .catch(err=>console.log(err));
 })

 function showUserOnScreen(userDetails){
    const parentElement = document.getElementById('users');

    const childElement = document.createElement('li');
    childElement.className = 'list-group-item';
    childElement.appendChild(document.createTextNode(`Name: ${userDetails.name} , Email: ${userDetails.email}`));

    const delbtn = document.createElement('button');
    const editBtn = document.createElement('button');

    delbtn.className = 'btn btn-danger btn-sm float-right delete';
    editBtn.className = 'btn btn-sm btn-dark float-right';

    delbtn.textContent = 'DELETE';
    editBtn.textContent = 'EDIT';

    childElement.appendChild(delbtn);
    childElement.appendChild(editBtn);
    parentElement.appendChild(childElement);

     //del btn functionality
     delbtn.onclick = () => {
        const userId = userDetails._id; // Assuming _id is the identifier for the user
        axios.delete(`https://crudcrud.com/api/1e63f4158a234ffe934fca13e6497982/appointmentData/${userId}`)
        .then(res => {
            console.log(res.data);
            // Remove the DOM element after a successful delete
            parentElement.removeChild(childElement);
        })
        .catch(error => {
            console.error('Error deleting user detail:', error);
            // Handle the error here, e.g., display an error message to the user
        });
    }
    
    
    editBtn.onclick = () => {
        //localStorage.removeItem(userDetails.description);
        parentElement.removeChild(childElement);
        document.getElementById('name').value = userDetails.name;
        document.getElementById('email').value = userDetails.email;
        
    }
 }