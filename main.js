









function setGrid(){
    let arr = document.querySelectorAll(".effect")
    let arr1 = Array.from(arr)


    const size = document.querySelector(".section2");
    let h = size.clientHeight;
    let w = size.clientWidth;

    for(let z=0;z<arr1.length;z++){
        size.removeChild(arr1[z])
    }
    


    grid = prompt("enter desired grid size?")
    count_items = grid * grid;
    let tmp = h/grid
    let tmp1 =w/grid

    for(let i=0; i<count_items;i++){
        const item = document.createElement('div');
        item.style.height=tmp+'px'
        item.style.width=tmp+'px'
        item.classList.add('effect')
        item.addEventListener("mouseenter", function() {
            this.style.backgroundColor="black"
        })
        size.appendChild(item)

    }
     
}

function c(){
    let arr = document.querySelectorAll(".effect")
    let arr1 = Array.from(arr)
    for(let h=0;h<arr1.length;h++){
        arr1[h].style.backgroundColor="white"
}
}

const b = document.querySelector(".grid-change") 
b.addEventListener("click",setGrid);

const clear = document.querySelector(".clear")
clear.addEventListener("click",c)
