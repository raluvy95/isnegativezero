/** @type {import('tailwindcss').Config} */
import catppuccin from '@catppuccin/daisyui'

export default {
  content: ['./src/**/*.{html,svelte,js,ts}'],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('daisyui')],

  daisyui: {
    themes: [
      catppuccin('mocha'),
      'light'
    ]
  }
}

