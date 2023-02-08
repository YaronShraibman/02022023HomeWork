// --Q1--
//

let saveButton = document.getElementById("save-button");

saveButton.addEventListener("click", () => {
    let data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value
    };
    localStorage.setItem("formData", JSON.stringify(data));
});

document.addEventListener("DOMContentLoaded", () => {
    let data = JSON.parse(localStorage.getItem("formData")) ;
    document.getElementById("name").value = data.name ;
    document.getElementById("email").value = data.email ;
    document.getElementById("password").value = data.password ;
    document.getElementById("phone").value = data.phone ;
    document.getElementById("address").value = data.address;
});



// --Q2--
//
//
// import {SalaryCalculator} from "./creator.js";
// import {Employee} from "./reader.js";
//
// let btn = document.getElementById('calculate-button');
// btn.addEventListener("click", ()=>{
//     let a = new Employee();
//     let b = new SalaryCalculator(a.firstName,a.lastName,a.monthlySalary,a.pensionPercentage,a.fundPercentage);
// });
//
