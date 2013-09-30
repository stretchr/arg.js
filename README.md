# arg.js

Arg.js gives you quick and easy access to parameters in the URL.

## Getting stuff

The examples here assume this path:

    page.html?name=Mat&address[0].city=London&address[0].country=UK&address[1].city=Boulder&address[1].country=US#?fromhash=true

#### Get a single value

    Arg.get("name")
    //= "Mat"

It will get the value from both the query segment, and the hash segment.

    Arg.get("fromhash")
    //= "true"

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

### Getting everything

#### Everything with `Arg.all()`

    Arg.all()
    //= {
    //    address: [
    //      { city: "London", country: "UK" },
    //      { city: "Boulder", country: "US" }
    //    ],
    //    fromhash: "true",
    //    name: "Mat"
    //  }

  * `Arg.all()` gets all parameters (from the query and hash segments) in one object.  Optionally, you can use the `query` or `hash` methods to be specific.

#### Just the query segment with `Arg.query()`

`Arg.query()` gets an object made up of all the values in the query segment of the URL.  The query segment is everything following the initial `?`, but before the `#` (if there is one.)

    Arg.query()
    //= {
    //    address: [
    //      { city: "London", country: "UK" },
    //      { city: "Boulder", country: "US" }
    //    ],
    //    name: "Mat"
    //  }

  * Notice how the `fromhash` value is missing.

#### Just the hash segment with `Arg.hash()`

`Arg.hash()` gets an object made up of all the values in the hash segment of the URL.  The hash segment is anything following the `#`.

    Arg.hash()
    //= {
    //    fromhash: "true"
    //  }

## Building a querystring

#### `Arg.stringify`

The `Arg.stringify` method lets you easily encode an object into a query string.

    Arg.stringify({ name: "Mat" });
    //= name=Mat

##### Encoding objects

    Arg.stringify({ one: { two: { three: 3 }}});
    //= one.two.three=3

##### Encoding arrays

    Arg.stringify({list:["one","two","three"]});
    //= list[0]=one&list[1]=two&list[2]=three
