//Method to find Nth harmonic number
{
    function Harmonic(number){
        let harmonic=1;
        for(let i=2;i<=number;i++){
            harmonic=harmonic+ 1/number;
        }
        return harmonic;

    }
    console.log("nth Harmonic number is: "+Harmonic(5));
}

//Factorial
{
    function factorial(value){
        let number=value;
        let result=1;
        while(value!=0){
            result=result*value;
            value--;
        }
        console.log("Factorial of "+number+" is: "+result);
    }
   factorial(5);
}

//Powers of 2 
{
    function powerOfTwo(value){
        for(let i=0;i<=value;i++){
            if(Math.pow(2,i)>Math.pow(2,value)){
                break;
            }
            console.log(Math.pow(2,i));
        }
    }
    powerOfTwo(9);
}

//Prime or Not
{
    function primeCheck(value){
        let result=true;
        for(let i=2;i<value;i++){
            if(value%i==0)
            {
                result=false;
            }
            else{
                continue;
            }
        }
        return result;
    }
    console.log("7 is prime: "+primeCheck(7));
}

//Prime Factors
{
    function primeCheck(value){
        let result=true;
        for(let i=2;i<value;i++){
            if(value%i==0)
            {
                result=false;
            }
            else{
                continue;
            }
        }
        return result;
    }
    function primeFactors(value){
        let arr=[];
        for(let i=2;i<=value;i++){
            while(primeCheck(i) && value%i==0){
                arr.push(i);
                value/=i;
            }
        }
        return arr;
    }
    console.log("prime factor of 15 is: "+primeFactors(15));
}

//Addition
var value=process.argv;
function add(val1,val2){
    let c=parseInt(val1)+parseInt(val2);
    console.log("Addition is: "+c);
}
add(value[2],value[3]);

//Multiply
//const prompt=require("prompt-sync");
// let numinput=prompt("enter value");
// console.log("Multiply number is: "+numinput);