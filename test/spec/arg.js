
var TestArgString = "name=Ryan&number=27&state=CO";

function setupParams(paramString) {
  //change the url without reloading page...will break in older browsers and IE below v10
  //only for testing
  window.history.pushState(null, null, window.location.pathname + paramString);
}

function clearParams() {
  setupParams("");
}

describe("Arg", function(){

  beforeEach(function(){

    // clear out any caches
    Arg = MakeArg();

  });

  it("should know its version", function(){
    expect(Arg.version).toEqual("1.0.1");
  });

  it("namespace should be defined", function(){
    expect(Arg).toBeDefined();
  });

  it("should be able to get the URL parameter string", function(){

    setupParams("?" + TestArgString);
    expect(Arg.querystring()).toEqual(TestArgString);

    setupParams("?" + TestArgString + "#something=else");
    expect(Arg.querystring()).toEqual(TestArgString);

  });

  it("should be able to get the hash parameter string", function(){

    setupParams("?something=else#" + TestArgString);
    expect(Arg.hashstring()).toEqual(TestArgString);

    setupParams("#" + TestArgString);
    expect(Arg.hashstring()).toEqual(TestArgString);

    setupParams("?something=else#?" + TestArgString);
    expect(Arg.hashstring()).toEqual(TestArgString);

  });

  it("shouldn't get confused by trailing #", function(){

    setupParams("?something=else#");
    expect(Arg.all()["something"]).toEqual("else");

  });

  it("should be able to get the POJO from the querystring via query()", function(){

    setupParams("?" + TestArgString);
    var args = Arg.query();

    expect(args["name"]).toEqual("Ryan");
    expect(args["number"]).toEqual(27);
    expect(args["state"]).toEqual("CO");

    expect(Arg._query).toEqual(args);

    Arg._query = {
      "name": "Mat",
      "number": 30
    };
    args = Arg.query();

    expect(args["name"]).toEqual("Mat");
    expect(args["number"]).toEqual(30);


  });

  it("should be able to get the POJO from the querystring via hash()", function(){

    setupParams("#" + TestArgString);
    var args = Arg.hash();

    expect(args["name"]).toEqual("Ryan");
    expect(args["number"]).toEqual(27);
    expect(args["state"]).toEqual("CO");

    expect(Arg._hash).toEqual(args);

    Arg._hash = {
      "name": "Mat",
      "number": 30
    };
    args = Arg.hash()

    expect(args["name"]).toEqual("Mat");
    expect(args["number"]).toEqual(30);

  });

  it("should be able to get all parameters (from query and hash) via the all() method", function(){

    var params = "?name=Mat&eggs=true#number=30&state=CO"
    setupParams(params);
    var args = Arg.all();

    expect(args["name"]).toEqual("Mat");
    expect(args["number"]).toEqual(30);
    expect(args["eggs"]).toEqual(true);
    expect(args["state"]).toEqual("CO");

    expect(Arg._all).toEqual(args);

    Arg._all = {
      "name": "Mat",
      "number": 30
    };
    args = Arg.all();

    expect(args["name"]).toEqual("Mat");
    expect(args["number"]).toEqual(30);

    // check to make sure there's nothing extra hiding in the
    // all map
    for (var i in args) {
      expect(params).toContain(i);
      expect(params).toContain(args[i]);
    }

  });

  it("should give you quick access via the get method", function(){

    setupParams("?something=else&egg=123#?number=26&sausage=true");

    // standard
    expect(Arg.get("something")).toEqual("else");
    expect(Arg.get("egg")).toEqual(123);
    expect(Arg.get("number")).toEqual(26);
    expect(Arg.get("sausage")).toEqual(true);

    // defaults
    expect(Arg.get("nothing", 123)).toEqual(123);

    // deep nesting
    Arg = MakeArg();
    setupParams("?address[0].city=Boulder&name=Mat&something[0].very.deep[0].name=Ryan#?address[0].state=CO&address[1].city=Salt+Lake+City&address[1].state=UT");

    expect(Arg.get("address[0]")["city"]).toEqual("Boulder");
    expect(Arg.get("address[0]")["state"]).toEqual("CO");
    expect(Arg.get("something[0].very.deep[0].name")).toEqual("Ryan");

  });

  it("should get the value just by calling Arg() itself", function(){

    setupParams("?something=else&egg=123#?number=26&sausage=true");

    // standard
    expect(Arg("something")).toEqual("else");
    expect(Arg("egg")).toEqual(123);
    expect(Arg("number")).toEqual(26);
    expect(Arg("sausage")).toEqual(true);

    // defaults
    expect(Arg("nothing", "123")).toEqual("123");

    // deep nesting
    Arg = MakeArg();
    setupParams("?address[0].city=Boulder&name=Mat&something[0].very.deep[0].name=Ryan#?address[0].state=CO&address[1].city=Salt+Lake+City&address[1].state=UT");

    expect(Arg("address[0]")["city"]).toEqual("Boulder");
    expect(Arg("address[0]")["state"]).toEqual("CO");
    expect(Arg("something[0].very.deep[0].name")).toEqual("Ryan");

  });

});

