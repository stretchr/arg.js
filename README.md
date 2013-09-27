# arg.js

Gives you quick and easy access to parameters in the URL.

### Usage

The examples here assume this path:

    page.html?name=Mat&address[0].city=London&address[0].country=UK&address[1].city=Boulder&address[1].country=US

#### Get a single value

    Arg.get("name")
    //= "Mat"

#### Get an array

    Arg.get("address")
    //= [
    //    { city: "London", country: "UK" },
    //    { city: "Boulder", country: "US" }
    //  ]

#### Get an object

    Arg.get("address[0]")
    //= { city: "London", country: "UK" }

#### Get a field from an object in an array

    Arg.get("address[0].city")
    //= "London"

#### Get with a default value

    Arg.get("address[0].something", "Unknown")
    //= "Unknown"

### Building a querystring

The `Arg.stringify` method lets you easily encode an object into a query string.

    Arg.stringify({ name: "Mat" });
    //= name=Mat

#### Encoding objects

    Arg.stringify({ one: { two: { three: 3 }}});
    //= one.two.three=3

#### Encoding arrays

    Arg.stringify({list:["one","two","three"]});
    //= list[0]=one&list[1]=two&list[2]=three
