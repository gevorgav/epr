import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as Parse from 'parse';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';

Parse.initialize('myAppId', 'javascriptkey'); // use your appID & your js key
(Parse as any).serverURL = 'http://138.68.251.183:1337/parse'; // use your server url

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';
  
  
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private titleService: Title) {
  }
  
  ngOnInit(): void {
    this.setTitles();

    // const user = Parse.User.logIn("arshak", "arshak90").then(function (data) {
    //   Parse.Cloud.run("SendTest", {}).then(function(result) {
    //     // make sure the set the email sent flag on the object
    //     console.log("result :" + JSON.stringify(result))
    //   }, function(error) {
    //     // error
    //   });
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
  
  private setTitles() {
    this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)
    )
    .subscribe((event) => this.titleService.setTitle(event['title']));
  }
}
