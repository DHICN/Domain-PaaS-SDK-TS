---
name: dhicn-domain-paas-sdk
description: 帮助开发者在项目中正确使用 @dhicn/domain-paas-sdk-ts 业务中台 SDK，适用于需要集成用户认证、方案管理、模型驱动、IoT、GIS、文件服务等 DHI 业务中台 API 的场景
---

# DHI 业务中台 SDK 使用指南

## 使用说明

本技能帮助你在项目中快速集成和使用 **@dhicn/domain-paas-sdk-ts**，这是 DHI 中国业务中台的 TypeScript 客户端 SDK。

### 核心功能

1. **快速搭建 API 服务层** - 继承 `ApiHelper` 类，配置所需的服务模块
2. **认证管理** - 处理登录、Token 刷新、租户切换
3. **服务模块选择** - 根据业务需求选择合适的微服务模块
4. **类型安全调用** - 使用 TypeScript 类型定义进行 API 调用

### 适用场景

- 需要连接 DHI 业务中台进行用户认证管理
- 需要管理方案（Scenario）的创建、查询、计算
- 需要访问模型驱动、模型配置、模型信息服务
- 需要集成 IoT 物联网数据、GIS 地理信息
- 需要文件服务、数字孪生、事故管理等功能
- 开发供水（WD）或污水处理（WWTP）业务应用

## 快速开始

### 1. 安装 SDK

```bash
npm install @dhicn/domain-paas-sdk-ts
```

### 2. 创建 API 管理类

继承 `ApiHelper` 并配置所需的服务：

```ts
// api.ts
import { ApiHelper } from '@dhicn/domain-paas-sdk-ts/sdk-helper'
import * as ScenarioApi from '@dhicn/domain-paas-sdk-ts/scenario-service'
import { UsersMnangerApi } from '@dhicn/domain-paas-sdk-ts/identity-service'
import { TelemetryApi } from '@dhicn/domain-paas-sdk-ts/iot-service'

const baseUrl = '/ningbo-wd'
const scenarioBaseUrl = `${baseUrl}/global-scenario-manager-service`
const iotBaseUrl = `${baseUrl}/iot-service`

export class ApiHelperExtend extends ApiHelper {
  scenario: {
    manager: ScenarioApi.ScenarioManagerApi
  }
  userApi: UsersMnangerApi
  telemetry: TelemetryApi

  constructor() {
    super()
    
    // 配置响应拦截器
    this.axiosInstance.interceptors.response.use(
      async (response) => {
        const { status, data, message } = response.data
        if (typeof status === 'boolean' && !status) {
          console.error(message)
          return Promise.reject(response.data)
        }
        response.data = data ?? status
        return response
      },
      (error) => {
        console.error('Request Error :>> ', error)
        return Promise.reject(error)
      }
    )

    // 实例化 API
    this.scenario = {
      manager: new ScenarioApi.ScenarioManagerApi(scenarioBaseUrl, this.axiosInstance)
    }
    this.userApi = new UsersMnangerApi(DomainServiceUrlMap.identity, this.axiosInstance)
    this.telemetry = new TelemetryApi(iotBaseUrl, this.axiosInstance)
  }
}
```

### 3. 登录并使用

```ts
// main.ts
const apiHelper = new ApiHelperExtend()

// 登录认证
await apiHelper.logIn(tenantId, clientId, grantType, clientSecret, username, password)

// 调用 API
const scenarios = await apiHelper.scenario.manager.apiV1ScenariosGet()
const users = await apiHelper.userApi.apiV1UsersGet()
```

## 服务模块清单

### 已实现服务

