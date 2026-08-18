import { Component, computed, input } from '@angular/core';
import { FieldTree, FormRoot } from '@angular/forms/signals';
import { MatButton } from '@angular/material/button';
import { MatError } from '@angular/material/input';
import { FieldType, FormFields } from '@shared/ui/form/types';
import { InputField } from '@shared/ui/input-field/input-field';
import { SelectField } from '@shared/ui/select-field/select-field';
import { TextareaField } from '@shared/ui/textarea-field/textarea-field';

@Component({
  selector: 'app-form',
  imports: [InputField, TextareaField, SelectField, MatButton, FormRoot, MatError],
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class Form<T> {
  formFields = input.required<FormFields<T>>();

  form = input.required<FieldTree<T, string | number, 'writable'>>();

  submitButtonText = input.required<string>();

  fields = computed(() => {
    return (Object.values(this.formFields()) as FieldType[]).filter((field) => !field.skip);
  });
}
