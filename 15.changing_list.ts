const guest_list :string [] = ['M.Anzal','Shatab','saad','salman'];

for(let i=0; i<guest_list.length; i++){
  console.log('Dear Mr. ' +guest_list [i] + ',\n\nit is our pleasure yo invite you in our privateDecrypt.\n\nThank You!')
}

let apsent_guest :string = 'saad';

let new_guest :string = 'farhan';

guest_list[2] = new_guest;

for(let i=0; i<guest_list.length; i++){
    console.log('Dear Mr. ' +guest_list [i] + ',\n\nit is our pleasure yo invite you in our privateDecrypt.\n\nThank You!')
  };