import { Dto } from './dto';
export interface Viaje {
  id: number;
  creationDate: string;
  lastStatusTravel: number;
  travelEquipmentDTOs: Dto[];
}
