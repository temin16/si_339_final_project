let form = document.querySelector("form"); 
let submit = form.querySelector('button[type="submit"]'); 

submit.addEventListener("click", function() {
    let input = form.querySelectorAll("input, textarea"); 
    let count = 0; 

    for (let i = 0; i < input.length; ++i) {
        if (input[i].value != "") {
            ++count; 
            if (count == input.length) {
                alert("Successfully submitted!");
            }
        }
        else {
            alert("Please fill out all categories!"); 
            break;
        }
    }

    for (let i = 0; i < input.length; ++i) {
        input[i].value = ""; 
    }
})
