import { Component } from '@angular/core';

@Component({
  selector: 'app-donas',
  templateUrl: './donas.component.html',
  styleUrls: ['./donas.component.css']
})
export class DonasComponent {

  public doughnutChartLabels: string[] = ['Camisas', 'Jeans', 'Sueter'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType = 'doughnut';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public ramdonKin() {
    this.doughnutChartData = [
      Math.round (Math.random() * 100 ),
      Math.round ( Math.random() * 100 ),
      Math.round ( Math.random() * 100 )
    ];
  }

}
