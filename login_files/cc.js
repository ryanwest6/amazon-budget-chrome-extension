try{(function(){var U,V,W,X,Y,Z,$,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la,ma;function l(a,b){try{var c=Array.prototype.slice.call(arguments);if(v){var d=new Date;a.apply(null,c.slice(2));v.apply(null,[b,(new Date).getTime()-d.getTime()])}else a.apply(null,c.slice(2))}catch(e){k(e)}}function K(a){A-=1;na();g.methods&w&&a&&(x(s),n=y(B))}function na(){return 0==A&&L?(s&&s.apply(null,[]),g.methods&oa||(s=null),!0):!1}function C(a,b){var c=!1;setTimeout(function(){c||(c=!0,K(!1))},pa);try{A+=1;var d=Array.prototype.slice.call(arguments),
e=v?[function(){var a=new Date;return function(d){v.apply(null,[b,(new Date).getTime()-a.getTime()]);c||(c=!0,K(d))}},f]:[function(){return function(a){c||(c=!0,K(a))}},f];e.push(d.slice(2));a.apply(null,e)}catch(h){k(h)}}function Ia(a){function b(){if(c>=a.length)return!1;var b=h(c),b=(254>>>d&b)<<d,b=b>>1;d+=7;if(8>d)return b;d-=8;c++;if(c>=a.length)return b;var e=h(c),e=65280>>>d&e&255,e=e>>8-d;return b|e}for(var c=0,d=0,e=[],h=("string"==typeof a?ra:Ja)==ra?function(b){return a.codePointAt(b)}:
function(b){return a[b]};;){var t=b();if(!1===t)break;var m=Ka.indexOf(t);if(-1!=m){var f=b(),g=194,k=128;!1===f?(g|=(7&Ma)<<2,f=t):g|=(7&m)<<2;g|=0<(f&64)?1:0;k|=f&63;e.push(g);e.push(k)}else e.push(t)}return e}function sa(a){try{for(var b="",c=[89,231,225,55],d=0;d<a.length;d++)b+=String.fromCharCode(a.charCodeAt(d)^c[d%c.length]);return b}catch(e){return k(e),""}}function ta(){0<Object.keys(r.bfd).length?f("bfd",r.bfd):"";if(g.methods&Na){for(var a="",b=Ia(sa(unescape(encodeURIComponent(JSON.stringify(n))))),
c=0;c<b.length;c++)a+=String.fromCharCode(b[c]);return"x9x91"+a}return ua.encode(sa(JSON.stringify(n)))}function D(a,b,c){"add"===c?window.addEventListener?window.addEventListener(a,b):window.attachEvent?window.attachEvent(a,b):"":"rm"===c&&(window.removeEventListener?window.removeEventListener(a,b):window.detachEvent?window.detachEvent(a,b):"")}function Oa(){r.bfd.mousemove=[];D("mousemove",va,"add")}function Pa(){r.bfd.keydown=[];D("keydown",wa,"add")}function Qa(){r.bfd.click=[];addEventListener("click",
xa,"add")}function x(a){try{var b=null;try{b=document.createElement('\x3ciframe name\x3d"'+encodeURIComponent(u)+"-"+z+'"/\x3e')}catch(c){b=document.createElement("iframe"),b.name=encodeURIComponent(u+"-"+z),k(c)}b.id=encodeURIComponent(u)+"-"+z;b.width="0";b.height="0";b.style.display="none";b.border="0";document.body.appendChild(b);var d=b.contentDocument||b.contentWindow.document;d.open();d.write("\x3chtml\x3e\x3cbody\x3e\x3c/body\x3e\x3c/html\x3e");d.close();var e=[];e.push("t\x3d"+encodeURIComponent(u));
e.push("x\x3d"+encodeURIComponent(z));for(var h in E)e.push(h+"\x3d"+encodeURIComponent(E[h]));var f=d.createElement("form");f.enctype="multipart/form-data";f.method="POST";f.action=F+"/s2?"+e.join("\x26");f.acceptCharset="UTF-8";f.target=b.id;z+=1;var m=d.createElement("input");m.name="_f";m.type="hidden";m.value=ta();f.appendChild(m);d.body.appendChild(f);d=function(){a()};b.attachEvent?b.attachEvent("onload",d):b.addEventListener?b.addEventListener("load",d,!1):b.onload=d;f.submit()}catch(g){a(g),
k(g)}}function y(a){var b;if(null==a||"object"!=typeof a)return a;if(a instanceof Date)return b=new Date,b.setTime(a.getTime()),b;if(a instanceof Array){b=[];for(var c=0,d=a.length;c<d;c++)b[c]=y(a[c]);return b}if(a instanceof Object){b={};for(c in a)a.hasOwnProperty(c)&&(b[c]=y(a[c]));return b}throw Error("Unable to copy obj! Its type isn't supported.");}function Ra(a,b,c){if(a||b||c){r.bfd.hvunits=[];var d=document.createElement("div");d.setAttribute("id","restest");d.setAttribute("style","width: 0.5cm; height: 0.5cm; padding: 0px");
document.body.appendChild(d);var d=document.getElementById("restest").offsetWidth,e=document.getElementById("restest").offsetHeight;r.bfd.hvunits.push({hunit:d,vunit:e})}else"";a?l(Oa,W):"";b?l(Pa,V):"";c?l(Qa,U):""}function M(a,b){try{String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});for(var c=b.split(","),d=0;d<c.length;d++)for(var e=c[d].trim(),h=a,t=e.split("."),m=0;m<t.length;m++)if(0!=m){var g=h[t[m]];if(g)m==t.length-1?f(e,g.toString()):h=g;else break}}catch(H){k(H)}}
function Sa(){var a=document.createElement("canvas");if(a){var b=null;try{b=a.getContext("webgl")||a.getContext("experimental-webgl")||a.getContext("moz-webgl")||a.getContext("webkit-3d")}catch(c){k("failed to get webgl context: "+c);return}if(b){f("webgl-supported",!0);f("webgl-extensions",b.getSupportedExtensions());try{var d=b.getExtension("EXT_texture_filter_anisotropic")||b.getExtension("MOZ_EXT_texture_filter_anisotropic")||b.getExtension("WEBKIT_EXT_texture_filter_anisotropic");d?f("webgl-max-aa",
b.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)):f("webgl-max-aa",null)}catch(e){k(e)}try{f("webgl-version",b.getParameter(b.VERSION)),f("webgl-glsl-version",b.getParameter(b.SHADING_LANGUAGE_VERSION)),f("webgl-vendor",b.getParameter(b.VENDOR)),f("webgl-renderer",b.getParameter(b.RENDERER))}catch(h){k(h)}try{b.getExtension("WEBGL_debug_renderer_info"),f("webgl-vendor-real",b.getParameter(37445)),f("webgl-renderer-real",b.getParameter(37446))}catch(g){k(g)}}else f("webgl-supported",!1)}else k("canvas not available for webgl")}
function Ta(a){var b=a(),c={iceServers:[{url:"stun:stun.l.google.com:19302"}]},d,e=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection;if(e){var h=function(a){},g=[];(function(){d=new e(c);d.onicecandidate=function(a){a.candidate&&g.push(a.candidate);if("complete"==d.iceGatheringState){a={};for(var c=0;c<g.length;c++)try{var e=g[c].candidate.split(" ");8<=e.length&&(e[4]in a||(a[e[4]]={type:e[7]}))}catch(h){}f("webrtc-addrs",a);f("webrtc-sdp",d.localDescription.sdp);
b(!0)}};d.createDataChannel("",{reliable:!1});d.createOffer(function(a){d.setLocalDescription(a,function(a){},h)},h)})()}else k("webrtc not supported")}function Ua(a){var b=document.createElement("canvas");if(!b)return null;b.width=999;if(!b.getContext)return null;b=b.getContext("2d");if(!b)return null;b.font="100pt Arial";b.textBaseline="top";return b.measureText(a).width}function Va(){for(var a=[100],b=0;b<a.length;b++){var c="AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789",d=a[b],
e=document.createElement("canvas");if(e&&(Ua(c),e.getContext)){var h=e.getContext("2d");h&&(e.width=999,h.font=d+"pt Arial",h.textBaseline="top",h.fillText(c,2,2),e.toDataURL(),c=I.algo.SHA1.create(),c.update(e.toDataURL().toString()),f("canvas-print-"+d+"-999",c.finalize().toString(I.enc.Hex)))}}}function Wa(a){if(null==document.cookie)return null;var b=document.cookie.split(";");String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});for(var c=0;c<b.length;c++){var d=
b[c].split("\x3d");if(2<=d.length&&d[0].trim()==a)return decodeURIComponent(d[1])}return null}function Xa(){var a=Wa("_cc");null==a&&(f("fresh-cookie","true"),a=encodeURIComponent(u));var b=new Date;b.setTime(b.getTime()+31536E6);document.cookie="_cc\x3d"+a+";expires\x3d"+b+";path\x3d/";f("cookie-_cc",a)}function Ya(){var a=null;try{a=new ActiveXObject("AcroPDF.PDF")}catch(b){k(b)}if(!a)try{a=new ActiveXObject("PDF.PdfCtrl")}catch(c){k(c);return}a&&(isInstalled=!0,version=a.GetVersions(),f("msie-plugin-pdf",
version))}function Za(){var a=null;try{a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(b){k(b);return}a&&f("msie-plugin-flash",a.GetVariable("$version"))}function $a(){var a=null;try{a=new ActiveXObject("WMPlayer.OCX")}catch(b){k(b);return}a&&f("msie-plugin-wmplayer",a.versionInfo)}function ab(){for(var a=["rmocx.RealPlayer G2 Control","rmocx.RealPlayer G2 Control.1","RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)","RealVideo.RealVideo(tm) ActiveX Control (32-bit)","RealPlayer"],b=
null,c=0;c<a.length;c++){try{b=new ActiveXObject(a[c])}catch(d){k(d);continue}if(b)break}b&&f("msie-plugin-realplayer",b.GetVersionInfo())}function bb(){var a=null;try{a=new ActiveXObject("SWCtl.SWCtl")}catch(b){k(b);return}a&&f("msie-plugin-shockwave",a.ShockwaveVersion("").split("r"))}function cb(){new ActiveXObject("AgControl.AgControl")&&f("msie-plugin-silverlight",!0)}function db(){navigator.javaEnabled()&&f("msie-plugin-java","true")}function eb(){for(var a=["DevalVRXCtrl.DevalVRXCtrl","DevalVRXCtrl.DevalVRXCtrl.1"],
b=0;b<a.length;b++)new ActiveXObject(a[b])&&f("msie-plugin-devalvr-"+a[b],!0)}function fb(){(new ActiveXObject("SharePoint.OpenDocuments.5")||new ActiveXObject("SharePoint.OpenDocuments"))&&f("msie-plugin-sharepoint",!0)}function gb(){var a=[Ya,$a,Za,ab,bb,db,cb,eb,fb];if(window.ActiveXObject||"Microsoft Internet Explorer"==navigator.appName||"Netscape"==navigator.appName&&null!=/Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent))for(var b=0;b<a.length;b++)try{a[b].apply(null,[])}catch(c){k(c)}}
function hb(a){var b=a();a=document.createElement("script");a.type="text/javascript";a.async=!0;a.src=F+"/et.js";var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(a,c);window[collectorNamespaceName]._cc.et=function(a){f("_et",a);b(!0)}}function ib(a){var b=a();try{var c="undefined"==typeof navigator.plugins||0==navigator.plugins.length?!!new ActiveXObject("ShockwaveFlash.ShockwaveFlash"):navigator.plugins["Shockwave Flash"];f("flash-installed",null==c?"false":"true")}catch(d){k(d)}if(0==
(g.methods&ya)&&0==(g.methods&za)&&0==(g.methods&Aa))b(!1);else{a=document;c=[];c.push("t\x3d"+encodeURIComponent(u));c.push("cm\x3d"+encodeURIComponent(g.methods));for(var e in E)c.push(e+"\x3d"+encodeURIComponent(E[e]));e=!1;navigator.userAgent&&-1!=navigator.userAgent.indexOf("MSIE ")&&(e=!0);var h=a.createElement("div");h.innerHTML="\x3cobject type\x3d'application/x-shockwave-flash' id\x3d'cc_swf' "+(e?"":"data\x3d'"+F+"/s.swf?"+c.join("\x26")+"' ")+(e?"classid\x3d'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'":
"")+"\x3e\x3cparam name\x3d'allowScriptAccess' value\x3d'always'\x3e"+(e?"\x3cparam name\x3d'movie' value\x3d'"+F+"/s.swf?"+c.join("\x26")+"'/\x3e":"")+"\x3c/object\x3e";e=h.firstChild;e.setAttribute("style","position: absolute; top: -9999px; left: -9999px;");e.setAttribute("width","1");e.setAttribute("height","1");h=a.createElement("param");h.setAttribute("FlashVars",c.join("\x26"));e.appendChild(h);window._fli=function(a){try{f("flash-ip",a),b(!0)}catch(c){b(!1)}};window._sft=function(a){try{f("flash-tag",
a),f("flash-enabled","true"),b(!0)}catch(c){b(!1)}};window._gfl=function(a){try{for(var c=0;c<a.length;c++)f("flash-font-"+a[c],"true");b(!0)}catch(d){b(!1)}};a.body.appendChild(e)}}function Ba(a,b){if(a){var c=a.getItem(N);c||a.setItem(N,u);(c=a.getItem(N))&&f(b,c)}}function jb(){Ba(localStorage,"dom-local-tag")}function kb(){Ba(sessionStorage,"dom-session-tag")}function lb(){var a=new Date,b=a.getTimezoneOffset();f("time-unix-epoch-ms",a.getTime());f("time-local",a.toLocaleString());f("time-string",
a.toString());f("time-tz-offset-minutes",b);var c=new Date(a.getFullYear(),0,1),d=new Date(a.getFullYear(),6,1),e=c.getTimezoneOffset()!=d.getTimezoneOffset();f("time-tz-has-dst",e?"true":"false");var h=!1;e&&a.getTimezoneOffset()==d.getTimezoneOffset()&&(h=!0);f("time-tz-dst-active",h?"true":"false");a=b;h&&(c=d.getTimezoneOffset()-c.getTimezoneOffset(),a=b-c);f("time-tz-std-offset",a);b=new Date(2014,2,6);b.setHours(7);b.setMinutes(58);b.setSeconds(39);f("time-tz-fixed-locale-string",b.toLocaleString())}
function mb(a){var b=null;try{var c=document.createElement('\x3cobject id\x3d"dialogHelperId" classid\x3d"clsid:3050f819-98b5-11cf-bb82-00aa00bdce0b" width\x3d"0" height\x3d"0"\x3e\x3c/object\x3e');document.body.appendChild(c);setTimeout(function(){b=a();var d=document.getElementById("dialogHelperId");if(d&&d.fonts){for(var h=1;h<=d.fonts.count;h++)f("ie-font-"+d.fonts(h),"true");b(!0)}else b(!1);document.body.removeChild(c)},500)}catch(d){null==b&&(b=a()),b(!1),k(d)}}function nb(){try{for(var a=
(new ob).detect(Ca),b=0;b<a.length;b++)try{f("font-"+Ca[b],a[b])}catch(c){k(c)}}catch(d){k(d)}}function pb(){if(navigator.plugins){for(var a={},b={},c=0;c<navigator.plugins.length;c++){var d=navigator.plugins[c];d.filename&&d.name&&f("plugin-"+d.name+"-filename",d.filename);d.description&&d.name&&f("plugin-"+d.name+"-desc",d.description);for(var e=0;e<d.length;e++)if(d[e].type&&(b[d[e].type]=!0),d[e].suffixes){var h=d[e].suffixes.split(",");if(h&&0<h.length)for(var g=0;g<h.length;g++)a[h[g]]=!0}}f("plugin-suffixes",
Da(a).join(","));f("plugin-mimes",Da(b).join(","))}}function Da(a){var b=[],c;for(c in a)b.push(c);return b.sort()}function f(a,b,c,d){O&&O.apply(null,[a,b]);n[a]=b}function Ea(a){try{var b=qb[a[0]];b&&b.apply(null,a.slice(1))}catch(c){k(c)}}function k(a){try{"js-errors"in n||(n["js-errors"]=[]),n["js-errors"].push(a.toString())}catch(b){}}var ya=8,za=1024,Aa=8192,oa=32768,w=2097152,Na=33554432,N="_cc_ck",qb={run:function(a){F=a;G="AbGvePseAVLWKyQHWAoXvq/CYxKCxmpBvPEIsXIsKTJoyjTJI34CFwyWtblk2KHI+hqJ2dkcoED76ulBv1W7DVphsVOiDS9HCg0OVzSlD+qiUVmMXs2tqW5pClxXBvtiPWF85RMs6+Y3qOx6ZPh2Z6veCcIQRvRr3TiHo4eJxsTwxdj4BKunROoGyF1sk+0myLg3e/dxGRP2xMrvuSCjkLaRXo1smmAuLsTfiRcA7nPLDdHUFDgw0IHW+23lTMAULePuVNq1ZZwGY7Dwp1yLZ/zs1uxj1Scwb2fcicMFThkBdcu4KIEB6C5qR2/bnE+3a7JqHEK0h/ZoE7RqiUe19Hp3CQM9NY10CQW1Howa5dBabGQ=";u=24<G.length?G.substring(0,24):G;f("_t",
G);g.methods&1048576&&f("cdfr",!0);g.methods&w&&f("cidfr",!0);g.methods&67108864&&f("csap",!0);var b=s;s=function(){g.methods&oa?b&&b():g.methods&w||x(function(a){b&&b();L=!1})};var c=v;v=function(a,b){try{f("timing-"+a,b)}catch(d){k(d)}c&&c.apply(null,[a,b])};B=y(n);for(a=0;a<P.length;a++)C(P[a],ma);(g.methods&Aa||g.methods&za||g.methods&ya)&&C(ib,ba);g.methods&524288&&C(hb,X);g.methods&131072&&C(Ta,Z);g.methods&4096&&l(Xa,ca);g.methods&2&&l(lb,la);g.methods&1&&l(jb,fa);g.methods&512&&l(kb,ea);g.methods&
w&&(x(s),n=y(B));var d=function(){g.methods&16&&l(pb,ka);g.methods&2048&&l(gb,da);g.methods&65536&&l(Va,$);g.methods&256&&(C(mb,aa),l(nb,ga));g.methods&262144&&l(Sa,Y);g.methods&w?(x(s),n=y(B)):(L=!0,na())};a=function(){g.methods&32&&l(M,ja,navigator,"navigator.appVersion,navigator.buildid,navigator.appName,navigator.buildID,navigator.product,navigator.platform,navigator.appMinorVersion,navigator.language,navigator.oscpu,navigator.cpuClass,navigator.userAgent,navigator.systemLanguage,navigator.cookieEnabled,navigator.browserLanguage,navigator.msPointerEnabled,navigator.msManipulationViewsEnabled,navigator.userLanguage,navigator.appCodeName,navigator.vendor,navigator.productSub");
g.methods&64&&l(M,ia,window,"window.clientInformation.language,window.doNotTrack,window.screen.pixeldepth,window.history.length,window.devicePixelRatio,window.screen.height,window.screen.width");g.methods&128&&l(M,ha,document,"document.width");g.methods&w?(x(s),n=y(B),setTimeout(d,50)):d()};g.methods&w?setTimeout(a,50):a();Ra(g.methods&4194304,g.methods&8388608,g.methods&16777216)},cf:function(a){g.methods=a},sr:function(a){O=a},srt:function(a){v=a},sf:function(a){s=a},st:function(a){pa=a},cac:function(a){P.push(a)},
ci:function(a){E=a;for(var b in a)n[b]=a[b]},cag:function(a){x(a)},csd:x,cfp:function(a){a(ta())},crdi:function(a){n.crdi=!0;var b=function(b){try{var d=JSON.parse(b.data);d&&(d.dp||d.drg)&&a(d)}catch(e){}};window.attachEvent?window.attachEvent("onmessage",b):window.addEventListener&&window.addEventListener("message",b)},bfdc:function(a){Fa=a[0];Ga=a[1];J=a[2]}},g={methods:999419},O=null,v=null,s=null,pa=2E3,n={},L=!1,r={bfd:{}},Fa=2,Ga=300,J=11,P=[],E={},G="",u="",F="",Ca="Times New Roman CYR;Arial CYR;Courier New CYR;\u5b8b\u4f53;Arial Cyr;Times New Roman Cyr;Courier New Cyr;\u534e\u6587\u7ec6\u9ed1;\u5137\u9ed1 Pro;WP CyrillicB;WP CyrillicA;\uad81\uc11c\uccb4;\u7d30\u660e\u9ad4;\u5c0f\u585a\u660e\u671d Pr6N B;\u5b8b\u4f53-PUA;\u65b9\u6b63\u6d41\u884c\u4f53\u7e41\u4f53;\u6c49\u4eea\u5a03\u5a03\u7bc6\u7b80;\ub3cb\uc6c0;GaramondNo4CyrTCYLig;HelveticaInseratCyr Upright;HelveticaCyr Upright;TL Help Cyrillic;\uac00\ub294\uc548\uc0c1\uc218\uccb4;TLCyrillic2;AGRevueCyr-Roman;AGOptimaCyr;HelveticaInseratCyrillicUpright;HelveticaCyrillicUpright;HelveticaCyrillic;CyrillicRibbon;CyrillicHover;\u6587\u9f0e\uff30\uff2f\uff30\uff0d\uff14;\u65b9\u6b63\u4e2d\u5029\u7b80\u4f53;\u521b\u827a\u7b80\u4e2d\u5706;Zrnic Cyr;Zipper1 Cyr;Xorx_windy Cyr;Xorx_Toothy Cyr;\uc18c\uc57c\uc1949;\u0426\u0432\u0435\u0442\u043d\u044b\u0435 \u044d\u043c\u043e\u0434\u0437\u0438 Apple;Chinese Generic1;Korean Generic1;Bullets 5(Korean);UkrainianFuturisExtra;VNI-Viettay;UkrainianCompact;UkrainianBrushScript;TiffanyUkraine;Baltica_Russian-ITV;Vietnamese font;Unicorn Ukrainian;UkrainianTimesET;UkrainianCourier;Tiff-HeavyUkraine;\u4875\u6e67\u4c61\u6e20\u4172\u7464\u6573\u6967\u6e20\u3230\u3032\u202d\u2041\u6c6c\u2072\u6967\u6874\u7320\u7265\u7365\u7276\u6564\u2e54\u6875\u2070\u6861\u7020\u564e\u5468\u7566\u6170\u3032\u2020\u4e6f\u726d\u616c\u312e\u3020\u436f\u6465\u2056\u4e49\u2066\u6f72\u2057\u696e\u646f\u7773\u5468\u7566\u6170\u3032\u4e6f\u726d\u616cHungLan Artdesign - http://www.vietcomic.comVNI-Thufap2  Normalv2.0 Code VNI for WindowsVNI-Thufap2 Normal\u0002;Vietnam;Bwviet;Soviet;Soviet Expanded;Soviet Bold;Russian;UVN Han Viet;UkrainianAcademy;Symbol;Verdana;Webdings;Arial;Georgia;Courier New;Trebuchet MS;Times New Roman;Impact;Comic Sans MS;Wingdings;Tahoma;Microsoft Sans Serif;Arial Black;Plantagenet Cherokee;Arial Narrow;Wingdings 2;Wingdings 3;Arial Unicode MS;Papyrus;Calibri;Cambria;Consolas;Candara;Franklin Gothic Medium;Corbel;Constantia;Marlett;Lucida Console;Lucida Sans Unicode;MS Mincho;Arial Rounded MT Bold;Palatino Linotype;Batang;MS Gothic;PMingLiU;SimSun;MS PGothic;MS PMincho;Gulim;Cambria Math;Garamond;Bookman Old Style;Book Antiqua;Century Gothic;Monotype Corsiva;Courier;Meiryo;Century;MT Extra;MS Reference Sans Serif;MS Reference Specialty;Mistral;Bookshelf Symbol 7;Lucida Bright;Cooper Black;Modern No. 20;Bernard MT Condensed;Bell MT;Baskerville Old Face;Bauhaus 93;Britannic Bold;Wide Latin;Playbill;Harrington;Onyx;Footlight MT Light;Stencil;Colonna MT;Matura MT Script Capitals;Copperplate Gothic Bold;Copperplate Gothic Light;Edwardian Script ITC;Rockwell;Curlz MT;Engravers MT;Rockwell Extra Bold;Haettenschweiler;MingLiU;Mongolian Baiti;Microsoft Yi Baiti;Microsoft Himalaya;SimHei;SimSun-ExtB;PMingLiU-ExtB;MingLiU-ExtB;MingLiU_HKSCS-ExtB;MingLiU_HKSCS;Gabriola;Goudy Old Style;Calisto MT;Imprint MT Shadow;Gill Sans Ultra Bold;Century Schoolbook;Gloucester MT Extra Condensed;Perpetua;Franklin Gothic Book;Brush Script MT;Microsoft Tai Le;Gill Sans MT;Tw Cen MT;Lucida Handwriting;Lucida Sans;Segoe UI;Lucida Fax;MV Boli;Sylfaen;Estrangelo Edessa;Mangal;Gautami;Tunga;Shruti;Raavi;Latha;Lucida Calligraphy;Lucida Sans Typewriter;Kartika;Vrinda;Perpetua Titling MT;Cordia New;Angsana New;IrisUPC;CordiaUPC;FreesiaUPC;Miriam;Traditional Arabic;Miriam Fixed;JasmineUPC;KodchiangUPC;LilyUPC;Levenim MT;EucrosiaUPC;DilleniaUPC;Rod;Narkisim;FrankRuehl;David;Andalus;Browallia New;AngsanaUPC;BrowalliaUPC;MS UI Gothic;Aharoni;Simplified Arabic Fixed;Simplified Arabic;GulimChe;Dotum;DotumChe;GungsuhChe;Gungsuh;BatangChe;Meiryo UI;NSimSun;Segoe Script;Segoe Print;DaunPenh;Kalinga;Iskoola Pota;Euphemia;DokChampa;Nyala;MoolBoran;Leelawadee;Gisha;Microsoft Uighur;Arabic Typesetting;Malgun Gothic;Microsoft JhengHei;DFKai-SB;Microsoft YaHei;FangSong;KaiTi;Helvetica;Segoe UI Light;Segoe UI Semibold;Andale Mono;Palatino;Geneva;Monaco;Lucida Grande;Gill Sans;Helvetica Neue;Baskerville;Hoefler Text;Thonburi;Herculanum;Apple Chancery;Didot;Zapf Dingbats;Apple Symbols;Copperplate;American Typewriter;Zapfino;Cochin;Chalkboard;Sathu;Osaka;BiauKai;Segoe UI Symbol;Aparajita;Krungthep;Ebrima;Silom;Kokila;Shonar Bangla;Sakkal Majalla;Microsoft PhagsPa;Microsoft New Tai Lue;Khmer UI;Vijaya;Utsaah;Charcoal CY;Ayuthaya;InaiMathi;Euphemia UCAS;Vani;Lao UI;GB18030 Bitmap;KufiStandardGK;Geeza Pro;Chalkduster;Tempus Sans ITC;Kristen ITC;Apple Braille;Juice ITC;STHeiti;LiHei Pro;DecoType Naskh;New Peninim MT;Nadeem;Mshtakan;Gujarati MT;Devanagari MT;Arial Hebrew;Corsiva Hebrew;Baghdad;STFangsong".split(";"),
I=I||function(a,b){var c={},d=c.lib={},e=function(){},f=d.Base={extend:function(a){e.prototype=this;var b=new e;a&&b.mixIn(a);b.hasOwnProperty("init")||(b.init=function(){b.$super.init.apply(this,arguments)});b.init.prototype=b;b.$super=this;return b},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var b in a)a.hasOwnProperty(b)&&(this[b]=a[b]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
g=d.WordArray=f.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=b?c:4*a.length},toString:function(a){return(a||k).stringify(this)},concat:function(a){var b=this.words,c=a.words,d=this.sigBytes;a=a.sigBytes;this.clamp();if(d%4)for(var e=0;e<a;e++)b[d+e>>>2]|=(c[e>>>2]>>>24-8*(e%4)&255)<<24-8*((d+e)%4);else if(65535<c.length)for(e=0;e<a;e+=4)b[d+e>>>2]=c[e>>>2];else b.push.apply(b,c);this.sigBytes+=a;return this},clamp:function(){var b=this.words,c=this.sigBytes;b[c>>>2]&=4294967295<<
32-8*(c%4);b.length=a.ceil(c/4)},clone:function(){var a=f.clone.call(this);a.words=this.words.slice(0);return a},random:function(b){for(var c=[],d=0;d<b;d+=4)c.push(4294967296*a.random()|0);return new g.init(c,b)}}),m=c.enc={},k=m.Hex={stringify:function(a){var b=a.words;a=a.sigBytes;for(var c=[],d=0;d<a;d++){var e=b[d>>>2]>>>24-8*(d%4)&255;c.push((e>>>4).toString(16));c.push((e&15).toString(16))}return c.join("")},parse:function(a){for(var b=a.length,c=[],d=0;d<b;d+=2)c[d>>>3]|=parseInt(a.substr(d,
2),16)<<24-4*(d%8);return new g.init(c,b/2)}},H=m.Latin1={stringify:function(a){var b=a.words;a=a.sigBytes;for(var c=[],d=0;d<a;d++)c.push(String.fromCharCode(b[d>>>2]>>>24-8*(d%4)&255));return c.join("")},parse:function(a){for(var b=a.length,c=[],d=0;d<b;d++)c[d>>>2]|=(a.charCodeAt(d)&255)<<24-8*(d%4);return new g.init(c,b)}},La=m.Utf8={stringify:function(a){try{return decodeURIComponent(escape(H.stringify(a)))}catch(b){throw Error("Malformed UTF-8 data");}},parse:function(a){return H.parse(unescape(encodeURIComponent(a)))}},
qa=d.BufferedBlockAlgorithm=f.extend({reset:function(){this._data=new g.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=La.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(b){var c=this._data,d=c.words,e=c.sigBytes,f=this.blockSize,h=e/(4*f),h=b?a.ceil(h):a.max((h|0)-this._minBufferSize,0);b=h*f;e=a.min(4*b,e);if(b){for(var m=0;m<b;m+=f)this._doProcessBlock(d,m);m=d.splice(0,b);c.sigBytes-=e}return new g.init(m,e)},clone:function(){var a=f.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});d.Hasher=qa.extend({cfg:f.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){qa.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(b,c){return(new a.init(c)).finalize(b)}},_createHmacHelper:function(a){return function(b,c){return(new l.HMAC.init(a,
c)).finalize(b)}}});var l=c.algo={};return c}(Math);(function(){var a=I,b=a.lib,c=b.WordArray,d=b.Hasher,e=[],b=a.algo.SHA1=d.extend({_doReset:function(){this._hash=new c.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(a,b){for(var c=this._hash.words,d=c[0],f=c[1],g=c[2],k=c[3],l=c[4],p=0;80>p;p++){if(16>p)e[p]=a[b+p]|0;else{var q=e[p-3]^e[p-8]^e[p-14]^e[p-16];e[p]=q<<1|q>>>31}q=(d<<5|d>>>27)+l+e[p];q=20>p?q+((f&g|~f&k)+1518500249):40>p?q+((f^g^k)+1859775393):
60>p?q+((f&g|f&k|g&k)-1894007588):q+((f^g^k)-899497514);l=k;k=g;g=f<<30|f>>>2;f=d;d=q}c[0]=c[0]+d|0;c[1]=c[1]+f|0;c[2]=c[2]+g|0;c[3]=c[3]+k|0;c[4]=c[4]+l|0},_doFinalize:function(){var a=this._data,b=a.words,c=8*this._nDataBytes,d=8*a.sigBytes;b[d>>>5]|=128<<24-d%32;b[(d+64>>>9<<4)+14]=Math.floor(c/4294967296);b[(d+64>>>9<<4)+15]=c;a.sigBytes=4*b.length;this._process();return this._hash},clone:function(){var a=d.clone.call(this);a._hash=this._hash.clone();return a}});a.SHA1=d._createHelper(b);a.HmacSHA1=
d._createHmacHelper(b)})();var ua={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d",encode:function(a){var b="",c,d,e,f,g,k,l=0;for(a=ua._utf8_encode(a);l<a.length;)c=a.charCodeAt(l++),d=a.charCodeAt(l++),e=a.charCodeAt(l++),f=c>>2,c=(c&3)<<4|d>>4,g=(d&15)<<2|e>>6,k=e&63,isNaN(d)?g=k=64:isNaN(e)&&(k=64),b=b+this._keyStr.charAt(f)+this._keyStr.charAt(c)+this._keyStr.charAt(g)+this._keyStr.charAt(k);return b},_utf8_encode:function(a){for(var b="",c=0;c<a.length;c++){var d=
a.charCodeAt(c);128>d?b+=String.fromCharCode(d):(127<d&&2048>d?b+=String.fromCharCode(d>>6|192):(b+=String.fromCharCode(d>>12|224),b+=String.fromCharCode(d>>6&63|128)),b+=String.fromCharCode(d&63|128))}return b}},ob=function(){var a=["monospace","sans-serif","serif"],b=document.getElementsByTagName("body")[0],c=document.createElement("div");c.setAttribute("style","visibility: hidden;position: absolute; top: 0px; left: -999px;");b.appendChild(c);b=document.createElement("span");b.style.fontSize="72px";
b.innerHTML="mmmmmmmmmmlli";var d={},e={},f;for(f in a)b.style.fontFamily=a[f],c.appendChild(b),d[a[f]]=b.offsetWidth,e[a[f]]=b.offsetHeight,c.removeChild(b);this.detect=function(b){var f=document.createElement("div");f.setAttribute("style","visibility: hidden;position: absolute; top: 0px; left: -999px;");for(var g=[],k=[],h=0;h<b.length;h++){var l=[];k.push(!1);for(var n in a){var p=document.createElement("div"),q=document.createElement("span");q.style.fontSize="72px";q.innerHTML="mmmmmmmmmmlli";
q.style.fontFamily=b[h]+","+a[n];p.appendChild(q);f.appendChild(p);l.push(q)}g.push(l)}c.appendChild(f);for(h=0;h<b.length;h++)for(n in l=g[h],a)q=l[n],p=q.offsetWidth!=d[a[n]]||q.offsetHeight!=e[a[n]],k[h]=k[h]||p;c.removeChild(f);return k}},A=0,ra=0,Ja=1,Ka=[0,10,13,34,38,92],Ma=7,Ha=!1,Q=0,R=0,S=0,va=function(a){Ha||(Q=a.pageX,R=a.pageY,S=Date.now(),Ha=!0);var b=Date.now();Math.sqrt(Math.pow(a.pageX-Q,2)+Math.pow(a.pageY-R,2))>=Fa&&b-S>=Ga&&(r.bfd.mousemove.length>=J?D("mousemove",va,"rm"):(r.bfd.mousemove.push({x:a.pageX,
y:a.pageY}),Q=a.pageX,R=a.pageY,S=b))},wa=function(a){r.bfd.keydown.length>=J?D("keydown",wa,"rm"):r.bfd.keydown.push(a.keyCode)},xa=function(a){r.bfd.click.length>=J?D("click",xa,"rm"):r.bfd.click.push({x:a.pageX,y:a.pageY})},z=1;ma="cust";la="ti";ka="np";ja="no";ia="wo";ha="do";ga="kf";fa="ls";ea="ss";da="iepl";ca="sc";ba="fc";aa="gief";$="cp";Z="wr";Y="wgl";X="et";W="bfdm";V="bfdk";U="bfdc";var B={};collectorNamespaceName="cofdfp";window[collectorNamespaceName]||(window[collectorNamespaceName]=
{});"__DEFAULT_NAMESPACE"==collectorNamespaceName&&window._cc&&(window[collectorNamespaceName]._cc=window._cc);if(window[collectorNamespaceName]._cc){window[collectorNamespaceName]._cc.loaded=!0;for(var T=0;T<window[collectorNamespaceName]._cc.length;T++)Ea(window[collectorNamespaceName]._cc[T])}else window[collectorNamespaceName]._cc=[],window[collectorNamespaceName]._cc.loaded=!0,"__DEFAULT_NAMESPACE"==collectorNamespaceName&&(window._cc=window[collectorNamespaceName]._cc);window[collectorNamespaceName]._cc.push=
function(a){Ea(a)}})()}catch(e$$45){};