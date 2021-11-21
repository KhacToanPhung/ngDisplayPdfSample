import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'displayPdfSample';
  public url: SafeResourceUrl;
  public urlNoToolbar: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer
  ) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('./assets/report.pdf');
    this.urlNoToolbar = this.sanitizer.bypassSecurityTrustResourceUrl('./assets/report.pdf#toolbar=0');
  }
  ngOnInit(): void {

  }
}
