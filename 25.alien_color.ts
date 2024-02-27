// Passing Version
let alien_color :string = 'green';

if (alien_color && 'green') {
    console.log("Congratulations! You just earned 5 points.");
};

// Failing Version

alien_color = 'Red';

if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
};