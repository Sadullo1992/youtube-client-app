import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleShortenPipe } from './pipes/title-shorten.pipe';
import { SelectBorderColorDirective } from './directives/select-border-color.directive';
import { SortByPipe } from './pipes/sort-by.pipe';
import { SelectBackgroundColorDirective } from './directives/select-background-color.directive';
import { SelectBoxShadowColorDirective } from './directives/select-box-shadow-color.directive';
import { SetBoxshadowOnHoverDirective } from './directives/set-boxshadow-on-hover.directive';

@NgModule({
  declarations: [
    TitleShortenPipe,
    SelectBorderColorDirective,
    SortByPipe,
    SelectBackgroundColorDirective,
    SelectBoxShadowColorDirective,
    SetBoxshadowOnHoverDirective,
  ],
  imports: [CommonModule],
  exports: [
    TitleShortenPipe,
    SelectBorderColorDirective,
    SortByPipe,
    SelectBackgroundColorDirective,
    SelectBoxShadowColorDirective,
    SetBoxshadowOnHoverDirective,
  ],
})
export class SharedModule {}
