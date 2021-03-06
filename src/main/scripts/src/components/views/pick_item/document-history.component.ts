import {Component} from '@angular/core';
import {DocumentService} from '../../../services/document.service';

@Component({
  selector: 'document-history',
  template: require('./document-history.component.html'),
  styles: [require('./document-history.component.scss').toString()]
})
export class DocumentHistoryComponent {
  constructor(public documentService: DocumentService) {}

  public timestampOfRecordToDate(record) {
    return record.hasOwnProperty('_meta_update_date') && new Date(record['_meta_update_date']);
  }

  public onRecordClick(oneRecord) {
    console.log(oneRecord);
  }
}
