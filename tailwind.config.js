/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export const content = [
  "./src/**/*.{html,ts}",
]
export const theme = {
  extend: {
    colors: {
      success: colors.green,
      danger: colors.red,
      warning: colors.yellow,
      info: colors.blue,
      primary: colors.blue,
    }
  },
}
export const plugins = [
  require('@tailwindcss/forms')
]

