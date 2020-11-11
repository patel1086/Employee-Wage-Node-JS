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
const NUM_OF_WORKING_DAYS=20;
const MAX_HRS_IN_MONTH=160;

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
var workingDays=0;
var totalEmpHrs=0;
var empwageArray=new Array();
function calEmpWage(empHrs){
    return empHrs*WAGER_PER_HOUR;
}
while(empHrs<MAX_HRS_IN_MONTH && workingDays<NUM_OF_WORKING_DAYS){
    workingDays++;
    let empCheck=Math.floor(Math.random()*10)%3;
    empHrs=getEmpHrs(empCheck);
    totalEmpHrs+=empHrs;
    empwageArray.push(calEmpWage(empHrs));
    }
totalEmpWage=calEmpWage(totalEmpHrs);
console.log("Total Employee Hours is: "+totalEmpHrs+" And total employee Wages is: "+ totalEmpWage);
console.log("Employee wage array is: "+empwageArray)
}

//calculate total wage using forEach
var totalEmpWage=0;
function sum(dailyWage){
    totalEmpWage+=dailyWage;
}
empwageArray.forEach(sum);
console.log("Total Working days: "+workingDays+" total EmpHrs: "+totalEmpHrs+" total EmpWages: "+totalEmpWage);


