import 'zone.js/dist/zone-node';
import { enableProdMode } from '@angular/core';
// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import * as express from 'express';
import { join } from 'path';
// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();
// Express server
var app = express();
var domino = require("domino");
var fs = require("fs");
var compression = require("compression");
var path = require("path");
var templateA = fs
    .readFileSync(path.join("dist/browser", "index.html"))
    .toString();
var win = domino.createWindow(templateA);
app.use(compression());
global['document'] = win.document;
global['KeyboardEvent'] = null;
global['Event'] = null;
var PORT = process.env.PORT || 4200;
var DIST_FOLDER = join(process.cwd(), 'dist/browser');
// * NOTE :: leave this as require() since this file is built Dynamically from webpack
var _a = require('./dist/server/main'), AppServerModuleNgFactory = _a.AppServerModuleNgFactory, LAZY_MODULE_MAP = _a.LAZY_MODULE_MAP;
// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [
        provideModuleMap(LAZY_MODULE_MAP)
    ]
}));
app.set('view engine', 'html');
app.set('views', DIST_FOLDER);
// Example Express Rest API endpoints
// app.get('/api/**', (req, res) => { });
// Serve static files from /browser
app.get('*.*', express.static(DIST_FOLDER, {
    maxAge: '1y'
}));
// All regular routes use the Universal engine
app.get('*', function (req, res) {
    res.render('index', { req: req });
});
// Start up the Node server
app.listen(PORT, function () {
    console.log("Node Express server listening on http://localhost:" + PORT);
});
//# sourceMappingURL=server.js.map