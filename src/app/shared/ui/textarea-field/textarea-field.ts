import { Component, input } from '@angular/core';
import { FormField } from '@angular/forms/signals';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { TextAreaFieldInterface } from '@shared/ui/form/types';

@Component({
  selector: 'app-textarea-field',
  imports: [MatFormField, MatLabel, MatInput, FormField],
  templateUrl: './textarea-field.html',
  styleUrl: './textarea-field.scss',
})
export class TextareaField {
  field = input.required<TextAreaFieldInterface>();
}
