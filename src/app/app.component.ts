import { Component, AfterContentInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as d3 from 'd3';
import { DataModel } from 'src/app/data/data.model';
import { newHeatMap } from 'src/assets/newheatmap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-proj';

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Risk Type';
  showYAxisLabel = true;
  yAxisLabel = 'Epic';
  timeline = true;
  innerPadding = 5;
  trimXAxisTicks = false;

  colorScheme = {
    domain: ['#E5FCFF', '#ABDAFC', '#ACACDE', '#C490D1', '#CC304A']
  }

  view: any[] = [1400, 900];

  data: any[] = newHeatMap;
  public options: any[] = [];
  public filtered: any[];

  // DOM access for the buttons
  @ViewChild('filterBtn', {static: true}) filter: ElementRef;
  @ViewChild('resetBtn', {static: true}) resetBtn: ElementRef;
  @ViewChild('riskList', {static: true}) riskList: ElementRef;

  // Resets & Filters heatmap to whatever
  filterData() {
    this.resetData();
    this.filtered = this.data.filter((e) => {
      if (this.riskList.nativeElement.value == e.name) {
        return true;
      }
    });
    this.data = this.filtered;
    return this.data;
  };

  // Sets the heatmap back to all original data
  resetData() {
    this.data = newHeatMap;
    return this.data;
  }

  ngOnInit() {
    console.log('Compiled');
    this.data.forEach((i) => {
      this.options.push({ name: i.name, value: i.name});
    });
  }
}
