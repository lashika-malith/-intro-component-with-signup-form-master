

function submitApp() {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    
    const input1 = document.getElementById("firstname").value;
    const input2 = document.getElementById("secoendname").value;
    const input3 = document.getElementById("email").value;
    const input4 = document.getElementById("password").value;

    const img1  = document.getElementById("first-img");
    const img2  = document.getElementById("sec-img");
    const img3  = document.getElementById("third-img");
    const img4  = document.getElementById("for-img");

    const warn1  = document.getElementById("first-warn");
    const warn2 = document.getElementById("sec-warn");
    const warn3 = document.getElementById("third-warn");
    const warn4 = document.getElementById("for-warn");

    const emailerr = document.getElementById("email");
    if (!input1) {
        event.preventDefault();
        img1.classList.remove('hidden')
        warn1.classList.remove('hidden1');
        document.getElementById("firstname").classList.add('warning')

    }

    if (!input2) {
        event.preventDefault();
        img2.classList.remove('hidden')
        warn2.classList.remove('hidden1');
        document.getElementById("secoendname").classList.add('warning')
        } 



                    
    if (!re.test(input3) || !input3) {
        event.preventDefault();
        emailerr.placeholder = "email@example/com";
        document.getElementById("email").value = '';
        img3.classList.remove('hidden');
        warn3.classList.remove('hidden1');
        document.getElementById("email").classList.add('warningemail')
        document.getElementById("email").classList.add('warning')
        }

    if (!input4) {
        event.preventDefault();
        img4.classList.remove('hidden')
        warn4.classList.remove('hidden1');
        document.getElementById("password").classList.add('warning')

        }
                        
}