| 服务模块 | 导入路径 | 功能描述 |
|---------|---------|---------|
| `identity-service` | `@dhicn/domain-paas-sdk-ts/identity-service` | 用户认证管理服务 |
| `scenario-service` | `@dhicn/domain-paas-sdk-ts/scenario-service` | 方案管理服务 |
| `scenario-calculate` | `@dhicn/domain-paas-sdk-ts/scenario-calculate` | 方案计算服务 |
| `model-driver-service` | `@dhicn/domain-paas-sdk-ts/model-driver-service` | 模型驱动服务 |
| `model-information` | `@dhicn/domain-paas-sdk-ts/model-information` | 模型信息服务 |
| `model-configuration` | `@dhicn/domain-paas-sdk-ts/model-configuration` | 模型配置服务 |
| `result-service` | `@dhicn/domain-paas-sdk-ts/result-service` | 结果分析服务 |
| `accident-service` | `@dhicn/domain-paas-sdk-ts/accident-service` | 事故管理服务 |
| `digital-twin-service` | `@dhicn/domain-paas-sdk-ts/digital-twin-service` | 数字孪生服务 |
| `iot-service` | `@dhicn/domain-paas-sdk-ts/iot-service` | IoT 物联网服务 |
| `compute-service` | `@dhicn/domain-paas-sdk-ts/compute-service` | 计算服务 |
| `log-service` | `@dhicn/domain-paas-sdk-ts/log-service` | 日志服务 |
| `data-center-service` | `@dhicn/domain-paas-sdk-ts/data-center-service` | 数据中台服务 |
| `plugin-service` | `@dhicn/domain-paas-sdk-ts/plugin-service` | 插件服务 |
| `file-service` | `@dhicn/domain-paas-sdk-ts/file-service` | 文件服务 |
| `gis-service` | `@dhicn/domain-paas-sdk-ts/gis-service` | GIS 地理信息服务 |
| `wd-domain` | `@dhicn/domain-paas-sdk-ts/wd-domain` | 供水业务中台服务 |
| `wwtp-domain` | `@dhicn/domain-paas-sdk-ts/wwtp-domain` | 污水处理业务中台主总线服务 |
| `wwtp-infrastructure` | `@dhicn/domain-paas-sdk-ts/wwtp-infrastructure` | 污水处理基础设施服务 |

### 待实现服务

- `message-service` - 消息服务
- `document-service` - 文档服务
- `text-search-service` - 全文搜索服务
- `device-management-service` - 资产设备服务

## 核心类说明

### ApiHelper

基础 API 辅助类，提供以下方法：

| 方法 | 参数 | 说明 |
|-----|------|-----|
| `logIn()` | tenantId, clientId, grantType, clientSecret, username, password | 登录认证 |
| `refreshToken()` | tenantid, clientId, clientSecret, grantType, refreshToken, ... | 刷新 Token |
| `setAuth()` | token | 设置认证头 |
| `changeTenantId()` | tenantId | 切换租户 |

### DomainServiceUrlMap

微服务路由映射表：

```ts
export const DomainServiceUrlMap = {
  identity: 'identity-service',
  scenario: 'global-scenario-manager-service',
  modelDriver: 'global-model-driver-service',
  resultAnalysis: 'global-result-service',
  // ... 更多服务
}
```

## 示例

### 示例 1: 简化配置（仅使用少量服务）

```ts
import { ApiHelper, DomainServiceUrlMap } from '@dhicn/domain-paas-sdk-ts/sdk-helper'
import { UsersMnangerApi } from '@dhicn/domain-paas-sdk-ts/identity-service'
import { ScenarioGroupApi } from '@dhicn/domain-paas-sdk-ts/scenario-service'

export class ApiHelperExtend extends ApiHelper {
  userApi: UsersMnangerApi
  scenarioGroup: ScenarioGroupApi

  constructor() {
    super()
    this.userApi = new UsersMnangerApi(DomainServiceUrlMap.identity, this.axiosInstance)
    this.scenarioGroup = new ScenarioGroupApi(DomainServiceUrlMap.scenario, this.axiosInstance)
  }
}
```

### 示例 2: 完整配置（多服务集成）

