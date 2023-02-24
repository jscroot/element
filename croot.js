export function getValue(id){
    return document.getElementById(id).value;;
}

export function setInner(id,content){
    document.getElementById(id).innerHTML = content;
}

export function addInner(id,content){
    document.getElementById(id).innerHTML += content;
}

export function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }