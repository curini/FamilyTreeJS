import { Component, inject } from '@angular/core';
import { myEvents } from '../../../persons/constants/my-events';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  imports: [],
  templateUrl: './show.html',
  styleUrl: './show.css',
})
export class Show {
  private activatedRoute = inject(ActivatedRoute);
}
