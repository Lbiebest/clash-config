# Clash-Config - Clash Verge Rev 自定义配置

[![GitHub stars](https://img.shields.io/github/stars/Lbiebest/clash-config?style=flat-square)](https://github.com/Lbiebest/clash-config/stargazers)
[![License](https://img.shields.io/github/license/Lbiebest/clash-config?style=flat-square)](https://github.com/Lbiebest/clash-config/LICENSE)

- [Clash-Config - Clash Verge Rev 自定义配置](#clash-config---clash-verge-rev-自定义配置)
  - [功能特点](#功能特点)
  - [目录结构](#目录结构)
  - [使用方法](#使用方法)
    - [安装](#安装)
    - [配置说明](#配置说明)
  - [自定义配置](#自定义配置)
    - [修改节点分组规则](#修改节点分组规则)
    - [添加自定义直连规则](#添加自定义直连规则)
    - [添加进程直连规则](#添加进程直连规则)
  - [常见问题](#常见问题)
    - [配置校验失败](#配置校验失败)
    - [无法连接特定网站](#无法连接特定网站)
  - [更新日志](#更新日志)
  - [贡献指南](#贡献指南)
  - [许可证](#许可证)

<!-- /code_chunk_output -->

一个为 Clash Verge Rev 定制的高效配置方案，提供智能分流、按需代理和自动分组功能。本项目针对中国大陆网络环境优化，同时兼顾海外服务访问体验。

## 功能特点

- 🌐 **智能分组**：自动根据节点名称识别并分组（香港、台湾、日本、美国、新加坡、韩国、英国等）
- 🚀 **自动测速**：地区分组内节点自动测速选择最佳线路
- 🔍 **智能分流**：精细化规则分流，国内网站直连，国外服务按需代理
- 📱 **进程分流**：支持基于进程名称的直连规则
- 🛡️ **广告拦截**：集成广告过滤规则
- 📦 **规则集更新**：自动更新各类规则集，保持分流规则最新
- 🎮 **游戏平台优化**：针对Steam、Epic、Origin等游戏平台优化
- 📺 **流媒体优化**：针对YouTube、Netflix、哔哩哔哩等流媒体平台优化

## 目录结构

```
clash-config/
├── local-config/       # 本地配置文件
│   └── custom-rule.js  # 主要配置脚本
├── rules/              # 自定义规则
│   ├── CustomDirect.list   # 自定义直连规则
│   └── ProcessRules.list   # 进程分流规则
└── README.md           # 项目说明
```

## 使用方法

### 安装

1. 克隆本仓库到本地：

   ```bash
   git clone https://github.com/Lbiebest/clash-config.git
   ```

2. 在 Clash Verge Rev 中导入配置：
   - 打开 Clash Verge Rev
   - 进入"配置"选项卡
   - 点击"导入"按钮
   - 选择本地JavaScript配置文件（`local-config/custom-rule.js`）

### 配置说明

**custom-rule.js** 是核心配置文件，通过JavaScript动态处理配置：

- **节点过滤**：通过正则表达式过滤特定节点
- **地区分组**：自动将节点按地区分组
- **代理策略**：为不同应用和网站设置合适的代理策略
- **规则处理**：处理规则集并建立优先级

## 自定义配置

### 修改节点分组规则

编辑 `local-config/custom-rule.js` 文件中的正则表达式：

```javascript
// 按地区分组的正则表达式 - 根据配置修改正则匹配
const hkRegex = /港|HK|hk|Hong Kong|HongKong|hongkong/i;
const twRegex = /台|新北|彰化|TW|Taiwan/i;
// 其他地区正则...
```

### 添加自定义直连规则

编辑 `rules/CustomDirect.list` 文件，添加需要直连的域名或IP：

```
# 示例：添加自定义直连域名
DOMAIN-SUFFIX,example.com
DOMAIN-KEYWORD,example
```

### 添加进程直连规则

编辑 `rules/ProcessRules.list` 文件，添加需要直连的进程名称：

```
# 示例：添加需要直连的进程
PROCESS-NAME,YourApp.exe
```

## 常见问题

### 配置校验失败

如果遇到"配置校验失败"错误，通常是因为：

1. 代理组引用了不存在的节点组，检查节点名称是否正确
2. 规则引用了不存在的代理组，检查代理组名称是否正确
3. 配置文件语法错误，检查JavaScript语法

解决方案：使用最新版本的 `custom-rule.js` 文件，其中包含了智能适配功能，可以避免引用不存在的节点组。

### 无法连接特定网站

1. 检查该网站对应的规则是否正确
2. 尝试将该网站添加到 `CustomDirect.list` 或相应规则集
3. 调整规则优先级

## 更新日志

- **2024.03.30**：优化代理组配置，添加英国节点分组，修复配置校验问题
- **2024.03.28**：添加进程分流规则，优化直连规则
- **2024.03.27**：初始版本发布

## 贡献指南

欢迎提交Pull Request或Issues来完善本项目。贡献时请注意：

1. 遵循现有的代码风格和注释规范
2. 提供详细的改动说明
3. 测试配置确保可用

## 许可证

本项目使用 [MIT 许可证](LICENSE)。
