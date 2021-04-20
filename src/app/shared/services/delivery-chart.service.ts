/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
import {DeliveryChartModel, ZipCode} from '../model/delivery-chart.model';
import {Observable} from "rxjs";

export abstract class DeliveryChartService {
  abstract getDeliveryLocations(): Promise<Array<DeliveryChartModel>>;

  abstract getDeliveryLocationById(id: number): DeliveryChartModel;

  abstract getDeliveryLocationByZipCode(zipCodeId: string): Promise<DeliveryChartModel>;

  abstract getDeliveryLocationByCity(city: string): Promise<Array<DeliveryChartModel>>;

  abstract getDeliveryLocationsFromCash(): Array<DeliveryChartModel>;

  abstract getZipCodeModelByZipCode(zipCode: string): Promise<ZipCode>

  abstract saveDeliveryChart(model: DeliveryChartModel): Promise<any>;

  abstract deleteDeliveryChart(id: string): Promise<any>;

  abstract syncDeliveryChart(): Observable<any>;

  abstract getDeliveryLocationsByZipCodeSearch(zipCode: string, city?: string): Promise<DeliveryChartModel[]>;
}
