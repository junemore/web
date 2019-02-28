import { Injectable } from '@angular/core';
import { Workshop } from '../shared/workshop';
import { workshops } from '../shared/workshops';


@Injectable({
  providedIn: 'root'
})
export class WorkshopService {

  constructor() { }

  getWorkshops(): Workshop[] {
    return workshops;
  }
}
