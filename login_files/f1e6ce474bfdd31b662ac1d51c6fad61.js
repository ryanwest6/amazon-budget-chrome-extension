Bootstrapper.bindDependencyImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.nsBindingAbortedError=function(nsbText,nsCookieValue,nsbTime,nsLink){nsbText=typeof nsbText!=="undefined"?nsbText:"";nsCookieValue=typeof nsCookieValue!=="undefined"?nsCookieValue:"";nsbTime=typeof nsbTime!=="undefined"?nsbTime:100;nsLink=typeof nsLink!=="undefined"?nsLink:"o";if(~navigator.userAgent.toLowerCase().indexOf("webkit")){var sc_tVar=Bootstrapper.trackerFramework.getData();
var sc_pageName=sc_tVar.pageName||"";var sc_channel=sc_tVar.channel||"";var sc_country=sc_tVar.country||"";var sc_langauge=sc_tVar.language||"";var sc_prop11=window.s.c_r("C1_CSID")||"";var sc_prop63=Bootstrapper.Cookies.get("C1_PID")||"";var nsRequireValue="window.s.pageName\x3dwindow.s.prop4\x3d'"+sc_pageName+"';window.s.channel\x3d'"+sc_channel+"';window.s.eVar10\x3d'"+sc_country+"';window.s.eVar11\x3d'"+sc_langauge+"';window.s.prop11\x3d'"+sc_prop11+"';window.s.prop63\x3d'"+sc_prop63+"';";window.s.c_w("sc_nsError",
nsRequireValue+nsCookieValue);window.s.c_w("sc_nsText",nsbText);window.s.c_w("sc_nsLink",nsLink)}else{eval(nsCookieValue);Bootstrapper.nbaeSetInterval=setInterval(function(){window.s.tl(window,nsLink,nsbText);clearInterval(Bootstrapper.nbaeSetInterval)},nsbTime)}};Bootstrapper.nsBindingCookieExecution=function(){var nsErrorKey="sc_nsError",nsTextKey="sc_nsText",nsLinkKey="sc_nsLink";if(~navigator.userAgent.toLowerCase().indexOf("webkit")){var nsErrorValue=window.s.c_r(nsErrorKey);if(nsErrorValue!==
""){eval(nsErrorValue);s.usePlugins=false;s.linkTrackVars+=",prop63";window.s.tl(window,window.s.c_r(nsLinkKey),window.s.c_r(nsTextKey));s.usePlugins=true;var cLength=nsErrorValue.split("linkTrackVars")[1].split("'")[1].split(",");for(i=0;i<cLength.length;i++)window.s[cLength[i]]="";window.s.c_w(nsErrorKey,"");window.s.c_w(nsTextKey,"");window.s.c_w(nsLinkKey,"")}}}},1556039,[2896247],413219,[289690]);
Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;!function(a){var b;b=function(){var a,b="capone",c="prod",d="qa",e="global",f="360",g="auto",h="bank",i="bankinternalapps",j="cardpartnerships",k="corp",l="crweb",m="ease",n="eos",o="homeloan",p="micro",q="mobileus",r="pulse",s="rewards",t="sharebuilder",u="sparkpay",v="treasury",w="uscard",x="digital",y={bank_int_apps:i,crweb:l,intranet_apiportal:r,intranet_homeloansmlo:r,
intranet_stackexchange:r,pulse:r,sharebuilder_401k:t},z={capone_360:f,static_360:f,coaf:g,coaf_ane:g,portal_coaf:g,coaf_dealerportal:g,coaf_dealerplatform:g,coaf_refi:g,coaf_pa:g,ada_forms:h,atm_branch_loc:h,bank:h,bank_oao:h,bank_saveatrip:h,mobile_banking:h,oao:h,olb:h,bank_oao_fast_app:h,bank_cafes:h,partnership_eorig:j,partnership_esnap:j,partnership_pcos:j,partnership_pong:j,corporate:k,corporate_community:k,api_digital_ext:x,digital_element:x,digital_virtualassistant_web:x,digital_id:x,api_digital:x,
digital_spending:x,digital_chat:x,digital_spring:x,ease_web:m,ease_web_on_cos:n,card_digitization:n,sso:n,sspbt:n,"ssp-elinking":n,sspoc:n,ssppf:n,sspsc:n,upf_dsd:n,upf_hsbc_mig:n,upf_oa:n,card_shopwithmiles:n,home_loans:o,home_loans_loanbuilder:o,home_loans_msp:o,home_loans_originations:o,"home equity":o,investing:t,microsite:p,ms_commercial:p,ms_crediteducation:p,ms_homeloans:p,ms_hsbc:p,ms_hsbc_mobile:p,ms_journey:p,ms_mascots:p,"ms_mobile-reeng":p,ms_purchase_eraser:p,ms_sparkmobile:p,ms_venture:p,
ms_venturemobile:p,mobile:q,mobile_saks:q,uscard_mobile:q,rewards:s,sharebuilder:t,spark401k:t,spark_pay:u,intellix:v,aspen:w,card_dynamic_app:w,upf_eosenrollment:w,uscard:w,icore:w},A=function(a,b){return"string"==typeof a&&a.indexOf(b)>-1},B=function(a,b){return"coaf"===b?a:A(a,f)?"capone_360":a},C=function(f,g,h){var i,j,k=a?c:d,l=b+e+(a?"":k);return f=f?f.toLowerCase():"",g=g?g.toLowerCase():"",h=h?h.toLowerCase():"us",i=B(f,g),y.hasOwnProperty(i)?A(f,"intranet_homeloansmlo")&&a?b+y[i]+k+","+
l:b+y[i]+k:z.hasOwnProperty(i)?(j=z[i],b+j+k+","+l):l};return function(b){return a=b.isProd,{getSCAccount:C,getVarLOB:B}}}();var c=b(a);a.getSCAccount=c.getSCAccount,a.getVarLOB=c.getVarLOB}(Bootstrapper)},2881588,370753);
Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;var isFunction=function(value){return Object.prototype.toString.call(value).indexOf("Function")>-1};var isArray=function(value){return Object.prototype.toString.call(value).indexOf("Array")>-1};var isObject=function(value){return Object.prototype.toString.call(value).indexOf("Object")>-1};var DEBUG=Bootstrapper.Cookies.test("enableDebug");var PARAMETERS_TO_CLEAN=["eVar",
"prop","campaign","products","list","pageName","channel","account","referrer"];var PARAMETERS_NOT_TO_CLEAN=["prop16","prop9","prop10","eVar61"];var OBJECTS_TO_CLEAN=["contextData"];var QUERY_PARAMETERS_ALLOWED=[/360B_EMAIL/i,/360_EMAIL/i,/BANK_EMAIL/i,/CARD_EMAIL/i,/COAF_EMAIL/i,/^formPage$/,/HL_EMAIL/i,/RBANK_EMAIL/i,/^EID$/,/^IARC$/i,/^OCCID$/i,/^action$/i,/^ad_id$/i,/^brlid$/i,/^cid$/i,/^click_?id$/i,/^dev_id$/i,/^email_?deliver_?id$/i,/^experience$/i,/^external_?id$/i,/^gclid$/i,/^keywd$/i,/^landingPage$/,
/^msclkid$/i,/^mtch$/i,/^pId$/i,/^product(id)?$/i,/^programCode$/,/^referralCode$/,/^s$/i,/^target_id$/i,/^transId$/];var piiNpiRegexes={"phoneNumber":/^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/,"email":/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/,"SSN":/\d{3}-\d{2}-\d{4}/,"CCN":/\b(?:(?:(?:4\d|5[1-5]|65)(\d\d)(?!\1{3})|35(?:2[89]|[3-8]\d)|6(?:011|4[4-9]\d|22(?:1(?!1\d|2[1-5])|[2-8]|9(?=1\d|2[1-5]))))([-]?)(?!(\d)\3{3})(\d{4})\2(?!\4|(\d)\5{3}|1234|2345|3456|5678|7890)(\d{4})(?!\d{4}\d)\2(?!\6|(\d)\7{3}|1234|3456)|3[47]\d{2}([-]?)(?!(\d)\9{5}|123456|234567|345678)\d{6}(?!\d{5}\d)\8(?!(\d)\10{4}|12345|56789|67890)\d)\d{4}(?!-)(?!\.\d)\b/};
var datumContainsSensitiveInfo=function(datum){if(!datum)return false;var stringDatum=datum.toString();for(var method in piiNpiRegexes)if(piiNpiRegexes[method].test(stringDatum))return method;return false};var cleanObject=function(objectToClean,objectName){if(!objectToClean)return;if(!isObject(objectToClean))throw new Error("Object to clean must be an object.");Object.keys(objectToClean).forEach(function(key){if(isObject(objectToClean[key]))cleanObject(objectToClean[key],objectName+"."+key);else if(!isArray(objectToClean[key])&&
!isFunction(objectToClean[key])){var result=datumContainsSensitiveInfo(objectToClean[key]);if(result){reportProblem("PII: Stripping "+result+" data in "+objectName+"."+key);objectToClean[key]="**REDACTED**"}}})};Bootstrapper.cleanSObject=function(sObjectToClean){if(!sObjectToClean)return;if(!isObject(sObjectToClean))throw new Error("S Object must be an object.");Object.keys(sObjectToClean).forEach(function(key){PARAMETERS_TO_CLEAN.forEach(function(parameterToCheck){if(key.indexOf(parameterToCheck)>
-1){var skipParameter=false;PARAMETERS_NOT_TO_CLEAN.forEach(function(parameterNotToCheck){if(key.indexOf(parameterNotToCheck)>-1)skipParameter=true});if(!skipParameter){var result=datumContainsSensitiveInfo(sObjectToClean[key]);if(result){reportProblem("PII: Stripping "+result+" data in "+key);sObjectToClean[key]="**REDACTED**"}}}});OBJECTS_TO_CLEAN.forEach(function(parameterToCheck){if(key.indexOf(parameterToCheck)>-1)cleanObject(sObjectToClean[key],key)})})};Bootstrapper.cleanUrl=function(urlString){var hasApprovedQueries=
false;var urlArray=urlString.split("?");var urlOnly=urlArray[0];var queryString=urlArray.length>1?urlArray[1]:"";var approvedQueries=[];if(queryString)queryString.split("\x26").forEach(function(query){var key=query.split("\x3d")[0];var value=query.split(/=(.*)/)[1]?query.split(/=(.*)/)[1]:"";for(var queryIndex=0;queryIndex<QUERY_PARAMETERS_ALLOWED.length;queryIndex++)if(QUERY_PARAMETERS_ALLOWED[queryIndex].test(key)){approvedQueries.push(key+"\x3d"+value);hasApprovedQueries=true;break}});if(hasApprovedQueries){var newUrlString=
urlOnly;if(approvedQueries.length>0){newUrlString=newUrlString+"?";approvedQueries.forEach(function(query){newUrlString=newUrlString+query+"\x26"});newUrlString=newUrlString.slice(0,-1)}return newUrlString}else return urlOnly};var reportProblem=function(message){Bootstrapper.reportException(new Error(message));if(DEBUG)console.warn(message)}},2860686,378606);