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

# License

[MIT](./LICENSE)
