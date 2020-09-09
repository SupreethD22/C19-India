// const xml5 = new XMLHttpRequest();

// xml5.open('GET','https://api.covidindiatracker.com/state_data.json',true);

// xml5.onload = function()
// {
//     if(this.status === 200)
//     {
//         var eachdist  =  JSON.parse(this.responseText)
//         console.log(eachdist[0]);
//         console.log(eachdist[0].districtData[0].id);
//         var mht = '';
        
//         for(var i=0 ;i<=eachdist.length;i++)
//         {
//             // mht += "<p>" +eachdist[i].state + "</p>";
//             mht += "<tr>";
//             mht += "<td>" +eachdist[0].districtData[i].id + "</td>";
//             mht += "<td>" +eachdist[0].districtData[i].active + "</td>";
//             mht += "<td>" +eachdist[0].districtData[i].confirmed + "</td>";
//             mht += "<td>" +eachdist[0].districtData[i].recovered + "</td>";
//             mht += "<td>" +eachdist[0].districtData[i].deaths + "</td>";

//             mht += "</tr>"
            
//            document.getElementById('records_table').innerHTML = mht;
           

//         }
     
       
       
       
//     }
// }



// xml5.send();

// // function htmlsend(data)
// // {
// //     var htmlstring = "";
// //     for(var i=0;i<data.length;i++)
// //     {
// //         htmlstring += "<p>" + data[0].districtData[0].name + "</p>"
// //     }

// //     // document.getElementById('statedata').innerHTML = htmlstring;
// //     console.log(htmlstring);
// // }




const xml5 = new XMLHttpRequest();

xml5.open('GET','https://api.covid19india.org/v2/state_district_wise.json',true);

xml5.onload = function()
{
    if(this.status === 200)
    {
        var eachdist  =  JSON.parse(this.responseText)
        console.log(eachdist);
        var ap = '';
        for(i=0;i<=eachdist.length;i++)
        {

            district = eachdist[2].districtData[i].district;
            active = eachdist[2].districtData[i].active;
            conf = eachdist[2].districtData[i].delta.confirmed;

            ap += "<tr>";
            ap += "<td>" +eachdist[2].districtData[i].district + "</td>";
            ap += "<td>"
                    + "<a>"+eachdist[2].districtData[i].active+"</a>" + "<br>"
                    + "<a>"+eachdist[2].districtData[i].delta.confirmed+"</a>" +
                  "</td>";
           
            ap += "</tr>"

            document.getElementById('records_table').innerHTML = ap;
            console.log(ap);
        }
     
    }
}

xml5.send();