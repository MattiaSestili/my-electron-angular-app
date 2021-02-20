import { Component, OnInit } from '@angular/core';
import { Person, PersonsService } from '../persons.service';
@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.less'],
})
export class PersonsListComponent implements OnInit {
  constructor(private personsService: PersonsService) {}
  query = '';
  ngOnInit() {
    this.personsService.loadAll();
    this.query = '';
  }
  get persons(): Person[] {
    return this.personsService.persons;
  }

  remove(person) {
    this.personsService.remove(person);
  }

  search(query) {
    this.personsService.search(query);
    return this.persons;
  }
}
