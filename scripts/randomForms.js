let forms = [
	{
		bigTriangles: [{
			x: 71,
			y: 473,
			rotation: 0
		}, {
			x: 127,
			y: 426,
			rotation: 3.1415926535897896
		}],
		mediumTriangle: [{
			x: 141,
			y: 288,
			rotation: -3.1415926535897896
		}],
		smallTriangles: [{
			x: 51,
			y: 270,
			rotation: 7.105427357601002e-15
		}, {
			x: 49,
			y: 349,
			rotation: 0
		}],
		diamond: [{
			x: 139,
			y: 213,
			rotation: 0
		}],
		parallelogram: [{
			x: 105,
			y: 336,
			rotation: 0.7853981633974474
		}]
	},
	{ //1 "square"
		bigTriangles: [{
			x: 526.9966329107444,
			y: 255.00336708925528,
			rotation: -0.7853981633974474
		}, {
			x: 461,
			y: 321,
			rotation: -2.3561944901923493
		}],
		mediumTriangle: [{
			x: 592.9915822768611,
			y: 386.9999999999998,
			rotation: -1.5707963267948948
		}],
		smallTriangles: [{
			x: 526.6582489435277,
			y: 353.9983164553721,
			rotation: 2.3561944901923493
		}, {
			x: 609.492424049175,
			y: 271.5025253169415,
			rotation: 0.7853981633974474
		}],
		diamond: [{
			x: 576.4941075938027,
			y: 320.99999999999966,
			rotation: 0.7853981633974474
		}],
		parallelogram: [{
			x: 501.9941075938027,
			y: 395.497474683058,
			rotation: 0
		}]
	},
	{ //2 "piramid"
		bigTriangles: [{
			x: 600.0101012677667,
			y: 424.00000000000057,
			rotation: 2.356194490192342
		}, {
			x: 798,
			y: 424,
			rotation: 2.356194490192342
		}],
		mediumTriangle: [{
			x: 732.5075759508252,
			y: 324.5008417723141,
			rotation: 0
		}],
		smallTriangles: [{
			x: 683.0084177231388,
			y: 307.99831645537233,
			rotation: 0.7853981633974545
		}, {
			x: 699.0050506338835,
			y: 424.0000000000003,
			rotation: -0.7853981633974474
		}],
		diamond: [{
			x: 649.6767679344334,
			y: 357.5008417723142,
			rotation: 0.7853981633974474
		}],
		parallelogram: [{
			x: 724.0075759508252,
			y: 382.5008417723141,
			rotation: 0
		}]
	},
	{ //29 "candle"
		bigTriangles: [{
			x: 612.6666666666666,
			y: 442.33164978870553,
			rotation: 0
		}, {
			x: 799.333333333333,
			y: 442.3316497887051,
			rotation: -1.5707963267949019
		}],
		mediumTriangle: [{
			x: 706.5025253169417,
			y: 322.83179421400166,
			rotation: -0.7853981633974474
		}],
		smallTriangles: [{
			x: 707,
			y: 506,
			rotation: -0.7853981633974403
		}, {
			x: 706,
			y: 456,
			rotation: -0.7853981633974474
		}],
		diamond: [{
			x: 706.5025253169417,
			y: 404.50084177231383,
			rotation: 0
		}],
		parallelogram: [{
			x: 700,
			y: 223,
			rotation: 1.832595714594044
		}]
	},
	{ // 87 "ss"
		bigTriangles: [{
			x: 688.6666666666667,
			y: 372.9966329107448,
			rotation: -0.7853981633974474
		}, {
			x: 788,
			y: 307,
			rotation: 2.356194490192342
		}],
		mediumTriangle: [{
			x: 540.174242617492,
			y: 243.831794214002,
			rotation: -0.7853981633974403
		}],
		smallTriangles: [{
			x: 646,
			y: 467,
			rotation: -1.5707963267948877
		}, {
			x: 598,
			y: 418,
			rotation: -1.5707963267948948
		}],
		diamond: [{
			x: 589.6717173005501,
			y: 290.5008417723141,
			rotation: 0.7853981633974474
		}],
		parallelogram: [{
			x: 664.1717173005501,
			y: 314.9983164553725,
			rotation: 0
		}]
	},
	{ //128 "rocket"
		bigTriangles: [{
			x: 683,
			y: 252,
			rotation: 2.356194490192342
		}, {
			x: 757,
			y: 212,
			rotation: -3.1415926535897896
		}],
		mediumTriangle: [{
			x: 666.3282826994503,
			y: 367.9983164553722,
			rotation: 1.5707963267948948
		}],
		smallTriangles: [{
			x: 632.9949493661172,
			y: 302.0000000000003,
			rotation: -0.7853981633974403
		}, {
			x: 616.495791138431,
			y: 384.49579113843083,
			rotation: 0.7853981633974474
		}],
		diamond: [{
			x: 583.4974746830587,
			y: 334.99831645537256,
			rotation: 0.7853981633974474
		}],
		parallelogram: [{
			x: 707.4949493661169,
			y: 309.9983164553722,
			rotation: 3.1415926535897896
		}]
	}
];

let shapeManager={};

shapeManager.randomShape = function(){
	return forms[Math.floor(Math.random() * (forms.length-1))+1];
}

shapeManager.getShape = function(idx){
	return forms[idx];
}

shapeManager.menuShape = function(){
	return shapeManager.getShape(0);
}


export default shapeManager;