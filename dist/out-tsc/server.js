import 'zone.js/dist/zone-node';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync, readFileSync } from 'fs';
import { AppServerModule } from './src/main.server';
import { createWindow } from 'domino';
const scripts = readFileSync('dist/browser/index.html').toString();
global['window'] = createWindow(scripts);
import 'localstorage-polyfill';
global['Parse'] = require('parse/node');
Parse.initialize('myAppId', 'javascriptkey'); // use your appID & your js key
Parse.serverURL = 'https://entertainmentpartyrentals.com/parse'; // use your server url
global['localStorage'] = localStorage;
// The Express app is exported so that it can be used by serverless Functions.
export function app() {
    const server = express();
    const distFolder = join(process.cwd(), 'dist/browser');
    const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';
    // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
    server.engine('html', ngExpressEngine({
        bootstrap: AppServerModule,
    }));
    server.set('view engine', 'html');
    server.set('views', distFolder);
    // Example Express Rest API endpoints
    // server.get('/api/**', (req, res) => { });
    // Serve static files from /browser
    server.get('*.*', express.static(distFolder, {
        maxAge: '1y'
    }));
    server.get('/api/home-page', (req, res) => {
        const SettingsParse = Parse.Object.extend('Settings');
        const settingsParse = new SettingsParse();
        const query = new Parse.Query(settingsParse);
        query.first().then(value => {
            res.status(200).send(value);
        });
    });
    server.get('/api/category/:categoryTitle', (req, res) => {
        const category = Parse.Object.extend('Category');
        const query = new Parse.Query(category).equalTo('title', req.params.categoryTitle);
        query.first().then(value => {
            res.status(200).send(value);
        });
    });
    server.get('/api/product/:productId', (req, res) => {
        const Product = Parse.Object.extend('Product');
        const query = new Parse.Query(Product);
        query.equalTo('objectId', req.params.productId);
        query.first().then((result) => {
            res.status(200).send(result);
        });
    });
    // All regular routes use the Universal engine
    server.get('*', (req, res) => {
        res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
    });
    return server;
}
function run() {
    const port = process.env.PORT || 4200;
    // Start up the Node server
    const server = app();
    server.listen(port, () => {
        console.log(`Node Express server listening on http://localhost:${port}`);
    });
}
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
    run();
}
export * from './src/main.server';
//# sourceMappingURL=server.js.map