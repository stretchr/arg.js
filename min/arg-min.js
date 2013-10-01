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
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('4 S=8(){4 l={19:"1.0.1"};l.w=8(s){6(!s)5{};6(s.7("=")===-1&&s.7("&")===-1)5{};s=l.D(s);4 a={};4 b=s.v("&");y(4 c x b){4 d=b[c].v("=");4 e=P(d[0]),R=P(d[1]);l.C(a,e,R,16)}5 a};l.C=8(a,c,d,e){4 f=c;4 g=c.7(".");4 h=c.7("[");6(g>-1){f=c.n(0,g);4 i=c.n(g+1)}B 6(h==-1){5 e?(a[c]=d):a[c]}h=f.7("[");6((h>-1&&h<g)||(h>-1&&g==-1)){4 j=f.n(0,f.7("["));4 b=f.v("[")[1];4 k=15(b.n(0,b.m-1));a=(a[j]=a[j]||[]);a=(a[k]=a[k]||{})}B{6(!a[f]){a[f]={}}a=a[f]||{}}6(i)5 l.C(a,i,d,e);B 5 a};l.u=8(a,b){U(r(a)){z"O":4 c=[];4 d;y(4 e x a){6(!a.Z(e))Q;4 f=a[e];6(r(e)==="A"||e.m===0||r(f)==="A")Q;d=b?b+"."+e:e;6(r a.m!=="A"){d=b?b+"["+e+"]":e}6(r f==="O"){c.q(l.u(f,d))}B{c.q(F(d)+"="+F(f))}}5 c.W("&")}5 F(a)};l.12=8(){4 a=(l.N?l.H:l.o);4 b=[J.11,a];4 c={};U(9.m){z 1:b.q(l.u(9[0]));T;z 2:b[0]=l.L(9[0]);c=l.w(9[0]);c=l.V(c,9[1]);b.q(l.u(c));T;z 3:b[0]=l.L(9[0]);b[1]=l.o;b.q(l.u(9[1]));b.q(l.H);b.q(l.u(9[2]))}4 s=b.W("");6(s.7(a)==s.m-a.m){s=s.n(0,s.m-a.m)}5 s};l.N=10;l.o="?";l.t="#";l.H="#?";l.X=8(){4 a=l.w(l.M()+"&"+l.K());5 l.E?l.E:l.E=a};l.13=8(a,b){4 c=l.C(l.X(),a);5 r(c)==="A"?b:c};l.14=8(){5 l.I?l.I:l.I=l.w(l.M())};l.Y=8(){5 l.G?l.G:l.G=l.w(l.K())};l.M=8(){5 l.D(J.17)};l.K=8(){5 l.D(J.Y)};l.D=8(s){6(s.7(l.o)>-1)s=s.v(l.o)[1];6(s.7(l.t)>-1)s=s.v(l.t)[1];6(s.7("=")===-1&&s.7("&")===-1)5"";18(s.7(l.t)==0||s.7(l.o)==0)s=s.n(1);5 s};l.L=8(p){6(p.7(l.o)>-1)p=p.n(0,p.7(l.o));6(p.7(l.t)>-1)p=p.n(0,p.7(l.t));5 p};l.V=8(){4 a={};y(4 b x 9)y(4 k x 9[b])a[k]=9[b][k];5 a};5 l};4 1a=S();',62,73,'||||var|return|if|indexOf|function|arguments|||||||||||||length|substr|querySeperator||push|typeof||hashSeperator|stringify|split|parse|in|for|case|undefined|else|_access|_cleanParamStr|_all|encodeURIComponent|_hash|hashQuerySeperator|_query|location|hashstring|_cleanPath|querystring|urlUseHash|object|decodeURIComponent|continue|val|MakeArg|break|switch|merge|join|all|hash|hasOwnProperty|false|pathname|url|get|query|parseInt|true|search|while|version|Arg'.split('|'),0,{}));
