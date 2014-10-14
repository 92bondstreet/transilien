# TRANSILIEN

[http://www.transilien.com/](Transilien) is the brand name for all SNCF trains operating within the Île-de-France région.

## Keynote

Get the status (`ok` or `ko`) of the railways traffic according Lines.

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

## Methods

```
transilien.lignes([code],callback)
```

With

* `code`, optional, array containing list of Lines code
* `callback` with error return and Lines traffic status results.


Callback receives `(error, response)`.

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
