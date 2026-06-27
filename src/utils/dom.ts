export const $ = <T extends HTMLElement>(
  selector: string,
  parent: ParentNode = document,
): T => parent.querySelector<T>(selector) as T;
