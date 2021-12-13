import { Pipe, PipeTransform } from '@angular/core';
import { switchMap } from 'rxjs';

@Pipe({ name: 'estadoViaje' })
export class EstadoViajesPipe implements PipeTransform{
   transform(estado: number): string {
      
      switch (estado.toString()) {
         case '1'||'5':
            return 'Disponible';
         case '2' || '6':
            return 'A Retirar';
         case '3' || '7':
            return 'A Entregar';
         case '4':
            return 'Entregado';
         case '8':
            return 'Entrega a confirmar';
         case '9':
            return 'Entrega confirmada';
         default:
            return '-';
       }
   }
}
