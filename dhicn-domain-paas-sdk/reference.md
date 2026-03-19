# API 参考与高级用法

## 目录

- [ApiHelper 详细 API](#apihelper-详细-api)
- [DomainServiceUrlMap 完整映射](#domainserviceurlmap-完整映射)
- [高级配置选项](#高级配置选项)
- [常见问题与解决方案](#常见问题与解决方案)
- [最佳实践](#最佳实践)

---

## ApiHelper 详细 API

### 构造函数

```ts
constructor(baseURL = '', timeout = 500000)
```

**参数说明：**
- `baseURL`: 基础 URL，可选。如果为空，需要在实例化各服务 API 时指定完整路径
- `timeout`: 请求超时时间（毫秒），默认 500000ms

**示例：**
```ts
// 使用默认配置
const helper = new ApiHelper()

// 指定基础 URL 和超时时间
const helper = new ApiHelper('/api', 30000)
```

### 属性

| 属性 | 类型 | 说明 |
|-----|------|-----|
| `axiosInstance` | `AxiosInstance` | Axios 实例，用于发送 HTTP 请求 |
| `token` | `Object` | 当前认证信息，包含 `token_type`, `access_token`, `refresh_token` |
| `connectApi` | `ConnectApi` | 认证连接 API 实例 |

### 方法详解

#### logIn()

执行登录认证。

```ts
async logIn(
  tenantId: string,
  clientId?: string,
  grantType?: string,
  clientSecret?: string,
  username?: string,
  password?: string
): Promise<{ token_type: string; access_token: string; refresh_token: string }>
```

**参数：**
| 参数 | 类型 | 必填 | 说明 |
|-----|------|-----|-----|
| `tenantId` | `string` | 是 | 租户 ID |
| `clientId` | `string` | 否 | 客户端 ID |
| `grantType` | `string` | 否 | 授权类型，通常为 `"password"` |
| `clientSecret` | `string` | 否 | 客户端密钥 |
| `username` | `string` | 否 | 用户名 |
| `password` | `string` | 否 | 密码 |

**返回值：** Promise，解析为 Token 对象

**示例：**
```ts
const token = await apiHelper.logIn(
  'tenant-123',
  'client-id-xxx',
  'password',
  'client-secret-xxx',
  'admin',
  'password123'
)
console.log('Token:', token.access_token)
```

#### refreshToken()

刷新访问 Token。

```ts
async refreshToken(
  tenantid: string,
  clientId: string,
  clientSecret: string,
  grantType: string,
  refreshToken: string,
  scope?: string,
  redirectUri?: string,
  code?: string,
  codeVerifier?: string,
  username?: string,
  password?: string,
  acrValues?: string,
  deviceCode?: string
): Promise<{ token_type: string; access_token: string; refresh_token: string }>
```

**参数：**
| 参数 | 类型 | 必填 | 说明 |
|-----|------|-----|-----|
| `tenantid` | `string` | 是 | 租户 ID |
| `clientId` | `string` | 是 | 客户端 ID |
| `clientSecret` | `string` | 是 | 客户端密钥 |
| `grantType` | `string` | 是 | 授权类型，通常为 `"refresh_token"` |
| `refreshToken` | `string` | 是 | 刷新 Token |
| `scope` | `string` | 否 | 授权范围 |
| `redirectUri` | `string` | 否 | 重定向 URI |
| `code` | `string` | 否 | 授权码 |
| `codeVerifier` | `string` | 否 | 代码验证器 |
| `username` | `string` | 否 | 用户名 |
| `password` | `string` | 否 | 密码 |
| `acrValues` | `string` | 否 | 认证上下文类引用值 |
| `deviceCode` | `string` | 否 | 设备码 |

**示例：**
```ts
const newToken = await apiHelper.refreshToken(
  'tenant-123',
  'client-id-xxx',
  'client-secret-xxx',
  'refresh_token',
  oldToken.refresh_token
)
```

#### setAuth()

设置请求认证头。

```ts
setAuth(token: { token_type: string; access_token: string }): void
```

**参数：**
| 参数 | 类型 | 说明 |
|-----|------|-----|
| `token` | `Object` | 包含 `token_type` 和 `access_token` 的对象 |

**示例：**
```ts
apiHelper.setAuth({
  token_type: 'Bearer',
  access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
})
```

#### changeTenantId()

切换租户 ID。

```ts
changeTenantId(tenantId: string): void
```

**参数：**
| 参数 | 类型 | 说明 |
|-----|------|-----|
| `tenantId` | `string` | 新的租户 ID |

**示例：**
```ts
apiHelper.changeTenantId('new-tenant-456')
```

---

## DomainServiceUrlMap 完整映射

```ts
export const DomainServiceUrlMap = {
  // 基础服务
  identity: 'identity-service',
  
  // 方案相关
  scenario: 'global-scenario-manager-service',
  scenarioCompute: 'global-scenario-compute-service',
  
  // 模型相关
  modelDriver: 'global-model-driver-service',
  modelInformation: 'global-model-information-service',
  modelConfiguration: 'global-model-configuration-service',
  
  // 结果与分析
  resultAnalysis: 'global-result-service',
  
  // 数字孪生
  digitalTwin: 'digital-twin-service',
  
  // IoT
  iot: 'iot-service',
  
  // 文件与数据
  document: 'global-file-service',
  fileServer: 'global-file-service',
  dataCenter: 'global-data-center-service',
  
  // 业务中台
  wwtp: {
    mainBus: 'wwtp-paas-main-bus-service',
    infrastructure: 'wwtp-paas-main-bus-service',
  },
  wd: {
    domain: 'wd-domain-service',
  },
  
  // 其他服务
  message: 'global-message-service',
  textSearch: 'global-full-text-search-service',
  deviceManagement: 'global-accident-manager-service',
  accident: 'accident-management-service',
  plugin: 'global-plugin-service',
}
```

---

## 高级配置选项

### Axios 实例配置

```ts
export class ApiHelperExtend extends ApiHelper {
  constructor() {
    super()
    
    // 配置全局请求头
    this.axiosInstance.defaults.headers.common.showErrMsg = true
    this.axiosInstance.defaults.headers.common['Accept-Language'] = 'zh-CN'
    
    // 配置请求超时
    this.axiosInstance.defaults.timeout = 60000
    
    // 配置重试机制
    this.axiosInstance.defaults.retryCount = 3
    this.axiosInstance.defaults.retryDelay = 1000
  }
}
```

### 响应拦截器高级用法

```ts
this.axiosInstance.interceptors.response.use(
  (response) => {
    // 统一处理响应数据
    const { status, data, message } = response.data
    
    // 处理业务状态码
    if (typeof status === 'boolean') {
      if (status) {
        response.data = data ?? status
        return response
      } else {
        const { showErrMsg } = response.config.headers
        if (showErrMsg !== false) {
          // 显示错误消息（可集成消息提示组件）
          console.error(message)
          // Message.error(message)
        }
        return Promise.reject(response.data)
      }
    }
    
    return response
  },
  (error) => {
    // 统一处理错误
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 未授权，跳转登录
          // router.push('/login')
          break
        case 403:
          // 无权限
          console.error('无权限访问')
          break
        case 404:
          // 资源不存在
          console.error('资源不存在')
          break
        case 500:
          // 服务器错误
          console.error('服务器错误')
          break
        default:
          console.error('请求失败:', error.response.data)
      }
    } else if (error.request) {
      // 请求已发送但未收到响应
      console.error('网络错误:', error.message)
    } else {
      console.error('请求错误:', error.message)
    }
    return Promise.reject(error)
  }
)
```

### 请求拦截器

```ts
this.axiosInstance.interceptors.request.use(
  (config) => {
    // 添加请求时间戳（防止缓存）
    if (config.method === 'get') {
      config.params = {
        ...config.params,
        _t: Date.now()
      }
    }
    
    // 添加自定义请求头
    config.headers['X-Request-ID'] = crypto.randomUUID()
    
    return config
  },
  (error) => {
    console.error('请求拦截器错误:', error)
    return Promise.reject(error)
  }
)
```

---

## 常见问题与解决方案

### 1. Token 过期自动刷新

```ts
export class AutoRefreshApiHelper extends ApiHelper {
  private isRefreshing = false
  private refreshSubscribers: ((token: string) => void)[] = []

  constructor() {
    super()
    this.setupInterceptors()
  }

  private setupInterceptors() {
    this.axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const { config, response } = error
        
        if (response?.status !== 401) {
          return Promise.reject(error)
        }

        if (!this.isRefreshing) {
          this.isRefreshing = true

          try {
            const newToken = await this.refreshToken(
              this.axiosInstance.defaults.headers.common.tenantId,
              'client-id',
              'client-secret',
              'refresh_token',
              this.token.refresh_token
            )

            this.onTokenRefreshed(newToken.access_token)
            return this.axiosInstance(config)
          } catch (refreshError) {
            this.onTokenRefreshFailed()
            return Promise.reject(refreshError)
          } finally {
            this.isRefreshing = false
          }
        }

        // 如果正在刷新 Token，将请求加入队列
        return new Promise((resolve) => {
          this.refreshSubscribers.push((token: string) => {
            config.headers.Authorization = `Bearer ${token}`
            resolve(this.axiosInstance(config))
          })
        })
      }
    )
  }

  private onTokenRefreshed(token: string) {
    this.refreshSubscribers.forEach((cb) => cb(token))
    this.refreshSubscribers = []
  }

  private onTokenRefreshFailed() {
    this.refreshSubscribers = []
    // 跳转登录页
    // router.push('/login')
  }
}
```

### 2. 多租户支持

```ts
export class MultiTenantApiHelper extends ApiHelper {
  private tenantCache = new Map<string, string>()

  async switchTenant(tenantId: string) {
    // 保存当前租户的 Token
    if (this.token.access_token) {
      this.tenantCache.set(
        this.axiosInstance.defaults.headers.common.tenantId,
        this.token.access_token
      )
    }

    // 切换租户
    this.changeTenantId(tenantId)

    // 恢复新租户的 Token（如果已缓存）
    const cachedToken = this.tenantCache.get(tenantId)
    if (cachedToken) {
      this.setAuth({
        token_type: 'Bearer',
        access_token: cachedToken
      })
    }
  }
}
```

### 3. 请求取消

```ts
import { CancelToken } from 'axios'

export class CancellableApiHelper extends ApiHelper {
  private pendingRequests = new Map<string, Function>()

  createCancelToken(key: string) {
    // 取消之前的同名请求
    if (this.pendingRequests.has(key)) {
      this.pendingRequests.get(key)!()
    }

    return new CancelToken((cancel) => {
      this.pendingRequests.set(key, cancel)
    })
  }

  clearPendingRequest(key: string) {
    this.pendingRequests.delete(key)
  }
}

// 使用
const apiHelper = new CancellableApiHelper()

// 发起请求
const response = await apiHelper.scenario.manager.apiV1ScenariosGet({
  cancelToken: apiHelper.createCancelToken('getScenarios')
})

// 取消请求
apiHelper.clearPendingRequest('getScenarios')
```

---

## 最佳实践

### 1. 模块化 API 管理

```ts
// api/index.ts
export { ApiHelperExtend as Api } from './api-helper'
export type { ApiHelperExtend as IApi } from './api-helper'

// api/api-helper.ts
export class ApiHelperExtend extends ApiHelper {
  // 按服务模块分组
  identity: { ... }
  scenario: { ... }
  iot: { ... }
  
  constructor() {
    super()
    this.initServices()
  }
  
  private initServices() {
    // 初始化各服务
  }
}
```

### 2. 统一错误处理

```ts
// api/error-handler.ts
export class ApiError extends Error {
  constructor(
    public code: string,
    public message: string,
    public status?: number
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

export function handleApiError(error: any): never {
  if (error.code) {
    throw new ApiError(error.code, error.message, error.status)
  }
  throw error
}
```

### 3. 类型安全

```ts
// api/types.ts
export interface Scenario {
  id: string
  name: string
  description: string
  created: string
  modified: string
}

export interface ApiResponse<T> {
  data: T
  status: boolean
  message?: string
}

// api/api-helper.ts
import type { Scenario, ApiResponse } from './types'

async getScenarios(): Promise<Scenario[]> {
  const response = await this.scenario.manager.apiV1ScenariosGet()
  return response.data as Scenario[]
}
```

### 4. 单元测试

```ts
// api/api-helper.test.ts
import { ApiHelperExtend } from './api-helper'

describe('ApiHelperExtend', () => {
  let apiHelper: ApiHelperExtend

  beforeEach(() => {
    apiHelper = new ApiHelperExtend()
  })

  test('should create instance', () => {
    expect(apiHelper).toBeInstanceOf(ApiHelperExtend)
  })

  test('should login successfully', async () => {
    const token = await apiHelper.logIn(
      'tenant-123',
      'client-id',
      'password',
      'client-secret',
      'admin',
      'password123'
    )
    expect(token.access_token).toBeDefined()
  })
})
```
