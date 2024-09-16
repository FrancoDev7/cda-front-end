export interface Event {
  id?: string;
  title: string;
  start: Date;
  end: Date;
  user?: {
    uid: string;
    name: string;
  };
  // Otras propiedades...
}