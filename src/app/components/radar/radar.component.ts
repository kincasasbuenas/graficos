import { Component } from '@angular/core';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent  {

// Radar
public radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

public radarChartData: any = [
  {data: [65, 59, 90, 81, 56, 55, 40], label: 'Junior'},
  {data: [28, 48, 40, 19, 96, 27, 100], label: 'Nacional'}
];
public radarChartType = 'radar';

public lineChartColors:Array<any> = [
  { // Junior
    backgroundColor: 'rgba(255,0,0,0.2)',
    borderColor: 'rgba(255,0,0,1)',
    pointBackgroundColor: 'rgba(255,0,0,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(255,0,0,0.8)'
  },
  { // Naciopan
    backgroundColor: 'rgba(0,255,0,0.2)',
    borderColor: 'rgba(0,255,0,1)',
    pointBackgroundColor: 'rgba(0,255,0,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(0,255,0,1)'
  }
];

// events
public chartClicked(e: any): void {
  console.log(e);
}

public chartHovered(e: any): void {
  console.log(e);
}

}
