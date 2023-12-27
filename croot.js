export function container(id){
    return document.getElementById(id);
}

export function onClick(id,actionfunctionname){
    document.getElementById(id).onclick = actionfunctionname;
}

export function onChange(id,actionfunctionname){
    document.getElementById(id).onchange = function() {actionfunctionname()};
}

export function onInput(id,actionfunctionname){
    document.getElementById(id).oninput = function() {actionfunctionname()};
}

// initial HTML document has been completely loaded and parsed,
// without stylesheets, images, and subframes to finish loading
export function runAfterDOM(runFunction){
    document.addEventListener('DOMContentLoaded', function() {runFunction()});
}

//This includes after-all assets like images, scripts, and CSS files loaded.
export function runAfterAll(runFunctionEvent){
    window.addEventListener('load', (event) => {runFunctionEvent(event)});
}

export function textFocus(id){
    document.getElementById(id).focus();
}

export function textBlur(id){
    document.getElementById(id).blur();
}

export function getValue(id){
    return document.getElementById(id).value;
}

//get radio button value using by name not id
export function getValueRadio(name){
    const RadioButtons = document.getElementsByName(name);
    let selectedValue;

    RadioButtons.forEach(radioButton => {
        if (radioButton.checked) {
            selectedValue = radioButton.value;
        }
        console.log("Selected Value:", selectedValue);
    });
    return selectedValue;
}

export function getValueSelect(id){
    const sel = document.getElementsByName(id);
    return sel.options[sel.selectedIndex].value;
}

export function getTextSelect(id){
    const sel = document.getElementsByName(id);
    return sel.options[sel.selectedIndex].text;
}

//get file size in form input in KB
export function getFileSize(id){
    let inputElement = document.getElementById(id);
    let files = inputElement.files;
    let fileSize = files[0].size;
    let fileSizeInKB = (fileSize/1024);
    return fileSizeInKB;
}

export function setValue(id,valuecontent){
    return document.getElementById(id).value=valuecontent;
}

export function setInner(id,content){
    document.getElementById(id).innerHTML = content;
}

export function setInnerText(id,content){
    document.getElementById(id).innerText = content;
}

export function addInner(id,content){
    document.getElementById(id).innerHTML += content;
}

export function addChild(id,tag,classvalue,content){
    let el = document.createElement(tag);
    let classArray = classvalue.split(" ");
    classArray.forEach(setClassValue.bind(null,el));
    el.innerHTML = content;
    document.getElementById(id).appendChild(el);
}

function setClassValue(el,classvalue){
    el.classList.add(classvalue.trim());
}

export function addClassValue(id, classValue){
    document.getElementById(id).classList.add(classValue.trim());
}

export function show(id){
    document.getElementById(id).style.display = 'block';
}

export function hide(id){
    document.getElementById(id).style.display = 'none';
}

export function renderHTML(id,urlHTML){
    document.getElementById(id).load(urlHTML);
}