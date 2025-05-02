// 需要排除的节点名称正则
const excludeRegexStr = "^(?!.*(下载|测试|充值|余额|分割线|群|官网|失联|邮件)).*";
const excludeRegex = new RegExp(excludeRegexStr, "u");

// 按地区分组的正则表达式 - 根据配置修改正则匹配
const hkRegex = /港|HK|hk|Hong Kong|HongKong|hongkong/i;
const twRegex = /台|新北|彰化|TW|Taiwan/i;
const jpRegex = /日本|川日|东京|大阪|泉日|埼玉|沪日|深日|JP|Japan|京/i;
const usRegex = /美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|US|United States/i;
const sgRegex = /新加坡|坡|狮城|SG|Singapore/i;
const krRegex = /KR|Korea|KOR|首尔|韩|韓/i;
const ukRegex = /英格兰|英国|伦敦|UK|United Kingdom/i;
const nfRegex = /NF|奈飞|解锁|Netflix|NETFLIX|Media/i;
const neteaseMusicRegex = /网易|音乐|解锁|Music|NetEase/i;

// 规则集配置
const ruleProviders = {
    "LocalAreaNetwork": {
        "type": "http",
        "format": "yaml",
        "interval": 86400,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/LocalAreaNetwork.list",
        "path": "./ruleset/LocalAreaNetwork.yaml"
    },
    "UnBan": {
        "type": "http",
        "format": "yaml",
        "interval": 86400,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/UnBan.list",
        "path": "./ruleset/UnBan.yaml"
    },
    "BanAD": {
        "type": "http",
        "format": "yaml",
        "interval": 86400,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/BanAD.list",
        "path": "./ruleset/BanAD.yaml"
    },
    "BanProgramAD": {
        "type": "http",
        "format": "yaml",
        "interval": 86400,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/BanProgramAD.list",
        "path": "./ruleset/BanProgramAD.yaml"
    },
    "GoogleFCM": {
        "type": "http",
        "format": "yaml",
        "interval": 86400,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/GoogleFCM.list",
        "path": "./ruleset/GoogleFCM.yaml"
    },
    "GoogleCN": {
        "type": "http",
        "format": "yaml",
        "interval": 86400,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/GoogleCN.list",
        "path": "./ruleset/GoogleCN.yaml"
    },
    "SteamCN": {
        "type": "http",
        "format": "yaml",
        "interval": 86400,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/SteamCN.list",
        "path": "./ruleset/SteamCN.yaml"
    },
    "Bing": {
        "type": "http",
        "format": "yaml",
        "interval": 86400,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Bing.list",
        "path": "./ruleset/Bing.yaml"
    },
    "OneDrive": {
        "type": "http",
        "format": "yaml",
        "interval": 86400,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/OneDrive.list",
        "path": "./ruleset/OneDrive.yaml"
    },
    "Microsoft": {
        "type": "http",
        "format": "yaml",
        "interval": 86400,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Microsoft.list",
        "path": "./ruleset/Microsoft.yaml"
    },
    "Apple": {
        "type": "http",
        "format": "yaml",
        "interval": 86400,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Apple.list",
        "path": "./ruleset/Apple.yaml"
    },
    "Telegram": {
        "type": "http",
        "format": "yaml",
        "interval": 86400,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Telegram.list",
        "path": "./ruleset/Telegram.yaml"
    },
    "OpenAi": {
        "type": "http",
        "format": "yaml",
        "interval": 86400,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/OpenAi.list",
        "path": "./ruleset/OpenAi.yaml"
    },
    "NetEaseMusic": {
        "type": "http",
        "format": "yaml",
        "interval": 86400,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/NetEaseMusic.list",
        "path": "./ruleset/NetEaseMusic.yaml"
    },
    "Epic": {
        "type": "http",
        "format": "yaml",
        "interval": 86400,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Epic.list",
        "path": "./ruleset/Epic.yaml"
    },
    "Origin": {
        "type": "http",
        "format": "yaml",
        "interval": 86400,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Origin.list",
        "path": "./ruleset/Origin.yaml"
    },
    "Sony": {
        "type": "http",
        "format": "yaml",
        "interval": 86400,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Sony.list",
        "path": "./ruleset/Sony.yaml"
    },
    "Steam": {
        "type": "http",
        "format": "yaml",
        "interval": 86400,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Steam.list",
        "path": "./ruleset/Steam.yaml"
    },
    "Nintendo": {
        "type": "http",
        "format": "yaml",
        "interval": 86400,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Nintendo.list",
        "path": "./ruleset/Nintendo.yaml"
    },
    "YouTube": {
        "type": "http",
        "format": "yaml",
        "interval": 86400,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/YouTube.list",
        "path": "./ruleset/YouTube.yaml"
    },
    "Netflix": {
        "type": "http",
        "format": "yaml",
        "interval": 86400,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Netflix.list",
        "path": "./ruleset/Netflix.yaml"
    },
    "Bahamut": {
        "type": "http",
        "format": "yaml",
        "interval": 86400,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Bahamut.list",
        "path": "./ruleset/Bahamut.yaml"
    },
    "BilibiliHMT": {
        "type": "http",
        "format": "yaml",
        "interval": 86400,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/BilibiliHMT.list",
        "path": "./ruleset/BilibiliHMT.yaml"
    },
    "Bilibili": {
        "type": "http",
        "format": "yaml",
        "interval": 86400,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Bilibili.list",
        "path": "./ruleset/Bilibili.yaml"
    },
    "ChinaMedia": {
        "type": "http",
        "format": "yaml",
        "interval": 86400,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/ChinaMedia.list",
        "path": "./ruleset/ChinaMedia.yaml"
    },
    "ProxyMedia": {
        "type": "http",
        "format": "yaml",
        "interval": 86400,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/ProxyMedia.list",
        "path": "./ruleset/ProxyMedia.yaml"
    },
    "ProxyGFWlist": {
        "type": "http",
        "format": "yaml",
        "interval": 86400,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/ProxyGFWlist.list",
        "path": "./ruleset/ProxyGFWlist.yaml"
    },
    "ChinaDomain": {
        "type": "http",
        "format": "yaml",
        "interval": 86400,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/ChinaDomain.list",
        "path": "./ruleset/ChinaDomain.yaml"
    },
    "ChinaCompanyIp": {
        "type": "http",
        "format": "yaml",
        "interval": 86400,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/ChinaCompanyIp.list",
        "path": "./ruleset/ChinaCompanyIp.yaml"
    },
    "Download": {
        "type": "http",
        "format": "yaml",
        "interval": 86400,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Download.list",
        "path": "./ruleset/Download.yaml"
    },
    "CustomDirect": {
        "type": "http",
        "format": "yaml",
        "interval": 86400,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/Lbiebest/clash-config/refs/heads/master/rules/CustomDirect.list",
        "path": "./ruleset/CustomDirect.yaml"
    },
    "GuoNeiWangZhan": {
        "type": "http",
        "format": "yaml",
        "interval": 86400,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/Meilieage/webcdn/main/rule/list/GuoNeiWangZhan.list",
        "path": "./ruleset/GuoNeiWangZhan.yaml"
    },
    "ChinaIPs": {
        "type": "http",
        "format": "yaml",
        "interval": 86400,
        "behavior": "ipcidr",
        "url": "https://raw.githubusercontent.com/DivineEngine/Profiles/master/Clash/RuleSet/Extra/ChinaIP.yaml",
        "path": "./ruleset/ChinaIPs.yaml"
    },
    "ProcessRules": {
        "type": "http",
        "format": "text",
        "interval": 86400,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/Lbiebest/clash-config/refs/heads/master/rules/ProcessRules.list",
        "path": "./ruleset/ProcessRules.yaml"
    },
};

