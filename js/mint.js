
<!-- saved from url=(0033)http://filamentgroup.com/mint/?js -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=windows-1258"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">var Mint = new Object();
Mint.save = function() 
{
	var now		= new Date();
	var debug	= false; // this is set by php 
	if (window.location.hash == '#Mint:Debug') { debug = true; };
	var path	= 'http://filamentgroup.com/mint/?record&amp;key=36383338336253694461506947726c4254453535343373435731';
	path 		= path.replace(/^https?:/, window.location.protocol);
	
	// Loop through the different plug-ins to assemble the query string
	for (var developer in this) 
	{
		for (var plugin in this[developer]) 
		{
			if (this[developer][plugin] &amp;&amp; this[developer][plugin].onsave) 
			{
				path += this[developer][plugin].onsave();
			};
		};
	};
	// Slap the current time on there to prevent caching on subsequent page views in a few browsers
	path += '&amp;'+now.getTime();
	
	// Redirect to the debug page
	if (debug) { window.open(path+'&amp;debug&amp;errors', 'MintLiveDebug'+now.getTime()); return; };
	
	var ie = /*@cc_on!@*/0;
	if (!ie &amp;&amp; document.getElementsByTagName &amp;&amp; (document.createElementNS || document.createElement))
	{
		var tag = (document.createElementNS) ? document.createElementNS('http://www.w3.org/1999/xhtml', 'script') : document.createElement('script');
		tag.type = 'text/javascript';
		tag.src = path + '&amp;serve_js';
		document.getElementsByTagName('head')[0].appendChild(tag);
	}
	else if (document.write)
	{
		document.write('&lt;' + 'script type="text/javascript" src="' + path + '&amp;amp;serve_js"&gt;&lt;' + '/script&gt;');
	};
};
if (!Mint.SI) { Mint.SI = new Object(); }
Mint.SI.Referrer = 
{
	onsave	: function() 
	{
		var encoded = 0;
		if (typeof Mint_SI_DocumentTitle == 'undefined') { Mint_SI_DocumentTitle = document.title; }
		else { encoded = 1; };
		var referer		= (window.decodeURI)?window.decodeURI(document.referrer):document.referrer;
		var resource	= (window.decodeURI)?window.decodeURI(document.URL):document.URL;
		return '&amp;referer=' + escape(referer) + '&amp;resource=' + escape(resource) + '&amp;resource_title=' + escape(Mint_SI_DocumentTitle) + '&amp;resource_title_encoded=' + encoded;
	}
};
if (!Mint.SI) { Mint.SI = new Object(); }
Mint.SI.UserAgent007 = 
{
	versionHigh			: 16,
	flashVersion		: 0,
	resolution			: '0x0',
	detectFlashVersion	: function () 
	{
		var ua = navigator.userAgent.toLowerCase();
		if (navigator.plugins &amp;&amp; navigator.plugins.length) 
		{
			var p = navigator.plugins['Shockwave Flash'];
			if (typeof p == 'object') 
			{
				for (var i=this.versionHigh; i&gt;=3; i--) 
				{
					if (p.description &amp;&amp; p.description.indexOf(' ' + i + '.') != -1) { this.flashVersion = i; break; }
				}
			}
		}
		else if (ua.indexOf("msie") != -1 &amp;&amp; ua.indexOf("win")!=-1 &amp;&amp; parseInt(navigator.appVersion) &gt;= 4 &amp;&amp; ua.indexOf("16bit")==-1) 
		{
			var vb = '&lt;scr' + 'ipt language="VBScript"\&gt; \nOn Error Resume Next \nDim obFlash \nFor i = ' + this.versionHigh + ' To 3 Step -1 \n   Set obFlash = CreateObject("ShockwaveFlash.ShockwaveFlash." &amp; i) \n   If IsObject(obFlash) Then \n      Mint.SI.UserAgent007.flashVersion = i \n      Exit For \n   End If \nNext \n&lt;'+'/scr' + 'ipt\&gt; \n';
			document.write(vb);
		}
		else if (ua.indexOf("webtv/2.5") != -1) this.flashVersion = 3;
		else if (ua.indexOf("webtv") != -1) this.flashVersion = 2;
		return this.flashVersion;
	},
	onsave				: function() 
	{
		if (this.flashVersion == this.versionHigh) { this.flashVersion = 0; };
		this.resolution = screen.width+'x'+screen.height;
		return '&amp;resolution=' + this.resolution + '&amp;flash_version=' + this.flashVersion;
	}
};
Mint.SI.UserAgent007.detectFlashVersion();
Mint.save();</pre><div id="window-resizer-tooltip"><a href="http://filamentgroup.com/mint/?js#" title="Edit settings" style="background-image: url(chrome-extension://kkelicaakdanhinjdeammmilcgefonfh/images/icon_19.png); "></a><span class="tooltipTitle">Window size: </span><span class="tooltipWidth" id="winWidth"></span> x <span class="tooltipHeight" id="winHeight"></span><br><span class="tooltipTitle">Viewport size: </span><span class="tooltipWidth" id="vpWidth"></span> x <span class="tooltipHeight" id="vpHeight"></span></div></body><link rel="stylesheet" type="text/css" href="data:text/css,"></html>