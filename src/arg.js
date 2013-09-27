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

/**
 * ArgReset resets Arg.
 */
var ArgReset = function(){

  Arg = {};

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
      Arg._access(obj, key, true, true, val);
    }
    return obj;
  };

  Arg._access = function(current, selector, ensureDeep, shouldSet, setValue){


    // split the selector by the first dot
    var dotPos = selector.indexOf(".");

    if (dotPos > -1) {

      thisSel = selector.substr(0, dotPos);
      var nextSel = selector.substr(dotPos+1);

    } else {

      if (shouldSet)
        current[selector] = setValue;

      return current[selector];
    }

    if (thisSel.indexOf("[") > -1) {

      var arrName = thisSel.substr(0, thisSel.indexOf("["));
      var b = thisSel.split("[")[1];
      var index = parseInt(b.substr(0,b.length-1));

      current = (current[arrName] = current[arrName] || []);
      current = (current[index] = current[index] || {});

      // update the selectors
      thisSel = thisSel.substr(thisSel.indexOf("]")+1);

    }

    if (!current[thisSel] && ensureDeep) {
      current[thisSel] = {};
    }

    current = current[thisSel];

    return Arg._access(current, nextSel, ensureDeep, shouldSet, setValue);

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
   * Gets all parameters from the current URL.
   */
  Arg.all = function(){
    return Arg._all ? Arg._all : Arg._all = Arg.merge(Arg.query(), Arg.hash());
  };

  /**
   * Gets the query string parameters from the current URL.
   */
  Arg.query = function(){
    return Arg._query ? Arg._query : Arg._query = Arg.parse(Arg.querystring());
  };

  /**
   * Gets the hash string parameters from the current URL.
   */
  Arg.hash = function(){
    return Arg._hash ? Arg._hash : Arg._hash = Arg.parse(Arg.hashstring());
  };

  /**
   * Gets the query string from the URL (the part after the ?).
   */
  Arg.querystring = function(){
    return Arg._cleanParamStr(location.search);
  };

  /**
   * Gets the hash param string from the URL (the part after the #).
   */
  Arg.hashstring = function(){
    return Arg._cleanParamStr(location.hash)
  };

  /*
   * Cleans the URL parameter string stripping # and ? from the beginning.
   */
  Arg._cleanParamStr = function(s){
    while (s.indexOf("#") == 0 || s.indexOf("?") == 0) {
      s = s.substr(1);
    }
    return s;
  };

  /*
   * Ensures objects exist in obj all the way to the path.
   */
  Arg._ensureDeep = function(obj, path) {
    var segs = path.split(".");
    var current = obj;
    for (var s in segs) {
      var seg = segs[s];
      current = (current[seg] = current[seg] || {});
    }
  }

  /**
   * Merges all the arguments into a new object.
   */
  Arg.merge = function(){
    var all = {};
    for (var ai in arguments)
      for (var k in arguments[ai])
        all[k] = arguments[ai][k];
    return all;
  };

  return Arg;

};

/** @namespace
 * Arg is the root namespace for all arg.js functionality.
 */
var Arg = ArgReset();
