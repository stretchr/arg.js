/*

  arg.js
  JavaScript URL parameter processing once and for all.

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
var ArgReset=function(){Arg={};Arg.parse=function(s){if(!s)return{};s=Arg._cleanParamStr(s);var a={};var b=s.split("&");for(var c in b){var d=b[c].split("=");var e=decodeURIComponent(d[0]),val=decodeURIComponent(d[1]);Arg._access(a,e,val,true)}return a};Arg._access=function(a,c,d,e){var f=c;var g=c.indexOf(".");var h=c.indexOf("[");if(g>-1){f=c.substr(0,g);var i=c.substr(g+1)}else if(h==-1){return e?(a[c]=d):a[c]}h=f.indexOf("[");if((h>-1&&h<g)||(h>-1&&g==-1)){var j=f.substr(0,f.indexOf("["));var b=f.split("[")[1];var k=parseInt(b.substr(0,b.length-1));a=(a[j]=a[j]||[]);a=(a[k]=a[k]||{})}else{if(!a[f]){a[f]={}}a=a[f]||{}}if(i)return Arg._access(a,i,d,e);else return a};Arg.stringify=function(a,b){var c=[];var d;for(var e in a){if(!a.hasOwnProperty(e))continue;var f=a[e];d=b?b+"."+e:e;if(typeof a.length!=="undefined"){d=b?b+"["+e+"]":e}if(typeof f==="object"){c.push(Arg.stringify(f,d))}else{c.push(encodeURIComponent(d)+"="+encodeURIComponent(f))}}return c.join("&")};Arg.url=function(){var a=(Arg.urlUseHash?Arg.hashQuerySeperator:Arg.querySeperator);var b=[location.pathname,a];switch(arguments.length){case 1:b.push(Arg.stringify(arguments[0]));break;case 2:b[0]=arguments[0];b.push(Arg.stringify(arguments[1]));break;case 3:b[0]=arguments[0];b[1]=Arg.querySeperator;b.push(Arg.stringify(arguments[1]));b.push(Arg.hashQuerySeperator);b.push(Arg.stringify(arguments[2]))}var s=b.join("");if(s.indexOf(a)==s.length-a.length){s=s.substr(0,s.length-a.length)}return s};Arg.urlUseHash=false;Arg.querySeperator="?";Arg.hashSeperator="#";Arg.hashQuerySeperator="#?";Arg.get=function(a,b){var c=Arg._access(Arg.all(),a);return typeof(c)==="undefined"?b:c};Arg.all=function(){var a=Arg.parse(Arg.querystring()+"&"+Arg.hashstring());return Arg._all?Arg._all:Arg._all=a};Arg.query=function(){return Arg._query?Arg._query:Arg._query=Arg.parse(Arg.querystring())};Arg.hash=function(){return Arg._hash?Arg._hash:Arg._hash=Arg.parse(Arg.hashstring())};Arg.querystring=function(){return Arg._cleanParamStr(location.search)};Arg.hashstring=function(){return Arg._cleanParamStr(location.hash)};Arg._cleanParamStr=function(s){while(s.indexOf(Arg.hashSeperator)==0||s.indexOf(Arg.querySeperator)==0){s=s.substr(1)}return s};Arg.merge=function(){var a={};for(var b in arguments)for(var k in arguments[b])a[k]=arguments[b][k];return a};return Arg};var Arg=ArgReset();
