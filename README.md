# ractive-dynamodb-json-editor

Ractivejs component for editing dynamodb style json object.  
Has no dependencies other than [Ractive framework](https://ractive.js.org/)  

## Usage

_Note: this component is a self-registering CommonJS module, and in the browser
requires a module system such as Webpack or Browserify._

    npm install @awspilot/ractive-dynamodb-json-editor

### ES5:

```js
var Ractive = require('ractive');
var jsoneditor = require('@awspilot/ractive-dynamodb-json-editor');
Ractive.components.jsoneditor = jsoneditor;
```

### ES6/2015+:

```js
import Ractive from 'ractive';
import jsoneditor from '@awspilot/ractive-dynamodb-json-editor';
Ractive.components.jsoneditor = jsoneditor;
```

### In Ractive template:

```
	<jsoneditor
		item={{item}}
		style="float:left;height: 300px;margin: 20px"
		menu-style="background-color: #d5ddf6;border-bottom: 1px solid #97b0f8;"
	/>
```


### Data Types
- [x] String data type
- [x] Number data type
- [x] Boolean data type
- [x] Null data type
- [x] Binary data type
- [x] StringSet data type
- [x] NumberSet data type
- [x] BinarySet data type
- [x] List data type
- [x] Map data type

### Value Editing

- [x] String
- [x] Multiline String (textarea)
- [x] Number
- [x] Boolean
- [x] ~~Null~~ ( Yu no edit! )
- [x] Binary (as Base64 encoded string )
- [ ] Binary ( as upload )
- [x] StringSet, NumberSet, BinarySet (edit individual values)
- [ ] List
- [ ] Map

### Misc Editing

- [ ] Edit Attribute Names
- [ ] Sort inside List / Stringset / NumberSet / BinarySet
- [x] Delete from Item
- [x] Delete from StringSet
- [x] Delete from NumberSet
- [x] Delete from BinarySet
- [x] Delete from List
- [x] Delete from Map
- [ ] Append into Item
- [ ] Append into List
- [ ] Append into Map
- [ ] Append into StringSet
- [ ] Append into NumberSet
- [ ] Append into BinarySet


### Value Validation
