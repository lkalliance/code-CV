const loginForm = $('#login-form');
const loginUsername = $('#login-username');
const loginPassword = $('#login-password');
const createForm = $('#create-form');
const createUsername = $('#create-username');
const createPassword = $('#create-password');

const clearForms = () => {
    loginUsername.val("");
    loginPassword.val("");
    createUsername.val("");
    createPassword.val("");
}

createForm.on('submit', async (e) => {
    e.preventDefault();
    if (createUsername.val() == "" || createPassword.val() == "" ) {
        console.log("Need both fields filled");
        return;
    }
    const bodyObj = {
        username: createUsername.val(),
        password: createPassword.val()
    }
    const fetchObj = {
        method: 'POST',
        body: JSON.stringify(bodyObj),
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const result = await fetch('/api/users/', fetchObj);
    const message = await result.json();
    
    console.log(message);
    clearForms();

})

loginForm.on('submit', async (e) => {
    e.preventDefault();
    if (loginUsername.val() == "" || loginPassword.val() == "" ) {
        console.log("Need both fields filled");
        return;
    }
    const bodyObj = {
        username: loginUsername.val(),
        password: loginPassword.val()
    }
    const fetchObj = {
        method: 'POST',
        body: JSON.stringify(bodyObj),
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const result = await fetch('/api/users/login', fetchObj);
    const message = await result.json();
    
    console.log(message.message);
    clearForms();

})

