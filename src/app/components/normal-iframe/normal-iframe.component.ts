import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-normal-iframe',
  templateUrl: './normal-iframe.component.html',
  styleUrls: ['./normal-iframe.component.scss']
})
export class NormalIframeComponent implements OnInit {

  public url: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('./assets/report.pdf');
  }

}
