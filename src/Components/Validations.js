export const emailValidation = (email) => {
    const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
    return regex.test(email)
}

export const passwordValidation = (password) => {

    const minLength = 8;
    const hasNumber = /(?=.*\d)/.test(password);
    const hasLowercase = /(?=.*[a-z])/.test(password);
    const hasUppercase = /(?=.*[A-Z])/.test(password);
    const hasSpecailCharacter = /(?=.*[@$!%*?&])/.test(password);

    switch (true) {
        case password.length < minLength:
            return 'Password must contain atleast 8 characters';
        case !hasNumber:
            return 'Password must contain atleast 1 Number';
        case !hasLowercase:
            return 'Password must contain atleast 1 lowercase character'
        case !hasUppercase:
            return 'Password must contain atleast 1 UPPERCASE character'
        case !hasSpecailCharacter:
            return 'Password must contain atleast ! Special  character'
        default:
            return '';
    }
}