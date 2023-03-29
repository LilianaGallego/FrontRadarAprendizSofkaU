import { Component } from '@angular/core';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss']
})
export class RadarComponent {
radarList: any[] = [
  {name:'radar1'},
  {name: 'radar2'},
  {name: 'radar3'},
  {name: 'radar4'},
  {name: 'radar5'},
  {name: 'radar6'}];

}
