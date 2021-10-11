class CreateTable  {
    constructor(data){
        
        this.data = data
    }

    row(){
        return this.data.length==0?0:this.data.map(data=>`<tr><td>${data.date}</td><td>${data.grade}</td><td>${data.weight}</td></tr>`).join("")
    }

    get body(){
      return   `<h1 class="h3 mb-2 text-dark-900">My Produce</h1>
                        <p class="mb-4"> All your coffee harvest  delivered and weighed at the factory will appear here</div>      
                                <table class="table  text-xs " id="dataTable" width="100%" cellspacing="0">
                                    <thead class="bg-coffee text-white">
                                        <tr>
                                            <th>Date</th>
                                            
                                            <th>grade</th>
                                            <th>Kgs</th>
                                        </tr>
                                    </thead>
                                    <tfoot class="bg-coffee text-white">
                                        <tr>
                                         <th>Total</th>
                                         
                                         <th></th>
                                         <th>${this.data.length==0?0:this.data.map(data=>data.weight).reduce((a,b)=>a+b)}</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                      
                                      ${this.row()}
                                                                     
                                    </tbody>
                                </table>
                            </div>
             
              `
    }


    



}