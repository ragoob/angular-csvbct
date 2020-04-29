import { Component } from '@angular/core';

@Component({
  selector: 'chart-bar-basic',
  template: `<g2-bar height="200" [title]="'销售额趋势'" [data]="salesData"></g2-bar>`,
})
export class ChartBarBasicComponent {
  salesData: any[] = new Array(12).fill({}).map((_i, idx) => ({
    x: `${idx + 1}月`,
    y: Math.floor(Math.random() * 1000) + 200,
    color: idx > 5 ? '#f50' : '#2194ff',
  }));
}