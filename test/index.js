const test = require('tape');
const bind = require('component-event').bind;
const document = require('global/document');

const triggerEvent = require('../');

test('triggers a click event', (t) => {
  t.plan(1);
  const el = document.createElement('div');

  bind(el, 'click', (e) => {
    t.ok(e.ctrlKey);
  });
  triggerEvent(el, 'click', { ctrl: true });
});

test('triggers a dblclick event', (t) => {
  t.plan(1);
  const el = document.createElement('div');

  bind(el, 'dblclick', (e) => {
    t.ok(e.ctrlKey);
  });
  triggerEvent(el, 'dblclick', { ctrl: true });
});

test('triggers a keydown event', (t) => {
  t.plan(1);
  const el = document.createElement('div');

  bind(el, 'keydown', (e) => {
    t.equal(e.keyCode, 27);
  });
  triggerEvent(el, 'keydown', { key: 'esc' });
});

test('triggers a keyup event', (t) => {
  t.plan(1);
  const el = document.createElement('div');

  bind(el, 'keyup', (e) => {
    t.equal(e.keyCode, 27);
  });
  triggerEvent(el, 'keyup', { key: 'esc' });
});
