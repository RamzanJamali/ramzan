function doMath(num1, num2, num, result) {
	var myBox1 = document.getElementById(num1).value;
	var myBox2 = document.getElementById(num2).value;
	var result = document.getElementById(result);
	var myResult = (num * myBox1 * myBox2)/1000;
	result.value = myResult;
}

function doMath2(num1, num2, num3, result) {
	var myBox1 = document.getElementById(num1).value;
	var myBox2 = document.getElementById(num2).value;
	var myBox3 = document.getElementById(num3).value;
	var result = document.getElementById(result);
	var myResult = (myBox3 * myBox1 * myBox2) / 1000;
	result.value = myResult;
}

function totalEnergy() {
	var tEnergy = document.getElementById('totalEnergy')
	var equipEnergy = ['ESL', 'LB', 'TL', 'LTL', 'SL', 'LSL', 'OAC', 'OIAC', '1.5AC', 'IAC', 'TAC', 'TIAC', 'CF', 'IF', 'COM', 'lap', 'ei', 'cf', 'ef', 'bf', 'df', 'wd', 'wm', 'lp', 'ip', 'tst', 'mo', 'gj', 'ctm','ht', 'pm', 'oth']
	var Esum = 0;
	var a = 0;
	for (var i = 0; i < equipEnergy.length; i++) {
		a = document.getElementById(equipEnergy[i]).value;
		Esum = Esum + parseFloat(a);
	}
	tEnergy.value = Esum;


	var tPower = document.getElementById('totalPower')
	var equipPower0 = ['ESL0', 'LB0', 'TL0', 'LTL0', 'SL0', 'LSL0', 'OAC0', 'OIAC0', '1.5AC0', 'IAC0', 'TAC0', 'TIAC0', 'CF0', 'IF0', 'COM0', 'lap0', 'ei0', 'cf0', 'ef0', 'bf0', 'df0', 'wd0', 'wm0', 'lp0', 'ip0', 'tst0', 'mo0', 'gj0', 'ctm0', 'ht0', 'pm0']
	var equipPower1 = ['ESL1', 'LB1', 'TL1', 'LTL1', 'SL1', 'LSL1', 'OAC1', 'OIAC1', '1.5AC1', 'IAC1', 'TAC1', 'TIAC1', 'CF1', 'IF1', 'COM1', 'lap1', 'ei1', 'cf1', 'ef1', 'bf1', 'df1', 'wd1', 'wm1', 'lp1', 'ip1', 'tst1', 'mo1', 'gj1', 'ctm1', 'ht1', 'pm1']

	var check = "";
	var b = 0;
	var c = 0;
	var d = 0;
	var other = "";
	var other1 = document.getElementById('oth1').value;
	var other2 = document.getElementById('oth2').value;
	var otherPower = 0;
	var Psum = 0;
	for (var i = 0; i < equipEnergy.length; i++) {
		check = document.getElementById(equipEnergy[i]).value;
		if (i == (equipEnergy.length - 1)) {
			break;
		}
		if (check != 0) {
			b = document.getElementById(equipPower0[i]).dataset.numvalue;
			b = parseFloat(b);
			c = document.getElementById(equipPower1[i]).value;
			c = parseFloat(c);
			d = b * c;
			Psum = Psum + d;
		}
	}
	other = document.getElementById('oth').value;

	if (other != 0) {
		other1 = parseFloat(other1);
		other2 = parseFloat(other2);
		otherPower = other1 * other2;
		Psum = (Psum + otherPower)/1000;
	}
	tPower.value = Psum;

	var energy_req = (Esum / 0.8) * 1000;
	var PowerProd = energy_req / 3.84;
	var Pp = document.getElementById('totPowerDay');
	Pp.value = PowerProd.toFixed(2);

	var Idc = PowerProd / 24;
	var Imax = 380 / 24;
	var SolarModul = PowerProd / 380;
	console.log(SolarModul);
	SolarModul = Math.ceil(SolarModul);
	var SM = document.getElementById('totalSolarMod');
	SM.value = SolarModul;
	var Im = document.getElementById('MaxCurOnePV');
	Im.value = Imax.toFixed(2);

	var EnergyStor = Esum * 1000 * 3;
	var EnSafe = EnergyStor / 0.75;
	var EnCap = EnSafe / 12;
	var EC = document.getElementById('totEnergyStr');
	EC.value = EnCap.toFixed(2);
	var NoBatt = EnCap / 200;
	NoBatt = Math.ceil(NoBatt);
	var BattPara = NoBatt / 2;
	var NB = document.getElementById('totBatt');
	NB.value = NoBatt;
	var BP = document.getElementById('BattPara');
	BP.value = BattPara;

	var Isc = Imax * 1.1;
	var Fsafe = 1.25;
	var Irated = Isc * Fsafe * SolarModul;
	var Ir = document.getElementById('CurrOfVolCont');
	Ir.value = Irated.toFixed(2);
	var NoCharCont = Irated / 30;
	NoCharCont = Math.ceil(NoCharCont);
	var NCC = document.getElementById('totCharCont');
	NCC.value = NoCharCont;

	var InSize = Psum + (Psum * 0.05);
	var IS = document.getElementById('InvSize');
	IS.value = InSize.toFixed(2);
}