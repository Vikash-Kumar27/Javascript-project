 const input = document.getElementById("input");
 const button = document.getElementById("button");
 const list_Container = document.querySelector(".list-container")



 button.addEventListener("click",()=>{
    if(input.value == ""){
        alert("Please write something")
    }
    else{
    let li =document.createElement("li");
    li.innerHTML = input.value;
    list_Container.appendChild(li)
    let span = document.createElement("span")
    span.classList.add("material-symbols-outlined");
    span.innerHTML = "delete";
    li.appendChild(span)
    
  }
   input.value=""
   set()
});

list_Container.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        console.log(e.target.innerText);
        set()
    }
   if(e.target.classList.contains("material-symbols-outlined")){
    const listItem = e.target.parentElement;
    list_Container.removeChild(listItem)
    set()
   }
})


function set(){
    localStorage.setItem("data",list_Container.innerHTML)
}
function show(){
    list_Container.innerHTML = localStorage.getItem("data")
}
show()