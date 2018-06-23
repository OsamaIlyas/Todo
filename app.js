
function todoList()
{
    var item=document.getElementById("todoInput").value
     document.getElementById("todoInput").value="";
     if(item == "" || item == " "){
      alert("Enter Todo..!");
    }
    else
    {
    
    var newItem=document.createElement("li")
    var text = document.createTextNode(item)
    newItem.appendChild(text)
    document.getElementById("todoList").appendChild(newItem)

 
   li.appendChild(text);
   ul.appendChild(li);
   
    }
}

    function remove()
{
    var newCode="<div id='content'><ul id='todoList'></ul></div>";
    document.getElementById("content").innerHTML=newCode;
}
// function del()
// {
//   document.getElementById("todoList").style.visibility="hidden";
// }