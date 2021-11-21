import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NormalIframeComponent } from './components/normal-iframe/normal-iframe.component';
import { IframeNoToolbarComponent } from './components/iframe-no-toolbar/iframe-no-toolbar.component';
import { RenderWithPdfViewerComponent } from './components/render-with-pdf-viewer/render-with-pdf-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    IframeNoToolbarComponent,
    RenderWithPdfViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfViewerModule
  ],
  providers: [
    NormalIframeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
