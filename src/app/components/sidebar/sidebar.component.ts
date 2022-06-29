import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Acceuil',  icon: 'dashboard', class: '' },
    { path: '/table-list', title: 'Patients',  icon:'people', class: '' },
    { path: '/newCalendar', title: 'Calendrier',  icon:'calendar_month', class: '' },
    { path: '/salle', title: 'Salle Attente',  icon:'people', class: '' },
    { path: '/icons', title: 'Factures',  icon:'receipt', class: '' },



];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
