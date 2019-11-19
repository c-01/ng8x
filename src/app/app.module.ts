import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BtnDemoComponent } from './components/btn-demo/btn-demo.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  // @Decorator
  declarations: [
    AppComponent,
    HelloComponent,
    LifeCycleComponent,
    CartIconComponent,
    NavBarComponent,
    BtnDemoComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
