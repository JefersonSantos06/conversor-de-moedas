import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexGrid, ApexStroke, ApexTitleSubtitle, ApexXAxis } from "ng-apexcharts";

export class LineBasicChart{
  series: ApexAxisChartSeries = [];
  chart: ApexChart = { type: "line"};
  xaxis: ApexXAxis = { };
  dataLabels: ApexDataLabels = { };
  grid: ApexGrid = { };
  stroke: ApexStroke = { };
  title: ApexTitleSubtitle = { };
};

