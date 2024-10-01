const main: HTMLSelectElement  = document.querySelector(".main")!
const createFromLogin:HTMLSelectElement = document.querySelector(".createFromLogin")!


createFromLogin.addEventListener("click",LoadingRegistrationPage)


async function LoadingRegistrationPage():Promise<void> {
        try {  
            const response = await fetch("./register/register.html"); 
            console.log(response);
            const register = await response.text(); 
            main.innerHTML = register
        } catch (err) {
            console.log(err);           
        }
    }
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        

        
