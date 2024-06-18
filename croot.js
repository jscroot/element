export function container(id){
    return document.getElementById(id);
}

export function onClick(id,actionfunctionname){
    document.getElementById(id).onclick = actionfunctionname;
}

export function onChange(id,actionfunctionname){
    document.getElementById(id).onchange = function(event) {actionfunctionname(event.target)};
}

export function onInput(id,actionfunctionname){
    document.getElementById(id).oninput = function(event) {actionfunctionname(event.target)};
}

// initial HTML document has been completely loaded and parsed,
// without stylesheets, images, and subframes to finish loading
export function runAfterDOM(runFunctionEvent){
    window.addEventListener('DOMContentLoaded',(event) => {runFunctionEvent(event)});
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

export function addChild(id, tag, classvalue, content) {
    let el = document.createElement(tag);
    if (classvalue.trim() !== "") {
        let classArray = classvalue.split(" ");
        classArray.forEach(setClassValue.bind(null, el));
    }
    el.innerHTML = content;
    document.getElementById(id).appendChild(el);
}

export function setClassValue(el, classvalue) {
    if (classvalue.trim() !== "") {
        el.classList.add(classvalue.trim());
    }
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

export function disableInput(id) {
    const Input = document.getElementById(id);
    Input.disabled = true;
}
export function enableInput(id) {
    const Input = document.getElementById(id);
    Input.disabled = false;
}

export function renderHTML(id,urlHTML){
    document.getElementById(id).load(urlHTML);
}

export function addScriptInBody( src ) {
    let s = document.createElement( 'script' );
    s.setAttribute( 'src', src );
    document.body.appendChild( s );
}

export function addScriptInHead( src ) {
    let s = document.createElement( 'script' );
    s.setAttribute( 'src', src );
    document.head.appendChild( s );
}

export function addCSS( href ) {
    let s = document.createElement( 'link' );
    s.setAttribute( 'rel', 'stylesheet' );
    s.setAttribute( 'href', href );
    document.head.appendChild( s );
}

export function addCSSIn( href,id ) {
    let s = document.createElement( 'link' );
    s.setAttribute( 'rel', 'stylesheet' );
    s.setAttribute( 'href', href );
    document.getElementById(id).appendChild( s );
}