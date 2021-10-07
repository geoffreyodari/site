
class UserInfo {
    constructor(data) {
      this.data = data;
    }
  
    get profile() {
      return `<li class="nav-item dropdown no-arrow">
                    <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="mr-2 d-none d-lg-inline text-gray-600 small">${this.data.firstname} ${this.data.lastname}</span>
                        <i class="fa fa-user fa-2x text-coffee"></i>
                    </a>
                    <!-- Dropdown - User Information -->
                      <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                          aria-labelledby="userDropdown">
                          <a class="dropdown-item" onclick="displayUserDetails()">
                              <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                              My Profile
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
      return ` 
      <!-- Default Card Example -->
        <div class="card mb-4">
            <div class="card-header">${this.data.firstname} ${this.data.lastname}</div>
            <div class="card-body">
              <div class="row">
                <div class="col col-sm-6 border-left-coffee">
                  Phone No. ${this.data.phone}
                </div>
                <div class="col col-sm-6 border-left-coffee">
                Email. ${this.data.email}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card shadow mb-4">    
          <div class="card-body">
                <div class="row">
                    <div class="col col-sm-4 border-left-coffee text-capitalize">
                                  Cooperative. ${this.data.cooperative.toLowerCase()}
                              </div>
                        <div class="col col-sm-4 border-left-coffee">
                                Member No. ${this.data.id}
                          </div>
                        <div class="col col-sm-4 border-left-coffee">
                                Status. Active
                          </div>
                      </div>
                </div>
          </div>
          <div class="card shadow mb-4">  
          <div class="card-body">
                <div class="row">
                    <div class="col col-sm-4 border-left-coffee text-capitalize">
                                  Farm Location. ${this.data.subcounty}
                              </div>
                        <div class="col col-sm-4 border-left-coffee">
                                Size. ${this.data.acres} Acres
                          </div>
                        <div class="col col-sm-4 border-left-coffee">
                                No of Mature Crops. ${this.data.cropnumbers}
                          </div>
                      </div>
                </div>
          </div>
        </div>
        <div class="card shadow mb-4">  
          <div class="card-body">
                <div class="row">
                    <div class="col col-sm-4 border-left-coffee text-capitalize">
                                  GPS coordinates. ${this.data.location}
                              </div>
                      </div>
                </div>
          </div>
        </div>
        
        
        `;
    }
  }


class DateConverter{
   constructor(data){
    
    this.data = data
    this.months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
    this.day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
   }

   myDate(sqlDate){
    //sqlDate in SQL DATETIME format ("yyyy-mm-dd hh:mm:ss.ms")
    let sqlDateArr1 = sqlDate.split("-");
    //format of sqlDateArr1[] = ['yyyy','mm','dd hh:mm:ms']
    let sYear = sqlDateArr1[0];
    let sMonth = (Number(sqlDateArr1[1]) - 1).toString();
    let sqlDateArr2 = sqlDateArr1[2].split(" ");
    //format of sqlDateArr2[] = ['dd', 'hh:mm:ss.ms']
    let sDay = sqlDateArr2[0];
    let sqlDateArr3 = sqlDateArr2[1].split(":");
    //format of sqlDateArr3[] = ['hh','mm','ss.ms']
    let sHour = sqlDateArr3[0];
    let sMinute = sqlDateArr3[1];
    let sqlDateArr4 = sqlDateArr3[2].split(".");
    //format of sqlDateArr4[] = ['ss','ms']
    let sSecond = sqlDateArr4[0];
    
     
    return new Date(sYear,sMonth,sDay,sHour,sMinute,sSecond);
    }

    time(data){
      let hh = data.getHours()<10?`0${data.getHours()}`:data.getHours()
      let mm = data.getMinutes()<10?`0${data.getMinutes()}`:data.getMinutes()


      return `${hh}:${mm}`
    }

}

class CalendarInfo extends DateConverter {
  constructor(data){
    super(data)
    this.data = data
    
  }



  row(data){

    return `
            <!--calendar-->
                  <div class="row row-striped text-xs  border-left-coffee mb-1">
                    <div class="col-2 text-center p-0">
                      <h4 class="display-5"><span class="badge badge-coffee-light">${this.myDate(data.start).getDate()<10?`0${this.myDate(data.start).getDate()}`:this.myDate(data.start).getDate()}</span></h4>
                      <h6 class=" text-capitalize text-coffee font-weight-bold m-0">${this.months[this.myDate(data.start).getMonth()]}</h6>
                    </div>
                    <div class="col-10 p-0 m-0 text-gray-900">
                      <h6 class=" text-capitalize font font-weight-bold p-0 m-0">${data.Subject}</h6>
                      <ul class="list-inline p-0 m-0">
                        <li class="list-inline-item p-0"><i class="fa fa-calendar-o" aria-hidden="true"></i> ${this.day[this.myDate(data.start).getDay()]}</li>
                        <li class="list-inline-item p-0"><i class="fa fa-clock-o" aria-hidden="true"></i> ${this.time(new Date(data.start))} - ${this.time(new Date(data.end))}</li>
                        <li class="list-inline-item p-0"><i class="fa fa-location-arrow" aria-hidden="true"></i> ${data.venue}</li>
                      </ul>
                      <p >${data.details}.</p>
                    </div>
                  </div>
              <hr></hr>`

  }

  get render(){
    return `<h1 class="h3 mb-2 text-dark-900">Upcoming Events</h1><hr mb-4">${this.data.map(data=>this.row(data)).join("")}`;
  }
                  

}

