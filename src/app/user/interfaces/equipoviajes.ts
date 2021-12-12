import { Dto } from './dto';
export interface Equipo {
  equipmentId: number;
  mark: string;
  model: string;
  failure: string;
  travelEquipmentDTOs: Dto[];
}