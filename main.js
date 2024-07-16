









function setGrid(){


    const size = document.querySelector(".section2");
    let h = size.clientHeight;
    let w = size.clientWidth;


    grid = prompt("enter desired grid size?")
    count_items = grid * grid;
    let tmp = h/grid
    let tmp1 =w/grid

    for(let i=0; i<count_items;i++){
        const item = document.createElement('div');
        item.style.height=tmp+'px'
        item.style.width=tmp+'px'
        item.classList.add('effect')
        size.appendChild(item)

    }
     
}

const b = document.querySelector(".grid-change") 
b.addEventListener("click",setGrid);
