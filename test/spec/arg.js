
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

  it("namespace should be defined", function(){
    expect(Arg).toBeDefined();
  });

  it("should be able to parse the string into a data object", function(){
    var obj = Arg.parse(TestArgString);
    expect(obj["name"]).toEqual("Ryan");
    expect(obj["number"]).toEqual("27");
    expect(obj["state"]).toEqual("CO");
  });

  it("should be able to get the URL parameter string", function(){

    setupParams("?" + TestArgString);
    expect(Arg.querystring()).toEqual(TestArgString);
    expect(Arg._querystring).toEqual(TestArgString);

    Arg._querystring = "changed=true";
    expect(Arg.querystring()).toEqual("changed=true");

    setupParams("?" + TestArgString + "#something=else");
    delete Arg._querystring;
    expect(Arg.querystring()).toEqual(TestArgString);

  });

  it("should be able to get the hash parameter string", function(){

    setupParams("?something=else#" + TestArgString);
    expect(Arg.hashstring()).toEqual(TestArgString);
    expect(Arg._hashstring).toEqual(TestArgString);

    Arg._hashstring = "changed=true";
    expect(Arg.hashstring()).toEqual("changed=true");

    setupParams("#" + TestArgString);
    delete Arg._hashstring;
    expect(Arg.hashstring()).toEqual(TestArgString);

  });

  it("should be able to get the POJO from the querystring via query()", function(){

    setupParams("?" + TestArgString);
    var args = Arg.query();

    expect(args["name"]).toEqual("Ryan");
    expect(args["number"]).toEqual("27");
    expect(args["state"]).toEqual("CO");

  });

  it("should be able to get the POJO from the querystring via hash()", function(){

    setupParams("#" + TestArgString);
    var args = Arg.hash();

    expect(args["name"]).toEqual("Ryan");
    expect(args["number"]).toEqual("27");
    expect(args["state"]).toEqual("CO");

  });

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

});
