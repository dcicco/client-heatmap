import { Component, ElementRef, OnInit, OnChanges, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import { DataModel } from 'src/app/data/data.model';

@Component({
  selector: 'app-heatmap',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.scss']
})
export class HeatmapComponent implements OnChanges {
  @ViewChild('heatmap', {static: true})
  private chartContainer: ElementRef;

  @Input()
  data: DataModel[];

  margin = {top: 20, right: 20, bottom: 20, left: 20}


  constructor() { }

  ngOnChanges() {
    if (!this.data) { return; }
    this.createHeatmap();
  }

  private createHeatmap() {
    d3.select('svg').remove();

    const element = this.chartContainer.nativeElement;
    const data = this.data;

    const svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);

    const contentWidth = element.offsetWidth - this.margin.left - this.margin.right;
    const contentHeight = element.offsetHeight - this.margin.top - this.margin.bottom;
  }

}
