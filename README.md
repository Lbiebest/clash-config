# Clash-Config - Clash Verge Rev 自定义配置

[![GitHub stars](https://img.shields.io/github/stars/Lbiebest/clash-config?style=flat-square)](https://github.com/Lbiebest/clash-config/stargazers)
[![License](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.html)

- [Clash-Config - Clash Verge Rev 自定义配置](#clash-config---clash-verge-rev-自定义配置)
  - [功能特点](#功能特点)
  - [使用方法](#使用方法)
  - [目录结构](#目录结构)
  - [核心脚本说明](#核心脚本说明)
  - [自定义配置](#自定义配置)
    - [修改节点分组规则](#修改节点分组规则)
    - [添加自定义直连规则](#添加自定义直连规则)
    - [添加进程直连规则](#添加进程直连规则)
  - [常见问题](#常见问题)
    - [配置校验失败](#配置校验失败)
    - [无法连接特定网站](#无法连接特定网站)
  - [贡献指南](#贡献指南)
  - [许可证](#许可证)


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
├── config/             # 配置文件
│   ├── custom-config.yaml  # 自定义配置
│   └── default-config.yaml # 默认配置
├── docs/               # 文档
├── rules/              # 自定义规则
│   ├── CustomDirect.yaml   # 自定义直连规则
│   └── ProcessRules.list   # 进程分流规则
├── scripts/            # 脚本文件
│   └── custom-rule.js  # 主要配置脚本
└── README.md           # 项目说明
```


## 使用方法

本配置方案主要包含两个核心文件：

- **自定义配置**：`config/custom-config.yaml`
- **自定义脚本**：`scripts/custom-rule.js`

### 导入方式

您可以选择以下任意一种方式应用配置：

1. **手动复制**：
   - 将 `config/custom-config.yaml` 的内容复制到软件的配置编辑区。
   - 将 `scripts/custom-rule.js` 的内容复制到软件的脚本编辑区。

2. **URL 导入**：
   - 直接使用文件的 GitHub Raw 链接在软件中进行导入（需确保可以访问 GitHub）。

## 核心脚本说明

![picpi avatar](https://linux.do/user_avatar/linux.do/picpi/144/295042_2.png)
本项目中的 `scripts/custom-rule.js` 文件是 Clash 配置的核心生成脚本，来源于[picpi](https://linux.do/t/topic/328932) 在 Linux.do 社区分享的 Clash 配置生成器。在此对原作者表示衷心感谢！

## 自定义配置

### 修改节点分组规则

编辑 `scripts/custom-rule.js` 文件中的正则表达式：

```javascript
// 按地区分组的正则表达式 - 根据配置修改正则匹配
const hkRegex = /港|HK|hk|Hong Kong|HongKong|hongkong/i;
const twRegex = /台|新北|彰化|TW|Taiwan/i;
// 其他地区正则...
```

### 添加自定义直连规则

编辑 `rules/CustomDirect.yaml` 文件，添加需要直连的域名或IP：

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
2. 尝试将该网站添加到 `CustomDirect.yaml` 或相应规则集
3. 调整规则优先级

## 贡献指南

欢迎提交Pull Request或Issues来完善本项目。贡献时请注意：

1. 遵循现有的代码风格和注释规范
2. 提供详细的改动说明
3. 测试配置确保可用

## 许可证

本项目使用 [GPL-3.0 许可证](LICENSE)。
