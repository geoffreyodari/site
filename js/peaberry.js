
class UserInfo {
    constructor(data) {
      this.data = data.relatedCustomerAccount;
    }
  
    get profile() {
      return `<li class="nav-item dropdown no-arrow">
                      <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <span class="mr-2 d-none d-lg-inline text-gray-600 small">${this.data[0].desc} ${this.data[1].desc}</span>
                          <img class="img-profile rounded-circle"
                              src="img/undraw_profile.svg">
                      </a>
                      <!-- Dropdown - User Information -->
                      <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                          aria-labelledby="userDropdown">
                          <a class="dropdown-item" onclick="displayUserDetails()">
                              <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                              Profile
                          </a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item"  data-toggle="modal" data-target="#logoutModal">
                              <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                              Logout
                          </a>
                      </div>
                   </li>`;
    }
  
    get details() {
      return ` <!-- Default Card Example -->
          <div class="card mb-4">
            <div class="card-header">${this.data[0].desc} ${
        this.data[1].desc
      }</div>
            <div class="card-body">
              <div class="row">
                <div class="col-4 border-left-success">
                  Phone No. ${this.data[2].desc}
                </div>
                <div class="col-4 border-left-success">Member No. ${
                  this.data[2].desc
                }</div>
                <div class="col-4 border-left-success">Status. ${
                  this.data[3].desc == "TRUE" ? "Active" : "Inactive"
                }</div>
              </div>
            </div>
          </div>
        </div>`;
    }
  }
  
class Summary {
    constructor(data = 0) {
      this.data = data;
    }
  
    get details() {
      return `<!-- Content Row -->
      <div class="row">
  
          <!-- Earnings (Monthly) Card Example -->
          <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                  <div class="card-body">
                      <div class="row no-gutters align-items-center">
                          <div class="col mr-2">
                              <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                  Collections (Year to Date)</div>
                              <div class="h5 mb-0 font-weight-bold text-gray-800">(Kgs) 100</div>
                          </div>
                          <div class="col-auto">
                              <i class="fas fa-calendar fa-2x text-gray-300"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  
          <!-- Earnings (Monthly) Card Example -->
          <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-success shadow h-100 py-2">
                  <div class="card-body">
                      <div class="row no-gutters align-items-center">
                          <div class="col mr-2">
                              <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                  Earnings (Year to Date)</div>
                              <div class="h5 mb-0 font-weight-bold text-gray-800">(Kes) 45,000</div>
                          </div>
                          <div class="col-auto">
                              <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  
          <!-- Earnings (Monthly) Card Example -->
          <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-info shadow h-100 py-2">
                  <div class="card-body">
                      <div class="row no-gutters align-items-center">
                          <div class="col mr-2">
                              <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Savings
                              </div>
                              <div class="row no-gutters align-items-center">
                                  <div class="col-auto">
                                      <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">(Kes) 20,000</div>
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
              <div class="card border-left-warning shadow h-100 py-2">
                  <div class="card-body">
                      <div class="row no-gutters align-items-center">
                          <div class="col mr-2">
                              <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                  Loans</div>
                              <div class="h5 mb-0 font-weight-bold text-gray-800">(Kes) 1,000</div>
                          </div>
                          <div class="col-auto">
                              <i class="fas fa-comments fa-2x text-gray-300"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>`;
    }
  }
  
const user = {"id":"5250020200130163557","desc":"Record found","status":"1000","relatedCustomerAccount":[{"name":"FIRSTNAME","desc":"Mkulima"},{"name":"LASTNAME","desc":"Mdogo"},{"name":"PHONENUMBER","desc":"1234567890"},{"name":"IS_ACTIVE","desc":"TRUE"}]}

const renderSummary = () =>document.querySelector("#main-content").innerHTML = new Summary().details;

const renderUserInfo = (data) =>document.querySelector("#topbar").innerHTML = new UserInfo(data).profile;

const login =()=>{
    // fetch("http://192.168.8.154/data/5250020200130163557.php").then((data) => data.json()).then((data) => {
    //   window.localStorage.setItem("user",JSON.stringify(data));
    //   renderUserInfo(JSON.parse(window.localStorage.getItem("user")));
    //   renderSummary();
    //       })
    // .catch((err) => alert(err));
    renderUserInfo(JSON.parse(user));
    renderSummary();
}

//const displayUserDetails = () =>document.querySelector("#main-content").innerHTML = new UserInfo(JSON.parse(window.localStorage.getItem("user"))).details;
const displayUserDetails = () =>document.querySelector("#main-content").innerHTML = new UserInfo(JSON.parse(user)).details

//window.localStorage.getItem("user")==!null?renderUserInfo(JSON.parse(window.localStorage.getItem("user"))):login();

login()