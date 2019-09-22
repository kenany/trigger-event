var test = require('tape');
var bind = require('component-event').bind;
var document = require('global/document');

var triggerEvent = require('../');

test('triggers a click event', function(t) {
  t.plan(1);
  var el = document.createElement('div');

  bind(el, 'click', function(e) {
    t.ok(e.ctrlKey);
  });
  triggerEvent(el, 'click', { ctrl: true });
});

test('triggers a dblclick event', function(t) {
  t.plan(1);
  var el = document.createElement('div');

  bind(el, 'dblclick', function(e) {
    t.ok(e.ctrlKey);
  });
  triggerEvent(el, 'dblclick', { ctrl: true });
});

test('triggers a keydown event', function(t) {
  t.plan(1);
  var el = document.createElement('div');

  bind(el, 'keydown', function(e) {
    t.equal(e.keyCode, 27);
  });
  triggerEvent(el, 'keydown', { key: 'esc' });
});

test('triggers a keyup event', function(t) {
  t.plan(1);
  var el = document.createElement('div');

  bind(el, 'keyup', function(e) {
    t.equal(e.keyCode, 27);
  });
  triggerEvent(el, 'keyup', { key: 'esc' });
});
