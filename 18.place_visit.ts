// Step 1: Define an array of places to visit
let placesvisits:string [] = ["Paris", "Tokyo", "Bora Bora", "New York", "Rome"];

// Step 2: Print array in original order
console.log("original order", placesvisits);

// Step 3: Print array in alphabetical order without modifying the original list
console.log("Alphabetical order:", [...placesvisits].sort());

// Step 4: Print array in original order to show it remains unchanged
console.log("orginal order after sorting:", placesvisits);

// Step 5: Print array in reverse alphabetical order without changing the original list
console.log("Reverse alphabetical order:", [...placesvisits].sort().reverse());

// Step 6: Print array in original order to show it remains unchanged
console.log("original order after reverse sorting", placesvisits);

// Step 7: Reverse the order of the list
placesvisits.reverse();
console.log("Reversed order:", placesvisits);

// Step 8: Reverse the order of the list again to get back to original order
placesvisits.reverse();
console.log("Original order after reversing again:", placesvisits);


// Step 9: Sort array in alphabetical order
placesvisits.sort();
console.log("Sorted in alphabetical order:", placesvisits);

// Step 10: Sort array in reverse alphabetical order
placesvisits.sort((a, b) =>b.localeCompare(a));
console.log("Sorted in  alphabetical order:", placesvisits);
