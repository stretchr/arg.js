/*

  arg.js jQuery plugin - BETA

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

/*

  This file brings the power of arg.js to the DOM.

  Automatically appending parameters
  ----------------------------------

  // all args
  <a href="another-page.html?something=true" data-href-args="Arg.all()">Link</a>

  // a function call
  <a href="another-page.html?something=true" data-href-args="generateLinkArgs()">Link</a>

  // explicit data
  <a href="another-page.html?something=true" data-href-args="{more:true}">Link</a>

  NOTE: Use data-href-hash for the hash equivalent.

*/

(function($){

  $.fn.args = function(args){
    var $this = $(this);
    var url = $this.attr("href");
    $this.attr("href", Arg.url(url, args));
    return $this;
  };

  $.fn.hash = function(args){
    var $this = $(this);
    var url = $this.attr("href");
    $this.attr("href", Arg.url(url, null, args));
    return $this;
  };

  $(function(){

    $("[data-href-args]").each(function(){
      var args, $this = $(this);
      eval("args = " + $this.attr("data-href-args") + ";");
      $(this).args(args);
    });

    $("[data-href-hash]").each(function(){
      var args, $this = $(this);
      eval("args = " + $this.attr("data-href-hash") + ";");
      $(this).hash(args);
    });

  });

})(jQuery);
