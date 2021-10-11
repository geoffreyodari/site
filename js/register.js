


const registerPersonalInfo = ()=>{
    let inputFeilds = document.querySelectorAll("input");

    let invalidInputs = Array.from(inputFeilds).filter( input => input.value == "")
   if(invalidInputs.length==0) {
        const firstNameInput  =   document.querySelector("#firstNameInput");
        const lastNameInput  =  document.querySelector("#lastNameInput");
        const nationalIdInput =   document.querySelector("#nationalIdInput");
        const phoneInput  =    document.querySelector("#phoneInput");
        const emailInput = document.querySelector("#emailInput").value;
        const farmSize = document.querySelector("#farmSizeInput").value;
        const plantNumbers = document.querySelector("#plantNumbersInput").value;
        const cooperativeInput = document.querySelector("#cooperativeInput");
        const countyInput = document.querySelector("#countyInput");
        
        sessionStorage.setItem("firstName",firstNameInput.value)
        sessionStorage.setItem("lastName",lastNameInput.value);
        sessionStorage.setItem("nationalId",nationalIdInput.value);
        sessionStorage.setItem("phone",phoneInput.value);
        sessionStorage.setItem("email",emailInput.value);
        sessionStorage.setItem("county",countyInput.value);
        sessionStorage.setItem("cooperative",cooperativeInput.value);
        sessionStorage.setItem("farmSize",farmSize)
        sessionStorage.setItem("plantNumbers",plantNumbers)
         completeRegistration(); 
        }else{
            alert(`${invalidInputs.length} fields are empty`)
        }
    }
    

    ;  

const loadAppPage = data=>{
    //let inputFeilds = document.querySelectorAll("input");

    //let invalidInputs = Array.from(inputFeilds).filter( input => input.value == "")
   //if(invalidInputs.length==0) {
    window.location.href = "member_home.html";
    sessionStorage.clear()
    sessionStorage.setItem("phone",data)
    
    completeRegistration(); 
// }else{
//     alert(`${invalidInputs.length} fields are empty`)
// }
}

const completeRegistration = ()=>fetch("http://"+hostname+"/peaberry/create_user.php?payload="+JSON.stringify(sessionStorage))
.then(response=>response.json())
.then(data=>data.success==false?alert(data.message):loadAppPage(data.message))
.catch(err=>alert.log(err))

const login = ()=>loadAppPage(document.querySelector("#inputPhone").value)

