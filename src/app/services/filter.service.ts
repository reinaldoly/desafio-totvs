import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private subjectFilter = new Subject();

  constructor() { }
  sendFilter(filter: string) {
    this.subjectFilter.next(filter);
  }

  getFilter(): Observable<any> {
    return this.subjectFilter.asObservable();
  }
}
