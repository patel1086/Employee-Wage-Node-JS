class EmployeePayrollData {
    constructor(...params){
        this.id=params[0];
        this.name=params[1];
        this.salary=params[2];
        this.gender=params[3];
        this.startDate=params[4];
        this.email=params[5];
        this.zip=params[6];
    }

    get id(){
        return this._id;
    }
    set id(id){
        if(id>0)
            this._id=id;
        else throw 'InValid ID';
    }
    get name(){
        return this._name;
    }
    set name(name){
        let regName=RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(regName.test(name))
            this._name=name;
        else throw 'Incorrect Name';
    }
    get salary(){
        return this._salary;
    }
    set salary(salary){
        if(salary>0)
            this._salary=salary;
    }
    get gender(){
        return this._gender;
    }
    set gender(gender){
        if(gender=='M' || gender=='F')
            this._gender=gender;
        else throw 'Invalid Gender'
    }
    get startDate(){
        return this._startDate;
    }
    set startDate(startDate){
        if(startDate<new Date())
            this._startDate=startDate;
        else throw 'InValid startDate'
    }
    get email(){
       return  this._email;
    }
    set email(email){
        let regEmail=RegExp('^[a-zA-Z]+([._+-]{0,1}[a-zA-Z0-9]+)*@[a-zA-Z0-9]+.[(com)|(co)|(net)]+(?:\\.[a-z]{2,}){0,1}$');
        if(regEmail.test(email)){
            this._email=email;
        }
        else throw 'InValid Email';
    }
    get zip(){
        return this._zip;
    }
    set zip(zip){
        let regZip=RegExp('^\\d{3}(\\s{0,1}\\d{3})$');
        if(regZip.test(zip)){
            this._zip=zip;
        }
        else throw 'Invalid Zip';
    }

    toString() {
        const options={year: 'numeric', month: 'numeric', day:'numeric'};
        const empDate= this.startDate===undefined?"undefined":this.startDate.toLocaleDateString("en-US",options);
        return '\nID: ' + this.id + ' name: ' + this.name + ' salary: ' + this.salary+ ' gender: '+ this.gender+' startDate: '+ empDate+ ' email: '+this.email+' pincode: '+this.zip;   
    }
}
try{
    let employeePayrollData= new EmployeePayrollData(1,"Jite",47000,'M',new Date('2020-09-13'),'jitendra@gmail.com',342014);
    let employeePayrollData1= new EmployeePayrollData(2,"Ramnarayan",47000,'M',new Date('2020-09-13'),'ram@gmail.com',342014);
    console.log(employeePayrollData.toString());
    console.log(employeePayrollData1.toString());
}
catch(e){
    console.error(e);
}