// const xhr1 = new XMLHttpRequest();

// xhr1.open('GET','https://api.covid19india.org/data.json',true);

// xhr1.onload = function()
// {
//     if(this.status === 200)
//     {
//         const covid1 = JSON.parse(this.responseText);
//         console.log(covid1);

        

       

//         // const outpt = `<a> ${state_wise.active}</a>` ;

//         // document.getElementById("datas").innerHTML = outpt;

       
//     }
// }

// xhr1.send();


$(document).ready(function(){
    //get json data

    $.getJSON("https://api.covid19india.org/data.json",function(data){
         var states = [];
         var confirmed = [];
         var recovered = [];
         var deaths = [];


         //graph data
         var dates = [];
         var dconfrm = [];
         var totalconfrm = [];


         var drecv = [];
         var totalrecv = [];


         var ddeceased = [];
         var totaldeceased = [];

         var dconfrm30;
         var date30 ;
         var total;

         var recv30;
         var totalrecv30;

         var deceased30;
         var totaldeceased30;

       
        console.log(data.cases_time_series);
        $.each(data.statewise,function(id,obj){
          states.push(obj.state);
          confirmed.push(obj.confirmed);
          recovered.push(obj.recovered);
          deaths.push(obj.deaths);

        });
         
        $.each(data.cases_time_series,function(id,obj){
          dconfrm.push(obj.totalconfirmed);
          totalconfrm.push(obj.dailyconfirmed)

          drecv.push(obj.dailyrecovered)
          totalrecv.push(obj.totalrecovered)

          ddeceased.push(obj.dailydeceased);
          totaldeceased.push(obj.totaldeceased);
          dates.push(obj.date);


        });


        date30 =  dates.slice(-30);
        dconfrm30 = dconfrm.slice(-30);


        recv30 = drecv.slice(-30);
        totalrecv30 = totalrecv.slice(-30); 

        deceased30 = ddeceased.slice(-30);
        totaldeceased30 = totaldeceased.slice(-30);
        total = totalconfrm.slice(-30);
        console.log(recv30);



        // for(var j=0;j<=(dates.length)-30;j++)
        // {
        //   console.log(dates[j]);
        // }

        // 1 maharashtra
         var mh = data.statewise[1].state;
         var mhconf = data.statewise[1].confirmed
         var mhactive = data.statewise[1].active;
         var mhrec = data.statewise[1].recovered;
         var mhdeaths = data.statewise[1].deaths;

         document.getElementById('mh').innerHTML = mh;
         document.getElementById('mhconf').innerHTML = mhconf
         document.getElementById('mhactive').innerHTML = mhactive;
         document.getElementById('mhrec').innerHTML = mhrec;
         document.getElementById('mhdeaths').innerHTML = mhdeaths;


         // 2 TN
         var tn = data.statewise[2].state;
         var tnconf = data.statewise[2].confirmed
         var tnactive = data.statewise[2].active;
         var tnrec = data.statewise[2].recovered;
         var tndeaths = data.statewise[2].deaths;


         document.getElementById('tn').innerHTML =tn;
         document.getElementById('tnconf').innerHTML = tnconf
         document.getElementById('tnactive').innerHTML = tnactive;
         document.getElementById('tnrec').innerHTML = tnrec;
         document.getElementById('tndeaths').innerHTML = tndeaths;

         
         // 3 AP

          var ap = data.statewise[3].state;
          var apconf = data.statewise[3].confirmed
          var apactive = data.statewise[3].active;
          var aprec = data.statewise[3].recovered;
          var apdeaths = data.statewise[3].deaths;
 
          document.getElementById('ap').innerHTML = ap;
          document.getElementById('apconf').innerHTML = apconf
          document.getElementById('apactive').innerHTML = apactive;
          document.getElementById('aprec').innerHTML = aprec;
          document.getElementById('apdeaths').innerHTML = apdeaths;
         

          // 4 KA

          var ka = data.statewise[4].state;
          var kaconf = data.statewise[4].confirmed
          var kaactive = data.statewise[4].active;
          var karec = data.statewise[4].recovered;
          var kadeaths = data.statewise[4].deaths;
 
          document.getElementById('ka').innerHTML =ka;
          document.getElementById('kaconf').innerHTML = kaconf
          document.getElementById('kaactive').innerHTML = kaactive;
          document.getElementById('karec').innerHTML = karec;
          document.getElementById('kadeaths').innerHTML = kadeaths;


          // 5 DL

          var dl = data.statewise[5].state;
          var dlconf = data.statewise[5].confirmed
          var dlactive = data.statewise[5].active;
          var dlrec = data.statewise[5].recovered;
          var dldeaths = data.statewise[5].deaths;
 
          document.getElementById('dl').innerHTML =dl;
          document.getElementById('dlconf').innerHTML = dlconf
          document.getElementById('dlactive').innerHTML = dlactive;
          document.getElementById('dlrec').innerHTML = dlrec;
          document.getElementById('dldeaths').innerHTML = dldeaths;

          // 6 UP

          var up = data.statewise[6].state;
          var upconf = data.statewise[6].confirmed
          var upactive = data.statewise[6].active;
          var uprec = data.statewise[6].recovered;
          var updeaths = data.statewise[6].deaths;
 
          document.getElementById('up').innerHTML =up;
          document.getElementById('upconf').innerHTML = upconf
          document.getElementById('upactive').innerHTML = upactive;
          document.getElementById('uprec').innerHTML = uprec;
          document.getElementById('updeaths').innerHTML = updeaths;

          // 7 WB

          var wb = data.statewise[7].state;
          var wbconf = data.statewise[7].confirmed
          var wbactive = data.statewise[7].active;
          var wbrec = data.statewise[7].recovered;
          var wbdeaths = data.statewise[7].deaths;
 
          document.getElementById('wb').innerHTML =wb;
          document.getElementById('wbconf').innerHTML = wbconf
          document.getElementById('wbactive').innerHTML = wbactive;
          document.getElementById('wbrec').innerHTML = wbrec;
          document.getElementById('wbdeaths').innerHTML = wbdeaths;

          // 8 BR

          var br = data.statewise[8].state;
          var brconf = data.statewise[8].confirmed
          var bractive = data.statewise[8].active;
          var brrec = data.statewise[8].recovered;
          var brdeaths = data.statewise[8].deaths;
 
          document.getElementById('br').innerHTML =br;
          document.getElementById('brconf').innerHTML = brconf
          document.getElementById('bractive').innerHTML = bractive;
          document.getElementById('brrec').innerHTML = brrec;
          document.getElementById('brdeaths').innerHTML = brdeaths;

          // 9 TG

          var tg = data.statewise[9].state;
          var tgconf = data.statewise[9].confirmed
          var tgactive = data.statewise[9].active;
          var tgrec = data.statewise[9].recovered;
          var tgdeaths = data.statewise[9].deaths;
 
          document.getElementById('tg').innerHTML =tg;
          document.getElementById('tgconf').innerHTML = tgconf
          document.getElementById('tgactive').innerHTML = tgactive;
          document.getElementById('tgrec').innerHTML = tgrec;
          document.getElementById('tgdeaths').innerHTML = tgdeaths;


          // 10 GJ

          var gj = data.statewise[10].state;
          var gjconf = data.statewise[10].confirmed
          var gjactive = data.statewise[10].active;
          var gjrec = data.statewise[10].recovered;
          var gjdeaths = data.statewise[10].deaths;
 
          document.getElementById('gj').innerHTML =gj;
          document.getElementById('gjconf').innerHTML = gjconf
          document.getElementById('gjactive').innerHTML = gjactive;
          document.getElementById('gjrec').innerHTML = gjrec;
          document.getElementById('gjdeaths').innerHTML = gjdeaths;


          // 11 AS

          var as = data.statewise[11].state;
          var asconf = data.statewise[11].confirmed
          var asactive = data.statewise[11].active;
          var asrec = data.statewise[11].recovered;
          var asdeaths = data.statewise[11].deaths;
 
          document.getElementById('as').innerHTML =as;
          document.getElementById('asconf').innerHTML = asconf
          document.getElementById('asactive').innerHTML = asactive;
          document.getElementById('asrec').innerHTML = asrec;
          document.getElementById('asdeaths').innerHTML = asdeaths;

          // 12 RJ

          var rj = data.statewise[12].state;
          var rjconf = data.statewise[12].confirmed
          var rjactive = data.statewise[12].active;
          var rjrec = data.statewise[12].recovered;
          var rjdeaths = data.statewise[12].deaths;
 
          document.getElementById('rj').innerHTML =rj;
          document.getElementById('rjconf').innerHTML = rjconf
          document.getElementById('rjactive').innerHTML = rjactive;
          document.getElementById('rjrec').innerHTML = rjrec;
          document.getElementById('rjdeaths').innerHTML = rjdeaths;


          // 13 OR

          var or = data.statewise[13].state;
          var orconf = data.statewise[13].confirmed
          var oractive = data.statewise[13].active;
          var orrec = data.statewise[13].recovered;
          var ordeaths = data.statewise[13].deaths;
 
          document.getElementById('or').innerHTML =or;
          document.getElementById('orconf').innerHTML = orconf
          document.getElementById('oractive').innerHTML = oractive;
          document.getElementById('orrec').innerHTML = orrec;
          document.getElementById('ordeaths').innerHTML = ordeaths;


          // 14 HR
          
          var hr = data.statewise[14].state;
          var hrconf = data.statewise[14].confirmed
          var hractive = data.statewise[14].active;
          var hrrec = data.statewise[14].recovered;
          var hrdeaths = data.statewise[14].deaths;
 
          document.getElementById('hr').innerHTML =hr;
          document.getElementById('hrconf').innerHTML = hrconf
          document.getElementById('hractive').innerHTML = hractive;
          document.getElementById('hrrec').innerHTML = hrrec;
          document.getElementById('hrdeaths').innerHTML = hrdeaths;


          // 15 MP

          var mp = data.statewise[15].state;
          var mpconf = data.statewise[15].confirmed
          var mpactive = data.statewise[15].active;
          var mprec = data.statewise[15].recovered;
          var mpdeaths = data.statewise[15].deaths;
 
          document.getElementById('mp').innerHTML =mp;
          document.getElementById('mpconf').innerHTML = mpconf
          document.getElementById('mpactive').innerHTML = mpactive;
          document.getElementById('mprec').innerHTML = mprec;
          document.getElementById('mpdeaths').innerHTML = mpdeaths;

          // 16 KL

          var kl = data.statewise[16].state;
          var klconf = data.statewise[16].confirmed
          var klactive = data.statewise[16].active;
          var klrec = data.statewise[16].recovered;
          var kldeaths = data.statewise[16].deaths;
 
          document.getElementById('kl').innerHTML =kl;
          document.getElementById('klconf').innerHTML = klconf
          document.getElementById('klactive').innerHTML = klactive;
          document.getElementById('klrec').innerHTML = klrec;
          document.getElementById('kldeaths').innerHTML = kldeaths;

          //17 PB

          var pb = data.statewise[17].state;
          var pbconf = data.statewise[17].confirmed
          var pbactive = data.statewise[17].active;
          var pbrec = data.statewise[17].recovered;
          var pbdeaths = data.statewise[17].deaths;
 
          document.getElementById('pb').innerHTML =pb;
          document.getElementById('pbconf').innerHTML = pbconf
          document.getElementById('pbactive').innerHTML = pbactive;
          document.getElementById('pbrec').innerHTML = pbrec;
          document.getElementById('pbdeaths').innerHTML = pbdeaths;


          //18 JK

          var jk = data.statewise[18].state;
          var jkconf = data.statewise[18].confirmed
          var jkactive = data.statewise[18].active;
          var jkrec = data.statewise[18].recovered;
          var jkdeaths = data.statewise[18].deaths;
 
          document.getElementById('jk').innerHTML =jk;
          document.getElementById('jkconf').innerHTML = jkconf
          document.getElementById('jkactive').innerHTML = jkactive;
          document.getElementById('jkrec').innerHTML = jkrec;
          document.getElementById('jkdeaths').innerHTML = jkdeaths;


          //19 JH

          var jh = data.statewise[19].state;
          var jhconf = data.statewise[19].confirmed
          var jhactive = data.statewise[19].active;
          var jhrec = data.statewise[19].recovered;
          var jhdeaths = data.statewise[19].deaths;
 
          document.getElementById('jh').innerHTML = jh;
          document.getElementById('jhconf').innerHTML = jhconf
          document.getElementById('jhactive').innerHTML = jhactive;
          document.getElementById('jhrec').innerHTML = jhrec;
          document.getElementById('jhdeaths').innerHTML = jhdeaths;

          //20 CT

          var ct = data.statewise[20].state;
          var ctconf = data.statewise[20].confirmed
          var ctactive = data.statewise[20].active;
          var ctrec = data.statewise[20].recovered;
          var ctdeaths = data.statewise[20].deaths;
 
          document.getElementById('ct').innerHTML =ct;
          document.getElementById('ctconf').innerHTML = ctconf
          document.getElementById('ctactive').innerHTML = ctactive;
          document.getElementById('ctrec').innerHTML = ctrec;
          document.getElementById('ctdeaths').innerHTML = ctdeaths;

          //21 UT

          var ut = data.statewise[21].state;
          var utconf = data.statewise[21].confirmed
          var utactive = data.statewise[21].active;
          var utrec = data.statewise[21].recovered;
          var utdeaths = data.statewise[21].deaths;
 
          document.getElementById('ut').innerHTML =ut;
          document.getElementById('utconf').innerHTML = utconf
          document.getElementById('utactive').innerHTML = utactive;
          document.getElementById('utrec').innerHTML = utrec;
          document.getElementById('utdeaths').innerHTML = utdeaths;

          //22 GA

          var ga = data.statewise[22].state;
          var gaconf = data.statewise[22].confirmed
          var gaactive = data.statewise[22].active;
          var garec = data.statewise[22].recovered;
          var gadeaths = data.statewise[22].deaths;
 
          document.getElementById('ga').innerHTML =ga;
          document.getElementById('gaconf').innerHTML = gaconf
          document.getElementById('gaactive').innerHTML = gaactive;
          document.getElementById('garec').innerHTML = garec;
          document.getElementById('gadeaths').innerHTML = gadeaths;


          //23 TR


          var tr = data.statewise[23].state;
          var trconf = data.statewise[23].confirmed
          var tractive = data.statewise[23].active;
          var trrec = data.statewise[23].recovered;
          var trdeaths = data.statewise[23].deaths;
 
          document.getElementById('tr').innerHTML =tr;
          document.getElementById('trconf').innerHTML = trconf
          document.getElementById('tractive').innerHTML = tractive;
          document.getElementById('trrec').innerHTML = trrec;
          document.getElementById('trdeaths').innerHTML = trdeaths;

          //24 PY

          var py = data.statewise[24].state;
          var pyconf = data.statewise[24].confirmed
          var pyactive = data.statewise[24].active;
          var pyrec = data.statewise[24].recovered;
          var pydeaths = data.statewise[24].deaths;
 
          document.getElementById('py').innerHTML =py;
          document.getElementById('pyconf').innerHTML = pyconf
          document.getElementById('pyactive').innerHTML = pyactive;
          document.getElementById('pyrec').innerHTML = pyrec;
          document.getElementById('pydeaths').innerHTML = pydeaths;


          //25 MN


          var mn = data.statewise[25].state;
          var mnconf = data.statewise[25].confirmed
          var mnactive = data.statewise[25].active;
          var mnrec = data.statewise[25].recovered;
          var mndeaths = data.statewise[25].deaths;
 
          document.getElementById('mn').innerHTML =mn;
          document.getElementById('mnconf').innerHTML = mnconf
          document.getElementById('mnactive').innerHTML = mnactive;
          document.getElementById('mnrec').innerHTML = mnrec;
          document.getElementById('mndeaths').innerHTML = mndeaths;


          //26 HP

          var hp = data.statewise[26].state;
          var hpconf = data.statewise[26].confirmed
          var hpactive = data.statewise[26].active;
          var hprec = data.statewise[26].recovered;
          var hpdeaths = data.statewise[26].deaths;
 
          document.getElementById('hp').innerHTML =hp;
          document.getElementById('hpconf').innerHTML = hpconf
          document.getElementById('hpactive').innerHTML = hpactive;
          document.getElementById('hprec').innerHTML = hprec;
          document.getElementById('hpdeaths').innerHTML = hpdeaths;

          //27 NL


          var nl = data.statewise[27].state;
          var nlconf = data.statewise[27].confirmed
          var nlactive = data.statewise[27].active;
          var nlrec = data.statewise[27].recovered;
          var nldeaths = data.statewise[27].deaths;
 
          document.getElementById('nl').innerHTML =nl;
          document.getElementById('nlconf').innerHTML = nlconf
          document.getElementById('nlactive').innerHTML = nlactive;
          document.getElementById('nlrec').innerHTML = nlrec;
          document.getElementById('nldeaths').innerHTML = nldeaths;


          //28 AR

          var ar = data.statewise[28].state;
          var arconf = data.statewise[28].confirmed
          var aractive = data.statewise[28].active;
          var arrec = data.statewise[28].recovered;
          var ardeaths = data.statewise[28].deaths;
 
          document.getElementById('ar').innerHTML =ar;
          document.getElementById('arconf').innerHTML = arconf
          document.getElementById('aractive').innerHTML = aractive;
          document.getElementById('arrec').innerHTML = arrec;
          document.getElementById('ardeaths').innerHTML = ardeaths;



          //29 AN

         var an = data.statewise[29].state;
         var anconf = data.statewise[29].confirmed
         var anactive = data.statewise[29].active;
         var anrec = data.statewise[29].recovered;
         var andeaths = data.statewise[29].deaths;


         document.getElementById('an').innerHTML =an;
         document.getElementById('anconf').innerHTML = anconf
         document.getElementById('anactive').innerHTML = anactive;
         document.getElementById('anrec').innerHTML = anrec;
         document.getElementById('andeaths').innerHTML = andeaths;


         //30 LA

          var la = data.statewise[30].state;
          var laconf = data.statewise[30].confirmed
          var laactive = data.statewise[30].active;
          var larec = data.statewise[30].recovered;
          var ladeaths = data.statewise[30].deaths;
 
          document.getElementById('la').innerHTML =la;
          document.getElementById('laconf').innerHTML = laconf
          document.getElementById('laactive').innerHTML = laactive;
          document.getElementById('larec').innerHTML = larec;
          document.getElementById('ladeaths').innerHTML = ladeaths;



          //31 CH

          var ch = data.statewise[31].state;
          var chconf = data.statewise[31].confirmed
          var chactive = data.statewise[31].active;
          var chrec = data.statewise[31].recovered;
          var chdeaths = data.statewise[31].deaths;
 
          document.getElementById('ch').innerHTML =ch;
          document.getElementById('chconf').innerHTML = chconf
          document.getElementById('chactive').innerHTML = chactive;
          document.getElementById('chrec').innerHTML = chrec;
          document.getElementById('chdeaths').innerHTML = chdeaths;


          //32 DH

          var dh = data.statewise[32].state;
          var dhconf = data.statewise[32].confirmed
          var dhactive = data.statewise[32].active;
          var dhrec = data.statewise[32].recovered;
          var dhdeaths = data.statewise[32].deaths;
 
          document.getElementById('dh').innerHTML =dh;
          document.getElementById('dhconf').innerHTML = dhconf
          document.getElementById('dhactive').innerHTML = dhactive;
          document.getElementById('dhrec').innerHTML = dhrec;
          document.getElementById('dhdeaths').innerHTML = dhdeaths;


          //33 ML

          var ml = data.statewise[33].state;
          var mlconf = data.statewise[33].confirmed
          var mlactive = data.statewise[33].active;
          var mlrec = data.statewise[33].recovered;
          var mldeaths = data.statewise[33].deaths;
 
          document.getElementById('ml').innerHTML =ml;
          document.getElementById('mlconf').innerHTML = mlconf
          document.getElementById('mlactive').innerHTML = mlactive;
          document.getElementById('mlrec').innerHTML = mlrec;
          document.getElementById('mldeaths').innerHTML = mldeaths;

          //34 SK

          var sk = data.statewise[34].state;
          var skconf = data.statewise[34].confirmed
          var skactive = data.statewise[34].active;
          var skrec = data.statewise[34].recovered;
          var skdeaths = data.statewise[34].deaths;
 
          document.getElementById('sk').innerHTML =sk;
          document.getElementById('skconf').innerHTML = skconf
          document.getElementById('skactive').innerHTML = skactive;
          document.getElementById('skrec').innerHTML = skrec;
          document.getElementById('skdeaths').innerHTML = skdeaths;

          //35 MZ

          var mz = data.statewise[35].state;
          var mzconf = data.statewise[35].confirmed
          var mzactive = data.statewise[35].active;
          var mzrec = data.statewise[35].recovered;
          var mzdeaths = data.statewise[35].deaths;
 
          document.getElementById('mz').innerHTML =mz;
          document.getElementById('mzconf').innerHTML = mzconf
          document.getElementById('mzactive').innerHTML = mzactive;
          document.getElementById('mzrec').innerHTML = mzrec;
          document.getElementById('mzdeaths').innerHTML = mzdeaths;


          //37 ld

          var ld = data.statewise[37].state;
          var ldconf = data.statewise[37].confirmed
          var ldactive = data.statewise[37].active;
          var ldrec = data.statewise[37].recovered;
          var lddeaths = data.statewise[37].deaths;
 
          document.getElementById('ld').innerHTML =ld;
          document.getElementById('ldconf').innerHTML = ldconf
          document.getElementById('ldactive').innerHTML = ldactive;
          document.getElementById('ldrec').innerHTML = ldrec;
          document.getElementById('lddeaths').innerHTML = lddeaths;


          
        // console.log(trhtml);
        // states.shift();
        confirmed.shift();
        recovered.shift();
        deaths.shift();
         


        // $('#records_table').append(trhtml);


        
        var myChart = document.getElementById("indconfrm").getContext("2d");

        var chart = new Chart(myChart,{
           type:"line",
           data:{
             labels:date30,
             datasets:[
              {
                label : "TotalConfirmed",
                data : dconfrm30,
                borderColor: "rgba(207, 0, 15, 1)",
                fill: false
              },
              {
                label : "TodayConfirmed",
                data : total,
                borderColor: "rgba(150, 40, 27, 1)",
                fill: false
              },
               
              
              
             ],
           },
           options : {
              animation:{
                duration: 4000,
                easing: 'linear'
              },
              scales: {
                xAxes: [{
                   gridLines: {
                      display: false
                   }
                }],
                yAxes: [{
                   gridLines: {
                      display: false
                   }
                }]
           }
           }
        });


        var myChart = document.getElementById("indrecv").getContext("2d");

        var chart = new Chart(myChart,{
           type:"line",
           data:{
             labels:date30,
             datasets:[
              {
                label : "TotalRecovered",
                data : totalrecv30,
                borderColor: "rgba(30, 130, 76, 1)",
                fill : false

              },
               {
                 label : "TodayRecovered",
                 data : recv30,
                 borderColor: "rgba(77, 175, 124, 1)",
                 fill : false
               },
               
              
             ],
           },
           options : {
              animation:{
                duration: 4000,
                easing: 'linear'
              },

              scales: {
                xAxes: [{
                   gridLines: {
                      display: false
                   }
                }],
                yAxes: [{
                   gridLines: {
                      display: false
                   }
                }]
           }
           }
        });


        var myChart = document.getElementById("inddeceased").getContext("2d");

        var chart = new Chart(myChart,{
           type:"line",
           data:{
             labels:date30,
             datasets:[
              {
                label : "TotalDeceased",
                data : totaldeceased30,
                borderColor: "rgba(105, 105, 105, 0.966)",
                fill : false

              },
               {
                 label : "TodayDeceased",
                 data : deceased30,
                 borderColor: "rgba(108, 122, 137, 1)",
                 fill : false
               },
              
              
             ],
           },
           options : {
              animation:{
                duration: 4000,
                easing: 'linear'
              },

              scales: {
                xAxes: [{
                   gridLines: {
                      display: false
                   }
                }],
                yAxes: [{
                   gridLines: {
                      display: false
                   }
                }]
           }
           }
        });



        


        // document.getElementById('#confrm').style.display = 'none';

      
       

        $(document).ready(function(){
            $("#myInput").on("keyup", function() {
              var value = $(this).val().toLowerCase();
              $("#records_table tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
              });
            });
          });
    });
});




    
