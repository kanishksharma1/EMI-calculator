document.querySelector("button").addEventListener("click", () => {
    let amount = document.querySelector("#la").value

    let rate = document.querySelector("#it").value
    let newRate = rate/12/100
    
    let tenure = document.querySelector("#lt").value
    
    let emi = amount * newRate * (1+newRate)**tenure/(((1+newRate)**tenure)-1)
    
    let newEmi = Math.round(emi)
    
    document.querySelector("#le").innerHTML = "Loan EMI : " + newEmi
    
})










