/*

  arg.js - v1.0.1
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
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(8(m){m.P=8(){4 l=8(){5 l.S.15(m,9)};l.19="1.0.1";l.w=8(s){6(!s)5{};6(s.7("=")===-1&&s.7("&")===-1)5{};s=l.B(s);4 a={};4 b=s.x("&");E(4 c C b){4 d=b[c].x("=");4 e=W(d[0]),X=W(d[1]);l.A(a,e,X,1c)}5 a};l.A=8(a,c,d,e){4 f=c;4 g=c.7(".");4 h=c.7("[");6(g>-1){f=c.n(0,g);4 i=c.n(g+1)}z 6(h==-1){5 e?(a[c]=d):a[c]}h=f.7("[");6((h>-1&&h<g)||(h>-1&&g==-1)){4 j=f.n(0,f.7("["));4 b=f.x("[")[1];4 k=18(b.n(0,b.r-1));a=(a[j]=a[j]||[]);a=(a[k]=a[k]||{})}z{6(!a[f]){a[f]={}}a=a[f]||{}}6(i)5 l.A(a,i,d,e);z 5 a};l.v=8(a,b){10(t(a)){y"R":4 c=[];4 d;E(4 e C a){6(!a.11(e))U;4 f=a[e];6(t(e)==="D"||e.r===0||t(f)==="D")U;d=b?b+"."+e:e;6(t a.r!=="D"){d=b?b+"["+e+"]":e}6(t f==="R"){c.q(l.v(f,d))}z{c.q(G(d)+"="+G(f))}}5 c.O("&")}5 G(a)};l.14=8(){4 a=(l.Q?l.J:l.o);4 b=[K.13,a];4 c={};10(9.r){y 1:b.q(l.v(9[0]));V;y 2:b[0]=l.M(9[0]);c=l.w(9[0]);c=l.Y(c,9[1]);b.q(l.v(c));V;y 3:b[0]=l.M(9[0]);b[1]=l.o;b.q(l.v(9[1]));(t(9[2])==="12")?b.q(l.u):b.q(l.J);b.q(l.v(9[2]))}4 s=b.O("");6(s.7(a)==s.r-a.r){s=s.n(0,s.r-a.r)}5 s};l.Q=17;l.o="?";l.u="#";l.J="#?";l.Z=8(){4 a=l.w(l.L()+"&"+l.N());5 l.F?l.F:l.F=a};l.S=8(a,b){4 c=l.A(l.Z(),a);5 t(c)==="D"?b:c};l.16=8(){5 l.I?l.I:l.I=l.w(l.L())};l.T=8(){5 l.H?l.H:l.H=l.w(l.N())};l.L=8(){5 l.B(K.1a)};l.N=8(){5 l.B(K.T)};l.B=8(s){6(s.7(l.o)>-1)s=s.x(l.o)[1];6(s.7(l.u)>-1)s=s.x(l.u)[1];6(s.7("=")===-1&&s.7("&")===-1)5"";1b(s.7(l.u)==0||s.7(l.o)==0)s=s.n(1);5 s};l.M=8(p){6(p.7(l.o)>-1)p=p.n(0,p.7(l.o));6(p.7(l.u)>-1)p=p.n(0,p.7(l.u));5 p};l.Y=8(){4 a={};E(4 b C 9)E(4 k C 9[b])a[k]=9[b][k];5 a};5 l};m.1d=P()})(1e);',62,77,'||||var|return|if|indexOf|function|arguments||||||||||||||substr|querySeperator||push|length||typeof|hashSeperator|stringify|parse|split|case|else|_access|_cleanParamStr|in|undefined|for|_all|encodeURIComponent|_hash|_query|hashQuerySeperator|location|querystring|_cleanPath|hashstring|join|MakeArg|urlUseHash|object|get|hash|continue|break|decodeURIComponent|val|merge|all|switch|hasOwnProperty|string|pathname|url|apply|query|false|parseInt|version|search|while|true|Arg|window'.split('|'),0,{}));
