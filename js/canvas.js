var silueta_pelo = document.getElementById("pelo");
var dibujo_pelo = silueta_pelo.getContext("2d");

   dibujo_pelo.beginPath();
   dibujo_pelo.fillStyle = "black";
   //coronilla
   dibujo_pelo.moveTo(450,275);
   dibujo_pelo.quadraticCurveTo(500, 120, 595,109);
   dibujo_pelo.quadraticCurveTo(505,130, 487,246);
   dibujo_pelo.quadraticCurveTo(600, 80, 806,88);
   dibujo_pelo.quadraticCurveTo(605, 100, 568,224);
   dibujo_pelo.quadraticCurveTo(770, 150, 974,170);
   dibujo_pelo.lineTo(934,185);

   //flequillo
   dibujo_pelo.quadraticCurveTo(1200, 190, 1711,470);
   dibujo_pelo.quadraticCurveTo(1550, 400, 1551,444);
   dibujo_pelo.quadraticCurveTo(1575, 450, 1601,525);
   dibujo_pelo.quadraticCurveTo(1550, 480, 1443,477);
   dibujo_pelo.quadraticCurveTo(1500, 480, 1519,551);
   dibujo_pelo.quadraticCurveTo(1300, 480, 1165,533);
   dibujo_pelo.quadraticCurveTo(1200, 650, 1090,737);
   dibujo_pelo.quadraticCurveTo(1190, 650, 1115,545);
   //patillas
   dibujo_pelo.quadraticCurveTo(1050, 850, 846,1032);
   dibujo_pelo.quadraticCurveTo(860, 1180, 793,1276);
   dibujo_pelo.quadraticCurveTo(810, 1190, 758,1193); 
   dibujo_pelo.lineTo(671,1179);
   //oreja-nuca
   dibujo_pelo.quadraticCurveTo(610, 1000,466,1051);
   dibujo_pelo.bezierCurveTo(350, 1100,400, 1450, 586,1501);
   dibujo_pelo.quadraticCurveTo(630, 1510, 666,1473);
   dibujo_pelo.quadraticCurveTo(520,1620, 218,1584);
   dibujo_pelo.quadraticCurveTo(280, 1550, 293,1493);
   dibujo_pelo.quadraticCurveTo(180, 1520, 148,1495);
   dibujo_pelo.quadraticCurveTo(180, 1500, 235,1468);
   dibujo_pelo.quadraticCurveTo(140, 1430, 133,1374);
   dibujo_pelo.quadraticCurveTo(230, 1500, 240,1284);
   dibujo_pelo.quadraticCurveTo(200, 1300, 129,1288);
   dibujo_pelo.quadraticCurveTo(230, 1290, 269,1171);
   dibujo_pelo.bezierCurveTo(100, 600, 210, 400, 287,345);
   dibujo_pelo.quadraticCurveTo(210, 370, 195,383);
   dibujo_pelo.quadraticCurveTo(210, 350, 450,275);
   dibujo_pelo.fill();


var silueta_rostro = document.getElementById("rostro");
var dibujo = silueta_rostro.getContext("2d");


   dibujo.beginPath();
   dibujo.fillStyle = "rgba(240,197,131,1)";//"#E9B569";
   dibujo.moveTo(1000,300);
   dibujo.lineTo(1396,514);
   dibujo.lineTo(1612,700);
   dibujo.quadraticCurveTo(1560, 750, 1560,780);
   dibujo.quadraticCurveTo(1500, 800,1887,1160);
   dibujo.quadraticCurveTo(1910, 1280, 1651,1305);
   //boca
   dibujo.quadraticCurveTo(1600, 1340, 1643,1388);
   dibujo.quadraticCurveTo(1690, 1430, 1254,1444);
   dibujo.lineTo(1261,1410);
   dibujo.lineTo(1181,1471);
   dibujo.quadraticCurveTo(1590, 1740, 1444,1509);
   dibujo.lineTo(1473,1499);
   dibujo.quadraticCurveTo(1550, 1620, 1472,1670);
   //barbilla
   dibujo.bezierCurveTo(1460, 1750, 1500, 1750, 1486,1846);
   dibujo.quadraticCurveTo(1470, 1890, 1434,1900);/*
   dibujo.lineTo(1424,1849);//pico
   dibujo.lineTo(1409,1898);
   dibujo.lineTo(866,1647);
   dibujo.lineTo(1409,1898);*/
   dibujo.lineTo(1005,2043);
   dibujo.quadraticCurveTo(600, 2100,479,1543);
   dibujo.lineTo(269,1171);
   dibujo.fill();


