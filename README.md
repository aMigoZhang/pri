# <!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6"><![endif]-->
<!--[if IE 7 ]><html class="ie ie7"><![endif]-->
<!--[if IE 8 ]><html class="ie ie8"><![endif]-->
<!--[if IE 9 ]><html class="ie9"><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--><html class="standard"><!--<![endif]-->
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0, minimal-ui" />
<meta name="format-detection" content="email=no" />
<meta name="format-detection" content="address=no" />
<meta name="format-detection" content="telephone=no" />
<title>SnapFace</title>
<meta name="description" content="" />
<meta name="keywords" content="" />

<link rel="stylesheet" href="css/main.css" type="text/css" />

<!--[if lte IE 6]>
<script type="text/javascript" src="/js/belatedPNG.js"></script>
<script type="text/javascript">
  var __IE6=true;
  DD_belatedPNG.fix('#logo a,#header-wrap,#pg_banner .download span');
</script>
<![endif]-->

<script>
var loadingimgvar={
    'num':0,
    'loading':false,
    'ele':''
};

var imglist=[
      "images/pg_store_h.png",
　　　"images/pg_bg.jpg",
      "images/pg_android_no.png",
　　　"images/pg_android.png",
      "images/pg_1.jpg",
      "images/loading.gif"
];


for(var i=0;i<imglist.length;i++)  
{  

    Imagess(imglist[i],i,checkimg);
}  
 

function checkimg() {

    loadingimgvar.num=loadingimgvar.num+1;
    if(loadingimgvar.num==imglist.length){
        loadingimgvar.loading=true;
        loadingimgvar.ele=document.getElementById("mainloading");
        if(loadingimgvar.ele!=null){
            loadingimgvar.ele.style.display="none"; 
        }
            
    }
}

 //判断是否加载完成  
function Imagess(url,i,callback){     
    var val=url;  
    var img=new Image(); 
        img.src=val; 
        if (img.complete) { 
         callback();
        return; 
     }
     img.onload = function () { 
          callback();
     };
    
} 

</script>
</head>
<body class="bodyPG">
<div id="mainloading"></div>
<div id="wrap">
    <div id="header-fixed">
            <div id="header-wrap">
                <div id="header" class="content clear">
                    <h1 id="logo">
                        <a href="/" title="SnapFace" rel="home">snapface</a>
                    </h1>
                </div>
            </div>
    </div>
    <div id="container-wrap">
        <div class="section">
            <div class="bannerBG" id="bannerBG"><img src="images/pg_bg.jpg" /></div>
            <div id="pg_banner" class="content">
            	<div class="title flyTop clear">
            		<div class="icon"></div><h2>SnapFace: The Best MiTo Collage  Maker.</h2>
                </div>
                <div class="download flyBottom clear">
                	<a href="javascript:;" class="googlePlay" target="_blank" ><span>google play</span></a>
                </div>
                <div class="mobile flyRight">
                    <div id="pg_slider">
                        <img src="images/pg_1.jpg" />
                        <img src="images/pg_2.jpg" />
                        <img src="images/pg_3.jpg" />
                        <img src="images/pg_4.jpg" />
                    </div>
                </div>
            </div>
            <div id="pg_features">
            	<div class="content clear">
                	<img src="images/pg_f.jpg" />
                    <h3>Features</h3>
                    <ul>
                    	<li>The best collage maker for Instagram, facebook and more.</li>
                        <li>Pin moments to a customized board.</li>
                        <li>Stylize your shots with perfectly categorized filter effects.</li>
                        <li>Delete unsatisfied photos in the gallery of snapface directly!</li>
                        <li>Snapface combines multiple photos with classical and funny layouts into a beautiful picture.</li>
                    </ul>
                </div>
            </div>
            <div id="func_effect">
            	<div class="content clear">
                	<h3>Popular Functions</h3>
                    <p>Create unique effects with any combination of stunning photographs by using snapface's easy to follow steps. Completely free!</p>
            		<div class="effects">
                    	<div class="box">
                        	<div class="cn">
                                <span class="effects-icon-1"></span>
                                <strong>Filters</strong><br/>
                                8＋ Beautiful Filters
                            </div>
                            <div class="info"><table><td>Add one of over 8 filter effects to turn your collages especially, selfie, vintage, scenery, halo，black and white, festival atmosphere and more.</td></table></div>
                        </div>
                        <div class="box">
                        	<div class="cn">
                                <span class="effects-icon-2"></span>
                                <strong>Templates</strong><br/>
                                100+ Layout Templates<br/>
                            </div>
                            <div class="info"><table><td>The best and easiest way to make collage with snapface, making your pics more colorful.</td></table></div>
                        </div>
                        <div class="box">
                        	<div class="cn">
                                <span class="effects-icon-3"></span>
                                <strong>Adjust</strong><br/>
                                Adjust as You Want
                            </div>
                            <div class="info"><table><td>Ability to crop, adjust of your photo size and ratio to make them picture perfect.</td></table></div>
                        </div>
                        <!--<div class="box box-none">
                        	Stay tuned for more
                        </div>-->
                    </div>
                </div>
            </div>
       </div>
    </div>

    <div id="footer-wrap">
            <div id="footer" class="content">
                <span class="foot-copy"><a href="privacy.html">Privacy Policy</a>&nbsp;<em>|</em>&nbsp; &copy; 2015</span>
            </div>
    </div>

</div>


<script src="js/jquery.js"></script>
<script src="js/pageSwitch.js"></script>
<script src="js/style.js"></script>
</body>
</html>
SnapFace
