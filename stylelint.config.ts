import type { Config } from 'stylelint';

export default {
  extends: ['stylelint-config-standard-scss'],
  rules: {
    'block-no-empty': true,
    'color-no-invalid-hex': true,
  },
} satisfies Config;
