let string = "";

let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {

        if (e.target.innerHTML == '=') {
            // console.log(e.target)
            string = eval(string);
            string = string.toString();
            document.querySelector('input').value = string;
        }

        else if (e.target.innerHTML == '%') {
            // console.log(e.target)
            string = parseInt(string);
            string = string / 100;
            document.querySelector('input').value = string;
        }

        else if (e.target.innerHTML == 'AC') {
            // console.log(e.target)
            string = "";
            document.querySelector('input').value = string;
        }

        else if (e.target.innerHTML == 'x!') {
            // console.log(string)
            string = parseInt(string);
            let fact = 1;
            for (i = 1; i <= string; i++) {
                fact *= i;
            }
            // console.log(e.target.innerHTML)
            document.querySelector('input').value = fact;
        }

        else if (e.target.id == `back11`) {
            console.log(typeof string);
            string = string.substring(0,string.length-1);
            // console.log(input.value)
            document.querySelector('input').value = string;
        }

        else {
            // console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
        console.log(e.target.id);
    })
})
