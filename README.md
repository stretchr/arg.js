# arg.js

Gives you quick and easy access to parameters in the URL.

### Get a parameter

    // GET page.html?name=Mat&address[0].city=London&address[0].country=UK&address[1].city=Boulder&address[1].country=US

    Arg.get("name")
    //= "Mat"

    Arg.get("address")
    //= [
    //    { city: "London", country: "UK" },
    //    { city: "Boulder", country: "US" }
    //  ]

    Arg.get("address[0]")
    //= { city: "London", country: "UK" }

    Arg.get("address[0].city")
    //= "London"

    // get with default

    Arg.get("address[0].something", "Unknown")
    //= "Unknown"

