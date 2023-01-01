import {
  Component, EventEmitter, Output,
} from '@angular/core';
import { SortByTypeData } from '../../models/sort-by-type-data.model';

@Component({
  selector: 'app-sort-block',
  templateUrl: './sort-block.component.html',
  styleUrls: ['./sort-block.component.scss'],
})
export class SortBlockComponent {
  @Output() sort = new EventEmitter<SortByTypeData>();

  isSortByDate = false;

  isSortByView = false;

  isSortByWord = true;

  sortTypeData: SortByTypeData = {
    type: 'word',
    value: '',
  };

  onInputKeyWord(value: string) {
    this.sortTypeData = { ...this.sortTypeData, value };
    this.onSort();
  }

  switchSortByDate(): void {
    this.isSortByDate = true;
    this.isSortByView = !this.isSortByDate;
    this.isSortByWord = !this.isSortByDate;
    this.sortTypeData = {
      type: 'date',
      value: 'increasing',
    };
    this.onSort();
  }

  switchSortByView(): void {
    this.isSortByView = true;
    this.isSortByDate = !this.isSortByView;
    this.isSortByWord = !this.isSortByView;
    this.sortTypeData = {
      type: 'view',
      value: 'decreasing',
    };
    this.onSort();
  }

  switchSortByWord(): void {
    this.isSortByWord = true;
    this.isSortByDate = !this.isSortByWord;
    this.isSortByView = !this.isSortByWord;
    this.sortTypeData = {
      type: 'word',
      value: '',
    };
    this.onSort();
  }

  selectIncrease() {
    this.sortTypeData = { ...this.sortTypeData, value: 'increasing' };
    this.onSort();
  }

  selectDecrease() {
    this.sortTypeData = { ...this.sortTypeData, value: 'decreasing' };
    this.onSort();
  }

  private onSort(): void {
    this.sort.emit(this.sortTypeData);
  }
}