```ts
import { ApiHelper } from '@dhicn/domain-paas-sdk-ts/sdk-helper'
import * as ScenarioApi from '@dhicn/domain-paas-sdk-ts/scenario-service'
import * as ModelDriverApi from '@dhicn/domain-paas-sdk-ts/model-driver-service'
import { HistoricalDataSearchApi, TelemetryApi } from '@dhicn/domain-paas-sdk-ts/iot-service'
import { UrbanWdResultAnalysisApi } from '@dhicn/domain-paas-sdk-ts/result-service'
import { GisQueryApi, PathPlanningApi } from '@dhicn/domain-paas-sdk-ts/gis-service'
import { FileServerApi } from '@dhicn/domain-paas-sdk-ts/file-service'

const baseUrl = '/ningbo-wd'

export class ApiHelperExtend extends ApiHelper {
  scenario: {
    manager: ScenarioApi.ScenarioManagerApi
    library: ScenarioApi.LibraryApi
  }
  modelDriver: {
    modelRunApi: ModelDriverApi.ModelRunApi
  }
  globalResultService: {
    urbanWd: UrbanWdResultAnalysisApi
  }
  gis: GisQueryApi
  path: PathPlanningApi
  dataSearch: HistoricalDataSearchApi
  ts: TelemetryApi
  fileService: FileServerApi

  constructor() {
    super()
    this.axiosInstance.defaults.headers.common.showErrMsg = true

    this.scenario = {
      manager: new ScenarioApi.ScenarioManagerApi(
        `${baseUrl}/global-scenario-manager-service`, 
        this.axiosInstance
      ),
      library: new ScenarioApi.LibraryApi(
        `${baseUrl}/global-scenario-manager-service`, 
        this.axiosInstance
      )
    }
    this.modelDriver = {
      modelRunApi: new ModelDriverApi.ModelRunApi(
        `${baseUrl}/global-model-driver-service`, 
        this.axiosInstance
      )
    }
    this.globalResultService = {
      urbanWd: new UrbanWdResultAnalysisApi(
        `${baseUrl}/global-result-service`, 
        this.axiosInstance
      )
    }
    this.gis = new GisQueryApi(`${baseUrl}/gis-service`, this.axiosInstance)
    this.path = new PathPlanningApi(`${baseUrl}/gis-service`, this.axiosInstance)
    this.dataSearch = new HistoricalDataSearchApi(`${baseUrl}/iot-service`, this.axiosInstance)
    this.ts = new TelemetryApi(`${baseUrl}/iot-service`, this.axiosInstance)
    this.fileService = new FileServerApi(
      `${baseUrl}/global-file-service`, 
      this.axiosInstance
    )
  }
}

// 使用
const apiHelper = new ApiHelperExtend()
await apiHelper.logIn(tenantId, clientId, grantType, clientSecret, username, password)

// 调用各服务 API
const scenarios = await apiHelper.scenario.manager.apiV1ScenariosGet()
const modelRuns = await apiHelper.modelDriver.modelRunApi.apiV1ModelRunsGet()
const telemetryData = await apiHelper.ts.telemetryDataGet()
```

### 示例 3: 供水业务中台（WD Domain）

```ts
import { ApiHelper } from '@dhicn/domain-paas-sdk-ts/sdk-helper'
import {
  AccidentApi,
  AlarmLogApi,
  OnlineApi,
  PipeRiskApi,
  AccuracyConfigApi,
  IndicatorConfigApi,
  AlarmConfigApi,
  ScheduleApi,
} from '@dhicn/domain-paas-sdk-ts/wd-domain'
import { WDScenarioApi } from '@dhicn/domain-paas-sdk-ts/compute-service'

const domainWDBaseUrl = '/ningbo-wd/wd-domain-service'
const computeUrl = '/ningbo-wd/global-scenario-compute-service'

export class WDApiHelper extends ApiHelper {
  online: OnlineApi
  alarmLog: AlarmLogApi
  accident: AccidentApi
  pipeRisk: PipeRiskApi
  accuracyConfig: AccuracyConfigApi
  indicatorConfig: IndicatorConfigApi
  alarmConfigApi: AlarmConfigApi
  scheduling: ScheduleApi
  wdScenarioCompute: WDScenarioApi

  constructor() {
    super()
    this.online = new OnlineApi(domainWDBaseUrl, this.axiosInstance)
    this.alarmLog = new AlarmLogApi(domainWDBaseUrl, this.axiosInstance)
    this.accident = new AccidentApi(domainWDBaseUrl, this.axiosInstance)
    this.pipeRisk = new PipeRiskApi(domainWDBaseUrl, this.axiosInstance)
    this.accuracyConfig = new AccuracyConfigApi(domainWDBaseUrl, this.axiosInstance)
    this.indicatorConfig = new IndicatorConfigApi(domainWDBaseUrl, this.axiosInstance)
    this.alarmConfigApi = new AlarmConfigApi(domainWDBaseUrl, this.axiosInstance)
    this.scheduling = new ScheduleApi(domainWDBaseUrl, this.axiosInstance)
    this.wdScenarioCompute = new WDScenarioApi(computeUrl, this.axiosInstance)
  }
}
```

## 注意事项

1. **认证信息**：需要从 [DHI 中国业务中台](https://online-products.dhichina.cn/) 获取使用许可和认证信息
2. **基础 URL 配置**：根据实际部署环境配置各服务的基础 URL
3. **响应拦截器**：建议配置统一的错误处理逻辑
4. **类型导入**：使用命名空间导入（如 `ScenarioApi.ScenarioManagerApi`）获得更好的类型提示

## 相关资源

- [npm 包主页](https://www.npmjs.com/package/@dhicn/domain-paas-sdk-ts)
- [GitHub 仓库](https://github.com/DHICN/Domian-PaaS-SDK-TS)
- [DHI 在线产品](https://online-products.dhichina.cn/)

## 辅助文件

- 更多详细示例请参阅 [examples.md](./examples.md)
- API 参考和高级用法请参阅 [reference.md](./reference.md)
