<h1 align="center"> Domain-PaaS-SDK for Typescript </h1>
<div align="center">

[![Version](https://badgen.net/npm/v/@dhicn/domain-paas-sdk-ts)](https://npmjs.com/@dhicn/domain-paas-sdk-ts) [![License](https://badgen.net/github/license/DHICN/Domian-PaaS-SDK-TS)](https://github.com/DHICN/Domian-PaaS-SDK-TS/blob/main/LICENSE)

这是一个 [DHI 中国 业务中台](https://online-products.dhichina.cn/) 的 Client SDK 开发辅助包，帮您快速通过我们的业务中台构建应用。

</div>

## 🔆 功能清单

### ✅ 已实现服务

| 服务模块                             | 功能描述                     |
| ------------------------------------ | ---------------------------- |
| `identity-service`                   | 用户认证管理服务             |
| `scenario-service`                   | 方案管理服务                 |
| `scenario-calculate`                 | 方案计算服务                 |
| `model-driver-service`               | 模型驱动服务                 |
| `model-information`                  | 模型信息服务                 |
| `model-configuration`                | 模型配置服务                 |
| `result-service`                     | 结果分析服务                 |
| `accident-service`                   | 事故管理服务                 |
| `digital-twin-service`               | 数字孪生/模型映射服务        |
| `iot-service`                        | IoT 物联网服务               |
| `compute-service`                    | 计算服务                     |
| `log-service`                        | 日志服务                     |
| `data-center-service`                | 数据中台服务                 |
| `plugin-service`                     | 插件服务                     |
| `file-service`                       | 文件服务                     |
| `gis-service`                        | GIS 地理信息服务             |
| `wwtp-domain-main-bus-service`       | 污水处理业务中台主总线服务   |
| `wwtp-domain-infrastructure-service` | 污水处理业务中台基础设施服务 |
| `wd-domain-service`                  | 供水业务中台邻域服务         |

### ⏳ 待实现服务

| 服务模块                    | 功能描述     |
| --------------------------- | ------------ |
| `message-service`           | 消息服务     |
| `document-service`          | 文档服务     |
| `text-search-service`       | 全文搜索服务 |
| `device-management-service` | 资产设备服务 |

## 🌏 第三方依赖

### axios [![axios](https://badgen.net/npm/v/axios)](https://www.npmjs.com/package/axios) qs [![axios](https://badgen.net/npm/v/qs)](https://www.npmjs.com/package/qs)

## 📦 安装

```bash
$ npm install @dhicn/domain-paas-sdk-ts
```

## 🔨 使用

需要先联系我们获取的 [DHI 中国 业务中台](https://online-products.dhichina.cn/) 使用许可和认证信息。

### 基础使用示例

以下是完整的使用示例，展示如何继承 `ApiHelper` 并配置所需的 API：

```ts
// api.ts - API 管理类
import { ApiHelper } from '@dhicn/domain-paas-sdk-ts/sdk-helper'
import * as ScenarioApi from '@dhicn/domain-paas-sdk-ts/scenario-service'
import * as ModelDriverApi from '@dhicn/domain-paas-sdk-ts/model-driver-service'
import { HistoricalDataSearchApi, TelemetryApi } from '@dhicn/domain-paas-sdk-ts/iot-service'
import { UrbanWdResultAnalysisApi } from '@dhicn/domain-paas-sdk-ts/result-service'
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
import { LegendApi } from '@dhicn/domain-paas-sdk-ts/model-configuration'
import { GisQueryApi, PathPlanningApi } from '@dhicn/domain-paas-sdk-ts/gis-service'
import { ModelPointApi } from '@dhicn/domain-paas-sdk-ts/digital-twin-service'
import { FileServerApi } from '@dhicn/domain-paas-sdk-ts/file-service'
import { WDScenarioApi } from '@dhicn/domain-paas-sdk-ts/compute-service'

// 定义各服务的基础 URL
const baseUrl = '/ningbo-wd'
const iotBaseUrl = `${baseUrl}/iot-service`
const computeUrl = `${baseUrl}/global-scenario-compute-service`
const scenarioBaseUrl = `${baseUrl}/global-scenario-manager-service`
const modelDriverBaseUrl = `${baseUrl}/global-model-driver-service`
const globalResultServiceBaseUrl = `${baseUrl}/global-result-service`
const domainWDBaseUrl = `${baseUrl}/wd-domain-service`
const globalModelConfigurationServiceBaseUrl = `${baseUrl}/global-model-configuration-service`
const gisServiceUrl = `${baseUrl}/gis-service`
const digitalTwinUrl = `${baseUrl}/digital-twin-service`
const fileUrl = `${baseUrl}/global-file-service`

export class ApiHelperExtend extends ApiHelper {
  // 声明各服务 API 实例
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
  globalModelConfigurationService: {
    legend: LegendApi
  }

  gis: GisQueryApi
  path: PathPlanningApi
  online: OnlineApi
  alarmLog: AlarmLogApi
  accident: AccidentApi
  pipeRisk: PipeRiskApi
  modelPoint: ModelPointApi
  dataSearch: HistoricalDataSearchApi
  wdScenarioCompute: WDScenarioApi
  fileService: FileServerApi
  ts: TelemetryApi
  accuracyConfig: AccuracyConfigApi
  indicatorConfig: IndicatorConfigApi
  alarmConfigApi: AlarmConfigApi
  scheduling: ScheduleApi

  constructor() {
    super()
    // 配置全局请求头
    this.axiosInstance.defaults.headers.common.showErrMsg = true
    // this.axiosInstance.defaults.headers.common['Accept-Language'] = 'zh-CN'

    // 配置响应拦截器
    this.axiosInstance.interceptors.response.use(
      async (response) => {
        const { status, data, message } = response.data
        if (typeof status === 'boolean') {
          if (status) {
            response.data = data ?? status
            return response
          } else {
            const { showErrMsg } = response.config.headers
            if (showErrMsg) {
              // 显示错误消息
              console.error(message)
            }
            return await Promise.reject(response.data)
          }
        } else {
          return response
        }
      },
      (error) => {
        console.error('Request Error :>> ', error)
        // 处理 403 等错误
        if (error.response?.status === 403) {
          // 执行登出等操作
        }
        return Promise.reject(error)
      },
    )

    // 实例化各服务 API
    this.scenario = {
      manager: new ScenarioApi.ScenarioManagerApi(scenarioBaseUrl, this.axiosInstance),
      library: new ScenarioApi.LibraryApi(scenarioBaseUrl, this.axiosInstance),
    }
    this.modelDriver = {
      modelRunApi: new ModelDriverApi.ModelRunApi(modelDriverBaseUrl, this.axiosInstance),
    }
    this.globalResultService = {
      urbanWd: new UrbanWdResultAnalysisApi(globalResultServiceBaseUrl, this.axiosInstance),
    }
    this.globalModelConfigurationService = {
      legend: new LegendApi(globalModelConfigurationServiceBaseUrl, this.axiosInstance),
    }
    this.gis = new GisQueryApi(gisServiceUrl, this.axiosInstance)
    this.path = new PathPlanningApi(gisServiceUrl, this.axiosInstance)
    this.online = new OnlineApi(domainWDBaseUrl, this.axiosInstance)
    this.alarmLog = new AlarmLogApi(domainWDBaseUrl, this.axiosInstance)
    this.accident = new AccidentApi(domainWDBaseUrl, this.axiosInstance)
    this.pipeRisk = new PipeRiskApi(domainWDBaseUrl, this.axiosInstance)
    this.accuracyConfig = new AccuracyConfigApi(domainWDBaseUrl, this.axiosInstance)
    this.indicatorConfig = new IndicatorConfigApi(domainWDBaseUrl, this.axiosInstance)
    this.alarmConfigApi = new AlarmConfigApi(domainWDBaseUrl, this.axiosInstance)
    this.scheduling = new ScheduleApi(domainWDBaseUrl, this.axiosInstance)
    this.modelPoint = new ModelPointApi(digitalTwinUrl, this.axiosInstance)
    this.dataSearch = new HistoricalDataSearchApi(iotBaseUrl, this.axiosInstance)
    this.ts = new TelemetryApi(iotBaseUrl, this.axiosInstance)
    this.wdScenarioCompute = new WDScenarioApi(computeUrl, this.axiosInstance)
    this.fileService = new FileServerApi(fileUrl, this.axiosInstance)
  }
}
```

### 登录与使用

```ts
// main.ts - 初始化和使用
const apiHelper = new ApiHelperExtend()

// 登录认证
const { tenantId, client_id, grant_type, client_secret, username, password } = tokenParas
await apiHelper.logIn(tenantId, client_id, grant_type, client_secret, username, password)

// 使用 API
await apiHelper.scenario.manager.apiV1ScenariosGet()
await apiHelper.fileService.filesGet()
await apiHelper.gis.gisQueryGet()
```

### 简化示例

如果只需要使用少量服务，可以简化配置：

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

### 完整导入示例

```ts
// 导入所有服务
import {
  Helper,
  DomainServiceUrlMap,
  IdentityServiceApi,
  ScenarioServiceApi,
  ModelDriverApi,
  DigitalTwinApi,
  // ... 其他服务
} from '@dhicn/domain-paas-sdk-ts'
```

### 常用 API 参考

| 服务         | 导入路径                                         | 命名空间                |
| ------------ | ------------------------------------------------ | ----------------------- |
| 用户认证     | `@dhicn/domain-paas-sdk-ts/identity-service`     | `IdentityServiceApi`    |
| 方案管理     | `@dhicn/domain-paas-sdk-ts/scenario-service`     | `ScenarioServiceApi`    |
| 方案计算     | `@dhicn/domain-paas-sdk-ts/scenario-calculate`   | `ScenarioCalculateApi`  |
| 模型驱动     | `@dhicn/domain-paas-sdk-ts/model-driver-service` | `ModelDriverApi`        |
| 模型信息     | `@dhicn/domain-paas-sdk-ts/model-information`    | `ModelInformationApi`   |
| 模型配置     | `@dhicn/domain-paas-sdk-ts/model-configuration`  | `ModelConfigurationApi` |
| 结果分析     | `@dhicn/domain-paas-sdk-ts/result-service`       | `ResultServiceApi`      |
| 事故管理     | `@dhicn/domain-paas-sdk-ts/accident-service`     | `AccidentApi`           |
| 数字孪生     | `@dhicn/domain-paas-sdk-ts/digital-twin-service` | `DigitalTwinApi`        |
| IoT          | `@dhicn/domain-paas-sdk-ts/iot-service`          | `IoTServiceApi`         |
| 计算服务     | `@dhicn/domain-paas-sdk-ts/compute-service`      | `ComputeApi`            |
| 日志服务     | `@dhicn/domain-paas-sdk-ts/log-service`          | `LogApi`                |
| 数据中台     | `@dhicn/domain-paas-sdk-ts/data-center-service`  | `DataCenterApi`         |
| 插件服务     | `@dhicn/domain-paas-sdk-ts/plugin-service`       | `PluginServiceApi`      |
| 文件服务     | `@dhicn/domain-paas-sdk-ts/file-service`         | `FileServiceApi`        |
| GIS 服务     | `@dhicn/domain-paas-sdk-ts/gis-service`          | `GisServiceApi`         |
| 污水业务中台 | `@dhicn/domain-paas-sdk-ts/wwtp-domain`          | `WWTPDomainApi`         |
| 污水基础设施 | `@dhicn/domain-paas-sdk-ts/wwtp-infrastructure`  | `WWTPInfrastructureApi` |
| 供水业务中台 | `@dhicn/domain-paas-sdk-ts/wd-domain`            | `WDDomainApi`           |

## 📝 核心类说明

### ApiHelper

基础 API 辅助类，提供以下功能：

- **登录认证**: `logIn(tenantId, clientId, grantType, clientSecret, username, password)`
- **刷新 Token**: `refreshToken(...)`
- **设置认证头**: `setAuth(token)`
- **切换租户**: `changeTenantId(tenantId)`

### DomainServiceUrlMap

微服务路由映射表，用于指定各服务的访问路径前缀。

```ts
export const DomainServiceUrlMap = {
  identity: 'identity-service',
  scenario: 'global-scenario-manager-service',
  modelDriver: 'global-model-driver-service',
  resultAnalysis: 'global-result-service',
  // ... 更多服务映射
}
```

## 📄 License

MIT
