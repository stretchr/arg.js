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
  return new Arg.Args(s);
};

/**
 * Decodes a URL parameter string into a POJO.
 */
Arg.toPOJO = function(s){
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

/** @class
 * Holds arg data and provides helpful functions.
 */
Arg.Args = function(s){
  this._s = s;
  this._d = Arg.toPOJO(s);
};

/**
 * Gets all arguments as a POJO.
 */
Arg.Args.prototype.all = function(){
  return this._d;
};

/**
 * Gets an encoded string representing these arguments.
 */
Arg.Args.prototype.toString = function(){
  var segs = [];
  for (var key in this._d) {
    var val = this._d[key];
    segs.push(encodeURIComponent(key)+"="+encodeURIComponent(val));
  }
  return segs.join("&");
};

/**
 * Gets the value of the specified arg.
 */
Arg.Args.prototype.get = function(key){
  return this._d[key];
}
