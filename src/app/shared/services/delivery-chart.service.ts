/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
import {DeliveryChartModel, ZipCode} from '../model/delivery-chart.model';
import {Observable} from 'rxjs';

export abstract class DeliveryChartService {
  abstract getDeliveryLocations(): Observable<Array<DeliveryChartModel>>;

  abstract getDeliveryLocationById(id: number): DeliveryChartModel;

  abstract getDeliveryLocationByZipCode(zipCodeId: string): Observable<DeliveryChartModel>;

  abstract getDeliveryLocationByCity(city: string): Observable<Array<DeliveryChartModel>>;

  abstract getDeliveryLocationsFromCash(): Array<DeliveryChartModel>;

  abstract getZipCodeModelByZipCode(zipCode: string): Observable<ZipCode>

  abstract saveDeliveryChart(model: DeliveryChartModel): Observable<any>;

  abstract deleteDeliveryChart(id: string): Observable<any>;

  abstract syncDeliveryChart(): Observable<any>;

  abstract getDeliveryLocationsByZipCodeSearch(zipCode: string, city?: string): Observable<DeliveryChartModel[]>;
}
