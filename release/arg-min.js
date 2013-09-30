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
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('5 R=7(){4={};4.w=7(s){9(!s)6{};s=4.x(s);5 a={};5 b=s.G("&");t(5 c q b){5 d=b[c].G("=");5 e=S(d[0]),O=S(d[1]);4.z(a,e,O,10)}6 a};4.z=7(a,c,d,e){5 f=c;5 g=c.l(".");5 h=c.l("[");9(g>-1){f=c.o(0,g);5 i=c.o(g+1)}r 9(h==-1){6 e?(a[c]=d):a[c]}h=f.l("[");9((h>-1&&h<g)||(h>-1&&g==-1)){5 j=f.o(0,f.l("["));5 b=f.G("[")[1];5 k=12(b.o(0,b.m-1));a=(a[j]=a[j]||[]);a=(a[k]=a[k]||{})}r{9(!a[f]){a[f]={}}a=a[f]||{}}9(i)6 4.z(a,i,d,e);r 6 a};4.p=7(a,b){Q(u(a)){v"P":5 c=[];5 d;t(5 e q a){9(!a.V(e))X;5 f=a[e];d=b?b+"."+e:e;9(u a.m!=="L"){d=b?b+"["+e+"]":e}9(u f==="P"){c.n(4.p(f,d))}r{c.n(A(d)+"="+A(f))}}6 c.K("&")}6 A(a)};4.Z=7(){5 a=(4.U?4.I:4.y);5 b=[F.Y,a];Q(8.m){v 1:b.n(4.p(8[0]));M;v 2:b[0]=8[0];b.n(4.p(8[1]));M;v 3:b[0]=8[0];b[1]=4.y;b.n(4.p(8[1]));b.n(4.I);b.n(4.p(8[2]))}5 s=b.K("");9(s.l(a)==s.m-a.m){s=s.o(0,s.m-a.m)}6 s};4.U=13;4.y="?";4.N="#";4.I="#?";4.W=7(a,b){5 c=4.z(4.J(),a);6 u(c)==="L"?b:c};4.J=7(){5 a=4.w(4.D()+"&"+4.B());6 4.H?4.H:4.H=a};4.11=7(){6 4.C?4.C:4.C=4.w(4.D())};4.T=7(){6 4.E?4.E:4.E=4.w(4.B())};4.D=7(){6 4.x(F.14)};4.B=7(){6 4.x(F.T)};4.x=7(s){15(s.l(4.N)==0||s.l(4.y)==0){s=s.o(1)}6 s};4.16=7(){5 a={};t(5 b q 8)t(5 k q 8[b])a[k]=8[b][k];6 a};6 4};5 4=R();',62,69,'||||Arg|var|return|function|arguments|if||||||||||||indexOf|length|push|substr|stringify|in|else||for|typeof|case|parse|_cleanParamStr|querySeperator|_access|encodeURIComponent|hashstring|_query|querystring|_hash|location|split|_all|hashQuerySeperator|all|join|undefined|break|hashSeperator|val|object|switch|ArgReset|decodeURIComponent|hash|urlUseHash|hasOwnProperty|get|continue|pathname|url|true|query|parseInt|false|search|while|merge'.split('|'),0,{}));
