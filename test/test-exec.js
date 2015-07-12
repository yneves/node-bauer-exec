// - -------------------------------------------------------------------- - //

"use strict";

var assert = require("assert");
var Exec = require("../");

var options = {
  cmd: "",
  args: [],
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
  
});

// - -------------------------------------------------------------------- - //
