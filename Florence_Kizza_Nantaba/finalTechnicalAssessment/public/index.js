const Validate = () => {

    //input variables
    let firstname = document.getElementById('firstname');
    let dob = document.getElementById('dob');
    let lastname = document.getElementById('lastname');
    let gender = document.getElementById('gender');
    let country = document.getElementById('country');
    let town = document.getElementById('town');
    let state = document.getElementById('state');
    let zipcode = document.getElementById('zipcode');
    let phonenumber1 = document.getElementById('phonenumber1');
    let phonenumber2 = document.getElementById('phonenumber2');
    let email = document.getElementById('email');


    
    const nameRegex = /^[a-zA-Z]+$/;
    // validating Surname
    if (firstname.value=='' || firstname.value.length > 255 || firstname.value.length < 2 || !firstname.value.match(nameRegex)){
        firstname.style.border= '3px solid red';
        return false
    } 
    else{
        firstname.style.border= '3px solid green'; 
    }

    if (lastname.value=='' || lastname.value.length > 255 || lastname.value.length < 2 || !lastname.value.match(nameRegex)){
        lastname.style.border= '3px solid red';
        return false
    } 
    else{
        lastname.style.border= '3px solid green'; 
    }

    // let today = new Date();
    // let dateofBirth = new Date(dob.value)
    // let age = today.getFullYear()-dateofBirth.getFullYear(),
    // let  = age
    
    if(dob<18 || dob>150){
        dob.style.border= '3px solid red';
        return false}
    
    
        if (state.value=='' || state.value.length > 255 || state.value.length < 2){
            state.style.border= '3px solid red';
            return false
        } 
        else{
            state.style.border= '3px solid green'; 
        }

        if (town.value=='' || town.value.length > 255 || town.value.length < 2 || !town.value.match(nameRegex)){
            town.style.border= '3px solid red';
            return false
        } 
        else{
            town.style.border= '3px solid green'; 
        }








    // validating given name
    if (givenName.value=='' || givenName.value.length > 16 || !givenName.value.match(nameRegex)){
        givenName.style.border= '1px solid red';
        return false
    } 
    
   

    // validating gender
    if (!(male.selected || female.selected)){
        gender.style.border= '3px solid red';
        
        return false
    } 
    else{
        gender.style.border= '3px solid green'; 
    }

    if (phonenumber1.value==''){
        phonenumber1.style.border= '3px solid red';
        return false
    } 
    else{
        phonenumber1.style.border= '3px solid green'; 
    }

    if (phonenumber2.value==''){
        phonenumber2.style.border= '3px solid red';
        return false
    } 
    else{
        phonenumber2.style.border= '3px solid green'; 
    }


    if (email.value==''){
        email.style.border= '3px solid red';
        return false
    } 
    else{
        email.style.border= '3px solid green'; 
    }

    if (zipcode.value==''){
        zipcode.style.border= '3px solid red';
        return false
    } 
    else{
        zipcode.style.border= '3px solid green'; 
    }
}