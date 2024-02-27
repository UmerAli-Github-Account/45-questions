let ordinal_nums :number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of ordinal_nums) {
    if (number === 1){
        console.log(`${number}st`);
    }
    else if (number === 2) {
        console.log(`${number}nd`);
    }
    else if (number === 3) {
        console.log(`${number}rd`);
    }
    else  if (number === 4) {
        console.log(`${number}th`);
    }
}