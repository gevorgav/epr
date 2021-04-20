import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {

  constructor(private titleService: Title,
              private metaService: Meta) {
  }

  ngOnInit() {
    this.titleService.setTitle('Privacy Statement/Terms of Use ');
    this.metaService.updateTag({
      name: 'description', content: `
    Entertainment Party Rentals, LLC is committed to the protection of your personal information held within our company. This Internet Privacy Statement demonstrates our commitment to your privacy.
    `
    });
  }

}
