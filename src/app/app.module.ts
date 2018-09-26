import { BrowserModule } from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector} from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './components/app/app.component';
import { ChildComponent } from './components/child/child.component';
import {createCustomElement} from '@angular/elements';
import {SnipComponent} from './components/snip/snip.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    SnipComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [ SnipComponent ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
    console.log('create AppModule');
    const aoSnip = createCustomElement(SnipComponent, {injector});
    customElements.define('app-snip', aoSnip);
  }

  ngDoBootStrap() {
    console.log('calling ngDoBootStrap()');
  }
}
