export const isMobile = () => window.location.href.includes('/mobile/')

export function waitDOMContentLoaded(): Promise<void> {
    return new Promise((resolve) => {
        switch (document.readyState) {
            case 'interactive':
            case 'complete': {
                resolve()
                break
            }
            default: {
                window.addEventListener('DOMContentLoaded', () => resolve())
                break
            }
        }
    })
}

export function waitForSelector(selector: string): Promise<void> {
    return new Promise((resolve) => {
        const i = setInterval(() => {
            if (document.querySelectorAll(selector).length > 0) {
                clearInterval(i)
                resolve()
            }
        }, 100)
    })
}

export function wait(ms: number): Promise<void> {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => setTimeout(resolve, ms))
}
