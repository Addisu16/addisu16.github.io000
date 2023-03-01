function compoundInterest(initialAmount,annualInterestRate,numberOfYearsToCompound){
    for(let i=0;i<annualInterestRate;i++){
        let totalAmount=initialAmount+i*numberOfYearsToCompound;
        return totalAmount;
    }
}
console.log("expect 110.47" +compoundInterest(100, 10, 1));
console.log("expect 16470.09" +compoundInterest(10000, 5, 10));