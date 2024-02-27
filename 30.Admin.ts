let Users :string [] =['Admin', 'M.Anzal', 'Tawab', 'Farhan', 'Ayesha'];

 for (let Username of Users){
    if (Username === 'Admin')
     {
         console.log("Hello Admin, would you like to see a status report?");
  }

 else{
         console.log(`Hello ${Username}, thank you for logging in again.`);
 }
}

