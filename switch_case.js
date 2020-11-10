//Week Days
{
    function getWeekDay(number) {
    switch (number) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Incorrect";
    }
   
    }
    var number=Math.floor(Math.random() * 6);
    console.log("Day is: "+getWeekDay(number));
}


//Given number , returns the number written in words

{
    function getNumberWrittenInWords(number) {
        switch (number) {
            case 0:
                return "Zero";
            case 1:
                return "One";
            case 2:
                return "Two";
            case 3:
                return "Three";
            case 4:
                return "Four";
            case 5:
                return "Five";
            case 6:
                return "Six";
            case 7:
                return "Seven";
            case 8:
                return "Eight";
            case 9:
                return "Nine";
            default:
                return "Incorrect";
        }
    }
    var number=Math.floor(Math.random() * 10);
    console.log(number+" will written in word like this: "+getNumberWrittenInWords(number));
}

//Unit conversion
{
    const FEET = 1;
    const INCH = 2;
    const METER = 3;
    function convertFeetInchUnits(value, type) {
        switch (type) {
            case FEET:
                return value * 12;
            case INCH:
                return value / 12;
        }
    }
    function convertFeetMeterUnits(value, type) {
        switch (type) {
            case FEET:
                return value * 0.3048;
            case METER:
                return value* 3.28084;
        }
    }
    console.log("1 feet="+convertFeetInchUnits(1,FEET)+" inches");
    console.log("12 inch="+convertFeetInchUnits(12,INCH)+" feet");
    console.log("1 feet="+convertFeetMeterUnits(1,FEET)+" meter");
    console.log("1 meter="+convertFeetMeterUnits(1,METER)+" feet");
}




