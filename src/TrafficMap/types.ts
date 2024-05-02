export type CommuteLocation = {
  name: string;
  loc: [number, number];
}

export type Amount = {
  text: string;
  value: number;
}

export type Trip = {
  distance: Amount;
  duration: Amount;
  status: string;
}

export type Commute = {
  location: CommuteLocation;
  trip: Trip;
}
