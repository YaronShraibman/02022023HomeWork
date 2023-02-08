export class SalaryCalculator {
    constructor(firstName, lastName, monthlySalary, pensionPercentage,fundPercentage) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.monthlySalary = monthlySalary;
        this.pensionPercentage = pensionPercentage;
        this.fundPercentage = fundPercentage;
        this.getNetSalary();
    }

    getPension() {
        return (this.monthlySalary * this.pensionPercentage) / 100;
    }
    getFund() {
        return (this.monthlySalary * this.fundPercentage) / 100;
    }
    getNetSalary() {
        let displayDiv = document.getElementById('result');
        displayDiv.innerText=  `Full Name: ${this.firstName+' '+this.lastName} 
        NetSalary(after reduce pension and fund): ${this.monthlySalary - this.getPension() - this.getFund()}`;
        document.body.appendChild(displayDiv);
    }
}

