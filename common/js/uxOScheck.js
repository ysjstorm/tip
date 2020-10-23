/* Start : Browser & OS Check */
(function(){ // 외부 라이브러리와 충돌을 막고자 모듈화.
    // 브라우저 및 버전을 구하기 위한 변수들.
    'use strict';
    var agent = navigator.userAgent.toLowerCase(),
        name = navigator.appName,
        browser;
    
    // MS 계열 브라우저를 구분하기 위함.
    if(name === 'Microsoft Internet Explorer' || agent.indexOf('trident') > -1 || agent.indexOf('edge/') > -1) {
        browser = 'ie';
        if(name === 'Microsoft Internet Explorer') { // IE old version (IE 10 or Lower)
            agent = /msie ([0-9]{1,}[\.0-9]{0,})/.exec(agent);
            browser += parseInt(agent[1]);
        } else { // IE 11+
            if(agent.indexOf('trident') > -1) { // IE 11 
                browser += 11;
            } else if(agent.indexOf('edge/') > -1) { // Edge
                browser = 'edge';
            }
        }
    } else if(agent.indexOf('safari') > -1) { // Chrome or Safari
        if(agent.indexOf('opr') > -1) { // Opera
            browser = 'opera';
        } else if(agent.indexOf('chrome') > -1) { // Chrome
            browser = 'chrome';
        } else { // Safari
            browser = 'safari';
        }
    } else if(agent.indexOf('firefox') > -1) { // Firefox
        browser = 'firefox';
    }

    
	// IE: ie7~ie11, Edge: edge, Chrome: chrome, Firefox: firefox, Safari: safari, Opera: opera
	document.getElementsByTagName('html')[0].className = browser;
	
	var osAgent = navigator.userAgent.toLowerCase();
	if ( (navigator.appName == 'Netscape' && osAgent.indexOf('trident') != -1) || (osAgent.indexOf("msie") != -1)) {
		 //alert('ie');

	} else {
		//alert('noie');
		getOS();
	}
}());

function getOS() {
	var userAgent = window.navigator.userAgent,
		platform = window.navigator.platform,
		macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
		windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
		iosPlatforms = ['iPhone', 'iPad', 'iPod'],
		os = null;

	if (macosPlatforms.indexOf(platform) !== -1) {
		os = 'Mac OS';
		$('html').addClass('macos');
	} else if (iosPlatforms.indexOf(platform) !== -1) {
		os = 'iOS';
		$('html').addClass('ios');
	} else if (windowsPlatforms.indexOf(platform) !== -1) {
		os = 'Windows';
		$('html').addClass('winos');
	} else if (/Android/.test(userAgent)) {
		os = 'Android';
		$('html').addClass('androidos');
	} else if (!os && /Linux/.test(platform)) {
		os = 'Linux';
		$('html').addClass('linuxos');
	}
	return os;
}

//alert(getOS());

var uxOSCheck = {};
uxOSCheck.check = {
	siteCode : window.LOCALE ? window.LOCALE : '',
	browser : (function () {
		var agent = navigator.userAgent;
		var browserList = { 'ie7' : agent.match(/msie 7.0/i), 
			'ie8' : agent.match(/msie 8.0/i),
			'ie9' : agent.match(/msie 9.0/i), 
			'ie10' : agent.match(/msie 10.0/i),
			'ie11' : agent.match(/rv:11.0/i),
			'edge' : agent.match(/edge/i),
			'chrome' : agent.match(/chrome/i),
			'safari' : agent.match(/safari/i),
			'firefox' : agent.match(/firefox/i),
			'opera' : agent.match(/opera/i) 
		};
		for (prop in browserList) { 
			if (browserList[prop]) { 
				// agent.match();
				return prop; 
			} 
		}
	})(),
	os : (function () { 
		var agent = navigator.userAgent; 
		var osList = { 
			'mac' : agent.match(/macintosh/i),
			'window' : agent.match(/windows/i)
		}; 
		for (prop in osList) { 
			if (osList[prop]) { 
				return prop; 
			} 
		}
	})(),
	ieua : (function () {
		var UA = navigator.userAgent.toLowerCase();
		
		// IE7 에는 브라우저 엔진명인 Trident 가 없고 IE11 에는 MSIE 란 문자열이 없으므로 두 가지 경우를 모두 체크
		if (UA.indexOf('msie') != -1 || UA.indexOf('trident') != -1) {
			
			var version = 11;
			UA = /msie ([0-9]{1,}[\.0-9]{0,})/.exec(UA);
			if (UA) { 
				version = parseInt(UA[1]); 
			}
			var classNames = '';
			// IE 10 이하에 html 클래스를 추가한다.
			if(version <= 11) {
				// IE11 이하에 사용할 ie 공통 클래스도 추가
				classNames += 'ie';
				// 현재 버전 표시를 추가
				classNames += ' ie' + version;
			}
			// IE10이하 에서 lt-ie 버전에 대한 멀티 클래스를 추가
			for (var i = version + 1; i <= 11; i++) { 
				classNames += ' lt-ie' + i; 
			}
			// 위 코드에서 체크한 클래스를 html 태그에 추가한다.
			document.getElementsByTagName('html')[0].className += classNames;
		}

	})()
};
/* End : Browser & OS Check */

// 모바일버전시 PC버전으로 전환
/*
function getCookie(name) {
    var cookies = document.cookie.split(";");
    for(var i=0; i<cookies.length; i++) {
        if(cookies[i].indexOf("=") == -1) {
            if(name == cookies[i])
                return "";
        }
        else {
            var crumb = cookies[i].split("=");
            if(name == crumb[0].trim())
                return unescape(crumb[1].trim());
        }
    }
};

var desktopModeTF = getCookie("DesktopMode");
var Scale = getCookie("DesktopModeScale");
//alert(desktopModeTF);
if (desktopModeTF == "true") {
	document.write('<meta name="viewport" content="width=1044, user-scalable=yes, initial-scale='+Scale+'">');
} else {
	document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=medium-dpi">');
};
*/