import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as Parse from 'parse';

Parse.initialize('myAppId', 'javascriptkey'); // use your appID & your js key
(Parse as any).serverURL = 'http://138.68.251.183:1337/parse'; // use your server url

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';
  
  ngOnInit(): void {
    
    // const user = Parse.User.logIn("arshak", "arshak90").then(function (data) {
    //   debugger
    // });
    // debugger
    // let Stores = Parse.Object.extend("QuestionAnswer");
    // let query = new Parse.Query(Stores);
    // query.find().then(function(results) {
    //   console.log(results);
    // });
  }
  
  ngAfterViewInit() {
    const script = document.createElement('script');
    script.src = 'assets/js/functions.js';
    document.body.appendChild(script);
  }
  
}
