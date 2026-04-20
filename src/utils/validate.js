export const checkValidData = (email, password) =>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    const isPasswordValid = passwordRegex.test(password);
    if(!isEmailValid) return "Email is not valid";
    if(isPasswordValid) return "Password is not valid"

    return null;
}