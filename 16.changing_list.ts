const guest_list :string [] = ['Shatab','M.Anzal','saad'];

// for(let i=0; i<guest_list.length; i++){
//   console.log('Dear Mr. ' +guest_list [i] + ',\n\nit is our pleasure yo invite you in our privateDecrypt.\n\nThank You!')
// }

let apsent_guest :string = 'saad';

let new_guest :string = 'farhan';

guest_list[2] = new_guest;

for(let i=0; i<guest_list.length; i++){
    console.log('Dear Mr. ' +guest_list [i] + ',\n\nit is our pleasure yo invite you in our privateDecrypt.\n\nThank You!')
  };

  console.log(`Mr.${apsent_guest} is not comimg to the party.`);

  console.log('Good news! We find Big table so we are inviting 3 more guests.')


guest_list.unshift('Sir Zia Khan') ;

guest_list.splice(2, 0 , 'Lubna khan' );

guest_list.push('salman');


for(let i=0; i<guest_list.length; i++){
  console.log('Dear Mr. ' +guest_list [i] + ',\n\nit is our pleasure yo invite you in our privateDecrypt.\n\nThank You!')
};
