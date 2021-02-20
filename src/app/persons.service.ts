import { Injectable } from '@angular/core';
import Backendless from 'backendless';

export class Person {
  firstName!: string;
  lastName!: string;
  phoneNumber?: string;
}

// const PersonsStore = Backendless.Data.of('Person');
const DUMMY_PERSONS: Person[] = [
  { firstName: 'Michael', lastName: 'Moore', phoneNumber: '555-123-433' },
  { firstName: 'Bruce', lastName: 'Springsteen', phoneNumber: '544-233-343' },
  { firstName: 'Clark', lastName: 'Kent', phoneNumber: '020141051' },
  { firstName: 'Robert', lastName: 'Downey Jr', phoneNumber: '075234823' },
];

@Injectable({
  providedIn: 'root',
})
export class PersonsService {
  public persons: Person[] = [];
  loadAll() {
    Promise.resolve(DUMMY_PERSONS).then((persons: Person[]) => {
      this.persons = persons;
    });
  }

  add(newPerson: Person) {
    return Promise.resolve(newPerson).then((savedPerson: Person) => {
      this.persons.push(savedPerson);
    });
  }

  remove(personRemoved: Person) {
    // tslint:disable-next-line: no-shadowed-variable
    return Promise.resolve(personRemoved).then((personRemoved: Person) => {
      const index = this.persons.findIndex(
        (y) =>
          y.firstName === personRemoved.firstName &&
          y.lastName === personRemoved.lastName
      );
      if (index !== -1) {
        this.persons.splice(index, 1);
      }
    });
  }

  search(query: string) {
    if (query && query.trim()) {
      this.persons = this.persons.filter(
        (y) =>
          y.firstName.toLowerCase().indexOf(query) !== -1 ||
          y.lastName.toLowerCase().indexOf(query) !== -1
      );
    } else {
      this.loadAll();
    }
  }
}
