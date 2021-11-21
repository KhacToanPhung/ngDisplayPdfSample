import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-render-with-pdf-viewer',
  templateUrl: './render-with-pdf-viewer.component.html',
  styleUrls: ['./render-with-pdf-viewer.component.scss']
})
export class RenderWithPdfViewerComponent implements OnInit {

  public url = './assets/report.pdf';

  constructor() { }

  ngOnInit(): void {
  }

}
