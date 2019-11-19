import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  // @Decorator
  declarations: [AppComponent, HelloComponent, LifeCycleComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
