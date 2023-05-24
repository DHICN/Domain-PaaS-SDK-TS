<h1 align="center"> Domain-PaaS-SDK for Typescript </h1>
<div align="center">

[![Version](https://badgen.net/npm/v/@dhicn/domain-paas-sdk-ts)](https://npmjs.com/@dhicn/domain-paas-sdk-ts) [![License](https://badgen.net/github/license/DHICN/Domian-PaaS-SDK-TS)](https://github.com/DHICN/Domian-PaaS-SDK-TS/blob/main/LICENSE)

这是一个[DHI 中国 业务中台](https://online-products.dhichina.cn/) 的 Client SDK 开发辅助包，帮您快速通过我们的业务中台构建应用。

</div>

## 🔆 功能清单

- [x] identity-service 用户认证管理服务
- [x] scenario-service 方案管理管理服务
- [ ] message-service 消息服务
- [ ] document-service 文档服务
- [ ] scenario-compute-service 方案计算服务
- [ ] model-driver-service 模型计算服务
- [ ] result-analysis-service 结果分析服务
- [ ] model-information-service 模型分析服务
- [ ] model-configuration-service 模型计算服务
- [ ] text-search-service 全文搜索服务
- [ ] device-management-service 资产设备服务
- [ ] accident-management-service 事故管理服务
- [ ] digital-twin-service 模型映射服务
- [x] iot-service IoT 服务
- [ ] wwtp-paas-main-bus-service 污水业务中台基础服务
- [ ] wwtp-paas-infrastructure-service 污水业务中台邻域服务
- [ ] wd-domain-service 供水业务中台邻域服务

## 🌏 第三方依赖

### axios [![axios](https://badgen.net/npm/v/axios)](https://www.npmjs.com/package/axios) qs [![axios](https://badgen.net/npm/v/qs)](https://www.npmjs.com/package/qs)

## 📦 安装

```bash
$ npm install @dhicn/domain-paas-sdk-ts
```

## 🔨 使用

需要先联系我们获取的 [DHI 中国 业务中台](https://online-products.dhichina.cn/) 使用许可和认证信息。

### 基础使用

```ts apiHelper.ts 继承 Helper.ApiHelper ，添加需要使用的API
import { Helper, IdentityServiceApi } from '@dhicn/domain-paas-sdk-ts'

export class ApiHelperExtend extends Helper.ApiHelper {
  userApi: IdentityServiceApi.UsersMnangerApi
  scenarioGroup: ScenarioServiceApi.ScenarioGroupApi
  // ...自定义需要使用API
  constructor() {
    super()
    // 在构造函数中实例化对应API，需要传入API访问前缀和axios实例
    this.userApi = new IdentityServiceApi.UsersMnangerApi(
      DomainServiceUrlMap.identity,
      this.axiosInstance,
    )
    this.scenarioGroup = new ScenarioServiceApi.ScenarioGroupApi(
      DomainServiceUrlMap.scenario,
      this.axiosInstance,
    )
    // ...这里可以对 AxiosInstance 进行自行修改
  }
}
```

```ts main.ts
const apiHelper = new ApiHelperExtend()
// 根据业务中台使用许可
const { tenantId, client_id, grant_type, client_secret, username, password } = tokenParas
// 登录，登录成功后自动设置Token和TenantId
await apiHelper.logIn(tenantId, client_id, grant_type, client_secret, username, password)
// 登录成功后可以，使用其他API，例如通过Token获取登录用户-权限信息
await apiHelper.userApi.apiAppUsersMnangerUserPersGet()
```

### 分文件引用

```ts apiHelper.ts 继承 Helper.ApiHelper ，添加需要使用的API
import { ApiHelper, DomainServiceUrlMap } from '@dhicn/domain-paas-sdk-ts/sdk-helper'
import { UsersMnangerApi } from '@dhicn/domain-paas-sdk-ts/identity-service'
import { ScenarioGroupApi } from '@dhicn/domain-paas-sdk-ts/scenario-service'

export class ApiHelperExtend extends Helper.ApiHelper {
  userApi: IdentityServiceApi.UsersMnangerApi
  scenarioGroup: ScenarioServiceApi.ScenarioGroupApi
  // ...自定义需要使用API
  constructor() {
    super()
    // 在构造函数中实例化对应API，需要传入API访问前缀和axios实例
    this.userApi = new IdentityServiceApi.UsersMnangerApi(
      DomainServiceUrlMap.identity,
      this.axiosInstance,
    )
    this.scenarioGroup = new ScenarioServiceApi.ScenarioGroupApi(
      DomainServiceUrlMap.scenario,
      this.axiosInstance,
    )
    // ...这里可以对 AxiosInstance 进行自行修改
  }
}
```
