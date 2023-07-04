import { match } from "ts-pattern"

export const isMobile = (): boolean => window.location.href.includes("/mobile/")

export const waitDOMContentLoaded = (): Promise<unknown> => {
    return new Promise((resolve) => {
        match(document.readyState)
            .with("interactive", resolve)
            .with("complete", resolve)
            .otherwise(() => {
                window.addEventListener("DOMContentLoaded", resolve)
            })
    })
}

export const waitForSelector = (selector: string): Promise<unknown> => {
    return new Promise((resolve) => {
        const i = setInterval(() => {
            if (document.querySelectorAll(selector).length === 0) {
                return
            }
            clearInterval(i)
            resolve(null)
        }, 100)
    })
}

export const wait = (ms: number): Promise<unknown> => {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => setTimeout(resolve, ms))
}
