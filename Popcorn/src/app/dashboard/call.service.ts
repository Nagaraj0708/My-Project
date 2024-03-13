import { Injectable } from '@angular/core';
import { datagridmodel } from './listview/view.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallService {

  constructor() { }
  public listviewdata$ = new BehaviorSubject<datagridmodel[]>([]);
  get listviewdataValue() {
    return this.listviewdata$.value;
  }
  setlistviewdataValue(value:any) {
    this.listviewdata$.next(value);
  }
}

