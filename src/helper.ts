import { match } from "ts-pattern";

export function isMobile(): boolean {
    return window.location.href.includes("/mobile/");
}

export function wait(ms: number): Promise<unknown> {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export function waitDOMContentLoaded(): Promise<unknown> {
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
    let element = container.querySelector(selector);

    do {
        await wait(100);
        element = container.querySelector(selector);
    } while (!element);

    return element;
}
