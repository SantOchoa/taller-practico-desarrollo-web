const formsearch = document.forms['searchTask']
let tbody = document.getElementById('taskTableBody')
let filter = formsearch['filterTask'].value
let search = formsearch['nameTask'].value
let completebtn = document.getElementById('completedTasks')
let incompletbtn = document.getElementById('incompleteTasks')
let allbtn = document.getElementById('totalTasks')