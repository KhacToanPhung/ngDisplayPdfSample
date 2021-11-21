import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe-no-toolbar',
  templateUrl: './iframe-no-toolbar.component.html',
  styleUrls: ['./iframe-no-toolbar.component.scss']
})
export class IframeNoToolbarComponent implements OnInit {

  public urlNoToolbar: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer
  ) {
    this.urlNoToolbar = this.sanitizer.bypassSecurityTrustResourceUrl('./assets/report.pdf#toolbar=0');
  }

  ngOnInit(): void {
  }

}
