import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareColorService {
  private color = new BehaviorSubject<string>('rgba(33, 150, 243)');

  setColor(value: string): void {
    this.color.next(value);
  }

  getColor(): Observable<string> {
    return this.color.asObservable();
  }
}
