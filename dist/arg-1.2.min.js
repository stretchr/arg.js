/*

  arg.js - v1.2
  JavaScript URL argument processing once and for all.

  by Mat Ryer and Ryan Quinn
  Copyright (c) 2013 Stretchr, Inc.

  Please consider promoting this project if you find it useful.

  Permission is hereby granted, free of charge, to any person obtaining a copy of this
  software and associated documentation files (the "Software"), to deal in the Software
  without restriction, including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons
  to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies
  or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
  INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
  PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
  FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
  DEALINGS IN THE SOFTWARE.

*/

(function(n){n.MakeArg=function(){var t=function(){return t.get.apply(n,arguments)};return t.version="1.2.0",t.parse=function(n){var r,i,u;if(!n)return{};if(n.indexOf("=")===-1&&n.indexOf("&")===-1)return{};n=t._cleanParamStr(n);r={};i=n.split("&");for(u in i)if(i.hasOwnProperty(u)){var f=i[u].split("="),e=decodeURIComponent(f[0]),o=t.__decode(f[1]);t._access(r,e,o)}return r},t.__decode=function(n){while(n&&n.indexOf("+")>-1)n=n.replace("+"," ");return decodeURIComponent(n)},t._access=function(n,i,r){var s=typeof r!="undefined",e=-1,o={"true":!0,"false":!1,"null":null},f,u;if((typeof i=="string"||toString.call(i)=="[object String]")&&(e=i.search(/[\.\[]/)),e===-1)return t.coerceMode&&(r=r&&!isNaN(r)?+r:r==="undefined"?undefined:o[r]!==undefined?o[r]:r),s?n[i]=r:n[i];f=i.substr(0,e);u=i.substr(e+1);switch(i.charAt(e)){case"[":return n[f]=n[f]||[],u=u.replace("]",""),u.search(/[\.\[]/)===-1&&(u=parseInt(u,10)),t._access(n[f],u,r);case".":return n[f]=n[f]||{},t._access(n[f],u,r)}return n},t.stringify=function(n,i){var f,e,r,u;switch(typeof n){case"object":f=[];for(r in n)n.hasOwnProperty(r)&&(u=n[r],typeof r!="undefined"&&r.length!==0&&typeof u!="undefined")&&(e=i?i+"."+r:r,typeof n.length!="undefined"&&(e=i?i+"["+r+"]":r),typeof u=="object"?f.push(t.stringify(u,e)):f.push(encodeURIComponent(e)+"="+encodeURIComponent(u)));return f.join("&")}return encodeURIComponent(n)},t.url=function(){var r=t.urlUseHash?t.hashQuerySeperator:t.querySeperator,n=[location.pathname,r],u={},i;switch(arguments.length){case 1:n.push(t.stringify(arguments[0]));break;case 2:n[0]=t._cleanPath(arguments[0]);u=t.parse(arguments[0]);u=t.merge(u,arguments[1]);n.push(t.stringify(u));break;case 3:n[0]=t._cleanPath(arguments[0]);n[1]=t.querySeperator;n.push(t.stringify(arguments[1]));typeof arguments[2]=="string"?n.push(t.hashSeperator):n.push(t.hashQuerySeperator);n.push(t.stringify(arguments[2]))}return i=n.join(""),i.indexOf(r)==i.length-r.length&&(i=i.substr(0,i.length-r.length)),i},t.urlUseHash=!1,t.querySeperator="?",t.hashSeperator="#",t.hashQuerySeperator="#?",t.coerceMode=!0,t.all=function(){var n=t.parse(t.querystring()+"&"+t.hashstring());return t._all?t._all:t._all=n},t.get=function(n,i){var r=t._access(t.all(),n);return typeof r=="undefined"?i:r},t.query=function(){return t._query?t._query:t._query=t.parse(t.querystring())},t.hash=function(){return t._hash?t._hash:t._hash=t.parse(t.hashstring())},t.querystring=function(){return t._cleanParamStr(location.search)},t.hashstring=function(){return t._cleanParamStr(location.hash)},t._cleanParamStr=function(n){if(n.indexOf(t.querySeperator)>-1&&(n=n.split(t.querySeperator)[1]),n.indexOf(t.hashSeperator)>-1&&(n=n.split(t.hashSeperator)[1]),n.indexOf("=")===-1&&n.indexOf("&")===-1)return"";while(n.indexOf(t.hashSeperator)==0||n.indexOf(t.querySeperator)==0)n=n.substr(1);return n},t._cleanPath=function(n){return n.indexOf(t.querySeperator)>-1&&(n=n.substr(0,n.indexOf(t.querySeperator))),n.indexOf(t.hashSeperator)>-1&&(n=n.substr(0,n.indexOf(t.hashSeperator))),n},t.merge=function(){var i={},n,t;for(n in arguments)if(arguments.hasOwnProperty(n))for(t in arguments[n])arguments[n].hasOwnProperty(t)&&(i[t]=arguments[n][t]);return i},t};n.Arg=MakeArg()})(window);