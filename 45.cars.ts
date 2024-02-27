function store_car_info(manufacturer: string, model: string, options: { [key: string]: any }): { manufacturer: string, model: string, options: { [key: string]: any } } {
  let car_info = {
      manufacturer: manufacturer,
      model: model,
      options: options
      
  };
  return car_info;
}

let car = store_car_info("Toyota", "Corolla", {color: "Blue", sunroof: true});

console.log(car);