const RenderLoanPage = data=>document.querySelector("#main-content").innerHTML=new CreditScore(data).body
const renderSummary = (data) =>document.querySelector("#main-content").innerHTML = new Summary(data).details; 
const displayCalendar =data=> document.querySelector("#main-content").innerHTML = new CalendarInfo(data).render
const displayUserDetails = () =>document.querySelector("#main-content").innerHTML = new UserInfo(JSON.parse(sessionStorage.getItem("user"))).details
const renderUser = data =>document.querySelector("#topbar").innerHTML = new UserInfo(data).profile;
const renderTable = data=> document.querySelector("#main-content").innerHTML=new CreateTable(data).body
const aICamera =()=> document.querySelector("#main-content").innerHTML=`
<h1 class="h3 mb-2 text-dark-900">Coffee Image Processing</h1>
<p class="mb-4">A premium app that allow you to sort and grade your coffee berries by analyzing the photos of your coffee produce through machine learning </p>
                     
<figure class="figure">
<img src="img/beans.jpg" class="figure-img img-fluid rounded" alt="...">
<figcaption class="AI image processing.</figcaption>
</figure>`

const loadUserProfile = phone=>{
  fetch("http://"+hostname+"/peaberry/get_user.php?phone="+phone)
  .then(response=>response.json())
  .then(data=>{
    renderUser(data)
    console.log(data)
    sessionStorage.setItem("user",JSON.stringify(data))
  })
  

}

const loadCalendar = ()=>{

  fetch("http://"+hostname+"/peaberry/get_calendar.php")
  .then(response=>response.json())
  .then(data=>{
    console.log(data)
    displayCalendar(data)
    
    
  })
  .catch(err=>console.log(err))
}

const loadCounty =()=>fetch("http://"+hostname+"/peaberry/get_county.php")
.then(response=>response.json())
.then(data=>{
  console.log(data)
})
.catch(err=>console.log(err))



const loadUserCollections = ()=>{
  fetch("http://"+hostname+"/peaberry/collections.php?phone="+sessionStorage.getItem("phone"))
  .then(response=>response.json())
  .then(data=>{
    console.log(data)
    renderTable(data)
  })
  .catch(err=>console.log(err))
  

}

const loan= ()=>{
  fetch("http://"+hostname+"/peaberry/collections.php?phone="+sessionStorage.getItem("phone"))
  .then(response=>response.json())
  .then(data=>RenderLoanPage(data))
  .catch(err=>console.log(err))
  

}

const summary= ()=>{
  fetch("http://"+hostname+"/peaberry/collections.php?phone="+sessionStorage.getItem("phone"))
  .then(response=>response.json())
  .then(data=>renderSummary(data))
  .catch(err=>console.log(err))
  

}



loadUserProfile(parseInt(sessionStorage.getItem("phone")))


