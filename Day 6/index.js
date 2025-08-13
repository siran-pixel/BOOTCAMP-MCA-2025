let ms = prompt("Enter the marital statusc(married/unmarried)");

if (ms.toLowerCase() === "married") {
    console.log("Eligible");
} 
else if (ms.toLowerCase() === "unmarried") {
    console.log("Enter the below details");

    let gender = prompt("Enter male or female");

    if (gender.toLowerCase() === "male") {
        let age = parseInt(prompt("Enter the age"));
        if (age >= 25) {
            console.log("Male eligible");
        } else {
            console.log("Invalid");
        }

    } 
    else if (gender.toLowerCase() === "female") {
        let age = parseInt(prompt("Enter the age"));
        if (age >= 35) {
            console.log("Female eligible");
        } else {
            console.log("Invalid");
        }

    } 
    else {
        console.log("Incorrect gender");
    }
} 
else {
    console.log("Invalid marital status");
}
