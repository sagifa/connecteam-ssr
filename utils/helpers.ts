import { BASE_URL } from "./consts";

export const getPath = (path: string, prefix: string) =>
  `${BASE_URL}/${prefix && prefix + "/"}${path}`;

export const getSecondaryColor = (colorHue: number) =>
  `hsl(${colorHue},100%,21%,1)`;

export const getPrimaryColor = (colorHue: number) =>
  `hsl(${colorHue},100%,43%,1)`;

export const getHoverColor = (colorHue: number) =>
  `hsl(${colorHue},100%,47%,1)`;

export const getHoverSecondaryColor = (colorHue: number) =>
  `hsl(${colorHue},100%,50%,1)`;

export const getBackgroundColor = (colorHue: number) =>
  `hsl(${colorHue},100%,92%,1)`;

export const getDarkerColor = (colorHue: number) =>
  `hsl(${colorHue},100%,97%,1)`;