// 获取符合正则表达式的代理组
function getProxiesByRegex(proxies, regex, concatProxies = []) {
    return [
        ...proxies
            .filter((e) => regex.test(e.name) && excludeRegex.test(e.name))
            .map((e) => e.name),
        ...concatProxies,
    ];
}

function main(config) {
    const allProxies = config["proxies"].map((e) => e.name);

    // 按地区分组节点
    const hkProxies = getProxiesByRegex(config["proxies"], hkRegex);
    const twProxies = getProxiesByRegex(config["proxies"], twRegex);
    const jpProxies = getProxiesByRegex(config["proxies"], jpRegex);
    const usProxies = getProxiesByRegex(config["proxies"], usRegex);
    const sgProxies = getProxiesByRegex(config["proxies"], sgRegex);
    const krProxies = getProxiesByRegex(config["proxies"], krRegex);
    const ukProxies = getProxiesByRegex(config["proxies"], ukRegex);
    const nfProxies = getProxiesByRegex(config["proxies"], nfRegex);
    const neteaseMusicProxies = getProxiesByRegex(config["proxies"], neteaseMusicRegex);

    // 创建地区分组
    const regionGroups = [];

    // 香港节点组
    if (hkProxies.length > 0) {
        regionGroups.push({
            name: "🇭🇰 香港节点",
            type: "url-test",
            proxies: hkProxies,
            url: "http://www.gstatic.com/generate_204",
            interval: 300,
            tolerance: 50
        });
    }

    // 台湾节点组
    if (twProxies.length > 0) {
        regionGroups.push({
            name: "🇨🇳 台湾节点",
            type: "url-test",
            proxies: twProxies,
            url: "http://www.gstatic.com/generate_204",
            interval: 300,
            tolerance: 50
        });
    }

    // 日本节点组
    if (jpProxies.length > 0) {
        regionGroups.push({
            name: "🇯🇵 日本节点",
            type: "url-test",
            proxies: jpProxies,
            url: "http://www.gstatic.com/generate_204",
            interval: 300,
            tolerance: 50
        });
    }

    // 美国节点组
    if (usProxies.length > 0) {
        regionGroups.push({
            name: "🇺🇲 美国节点",
            type: "url-test",
            proxies: usProxies,
            url: "http://www.gstatic.com/generate_204",
            interval: 300,
            tolerance: 150
        });
    }

    // 新加坡节点组
    if (sgProxies.length > 0) {
        regionGroups.push({
            name: "🇸🇬 狮城节点",
            type: "url-test",
            proxies: sgProxies,
            url: "http://www.gstatic.com/generate_204",
            interval: 300,
            tolerance: 50
        });
    }

    // 韩国节点组
    if (krProxies.length > 0) {
        regionGroups.push({
            name: "🇰🇷 韩国节点",
            type: "url-test",
            proxies: krProxies,
            url: "http://www.gstatic.com/generate_204",
            interval: 300,
            tolerance: 50
        });
    }

    // 英国节点组
    if (ukProxies.length > 0) {
        regionGroups.push({
            name: "🇬🇧 英国节点",
            type: "url-test",
            proxies: ukProxies,
            url: "http://www.gstatic.com/generate_204",
            interval: 300,
            tolerance: 50
        });
    }

    // 获取所有地区组名称
    const regionGroupNames = regionGroups.map(group => group.name);

    // 创建可用节点列表函数
    function getAvailableProxies(baseProxies) {
        const result = [];

        // 添加基础代理
        for (const proxy of baseProxies) {
            result.push(proxy);
        }

        // 添加地区节点（如果可用）
        if (sgProxies.length > 0) result.push("🇸🇬 狮城节点");
        if (hkProxies.length > 0) result.push("🇭🇰 香港节点");
        if (twProxies.length > 0) result.push("🇨🇳 台湾节点");
        if (jpProxies.length > 0) result.push("🇯🇵 日本节点");
        if (usProxies.length > 0) result.push("🇺🇲 美国节点");
        if (ukProxies.length > 0) result.push("🇬🇧 英国节点");
        if (krProxies.length > 0) result.push("🇰🇷 韩国节点");

        return result;
    }

    // 修改代理组配置
    config["proxy-groups"] = [
        // 自定义直连
        {
            name: "🎯 自定义直连",
            type: "select",
            proxies: ["DIRECT"]
        },

        // 节点选择
        {
            name: "🚀 节点选择",
            type: "select",
            proxies: [
                "♻️ 自动选择",
                ...regionGroupNames,
                "🚀 手动切换",
                "DIRECT"
            ]
        },

        // 手动切换
        {
            name: "🚀 手动切换",
            type: "select",
            proxies: allProxies
        },

        // 自动选择
        {
            name: "♻️ 自动选择",
            type: "url-test",
            proxies: allProxies,
            url: "http://www.gstatic.com/generate_204",
            interval: 300,
            tolerance: 50
        },

        // 电报消息
        {
            name: "📲 电报消息",
            type: "select",
            proxies: getAvailableProxies([
                "🚀 节点选择",
                "♻️ 自动选择",
                "🚀 手动切换",
                "DIRECT"
            ])
        },

        // OpenAI
        {
            name: "💬 OpenAi",
            type: "select",
            proxies: getAvailableProxies([
                "🚀 节点选择",
                "♻️ 自动选择",
                "🚀 手动切换",
                "DIRECT"
            ])
        },

        // 油管视频
        {
            name: "📹 油管视频",
            type: "select",
            proxies: getAvailableProxies([
                "🚀 节点选择",
                "♻️ 自动选择",
                "🚀 手动切换",
                "DIRECT"
            ])
        },

        // 奈飞视频
        {
            name: "🎥 奈飞视频",
            type: "select",
            proxies: getAvailableProxies([
                "🎥 奈飞节点",
                "🚀 节点选择",
                "♻️ 自动选择",
                "🚀 手动切换",
                "DIRECT"
            ])
        },

        // 巴哈姆特
        {
            name: "📺 巴哈姆特",
            type: "select",
            proxies: twProxies.length > 0 ? [
                "🇨🇳 台湾节点",
                "🚀 节点选择",
                "🚀 手动切换",
                "DIRECT"
            ] : [
                "🚀 节点选择",
                "🚀 手动切换",
                "DIRECT"
            ]
        },

        // 哔哩哔哩
        {
            name: "📺 哔哩哔哩",
            type: "select",
            proxies: [
                "🎯 全球直连"
            ].concat(hkProxies.length > 0 ? ["🇭🇰 香港节点"] : [])
                .concat(twProxies.length > 0 ? ["🇨🇳 台湾节点"] : [])
        },

        // 国外媒体
        {
            name: "🌍 国外媒体",
            type: "select",
            proxies: getAvailableProxies([
                "🚀 节点选择",
                "♻️ 自动选择",
                "🚀 手动切换",
                "DIRECT"
            ])
        },

        // 国内媒体
        {
            name: "🌏 国内媒体",
            type: "select",
            proxies: [
                "DIRECT",
                "🚀 手动切换"
            ].concat(sgProxies.length > 0 ? ["🇸🇬 狮城节点"] : [])
                .concat(hkProxies.length > 0 ? ["🇭🇰 香港节点"] : [])
                .concat(twProxies.length > 0 ? ["🇨🇳 台湾节点"] : [])
                .concat(jpProxies.length > 0 ? ["🇯🇵 日本节点"] : [])
        },

        // 谷歌FCM
        {
            name: "📢 谷歌FCM",
            type: "select",
            proxies: getAvailableProxies([
                "DIRECT",
                "🚀 节点选择",
                "🚀 手动切换"
            ])
        },

        // 微软Bing
        {
            name: "Ⓜ️ 微软Bing",
            type: "select",
            proxies: getAvailableProxies([
                "DIRECT",
                "🚀 节点选择",
                "🚀 手动切换"
            ])
        },

        // 微软云盘
        {
            name: "Ⓜ️ 微软云盘",
            type: "select",
            proxies: getAvailableProxies([
                "DIRECT",
                "🚀 节点选择",
                "🚀 手动切换"
            ])
        },

        // 微软服务
        {
            name: "Ⓜ️ 微软服务",
            type: "select",
            proxies: getAvailableProxies([
                "DIRECT",
                "🚀 节点选择",
                "🚀 手动切换"
            ])
        },

        // 苹果服务
        {
            name: "🍎 苹果服务",
            type: "select",
            proxies: getAvailableProxies([
                "DIRECT",
                "🚀 节点选择",
                "🚀 手动切换"
            ])
        },

        // 游戏平台
        {
            name: "🎮 游戏平台",
            type: "select",
            proxies: getAvailableProxies([
                "🚀 节点选择",
                "🚀 手动切换",
                "DIRECT",
            ])
        },

        // 网易音乐
        {
            name: "🎶 网易音乐",
            type: "select",
            proxies: [
                "DIRECT",
                "🚀 节点选择",
                "♻️ 自动选择",
                ...neteaseMusicProxies
            ]
        },

        // 全球直连
        {
            name: "🎯 全球直连",
            type: "select",
            proxies: [
                "DIRECT",
                "🚀 节点选择",
                "♻️ 自动选择"
            ]
        },

        // 广告拦截
        {
            name: "🛑 广告拦截",
            type: "select",
            proxies: [
                "REJECT",
                "DIRECT"
            ]
        },

        // 应用净化
        {
            name: "🍃 应用净化",
            type: "select",
            proxies: [
                "REJECT",
                "DIRECT"
            ]
        },

        // 漏网之鱼
        {
            name: "🐟 漏网之鱼",
            type: "select",
            proxies: getAvailableProxies([
                "♻️ 自动选择",
                "🚀 节点选择",
                "🚀 手动切换",
                "DIRECT",
            ])
        },

        // 奈飞节点
        {
            name: "🎥 奈飞节点",
            type: "select",
            proxies: nfProxies.length > 0 ? nfProxies : ["DIRECT"]
        },

        // 添加地区分组
        ...regionGroups
    ];

    config["rule-providers"] = ruleProviders;
    // 自定义直连规则
    const customDirectRules = [
        // gemini rules
        "DOMAIN,ai.google.dev,♻️ 自动选择",
        "DOMAIN,alkalimakersuite-pa.clients6.google.com,♻️ 自动选择",
        "DOMAIN,makersuite.google.com,♻️ 自动选择",
        "DOMAIN-SUFFIX,bard.google.com,♻️ 自动选择",
        "DOMAIN-SUFFIX,deepmind.com,♻️ 自动选择",
        "DOMAIN-SUFFIX,deepmind.google,♻️ 自动选择",
        "DOMAIN-SUFFIX,gemini.google.com,♻️ 自动选择",
        "DOMAIN-SUFFIX,generativeai.google,♻️ 自动选择",
        "DOMAIN-SUFFIX,proactivebackend - pa.googleapis.com,♻️ 自动选择",
        "DOMAIN-SUFFIX,apis.google.com,♻️ 自动选择",
        "DOMAIN-KEYWORD,colab,♻️ 自动选择",
        "DOMAIN-KEYWORD,developerprofiles,♻️ 自动选择",
        "DOMAIN-KEYWORD,generativelanguage,♻️ 自动选择",
        
        "DOMAIN-KEYWORD,github,♻️ 自动选择",
        "DOMAIN-KEYWORD,googleapis,♻️ 自动选择",
        "DOMAIN,zhuce.mri.edu.kg,♻️ 自动选择",
        "DOMAIN-KEYWORD,imgur,🇺🇲 美国节点",

        "DOMAIN-KEYWORD,infini,🎯 自定义直连",
        "DOMAIN-KEYWORD,cnki,🎯 自定义直连",
        "DOMAIN-KEYWORD,weixin,🎯 自定义直连",
        "DOMAIN-KEYWORD,cnki,🎯 自定义直连",
        "DOMAIN-KEYWORD,qcc,🎯 自定义直连",
        "DOMAIN-KEYWORD,gitcode,🎯 自定义直连",
        "DOMAIN-SUFFIX,linux.do,🎯 自定义直连",
        "DOMAIN-SUFFIX,speedtest.net,🎯 自定义直连",
        "DOMAIN-SUFFIX,nguaduot.cn,🎯 自定义直连",
        "DOMAIN-KEYWORD,anthropic,🇺🇲 美国节点",
        "DOMAIN-KEYWORD,claude,🇺🇲 美国节点",
    ]
    // 添加自定义直连规则
    config["rules"] = [
        // 自定义直连规则
        ...customDirectRules,

        // 进程规则
        "RULE-SET,ProcessRules,DIRECT",

        // ===== 国内IP地址 =====
        // GEOIP放到更前面的位置，确保国内IP优先匹配
        "GEOIP,CN,🎯 全球直连",
        // 加入国内IP规则
        "RULE-SET,ChinaIPs,🎯 全球直连",

        // ===== 自定义规则集 =====
        // 自定义直连
        "RULE-SET,CustomDirect,🎯 自定义直连",
        // 国内网站规则集
        "RULE-SET,GuoNeiWangZhan,🎯 全球直连",

        // ===== 基础规则 =====
        // 全球直连规则
        "RULE-SET,LocalAreaNetwork,🎯 全球直连",
        "RULE-SET,UnBan,🎯 全球直连",

        // ===== 广告规则 =====
        // 广告拦截
        "RULE-SET,BanAD,🛑 广告拦截",
        "RULE-SET,BanProgramAD,🍃 应用净化",

        // ===== 国际服务 =====
        // 谷歌服务
        "RULE-SET,GoogleFCM,📢 谷歌FCM",
        "RULE-SET,GoogleCN,🎯 全球直连",
        // Steam中国
        "RULE-SET,SteamCN,🎯 全球直连",
        // 微软服务
        "RULE-SET,Bing,Ⓜ️ 微软Bing",
        "RULE-SET,OneDrive,Ⓜ️ 微软云盘",
        "RULE-SET,Microsoft,Ⓜ️ 微软服务",
        // 苹果服务
        "RULE-SET,Apple,🍎 苹果服务",
        // 电报
        "RULE-SET,Telegram,📲 电报消息",
        // OpenAI
        "RULE-SET,OpenAi,💬 OpenAi",

        // ===== 国内服务 =====
        // 网易音乐
        "RULE-SET,NetEaseMusic,🎶 网易音乐",

        // ===== 游戏平台 =====
        "RULE-SET,Epic,🎮 游戏平台",
        "RULE-SET,Origin,🎮 游戏平台",
        "RULE-SET,Sony,🎮 游戏平台",
        "RULE-SET,Steam,🎮 游戏平台",
        "RULE-SET,Nintendo,🎮 游戏平台",

        // ===== 流媒体 =====
        "RULE-SET,YouTube,📹 油管视频",
        "RULE-SET,Netflix,🎥 奈飞视频",
        "RULE-SET,Bahamut,📺 巴哈姆特",
        "RULE-SET,BilibiliHMT,📺 哔哩哔哩",
        "RULE-SET,Bilibili,📺 哔哩哔哩",
        "RULE-SET,ChinaMedia,🌏 国内媒体",
        "RULE-SET,ProxyMedia,🌍 国外媒体",

        // ===== 代理列表 =====
        "RULE-SET,ProxyGFWlist,🚀 节点选择",

        // ===== 中国直连域名 =====
        "RULE-SET,ChinaDomain,🎯 全球直连",
        "RULE-SET,ChinaCompanyIp,🎯 全球直连",
        "RULE-SET,Download,🎯 全球直连",

        // ===== 兜底规则 =====
        // 漏网之鱼
        "MATCH,🐟 漏网之鱼",
    ];

    return config;
}