/**
 * @author Gevorg Avetisyan on 4/20/2019.
 */
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class RoutingService {
  public itemIdSubject : Subject<string> = new Subject();
  public categoryIdSubject : Subject<string> = new Subject();
}
