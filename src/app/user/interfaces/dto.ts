import { Cadete } from './cadete';
export interface Dto {
  id: number;
  operationDate: string;
  observation: string | null;
  cadete: Cadete;
  operator: {
    id: number;
    email: string;
    fullName: string;
    address: string;
    cellPhone: string;
  };
  equipment: {
    id: number;
    mark: string;
    model: string;
    failure: string;
    clientId: number;
    cliente: {
      id: number;
      email: string;
      fullName: string;
      address: string;
      cellPhone: string;
    };
  };
  statusTravel: number;
}
