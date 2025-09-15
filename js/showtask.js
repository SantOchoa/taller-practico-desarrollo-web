const filterfun= (data)=>{
    if (data.length == 0){
       return data
    }else{
        let filterdata = []
        if (filter=="all"){
            return data
        }
        if(filter=="complete"){
            for(i=0;i<data.length;i++){  
                const task = data[i]           
                if(task.status == "complete"){
                    filterdata.push(task)
                }
            }
            return filterdata
        }
        if(filter=="incomplete"){
            for(i=0;i<data.length;i++){
                const task = data[i]
                if(task.status == "incomplete"){
                    filterdata.push(task)
                }
            }
            return filterdata
        }
    }
}

const searchfun= (data)=>{
    if (data.length ==0){
        return data
    }else{
        let searchdata = []
        if(search == ""){
            return data
        }
        for(i=0;i<data.length;i++){
            const task = data[i]    
            if(task.task == search){
                searchdata.push(task)
            }
        }
        return searchdata
    }
}

const filldata = ()=>{
    let data = []
    for (i=0;i<localStorage.length;i++){
        const key = localStorage.key(i)
        data.push(JSON.parse(localStorage.getItem(key)))
    }
    return data
}

const searchdatabytaskname =(nameTask)=>{
    for(i=0;i<localStorage.length;i++){
        const key = localStorage.key(i)
        const task = JSON.parse(localStorage.getItem(key))
        if (task.task == nameTask){
            return `task_${i+1}`
        }
    }
}

formsearch.addEventListener('submit', (event) => {
    event.preventDefault()
    search = formsearch['nameTask'].value
    filter = formsearch['filterTask'].value
    let data = filldata()
    let filteredData = filterfun([...data])
    let searchedData = searchfun([...filteredData])
    console.log(searchedData)
})


document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault()
    search = formsearch['nameTask'].value
    filter = formsearch['filterTask'].value
    let data = filldata()
    let filteredData = filterfun([...data])
    let searchedData = searchfun([...filteredData])
    if (searchedData.length == 0){
        const tr = document.createElement('tr')
        const td = document.createElement('td')
        td.colSpan = 5
        td.textContent = "No hay tareas que mostrar"
        tr.appendChild(td)
        tbody.appendChild(tr)
    }else{
        for(i=0;i<searchedData.length;i++){
            const tr = document.createElement('tr')
            const task = searchedData[i]
            const td1 = document.createElement('td')
            td1.textContent = task.task
            const td2 = document.createElement('td')
            td2.textContent = task.description
            const td3 = document.createElement('td')
            td3.textContent = task.date
            const td4 = document.createElement('td')
            td4.textContent = task.status
            const td5 = document.createElement('td')
            const button = document.createElement('button')
            button.textContent = "Eliminar"
            let taskkey = searchdatabytaskname(task.task)
            button.addEventListener('click', () => {
                localStorage.removeItem(taskkey)
                tr.remove()
            })
            td5.appendChild(button)
            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
            tr.appendChild(td4)
            tr.appendChild(td5)
            tbody.appendChild(tr)
        }
    }
    console.log(searchedData)

})