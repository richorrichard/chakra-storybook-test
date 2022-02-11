import { wereCardTheme } from "../src/styles/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: [
        "WereCard",
        ["Card Menu", "Card", "Card List"],
        "Chakra",
        "Example",
      ],
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  chakra: {
    theme: wereCardTheme,
  },
};
