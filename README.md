# bauer-exec
Wrapper for child_process.spawn.

## Installation

```
npm install bauer-exec
```

## Usage

```js
var Exec = require("bauer-exec");

var nodejs = new Exec({
  cmd: "node",
  args: ["$script$"],
  opts: {
    timeout: 2000
  }
});

nodejs.exec({ script: "./filename.js" },function(error,stdout,stderr) {
  
});

```

## API Summary

  * `Exec`
    * `new Exec(options Object) :Exec`
    * `.setCmd(cmd String) :void`
    * `.setCmd(platforms Object) :void`
    * `.getCmd() :String`
    * `.setArgs(args Array) :void`
    * `.getArgs() :Array`
    * `.setOpts(opts Object) :void`
    * `.getOpts() :Object`
    * `.exec(callback Function) :void`
    * `.exec(params Object, callback Function) :void`

# License

[MIT](./LICENSE)
