const form = document.forms['addTask']
let num = 0

form.addEventListener('submit', (e)=> {
    e.preventDefault()
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
    num++
    localStorage.setItem(`task_${num}`, JSON.stringify(savetask))
    form.reset()
})