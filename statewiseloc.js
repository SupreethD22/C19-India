

var api_url6 = 'https://api.covid19india.org/data.json';
var api_url7 = 'https://api.covid19india.org/states_daily.json';
var api_url8 = 'https://api.covid19india.org/data.json';
var loc = 'https://ipapi.co/json'; //location api

//var country = data2.country_name; //country name
//var state = data2.region; //state name
//
//if (state == "National Capital Territory of Delhi") {
//	state = "Delhi";
//}


//calculating date

var today = new Date();
var month = new Array();
month[0] = "JAN";
month[1] = "FEB";
month[2] = "MAR";
month[3] = "APR";
month[4] = "MAY";
month[5] = "JUN";
month[6] = "JUL";
month[7] = "AUG";
month[8] = "SEP";
month[9] = "OCT";
month[10] = "NOV";
month[11] = "DEC";
var n = month[today.getMonth()];


var yesterday = today.getDate() - 1 + " " + n + " - ";

if (yesterday == "0 JUN - ") {
//	console.log("0 jun jsr");
	yesterday = "31 MAY - "
}

//console.log(yesterday);

async function getData6() {
	var response6 = await fetch(api_url6);
    var data1 = await response6.json();
    // console.log(data);

	var response7 = await fetch(api_url7);
	var data2 = await response7.json();
	// console.log(data2);

	
	//getting the location

	var resloc = await fetch(loc);
    var data3 = await resloc.json();
    console.log(data3);


	//statewise cases




		// console.log(data3);
	//	console.log(data3.region_code); // WB
	//	console.log(data3.region); // West Bengal
	var Region = data3.region;


	var last = (data2.states_daily.length) - 1;
		// console.log(data2.states_daily[last - 2].ka);
		// console.log(data2.states_daily[last].ka);

	

	//	console.log(data.statewise);
	//	console.log(data.statewise.length - 1);

	var statecode = data3.region_code; //checking with the state code from api
	var statecode_l = statecode.toLowerCase();

	
	var day = "TODAY - ";

	//	console.log(data2.states_daily[last]);

	//statecodes

	//an ap ar as be ch ct dd dl dn ga gj hp hr jh jk ka kl la ld mh ml mn mp mz nl or pb py rj sk tg tn tr tt up ut wb



	for (i = 0; i <= data1.statewise.length - 1; i++) {
				
		if (data1.statewise[i].statecode == statecode) {


            var state_c = data1.statewise[i].confirmed;
            var state_a = data1.statewise[i].active;
            var state_r = data1.statewise[i].recovered;
			var state_d = data1.statewise[i].deaths;
			var state_name = data1.statewise[i].state;


			// console.log(state_c);
			
            
            


			if (state_c == 0) {
				state_c = "NO";
            }
            
            if (state_a == 0) {
				state_a = "NO";
            }
            
            if (state_r == 0) {
				state_r = "NO";
			}

			if (state_d == 0) {
				state_d = "NO";
			}

			if (state_name == 0) {
				state_name = "NO";
			}


			// if (state_c == "NO" && state_d == "NO") {
			// 	var day = data2.states_daily[last - 2];


			// 	if (statecode == "AN") {
            //         state_c = data.statewise[i].confirmed;
            //         state_a = data.statewise[i].active;
            //         state_r = data.statewise[i].recovered;
            //         state_d = data.statewise[i].deaths;
			// 		// console.log(state_c);
			// 		// state_d = data2.states_daily[last].an;
					
			// 	}

			// 	if (statecode == "AP") {
			// 		state_c = data.statewise[i].confirmed;
			// 		// state_d = data2.states_daily[last].ap;
			// 	}

			// 	if (statecode == "AR") {
			// 		state_c = data.statewise[i].confirmed;
			// 		// state_d = data2.states_daily[last].ar;
			// 	}

			// 	if (statecode == "AS") {
			// 		state_c = data.statewise[i].confirmed;
			// 		// state_d = data2.states_daily[last].as;
			// 	}

			// 	// if (statecode == "BE") {
			// 	// 	state_c = data2.states_daily[last - 2].be;
			// 	// 	state_d = data2.states_daily[last].be;
			// 	// }

			// 	// if (statecode == "CH") {
			// 	// 	state_c = data2.states_daily[last - 2].ch;
			// 	// 	state_d = data2.states_daily[last].ch;
			// 	// }

			// 	// if (statecode == "CT") {
			// 	// 	state_c = data2.states_daily[last - 2].ct;
			// 	// 	state_d = data2.states_daily[last].ct;
			// 	// }

			// 	// if (statecode == "DD") {
			// 	// 	state_c = data2.states_daily[last - 2].dd;
			// 	// 	state_d = data2.states_daily[last].dd;
			// 	// }

			// 	// if (statecode == "DL") {
			// 	// 	state_c = data2.states_daily[last - 2].dl;
			// 	// 	state_d = data2.states_daily[last].dl;
			// 	// }

			// 	// if (statecode == "DN") {
			// 	// 	state_c = data2.states_daily[last - 2].dn;
			// 	// 	state_d = data2.states_daily[last].dn;
			// 	// }

			// 	// if (statecode == "GA") {
			// 	// 	state_c = data2.states_daily[last - 2].ga;
			// 	// 	state_d = data2.states_daily[last].ga;
			// 	// }

			// 	// if (statecode == "GJ") {
			// 	// 	state_c = data2.states_daily[last - 2].gj;
			// 	// 	state_d = data2.states_daily[last].gj;
			// 	// }

			// 	// if (statecode == "HP") {
			// 	// 	state_c = data2.states_daily[last - 2].hp;
			// 	// 	state_d = data2.states_daily[last].hp;
			// 	// }

			// 	// if (statecode == "HR") {
			// 	// 	state_c = data2.states_daily[last - 2].hr;
			// 	// 	state_d = data2.states_daily[last].hr;
			// 	// }

			// 	// if (statecode == "JH") {
			// 	// 	state_c = data2.states_daily[last - 2].jh;
			// 	// 	state_d = data2.states_daily[last].jh;
			// 	// }

			// 	// if (statecode == "JK") {
			// 	// 	state_c = data2.states_daily[last - 2].jk;
			// 	// 	state_d = data2.states_daily[last].jk;
			// 	// }

			// 	// if (statecode == "KA") {
			// 	// 	state_c = data.statewise[i].confirmed;
			// 	// 	// state_d = data2.states_daily[last].ka;
			// 	// }

			// 	if (statecode == "KL") {
			// 		state_c = data.statewise[i].confirmed;
			// 		// state_d = data2.states_daily[last].kl;
			// 	}

			// 	// if (statecode == "LA") {
			// 	// 	state_c = data2.states_daily[last - 2].la;
			// 	// 	state_d = data2.states_daily[last].la;
			// 	// }

			// 	// if (statecode == "LD") {
			// 	// 	state_c = data2.states_daily[last - 2].ld;
			// 	// 	state_d = data2.states_daily[last].ld;
			// 	// }

			// 	// if (statecode == "MH") {
			// 	// 	state_c = data2.states_daily[last - 2].mh;
			// 	// 	state_d = data2.states_daily[last].mh;
			// 	// }

			// 	// if (statecode == "ML") {
			// 	// 	state_c = data2.states_daily[last - 2].ml;
			// 	// 	state_d = data2.states_daily[last].ml;
			// 	// }

			// 	// if (statecode == "MN") {
			// 	// 	state_c = data2.states_daily[last - 2].mn;
			// 	// 	state_d = data2.states_daily[last].mn;
			// 	// }

			// 	// if (statecode == "MP") {
			// 	// 	state_c = data2.states_daily[last - 2].mp;
			// 	// 	state_d = data2.states_daily[last].mp;
			// 	// }

			// 	// if (statecode == "MZ") {
			// 	// 	state_c = data2.states_daily[last - 2].mz;
			// 	// 	state_d = data2.states_daily[last].mz;
			// 	// }

			// 	// if (statecode == "NL") {
			// 	// 	state_c = data2.states_daily[last - 2].nl;
			// 	// 	state_d = data2.states_daily[last].nl;
			// 	// }

			// 	// if (statecode == "OR") {
			// 	// 	state_c = data2.states_daily[last - 2].or;
			// 	// 	state_d = data2.states_daily[last].or;
			// 	// }

			// 	// if (statecode == "PB") {
			// 	// 	state_c = data2.states_daily[last - 2].pb;
			// 	// 	state_d = data2.states_daily[last].pb;
			// 	// }

			// 	// if (statecode == "PY") {
			// 	// 	state_c = data2.states_daily[last - 2].py;
			// 	// 	state_d = data2.states_daily[last].py;
			// 	// }

			// 	// if (statecode == "RJ") {
			// 	// 	state_c = data2.states_daily[last - 2].rj;
			// 	// 	state_d = data2.states_daily[last].rj;
			// 	// }

			// 	// if (statecode == "SK") {
			// 	// 	state_c = data2.states_daily[last - 2].sk;
			// 	// 	state_d = data2.states_daily[last].sk;
			// 	// }

			// 	// if (statecode == "TG") {
			// 	// 	state_c = data2.states_daily[last - 2].tg;
			// 	// 	state_d = data2.states_daily[last].tg;
			// 	// }

			// 	// if (statecode == "TN") {
			// 	// 	state_c = data2.states_daily[last - 2].tn;
			// 	// 	state_d = data2.states_daily[last].tn;
			// 	// }

			// 	// if (statecode == "TR") {
			// 	// 	state_c = data2.states_daily[last - 2].tr;
			// 	// 	state_d = data2.states_daily[last].tr;
			// 	// }

			// 	// if (statecode == "TT") {
			// 	// 	state_c = data2.states_daily[last - 2].tt;
			// 	// 	state_d = data2.states_daily[last].tt;
			// 	// }

			// 	// if (statecode == "UP") {
			// 	// 	state_c = data2.states_daily[last - 2].up;
			// 	// 	state_d = data2.states_daily[last].up;
			// 	// }

			// 	// if (statecode == "UT") {
			// 	// 	state_c = data2.states_daily[last - 2].ut;
			// 	// 	state_d = data2.states_daily[last].ut;
			// 	// }

			// 	// if (statecode == "WB") {
			// 	// 	state_c = data2.states_daily[last - 2].wb;
			// 	// 	state_d = data2.states_daily[last].wb;
			// 	// }

			// 	day = yesterday;


			// }
		
		}
	}
    var trhtml = '';
    console.log(state_c);
    console.log(state_a);
    console.log(state_r);
	console.log(state_d);
	console.log(state_name);
	var statename = state_name
	

	document.getElementById('states').innerHTML = state_name;
	document.getElementById('stateconfirmed').innerHTML = state_c;

	document.getElementById('stateactive').innerHTML = state_a;

	document.getElementById('staterecovered').innerHTML = state_r;
	// document.getElementById('statetdyrecovered').innerHTML =

	document.getElementById('statedeaths').innerHTML = state_d;

}

getData6();