# 使用示例集合

本文件包含更多 `@dhicn/domain-paas-sdk-ts` 的使用示例，涵盖常见业务场景。

## 目录

- [基础认证示例](#基础认证示例)
- [方案管理示例](#方案管理示例)
- [IoT 数据查询示例](#iot-数据查询示例)
- [文件上传示例](#文件上传示例)
- [GIS 查询示例](#gis-查询示例)
- [供水业务示例](#供水业务示例)
- [污水处理业务示例](#污水处理业务示例)

---

## 基础认证示例

### 完整登录流程

```ts
import { ApiHelper } from '@dhicn/domain-paas-sdk-ts/sdk-helper'
import { UsersMnangerApi } from '@dhicn/domain-paas-sdk-ts/identity-service'

export class AuthApiHelper extends ApiHelper {
  userApi: UsersMnangerApi

  constructor() {
    super()
    this.userApi = new UsersMnangerApi('identity-service', this.axiosInstance)
  }

  async login(username: string, password: string, tenantId: string) {
    try {
      // 执行登录
      const token = await this.logIn(
        tenantId,
        'your-client-id',
        'password',
        'your-client-secret',
        username,
        password
      )
      
      console.log('登录成功:', token)
      return token
    } catch (error) {
      console.error('登录失败:', error)
      throw error
    }
  }

  async refreshToken() {
    try {
      const newToken = await this.refreshToken(
        this.axiosInstance.defaults.headers.common.tenantId,
        'client-id',
        'client-secret',
        'refresh_token',
        this.token.refresh_token
      )
      return newToken
    } catch (error) {
      // Token 刷新失败，需要重新登录
      throw error
    }
  }
}
```

### Token 过期自动刷新

```ts
export class AutoRefreshApiHelper extends ApiHelper {
  constructor() {
    super()
    
    // 配置响应拦截器，自动处理 Token 过期
    this.axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config
        
        // 如果是 401 错误且未重试过
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true
          
          try {
            // 刷新 Token
            await this.refreshToken(
              this.axiosInstance.defaults.headers.common.tenantId,
              'client-id',
              'client-secret',
              'refresh_token',
              this.token.refresh_token
            )
            
            // 重试原请求
            originalRequest.headers.Authorization = 
              `${this.token.token_type} ${this.token.access_token}`
            return this.axiosInstance(originalRequest)
          } catch (refreshError) {
            // 刷新失败，跳转到登录页
            throw refreshError
          }
        }
        
        return Promise.reject(error)
      }
    )
  }
}
```

---

## 方案管理示例

### 创建和管理方案

```ts
import { ApiHelper } from '@dhicn/domain-paas-sdk-ts/sdk-helper'
import * as ScenarioApi from '@dhicn/domain-paas-sdk-ts/scenario-service'

export class ScenarioHelper extends ApiHelper {
  scenarioManager: ScenarioApi.ScenarioManagerApi
  scenarioLibrary: ScenarioApi.LibraryApi

  constructor() {
    super()
    const baseUrl = '/global-scenario-manager-service'
    this.scenarioManager = new ScenarioApi.ScenarioManagerApi(baseUrl, this.axiosInstance)
    this.scenarioLibrary = new ScenarioApi.LibraryApi(baseUrl, this.axiosInstance)
  }

  // 获取所有方案
  async getScenarios() {
    const response = await this.scenarioManager.apiV1ScenariosGet()
    return response.data
  }

  // 创建新方案
  async createScenario(name: string, description: string) {
    const scenario = {
      name,
      description,
      created: new Date().toISOString(),
      modified: new Date().toISOString()
    }
    
    const response = await this.scenarioManager.apiV1ScenariosPost(scenario)
    return response.data
  }

  // 获取方案详情
  async getScenarioById(id: string) {
    const response = await this.scenarioManager.apiV1ScenariosIdGet(id)
    return response.data
  }

  // 更新方案
  async updateScenario(id: string, updates: Partial<any>) {
    const response = await this.scenarioManager.apiV1ScenariosIdPut(id, updates)
    return response.data
  }

  // 删除方案
  async deleteScenario(id: string) {
    await this.scenarioManager.apiV1ScenariosIdDelete(id)
  }

  // 从库中添加组件到方案
  async addLibraryItemToScenario(scenarioId: string, libraryItemId: string) {
    const response = await this.scenarioLibrary.apiV1LibraryPost({
      scenarioId,
      libraryItemId
    })
    return response.data
  }
}
```

---

## IoT 数据查询示例

### 查询遥测数据

```ts
import { ApiHelper } from '@dhicn/domain-paas-sdk-ts/sdk-helper'
import { TelemetryApi, HistoricalDataSearchApi } from '@dhicn/domain-paas-sdk-ts/iot-service'

export class IoTHelper extends ApiHelper {
  telemetry: TelemetryApi
  historicalSearch: HistoricalDataSearchApi

  constructor() {
    super()
    const baseUrl = '/iot-service'
    this.telemetry = new TelemetryApi(baseUrl, this.axiosInstance)
    this.historicalSearch = new HistoricalDataSearchApi(baseUrl, this.axiosInstance)
  }

  // 获取实时遥测数据
  async getTelemetryData(sensorId: string) {
    const response = await this.telemetry.telemetryDataGet(sensorId)
    return response.data
  }

  // 批量获取多个传感器数据
  async getBatchTelemetryData(sensorIds: string[]) {
    const promises = sensorIds.map(id => this.telemetry.telemetryDataGet(id))
    const results = await Promise.all(promises)
    return results.map(r => r.data)
  }

  // 查询历史数据
  async searchHistoricalData(
    sensorId: string,
    startTime: Date,
    endTime: Date,
    interval?: string
  ) {
    const response = await this.historicalSearch.historicalDataSearchGet(
      sensorId,
      startTime.toISOString(),
      endTime.toISOString(),
      interval
    )
    return response.data
  }

  // 获取传感器列表
  async getSensors() {
    const response = await this.telemetry.sensorsGet()
    return response.data
  }
}

// 使用示例
const iotHelper = new IoTHelper()
await iotHelper.logIn(tenantId, clientId, grantType, clientSecret, username, password)

// 获取实时数据
const telemetryData = await iotHelper.getTelemetryData('sensor-001')

// 查询历史数据
const historicalData = await iotHelper.searchHistoricalData(
  'sensor-001',
  new Date('2024-01-01'),
  new Date('2024-01-02'),
  '1h'
)
```

---

## 文件上传示例

### 上传和下载文件

```ts
import { ApiHelper } from '@dhicn/domain-paas-sdk-ts/sdk-helper'
import { FileServerApi } from '@dhicn/domain-paas-sdk-ts/file-service'

export class FileHelper extends ApiHelper {
  fileService: FileServerApi

  constructor() {
    super()
    const baseUrl = '/global-file-service'
    this.fileService = new FileServerApi(baseUrl, this.axiosInstance)
  }

  // 上传文件
  async uploadFile(file: File, metadata?: any) {
    const formData = new FormData()
    formData.append('file', file)
    
    if (metadata) {
      formData.append('metadata', JSON.stringify(metadata))
    }

    const response = await this.fileService.filesPost(formData)
    return response.data
  }

  // 下载文件
  async downloadFile(fileId: string): Promise<Blob> {
    const response = await this.fileService.filesIdGet(fileId, {
      responseType: 'blob'
    })
    return response.data
  }

  // 获取文件列表
  async getFiles(page?: number, pageSize?: number) {
    const response = await this.fileService.filesGet(page, pageSize)
    return response.data
  }

  // 删除文件
  async deleteFile(fileId: string) {
    await this.fileService.filesIdDelete(fileId)
  }
}

// 使用示例
const fileHelper = new FileHelper()
await fileHelper.logIn(tenantId, clientId, grantType, clientSecret, username, password)

// 上传文件
const fileInput = document.getElementById('file-input') as HTMLInputElement
const file = fileInput.files?.[0]
if (file) {
  const result = await fileHelper.uploadFile(file, {
    description: '测试文件',
    category: 'documents'
  })
  console.log('上传成功:', result)
}

// 下载文件
const blob = await fileHelper.downloadFile('file-id-123')
const url = URL.createObjectURL(blob)
const a = document.createElement('a')
a.href = url
a.download = 'downloaded-file.pdf'
a.click()
```

---

## GIS 查询示例

### 地理信息查询和路径规划

```ts
import { ApiHelper } from '@dhicn/domain-paas-sdk-ts/sdk-helper'
import { GisQueryApi, PathPlanningApi } from '@dhicn/domain-paas-sdk-ts/gis-service'

export class GISHelper extends ApiHelper {
  gisQuery: GisQueryApi
  pathPlanning: PathPlanningApi

  constructor() {
    super()
    const baseUrl = '/gis-service'
    this.gisQuery = new GisQueryApi(baseUrl, this.axiosInstance)
    this.pathPlanning = new PathPlanningApi(baseUrl, this.axiosInstance)
  }

  // 查询地理要素
  async queryFeatures(layerId: string, filters?: any) {
    const response = await this.gisQuery.gisQueryGet(layerId, filters)
    return response.data
  }

  // 路径规划
  async planPath(startPoint: [number, number], endPoint: [number, number]) {
    const response = await this.pathPlanning.pathPlanningPost({
      start: startPoint,
      end: endPoint
    })
    return response.data
  }

  // 获取图层信息
  async getLayers() {
    const response = await this.gisQuery.layersGet()
    return response.data
  }
}

// 使用示例
const gisHelper = new GISHelper()
await gisHelper.logIn(tenantId, clientId, grantType, clientSecret, username, password)

// 查询管网图层
const features = await gisHelper.queryFeatures('pipe-network', {
  type: 'water-pipe',
  status: 'active'
})

// 路径规划
const path = await gisHelper.planPath(
  [121.5, 29.8],
  [121.6, 29.9]
)
```

---

## 供水业务示例

### 完整的供水业务 API 集成

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
import { ModelPointApi } from '@dhicn/domain-paas-sdk-ts/digital-twin-service'

export class WDDomainHelper extends ApiHelper {
  // 在线监测
  online: OnlineApi
  // 报警日志
  alarmLog: AlarmLogApi
  // 事故管理
  accident: AccidentApi
  // 管网风险
  pipeRisk: PipeRiskApi
  // 精度配置
  accuracyConfig: AccuracyConfigApi
  // 指标配置
  indicatorConfig: IndicatorConfigApi
  // 报警配置
  alarmConfig: AlarmConfigApi
  // 调度计划
  scheduling: ScheduleApi
  // 方案计算
  wdScenarioCompute: WDScenarioApi
  // 模型测点
  modelPoint: ModelPointApi

  constructor() {
    super()
    const domainUrl = '/wd-domain-service'
    const computeUrl = '/global-scenario-compute-service'
    const twinUrl = '/digital-twin-service'

    this.online = new OnlineApi(domainUrl, this.axiosInstance)
    this.alarmLog = new AlarmLogApi(domainUrl, this.axiosInstance)
    this.accident = new AccidentApi(domainUrl, this.axiosInstance)
    this.pipeRisk = new PipeRiskApi(domainUrl, this.axiosInstance)
    this.accuracyConfig = new AccuracyConfigApi(domainUrl, this.axiosInstance)
    this.indicatorConfig = new IndicatorConfigApi(domainUrl, this.axiosInstance)
    this.alarmConfig = new AlarmConfigApi(domainUrl, this.axiosInstance)
    this.scheduling = new ScheduleApi(domainUrl, this.axiosInstance)
    this.wdScenarioCompute = new WDScenarioApi(computeUrl, this.axiosInstance)
    this.modelPoint = new ModelPointApi(twinUrl, this.axiosInstance)
  }

  // 获取在线监测数据
  async getOnlineData(stationId: string) {
    const response = await this.online.onlineDataGet(stationId)
    return response.data
  }

  // 查询报警记录
  async getAlarmLogs(startTime: Date, endTime: Date, level?: string) {
    const response = await this.alarmLog.alarmLogsGet(
      startTime.toISOString(),
      endTime.toISOString(),
      level
    )
    return response.data
  }

  // 获取管网风险评估
  async getPipeRiskAssessment(areaId: string) {
    const response = await this.pipeRisk.pipeRiskGet(areaId)
    return response.data
  }

  // 执行方案计算
  async runScenarioCalculation(scenarioId: string, parameters?: any) {
    const response = await this.wdScenarioCompute.wdScenarioCalculationPost(
      scenarioId,
      parameters
    )
    return response.data
  }
}
```

---

## 污水处理业务示例

### 污水处理业务中台集成

```ts
import { ApiHelper } from '@dhicn/domain-paas-sdk-ts/sdk-helper'
import * as WWTPMainBusApi from '@dhicn/domain-paas-sdk-ts/wwtp-domain'
import * as WWTPInfrastructureApi from '@dhicn/domain-paas-sdk-ts/wwtp-infrastructure'

export class WWTPDomainHelper extends ApiHelper {
  mainBus: {
    // 主总线服务 API 实例
  }
  infrastructure: WWTPInfrastructureApi.InfrastructureApi

  constructor() {
    super()
    const baseUrl = '/wwtp-paas-main-bus-service'
    
    this.infrastructure = new WWTPInfrastructureApi.InfrastructureApi(
      baseUrl, 
      this.axiosInstance
    )
  }

  // 获取污水处理厂信息
  async getWWTPPlantInfo(plantId: string) {
    const response = await this.infrastructure.plantInfoGet(plantId)
    return response.data
  }

  // 获取工艺流程数据
  async getProcessData(plantId: string, processType: string) {
    const response = await this.infrastructure.processDataGet(plantId, processType)
    return response.data
  }

  // 获取设备状态
  async getEquipmentStatus(plantId: string, equipmentId: string) {
    const response = await this.infrastructure.equipmentStatusGet(plantId, equipmentId)
    return response.data
  }
}
```

---

## 模型服务示例

### 模型驱动与配置

```ts
import { ApiHelper } from '@dhicn/domain-paas-sdk-ts/sdk-helper'
import * as ModelDriverApi from '@dhicn/domain-paas-sdk-ts/model-driver-service'
import { LegendApi } from '@dhicn/domain-paas-sdk-ts/model-configuration'
import { ModelPointApi } from '@dhicn/domain-paas-sdk-ts/digital-twin-service'

export class ModelServiceHelper extends ApiHelper {
  modelDriver: ModelDriverApi.ModelRunApi
  legend: LegendApi
  modelPoint: ModelPointApi

  constructor() {
    super()
    const modelDriverUrl = '/global-model-driver-service'
    const modelConfigUrl = '/global-model-configuration-service'
    const twinUrl = '/digital-twin-service'

    this.modelDriver = new ModelDriverApi.ModelRunApi(modelDriverUrl, this.axiosInstance)
    this.legend = new LegendApi(modelConfigUrl, this.axiosInstance)
    this.modelPoint = new ModelPointApi(twinUrl, this.axiosInstance)
  }

  // 运行模型
  async runModel(modelId: string, parameters: any) {
    const response = await this.modelDriver.modelRunPost({
      modelId,
      parameters
    })
    return response.data
  }

  // 获取模型运行状态
  async getModelRunStatus(runId: string) {
    const response = await this.modelDriver.modelRunStatusGet(runId)
    return response.data
  }

  // 获取图例配置
  async getLegendConfig(layerId: string) {
    const response = await this.legend.legendGet(layerId)
    return response.data
  }

  // 获取模型测点
  async getModelPoints(modelId: string) {
    const response = await this.modelPoint.modelPointsGet(modelId)
    return response.data
  }
}
```

---

## 结果分析示例

### 结果查询与分析

```ts
import { ApiHelper } from '@dhicn/domain-paas-sdk-ts/sdk-helper'
import { UrbanWdResultAnalysisApi } from '@dhicn/domain-paas-sdk-ts/result-service'

export class ResultAnalysisHelper extends ApiHelper {
  urbanWdResult: UrbanWdResultAnalysisApi

  constructor() {
    super()
    const resultServiceUrl = '/global-result-service'
    this.urbanWdResult = new UrbanWdResultAnalysisApi(resultServiceUrl, this.axiosInstance)
  }

  // 获取供水方案结果
  async getWdScenarioResult(scenarioId: string, resultType: string) {
    const response = await this.urbanWdResult.urbanWdResultGet(scenarioId, resultType)
    return response.data
  }

  // 获取时间序列结果
  async getTimeSeriesResult(scenarioId: string, nodeId: string, parameter: string) {
    const response = await this.urbanWdResult.timeSeriesResultGet(
      scenarioId,
      nodeId,
      parameter
    )
    return response.data
  }

  // 获取统计结果
  async getStatisticsResult(scenarioId: string, statisticsType: string) {
    const response = await this.urbanWdResult.statisticsResultGet(
      scenarioId,
      statisticsType
    )
    return response.data
  }
}
```
