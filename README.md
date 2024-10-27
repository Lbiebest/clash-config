# clash-config

- [clash-config](#clash-config)
  - [clash 配置文件解析](#clash-配置文件解析)
  - [远程配置文件解析](#远程配置文件解析)
  - [实战](#实战)

---

<a color="green">https://linux.do/t/topic/163682</a>

## clash 配置文件解析

- [配置文件]

- [DNS]

- [策略组]

- [分流规则]

## 远程配置文件解析

- [远程配置文件]

## 实战

- 将文件上传至`Github`

1. clash 配置文件

    <details>
    <summary>点击查看配置</summary>
    <div style="max-height: 25em; overflow-y: auto;">

    ```yml
    mixed-port: 7890
    allow-lan: true
    bind-address: "*"
    ipv6: false
    mode: rule
    log-level: info
    external-controller: 127.0.0.1:9090
    dns:
      enable: true
      prefer-h3: true
      use-hosts: true
      use-system-hosts: true
      respect-rules: false
      listen: 0.0.0.0:1053
      ipv6: false
      enhanced-mode: fake-ip
      fake-ip-range: 198.18.0.1/16
      fake-ip-filter:
        - '*.lan'
        - "+.local"
        - localhost.ptlogin2.qq.com
      default-nameserver:
        - tls://1.12.12.12
        - 223.5.5.5
        - 119.29.29.29
      nameserver-policy:
        'www.baidu.com': '114.114.114.114'
        '+.internal.crop.com': '10.0.0.1'
        'geosite:cn,private':
        - https://223.5.5.5/dns-query
        - https://223.6.6.6/dns-query
      nameserver:
        - https://dns.alidns.com/dns-query
        - https://doh.pub/dns-query
      proxy-server-nameserver:
        - https://dns.alidns.com/dns-query
        - https://doh.pub/dns-query
      fallback:
        - tls://1dot1dot1dot1.cloudflare-dns.com
        - tcp://1.1.1.1
        - https://1.0.0.1/dns-query
        - https://1.1.1.1/dns-query
      fallback-filter:
        geoip: true
        geoip-code: CN
        geosite:
          - gfw
        ipcidr:
          - 240.0.0.0/4
          - 0.0.0.0/32
          - 127.0.0.1/32
        domain:
          - '+.google.com'
          - '+.facebook.com'
          - '+.youtube.com'  
    ```

    </div>
    </details>

2. 远程配置

    <details>
    <summary>点击查看配置</summary>
    <div style="max-height: 25em; overflow-y: auto;">

    ```yml
    [custom]
    ;不要随意改变关键字，否则会导致出错
    ;acl4SSR规则

    ;去广告：支持
    ;自动测速：支持
    ;微软分流：不支持
    ;苹果分流：不支持
    ;增强中国IP段：不支持
    ;增强国外GFW：不支持

    ; 需要使用绝对路径
    ruleset=🎯 全球直连,rules/ACL4SSR/Clash/LocalAreaNetwork.list
    ruleset=🛑 全球拦截,rules/ACL4SSR/Clash/BanAD.list
    ruleset=🛑 全球拦截,rules/ACL4SSR/Clash/BanProgramAD.list
    ruleset=🎯 全球直连,rules/ACL4SSR/Clash/GoogleCN.list
    ruleset=🎯 全球直连,rules/ACL4SSR/Clash/Ruleset/SteamCN.list
    ruleset=🚀 节点选择,rules/ACL4SSR/Clash/Telegram.list
    ruleset=🚀 节点选择,rules/ACL4SSR/Clash/ProxyMedia.list
    ruleset=🚀 节点选择,rules/ACL4SSR/Clash/ProxyLite.list
    ruleset=🎯 全球直连,rules/ACL4SSR/Clash/ChinaDomain.list
    ruleset=🎯 全球直连,rules/ACL4SSR/Clash/ChinaCompanyIp.list
    ;ruleset=🎯 全球直连,[]GEOIP,LAN
    ruleset=🎯 全球直连,[]GEOIP,CN
    ruleset=🐟 漏网之鱼,[]FINAL

    custom_proxy_group=🚀 节点选择`select`[]♻️ 自动选择`[]DIRECT`.*
    custom_proxy_group=♻️ 自动选择`url-test`.*`http://www.gstatic.com/generate_204`300,,50
    custom_proxy_group=🎯 全球直连`select`[]DIRECT`[]🚀 节点选择`[]♻️ 自动选择
    custom_proxy_group=🛑 全球拦截`select`[]REJECT`[]DIRECT
    custom_proxy_group=🐟 漏网之鱼`select`[]🚀 节点选择`[]🎯 全球直连`[]♻️ 自动选择`.*

    enable_rule_generator=true
    overwrite_original_rules=true

    clash_rule_base=你的base.yml的github地址
    ```

    </div>
    </details>


- 进行订阅转换

![alt text](./docs/image/image1.png)

- 检查转换后的订阅

![alt text](./docs/image/image2.png)

如果无法导入，需要确认SSL证书、或者允许无效证书

![alt text](./docs/image/image3.png)


[配置文件]: ./docs/配置文件.md
[DNS]: ./docs/DNS.md
[策略组]: ./docs/策略组.md
[分流规则]: ./docs/分流规则.md
[远程配置文件]: ./docs/远程配置文件.md
