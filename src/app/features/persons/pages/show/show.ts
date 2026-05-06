import { Component, inject, OnInit } from '@angular/core';
import { myPersons } from '../../constants/my-persons';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { myCities } from '../../constants/my-cities';
import { myEvents } from '../../constants/my-events';
import { myImages } from '../../constants/my-images';
import { Person } from '../../models/persons';

type Event = {
  id: number;
  date: string;
  description: string;
  event_type_id: number;
  person_id: number;
  image_id: number | null;
  city_id: number | null;
  created_at: string;
  updated_at: string;
};

type City = {
  id: number;
  name: string;
  department: { id: number; name: string; region: { name: string; country: { name: string } } };
};

@Component({
  selector: 'app-show',
  imports: [RouterLink, DatePipe],
  templateUrl: './show.html',
  styleUrl: './show.css',
})
export class Show implements OnInit {
  private myPersons: Person[] = myPersons;
  private myCities: City[] = myCities;
  private myEvents: Event[] = myEvents;
  private myImages = myImages;
  private route = inject(ActivatedRoute);
  private navigateRouter = inject(Router);
  public personSelected: Person | null = null;
  public eventSelected: Event[] = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.personSelected =
          this.myPersons.find((person: Person) => '' + person.id === id) || null;
        const personEvents: any[] =
          this.personSelected && this.personSelected.events ? this.personSelected.events : [];
        this.eventSelected = personEvents.map((event: Event) => {
          const evt = this.getEvent(event.id);
          return evt ? evt : event;
        });
      }
    });
  }

  getName(): string {
    return this.personSelected
      ? this.personSelected.first_name + ' ' + this.personSelected.last_name
      : '';
  }

  getGender(): string {
    return this.personSelected && this.personSelected?.gender_id == 1 ? 'Male' : 'Female';
  }

  getAge(): string {
    return this.personSelected?.age ? `${this.personSelected.age} years` : '';
  }

  getEvent(eventId: number): Event | undefined {
    return this.myEvents.find((event: Event) => event.id === eventId);
  }

  getImage(imageId: number | null): string {
    const imageExist = this.myImages.find((image) => image.id === imageId);
    return imageExist ? imageExist.path.replace('http:\/\/localhost:8000', '') : '';
  }

  getEventType(typeId: number): string {
    const eventType: string[] = [
      'Type inconnu',
      'Birthday',
      'Death date',
      'Wedding day',
      'Date of divorce',
      'Military service',
      'Graduation day',
      'Driving license obtained',
      'Move in date',
      'First communion',
      'Working period',
      'Other',
    ];
    return eventType[typeId] ? eventType[typeId] : 'Type inconnu';
  }

  handleClickOnEvent(eventId: number): void {
    this.navigateRouter.navigate(['/events/show', eventId]);
  }

  getCity(cityId: number | null): string {
    const myCity: City | undefined = this.myCities.find((city: City) => city.id === cityId);
    if (!myCity) {
      return '📍 Ville inconnue';
    }
    return (
      '📍 ' +
      myCity.name +
      '- ' +
      myCity.department.name +
      '- ' +
      myCity.department.region.name +
      ' (' +
      myCity.department.region.country.name +
      ')'
    );
  }
}