describe("Arg.url", function(){

  it("should build a whole URL", function(){
    expect(Arg.url("http://www.google.com/", {q: "hello"})).toEqual("http://www.google.com/?q=hello");
  });

  it("should support query and hash if the user is explicit", function(){
    expect(Arg.url("http://www.google.com/", {q: "hello"}, {h: "yes"})).toEqual("http://www.google.com/?q=hello#?h=yes");
  });

  it("should respect Arg.urlUseHash", function(){
    Arg.urlUseHash = true;
    expect(Arg.url("http://www.google.com/", {q: "hello"})).toEqual("http://www.google.com/#?q=hello");
  });

  it("should default to the current page if no path is given", function(){
    Arg.urlUseHash = false;
    expect(Arg.url({q: "hello"})).toEqual(location.pathname + "?q=hello");
  });

  it("should not put the ? or #? on if there are no params", function(){
    Arg.urlUseHash = false;
    expect(Arg.url("http://www.google.com/", {})).toEqual("http://www.google.com/");
  });

  it("should blend the args IF the url already has some", function(){
    expect(Arg.url("http://www.stretchr.com/?one=1&two=2", {three:3})).toEqual("http://www.stretchr.com/?one=1&two=2&three=3");
  });

  it("should use an anchor if a stirng is specified for the hash", function(){
    expect(Arg.url("http://www.stretchr.com/", {name:"Mat"}, "anchor")).toEqual("http://www.stretchr.com/?name=Mat#anchor")
  });

  it("should work nicely with .all()", function(){

    Arg = MakeArg();
    setupParams("?something=else&egg=123#?number=26&sausage=true");

    var all = Arg.url("page.html", Arg.all());
    expect(all).toEqual("page.html?something=else&egg=123&number=26&sausage=true")

  });

});

describe("Arg.merge", function(){

  it("should be able to merge data via the merge() method", function(){

    var a = {
      "one": 1,
      "override": false
    };
    var b = {
      "two": 2,
      "override": true
    };
    var c = {
      "three": 3
    };

    var all = Arg.merge(a, b, c);

    expect(all["one"]).toEqual(1);
    expect(all["two"]).toEqual(2);
    expect(all["three"]).toEqual(3);
    expect(all["override"]).toEqual(true);

  });

});

describe("Cleaning", function(){

  it("should strip off the domain and path if present", function(){

    expect(Arg._cleanParamStr("http://www.stretchr.com/?arg=true")).toEqual("arg=true");
    expect(Arg._cleanParamStr("http://www.stretchr.com/")).toEqual("");
    expect(Arg._cleanParamStr("http://www.stretchr.com/#arg=true")).toEqual("arg=true");
    expect(Arg._cleanParamStr("http://www.stretchr.com/#?arg=true")).toEqual("arg=true");
    expect(Arg._cleanParamStr("http://www.stretchr.com/?#arg=true")).toEqual("arg=true");

  });

  it("should know how to get a clean path (without args)", function(){

    expect(Arg._cleanPath("http://www.stretchr.com/?arg=true")).toEqual("http://www.stretchr.com/");
    expect(Arg._cleanPath("http://www.stretchr.com/#arg=true")).toEqual("http://www.stretchr.com/");
    expect(Arg._cleanPath("http://www.stretchr.com/?monkey=no#arg=true")).toEqual("http://www.stretchr.com/");

  });

});

