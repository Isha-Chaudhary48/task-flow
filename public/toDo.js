let container=document.querySelector(".container");

let input=document.getElementById("inputWork");

let taskLists =document.getElementById("taskLists");


let Add=()=>{
    if(input.value=="")
        {
            alert("please add some task");
        }
        else{
          
             let addContent=document.createElement("div");
             addContent.className="taskItem";
          
            addContent.innerHTML=`<p>${input.value}</p> <i class="fa-solid fa-trash"></i>`; 
            addContent.style.backgroundColor="white";
            
              
             taskLists.appendChild(addContent);
             input.value="";
             addContent.querySelector("i").addEventListener("click",remove);
             function remove(){
             addContent.remove();
             }
           
           

           
           



        }
       
    
};
