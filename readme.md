# transilien

<!--
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]
-->

> Get the status (ok or ko) of the railways traffic according Lines.

## Keynote

Get the status (`ok` or `ko`) of the railways traffic according Lines.

## Install

```sh
$ npm install --save transilien
```


## Usage

```
var transilien = require('transilien');

// Get traffic status for all Lines
transilien.lignes(callback);

// Get traffic status for Lines L and U
transilien.lignes(["L","U"],callback);

```

### Callback results example

```
[{
	"line": "L",
	"status": "ok",
	"message": "Trafic normal"
},
{
	"line": "N",
	"status": "nok",
	"message": "Ligne N : retards Paris Montparnasse - Dreux"
}]
```

## Methods

```
transilien.lignes([code],callback)
```

With

* `code`, optional, array containing list of Lines code
* `callback` with error return and Lines traffic status results.

### Status Schema

```
{
	"title": "Line status",
	"type": "object",
	"properties": {
		"line": {
			"type": "string",
			"description": "Code line"
		},
		"status": {
			"type": "string",
			"description": "Traffic status"
		},
    "message": {
      "type": "string",
			"description": "Traffic message"
    }
	},
	"required": ["line", "status", "message"]
}
```

### JSON Example

```
{
  "line": "L",
  "status": "ok",
  "message": "Trafic normal"
}
```

## License

MIT © [Yassine AZZOUT](yass.io)


[npm-url]: https://npmjs.org/package/transilien2
[npm-image]: https://badge.fury.io/js/transilien2.svg
[travis-url]: https://travis-ci.org/92bondstreet/transilien2
[travis-image]: https://travis-ci.org/92bondstreet/transilien2.svg?branch=master
[daviddm-url]: https://david-dm.org/92bondstreet/transilien2.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/92bondstreet/transilien2
