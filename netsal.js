function calculateSalary() {
    const basicSalary = ("Enter Amount");
    const benefits = ("Enter Amount");
    const grossSalary = basicSalary + benefits;
  
    const kraRate = 0.3;
    const nhifRate = 0.05;
    const nssfRate = 0.06; 
  
    const taxableIncome = grossSalary - benefits;
    const payee = taxableIncome * kraRate;
    const nhifDeduction = grossSalary * nhifRate;
    const nssfDeduction = Math.min(grossSalary * nssfRate, 4175);
    const totalDeductions = payee + nhifDeduction + nssfDeduction;
    const netSalary = grossSalary - totalDeductions;
  
    console.log("Gross Salary", grossSalary);
    console.log("Payee (Tax)", payee);
    console.log("NHIF Deduction", nhifDeduction);
    console.log("NSSF Deduction", nssfDeduction);
    console.log("Total Deductions", totalDeductions);
    console.log("Net Salary", netSalary);
  }
  
  calculateSalary();
  