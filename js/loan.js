class CreditScore{
    constructor(data,prevPrice=50,limit=0.2){
        this.data = data;
        this.prevPrice = prevPrice;
        this.limit = limit
    }
     get title() {
         return    `<h1 class="h3 mb-2 text-dark-900">Loans</h1>
                     <p class="mb-4">We offer short term loans based on your credit score. The loan amount is 20% of the estimated value of your current year's coffee harvest </p>
                     <p class="mb-4">The estimated value of your current year's harvest multiplied by previous years price per Kg</p>`
         }
     loanAmount(){
         return this.data.map(data =>data.weight).reduce((a,b)=>a+b)*this.prevPrice*this.limit

     }

     estimatedEarnings(){
         return this.data.map(data =>data.weight).reduce((a,b)=>a+b)*this.prevPrice

     }
     
     get body(){
         return `
         <h1 class="h3 mb-2 text-dark-900">Loans</h1>
                     <p class="mb-4">We offer short term loans based on your credit score via M-pesa. The loan amount is 20% of the estimated value of your current year's coffee harvest </p>
                     <p class="mb-4">The estimated value of your current year's harvest multiplied by previous years price per Kg</p>
                     <hr>
         <div class="card p-4">
              
                 <table class="table table-bordered border-coffee table-sm">
                     
                     <tr><th class="text-white bg-coffee">Previous year's price</th><td class="text-dark-900 text-center"> Ksh. ${this.prevPrice}</td></tr>
                     <tr><th class="text-white bg-coffee">Current years harvest</th><td class="text-dark-900 text-center">${this.data.map(data =>data.weight).reduce((a,b)=>a+b)} Kgs.</td></tr>
                     <tr><th class="text-white bg-coffee">% Limit </th><td class="text-dark-900 text-center ">${this.limit*100}%</td></tr>
                     <tr><th class="text-white bg-coffee">Your Loan Limit</th><td class="text-bold text-dark-900 text-center">Ksh ${this.data.map(data =>data.weight).reduce((a,b)=>a+b)*this.prevPrice*this.limit}</td></tr>
               
                 </table>
                 
         </div>
         <hr>`

     }



     

}
                 
