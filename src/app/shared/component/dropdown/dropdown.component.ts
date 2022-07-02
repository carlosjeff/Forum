import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const INPUT_FIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DropdownComponent),
  multi: true
};

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [INPUT_FIELD_VALUE_ACCESSOR]
})
export class DropdownComponent implements ControlValueAccessor  {

  @Input() options!: any[];
  @Input() labelName!: string;
  @Input() placeholder!: string;

  @Output() change = new EventEmitter<boolean>();

  disabled = true;

  private innerValue: any;

  get value(){
    return this.innerValue;
  }

  set value(v: any) {
    if(v !== this.innerValue){
      this.innerValue = v;
      this.onChangeCb(v);
      this.change.emit(true);
      this.disabled = true;
    }
  }

  onChangeCb: (_: any) => void = () => {};
  onTouchedCb: (_: any) => void = () => {};

  writeValue(v: any): void {
    this.value = v;
  }

  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }

  clear(){
    this.value = '';

  }


}
