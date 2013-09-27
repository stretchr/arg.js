
var TestArgString = "name=Ryan&number=27&state=CO";

describe("Arg", function(){

  it("namespace should be defined", function(){
    expect(Arg).toBeDefined();
  });

  it("should be able to process a URL string into an Arg.Args object", function(){

    var a = Arg.parse(TestArgString);
    expect(a).toBeDefined();

  });

});
describe("Arg.Args", function(){

  it("should be able to parse the string into a data object", function(){
    var args = new Arg.Args();
    var obj = args.parse(TestArgString);
    expect(obj["name"]).toEqual("Ryan");
    expect(obj["number"]).toEqual("27");
    expect(obj["state"]).toEqual("CO");
  });

  it("should return the string via toString()", function(){
    var a = Arg.parse(TestArgString);
    expect(a.toString()).toEqual(TestArgString);
  })

  it("should get values via get()", function(){
    var a = Arg.parse(TestArgString);
    expect(a.get("name")).toEqual("Ryan");
  });

});
