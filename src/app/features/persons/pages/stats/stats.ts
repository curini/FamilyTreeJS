import { Component } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { Map } from '../../components/map/map';
import { myStats } from '../../constants/my-stats';
import { myTitles } from '../../constants/my-titles';
import { PersonKeys } from '../../types/stat';

@Component({
  selector: 'app-stats',
  imports: [Map, KeyValuePipe],
  templateUrl: './stats.html',
  styleUrl: './stats.css',
})
export class Stats {
  stats = myStats;
  titles = myTitles;
}
