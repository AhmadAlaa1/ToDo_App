//Get DOM Elements
let input = document.querySelector("#todo-input");
let addbutton = document.querySelector("#add-button");
let removebutton = document.querySelector("remove-button");
let list_parent = document.querySelector("#tasks");
let child_container_label = document.querySelector("#child-container-label");
let filter = document.querySelector(".filter");
let popupWindow = document.querySelector(".popup-window");
let popupWindow_close_button = document.querySelector("#close-window-button");
let dark_theme_button = document.querySelector("#dark-theme-button");
let theme_menu = document.querySelector("#theme-menu");
let night_theme = document.querySelector("#night-dark-theme");
let dark_theme = document.querySelector("#dark-theme");
let green_theme = document.querySelector("#green-light-theme");
let purple_light = document.querySelector("#purple-light");
let purple_dark = document.querySelector("#purple-dark");
const theme = document.getElementsByTagName("link")[0];
// ================================================================================

// ==================== InsertKeyShortcut and Exit Functions  ==================== //
document.addEventListener("keypress",function(e){ // Add Function that make the user insert into the input box directly when press "i" button
    if(e.key == "i" || e.key == "I" ){
        input.focus();
    }
})

document.addEventListener("keydown",function(e){
    if(e.key =="Escape"){
        input.blur();
    }
})
// ==================== InsertKeyShortcut and Exit Functions  ==================== //


// ==================== Save Current Theme in The Local Storage  ==================== //

let thememode = window.localStorage.getItem("currentTheme");
theme_menu.addEventListener("click",function(){
    document.querySelectorAll(".nav-bar button").forEach(button =>{
        button.classList.toggle("button-animation");
    });
})

// =================================
night_theme.onclick = function(){
    theme.setAttribute("href","./themes/night-dark-theme.css");
    window.localStorage.setItem("currentTheme","night-mode");
}
// =================================
green_theme.onclick = function(){
    theme.setAttribute("href","./themes/green-light-theme.css");
    window.localStorage.setItem("currentTheme","green-mode");
}
// =================================
purple_light.onclick = function(){
    theme.setAttribute("href","./themes/purple-light-theme.css");
    window.localStorage.setItem("currentTheme","purple-light-mode");
}
// =================================
purple_dark.onclick = function(){
    theme.setAttribute("href","./themes/purple-dark-theme.css");
    window.localStorage.setItem("currentTheme","purple-dark-mode");
}
// =================================

// If statment to change the theme to the localStorage value
thememode == "night-mode" ? theme.setAttribute("href","./themes/night-dark-theme.css") : "" ;
thememode == "green-mode" ? theme.setAttribute("href","./themes/green-light-theme.css"): "" ;
thememode == "purple-light-mode" ? theme.setAttribute("href","./themes/purple-light-theme.css"): "" ;
thememode == "purple-dark-mode" ? theme.setAttribute("href","./themes/purple-daek-theme.css"): "" ;
thememode == "dark-mode" ? theme.setAttribute("href","./themes/default-dark-theme.css"): "" ;
thememode == "light-mode" ? theme.setAttribute("href","./themes/default-light-theme.css"): "" ;

// ==================== Save Current Theme in The Local Storage  ==================== //


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


// ==================== The Label Animation Function ==================== //
input.onfocus = function() {
    child_container_label.classList.add("movefromTop-to-Bottom");  
    input.setAttribute("placeholder",'Press "Esc" To Exit');

}
input.onblur = function() {
    child_container_label.classList.remove("movefromTop-to-Bottom");
    input.setAttribute("placeholder",'Press "I" To Start Typing');

}
// ==================== The Label Animation Function ==================== //


// ==================== Insert The Task in The Container Function When Click the Add Button ==================== //

let tasks = window.localStorage.getItem("tasks");

window.onload = function(){
    if(tasks){
        list_parent.innerHTML = tasks;
        setRemoveButtons(); // Set up remove buttons on load
    }
}

addbutton.onclick = function (){
    if(!input.value.trim()){
        showpopupWindow();
    } else {
        let list_element = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox");

        let list_button = document.createElement("button");
        list_button.className = "remove-button";
        list_button.textContent = "+";

        let buttons_div_parent = document.createElement("div");
        buttons_div_parent.appendChild(checkbox);
        buttons_div_parent.appendChild(list_button);
        buttons_div_parent.style.cssText = "display:flex;";

        let list_paragraph = document.createElement("p");
        list_paragraph.textContent = input.value;

        list_element.appendChild(list_paragraph);
        list_element.appendChild(buttons_div_parent);
        list_parent.appendChild(list_element);

        // Update localStorage
        updateLocalStorage();

        input.value = ""; // To reset the Input Value To Empty

        list_button.onclick = function () { // Remove Task Function
            list_element.remove();
            updateLocalStorage();
        };
    }
};

//Function to Update The LocalStorage
function updateLocalStorage() {
    window.localStorage.setItem("tasks", list_parent.innerHTML);
}


// Function to delete the saved tasks in the LocalStorage
function setRemoveButtons() {
    let removeButtons = document.querySelectorAll(".remove-button");
    removeButtons.forEach(button => {
        button.onclick = function () {
            button.closest("li").remove();
            updateLocalStorage();
        };
    });
}

// ==================== Insert The Task in The Container Function When Click the Add Button ==================== //


// ==================== Function To set the Pointer Events none When User click on the check box ==================== //

list_parent.addEventListener("click",function(event){
    if(event.target.classList.contains("checkbox")){
        const checkbox = event.target;
        let par = checkbox.closest("li").querySelector("p");
        if(checkbox.checked){ //if true add the class that add pointer-events:none to the checkbox element
            checkbox.classList.add("checkbox-pointer-none");
            par.style.cssText = "text-decoration:line-through;";
        }
        
    }
});

// ==================== Function To set the Pointer Events none When User click on the check box ==================== //


// ==================== Function To Switch Between Light and Dark Theme ==================== //

dark_theme_button.onclick = function(){
    if(theme.getAttribute("href") == "./themes/default-light-theme.css"){
        theme.setAttribute("href","./themes/default-dark-theme.css");
        window.localStorage.setItem("currentTheme","dark-mode");
    }else{
        theme.setAttribute("href","./themes/default-light-theme.css");    
        window.localStorage.setItem("currentTheme","light-mode");
    }
}

// ==================== Function To Switch Between Light and Dark Theme ==================== //
