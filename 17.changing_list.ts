// Step 1: Initial list of guests
const guest_list :string [] = ['Shatab','M.Anzal','saad','salman'];
console.log("Initial list of guests:", guest_list);

// Step 2: Print message that only two people can be invited
console.log("Sorry, we can only invite two people for dinner.");

// Step 3: Remove guests until only two names remain
while (guest_list.length > 2) { 
  const removeguests =guest_list.pop();
  if (removeguests) {
    console.log(`Sorry, ${removeguests}, we can't invite you to dinner.`);

  }
}


// Step 4: Print messages to remaining two guests
guest_list.forEach(guest_list => {
  console.log(`${guest_list}, you're still invited to dinner.`);
});

// Step 5: Remove last two names from the list
guest_list.pop();
guest_list.pop();


// Step 6: Print the final empty list
console.log("Final list of guests:", guest_list);