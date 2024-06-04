import { Component, OnInit } from '@angular/core';
import { RECEIPT_ID } from 'src/app/app.constants';
import { Receipt } from 'src/app/models/receipt';
import { UtilService } from 'src/app/services/util.service';


@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styles: [
  ]
})
export class ReceiptComponent implements OnInit {
  receipt: Receipt | undefined;
  constructor(private utilService: UtilService) { }


  ngOnInit(): void {
    const data = localStorage.getItem(RECEIPT_ID);
    if (data != null) {
      this.receipt = this.utilService.Decrypt(data);
    }
  }
}