var raya_oreja = document.getElementById("oreja");
var dibujo_oreja = raya_oreja.getContext("2d");

   dibujo_oreja.beginPath();
   dibujo_oreja.fillStyle = "black";
   dibujo_oreja.moveTo(459,1132);
   dibujo_oreja.lineTo(617,1262);
   dibujo_oreja.lineTo(517,1252);
   dibujo_oreja.lineTo(608,1378);
   dibujo_oreja.fill();



var boca = document.getElementById("boca");
var dibujo_boca = boca.getContext("2d");
 
   dibujo_boca.beginPath();
   dibujo_boca.fillStyle = "black";
   dibujo_boca.moveTo(1643,1388);
   dibujo_boca.quadraticCurveTo(1690, 1430, 1254,1444);
   dibujo_boca.lineTo(1261,1410);
   dibujo_boca.lineTo(1181,1471);
   dibujo_boca.quadraticCurveTo(1590, 1740, 1444,1509);
   dibujo_boca.lineTo(1473,1499);
   dibujo_boca.lineTo(1295,1490);
   dibujo_boca.lineTo(1295,1470);
   dibujo_boca.quadraticCurveTo(1730, 1430, 1643,1388);
   dibujo_boca.fill();



var dientes = document.getElementById("dientes");
var dibujo_dientes = dientes.getContext("2d");

   dibujo_dientes.beginPath();
   dibujo_dientes.fillStyle = "#E6E6E6";
   dibujo_dientes.moveTo(1555,1438);
   dibujo_dientes.lineTo(1295,1470);
   dibujo_dientes.lineTo(1295,1490);
   dibujo_dientes.quadraticCurveTo(1500, 1510,1550,1490);
   dibujo_dientes.quadraticCurveTo(1560, 1460, 1555,1428);
   dibujo_dientes.fill();




var hoyuelo1 = document.getElementById("hoyuelo1");
var dibujo_hoyuelo1 = hoyuelo1.getContext("2d");

   dibujo_hoyuelo1.beginPath();
   dibujo_hoyuelo1.fillStyle = "black";

   dibujo_hoyuelo1.moveTo(1106,1275);
   dibujo_hoyuelo1.quadraticCurveTo(950, 1400,987,1500);
   dibujo_hoyuelo1.lineTo(1077,1711);
   dibujo_hoyuelo1.lineTo(998,1500);
   dibujo_hoyuelo1.quadraticCurveTo(980, 1400,1106,1275);
   dibujo_hoyuelo1.fill();


var hoyuelo2 = document.getElementById("hoyuelo2");
var dibujo_hoyuelo2 = hoyuelo1.getContext("2d");

   dibujo_hoyuelo1.beginPath();
   dibujo_hoyuelo1.fillStyle = "black";

   dibujo_hoyuelo1.moveTo(1130,1524);
   dibujo_hoyuelo1.quadraticCurveTo(1100, 1540, 1145,1590);
   dibujo_hoyuelo1.fill();

var barbilla = document.getElementById("barbilla");
var dibujo_barbilla = barbilla.getContext("2d");

   dibujo_barbilla.beginPath();
   dibujo_barbilla.fillStyle = "black";

   dibujo_barbilla.moveTo(1434,1892);
   dibujo_barbilla.lineTo(1424,1849);//pico
   dibujo_barbilla.lineTo(1419,1898);
   dibujo_barbilla.quadraticCurveTo(1000, 1900, 826,1647);
   dibujo_barbilla.quadraticCurveTo(1000, 1900, 1409,1908);
   dibujo_barbilla.fill();

