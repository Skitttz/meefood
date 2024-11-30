export interface IPieLabel {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  value: number;
  index: number;
  data: Array<{
    product: string;
    [key: string]: any;
  }>;
}