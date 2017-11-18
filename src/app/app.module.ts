import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppRoutingModule } from './app-routing.module';
import { DxMapModule, DxSelectBoxModule, DxCheckBoxModule} from 'devextreme-angular';
import { DxButtonModule } from 'devextreme-angular';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxMapModule,DxSelectBoxModule,DxCheckBoxModule,DxButtonModule,
    ClarityModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
