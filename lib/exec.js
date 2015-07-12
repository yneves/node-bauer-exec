/*!
**  bauer-exec -- Simple wrapper for child_process.execFile.
**  Copyright (c) 2015 Yuri Neves Silveira <http://yneves.com>
**  Licensed under The MIT License <http://opensource.org/licenses/MIT>
**  Distributed on <http://github.com/yneves/node-bauer-exec>
*/
// - -------------------------------------------------------------------- - //

"use strict";

var cp = require("child_process");
var path = require("path");
var factory = require("bauer-factory");

// - -------------------------------------------------------------------- - //

var Exec = factory.createClass({
  
  constructor: {
    
    // new Exec(options Object) :Exec
    o: function(options) {
      this.setCmd(options.cmd);
      this.setArgs(options.args);
      this.setOpts(options.opts);
    }
  },
  
  setCmd: {
    
    // .setCmd(cmd String) :void
    s: function(cmd) {
      this.cmd = path.resolve(cmd);
    },
    
    // .setCmd(platforms Object) :void
    o: function(platforms) {
      if (platforms[process.platform]) {
        this.setCmd(platforms[process.platform]);
      } else {
        throw new Error("platform not specified");
      }
    }
  },
  
  getCmd: {
    
    // .getCmd() :String
    0: function() {
      return this.cmd;
    }
  },
  
  setArgs: {
    
    // .setArgs(args Array) :void
    a: function(args) {
      this.args = args;
    }
  },
  
  getArgs: {
    
    // .getArgs() :Array
    0: function() {
      return this.args;
    }
  },

  setOpts: {
    
    // .setOpts(opts Object) :void
    o: function(opts) {
      this.opts = opts;
    }
  },
  
  getOpts: {
    
    // .getOpts() :Object
    0: function() {
      return this.opts;
    }
  },
  
  exec: {
    
    // .exec(callback Function) :void
    f: function(callback) {
      var cmd = this.getCmd();
      var args = this.getArgs();
      var opts = this.getOpts();
      this._execFile(cmd,args,opts,callback);
    },
    
    // .exec(params Object, callback Function) :void
    of: function(params,callback) {
      var cmd = this.getCmd();
      var args = this.getArgs().map(function(arg) {
        if (params["$" + arg + "$"]) {
          return params["$" + arg + "$"];
        } else {
          return arg;
        }
      });
      var opts = this.getOpts();
      this._execFile(cmd,args,opts,callback);
    }
  },
  
  _execFile: function(cmd,args,opts,callback) {
    cp.execFile(cmd,args,opts,function(error,stdout,stderr) {
      if (error) {
        callback(error);
      } else {
        callback(null,stdout,stderr);
      }
    });
  }
  
});

// - -------------------------------------------------------------------- - //

module.exports = Exec;

// - -------------------------------------------------------------------- - //
