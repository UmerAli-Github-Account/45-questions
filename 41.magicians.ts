function show_magicians(magicians:string []): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}

let magician_names:string []=["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

show_magicians(magician_names);