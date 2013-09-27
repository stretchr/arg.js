/*

  arg.js
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

/** @namespace
 * Arg is the root namespace for all arg.js functionality.
 */
var Arg = Arg || {};

/**
 * Parses the arg string into an Arg.Arg object.
 */
Arg.parse = function(s){
  if (!s) return {};
  var obj = {};
  var pairs = s.split("&");
  for (var pi in pairs) {
    var kvsegs = pairs[pi].split("=");
    var key = decodeURIComponent(kvsegs[0]), val = decodeURIComponent(kvsegs[1]);
    obj[key] = val;
  }
  return obj;
};

/**
 * Turns the specified object into a URL parameter string.
 */
Arg.stringify = function(obj) {
  var segs = [];
  for (var key in obj) {
    var val = obj[key];
    segs.push(encodeURIComponent(key)+"="+encodeURIComponent(val));
  }
  return this._s = segs.join("&");
};

/**
 * Gets the query string parameters from the current URL.
 */
Arg.query = function(){
  return Arg.parse(Arg.querystring());
};

/**
 * Gets the hash string parameters from the current URL.
 */
Arg.hash = function(){
  return Arg.parse(Arg.hashstring());
};

/**
 * Gets the query string from the URL (the part after the ?).
 */
Arg.querystring = function(){
  return location.search.substr(1);
};

/**
 * Gets the hash param string from the URL (the part after the #).
 */
Arg.hashstring = function(){
  return location.hash.substr(1);
};
