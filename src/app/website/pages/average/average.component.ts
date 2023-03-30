import { Component } from '@angular/core';

@Component({
  selector: 'app-average',
  templateUrl: './average.component.html',
  styleUrls: ['./average.component.scss']
})
export class AverageComponent {
  ligasList: any[] = [
    {name:'Desarrollo Ciclo 1'},
    {name: 'Desarrollo Ciclo 2'},
    {name: 'Desarrollo Ciclo 3'},
    {name: 'Desarrollo Ciclo 4'},
    {name: 'Desarrollo Ciclo 5'},
    {name: 'Desarrollo Ciclo 6'}];
}
