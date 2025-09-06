const form = document.forms['addTask']

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    alert('Form submitted')
    const date = form['date'].value
    const description = form['description'].value
})