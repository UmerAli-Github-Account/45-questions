function make_sendwich(...items:string []): void {
  console.log("Sendwich Summary:");
  console.log("Bread");
  for (let item of items) {
    console.log(item);
    
  }
  console.log("Bread");
  console.log("Enjoy your Sendwich!");
  
}

make_sendwich("Cheese", "Tomato", "Lettuce");
make_sendwich("Chicken", "Mayonnaise");
make_sendwich("Ham", "Mustard", "Pickles", "Onion");
