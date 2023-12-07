export function container(id){
    return document.getElementById(id);
}

export function onClick(id,actionfunctionname){
    document.getElementById(id).onclick = actionfunctionname;
}

export function onChange(id,actionfunctionname){
    document.getElementById(id).onchange = function() {actionfunctionname()};
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
        radioButton.addEventListener("change", () => {
            if (radioButton.checked) {
            selectedValue = radioButton.value;
            }
        });
    });
    return selectedValue;
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

export function show(id){
    document.getElementById(id).style.display = 'block';
}

export function hide(id){
    document.getElementById(id).style.display = 'none';
}
