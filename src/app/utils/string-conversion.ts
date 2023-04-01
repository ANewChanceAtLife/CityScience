export const camelToTitle = (s: string) =>
  s.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase());

export const snakeToTitle = (s: string) =>
  s
    .replace(/^[-_]*(.)/, (_, c) => c.toUpperCase())
    .replace(/[-_]+(.)/g, (_, c) => " " + c.toUpperCase());
