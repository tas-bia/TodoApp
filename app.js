var list = document.getElementById("list");

function addTodo(){
    var todo_item = document.getElementById("todo-item");
        // created li tag with text node
    var li = document.createElement("li");
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)
        // Created delete button
    var delbtn = document.createElement("button")
    var delText = document.createTextNode("Delete")
    delbtn.setAttribute("class","btn")
    delbtn.setAttribute("onclick","deleteItem(this)")
    delbtn.appendChild(delText)
    // created Edit button 
    var editbtn = document.createElement("button")
    var editText = document.createTextNode("Edit")
    editbtn.setAttribute("class","btn")
    editbtn.setAttribute("onclick","editItem(this)")
    editbtn.appendChild(editText)

    li.appendChild(delbtn)
    li.appendChild(editbtn)
    list.appendChild(li)
    todo_item.value = ""
    //console.log(li)
}
function deleteItem(e){
    e.parentNode.remove()
}
function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Edit item" , val)
    e.parentNode.firstChild.nodeValue = editValue
}
function deleteAll(){
    list.innerHTML = ""
}