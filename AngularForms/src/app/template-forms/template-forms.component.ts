import { Component } from '@angular/core';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})

export class TemplateFormsComponent {
  model: Appointment = {
    name: '',
    mail: '',
    dayOfTheWeek: 'Lunedì',
    office: 'ufficio_A',
    application0: false,
    application1: false,
    application2: false
  };

  daysOfTheWeek = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì'];

  availableOffices = [
    {id: 'A', name: 'ufficio_A'},
    {id: 'B', name: 'ufficio_B'},
    {id: 'C', name: 'ufficio_C'}
  ];

  applications = [
    {id: 0},
    {id: 1},
    {id: 2}
  ];
}