var nariz = document.getElementById("nariz");
var dibujo_nariz = nariz.getContext("2d");

   dibujo_nariz.beginPath();
   dibujo_nariz.fillStyle = "black";

   dibujo_nariz.moveTo(1496,1091);
   dibujo_nariz.quadraticCurveTo(1565, 1095, 1572,1123);
   dibujo_nariz.quadraticCurveTo(1480, 1140, 1391,1144);
   dibujo_nariz.quadraticCurveTo(1300, 1300, 1520,1223);
   dibujo_nariz.quadraticCurveTo(1600, 1190, 1781,1245);
   dibujo_nariz.quadraticCurveTo(1780, 1280, 1637,1296);
   dibujo_nariz.lineTo(1574,1316);
   dibujo_nariz.quadraticCurveTo(1580, 1320, 1522,1347);
   dibujo_nariz.quadraticCurveTo(1480, 1340, 1437,1296);
   dibujo_nariz.quadraticCurveTo(1350, 1310, 1350, 1200);
   dibujo_nariz.quadraticCurveTo(1350, 1110, 1520, 1120);
   dibujo_nariz.fill();


var cejaGrande = document.getElementById("cejaGrande");
var dibujo_cejaG = cejaGrande.getContext("2d");

   dibujo_cejaG.beginPath();
   dibujo_cejaG.fillStyle = "black";

   dibujo_cejaG.moveTo(1461,730);
   dibujo_cejaG.quadraticCurveTo(1465, 815, 1431,828);
   dibujo_cejaG.quadraticCurveTo(1445, 840, 1452,864);
   dibujo_cejaG.quadraticCurveTo(1480, 890, 1396,948);
   dibujo_cejaG.quadraticCurveTo(1350, 940, 1310,860);
   dibujo_cejaG.quadraticCurveTo(1350, 850, 1364,823);
   dibujo_cejaG.quadraticCurveTo(1280, 840, 1117,883);
   dibujo_cejaG.lineTo(1117, 875);
   dibujo_cejaG.quadraticCurveTo(1300, 730, 1461,730);
   dibujo_cejaG.fill();


var parpadoTop = document.getElementById("parpadoTop");
var dibujo_parpadoTop = parpadoTop.getContext("2d");

   dibujo_parpadoTop.beginPath();
   dibujo_parpadoTop.fillStyle = "black";

   dibujo_parpadoTop.moveTo(1289,873);
   dibujo_parpadoTop.quadraticCurveTo(1220, 895, 1189,934);
   dibujo_parpadoTop.lineTo(1158,954);
   dibujo_parpadoTop.lineTo(1158,958);
   dibujo_parpadoTop.quadraticCurveTo(1300, 900, 1292,885);
   dibujo_parpadoTop.fill();

var parpadoBottom = document.getElementById("parpadoBottom");
var dibujo_parpadoBottom = parpadoBottom.getContext("2d");

   dibujo_parpadoBottom.beginPath();
   dibujo_parpadoBottom.fillStyle = "black";

   dibujo_parpadoBottom.moveTo(1335,987);
   dibujo_parpadoBottom.quadraticCurveTo(1320, 1050, 1223,1040);
   dibujo_parpadoBottom.lineTo(1223,1045);
   dibujo_parpadoBottom.quadraticCurveTo(1325, 1060, 1340,991);
   dibujo_parpadoBottom.fill();


var ojo = document.getElementById("ojo");
var dibujo_ojo = ojo.getContext("2d");

   dibujo_ojo.beginPath();
   dibujo_ojo.fillStyle = "black";

   dibujo_ojo.moveTo(1334,918);
   dibujo_ojo.quadraticCurveTo(1320, 950, 1179,969);
   dibujo_ojo.lineTo(1157,1004);
   dibujo_ojo.lineTo(1180,985);
   dibujo_ojo.quadraticCurveTo(1290, 960, 1269,952);
   dibujo_ojo.lineTo(1279,980);
   dibujo_ojo.quadraticCurveTo(1330, 995, 1322,954);
   dibujo_ojo.fill();