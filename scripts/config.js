/**
 * Clash 配置生成器
 * 用于生成 Clash 配置文件，支持自定义代理规则、分组和策略
 * @author picpi (https://linux.do/t/topic/328932)
 * @license GPL-3.0
 */

/**
 * 代理规则配置项定义
 * @typedef {Object} ProxyRule
 * @property {string} name - 规则名称
 * @property {boolean} [gfw] - 是否被墙，true 则默认使用代理，false 则默认直连
 * @property {string|string[]} [urls] - 规则集链接，可在 https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash 查找
 * @property {string|string[]} [payload] - 自定义规则集，如果设置则 urls 无效
 * @property {string|string[]} [extraProxies] - 额外代理选项，例如广告拦截可使用 REJECT
 * @property {string} [icon] - 规则图标 URL
 * @property {string[]} [rulesName] - 可用的代理组名称列表
 */

/**
 * 代理组基础配置
 * 包含通用的测试参数
 */
const groupBaseOption = {
  interval: 300,          // 测试间隔(秒)
  timeout: 1000,         // 超时时间(毫秒)
  url: "https://www.gstatic.com/generate_204", // 测试连接
  "max-failed-times": 3, // 最大失败次数
  hidden: false,        // 是否在界面隐藏 (基础选项中设置为false，具体分组可覆盖)
  lazy: true            // 默认启用懒加载以提高启动速度
};

