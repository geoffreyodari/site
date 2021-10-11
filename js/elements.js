class RegistrationForm  {
    constructor(data=0){
        this.data = data
    }
   get personalInfo (){
        return `<div class="container">

        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
                <!-- Nested Row within Card Body -->
                <div class="row">
                    <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                    <div class="col-lg-7">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                            </div>
                            <form class="user">
                                <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <input type="text" class="form-control" id="firstNameInput"
                                            placeholder="First Name">
                                    </div>
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <input type="text" class="form-control" id="lastNameInput"
                                            placeholder="Last Name">
                                    </div>
                                </div>
                                <div class="form-group">
                                    
                                        <input type="text" class="form-control" id="nationalIdInput"
                                        placeholder="National ID Number">
                                    
                                </div>
                                
                                <div class="form-group row">
                                <div class="col-sm-6 mb-3 mb-sm-0">
                                        <input type="text" class="form-control" id="phoneInput"
                                        placeholder="Phone 254XXXXXXXXX">
                                    </div>
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <input type="text" class="form-control" id="emailInput"
                                        placeholder="email you@domain.com">
                                    </div>
                                </div>
                                <hr>
                                <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <input type="number" class="form-control" id="farmSizeInput" placeholder="Acreage of land under Coffee">
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="number" class="form-control" id="plantNumbersInput"
                                                placeholder="Number of mature Coffee plants (over 3 years)">
                                    </div>
                                </div>
                                <hr>
                                <div class="form-group">
                                    
                                    <select class="form-control text-coffee"   id="countyInput" onclick="loadCoops()">
                                    <option>--County--</option>
                                    ${[...new Set(this.data.map(data=>data[0]))].map(data=>`<option value="${data}">${data}</option>`).join("")}
                                    
                                </select>
                                   
                                </div>
                                <div class="form-group ">
                                    
                                    <select class="form-control "   id="cooperativeInput">
                                        <option>--Select Coop--</option>
                                       
                                    </select>
                                </div>
                                <a  class="btn btn-coffee  btn-block" onclick="registerPersonalInfo()">
                                    Register
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>`                             
    }
    subCounty(data){

        return `${this.data.map(data=>`<option >${data}</data>`).join("")}`
    }

    cooperati(data){
        return `${this.data.map(data=>`<option >${data}</data>`).join("")}` 
    }
}




class Summary {
    constructor(data=[],prevPrice=50,limit=0.2) {

        this.data = data;
        this.prevPrice=prevPrice
        this.limit=limit
    }
  
    get details() {
      return `
      <h1 class="h3 mb-2 text-dark-900">Dashboard</h1>
                       
      <!-- Content Row -->
      <div class="row">
  
          <!-- Earnings (Monthly) Card Example -->
          <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-coffee shadow h-100 py-2">
                  <div class="card-body">
                      <div class="row no-gutters align-items-center">
                          <div class="col mr-2">
                              <div class="text-xs font-weight-bold text-coffee text-uppercase mb-1">
                                  Produce (Year to Date)</div>
                              <div class="h5 mb-0 font-weight-bold text-dark-900">(Kgs) ${this.data.length==0?0:this.data.map(data =>data.weight).reduce((a,b)=>a+b)}</div>
                          </div>
                          <div class="col-auto">
                              <i class="fas fa-weight fa-2x text-gray-300"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  
          <!-- Earnings (Monthly) Card Example -->
          <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-coffee shadow h-100 py-2">
                  <div class="card-body">
                      <div class="row no-gutters align-items-center">
                          <div class="col mr-2">
                              <div class="text-xs font-weight-bold text-coffee text-uppercase mb-1">
                                  Earnings (Year to Date)</div>
                              <div class="h5 mb-0 font-weight-bold text-dark-900">(Ksh) ${this.data.length==0?0:this.data.map(data =>data.weight).reduce((a,b)=>a+b)*this.prevPrice}*</div>
                          </div>
                          <div class="col-auto">
                              <i class="fas fa-piggy-bank fa-2x text-gray-300"></i>
                          </div>
                      </div>
                     
                  </div>
              </div>
              
          </div>
  
          <!-- Earnings (Monthly) Card Example -->
          <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-coffee shadow h-100 py-2">
                  <div class="card-body">
                      <div class="row no-gutters align-items-center">
                          <div class="col mr-2">
                              <div class="text-xs font-weight-bold text-coffee text-uppercase mb-1">Savings
                              </div>
                              <div class="row no-gutters align-items-center">
                                  <div class="col-auto">
                                      <div class="h5 mb-0 mr-3 font-weight-bold text-dark-900">(Ksh) 20,000</div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-auto">
                              <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  
          <!-- Pending Requests Card Example -->
          <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-coffee shadow h-100 py-2">
                  <div class="card-body">
                      <div class="row no-gutters align-items-center">
                          <div class="col mr-2">
                              <div class="text-xs font-weight-bold text-coffee text-uppercase mb-1">
                                  Loan Qualification</div>
                              <div class="h5 mb-0 font-weight-bold text-dark-900">(Ksh) ${this.data.length==0?0:this.data.map(data =>data.weight).reduce((a,b)=>a+b)*this.prevPrice*this.limit}</div>
                          </div>
                          <div class="col-auto">
                              <i class="fa fa-money fa-2x text-gray-300"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>`;
    }
  }
  


 
const renderPersonalForm  = data=>document.querySelector("#page").innerHTML = new RegistrationForm(data).personalInfo;

renderPersonalForm(countyCoop)





const loadCoops = ()=>{
 let  mycounty =  document.querySelector("#countyInput").value
    document.querySelector("#cooperativeInput").innerHTML = countyCoop.filter(data => data[0]==document.querySelector("#countyInput").value).map(data=>`<option value="${data[1]}">${data[1]}</option>`);
//console.log(document.querySelector("#countyInput"))
}