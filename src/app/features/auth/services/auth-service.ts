import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Service, signal } from '@angular/core';
import { LS_TOKEN } from '@shared/helpers/constants';

@Service()
export class AuthService {
  private http = inject(HttpClient);

  constructor() {
    effect(() => {
      const token = this.token();
      if (token) {
        localStorage.setItem(LS_TOKEN, token);
      }
    });
  }

  token = signal(localStorage.getItem(LS_TOKEN));

  isAuth = computed(() => !!this.token());

  getToken() {
    return this.token();
  }
}
