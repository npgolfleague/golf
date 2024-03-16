
function Validation(values) {
    alert("")
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    const name_pattern = /^(?=.*[a-zA-Z])$/
    
    if(values.email === "") {
        error.email = "Email should not be empty"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Email invalid"
    } else { error.email = ""}

    if(values.password === "") {
        error.password = "Password should not be empty"
    }
    else if(!password_pattern.test(values.password)) {
        error.password = "Password invalid"
    } else { error.password = ""}

    if(values.name === "") {
        error.name = "Name should not be empty"
    }
    else if(!name_pattern.test(values.name)) {
        error.name = "Name invalid"
    } else { error.name = ""}

    return error;
}

export default Validation