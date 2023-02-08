export class Employee {
    constructor(firstName, lastName, monthlySalary, pensionPercentage, fundPercentage) {
        this.firstName = document.getElementById('first-name').value;
        this.lastName = document.getElementById('last-name').value;
        this.monthlySalary = document.getElementById('monthly-salary').value;
        this.pensionPercentage = document.getElementById('pension-percentage').value;
        this.fundPercentage = document.getElementById('fund-percentage').value;
    }
}