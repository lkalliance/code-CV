const subBtn = $('#test-button');

subBtn.on('click', async (e) => {
    e.preventDefault();
    postObj = {
        method: 'POST',
        body: JSON.stringify({
            'blob': 'This is what I sent'
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const answer = await fetch('/api/projects', postObj);
    const mess = await answer.json();
    console.log(mess);
})