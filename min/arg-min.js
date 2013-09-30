/*

  arg.js - v1
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
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('5 S=7(){4={10:"1"};4.x=7(s){8(!s)6{};s=4.u(s);5 a={};5 b=s.G("&");r(5 c q b){5 d=b[c].G("=");5 e=T(d[0]),L=T(d[1]);4.z(a,e,L,Y)}6 a};4.z=7(a,c,d,e){5 f=c;5 g=c.m(".");5 h=c.m("[");8(g>-1){f=c.o(0,g);5 i=c.o(g+1)}t 8(h==-1){6 e?(a[c]=d):a[c]}h=f.m("[");8((h>-1&&h<g)||(h>-1&&g==-1)){5 j=f.o(0,f.m("["));5 b=f.G("[")[1];5 k=11(b.o(0,b.n-1));a=(a[j]=a[j]||[]);a=(a[k]=a[k]||{})}t{8(!a[f]){a[f]={}}a=a[f]||{}}8(i)6 4.z(a,i,d,e);t 6 a};4.p=7(a,b){R(v(a)){w"Q":5 c=[];5 d;r(5 e q a){8(!a.13(e))W;5 f=a[e];d=b?b+"."+e:e;8(v a.n!=="M"){d=b?b+"["+e+"]":e}8(v f==="Q"){c.l(4.p(f,d))}t{c.l(A(d)+"="+A(f))}}6 c.P("&")}6 A(a)};4.V=7(){5 a=(4.K?4.H:4.y);5 b=[F.Z,a];R(9.n){w 1:b.l(4.p(9[0]));N;w 2:b[0]=9[0];b.l(4.p(9[1]));N;w 3:b[0]=9[0];b[1]=4.y;b.l(4.p(9[1]));b.l(4.H);b.l(4.p(9[2]))}5 s=b.P("");8(s.m(a)==s.n-a.n){s=s.o(0,s.n-a.n)}6 s};4.K=14;4.y="?";4.O="#";4.H="#?";4.X=7(a,b){5 c=4.z(4.J(),a);6 v(c)==="M"?b:c};4.J=7(){5 a=4.x(4.E()+"&"+4.C());6 4.B?4.B:4.B=a};4.12=7(){6 4.I?4.I:4.I=4.x(4.E())};4.U=7(){6 4.D?4.D:4.D=4.x(4.C())};4.E=7(){6 4.u(F.15)};4.C=7(){6 4.u(F.U)};4.u=7(s){16(s.m(4.O)==0||s.m(4.y)==0){s=s.o(1)}6 s};4.17=7(){5 a={};r(5 b q 9)r(5 k q 9[b])a[k]=9[b][k];6 a};6 4};5 4=S();',62,70,'||||Arg|var|return|function|if|arguments||||||||||||push|indexOf|length|substr|stringify|in|for||else|_cleanParamStr|typeof|case|parse|querySeperator|_access|encodeURIComponent|_all|hashstring|_hash|querystring|location|split|hashQuerySeperator|_query|all|urlUseHash|val|undefined|break|hashSeperator|join|object|switch|ArgReset|decodeURIComponent|hash|url|continue|get|true|pathname|version|parseInt|query|hasOwnProperty|false|search|while|merge'.split('|'),0,{}));
