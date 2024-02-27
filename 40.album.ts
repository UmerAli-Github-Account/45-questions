function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
  let album = { artist: artist, title: title, tracks: tracks };
  if (tracks !== undefined) {
      album.tracks = tracks;
  }
  return album;
}

let album1 = make_album("Arijit Singh", "Best of Arijit");
let album2 = make_album("Ed Sheeran", "Divide", 12);
let album3 = make_album("Ed Sheeran", "Divide", 12);

console.log(album1);
console.log(album2);
console.log(album3);

