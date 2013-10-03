/*

  arg.js - v1.1
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
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(6(j){j.11=6(){4 i=6(){5 i.U.1c(j,9)};i.19="1.0.1";i.w=6(s){7(!s)5{};7(s.8("=")===-1&&s.8("&")===-1)5{};s=i.y(s);4 a={};4 b=s.B("&");A(4 c z b){4 d=b[c].B("=");4 e=Q(d[0]),T=Q(d[1]);i.x(a,e,T)}5 a};i.x=6(a,b,c){4 d=l c!=="n";4 e=-1;4 f={\'L\':L,\'H\':H,\'12\':12};7(l b==\'13\'||1j.1i(b)==\'[E 1g]\'){e=b.D(/[\\.\\[]/)}7(e===-1){7(i.W){c=c&&!1f(c)?+c:c===\'n\'?n:f[c]!==n?f[c]:c}5 d?(a[b]=c):a[b]}4 g=b.v(0,e);4 h=b.v(e+1);F(b.1e(e)){u\'[\':a[g]=a[g]||[];h=h.15(\']\',\'\');7(h.D(/[\\.\\[]/)===-1){h=1b(h,10)}5 i.x(a[g],h,c);u\'.\':a[g]=a[g]||{};5 i.x(a[g],h,c)}5 a};i.t=6(a,b){F(l(a)){u"E":4 c=[];4 d;A(4 e z a){7(!a.1a(e))S;4 f=a[e];7(l(e)==="n"||e.r===0||l(f)==="n")S;d=b?b+"."+e:e;7(l a.r!=="n"){d=b?b+"["+e+"]":e}7(l f==="E"){c.m(i.t(f,d))}18{c.m(M(d)+"="+M(f))}}5 c.X("&")}5 M(a)};i.17=6(){4 a=(i.Z?i.O:i.o);4 b=[P.16,a];4 c={};F(9.r){u 1:b.m(i.t(9[0]));14;u 2:b[0]=i.N(9[0]);c=i.w(9[0]);c=i.V(c,9[1]);b.m(i.t(c));14;u 3:b[0]=i.N(9[0]);b[1]=i.o;b.m(i.t(9[1]));(l(9[2])==="13")?b.m(i.q):b.m(i.O);b.m(i.t(9[2]))}4 s=b.X("");7(s.8(a)==s.r-a.r){s=s.v(0,s.r-a.r)}5 s};i.Z=H;i.o="?";i.q="#";i.O="#?";i.W=L;i.R=6(){4 a=i.w(i.K()+"&"+i.C());5 i.I?i.I:i.I=a};i.U=6(a,b){4 c=i.x(i.R(),a);5 l(c)==="n"?b:c};i.1d=6(){5 i.G?i.G:i.G=i.w(i.K())};i.Y=6(){5 i.J?i.J:i.J=i.w(i.C())};i.K=6(){5 i.y(P.D)};i.C=6(){5 i.y(P.Y)};i.y=6(s){7(s.8(i.o)>-1)s=s.B(i.o)[1];7(s.8(i.q)>-1)s=s.B(i.q)[1];7(s.8("=")===-1&&s.8("&")===-1)5"";1h(s.8(i.q)==0||s.8(i.o)==0)s=s.v(1);5 s};i.N=6(p){7(p.8(i.o)>-1)p=p.v(0,p.8(i.o));7(p.8(i.q)>-1)p=p.v(0,p.8(i.q));5 p};i.V=6(){4 a={};A(4 b z 9)A(4 k z 9[b])a[k]=9[b][k];5 a};5 i};j.1k=11()})(1l);',62,84,'||||var|return|function|if|indexOf|arguments||||||||||||typeof|push|undefined|querySeperator||hashSeperator|length||stringify|case|substr|parse|_access|_cleanParamStr|in|for|split|hashstring|search|object|switch|_query|false|_all|_hash|querystring|true|encodeURIComponent|_cleanPath|hashQuerySeperator|location|decodeURIComponent|all|continue|val|get|merge|coerceMode|join|hash|urlUseHash||MakeArg|null|string|break|replace|pathname|url|else|version|hasOwnProperty|parseInt|apply|query|charAt|isNaN|String|while|call|toString|Arg|window'.split('|'),0,{}));
