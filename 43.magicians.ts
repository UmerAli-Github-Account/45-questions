function make_great(magicians:string []): string [] {
  let great_magicians: string [] = [];
  for (let magician of magicians)
 {
   great_magicians.push("the great " + magician);

   
}

return great_magicians;

}

function show_magicians(magicians:string []): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}

let magician_names:string []=["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

let magician_names_copy: string []=[...magician_names];

let great_magicians:string[] = make_great(magician_names_copy);

console.log("Real magician:");

show_magicians(magician_names);

console.log("\nGreat Magician:");

show_magicians(great_magicians);