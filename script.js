//Get DOM Elements
let input = document.querySelector("#todo-input");
let addbutton = document.querySelector("#add-button");
let removebutton = document.querySelector("remove-button");
let list_parent = document.querySelector("#tasks");
let child_container = document.querySelector(".child-container");
let child_container_label = document.querySelector("#child-container-label");
let filter = document.querySelector(".filter");
let popupWindow = document.querySelector(".popup-window");
let popupWindow_close_button = document.querySelector("#close-window-button");
// ================================================================================


// ==================== Pop Up Window Functions ==================== //
function showpopupWindow(){
    filter.classList.add("show-window");
}

popupWindow_close_button.onclick = function(){
    filter.classList.remove("show-window");
}

// ==================== Pop Up Window Functions ==================== //



// ==================== Accept The Input By Press Enter Key ==================== //
input.addEventListener("keypress",PressEnter);

function PressEnter(event){
    if(event.key == "Enter"){
        addbutton.click();
    }
}
// ==================== Accept The Input By Press Enter Key ==================== //


// ==================== Insert The Task in The Container Function When Click the Add Button ==================== //
addbutton.onclick = function (){
    
    if(!input.value.trim()){
        showpopupWindow();
    }
    else{
        
        let list_element = document.createElement("li"); // The Parent Element for All Next Elements
        
        let checkbox = document.createElement("input"); // Checkbox to assign it with every end of a Task
        checkbox.type="checkbox";
        checkbox.classList.add("checkbox");

        let list_button = document.createElement("button"); // Remove button if You Wanted To remove any Task
        list_button.className = "remove-button";
        list_button.textContent = "x";
        
        
        let buttons_div_parent=document.createElement("div"); // <div> that contains checkbox and button elements for positioning purpose
        buttons_div_parent.appendChild(checkbox);
        buttons_div_parent.appendChild(list_button);
        
        let list_paragraph = document.createElement("p"); // <p> element to contain the input value
        list_paragraph.textContent = input.value;
        
        list_element.appendChild(list_paragraph);
        list_element.appendChild(buttons_div_parent);
        
        list_parent.appendChild(list_element);
        
        input.value = ""; //To reset the Input Value To Empty
        
        list_button.onclick = function () { // Remove Task Function
            list_element.remove(); 
        };
    }
};


// ==================== Insert The Task in The Container Function When Click the Add Button ==================== //


// ==================== The Label Animation Function ==================== //
input.onfocus = function() {
    child_container_label.classList.add("movefromTop-to-Bottom");
    
}
input.onblur = function() {
    child_container_label.classList.remove("movefromTop-to-Bottom");
}
// ==================== The Label Animation Function ==================== //

// ==================== Function To set the Pointer Events none When User click on the check box ==================== //
list_parent.addEventListener("click",function(event){
    if(event.target.classList.contains("checkbox")){
        const checkbox = event.target;
        if(checkbox.checked){ //if true add the class that add pointer-events:none to the checkbox element
            checkbox.classList.add("checkbox-pointer-none");
        }
        
    }
})
// ==================== Function To set the Pointer Events none When User click on the check box ==================== //
