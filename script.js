function sort() {

    if (document.getElementById("np").value) {
        const np = document.getElementById("np").value
        console.log(np)
        const ns = Math.floor(Math.random() * np) 
        console.log(ns)
        document.getElementById('sorted').innerHTML = ns
    }
}

function resort() {
    const np = document.getElementById("np").value
    document.getElementById('sorted').innerHTML = Math.floor(Math.random() * np) 
}

const Modal = {
    
    open () {
        if (document.getElementById("np").value){
        document.querySelector('.modal-overlay').classList.add('active')
    }},
    close () {
        document.querySelector('.modal-overlay').classList.remove('active')
        document.getElementById("np").value = ''
    }
}

