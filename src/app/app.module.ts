import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list'; 
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KitchenSinkComponent } from './kitchen-sink/kitchen-sink.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicImportComponent } from './dynamic-import/dynamic-import.component';

@NgModule({
  declarations: [
    AppComponent,
    KitchenSinkComponent,
    DynamicImportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }