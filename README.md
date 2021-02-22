# Angular Swagger UI Example

This repo shows how to implement swagger-ui into an angular project. Main reference and thanks goes to https://github.com/dinohorvat/swagger-editor-angular8

## Install Swagger UI

### Install

Install [swagger-ui-dist](https://www.npmjs.com/package/swagger-ui-dist)

```
npm install swagger-ui-dist --save
```

### Configuration 

Configure the angular.json file and desired component for swagger-ui.

#### `angular.json`

```js
"styles": [
    "node_modules/swagger-ui-dist/swagger-ui.css",
    "src/styles.css"
],
"scripts": [
    "node_modules/swagger-ui-dist/swagger-ui-bundle.js",
    "node_modules/swagger-ui-dist/swagger-ui-standalone-preset.js"
]
```

#### `component.ts`

```js
import { Component, OnInit } from '@angular/core';

declare const SwaggerUIBundle: any;

@Component({
  selector: 'app-swagger-ui',
  templateUrl: './swagger-ui.component.html',
  styleUrls: ['./swagger-ui.component.css']
})
export class SwaggerUiComponent implements OnInit {

  ngOnInit(): void {
    const ui = SwaggerUIBundle({
      dom_id: '#swagger-ui',
      layout: 'BaseLayout',
      presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIBundle.SwaggerUIStandalonePreset
      ],
      url: 'https://petstore.swagger.io/v2/swagger.json',
      docExpansion: 'none',
      operationsSorter: 'alpha'
    });
  }
}
```

#### `component.html`

```html
<div id="swagger-ui"></div>
```

## Using Swagger UI Themes

Add different themes to your api docs. 

### Install

 - Follow instructions above to install and configure `swagger-ui-dist`
 - Install [swagger-ui-themes](https://github.com/ostranme/swagger-ui-themes)

```bash
npm install swagger-ui-themes --save
```

### Configuration

Configure the angular.json file

#### `angular.json`

```js
"styles": [
    ...
    "node_modules/swagger-ui-themes/themes/3.x/theme-material.css",
    "src/styles.css"
]
```

> NOTE: To apply theme you can remove swagger-ui.css from angular.json styles or load swagger-ui-theme.css after.






