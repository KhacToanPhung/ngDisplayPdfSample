import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IframeNoToolbarComponent } from './components/iframe-no-toolbar/iframe-no-toolbar.component';
import { NormalIframeComponent } from './components/normal-iframe/normal-iframe.component';
import { RenderWithPdfViewerComponent } from './components/render-with-pdf-viewer/render-with-pdf-viewer.component';


const routes: Routes = [
  {
    path: 'normal-iframe',
    component: NormalIframeComponent,
    data: { title: 'Normal iframe component' },
  },
  {
    path: 'iframe-no-toolbar',
    component: IframeNoToolbarComponent,
    data: { title: 'iframe no toolbar component' },
  }
  ,
  {
    path: 'render-with-pdf-viewer',
    component: RenderWithPdfViewerComponent,
    data: { title: 'Render with PDF viewer component' },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
