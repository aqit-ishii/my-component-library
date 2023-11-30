export default {
  plugins: {
    "tailwindcss/nesting": {},
    tailwindcss: {},
    "postcss-simple-vars": {
      variables: {
        "mantine-breakpoint-xs": "40em",
        "mantine-breakpoint-sm": "48em",
        "mantine-breakpoint-md": "64em",
        "mantine-breakpoint-lg": "72em",
        "mantine-breakpoint-xl": "80em",
        "mantine-breakpoint-2xl": "96em"
      },
    },
    autoprefixer: {},
  },
  sourceMap: true,
}
