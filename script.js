
for(let i = 1; i < 100; i++){
    console.log(i);
    if (i % 3){
        const multiploDi3 = `Fizz`;
        console.log(`Fizz`);
    }
    if (i % 5){
        const multiploDi5 = `Buzz`;
        console.log(`Buzz`);
    }
    if (i % 15){
        const multiploDiEntrambi = `FizzBuzz`;
        console.log(`FizzBuzz`);
    }
}
