

var api_url6 = 'https://api.covid19india.org/data.json';
var api_url7 = 'https://api.covid19india.org/states_daily.json';
var api_url8 = 'https://api.covid19india.org/data.json';
var loc = 'https://ipapi.co/json'; //location api
var test = 'https://api.covid19india.org/state_test_data.json';

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

	var testdata = await fetch(test);
	var data4 = await testdata.json();
	// console.log(data4);

	var testlast = (data4.states_tested_data.length)-79;
	// console.log(testlast);
	//statewise cases

	// https://api.covid19india.org/updatelog/log.json


		// console.log(data3);
	//	console.log(data3.region_code); // WB
	//	console.log(data3.region); // West Bengal
	var Region = data3.region;

	//mh
	var last = (data2.states_daily.length) - 1;
	var mhconfrm = data2.states_daily[last - 2].mh;
	var mhrec = data2.states_daily[last-1].mh;
	var mhd = data2.states_daily[last].mh

	document.getElementById('mhconfrm').innerHTML = mhconfrm;
	document.getElementById('mhrecv').innerHTML = mhrec;
	document.getElementById('mhd').innerHTML = mhd;

	
	//tn
	var tnconfrm = data2.states_daily[last - 2].tn;
	var tnrec = data2.states_daily[last-1].tn;
	var tnd = data2.states_daily[last].tn;

	document.getElementById('tnconfrm').innerHTML = tnconfrm;
	document.getElementById('tnrecv').innerHTML = tnrec;
	document.getElementById('tnd').innerHTML = tnd;

	//ap

	var apconfrm = data2.states_daily[last - 2].ap;
	var aprec = data2.states_daily[last-1].ap;
	var apd = data2.states_daily[last].ap;

	document.getElementById('apconfrm').innerHTML = apconfrm;
	document.getElementById('aprecv').innerHTML = aprec;
	document.getElementById('apd').innerHTML = apd;

	//ka

	var kaconfrm = data2.states_daily[last - 2].ka;
	var karec = data2.states_daily[last-1].ka;
	var kad = data2.states_daily[last].ka;

	document.getElementById('kaconfrm').innerHTML = kaconfrm;
	document.getElementById('karecv').innerHTML = karec;
	document.getElementById('kad').innerHTML = kad;

	//dl

	var dlconfrm = data2.states_daily[last - 2].dl;
	var dlrec = data2.states_daily[last-1].dl;
	var dld = data2.states_daily[last].dl;

	document.getElementById('dlconfrm').innerHTML = dlconfrm;
	document.getElementById('dlrecv').innerHTML = dlrec;
	document.getElementById('dld').innerHTML = dld;

	//up

	var upconfrm = data2.states_daily[last - 2].up;
	var uprec = data2.states_daily[last-1].up;
	var upd = data2.states_daily[last].up;

	document.getElementById('upconfrm').innerHTML = upconfrm;
	document.getElementById('uprecv').innerHTML = uprec;
	document.getElementById('upd').innerHTML = upd;


	//wb

	var wbconfrm = data2.states_daily[last - 2].wb;
	var wbrec = data2.states_daily[last-1].wb;
	var wbd = data2.states_daily[last].wb;

	document.getElementById('wbconfrm').innerHTML = wbconfrm;
	document.getElementById('wbrecv').innerHTML = wbrec;
	document.getElementById('wbd').innerHTML = wbd;


	//br

	var brconfrm = data2.states_daily[last - 2].br;
	var brrec = data2.states_daily[last-1].br;
	var brd = data2.states_daily[last].br;

	document.getElementById('brconfrm').innerHTML = brconfrm;
	document.getElementById('brrecv').innerHTML = brrec;
	document.getElementById('brd').innerHTML = brd;

	//tg

	var tgconfrm = data2.states_daily[last - 2].tg;
	var tgrec = data2.states_daily[last-1].tg;
	var tgd = data2.states_daily[last].tg;

	document.getElementById('tgconfrm').innerHTML = tgconfrm;
	document.getElementById('tgrecv').innerHTML = tgrec;
	document.getElementById('tgd').innerHTML = tgd;

	//gj

	var gjconfrm = data2.states_daily[last - 2].gj;
	var gjrec = data2.states_daily[last-1].gj;
	var gjd = data2.states_daily[last].gj;

	document.getElementById('gjconfrm').innerHTML = gjconfrm;
	document.getElementById('gjrecv').innerHTML = gjrec;
	document.getElementById('gjd').innerHTML = gjd;



	//as

	var asconfrm = data2.states_daily[last - 2].as;
	var asrec = data2.states_daily[last-1].as;
	var asd = data2.states_daily[last].as;

	document.getElementById('asconfrm').innerHTML = asconfrm;
	document.getElementById('asrecv').innerHTML = asrec;
	document.getElementById('asd').innerHTML = asd;


	//rj

	var rjconfrm = data2.states_daily[last - 2].rj;
	var rjrec = data2.states_daily[last-1].rj;
	var rjd = data2.states_daily[last].rj;

	document.getElementById('rjconfrm').innerHTML = rjconfrm;
	document.getElementById('rjrecv').innerHTML = rjrec;
	document.getElementById('rjd').innerHTML = rjd;

	//or

	var orconfrm = data2.states_daily[last - 2].or;
	var orrec = data2.states_daily[last-1].or;
	var ord = data2.states_daily[last].or;

	document.getElementById('orconfrm').innerHTML = orconfrm;
	document.getElementById('orrecv').innerHTML = orrec;
	document.getElementById('ord').innerHTML = ord;

	//hr

	var hrconfrm = data2.states_daily[last - 2].hr;
	var hrrec = data2.states_daily[last-1].hr;
	var hrd = data2.states_daily[last].hr;

	document.getElementById('hrconfrm').innerHTML = hrconfrm;
	document.getElementById('hrrecv').innerHTML = hrrec;
	document.getElementById('hrd').innerHTML = hrd;


	//mp

	var mpconfrm = data2.states_daily[last - 2].mp;
	var mprec = data2.states_daily[last-1].mp;
	var mpd = data2.states_daily[last].mp;

	document.getElementById('mpconfrm').innerHTML = mpconfrm;
	document.getElementById('mprecv').innerHTML = mprec;
	document.getElementById('mpd').innerHTML = mpd;


	//kl

	var klconfrm = data2.states_daily[last - 2].kl;
	var klrec = data2.states_daily[last-1].kl;
	var kld = data2.states_daily[last].kl;

	document.getElementById('klconfrm').innerHTML = klconfrm;
	document.getElementById('klrecv').innerHTML = klrec;
	document.getElementById('kld').innerHTML = kld;


	//pb

	var pbconfrm = data2.states_daily[last - 2].pb;
	var pbrec = data2.states_daily[last-1].pb;
	var pbd = data2.states_daily[last].pb;

	document.getElementById('pbconfrm').innerHTML = pbconfrm;
	document.getElementById('pbrecv').innerHTML = pbrec;
	document.getElementById('pbd').innerHTML = pbd;

	//jk

	var jkconfrm = data2.states_daily[last - 2].jk;
	var jkrec = data2.states_daily[last-1].jk;
	var jkd = data2.states_daily[last].jk;

	document.getElementById('jkconfrm').innerHTML = jkconfrm;
	document.getElementById('jkrecv').innerHTML = jkrec;
	document.getElementById('jkd').innerHTML = jkd;


	//jh

	var jhconfrm = data2.states_daily[last - 2].jh;
	var jhrec = data2.states_daily[last-1].jh;
	var jhd = data2.states_daily[last].jh;

	document.getElementById('jhconfrm').innerHTML = jhconfrm;
	document.getElementById('jhrecv').innerHTML = jhrec;
	document.getElementById('jhd').innerHTML = jhd;

	//ct

	var ctconfrm = data2.states_daily[last - 2].ct;
	var ctrec = data2.states_daily[last-1].ct;
	var ctd = data2.states_daily[last].ct;

	document.getElementById('ctconfrm').innerHTML = ctconfrm;
	document.getElementById('ctrecv').innerHTML = ctrec;
	document.getElementById('ctd').innerHTML = ctd;


	//ut

	var utconfrm = data2.states_daily[last - 2].ut;
	var utrec = data2.states_daily[last-1].ut;
	var utd = data2.states_daily[last].ut;

	document.getElementById('utconfrm').innerHTML = utconfrm;
	document.getElementById('utrecv').innerHTML = utrec;
	document.getElementById('utd').innerHTML = utd;


	//ga

	var gaconfrm = data2.states_daily[last - 2].ga;
	var garec = data2.states_daily[last-1].ga;
	var gad = data2.states_daily[last].ga;

	document.getElementById('gaconfrm').innerHTML = gaconfrm;
	document.getElementById('garecv').innerHTML = garec;
	document.getElementById('gad').innerHTML = gad;


	//tr

	var trconfrm = data2.states_daily[last - 2].tr;
	var trrec = data2.states_daily[last-1].tr;
	var trd = data2.states_daily[last].tr;

	document.getElementById('trconfrm').innerHTML = trconfrm;
	document.getElementById('trrecv').innerHTML = trrec;
	document.getElementById('trd').innerHTML = trd;


	//py

	var pyconfrm = data2.states_daily[last - 2].py;
	var pyrec = data2.states_daily[last-1].py;
	var pyd = data2.states_daily[last].py;

	document.getElementById('pyconfrm').innerHTML = pyconfrm;
	document.getElementById('pyrecv').innerHTML = pyrec;
	document.getElementById('pyd').innerHTML = pyd;


	//mn

	var mnconfrm = data2.states_daily[last - 2].mn;
	var mnrec = data2.states_daily[last-1].mn;
	var mnd = data2.states_daily[last].mn;

	document.getElementById('mnconfrm').innerHTML = mnconfrm;
	document.getElementById('mnrecv').innerHTML = mnrec;
	document.getElementById('mnd').innerHTML = mnd;


	//hp

	var hpconfrm = data2.states_daily[last - 2].hp;
	var hprec = data2.states_daily[last-1].hp;
	var hpd = data2.states_daily[last].hp;

	document.getElementById('hpconfrm').innerHTML = hpconfrm;
	document.getElementById('hprecv').innerHTML = hprec;
	document.getElementById('hpd').innerHTML = hpd;

	//nl

	var nlconfrm = data2.states_daily[last - 2].nl;
	var nlrec = data2.states_daily[last-1].nl;
	var nld = data2.states_daily[last].nl;

	document.getElementById('nlconfrm').innerHTML = nlconfrm;
	document.getElementById('nlrecv').innerHTML = nlrec;
	document.getElementById('nld').innerHTML = nld;


	//ar

	var arconfrm = data2.states_daily[last - 2].ar;
	var arrec = data2.states_daily[last-1].ar;
	var ard = data2.states_daily[last].ar;

	document.getElementById('arconfrm').innerHTML = arconfrm;
	document.getElementById('arrecv').innerHTML = arrec;
	document.getElementById('ard').innerHTML = ard;


	//an

	var anconfrm = data2.states_daily[last - 2].an;
	var anrec = data2.states_daily[last-1].an;
	var and = data2.states_daily[last].an;

	document.getElementById('anconfrm').innerHTML = anconfrm;
	document.getElementById('anrecv').innerHTML = anrec;
	document.getElementById('and').innerHTML = and;


	//la

	var laconfrm = data2.states_daily[last - 2].la;
	var larec = data2.states_daily[last-1].la;
	var lad = data2.states_daily[last].la;

	document.getElementById('laconfrm').innerHTML = laconfrm;
	document.getElementById('larecv').innerHTML = larec;
	document.getElementById('lad').innerHTML = lad;


	//ch

	var chconfrm = data2.states_daily[last - 2].ch;
	var chrec = data2.states_daily[last-1].ch;
	var chd = data2.states_daily[last].ch;

	document.getElementById('chconfrm').innerHTML = chconfrm;
	document.getElementById('chrecv').innerHTML = chrec;
	document.getElementById('chd').innerHTML = chd;


	//dh

	// var dhconfrm = data2.states_daily[last - 2].dh;
	// var dhrec = data2.states_daily[last-1].dh;
	// var dhd = data2.states_daily[last].dh;

	// document.getElementById('dhconfrm').innerHTML = dhconfrm;
	// document.getElementById('dhrecv').innerHTML = dhrec;
	// document.getElementById('dhd').innerHTML = dhd;

	// console.log(dhrec);


	//ml

	var mlconfrm = data2.states_daily[last - 2].ml;
	var mlrec = data2.states_daily[last-1].ml;
	var mld = data2.states_daily[last].ml;

	document.getElementById('mlconfrm').innerHTML = mlconfrm;
	document.getElementById('mlrecv').innerHTML = mlrec;
	document.getElementById('mld').innerHTML = mld;


	//sk

	var skconfrm = data2.states_daily[last - 2].sk;
	var skrec = data2.states_daily[last-1].sk;
	var skd = data2.states_daily[last].sk;

	document.getElementById('skconfrm').innerHTML = skconfrm;
	document.getElementById('skrecv').innerHTML = skrec;
	document.getElementById('skd').innerHTML = skd;


	//mz

	var mzconfrm = data2.states_daily[last - 2].mz;
	var mzrec = data2.states_daily[last-1].mz;
	var mzd = data2.states_daily[last].mz;

	document.getElementById('mzconfrm').innerHTML = mzconfrm;
	document.getElementById('mzrecv').innerHTML = mzrec;
	document.getElementById('mzd').innerHTML = mzd;


	//ld

	var ldconfrm = data2.states_daily[last - 2].ld;
	var ldrec = data2.states_daily[last-1].ld;
	var ldd = data2.states_daily[last].ld;

	document.getElementById('ldconfrm').innerHTML = ldconfrm;
	document.getElementById('ldrecv').innerHTML = ldrec;
	document.getElementById('ldd').innerHTML = ldd;

}

getData6();