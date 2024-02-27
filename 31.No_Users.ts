let usernsmes :string []=['Admin', 'M.Anzal', 'Tawab', 'Farhan', 'Ayesha'];

if(usernsmes.length === 0){
    console.log("We need to find some users!");
} else {
    for (let username of usernsmes) {
        if (username === 'admin') {
            console.log("Hello Admin, kya aap status report dekhna pasand karenge?");
        } else {
            console.log(`Hello ${username}, dobara login karne ke liye shukriya.`);
        }
    }
}

usernsmes = [];

if (usernsmes.length === 0){
    console.log("We need to find some users!");
}