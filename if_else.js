//function for finding max and min in three numvers
function max(num1,num2,num3){
 if(num1>=num2&&num1>=num3)
    return num1;
 else if(num2>=num1&&num2>=num3)
    return num2;
 else
    return num3;
}
function min(num1,num2,num3){
    if(num1<=num2&&num1<=num3)
       return num1;
    else if(num2<=num1&&num2<=num3)
       return num2;
    else
       return num3;
}
console.log("Max number among 3 numbers is: "+max(1,2,-1));
console.log("Max number among 3 numbers is: "+min(1,2,-1));



//Check for Date method 
var date=new Date();
//setFullYear(year,month,day)
date.setFullYear(2020, 4, 3);
if(date.getMonth()>=2 && date.getMonth()<5){
    if(date.getMonth()==2 && date.getDate()>20){
        console.log("True");
    }
    else if(date.getMonth()==5 && date.getDate()<20){
        console.timeLog("True");
    }
    else if(date.getMonth()==3 || date.getMonth()==4 )
    {
        console.log("True");
    }
    else
        console.log("False");
}
else{
    console.log("False");
}



//Check for Leap Year
{
    function isLeap(year) {
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    }
    console.log("2020 year is leap year: "+isLeap(2020));
}
    

//Head-Tail
{
    function toss() {
        const TAIL = 0;
        const HEAD = 1;
        let rand = Math.floor(Math.random() * 10) % 2;
        switch (rand) {
            case TAIL:
                return "Tail"
            case HEAD:
                return "Head";
            default:
                return "Tie";
        }
    }
    console.log(toss());
} 