describe("Arg.parse", function(){

  it("should clean incoming strings", function(){

    var obj = Arg.parse("?" + TestArgString);
    expect(obj["name"]).toEqual("Ryan");
    expect(obj["number"]).toEqual(27);
    expect(obj["state"]).toEqual("CO");

    obj = Arg.parse("#" + TestArgString);
    expect(obj["name"]).toEqual("Ryan");
    expect(obj["number"]).toEqual(27);
    expect(obj["state"]).toEqual("CO");

    obj = Arg.parse("?#" + TestArgString);
    expect(obj["name"]).toEqual("Ryan");
    expect(obj["number"]).toEqual(27);
    expect(obj["state"]).toEqual("CO");

    obj = Arg.parse("#?" + TestArgString);
    expect(obj["name"]).toEqual("Ryan");
    expect(obj["number"]).toEqual(27);
    expect(obj["state"]).toEqual("CO");

  });

  it("shouldn't get confused when it's just a path", function(){

    var obj = Arg.parse("http://www.stretchr.com/");
    expect(obj[encodeURIComponent("http://www.stretchr.com/")]).not.toBeDefined();
    expect(Arg.stringify(obj)).toEqual("");

  });

  it("should ignore the path if parse is called with one", function(){

    var obj = Arg.parse("http://www.stretchr.com/?" + TestArgString);
    expect(obj["name"]).toEqual("Ryan");
    expect(obj["number"]).toEqual(27);
    expect(obj["state"]).toEqual("CO");

    obj = Arg.parse("http://www.stretchr.com/#" + TestArgString);
    expect(obj["name"]).toEqual("Ryan");
    expect(obj["number"]).toEqual(27);
    expect(obj["state"]).toEqual("CO");

    obj = Arg.parse("http://www.stretchr.com/?#" + TestArgString);
    expect(obj["name"]).toEqual("Ryan");
    expect(obj["number"]).toEqual(27);
    expect(obj["state"]).toEqual("CO");

    obj = Arg.parse("http://www.stretchr.com/#?" + TestArgString);
    expect(obj["name"]).toEqual("Ryan");
    expect(obj["number"]).toEqual(27);
    expect(obj["state"]).toEqual("CO");

  });

  it("should be able to parse the string into a data object", function(){
    var obj = Arg.parse(TestArgString);
    expect(obj["name"]).toEqual("Ryan");
    expect(obj["number"]).toEqual(27);
    expect(obj["state"]).toEqual("CO");
  });

  it("should be able to build deep objects using dot notation", function(){

    var s = "address.city=Boulder&address.state=CO";
    var obj = Arg.parse(s);

    expect(obj.address.city).toEqual("Boulder");
    expect(obj.address.state).toEqual("CO");

  });

  it("should be able to build arrays using array notation", function(){

    var s = "address[0].city=Boulder&address[0].state=CO&address[1].city=Salt+Lake+City&address[1].state=UT";
    var obj = Arg.parse(s);

    if (expect(obj.address).toBeDefined()) {
      expect(obj.address.length).toEqual(2);
      expect(obj.address[0].city).toEqual("Boulder");
      expect(obj.address[0].state).toEqual("CO");
      expect(obj.address[1].city).toEqual("Salt Lake City");
      expect(obj.address[1].state).toEqual("UT");
    }

  });

  it("should be able to handle very complicated nestings", function(){

    var s = "address[0].city=Boulder&name=Mat&something[0].very.deep[0].name=Ryan&address[0].state=CO&address[1].city=Salt+Lake+City&address[1].state=UT";
    var obj = Arg.parse(s);

    expect(obj.name).toEqual("Mat");
    expect(obj.something[0].very.deep[0].name).toEqual("Ryan");
    if (expect(obj.address).toBeDefined()) {
      expect(obj.address.length).toEqual(2);
      expect(obj.address[0].city).toEqual("Boulder");
      expect(obj.address[0].state).toEqual("CO");
      expect(obj.address[1].city).toEqual("Salt Lake City");
      expect(obj.address[1].state).toEqual("UT");
    }

  });

  it("should handle complicated nestings of mixed object and array types", function() {
    var expected = {
      foo : 1380670290160,
      bar : 'abc',
      baz : {
        a: 'b'
      },
      arr :[
        1,
        2,
        [
          4,
          3
        ]
      ],
      deep :[
        {
          foo : 'bar',
          baz : 'barz'
        },
        19,
        [
          'a',
          {
            deeper : 'deeper'
          }
        ]
      ]
    };

    var obj = Arg.parse(Arg.stringify(expected));
    expect(obj.foo).toEqual(1380670290160);
    expect(obj.bar).toEqual('abc');
    expect(obj.baz.a).toEqual('b');
    expect(obj.arr.length).toEqual(3);
    expect(obj.arr[2].length).toEqual(2);
    expect(obj.arr[2][0]).toEqual(4);
    expect(obj.deep.length).toEqual(3);
    expect(obj.deep[0].foo).toEqual('bar');
    expect(obj.deep[2].length).toEqual(2);
    expect(obj.deep[2][1].deeper).toEqual('deeper');
  });

});

describe("Arg.stringify", function(){

  it("should be able to turn an object into a URL string via stringify()", function(){

    var s = Arg.stringify({
      name: "Ryan",
      number: 27,
      state: "CO"
    });
    expect(s).toContain("name=Ryan");
    expect(s).toContain("number=27");
    expect(s).toContain("state=CO");

  });

  it("should encode nested objects", function(){

    var s = Arg.stringify({
      one: {
        two: 2
      }
    });
    expect(s).toContain("one.two=2");

  });

  it("should return strings untouched (but encoded)", function(){

    var s = Arg.stringify("Hello?");
    expect(s).toEqual("Hello%3F");

  });

  it("should know how to encode arrays", function(){

    var s = Arg.stringify({
      places: [
        {
          city: "London"
        }, {
          city: "Boulder"
        }
      ]
    });
    expect(decodeURIComponent(s)).toContain("places[0].city=London");
    expect(decodeURIComponent(s)).toContain("places[1].city=Boulder");

  });

  it("should ignore undefined values", function(){
    var o = {};
    var un = o.undefined;
    o[un] = "hello"
    o["b"] = 1;
    o["c"] = un;
    o["d"] = "";
    expect(Arg.stringify({"a":o.un,"b":1,"c":o.un})).toEqual("b=1")
  });

  it("should ignore keyless values", function(){
    var o = {};
    var un = o.undefined;
    o[""] = "hello"
    o["b"] = 1;
    expect(Arg.stringify(o)).toEqual("b=1")
  });

});
