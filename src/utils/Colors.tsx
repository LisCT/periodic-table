import { lighten } from "polished";

export const branding = {
  purple: "#5D1E5C",
  yellow: "#F7C46A",
  red: "#E2696C",
  gray: "#EEECEC",
  light: "#FAFAFA",
  blue: "#77A1D5"
};

export const table = {
  gas: "#7F3433",
  solid: "#596673",
  liquid: "#5EA8E3",
  unknown: "#B2B2B2",
  alkali: "#F1A9B1",
  transition: "#F4BF79",
  "alkaline earth": "#7A47A7",
  "post-transition": "#F7C46A",
  actinide: "#7CDD6B",
  lanthanide: "#B7D358",
  metalloid: "#70B843",
  "other nonmetals": "#C6D0D5",
  "noble gas": "#F06F6E"
};

export const light = {
  colors: {
    main: "#ffffff",
    logo: branding.purple,
    middle: lighten(0.3, branding.gray),
    bottom: branding.gray,
    text: "#343434",
    lines: "#D8D8D8",
    cta: "#77A1D5",
    name: branding.blue
  }
};

export const dark = {
  colors: {
    main: "#12181C",
    logo: branding.gray,
    middle: "#1A2731",
    bottom: "#12181C",
    text: branding.gray,
    lines: lighten(0.6, "#D8D8D8"),
    cta: "#347989",
    name: "#657E92"
  }
};
