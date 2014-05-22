# trigger-event

Programmatically trigger a DOM event.

Rewrite of
[ianstormtaylor/trigger-event](https://github.com/ianstormtaylor/trigger-event)
for npm+browserify support.

## Example

``` javascript
var triggerEvent = require('trigger-event');

triggerEvent(document, 'keydown', {key: 'enter'});
triggerEvent('keydown', {key: 'enter'})
```

## Installation

``` bash
$ npm install trigger-event
```

## API

``` javascript
var triggerEvent = require('trigger-event');
```

### triggerEvent([element, ]type[, options])

Programmatically triggers a DOM event of `type`:

  - `'click'`
  - `'dblclick'`
  - `'keydown'`
  - `'keyup'`

`document` is used if `element` is not provided.

Default `options`:

``` javascript
{
  alt: false,
  bubbles: true,
  button: 0,
  cancelable: true,
  clientX: 0,
  clientY: 0,
  ctrl: false,
  detail: 1,
  key: 0,
  meta: false,
  relatedTarget: null,
  screenX: 0,
  screenY: 0,
  shift: false,
  view: window
}
```