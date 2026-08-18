import { Component, computed, input, signal } from '@angular/core';
import { FormField } from '@angular/forms/signals';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {
  MatError,
  MatFormField,
  MatInput,
  MatLabel,
  MatPrefix,
  MatSuffix,
} from '@angular/material/input';
import { InputFieldInterface } from '@shared/ui/form/types';

@Component({
  selector: 'app-input-field',
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    FormField,
    MatError,
    MatIconButton,
    MatSuffix,
    MatIcon,
    MatPrefix,
  ],
  templateUrl: './input-field.html',
  styleUrl: './input-field.scss',
})
export class InputField {
  field = input.required<InputFieldInterface>();

  hasIcon = computed(() => !!this.field().icon);

  isPassword = computed(() => this.field().type === 'password');
  isHidden = signal(false);
  passwordIcon = computed(() => (this.isHidden() ? 'visibility_off' : 'visibility'));

  type = computed(() => {
    if (this.isPassword()) {
      return this.isHidden() ? 'text' : 'password';
    } else return this.field().type;
  });

  togglePassword = () => {
    this.isHidden.update((value) => !value);
  };
}
