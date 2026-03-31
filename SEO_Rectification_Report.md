# GOSUN 网站 SEO 整改要求与规范归档文档

**文档版本:** V1.0
**更新时间:** 2026-03-30
**适用范围:** GOSUN 官方网站 (https://www.7861618.xyz/) 所有 HTML 页面及后续新增页面。

---

## 1. 网页元数据 (Meta Data) 优化规范

每个 HTML 页面的 `<head>` 标签内必须包含完整且准确的元数据，以提升搜索引擎的抓取效率和页面排名。

### 1.1 标题 (Title)
*   **规范:** 必须使用 `<title>` 标签，标题应准确概括页面内容，并包含核心关键词和品牌词。
*   **示例 (首页):** `<title>GOSUN Omnichain: AI-Driven Web3 Matrix & AEA Infrastructure</title>`

### 1.2 描述 (Description)
*   **规范:** 必须包含 `<meta name="description" content="...">`。描述应控制在 150-160 个字符以内，吸引用户点击，并自然融入关键词。
*   **示例:** `<meta name="description" content="GOSUN Omnichain is the institutional-grade infrastructure powering Autonomous Economic Actors (AEA) and decentralized AI liquidity across Web3 networks.">`

### 1.3 关键词 (Keywords)
*   **规范:** 包含 `<meta name="keywords" content="...">`，列出与页面高度相关的 5-10 个核心关键词，用英文逗号分隔。
*   **示例:** `<meta name="keywords" content="GOSUN Capital, Omnichain, Web3 infrastructure, Autonomous Economic Actors, AEA, AI liquidity, Base network, Arbitrum">`

---

## 2. 规范链接 (Canonical URL)

*   **规范:** 为防止搜索引擎因 URL 参数或不同路径导致的内容重复抓取（Duplicate Content）问题，每个页面必须指定唯一的规范链接。
*   **示例:** `<link rel="canonical" href="https://www.7861618.xyz/" />`

---

## 3. 社交媒体分享标签 (Open Graph & Twitter Cards)

为了在 Twitter、Telegram、Discord 等社交平台上分享时能展示丰富的卡片信息（标题、描述、预览图），必须配置以下标签：

### 3.1 Open Graph (OG 标签 - 适用于 Facebook, LinkedIn, Discord 等)
```html
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.7861618.xyz/">
<meta property="og:title" content="GOSUN Omnichain: AI-Driven Web3 Matrix">
<meta property="og:description" content="Institutional-grade infrastructure powering Autonomous Economic Actors and decentralized AI liquidity.">
<meta property="og:image" content="https://www.7861618.xyz/assets/images/og-cover.jpg"> <!-- 需确保预览图链接有效 -->
```

### 3.2 Twitter Cards (Twitter 专属标签)
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@GOSUN_Capital"> <!-- 官方 Twitter Handle -->
<meta name="twitter:title" content="GOSUN Omnichain: AI-Driven Web3 Matrix">
<meta name="twitter:description" content="Institutional-grade infrastructure powering Autonomous Economic Actors and decentralized AI liquidity.">
<meta name="twitter:image" content="https://www.7861618.xyz/assets/images/twitter-cover.jpg">
```

---

## 4. 图像 SEO 优化 (Image Optimization)

*   **Alt 属性 (替代文本):** 网站内所有 `<img>` 标签**必须**包含 `alt` 属性。这不仅符合无障碍访问（A11y）标准，还能让搜索引擎理解图片内容。
*   **规范示例:** 
    *   正确: `<img src="/gosun-logo-official.svg" alt="GOSUN Omnichain Logo">`
    *   错误: `<img src="/gosun-logo-official.svg">` 或 `<img src="/gosun-logo-official.svg" alt="logo">`
*   **格式优化:** 优先使用 SVG（如 Logo、Icon）和 WebP 格式以提升页面加载速度，加载速度是核心的 SEO 排名因素。

---

## 5. 语义化 HTML 与标题层级 (Heading Structure)

*   **H1 标签:** 每个页面**只能有一个** `<h1>` 标签，通常用于页面的主标题，必须包含页面的核心关键词。
    *   *整改记录:* 首页的 Hero 标题已优化为单行显示 `<h1>GOSUN AI-DRIVEN OMNICHAIN MATRIX</h1>`。
*   **H2-H6 标签:** 按照逻辑层级使用 `<h2>` 到 `<h6>` 划分内容区块，不可跳跃层级（例如直接从 H1 跳到 H3）。
*   **大小写规范:** 针对特定的品牌标语或重要标题（如 "THE PROMETHEAN MANDATE"），需保持全站大小写及样式的一致性。

---

## 6. 站点地图与爬虫协议 (Sitemap & Robots.txt)

*   **robots.txt:** 需在根目录配置 `robots.txt`，指引搜索引擎爬虫哪些页面可以抓取，哪些需要屏蔽。
*   **sitemap.xml:** 需在根目录维护 `sitemap.xml`，列出网站所有重要页面的 URL，并提交给 Google Search Console 等站长工具，加速页面收录。

---

## 7. 持续维护要求

1.  **新增页面:** 任何新创建的 `.html` 页面必须严格按照上述第 1 至 5 点进行 TDK（Title, Description, Keywords）和 OG 标签的配置。
2.  **Logo 统一:** 全站必须统一使用无 "TM" 上标的官方 Logo (`/gosun-logo-official.svg`)，并确保带有 `alt="GOSUN Omnichain Logo"` 属性。
3.  **定期检查:** 定期使用 SEO 工具（如 Lighthouse, Google Search Console）扫描网站，修复死链（404）和重定向链。
