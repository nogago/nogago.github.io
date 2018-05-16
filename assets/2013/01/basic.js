/*var HOST_URL = location.protocol + '//' + location.hostname;
	if (location.port && (location.port.length > 0) && (location.port != 80) && (location.port != 443)) {
    HOST_URL += ':' + location.port;
	}


var SAMPLE_HELLO_WORLD_POST = HOST_URL + '/elevation/v1/getElevationProfile?callback=handleHelloWorldResponse&shapeFormat=raw';
var HELLO_WORLD_CHART = '/elevation/v1/getElevationChart?';
var HELLO_WORLD_PROFILE = '/elevation/v1/getElevationpProfile?callback=handleElevationResponse';*/

var xapiUrl = 'http://www.nogago.com/poi/search?';
var helloWorldUrl = 'http://www.nogago.com/poi/search?n=49.02295071045644&s=48.99761644432117&w=8.37446127942737&e=8.443125830205878&type=amenity-pub';
var perimeterUrl = 'http://www.nogago.com/poi/search?&lon=8.40446&lat=49.01405&perimeter=10000&type=amenity-restaurant';
var advancedOptions = '';


function showHelloWorldURL() {
    var safe = helloWorldUrl;
    document.getElementById('divHelloWorldUrl').innerHTML = safe.replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

function showPerimeterURL() {
    var peri = perimeterUrl;
    document.getElementById('divPerimeterUrl').innerHTML = peri.replace(/</g, '&lt;').replace(/>/g, '&gt;');
};


function showAdvancedURL() {
    var tagType = document.getElementById('tagType').value;
	var tagValue = document.getElementById('tagValue').value;
	var top = document.getElementById('top').value;
	var left = document.getElementById('left').value;
	var right = document.getElementById('right').value;
	var bottom = document.getElementById('bottom').value;
	
	advancedOptions = xapiUrl;
	
	
	if(document.getElementById('checkArea').checked==true) {
		advancedOptions += 'n=' + top + '&' + 's=' + bottom + '&' + 'w=' + left + '&' + 'e=' + right;
	}
	else {
		advancedOptions += '';
	}
	if(document.getElementById('checkTag').checked==true) {
		advancedOptions += tagType;
		advancedOptions += '&type=' + tagValue;
	}
	else {
		advancedOptions += '';
	}
	

	var safe = advancedOptions;
    document.getElementById('divAdvancedUrl').innerHTML = safe.replace(/</g, '&lt;').replace(/>/g, '&gt;');
};


function doHelloWorld() {
	url = helloWorldUrl;
	location.href = url;
}
function doPerimeter() {
	url = perimeterUrl;
	location.href = url;


function doAdvanced() {
	url = advancedOptions;
	location.href = url;
}