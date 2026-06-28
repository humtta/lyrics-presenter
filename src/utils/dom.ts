export const $ = <T extends HTMLElement>(
  selector: string,
  parent: ParentNode = document,
): T => parent.querySelector<T>(selector) as T;

export const $$ = <T extends HTMLElement>(
  selector: string,
  parent: ParentNode = document,
): NodeListOf<T> => parent.querySelectorAll<T>(selector);

export const textOf = (element: Element | null): string =>
  element?.textContent?.trim() ?? "";

export function scrapeParagraphLines(container: HTMLElement): string[][] {
  const result: string[][] = [];
  const paragraphs = $$("p", container);

  for (const p of paragraphs) {
    const lines: string[] = [];
    let currentLine = "";

    const traverse = (node: Node) => {
      switch (node.nodeName) {
        case "#text":
          currentLine += node.textContent || "";
          break;

        case "BR":
          lines.push(currentLine.trim());
          currentLine = "";
          break;

        default:
          node.childNodes.forEach(traverse);
          break;
      }
    };

    p.childNodes.forEach(traverse);

    const finalLine = currentLine.trim();
    if (finalLine) {
      lines.push(finalLine);
    }

    const cleanLines = lines.filter((line) => line.length > 0);
    if (cleanLines.length > 0) {
      result.push(cleanLines);
    }
  }

  return result;
}
