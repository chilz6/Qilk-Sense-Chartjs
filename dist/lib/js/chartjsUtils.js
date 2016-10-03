define(["jquery","underscore"],function(e,t){"use strict";return{defineColorPalette:function(e){var t=[];if("palette"==e)t=["176,175,174","123,122,120","84,83,82","68,119,170","125,184,218","182,215,234","70,198,70","249,63,23","255,207,2","39,110,39","255,255,255","0,0,0"];else if("twelve"==e)t=["51,34,136","102,153,204","136,204,238","68,170,153","17,119,51","153,153,51","221,204,119","102,17,0","204,102,119","170,68,102","136,34,85","170,68,153"];else var t=["153,200,103","228,60,208","226,64,42","102,168,219","63,26,32","229,170,135","60,107,89","170,42,107","233,176,46","120,100,221","101,233,60","92,228,186","208,224,218","215,150,22","100,72,123","228,231,43","111,115,48","147,40,52","174,108,125","152,103,23","227,203,112","64,140,29","221,50,95","83,61,28","42,60,84","219,113,39","114,227,226","226,193,218","212,117,85","125,127,129","84,174,155","233,218,166","58,136,85","91,230,110","171,57,164","166,227,50","108,70,157","227,158,81","79,28,66","39,60,28","170,151,46","139,179,42","189,236,165","99,236,155","156,53,25","170,164,132","114,37,109","77,116,159","152,132,223","229,144,184","68,182,43","173,87,146","198,93,234","230,112,202","227,135,131","41,49,45","106,44,30","215,177,170","177,231,195","205,193,52","158,231,100","86,184,206","44,99,35","101,70,74","177,207,234","60,116,129","58,78,150","100,147,225","219,86,86","116,114,89","187,171,228","227,63,146","208,96,125","117,159,121","157,107,94","133,116,174","126,48,76","173,143,172","75,119,222","100,126,23","185,195,121","141,168,176","185,114,217","120,98,121","126,192,125","145,100,54","45,39,79","220,230,128","117,151,72","218,230,90","69,156,73","183,147,74","81,198,113","158,173,63","150,154,92","185,151,106","70,83,26","192,240,132","118,193,70","186,208,173"];return t},formatMeasure:function(e,t,r){var a=t.decimal_separator,n=t.thousand_separator,i=t.qHyperCube.qMeasureInfo[r].qNumFormat.qType;if(t.qHyperCube.qMeasureInfo[r].qIsAutoFormat)return parseInt(e)>999?e.toString().replace(".",a).replace(/\B(?=(\d{3})+(?!\d))/g,n):e.toString().replace(".",a);if("F"==i||"M"==i){var o=t.qHyperCube.qMeasureInfo[r].qNumFormat.qFmt,u=0,m="";return o.indexOf(".")>0?o.split(".")[1].length>0&&(u=o.split(".")[1].length):u=0,"%"==o.substr(o.length-1,1)?(u>0&&--u,(100*e).toFixed(u)+"%"):("M"==i&&(m=o.substr(0,1),u=0),parseInt(e)>999?m+e.toFixed(u).toString().replace(".",a).replace(/\B(?=(\d{3})+(?!\d))/g,n):m+e.toFixed(u).toString().replace(".",a))}},addCumulativeValues:function(e){for(var t=0,r=0;r<e.length;r++)e[r][0].qElemNumber<0||(t+=isNaN(t)?0:e[r][1].qNum,e[r][1].qNum=t);return e},addCumulativeValuesOnTwoDimensions:function(e,t){for(var r=0,a=0;a<e.length;a++){for(var n=0;n<t[e[a]].length;n++)t.dim1_elem[n]<0||(r+=isNaN(t[e[a]][n])?0:t[e[a]][n],t[e[a]][n]=r);r=0}return t},makeSelectionsOnDataPoints:function(e,t){var r=[],a=0;e<0||(r.push(e),t.selectValues(a,r,!0))},initializeArrayWithZero:function(e,t,r){for(var a=0;a<t.length;a++){for(var n=[],i=0;i<e;i++)n[i]=0;r[t[a]]=n}return r},storeHypercubeDataToArray:function(e,r){var a=0;return t.each(e,function(e){r.dim1[a]=e[0].dim1,r.dim1_elem[a]=e[0].dim1_elem,t.each(e,function(e){r[e.dim2][a]=e.mea1}),a++}),r},flattenData:function(e){var t=[],r=[],a=e.map(function(e){return t.indexOf(e[1].qText)<0&&(t.push(e[1].qText),r[e[1].qText]=e[1].qElemNumber),{dim1:e[0].qText,dim1_elem:e[0].qElemNumber,dim2:e[1].qText,mea1:e[2].qNum}});return[a,t,r]},calculateMargin:function(e,t){var r=e.width(),a=e.height(),n={top:t.properties.marginTop,right:t.properties.marginRight,bottom:t.properties.marginBottom,left:t.properties.marginLeft},i=r-n.left-n.right,o=a-n.top-n.bottom;return[i,o]},pageExtensionData:function(e,t,r,a){var n=0,i=r.qHyperCube.qSize.qcx,o=Math.floor(1e4/i);if(e.backendApi.eachDataRow(function(e,t){n=e}),e.backendApi.getRowCount()>n+1){var u=[{qTop:n+1,qLeft:0,qWidth:i,qHeight:Math.min(o,e.backendApi.getRowCount()-n)}];e.backendApi.getData(u).then(function(n){pageExtensionData(e,t,r,a)})}else a(t,r,r.qHyperCube.qDataPages[0].qMatrix,e)}}});