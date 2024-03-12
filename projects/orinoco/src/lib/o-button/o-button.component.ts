import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Size } from '../utils/enums/size.enum';
import { Type, TypeClass } from '../utils/enums/type.enum';

@Component({
  selector: 'lib-o-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './o-button.component.html',
  styleUrl: './o-button.component.css',
})
export class OButtonComponent {
  @Input()
  type: Type = Type.PRIMARY;
  @Input()
  backgroundColor?: string;
  @Input()
  size: Size = Size.MEDIUM;
  @Input()
  label = 'Button';

  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = TypeClass[this.type];
    return ['orinoco-button', `orinoco-button--${this.size}`, mode];
  }
}
