import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
  reactiveForm: FormGroup;
  mail: string = "";

  constructor(private formBuilder: FormBuilder) {
    this.reactiveForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20)
        ]
      ],
      mail: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9-.]+\\.[a-z]{2,}$')
        ]
      ],
      dayOfTheWeek: ['Lunedì'],
      fullAddress: this.formBuilder.group({
        address: [''],
        city: [''],
        zipCode: ['']
      }),
      office: ['ufficio_A'],
      applications: this.formBuilder.group({
        application_0: [false],
        application_1: [false],
        application_2: [false],
      })
    });
  }

  daysOfTheWeek = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì'];


  availableOffices = [
    {id:"A", name:"ufficio_A"},
    {id:"B", name:"ufficio_B"},
    {id:"C", name:"ufficio_C"}
  ];

  applications = [
    {id:0},
    {id:1},
    {id:2}
  ];
}
