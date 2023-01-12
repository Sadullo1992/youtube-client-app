import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { TitleShortenPipe } from './pipes/title-shorten.pipe';
import { SelectBorderColorDirective } from './directives/select-border-color.directive';
import { SortByPipe } from './pipes/sort-by.pipe';
import { SelectBackgroundColorDirective } from './directives/select-background-color.directive';
import { SelectBoxShadowColorDirective } from './directives/select-box-shadow-color.directive';
import { SetBoxshadowOnHoverDirective } from './directives/set-boxshadow-on-hover.directive';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    TitleShortenPipe,
    SelectBorderColorDirective,
    SortByPipe,
    SelectBackgroundColorDirective,
    SelectBoxShadowColorDirective,
    SetBoxshadowOnHoverDirective,
    SpinnerComponent,
  ],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [
    TitleShortenPipe,
    SelectBorderColorDirective,
    SortByPipe,
    SelectBackgroundColorDirective,
    SelectBoxShadowColorDirective,
    SetBoxshadowOnHoverDirective,
    SpinnerComponent,
    MatProgressSpinnerModule,
  ],
})
export class SharedModule {}
