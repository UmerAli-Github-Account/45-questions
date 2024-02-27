// Passing Version (if block runs)
let alien_color :string = 'green';

if (alien_color && 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
else{
    console.log("Congratulations! You just earned 10 points.")
}
;

// Failing Version (else block runs)

alien_color = 'Red';

if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
else{
    console.log("Congratulations! You just earned 10 points.");
}
;