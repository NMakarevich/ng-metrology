import { Component, input } from '@angular/core';
import { FormField } from '@angular/forms/signals';
import { MatFormField, MatLabel } from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';
import { SelectFieldInterface } from '@shared/ui/form/types';

@Component({
  selector: 'app-select-field',
  imports: [MatFormField, MatLabel, MatSelect, FormField, MatOption],
  templateUrl: './select-field.html',
  styleUrl: './select-field.scss',
})
export class SelectField {
  field = input.required<SelectFieldInterface>();
}
