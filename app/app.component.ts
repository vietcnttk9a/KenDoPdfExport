import { Component } from '@angular/core';
import { InvoiceRow } from './invoice-row';
import { invoiceData } from './invoice-data';

@Component({
  selector: 'my-app',
  template: `
    <div class="example-config">
      <button kendo-button (click)="pdf.saveAs('invoice.pdf')">
        Save As PDF...
      </button>
    </div>

    <kendo-pdf-export #pdf paperSize="A4" margin="2cm">
      <my-invoice [data]="data"></my-invoice>
    </kendo-pdf-export>
  `,
  styles: [`
    kendo-pdf-export {
      font-family: "DejaVu Sans", "Arial", sans-serif;
      font-size: 12px;
    }
    @font-face {
    font-family: "DejaVu Sans";
    src: url("https://kendo.cdn.telerik.com/2020.2.617/styles/fonts/DejaVu/DejaVuSans.ttf") format("truetype");
  }

  `]
})
export class AppComponent {
  public data: InvoiceRow[] = invoiceData;
}
