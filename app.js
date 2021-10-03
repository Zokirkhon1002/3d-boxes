const box_c = document.getElementById("boxes"),
      btn = document.getElementById("btn");

btn.addEventListener("click", ()=> box_c.classList.toggle('big'))

function createboxes() {
    for (let i=0; i<4; i++){
        for(let j=0; j<4; j++){
            const box = document.createElement("div")
            box.classList.add('box')
            box.style.backgroundPosition = `${-j*125}px ${-i*125}px`;
            box_c.appendChild(box)
        }
    }
}

createboxes();