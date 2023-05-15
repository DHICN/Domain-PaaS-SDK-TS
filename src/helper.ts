import qs from 'qs'

export class URL {
  public hash: string
  public host: string
  public hostname: string

  public href: string

  public origin: string

  public password: string
  public pathname: string

  public port: string

  public protocol: string

  public search: string
  public searchParams: Record<string, string>

  public username: string
  constructor(path: string, host: string) {
    this.hash = ''
    this.origin = host
    this.pathname = path
    this.href = host + path
    this.searchParams = {}
    this.search = ''
    this.username = ''
    this.password = ''
    const hostArr = host.split('//')
    if (hostArr.length === 2) {
      this.host = hostArr[1]
      this.hostname = hostArr[1]
      this.protocol = host[0]
      const urlArr = hostArr[1].split(':')
      if (urlArr.length === 2) {
        this.port = urlArr[1]
      } else {
        this.port = ''
      }
    } else {
      this.host = ''
      this.hostname = ''
      this.port = ''
      this.protocol = ''
    }
  }
}

export class FormData {
  private readonly parameters: Record<string, string | number>
  constructor() {
    this.parameters = {}
  }

  public append(key: string, value: string | number) {
    this.parameters[key] = value
  }

  public toForm() {
    return qs.stringify(this.parameters)
  }
}
