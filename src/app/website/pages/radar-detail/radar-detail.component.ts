import { Component } from '@angular/core';

@Component({
  selector: 'app-radar-detail',
  templateUrl: './radar-detail.component.html',
  styleUrls: ['./radar-detail.component.scss']
})
export class RadarDetailComponent {
  displayedColumns: string[] = [
    'knowledgeArea',
    'descriptor',
    'factual',
    'conceptual',
    'procedural',
    'metacognitive',
    'appropriationLevel',
    'action'
  ];
  data: string[] = ['one', 'two', 'three', 'four', 'five'];

}
