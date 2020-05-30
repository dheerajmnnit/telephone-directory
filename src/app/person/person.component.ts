import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  isEditable = false;
  @Input() personData: any;

  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('user') == null) {
      this.personData = this.personData;
    }
    else {
      this.personData = JSON.parse(localStorage.getItem('user'));
    }
  }

  editData() {
    this.isEditable = !this.isEditable;
  }

  saveData(personData) {
    localStorage.setItem('user', JSON.stringify(personData));
    this.editData();
    }
}
