let inputTextArea = document.getElementById("input");
let resTextArea = document.getElementById("result");

let dict = {
    "S": 15,
    "I": 1,
    "F": 4,
    "L": 5,
    "T": 7,
    "U": 11,
    "P": 16,
    "E": 8,
    "M": 9,
    "V": 0,
    "A": 14,
    "D": 20,
    "W": 17,
    "X": 29
}

Object.keys(dict).forEach((key) => {
    console.log(key, " ", dict[key])
    
})


inputTextArea.addEventListener("input", (ev) => {
    let text = inputTextArea.value.toUpperCase();
    let resValue = ""
    for(let i = 0 ; i < text.length ; i++) {
        if(dict[text[i]] != null) {
            resValue += dict[text[i]]
        }
    }
    resTextArea.value = resValue
})
