# DNS

<details>
<summary>点击查看配置</summary>
<div style="max-height: 25em; overflow-y: auto;">

```yml
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




| 参数名称               | 作用                                                    | 备注                                                                                     |
|------------------------|---------------------------------------------------------|------------------------------------------------------------------------------------------|
| enable                 | 是否启动自定义 DNS 模块                                     | 若为 false，则使用系统 DNS 解析。因需自定义 DNS 解析，选 true                             |
| prefer-h3              | 是否优先使用 DOH 的 HTTP/3                                  | 基于 QUIC 的加密 DNS 协议，查询速度较快，因此开启                                          |
| use-hosts              | 是否查询配置中的 hosts，默认 true                           | 虽无 hosts 配置，但一般还是开启                                                          |
| use-system-hosts       | 是否查询系统 hosts，默认 true                               | 同上                                                                                      |
| respect-rules          | DNS 连接跟随 rules，需配置 proxy-server-nameserver           | 一般不需要，个人选择关闭                                                                 |
| listen                 | DNS 服务监听，仅支持 UDP                                    | 保持默认即可                                                                             |
| ipv6                   | 是否解析 IPv6，若为 false，则回应 AAAA 空解析                 | 因开启此项时出现解析错误，选择关闭                                                        |
| enhanced-mode          | DNS 处理模式                                                | 可选值 normal/fake-ip/redir-host，默认 normal。这里选择 fake-ip                           |
| fake-ip-range          | fake-ip 下的 IP 段设置，TUN 的默认 IPv4 地址                  | 保持默认即可                                                                             |
| fake-ip-filter         | fake-ip 过滤，不会为以下地址下发 fake-ip 映射用于连接        | fake-ip 白名单列表，保持默认即可                                                         |
| default-nameserver     | 默认 DNS，用于解析 nameserver 中的加密 DNS                    | 必须为 IP，可为加密 DNS，设置为国内明文 DNS                                              |
| nameserver-policy      | 指定域名查询的解析服务器，可使用 geosite，优先于 nameserver/fallback 查询 | 保持默认即可                                                                             |
| nameserver             | 默认的域名解析服务器，若不配置 fallback/proxy-server-nameserver，所有域名都由 nameserver 解析 | 设置为国内加密 DNS                                                                       |
| proxy-server-nameserver| 代理节点域名解析服务器，仅用于解析代理节点的域名             | 设置为国内加密 DNS                                                                       |
| fallback               | 后备域名解析服务器，一般使用境外 DNS，确保结果可信           | 解析墙外域名，因此设置为国外加密 DNS                                                     |
| fallback-filter        | 后备域名解析服务器筛选，满足条件的将使用 fallback 结果或只使用 fallback 解析 |                                                                                          |
| geoip                  | 是否启用 fallback filter                                    | 默认开启                                                                                 |
| geoip-code             | 可选值为国家缩写，默认值为 CN                                | geoip-code 配置的国家的 IP 结果将直接采用，其他结果视为污染                               |
| geosite                | geosite 内包含的集合                                        | geosite 列表的内容视为已污染，匹配到 geosite 的域名将只使用 fallback 解析，不用 nameserver |
| ipcidr                 | IP/掩码的书写内容                                           | 这些网段的结果视为污染，nameserver 解析出这些结果时将采用 fallback 解析结果               |
| domain                 | 视为已污染的域名，匹配到这些域名会直接使用 fallback 解析，不用 nameserver | 保持默认即可   