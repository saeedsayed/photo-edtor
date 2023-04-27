// selctor
let imge= document.getElementById("img");
let upload= document.getElementById("upload");
let download=document.getElementById("download");
let reset= document.getElementById("reset");
let imgBox= document.querySelector(".imge-box");
let canvas= document.getElementById("canvas");
let conText= canvas.getContext("2d");

let saturate= document.getElementById("saturate");
let contrast= document.getElementById("contrast");
let brightness= document.getElementById("brightness");
let sepia= document.getElementById("sepia");
let grayscale= document.getElementById("grayscale");
let blur= document.getElementById("blur");
let hueRrotate= document.getElementById("hue-rotate");

let filters= document.querySelectorAll("ul li input");

// events

window.onload= start;


upload.onchange= uploadPhoto;


filters.forEach(e=>{e.addEventListener("input",add)})

reset.onclick=resetadd

download.onclick=Download

// functions

function start(){
    download.style.display="none"
    reset.style.display="none"
    imgBox.style.display="none"
}

function uploadPhoto(){
    download.style.display="block"
    reset.style.display="block"
    imgBox.style.display="block"
    let file=new FileReader()
    file.readAsDataURL(upload.files[0])
    file.onload=_=>{
        imge.src=file.result
    }
    imge.onload=_=>{
        canvas.width=imge.width;
        canvas.height=imge.height;
        conText.drawImage(imge, 0, 0, canvas.width, canvas.height)
        imge.style.display="none"
    }
    resetadd()
}

function add(){
    conText.filter=`
    saturate(${saturate.value}%)
    contrast(${contrast.value}%)
    brightness(${brightness.value}%)
    sepia(${sepia.value}%)
    grayscale(${grayscale.value})
    blur(${blur.value}px)
    hue-rotate(${hueRrotate.value}deg)
`
conText.drawImage(imge, 0, 0, canvas.width, canvas.height)

}

function resetadd(){
    filters.forEach(e=>{
        e.value=e.getAttribute("value")
    })
    add()
}

function Download(){
    download.href= canvas.toDataURL("image/jpeg")
}