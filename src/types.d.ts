
declare interface IEvents {
  [event: string]: (e: any) => any;
}

// declare const enum NavigateType {
//   TRANSFER = 'Transfer',
//   WALKING = 'Walking',
//   RIDING = 'Riding',
//   TRUCKDRIVING = 'TruckDriving',
// }

declare type NavigateType = 'Driving' | 'Transfer' | 'Walking' | 'Riding' | 'TruckDriving';

