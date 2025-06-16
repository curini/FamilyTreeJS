import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Node } from '../interfaces/node';

@Injectable({
  providedIn: 'root',
})
export class FamiliesService {
  constructor(private http: HttpClient) {}

  getFamilies(): Observable<Node[]> {
    return this.http.get<Node[]>('/assets/families.json');
  }
}
