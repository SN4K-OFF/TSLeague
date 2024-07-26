export class ProxyManager {
    private proxyList: string[] = []
    private static defaultProxyList: string[] = [
        '1.1.1.1:80',
        '2.2.2.2:80',
        '3.3.3.3:80',
    ]

    constructor() {
        this.proxyList = ProxyManager.defaultProxyList
    }

    public getRandomProxy(): string | null {
        if (this.proxyList.length === 0) {
            console.error('Proxy list is empty. Please ensure default proxies are set.')
            return null
        }
        const index = Math.floor(Math.random() * this.proxyList.length)
        return this.proxyList[index]
    }
}
