// checking usernames : Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// Make a list of five or mor usernames called current_users

// Make another list of five usernames caleed new_users. Make sure one or more two of the new usernames are also in the current_users list 

// Loop through the new_users list to see if each new username has already been used. if ithas print a message that the person will need to enter a new username. if a username has not been used, print a message saying that the username is available.

// Make sure your comparison is case insensitive. if "john" has been used, "john" should not be accepted.

let current_users : string[] = ["FiZa","SHiza","rOha","Nida","John"];

let new_users : string[] = ["Reshma","FiZa","Nilam","Juli","Nida"];

new_users.forEach(newUsername => {
    let lowerCase : string = newUsername.toLocaleLowerCase();

    if (current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)) {
        console.log(`The username ${newUsername} is not available. Please write a different username `);
    }
    else {
        console.log(`The username ${newUsername} is available. `)

    }

})        
