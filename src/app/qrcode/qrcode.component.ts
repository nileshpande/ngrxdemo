import { Component, OnInit, VERSION } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QrcodeComponent implements OnInit {

  upiPaymentDetails = 'upi://pay?pa=randomupiid@ybl&pn=Nilesh Pande';
  amount:string = '&am';
  amountnumber:number=100;
  currency:string ='&cu=INR';
   
  title = 'app';  
  name = 'Angular ' + VERSION.major;
  public elementType:any = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'https://www.techiediaries.com/';

  constructor() { }

  ngOnInit(): void {
  }

}
