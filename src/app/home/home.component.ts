import { Component, OnInit } from '@angular/core';

import { Workshop } from '../shared/workshop';
import { WorkshopService } from '../services/workshop.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  workshops: Workshop[];
  constructor(private workshopService: WorkshopService) { }

  ngOnInit() {
    this.workshops = this.workshopService.getWorkshops();
  }




}