/**
* 代理规则配置列表
* @type {ProxyRule[]}
*/
const proxyGrepConfig = [
  {
    name: "广告拦截",
    gfw: false,
    extraProxies: "REJECT",
    urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/AdvertisingLite/AdvertisingLite_Classical.yaml",
    icon: "https://fastly.jsdelivr.net/gh/yz0812/mypic@master/Clash_Verge_Rev/10009.svg",
  },
  {
    name: "自定义出境",
    gfw: true,
    payload: [
      // "DOMAIN-SUFFIX,linux.do",
      "DOMAIN-SUFFIX,cdn.ldstatic.com"
    ],
    icon: "https://fastly.jsdelivr.net/gh/yz0812/mypic@master/Clash_Verge_Rev/10041.svg"
  },
  {
    name: "直连",
    gfw: false,
    "include-all": false,
    urls: "https://cdn.jsdelivr.net/gh/Lbiebest/clash-config@main/rules/CustomDirect.yaml",
    icon: "https://fastly.jsdelivr.net/gh/yz0812/mypic@master/Clash_Verge_Rev/10041.svg",
  },
  {
    name: "GitHub",
    gfw: true,
    rulesName: ["HK", "US"],
    urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/GitHub/GitHub.yaml",
    icon: "https://fastly.jsdelivr.net/gh/yz0812/mypic@master/Clash_Verge_Rev/10001.svg",
  },
  {
    name: "YouTube",
    gfw: true,
    rulesName: ["HK", "US"],
    urls: [
      "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/YouTube/YouTube.yaml",
      "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/YouTubeMusic/YouTubeMusic.yaml",
    ],
    icon: "https://fastly.jsdelivr.net/gh/yz0812/mypic@master/Clash_Verge_Rev/10021.svg",
  },
  {
    name: "Google",
    gfw: true,
    rulesName: ["HK", "US"],
    urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Google/Google.yaml",
    icon: "https://fastly.jsdelivr.net/gh/yz0812/mypic@master/Clash_Verge_Rev/10020.svg",
  },
  {
    name: "openAi",
    gfw: true,
    rulesName: ["US", "HK"],
    urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/OpenAI/OpenAI.yaml",
    icon: "https://fastly.jsdelivr.net/gh/yz0812/mypic@master/Clash_Verge_Rev/10028.svg",
  },
  {
    name: "Netflix",
    gfw: true,
    urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Netflix/Netflix.yaml",
    icon: "https://fastly.jsdelivr.net/gh/yz0812/mypic@master/Clash_Verge_Rev/10026.svg",
  },
  {
    name: "Cursor",
    gfw: true,
    rulesName: ["HK", "US"],
    payload: [
      "DOMAIN-SUFFIX,cursor.sh",
      "DOMAIN-SUFFIX,cursor.com"
    ],
    icon: "https://fastly.jsdelivr.net/gh/yz0812/mypic@master/Clash_Verge_Rev/cursor.svg",
  },
  {
    name: "Grok",
    gfw: true,
    rulesName: ["US", "HK"],
    payload: [
      "DOMAIN-SUFFIX,x.ai",
      "DOMAIN-SUFFIX,grok.x.ai",
      "DOMAIN-SUFFIX,grok-api.x.ai",
      "DOMAIN-KEYWORD,grok"
    ],
    icon: "https://fastly.jsdelivr.net/gh/yz0812/mypic@master/Clash_Verge_Rev/grok.svg",
  },
  {
    name: "Twitter",
    gfw: true,
    rulesName: ["US", "HK"],
    urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Twitter/Twitter.yaml",
    icon: "https://fastly.jsdelivr.net/gh/yz0812/mypic@master/Clash_Verge_Rev/10023.svg",
  },
  {
    name: "TikTok",
    gfw: true,
    urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/TikTok/TikTok.yaml",
    icon: "https://fastly.jsdelivr.net/gh/yz0812/mypic@master/Clash_Verge_Rev/10027.svg",
  },
  {
    name: "Facebook",
    gfw: true,
    urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Facebook/Facebook.yaml",
    icon: "https://fastly.jsdelivr.net/gh/yz0812/mypic@master/Clash_Verge_Rev/10025.svg",
  },
  {
    name: "OneDrive",
    gfw: false,
    urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/OneDrive/OneDrive.yaml",
    icon: "https://fastly.jsdelivr.net/gh/yz0812/mypic@master/Clash_Verge_Rev/10040.svg",
  },
  {
    name: "Microsoft",
    gfw: false,
    urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Microsoft/Microsoft.yaml",
    icon: "https://fastly.jsdelivr.net/gh/yz0812/mypic@master/Clash_Verge_Rev/10014.svg",
  },
  {
    name: "Steam",
    gfw: false,
    urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@release/rule/Clash/Steam/Steam.yaml",
    icon: "https://fastly.jsdelivr.net/gh/yz0812/mypic@master/Clash_Verge_Rev/10036.svg",
  },
  {
    name: "Epic",
    gfw: false,
    urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@release/rule/Clash/Epic/Epic.yaml",
    icon: "https://fastly.jsdelivr.net/gh/yz0812/mypic@master/Clash_Verge_Rev/10037.svg",
  },
  {
    name: "Cloudflare",
    gfw: true,
    rulesName: ["HK", "US"],
    urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Cloudflare/Cloudflare.yaml",
    icon: "https://fastly.jsdelivr.net/gh/yz0812/mypic@master/Clash_Verge_Rev/10011.svg",
  },
  {
    name: "Gemini",
    gfw: true,
    rulesName: ["US", "HK"],
    urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Gemini/Gemini.yaml",
    icon: "https://fastly.jsdelivr.net/gh/yz0812/mypic@master/Clash_Verge_Rev/gemini.png",
  },
  {
    name: "Claude",
    gfw: true,
    rulesName: ["US", "HK"],
    urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Claude/Claude.yaml",
    icon: "https://fastly.jsdelivr.net/gh/yz0812/mypic@master/Clash_Verge_Rev/claude.png",
  },
];

