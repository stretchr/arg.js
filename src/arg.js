/*

  arg.js - v1.0.1
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

(function(global){

  /**
   * MakeArg makes the Arg namespace.
   * var Arg = MakeArg();
   */
  global.MakeArg = function(){

    /** @namespace
     */
    var Arg = {
      version: "1.0.1"
    };

    /**
     * Parses the arg string into an Arg.Arg object.
     */
    Arg.parse = function(s){
      if (!s) return {};
      if (s.indexOf("=")===-1 && s.indexOf("&")===-1) return {};
      s = Arg._cleanParamStr(s);
      var obj = {};
      var pairs = s.split("&");
      for (var pi in pairs) {
        var kvsegs = pairs[pi].split("=");
        var key = decodeURIComponent(kvsegs[0]), val = decodeURIComponent(kvsegs[1]);
        Arg._access(obj, key, val, true);
      }
      return obj;
    };

    /*
     * recursively, deeply accesses an object.
     */
    Arg._access = function(current, selector, setValue, shouldSet){

      // split the selector by the first dot
      var thisSel = selector;
      var dotPos = selector.indexOf(".");
      var arrPos = selector.indexOf("[");

      if (dotPos > -1) {
        thisSel = selector.substr(0, dotPos);
        var nextSel = selector.substr(dotPos+1);
      } else if (arrPos == -1) {
        return shouldSet ? (current[selector] = setValue) : current[selector];
      }

      arrPos = thisSel.indexOf("[");

      if ((arrPos > -1 && arrPos < dotPos) || (arrPos > -1 && dotPos == -1)) {

        var arrName = thisSel.substr(0, thisSel.indexOf("["));
        var b = thisSel.split("[")[1];
        var index = parseInt(b.substr(0,b.length-1));

        current = (current[arrName] = current[arrName] || []);
        current = (current[index] = current[index] || {});

      } else {
        if (!current[thisSel]) {
          current[thisSel] = {};
        }
        current = current[thisSel] || {};
      }

      if (nextSel)
        return Arg._access(current, nextSel, setValue, shouldSet);
      else
        return current;

    };

    /**
     * Turns the specified object into a URL parameter string.
     */
    Arg.stringify = function(obj, keyPrefix) {

      switch (typeof(obj)) {
      case "object":
        var segs = [];
        var thisKey;
        for (var key in obj) {

          if (!obj.hasOwnProperty(key)) continue;
          var val = obj[key];

          if (typeof(key) === "undefined" || key.length === 0 || typeof(val) === "undefined") continue;

          thisKey = keyPrefix ? keyPrefix+"."+key : key;

          if (typeof obj.length !== "undefined") {
            thisKey = keyPrefix ? keyPrefix+"["+key+"]" : key;
          }

          if (typeof val === "object") {
            segs.push(Arg.stringify(val, thisKey));
          } else {
            segs.push(encodeURIComponent(thisKey)+"="+encodeURIComponent(val));
          }

        }
        return segs.join("&");
      }

      return encodeURIComponent(obj);

    };

    /**
     * Generates a URL with the given parameters.
     * (object) = A URL to the current page with the specified parameters.
     * (path, object) = A URL to the specified path, with the object of parameters.
     * (path, object, object) = A URL to the specified path with the first object as query parameters,
     * and the second object as hash parameters.
     */
    Arg.url = function(){

      var sep = (Arg.urlUseHash ? Arg.hashQuerySeperator : Arg.querySeperator);
      var segs = [location.pathname, sep];
      var args = {};

      switch (arguments.length) {
      case 1: // Arg.url(params)
        segs.push(Arg.stringify(arguments[0]));
        break;
      case 2: // Arg.url(path, params)
        segs[0] = Arg._cleanPath(arguments[0]);
        args = Arg.parse(arguments[0]);
        args = Arg.merge(args, arguments[1]);
        segs.push(Arg.stringify(args));
        break;
      case 3: // Arg.url(path, query, hash)
        segs[0] = Arg._cleanPath(arguments[0]);
        segs[1] = Arg.querySeperator;
        segs.push(Arg.stringify(arguments[1]));
        segs.push(Arg.hashQuerySeperator);
        segs.push(Arg.stringify(arguments[2]));
      }

      var s = segs.join("");

      // trim off sep if it's the last thing
      if (s.indexOf(sep) == s.length - sep.length) {
        s = s.substr(0, s.length - sep.length);
      }

      return s;

    };

    /** urlUseHash tells the Arg.url method to always put the parameters in the hash. */
    Arg.urlUseHash = false;

    /** The string that seperates the path and query parameters. */
    Arg.querySeperator = "?";

    /** The string that seperates the path or query, and the hash property. */
    Arg.hashSeperator = "#";

    /** The string that seperates the the path or query, and the hash query parameters. */
    Arg.hashQuerySeperator = "#?";

    /**
     * Gets all parameters from the current URL.
     */
    Arg.all = function(){
      var merged = Arg.parse(Arg.querystring() + "&" + Arg.hashstring());
      return Arg._all ? Arg._all : Arg._all = merged;
    };

    /**
     * Gets a parameter from the URL.
     */
    Arg.get = function(selector, def){
      var val = Arg._access(Arg.all(), selector);
      return typeof(val) === "undefined" ? def : val;
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

      if (s.indexOf(Arg.querySeperator)>-1)
        s = s.split(Arg.querySeperator)[1];

      if (s.indexOf(Arg.hashSeperator)>-1)
        s = s.split(Arg.hashSeperator)[1];

      if (s.indexOf("=")===-1 && s.indexOf("&")===-1)
        return "";

      while (s.indexOf(Arg.hashSeperator) == 0 || s.indexOf(Arg.querySeperator) == 0)
        s = s.substr(1);

      return s;
    };

    Arg._cleanPath = function(p){

      if (p.indexOf(Arg.querySeperator)>-1)
        p = p.substr(0,p.indexOf(Arg.querySeperator));

      if (p.indexOf(Arg.hashSeperator)>-1)
        p = p.substr(0,p.indexOf(Arg.hashSeperator));

      return p;
    };

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
  global.Arg = MakeArg();

})(window);
