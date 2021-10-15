export type TMapProps = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type TUIData = {
  title: string;
  subTitle: string;
  evDate: string;
  address: string;
  description: string;
  mapProps: TMapProps;
};
