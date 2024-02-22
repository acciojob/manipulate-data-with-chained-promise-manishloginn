//your JS code here. If required.
const outputInput = document.getElementById("output")

let array = [1, 2, 3, 4];

let p1 = new Promise((res, rej) => {
    let delay = 3000;
    let evenNumber =array.filter((itera) => itera % 2 == 0 )
    if (evenNumber) {
        setTimeout(() => {
            let multiply = evenNumber.map((e)=> e * 2 )
            console.log(multiply)
            setTimeout(() => {
                res (multiply)
            }, delay + 2000 )
        }, delay);
    } else {
        setTimeout(() => {
            rej ("not solved")
        })
    }
})

p1.then((data) => {
    setTimeout(() => {
        outputInput.innerText= data
    }, 1000)
    
}).catch((err)=> {
    console.log(err)
})