//UC1- Mark attendence of employee
const IS_ABSENT=0;
let empCheck=Math.floor(Math.random()*10)%2;
if(empCheck==IS_ABSENT)
{
    console.log("Employee is Absent");
    return;
}
else
{
    console.log("Employee is Present");
} 

//UC2-Calculate empwage according to emp's full time and part time job
{
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOUR=4;
const FULL_TIME_HOUR=8;
const WAGER_PER_HOUR=20;

function getEmpHrs(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            empHrs=PART_TIME_HOUR;
            break;
        case IS_FULL_TIME:
            empHrs=FULL_TIME_HOUR;
            break;
        default:
            empHrs=0;
    
    }
    return empHrs;
}


var empHrs=0;
empCheck=Math.floor(Math.random()*10)%3;
empHrs=getEmpHrs(empCheck);

let empWage=empHrs*WAGER_PER_HOUR;
console.log("Employee Wage is: "+ empWage);
}

