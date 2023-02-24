export function getValue(id){
    return document.getElementById(id).value;
}

export function setInner(id,content){
    document.getElementById(id).innerHTML = content;
}

export function addInner(id,content){
    document.getElementById(id).innerHTML += content;
}

export function show(id){
    document.getElementById(id).style.display = 'block';
}

export function hide(id){
    document.getElementById(id).style.display = 'none';
}
