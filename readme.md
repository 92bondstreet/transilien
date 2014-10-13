# TRANSILIEN

[http://www.transilien.com/](Transilien) is the brand name for all SNCF trains operating within the Île-de-France région.

## Keynote

Get the status (`ok` or `ko`) of the railways traffic according Lines.

### Schema example

```
{
	"title": "Line status",
	"type": "object",
	"properties": {
		"line": {
			"type": "string"
		},
		"status": {
			"type": "string"
		},
    "message": {
      "type": "string"
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
