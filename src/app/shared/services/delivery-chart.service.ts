/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
import {DeliveryChartModel} from '../model/delivery-chart.model';
import {Observable} from 'rxjs/internal/Observable';

export abstract class DeliveryChartService {
  abstract getDeliveryLocations(): Observable<Array<DeliveryChartModel>>;
  abstract getDeliveryLocationById(id: number): DeliveryChartModel;
  abstract getDeliveryLocationByZipCode(zipCode: number): DeliveryChartModel;
  abstract getDeliveryLocationByCity(cirty: string): DeliveryChartModel;
}
