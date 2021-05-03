
const readline = require('readline').createInterface({
    input : process.stdin,
    output: process.stdout

});
readline.question('Ingrese un número: ',(option) =>{

    readline.close();
    function Fibonacci(num_opt) {
        let list_fib=[0,1];
        num_opt=num_opt+1
        for (let i = 2; i < num_opt; i++) {
            list_fib[i] = list_fib[i - 2] + list_fib[i - 1];
        }
        n=option
        console.log('F('+ option + ')='+list_fib[n]);
        return " ";
        }
        console.log(Fibonacci(option));
} );

