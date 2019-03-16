/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
import {DeliveryChartModel} from '../model/delivery-chart.model';

export abstract class DeliveryChartService {
  abstract getDeliveryLocations(locationId?: number): Array<DeliveryChartModel>;
  abstract getDeliveryLocationById(id: number): DeliveryChartModel;
  abstract getDeliveryLocationByZipCode(zipCode: number): DeliveryChartModel;
}
