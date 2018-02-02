![Angular](HTML5_Logo.png "Angular")
![Arrows](if_arrow_7_393270.png "Arrows")
![Qlik Sense](icon_SenseLibrary.jpg "Qlik Sense")

# Simple Html template that uses [qdt-components](https://github.com/qlik-demo-team/qdt-components)

### [Live Demo](https://webapps.qlik.com/qdt-components/plain-html/index.html) 

### Installation
- Download the [latest build](https://github.com/qlik-demo-team/qdt-components/tree/master/dist/qdt-components.js) 

### Usage
- In your Html
```html
    <head>
        <script type="text/javascript" src="qdt-components.js"></script>
    </head>
    <body>
        <div id="qdt1"></div>
    </body>
```

- In your Javascript
```javascript
    var qConfig = {
        "config": {
            "host": "your-sense-server.com",
            "secure": true,
            "port": 443,
            "prefix": "/",
            "appId": "133dab5d-8f56-4d40-b3e0-a6b401391bde"
        },
        "connections": { 
            "vizApi": true, 
            "engineApi": false 
        }
    }
    var QdtComponent = new window.qdtComponents.default(qConfig.config, qConfig.connections);
    var element = document.getElementById('qdt1');
    QdtComponent.render('QdtViz', {id: 'a5e0f12c-38f5-4da9-8f3f-0e4566b28398', height:'300px'}, element);
```

### Copyright

Copyright 2018 QlikTech International AB

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at    

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

