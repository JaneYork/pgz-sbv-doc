---
title: 更新日志
order: 8
timeline: true
---

# 更新日志

`GeeFox` 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

## 发布周期

- 修订版本号：日常 bugfix 更新。（如果有紧急的 bugfix，则任何时候都可发布）
- 次版本号：~~不定期~~发布一个带有新特性的向下兼容的版本。
- 主版本号：含有破坏性更新和新特性，不在发布周期内。

---

## 3.5.1

`2018-10-05`

- 增加 TC P server ✅netty 对接传感器数据
- 增加自定义勾选删除 ✅
- 增加生成二维码文件 ✅
- 增加在线更新 LICENSE✅
- 增加数据库数数据库结构文档 ✅
- 增加自定义组件：图片预览 ✅
- 增加 antdv 表单拖拽 ✅
- 支持 back-to-top✅

## 2.6.1

`2017-09-11`

- 完善 Excel 注解
- 完善多文件上传，详见 upload
- 完善多文件上传，详见 upload
- 优化多项目 redis-key 问题 ✅
- 支持数字验证码、字符验证码、数学验证码、阿里云智能无感知验证码、char、AJ 滑动验证码 ✅
- 支持 easy 验证码 ✅ 首页验证码
- 对接阿里短信工具类 ✅
- 增加串口，已有配套 exe 客户端 ✅

## 1.23.0

`2014-09-04`

- 优化 table 组件。
- 🆕 Tooltip 支持 Fragment 子节点展示气泡。[#37045](#)
- 🆕 Input.TextArea 组件 `showCount.formatter` API 添加 `value` 参数。
- 🆕 Table 新增 `expandable.columnTitle` 属性以支持自定义展开列表头。
- 🛠 废弃所有弹窗组件的 `visible` 属性，统一为 `open`。
  - 🛠 Dropdown 的 `visible` 改为 `open`。[#37232](#)
  - 🛠 Modal 组件的 `visible` 改为 `open`。
- 🛠 废弃所有组件的 `dropdownClassName`，统一为 `popupClassName`。
- 🛠 Tabs 支持 `items` 属性，并且废弃原 jsx 语法糖用法。
- 🐞 修复 css 变量与 less 变量不一致的问题。
