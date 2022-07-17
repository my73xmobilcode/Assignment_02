let numA = Number(prompt("Enter First number: "))
let numB = Number(prompt("Enter Second number: "))

if (numA > numB) {
    alert('First number is the highest: ' + numA)
    } else {
        if (numA === numB){
             window.alert('Both numbers are equal')
        } else {
            window.alert('Second number is the highest: ' + numB)
        }
    }