/**
* 区域代理组详细配置数据
*/
const regionalGroupData = [
  { name: "HK", filter: "香港|HK|🇭🇰", tolerance: 50, interval: 180, hidden: true, icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Hong_Kong.png" },
  { name: "TW", filter: "台湾|TW|🇼", tolerance: 80, interval: 180, hidden: true, icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Taiwan.png" },
  { name: "JP", filter: "日本|JP|🇯🇵", tolerance: 70, interval: 180, hidden: true, icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Japan.png" },
  { name: "KR", filter: "韩国|KR|🇰🇷", tolerance: 80, interval: 180, hidden: true, icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Korea.png" },
  { name: "US", filter: "美国|US|🇺🇸", tolerance: 150, interval: 180, hidden: true, icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/United_States.png" },
  { name: "DE", filter: "德国|DE|🇩🇪", tolerance: 180, interval: 180, hidden: true, icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Germany.png" },
  { name: "SG", filter: "新加坡|SG|🇸🇬", tolerance: 100, interval: 180, hidden: true, icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Singapore.png" },
  { name: "FR", filter: "法国|FR|🇫🇷", tolerance: 180, interval: 180, hidden: true, icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/France.png" },
  { name: "UK", filter: "英国|GB|🇬🇧", tolerance: 180, interval: 180, hidden: true, icon: "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/United_Kingdom.png", "exclude-filter": "Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置" }
];

/**
* 根据区域数据生成代理组配置
*/
const proxyGroupConfigOther = regionalGroupData.map(region => ({
  ...groupBaseOption, // 基础配置 (包含 lazy: true)
  type: "url-test",   // 类型为 url-test
  "include-all": true, // 包含所有代理节点
  ...region           // 覆盖区域特定配置
}));

/**
* 主函数：生成 Clash 配置
* @param {Object} config - 包含代理配置的对象
* @returns {Object} 完整的 Clash 配置对象
*/
function main(config) {
  const proxies = config.proxies;

  /**
   * Simple hash function for generating stable rule provider names from URLs.
   * @param {string} str - The URL string.
   * @returns {string} A hashed identifier prefixed with "rule-".
   */
  function simpleHash(str) {
    let hash = 5381;
    for (let i = 0; i < str.length; i++) {
      hash = (hash * 33) ^ str.charCodeAt(i);
    }
    // Return a positive integer hex string, prefixed
    return 'rule-' + (hash >>> 0).toString(16);
  }

  /**
   * 创建规则提供者配置
   * @param {string} url - 规则集URL
   * @returns {Object} 规则提供者配置对象
   */
  function createRuleProviderUrl(url) {
    return {
      type: "http",
      interval: 86400,
      behavior: "classical",
      format: "yaml",
      url: url,
    };
  }

  /**
   * 创建自定义规则
   * @param {string|string[]} payload - 规则内容
   * @param {string} name - 规则名称
   * @returns {string[]} 处理后的规则数组
   */
  function createPayloadRules(payload, name) {
    const rules = [];
    const payloads = Array.isArray(payload) ? payload : [payload];

    for (const item of payloads) {
      const p = item.split(",");
      let pushIndex = p.length;

      if (p[p.length - 1].toLocaleLowerCase() === "no-resolve") {
        pushIndex--;
      }

      p.splice(pushIndex, 0, name.replaceAll(",", "-"));
      rules.push(p.join(","));
    }

    return rules;
  }

  /**
   * 创建 Select 类型代理组
   * @param {string} name - 组名称
   * @param {boolean} gfw - 是否为 GFW 相关规则 (影响默认代理顺序)
   * @param {string|string[]} [extraProxies] - 额外的代理选项 (如 REJECT)
   * @param {string} [icon] - 图标 URL
   * @param {string|string[]} [rulesName] - 指定的可选代理区域组名称
   * @param {boolean} [includeAll=true] - 是否包含所有代理节点 (默认为 true)
   * @returns {Object} Select 代理组配置
   */
  function createSelectGroup(name, gfw, extraProxies, icon, rulesName = null, includeAll = true) {
    const baseProxies = gfw ? ["自动选择", "DIRECT"] : ["DIRECT", "自动选择"];
    const additionalProxies = rulesName ? (Array.isArray(rulesName) ? rulesName : [rulesName]) : [];
    const extra = extraProxies ? (Array.isArray(extraProxies) ? extraProxies : [extraProxies]) : [];

    return {
      name,
      type: "select",
      proxies: [...extra, ...additionalProxies, ...baseProxies],
      "include-all": includeAll, // 使用传入的 includeAll 参数
      icon,
    };
  }

  // 初始化配置容器
  const proxyGroups = [];
  const proxyGfwGroups = [];
  const ruleProviders = {};
  const rules = [];

  // 处理每个代理规则配置
  for (const { name, gfw, urls, payload, extraProxies, icon, rulesName, 'include-all': includeAllConfig } of proxyGrepConfig) {
    // 创建代理组，传递 includeAllConfig (如果未定义则默认为 true)
    const group = createSelectGroup(name, gfw, extraProxies, icon, rulesName, includeAllConfig !== undefined ? includeAllConfig : true);
    if (gfw) {
      proxyGfwGroups.push(group);
    } else {
      proxyGroups.push(group);
    }

    // 处理规则
    if (payload) {
      rules.push(...createPayloadRules(payload, name));
    } else if (urls) {
      const urlList = Array.isArray(urls) ? urls : [urls];
      urlList.forEach((url, index) => {
        // 使用 URL 哈希生成稳定的规则提供者名称
        const iName = simpleHash(url);
        ruleProviders[iName] = createRuleProviderUrl(url);
        rules.push(`RULE-SET,${iName},${name}`);
      });
    }
  }

  // 获取所有区域代理组名称
  const proxyNode = proxyGroupConfigOther.map(group => group.name);

  // 返回完整配置
  return {
    mode: "rule",
    "find-process-mode": "strict",
    "global-client-fingerprint": "chrome",
    "unified-delay": true,    // 优化延迟计算方式
    "tcp-concurrent": true,   // 启用TCP并发

    // GeoX 数据配置
    "geox-url": {
      geoip: "https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@latest/geoip-lite.dat",
      geosite: "https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@latest/geosite.dat",
    },

    // DNS 配置
    dns: {
      enable: true,
      ipv6: true,
      "enhanced-mode": "fake-ip",
      "fake-ip-filter": ["*", "+.lan", "+.local"],
      nameserver: [
        "system",
        "114.114.114.114",
        "223.5.5.5",
        "https://dns.alidns.com/dns-query",  // 阿里云
        "https://doh.pub/dns-query",         // 腾讯
      ],
      fallback: [
        "https://1.0.0.1/dns-query",         // Cloudflare
        "https://sky.rethinkdns.com",        // RethinkDNS
        "https://dns.alidns.com/dns-query",  // 阿里云
        "https://doh.pub/dns-query",         // 腾讯
      ],
      "fallback-filter": {
        geoip: true,
        "geoip-code": "CN",
        geosite: ["gfw"],
        domain: ["+.google.com", "+.facebook.com", "+.youtube.com"],
      },
    },
    // 代理配置
    proxies,
    "proxy-groups": [
      // 自动选择组
      {
        name: "自动选择",
        type: "select",
        proxies: ["延迟选优", "负载均衡", "DIRECT", "手动选择", ...proxyNode],
        tolerance: 50,
        interval: 120,
        icon: "https://fastly.jsdelivr.net/gh/yz0812/mypic@master/Clash_Verge_Rev/10002.svg",
      },
      // 国内网站组
      {
        name: "国内网站",
        type: "select",
        proxies: ["DIRECT", "自动选择"],
        "include-all": false,
        url: "https://www.baidu.com/favicon.ico",
        icon: "https://fastly.jsdelivr.net/gh/yz0812/mypic@master/Clash_Verge_Rev/10039.svg",
      },
      // 自定义代理组
      ...proxyGroups,
      // 国外网站组
      {
        name: "国外网站",
        type: "select",
        url: "https://www.bing.com/favicon.ico",
        proxies: ["自动选择", "DIRECT", ...proxyNode],
        "include-all": true,
        icon: "https://fastly.jsdelivr.net/gh/yz0812/mypic@master/Clash_Verge_Rev/10030.svg",
      },
      // GFW代理组
      ...proxyGfwGroups,
      // 被墙网站组
      {
        name: "被墙网站",
        type: "select",
        proxies: ["自动选择", ...proxyNode, "DIRECT"],
        "include-all": true,
        icon: "https://fastly.jsdelivr.net/gh/yz0812/mypic@master/Clash_Verge_Rev/10008.svg",
      },
      // 延迟选优组
      {
        name: "延迟选优",
        type: "url-test",
        ...groupBaseOption, // 使用基础配置
        tolerance: 20,
        "include-all": true,
        icon: "https://fastly.jsdelivr.net/gh/yz0812/mypic@master/Clash_Verge_Rev/10003.svg",
      },
      // 负载均衡组
      {
        name: "负载均衡",
        type: "load-balance",
        "include-all": true,
        hidden: true,
        strategy: "sticky-sessions",
        icon: "https://fastly.jsdelivr.net/gh/yz0812/mypic@master/Clash_Verge_Rev/10005.svg",
      },
      // 手动选择组
      {
        name: "手动选择",
        type: "select",
        "include-all": true,
        icon: "https://fastly.jsdelivr.net/gh/yz0812/mypic@master/Clash_Verge_Rev/shoudong.svg",
      },
      // 区域代理组
      ...proxyGroupConfigOther,
    ],

    // 规则配置
    "rule-providers": ruleProviders,
    rules: [
      ...rules,
      "GEOSITE,gfw,被墙网站",
      "GEOIP,CN,国内网站",
      "MATCH,国外网站"
    ],
  };
}