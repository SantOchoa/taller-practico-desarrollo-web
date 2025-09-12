const form = document.forms['addTask']

form.addEventListener('submit', (event)=> {
    event.preventDefault()
    const task = form['taskName'].value
    const date = form['date'].value
    const description = form['description'].value
    const status = 'incomplete'
    const savetask = {
        task,
        date,
        description,
        status
    }
    const num = localStorage.length +1
    localStorage.setItem(`task_${num}`, JSON.stringify(savetask))
    form.reset()
})