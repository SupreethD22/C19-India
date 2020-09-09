$(document).ready(function(){
    //get json data

    $.getJSON("https://api.covid19india.org/states_daily.json",function(data){

    // console.log(data);
    var last = (data.states_daily.length) - 1;
    // console.log(last);

    
    var ap = [],len;
    var trhtml1 = '';

    $.each(data.states_daily,function(id,obj){
      ap.push(obj.ap);


      trhtml1 += '<tr>';
      trhtml1 += '<td>' + obj.ap[len] + '</td>';
      trhtml1 += '<tr>';

    });

    // console.log(trhtml1);
    len = ap.length-1;
    // console.log(len);
    console.log(ap[len]);

    
    // var ka = console.log("confirmed"+data.states_daily[last - 2].ka);
    // console.log("confirmed"+data.states_daily[last].ka);
});

});

  
        
// const xhr1 = new XMLHttpRequest();

// xhr1.open('GET','https://api.covid19india.org/states_daily.json',true);

// xhr1.onload = function()
// {
//     if(this.status === 200)
//     {
//       var states = [];
//       var res = [];
//         const covid1 = JSON.parse(this.responseText);
//         console.log(covid1);
       

        

        
//         var last = (covid1.states_daily.length) - 1;
// 		console.log(covid1.states_daily[last - 2].ka);
// 		console.log(covid1.states_daily[last].ka);
      

//       console.log(last);

//       for(var i=0;i<=(covid1.states_daily.length)-1;i++)
//       {
        
//       }
       

       

    
//     }
// }

// xhr1.send();
    




