'use strict';

var Runtime = require('../');

it('create() should return a new instance', function(){
  var runtime = Runtime.create();
  runtime.constructor.should.be.eql(Runtime);
});

it('create(object mixin) should add to the instance properties', function(){
  var props = {name: 'name'};
  var runtime = Runtime.create(props);
  (runtime).should.have.properties(props);
});

it('createClass() should return a new constructor', function(){
  var Tor = Runtime.createClass();
  Tor.super_.should.be.eql(Runtime);
  (new Tor()).constructor.should.be.eql(Tor);
});

it('createClass(object mixin) mixin with new constructor', function(){
  var mixin = {method: function(){}};
  var Ctor = Runtime.createClass(mixin);
  Ctor.prototype.should.have.property('method', mixin.method);
});


it('createClass({create: [Function]}) should be used as ctor', function(){
  var RuntimeClass = Runtime.createClass({
    create: function(){
      this.happened = true;
    }
  });
  (new RuntimeClass()).should.have.properties({happened: true});
});
