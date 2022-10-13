function isValidName(name) {
    //check if name does not only include letters
    const regex = /[a-zA-Z]/;
    return name !== '' && !name.split('').filter(char => !char.match(regex)).length;
}

function isValidPhoneNum(num) {
    //check if tel input only includes numbers
    return num !== '' && num !== ' ' && !num.split('').filter(char => isNaN(char)).length;
}

function passwordsMatch(passwords) {
    return passwords[0].value === passwords[1].value;
}

function isValidInput(event) {
    //setFormElements();
    const fields = [...document.querySelectorAll('input')];
    const passwords = fields.filter(field => field.type === 'password');

    passwords[0].classList.remove('invalid-pw');
    passwords[1].classList.remove('invalid-pw');

    while(fields.length > 0) {
        const field = fields[0];
        let errorText = '';
        
        switch(field.type) {
            case 'text':
                if(!isValidName(field.value)) errorText = 'Please enter a valid name.';
                break;
            case 'tel':
                if(!isValidPhoneNum(field.value)) errorText = 'Phone number must only include numbers.';
                break;
            
            case 'password':
                
                if(!passwordsMatch(passwords)) {
                    errorText = 'Passwords do not match.';
                    passwords[0].classList.add('invalid-pw');
                    passwords[1].classList.add('invalid-pw');
                }
                break;
            default:
                break;
        }
        field.setCustomValidity(errorText);
        fields.shift();
    }
}
document.querySelector('button').addEventListener('click', isValidInput);