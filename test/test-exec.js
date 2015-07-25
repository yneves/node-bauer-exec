// - -------------------------------------------------------------------- - //

"use strict";

var assert = require("assert");
var Exec = require("../");

var options = {
  cmd: "node",
  args: ["$script$","$param$-test"],
  opts: {}
};

// - -------------------------------------------------------------------- - //

describe("Exec",function() {
  
  it("constructor error",function() {
    assert.throws(function() {
      var exec = new Exec();
    },/signature not found/);
  });
  
  it("constructor ok",function() {
    var exec = new Exec(options);
    assert.ok(exec instanceof Exec);
  });
  
  it("exec",function(done) {
    var exec = new Exec(options);
    exec.exec({ 
      script: __dirname + "/sample/sample.js", 
      param: "test-param"
    },function(error,stdout,stderr) {
      assert.strictEqual(error,null);
      assert.strictEqual(stdout,"test-param-test");
      assert.strictEqual(stderr,"");
      done();
    });
  });
  
});

// - -------------------------------------------------------------------- - //
