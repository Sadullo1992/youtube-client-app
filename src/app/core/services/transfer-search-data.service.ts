import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferSearchDataService {
  private subject = new Subject<string>();

  shareData(data: string) {
    this.subject.next(data);
  }

  getData(): Observable<string> {
    return this.subject.asObservable();
  }
}
