import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AddPatientComponent } from './add-patient/add-patient.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { InfoPatientComponent } from './info-patient/info-patient.component';
import {MatIconModule} from '@angular/material/icon';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { AddRDVComponent } from './add-rdv/add-rdv.component';



// a plugin!

import { SchedulerModule } from 'angular-calendar-scheduler';
import {TypographyComponent} from './typography/typography.component';
import { EssayComponent } from './essay/essay.component';
import {MatInputModule} from '@angular/material/input';
import { SalleComponent } from './salle/salle.component';



FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

const MaterialComponents = [
    MatButtonModule];


// tslint:disable-next-line:prefer-const
let PatientComponent;

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        FullCalendarModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory,
        }),
        SchedulerModule.forRoot({locale: 'en', headerDateFormat: 'daysRange'}),
        MatInputModule,

    ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    InfoPatientComponent,
    CalendrierComponent,
    AddRDVComponent,
      TypographyComponent,





  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PatientComponent],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]

})
export class AppModule { }
