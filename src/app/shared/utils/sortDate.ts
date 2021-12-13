import { Viaje } from '../../user/interfaces/viaje';
export function sortDate(array: Viaje[]): Viaje[] {
  return array.sort((a, b) => {
    let y = new Date(
        a.travelEquipmentDTOs[a.travelEquipmentDTOs.length - 1].operationDate
      ),
      x = new Date(
        b.travelEquipmentDTOs[b.travelEquipmentDTOs.length - 1].operationDate
      );

    return x == y ? 0 : x > y ? 1 : -1;
  });
}
