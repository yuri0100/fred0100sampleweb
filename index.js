let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

console.log("saveEl")


function increment(){
    count += 1
    countEl.innerText = count
}

function save(){
    
    let passengerStr  = count  + " - "
        saveEl.innerHTML += passengerStr
        console.log(count)


}



