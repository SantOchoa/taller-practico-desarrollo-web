const form = document.forms['addTask']

const lastkeylocalstorage = ()=>{
    let keys = []
    if(localStorage.length == 0){
        return 0
    }
    for(i=0;i<localStorage.length;i++){
        const key = localStorage.key(i)
        keys.push(parseInt(key.charAt(key.length-1)))
    }
    return Math.max(...keys)
}

form.addEventListener('submit', (event)=> {
    debugger
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
    const num = lastkeylocalstorage() + 1
    localStorage.setItem(`task_${num}`, JSON.stringify(savetask))
    form.reset()
})