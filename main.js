var userName = ["admin", "Ali", "Waseem", "nadim", "Adnan"];
userName.forEach(function (userName) {
    if (userName === "admin") {
        console.log("Hello", userName, "would you like to see a status reports?");
    }
    else {
        console.log("Hello", userName, "thank you for logging in again.");
    }
});
