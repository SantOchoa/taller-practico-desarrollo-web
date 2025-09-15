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
                const item = data[i] 
                const task = item.task          
                if(task.status == "complete"){
                    filterdata.push(item)
                }
            }
            return filterdata
        }
        if(filter=="incomplete"){
            for(i=0;i<data.length;i++){
                const item = data[i]
                const task = item.task
                if(task.status == "incomplete"){
                    filterdata.push(item)
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
            const item = data[i]
            const task = item.task
            if(task.task == search){
                searchdata.push(item)
            }
        }
        return searchdata
    }
}

const filldata = ()=>{
    let data = []
    for (i=0;i<localStorage.length;i++){
        const key = localStorage.key(i)
        const task = JSON.parse(localStorage.getItem(key))
        data.push({key, task})
    }
    return data
}

const sortdatabydate = (data) => {
    return data.sort((a, b) => {
        const dateA = new Date(a.task.date)
        const dateB = new Date(b.task.date)
        return dateA - dateB
    });
}

const countstatus = (data, status) => {
    let count = 0
    for(i=0;i<data.length;i++){
        const item = data[i]
        const task = item.task
        if(task.status == status){
            count++
        }
    }
    return count
}

const updateCounters = (data) => {
    allbtn.textContent = data.length;
    completebtn.textContent = countstatus(data, "complete");
    incompletbtn.textContent = countstatus(data, "incomplete");
}


formsearch.addEventListener('submit', (event) => {
    event.preventDefault()
    search = formsearch['nameTask'].value
    filter = formsearch['filterTask'].value
    let data = filldata()
    let filteredData = filterfun([...data])
    let searchedData = searchfun([...filteredData])
    searchedData = sortdatabydate([...searchedData])
    tbody.innerHTML = ''
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
            const item = searchedData[i]
            const task = item.task
            const td1 = document.createElement('td')
            td1.textContent = task.task
            const td2 = document.createElement('td')
            td2.textContent = task.description
            const td3 = document.createElement('td')
            td3.textContent = task.date
            const td4 = document.createElement('td')
            const select = document.createElement('select')
            const option1 = document.createElement('option')
            option1.value = "incomplete"
            option1.textContent = "Incompleto"
            const option2 = document.createElement('option')
            option2.value = "complete"
            option2.textContent = "Completo"
            select.appendChild(option1)
            select.appendChild(option2)
            select.value = task.status
            select.addEventListener('change', ()=>{
                localStorage.setItem(item.key, JSON.stringify({...task, status: select.value}))
                let currentData = filldata()
                let filteredData = filterfun([...currentData])
                let searchedData = searchfun([...filteredData])
                searchedData = sortdatabydate([...searchedData])
                updateCounters(searchedData)
                tr.remove()
            })
            td4.appendChild(select)
            const td5 = document.createElement('td')
            const button = document.createElement('button')
            button.textContent = "Eliminar"
            button.addEventListener('click', () => {
                localStorage.removeItem(item.key)
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
        updateCounters(searchedData)
    }
    console.log(searchedData)
})


document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault()
    search = formsearch['nameTask'].value
    filter = formsearch['filterTask'].value
    let data = filldata()
    let filteredData = filterfun([...data])
    let searchedData = searchfun([...filteredData])
    searchedData = sortdatabydate([...searchedData])
    tbody.innerHTML = ''
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
            const item = searchedData[i]
            const task = item.task
            const td1 = document.createElement('td')
            td1.textContent = task.task
            const td2 = document.createElement('td')
            td2.textContent = task.description
            const td3 = document.createElement('td')
            td3.textContent = task.date
            const td4 = document.createElement('td')
            const select = document.createElement('select')
            const option1 = document.createElement('option')
            option1.value = "incomplete"
            option1.textContent = "Incompleto"
            const option2 = document.createElement('option')
            option2.value = "complete"
            option2.textContent = "Completo"
            select.appendChild(option1)
            select.appendChild(option2)
            select.value = task.status
            select.addEventListener('change', ()=>{
                localStorage.setItem(item.key, JSON.stringify({...task, status: select.value}))
                let currentData = filldata()
                let filteredData = filterfun([...currentData])
                let searchedData = searchfun([...filteredData])
                searchedData = sortdatabydate([...searchedData])
                updateCounters(searchedData)
            })
            td4.appendChild(select)
            const td5 = document.createElement('td')
            const button = document.createElement('button')
            button.textContent = "Eliminar"
            button.addEventListener('click', () => {
                localStorage.removeItem(item.key)
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
        updateCounters(searchedData)
    }
    console.log(searchedData)

})