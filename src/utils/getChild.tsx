export const firstChild = (index: number) => index === 0;

export const notFirstChild = (index: number) => index !== 0;

export const lastChild = (index: number, length: number) =>
  index === length - 1;

export const notLastChild = (index: number, length: number) =>
  index !== length - 1;

export const even = (index: number) => index % 2 === 0;

export const odd = (index: number) => index % 2 !== 0;