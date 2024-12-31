function addTask(){
    var task=document.getElementById("tin").value
    var taskList=document.getElementById("tasklist")
    if(task==""){
        alert("please enter the task")
        return
    }
     
    var listItem=document.createElement('li')
    listItem.innerText=tin.value
    taskList.appendChild(listItem)

    var buttoncontainer=document.createElement('div')
    listItem.appendChild(buttoncontainer)
    buttoncontainer.className="task-button"

    var deleteButton=document.createElement('button')
    buttoncontainer.appendChild(deleteButton)
    deleteButton.innerText="Delete"
    deleteButton.onclick=function(){
        taskList.removeChild(listItem)
    }

    var completebutton=document.createElement('button')
    buttoncontainer.appendChild(completebutton)
    completebutton.innerText="Complete"
    completebutton.onclick=function(){
        listItem.classList.toggle('completed')
    }
    tin.value=""
}