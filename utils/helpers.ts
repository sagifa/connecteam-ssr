import { BASE_URL } from "./consts";

export const getPath = (path: string, prefix: string) =>
  `${BASE_URL}/${prefix && prefix + "/"}${path}`;

export const getHslCode = (colorHue: number) => `hsl(${colorHue},100%,43%,1)`;
