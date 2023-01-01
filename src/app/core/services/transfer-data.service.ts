import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferDataService {
  private subject = new Subject<boolean>();

  shareData(data: boolean) {
    this.subject.next(data);
  }

  getData(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
