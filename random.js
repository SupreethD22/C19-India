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
	var data = await response6.json();
	// console.log(data);

	var response7 = await fetch(api_url7);
	var data2 = await response7.json();
	// console.log(data2.states_daily);

	
	//getting the location

	var resloc = await fetch(loc);
	var data3 = await resloc.json();


	//statewise cases




		// console.log(data3);
	//	console.log(data3.region_code); // WB
	//	console.log(data3.region); // West Bengal
	var Region = data3.region;


	var last = (data2.states_daily.length) - 1;
		// console.log(data2.states_daily[last - 2].mh);
		// console.log(data2.states_daily[last].mh);

	

	//	console.log(data.statewise);
	//	console.log(data.statewise.length - 1);

	var statecode = data3.region_code; //checking with the state code from api
	var statecode_l = statecode.toLowerCase();

	
	var day = "TODAY - ";


    for(i=0 ; i <= data2.states_daily.length - 1 ; i++)
    {
		var state_c;
		var state_r;
        var state_d;

        if (statecode_l == "an") {
			state_c = data2.states_daily[last - 2].an;
			state_r = data2.states_daily[last - 1].an;
			state_d = data2.states_daily[last].an;
			
		}

		if (statecode_l == "ap") {
			state_c = data2.states_daily[last - 2].ap;
			state_r = data2.states_daily[last - 1].ap;
			state_d = data2.states_daily[last].ap;
		}

		if (statecode_l == "ar") {
			state_c = data2.states_daily[last - 2].ar;
			state_r = data2.states_daily[last - 1].ar;
			state_d = data2.states_daily[last].ar;
		}

		if (statecode_l == "as") {
			state_c = data2.states_daily[last - 2].as;
			state_r = data2.states_daily[last - 1].as;
			state_d = data2.states_daily[last].as;
		}

		if (statecode_l == "be") {
			state_c = data2.states_daily[last - 2].be;
			state_r = data2.states_daily[last - 1].be;
			state_d = data2.states_daily[last].be;
		}

		if (statecode_l == "ch") {
			state_c = data2.states_daily[last - 2].ch;
			state_r = data2.states_daily[last - 1].ch;
			state_d = data2.states_daily[last].ch;
		}

		if (statecode_l == "ct") {
			state_c = data2.states_daily[last - 2].ct;
			state_r = data2.states_daily[last - 1].ct;
			state_d = data2.states_daily[last].ct;
		}

		if (statecode_l == "dd") {
			state_c = data2.states_daily[last - 2].dd;
			state_r = data2.states_daily[last - 1].dd;
			state_d = data2.states_daily[last].dd;
		}

		if (statecode_l == "dl") {
			state_c = data2.states_daily[last - 2].dl;
			state_r = data2.states_daily[last - 1].dl;
			state_d = data2.states_daily[last].dl;
		}

		if (statecode_l == "dn") {
			state_c = data2.states_daily[last - 2].dn;
			state_r = data2.states_daily[last - 1].dn;
			state_d = data2.states_daily[last].dn;
		}

		if (statecode_l == "ga") {
			state_c = data2.states_daily[last - 2].ga;
			state_r = data2.states_daily[last - 1].ga;
			state_d = data2.states_daily[last].ga;
		}

		if (statecode_l == "gj") {
			state_c = data2.states_daily[last - 2].gj;
			state_r = data2.states_daily[last - 1].gj;
			state_d = data2.states_daily[last].gj;
		}

		if (statecode_l == "HP") {
			state_c = data2.states_daily[last - 2].hp;
			state_d = data2.states_daily[last].hp;
		}

		if (statecode_l == "hr") {
			state_c = data2.states_daily[last - 2].hr;
			state_r = data2.states_daily[last - 1].hr;
			state_d = data2.states_daily[last].hr;
		}

		if (statecode_l == "jh") {
			state_c = data2.states_daily[last - 2].jh;
			state_r = data2.states_daily[last - 1].jh;
			state_d = data2.states_daily[last].jh;
		}

		if (statecode_l == "jk") {
			state_c = data2.states_daily[last - 2].jk;
			state_r = data2.states_daily[last - 1].lk;
			state_d = data2.states_daily[last].jk;
		}

		if (statecode_l == "ka") {
			state_c = data2.states_daily[last - 2].ka;
			state_r = data2.states_daily[last - 1].ka;
			state_d = data2.states_daily[last].ka;
		}

		if (statecode_l == "kl") {
			state_c = data2.states_daily[last - 2].kl;
			state_r = data2.states_daily[last - 1].kl;
			state_d = data2.states_daily[last].kl;
		}

		if (statecode_l == "la") {
			state_c = data2.states_daily[last - 2].la;
			state_r = data2.states_daily[last - 1].la;
			state_d = data2.states_daily[last].la;
		}

		if (statecode_l == "ld") {
			state_c = data2.states_daily[last - 2].ld;
			state_r = data2.states_daily[last - 1].ld;
			state_d = data2.states_daily[last].ld;
		}

		if (statecode_l == "mh") {
			state_c = data2.states_daily[last - 2].mh;
			state_r = data2.states_daily[last - 1].mh;
			state_d = data2.states_daily[last].mh;
		}

		if (statecode_l == "ml") {
			state_c = data2.states_daily[last - 2].ml;
			state_r = data2.states_daily[last - 1].ml;
			state_d = data2.states_daily[last].ml;
		}

		if (statecode_l == "mn") {
			state_c = data2.states_daily[last - 2].mn;
			state_r = data2.states_daily[last - 1].mn;
			state_d = data2.states_daily[last].mn;
		}

		if (statecode_l == "mp") {
			state_c = data2.states_daily[last - 2].mp;
			state_r = data2.states_daily[last - 1].mp;
			state_d = data2.states_daily[last].mp;
		}

		if (statecode_l == "mz") {
			state_c = data2.states_daily[last - 2].mz;
			state_r = data2.states_daily[last - 1].mz;
			state_d = data2.states_daily[last].mz;
		}

		if (statecode_l == "nl") {
			state_c = data2.states_daily[last - 2].nl;
			state_r = data2.states_daily[last - 1].nl;
			state_d = data2.states_daily[last].nl;
		}

		if (statecode_l == "or") {
			state_c = data2.states_daily[last - 2].or;
			state_r = data2.states_daily[last - 1].or;
			state_d = data2.states_daily[last].or;
		}

		if (statecode_l == "pb") {
			state_c = data2.states_daily[last - 2].pb;
			state_r = data2.states_daily[last - 1].pb;
			state_d = data2.states_daily[last].pb;
		}

		if (statecode_l == "py") {
			state_c = data2.states_daily[last - 2].py;
			state_r = data2.states_daily[last - 1].py;
			state_d = data2.states_daily[last].py;
		}

		if (statecode_l == "RJ") {
			state_c = data2.states_daily[last - 2].rj;
			state_d = data2.states_daily[last].rj;
		}

		if (statecode_l == "sk") {
			state_c = data2.states_daily[last - 2].sk;
			state_r = data2.states_daily[last - 1].sk;
			state_d = data2.states_daily[last].sk;
		}

		if (statecode_l == "tg") {
			state_c = data2.states_daily[last - 2].tg;
			state_r = data2.states_daily[last - 1].tg;
			state_d = data2.states_daily[last].tg;
		}

		if (statecode_l == "tn") {
			state_c = data2.states_daily[last - 2].tn;
			state_r = data2.states_daily[last - 1].tn;
			state_d = data2.states_daily[last].tn;
		}

		if (statecode_l == "tr") {
			state_c = data2.states_daily[last - 2].tr;
			state_r = data2.states_daily[last - 1].tr;
			state_d = data2.states_daily[last].tr;
		}

		if (statecode_l == "tt") {
			state_c = data2.states_daily[last - 2].tt;
			state_r = data2.states_daily[last - 1].tt;
			state_d = data2.states_daily[last].tt;
		}

		if (statecode_l == "up") {
			state_c = data2.states_daily[last - 2].up;
			state_r = data2.states_daily[last - 1].up;
			state_d = data2.states_daily[last].up;
		}

		if (statecode_l == "ut") {
			state_c = data2.states_daily[last - 2].ut;
			state_r = data2.states_daily[last - 1].ut;
			state_d = data2.states_daily[last].ut;
		}

		if (statecode_l == "wb") {
			state_c = data2.states_daily[last - 2].wb;
			state_r = data2.states_daily[last - 1].wb;
			state_d = data2.states_daily[last].wb;
		}

    }

	document.getElementById("statetdyconformed").innerHTML = state_c;
	document.getElementById("statetdyrecovered").innerHTML = state_r;
	document.getElementById("statetdydeaths").innerHTML = state_d ;

    

}


getData6();