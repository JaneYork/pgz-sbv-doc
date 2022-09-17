---
title: 技术选型及软件架构图
icon: alias
---

# 技术选型及软件架构图

## 技术选型

平台采用 Java 开发语言，具有可移植性、跨平台等特性。同时，平台提供跨平台技术解决方案，pgz-serial 串口、建行 POS 收银等，都是基于本平台衍生的跨平台案例。

| 功能介绍 | 使用技术 | 优势/特性 |
| --- | --- | --- |
| 开发语言 | Java | 主流开发语言、跨平台、高可用 |
| 前端开发框架 | Vue、Ant Design Vue | 主流开发框架、统一风格、响应式 |
| 后端开发框架 | SpringBoot | SpringBoot |
| 容器框架 | Undertow | 基于 XNIO 的高性能容器 |
| 权限认证框架 | Jwt | 强解耦、强扩展 |
| 关系数据库 | MySQL | 适配 8.X 最低 5.7 |
| 缓存数据库 | Redis | 适配 7.X 最低 4.X |
| 数据库框架 | Mybatis | 快速 CRUD 增加开发效率 |
| 数据库框架 | p6spy(极狐) | 更强劲的 SQL 分析 |
| 多数据源框架 | dynamic-datasource | 支持主从与多种类数据库异构 |
| 序列化框架 | Jackson、fastjson | 高效可靠 |
| Redis 客户端 | Redisson | 支持单机、集群配置 |
| 分布式限流 | Redisson | 全局、请求 IP、集群 ID 多种限流 |
| 分布式队列 | Redisson | 普通队列、延迟队列、优先队列 等 |
| 分布式锁 | Lock4j | 注解锁、工具锁 多种多样 |
| 分布式幂等 | Redisson | 拦截重复提交 |
| 分布式日志 | TLog | 支持跟踪链路日志记录、性能分析、链路排查 |
| 分布式任务调度 | Xxl-Job、Quartz | 高性能 高可靠 易扩展 |
| 文件存储 | Minio | 本地存储、高可用、提供单机部署、分布式部署解决方案 |
| 文件存储 | 七牛、阿里、腾讯、百度、京东、天翼云 | 分布式云存储、兼容所有 S3 协议的云存储 |
| 短信模块 | 阿里、腾讯 | 短信发送 |
| 监控框架 | SpringBoot-Admin | 全方位服务监控 |
| 校验框架 | Validation | 增强接口安全性、严谨性 支持国际化 |
| Excel 框架 | Alibaba EasyExcel | 性能优异 扩展性强、海量数据导入导出 |
| 文档框架 | Knife4j、swagger | 美化接口文档、可视化接口文档 |
| 工具类框架 | Hutool、Lombok | 减少代码冗余 增加安全性 |
| 代码生成器 | 适配 MP、Knife4j 规范化代码 | 一键生成前后端代码 |
| 国际化 | SpringMessage | Spring 标准国际化方案 |
| 表单构建 | Ant Design Vue | 在线可视化表单拖拽生成 |
| 私有区块链 | 以太坊 ETH、solidity、后续百度 Baas | 智能合约、高可用、高安全 |

## 软件架构图

```
首次加载，请耐心等待......
```

<iframe id="embed_dom" name="embed_dom" frameborder="0" style="display:block;width:100%; height:445px;" src="https://www.processon.com/embed/63229ef27d9c081f94d2c8e8"></iframe>

## 系统架构图

如下：

<div align="center">
  <img alt="PGZ-SBV系统架构设计" src="https://tva1.sinaimg.cn/large/e6c9d24ely1h676thwm03j20km0ju40g.jpg" width="600">
</div>
