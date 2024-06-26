import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {SequencerComponent} from './components/sequencer/sequencer.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        SequencerComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

