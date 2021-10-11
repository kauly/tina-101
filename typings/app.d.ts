export type TMapProps = {
  lng: string;
  lat: string;
  zoom: string;
};

export type TUIData = {
  title: string;
  subTitle: string;
  evDate: string;
  address: string;
  description: string;
  mapProps: TMapProps;
};

export interface ILocation {
  latitude: number;
  longitude: number;
  zoom: number;
}
