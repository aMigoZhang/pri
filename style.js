var UA = window.navigator.userAgent,
	IsAndroid = (/Android|HTC/i.test(UA)),
	/* HTC Flyer平板的UA字符串中不包含Android关键词 */
	IsIPad = !IsAndroid && /iPad/i.test(UA),
	IsIPhone = !IsAndroid && /iPod|iPhone/i.test(UA),
	IsIOS = IsIPad || IsIPhone,
	IsWindowsPhone = /Windows Phone/i.test(UA),
	IsIEMobile = /IEMobile/i.test(UA),
	IsIE = !! document.all,
	IsIE6 = IsIE && !window.XMLHttpRequest,
	IsCM = false;
if (typeof android != 'undefined') {
	IsCM = true;
} else {
	var android = {};
}
if (IsIE6) {
	try {
		document.execCommand('BackgroundImageCache', false, true);
	} catch (e) {}
}


function funcEffect() {
	$('#func_effect .box').hover(function() {
		var $info = $(this).find(".info");
		supportCss3('perspective')? $info.addClass("hover"):$info.slideDown()
	}, function() {
		var $info = $(this).find(".info");
		supportCss3('perspective')? $info.removeClass("hover"):$info.slideUp()
	})
}

/** 
 * 判断浏览器是否支持某一个CSS3属性
 * @param {String} 属性名称
 * @return {Boolean} true/false
 */

function supportCss3(style) {
	var prefix = ['webkit', 'Moz', 'ms', 'o'],
		i,
		humpString = [],
		htmlStyle = document.documentElement.style,
		_toHumb = function(string) {
			return string.replace(/-(\w)/g, function($0, $1) {
				return $1.toUpperCase();
			});
		};

	for (i in prefix)
		humpString.push(_toHumb(prefix[i] + '-' + style));

	humpString.push(_toHumb(style));

	for (i in humpString)
		if (humpString[i] in htmlStyle) return true;

	return false;
}

//console.log(supportCss3('perspective'));

$(function() {

	!IsIE6 && funcEffect();

	var pw = new pageSwitch('pg_slider', {
		duration: 600, //int 页面过渡时间
		direction: 0, //int 页面切换方向，0横向，1纵向
		start: 0, //int 默认显示页面
		loop: false, //bool 是否循环切换
		ease: 'ease', //string|function 过渡曲线动画，详见下方说明
		transition: 'scrollCoverReverse', //string|function转场方式，详见下方说明
		mousewheel: false, //bool 是否启用鼠标滚轮切换
		arrowkey: false, //bool 是否启用键盘方向切换
		autoplay: 'auto', //bool 是否自动播放幻灯 新增
		interval: 3000 //bool 幻灯播放时间间隔 新增
	});

	if(loadingimgvar.loading){
	    loadingimgvar.ele=document.getElementById("loading");
        
        if(loadingimgvar.ele!=null){
            loadingimgvar.ele.style.display="none"; 
        }
        
	}

})

