const projectForm = $('form');

projectForm.on("submit", async (e) => {
    e.preventDefault();
    
    const data = {
        title: $('#project-title').val(),
        url: $('#project-url').val(),
        image: $('#project-image').val(),
        description: $('#project-description').val(),
    };
    const sendObj = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const sent = await fetch('/api/projects', sendObj)
    const answer = await sent.json()

    console.log(answer);
})