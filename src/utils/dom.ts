export const $ = <T extends HTMLElement>(
  selector: string,
  parent: ParentNode = document,
): T => parent.querySelector<T>(selector) as T;

export const $$ = <T extends HTMLElement>(
  selector: string,
  parent: ParentNode = document,
): NodeListOf<T> => parent.querySelectorAll<T>(selector);
