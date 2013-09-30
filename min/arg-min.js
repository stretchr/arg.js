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
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('4 R=6(){4 l={10:"1"};l.q=6(s){7(!s)5{};s=l.v(s);4 a={};4 b=s.I("&");t(4 c r b){4 d=b[c].I("=");4 e=S(d[0]),O=S(d[1]);l.z(a,e,O,14)}5 a};l.z=6(a,c,d,e){4 f=c;4 g=c.m(".");4 h=c.m("[");7(g>-1){f=c.o(0,g);4 i=c.o(g+1)}u 7(h==-1){5 e?(a[c]=d):a[c]}h=f.m("[");7((h>-1&&h<g)||(h>-1&&g==-1)){4 j=f.o(0,f.m("["));4 b=f.I("[")[1];4 k=W(b.o(0,b.n-1));a=(a[j]=a[j]||[]);a=(a[k]=a[k]||{})}u{7(!a[f]){a[f]={}}a=a[f]||{}}7(i)5 l.z(a,i,d,e);u 5 a};l.p=6(a,b){Q(w(a)){x"P":4 c=[];4 d;t(4 e r a){7(!a.X(e))Y;4 f=a[e];d=b?b+"."+e:e;7(w a.n!=="L"){d=b?b+"["+e+"]":e}7(w f==="P"){c.9(l.p(f,d))}u{c.9(G(d)+"="+G(f))}}5 c.K("&")}5 G(a)};l.13=6(){4 a=(l.U?l.H:l.y);4 b=[F.Z,a];Q(8.n){x 1:b.9(l.p(8[0]));M;x 2:b[0]=8[0];b.9(l.p(8[1]));M;x 3:b[0]=8[0];b[1]=l.y;b.9(l.p(8[1]));b.9(l.H);b.9(l.p(8[2]))}4 s=b.K("");7(s.m(a)==s.n-a.n){s=s.o(0,s.n-a.n)}5 s};l.U=V;l.y="?";l.N="#";l.H="#?";l.J=6(){4 a=l.q(l.E()+"&"+l.C());5 l.B?l.B:l.B=a};l.11=6(a,b){4 c=l.z(l.J(),a);5 w(c)==="L"?b:c};l.12=6(){5 l.A?l.A:l.A=l.q(l.E())};l.T=6(){5 l.D?l.D:l.D=l.q(l.C())};l.E=6(){5 l.v(F.15)};l.C=6(){5 l.v(F.T)};l.v=6(s){16(s.m(l.N)==0||s.m(l.y)==0){s=s.o(1)}5 s};l.17=6(){4 a={};t(4 b r 8)t(4 k r 8[b])a[k]=8[b][k];5 a};5 l};4 18=R();',62,71,'||||var|return|function|if|arguments|push|||||||||||||indexOf|length|substr|stringify|parse|in||for|else|_cleanParamStr|typeof|case|querySeperator|_access|_query|_all|hashstring|_hash|querystring|location|encodeURIComponent|hashQuerySeperator|split|all|join|undefined|break|hashSeperator|val|object|switch|MakeArg|decodeURIComponent|hash|urlUseHash|false|parseInt|hasOwnProperty|continue|pathname|version|get|query|url|true|search|while|merge|Arg'.split('|'),0,{}));
