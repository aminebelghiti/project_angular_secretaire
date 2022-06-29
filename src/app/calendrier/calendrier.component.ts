import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
@Component({
  selector: 'calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css']
})
export class CalendrierComponent implements OnInit {
  events: any = [
    { title: 'event 1', date: '2022-06-19', color:'#0000FF' },
    { title: 'event 2', date: '2022-06-22' , color:'#0000FF'}
  ]
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    events: this.events,
    weekends: true
  };



  constructor() { }

  ngOnInit(): void {
  }

}
