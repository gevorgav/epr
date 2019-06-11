/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
import {DeliveryChartModel} from '../model/delivery-chart.model';
import {Observable} from 'rxjs/internal/Observable';

export abstract class DeliveryChartService {
  abstract getDeliveryLocations(): Observable<Array<DeliveryChartModel>>;
  abstract getDeliveryLocationById(id: number): DeliveryChartModel;
  abstract getDeliveryLocationByZipCode(zipCodeId: string): Observable<DeliveryChartModel>;
  abstract getDeliveryLocationByCity(cirty: string): DeliveryChartModel;
  abstract getDeliveryLocationsFromCash(): Array<DeliveryChartModel>;
  abstract saveDeliveryChart(model: DeliveryChartModel): Observable<any>;
  abstract deleteDeliveryChart(id: string): Observable<any>;
  abstract syncDeliveryChart(): Observable<any>;
}
