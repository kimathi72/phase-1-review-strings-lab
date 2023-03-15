// Write your code in this file!
//variable currentuser declared using const and assign a string as value
const currentUser = 'Grace Hopper';
console.log(currentUser);

//variable welcomeMessage declared using const and assign a string as value
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
console.log(welcomeMessage);
//variable excitedWelcomeMessage declared using const and assigned string.toUppercaseCase method
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
console.log(excitedWelcomeMessage);
//variable shortGreeting declared using const and assing a string as value containing only initials of the currentUser's name;
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
console.log(shortGreeting);
