let numValue = Number(prompt("Enter number between 1 and 100: "))

if (isNaN(numValue) != true){
    if ((numValue < 1) || (numValue > 100)) {
        alert('Numbers must be between 1 and 100')
    } else {
        if (numValue >= 60 && numValue <= 69) {
            console.log('You received a D')    
        } else {
            if (numValue >= 70 && numValue <= 79) {
                console.log('You received a C')    
            } else {
                if (numValue >= 80 && numValue <= 89) {
                    console.log('You received a B')    
                }   else {
                    if (numValue >= 90 && numValue <= 100) {
                        console.log('You received a A')    
                    } else {
                        if (numValue < 60) {
                            console.log('You received a F')    
                        }  
                    }
                }
            }   
        }
    }
} else {
    alert('Data entry is invalid')
}
