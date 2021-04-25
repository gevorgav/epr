import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { PromoCodeService } from '../../../shared/services/promo-coed.service';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl, FormGroup } from '@angular/forms';
import { PromoCodeModel } from '../../../shared/model/promo-code.model';

@Component({
  selector: 'app-promo-code-list',
  templateUrl: './promo-code-list.component.html',
  styleUrls: ['./promo-code-list.component.css']
})
export class PromoCodeListComponent implements OnInit {

  public dataSource;
  public displayedColumns = ['promoCode', 'discount', 'isUsed', 'shippingInfoId', 'action'];
  public promoForm: FormGroup;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private promoCodeService: PromoCodeService, private cdr: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.promoCodeService.getPromoCodes()
      .then(
        products => {
          this.dataSource = new MatTableDataSource(products);
          this.dataSource.paginator = this.paginator;
        }
      );
    this.initForm();
  }

  applyFilter($event) {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  initForm(model?: PromoCodeModel):void {
    this.promoForm = new FormGroup({
      id: new FormControl(model?.id? model.id: ''),
      discount: new FormControl(model?.discount? model.discount: 0),
      isUsed: new FormControl(model?.isUsed? model.isUsed: false),
      promoCode: new FormControl({value: model?.code? model.code: '', disabled: true}),
    });
  }

  generateCode(): void{
    this.promoForm.get('promoCode').setValue(PromoCodeService.generateCode(6));
  }

  save():void {
    this.promoCodeService.savePromoCode(this.convertToPromoCodeModel(this.promoForm)).then(res=>{
      this.ngOnInit();
    })
  }

  edit(item: PromoCodeModel) {
    this.initForm(item);
  }

  delete(id: string) {
    this.promoCodeService.deletePromoCode(id).then(res=>{
      this.ngOnInit();
    })
  }

  private convertToPromoCodeModel(item: FormGroup): PromoCodeModel {
    let model = new PromoCodeModel();
    if (item.value.id) {
      model.id = item.value.id;
    }
    model.code = item.get('promoCode').value;
    model.discount = item.value.discount;
    model.isUsed = item.value.isUsed;
    return model;
  }

}
