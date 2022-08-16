

document.getElementById("saveForm").addEventListener("click",function(e){

    e.preventDefault();

   
    var input = document.getElementById('zipcode').value;
    
    fetch(`https://api.postalpincode.in/postoffice/`+input)
    .then((apidata)=>{
      return apidata.json();
    })
    .then((data)=>{
      for(var x in data){
        for(var i = 0;i<data[x].PostOffice.length ; i++){
          document.write(`${data[x].PostOffice[i].Pincode} - ${data[x].PostOffice[i].Division} <br/>`)
        }
      
      }
      
    })
    .catch((error)=>{
      console.log(error)
    })
  
    

  
})