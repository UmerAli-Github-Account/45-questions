function make_great(magician:string []): void {
  for (let i = 0; i < magician.length; i++) {
    magician[i] = "the great " +  magician[i];
  }
}

function show_magicians(magicians:string []): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}

let magician_names:string []=["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

make_great(magician_names);

show_magicians(magician_names);