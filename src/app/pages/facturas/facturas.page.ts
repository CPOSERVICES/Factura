import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.page.html',
  styleUrls: ['./facturas.page.scss'],
})
export class FacturasPage implements OnInit {

  formaP :string=""

  fecha: Date = new Date();
  customPickerOptions;
  customDate;

  constructor() { }

  ngOnInit() {

    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: ( evento ) => {
          console.log('Clicked Save!');
          console.log(evento);
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    };

  }

  cambioFecha( event ) {
    console.log('ionChange', event );
    console.log('Date', new Date( event.detail.value ) );
  }

  // onClick( check ) {
  //   console.log(check);
  // }

  radioCambio( event ){
this.formaP = event.detail.value
console.log('asd',this.formaP);
  }


}
