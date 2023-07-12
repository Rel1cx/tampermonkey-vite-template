import { identity } from "rambda";
import { match, P } from "ts-pattern";

export function wait(ms: number) {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export function waitDOMContentLoaded() {
    return new Promise((resolve) => {
        match(document.readyState)
            .with("interactive", resolve)
            .with("complete", resolve)
            .otherwise(() => {
                window.addEventListener("DOMContentLoaded", resolve);
            });
    });
}

export async function waitForSelector(
    selector: string,
    container: HTMLElement | Document = document,
): Promise<Element> {
    return match(container.querySelector(selector))
        .with(P.nullish, async () => {
            await wait(100);
            return waitForSelector(selector, container);
        })
        .otherwise(identity);
}
