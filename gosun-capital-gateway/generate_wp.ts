import fs from 'fs';

const indexHtml = fs.readFileSync('index.html', 'utf-8');
const lines = indexHtml.split('\n');

const headAndHeader = lines.slice(0, 517).join('\n');
const footer = lines.slice(1483, 1520).join('\n');

const whitepaperContent = `
<main class="whitepaper-container" style="max-width: 800px; margin: 60px auto; padding: 40px; background: rgba(10, 10, 10, 0.8); border: 1px solid var(--gold-dark); border-radius: 8px; box-shadow: 0 0 20px rgba(212, 175, 55, 0.1);">
  <div class="wp-header" style="text-align: center; margin-bottom: 50px; border-bottom: 1px dashed var(--gold-dark); padding-bottom: 30px;">
    <h1 style="font-size: 2.5rem; color: var(--gold-bright); margin-bottom: 10px; text-transform: uppercase; letter-spacing: 2px;">GOSUN CAPITAL</h1>
    <h2 style="font-size: 1.5rem; color: #fff; font-weight: 300; letter-spacing: 5px;">觉醒协议 (The Awakening Protocol)</h2>
    <p style="color: var(--text-muted); margin-top: 15px; font-family: monospace;">v1.0.0 // 2026-03 // CLASSIFIED: GAIA ORACLE</p>
  </div>

  <div class="wp-section" style="margin-bottom: 40px;">
    <h3 style="color: var(--gold-bright); font-size: 1.2rem; border-left: 3px solid var(--gold-bright); padding-left: 10px; margin-bottom: 20px;">0x00 摘要 (Abstract)</h3>
    <p style="line-height: 1.8; color: #ddd; margin-bottom: 15px;">
      在法币超发、地缘政治动荡与中心化信任崩塌的旧世界（TradFi）中，财富的脆弱性被无限放大。GOSUN CAPITAL 提出“觉醒协议”，旨在为全球高净值个体与数字游民构建一座跨越维度的“诺亚方舟”。
    </p>
    <p style="line-height: 1.8; color: #ddd;">
      本白皮书阐述了 GOSUN CAPITAL 的核心架构：通过节点矩阵（Node Matrix）、去中心化协议（DeFi Protocols）与实战智库（Expert Think Tank），打造一个抗审查、反脆弱的数字主权财富生态。
    </p>
  </div>

  <div class="wp-section" style="margin-bottom: 40px;">
    <h3 style="color: var(--gold-bright); font-size: 1.2rem; border-left: 3px solid var(--gold-bright); padding-left: 10px; margin-bottom: 20px;">0x01 核心理念 (Core Philosophy)</h3>
    <ul style="list-style: none; padding: 0; color: #ddd; line-height: 1.8;">
      <li style="margin-bottom: 15px;">
        <strong style="color: #fff;">1. 主权个人 (The Sovereign Individual)：</strong> 财富不应依附于单一主权国家的信用背书。通过加密资产与离岸架构（如 Wyoming/Delaware LLC），实现物理身份与数字财富的解绑。
      </li>
      <li style="margin-bottom: 15px;">
        <strong style="color: #fff;">2. 反脆弱性 (Anti-fragility)：</strong> 摒弃单点故障。利用多重签名（Safe Multisig）、冷钱包隔离与多链资产配置，在系统性危机中不仅生存，更能获益。
      </li>
      <li style="margin-bottom: 15px;">
        <strong style="color: #fff;">3. 代码即法律 (Code is Law)：</strong> 信任数学而非人性。GOSUN CAPITAL 筛选并接入经过严格审计的 DeFi 协议，消除中介摩擦税。
      </li>
    </ul>
  </div>

  <div class="wp-section" style="margin-bottom: 40px;">
    <h3 style="color: var(--gold-bright); font-size: 1.2rem; border-left: 3px solid var(--gold-bright); padding-left: 10px; margin-bottom: 20px;">0x02 GAIA 神谕生态系统 (The GAIA Oracle Ecosystem)</h3>
    <p style="line-height: 1.8; color: #ddd; margin-bottom: 15px;">
      GAIA 矩阵是 GOSUN CAPITAL 的基础设施层，由三大核心模块构成：
    </p>
    <div style="background: rgba(255,255,255,0.03); padding: 20px; border-radius: 4px; border: 1px solid #333;">
      <h4 style="color: #00ff00; margin-bottom: 10px; font-family: monospace;">> 模块 A: 节点目录 (Node Directory)</h4>
      <p style="color: #aaa; font-size: 0.9rem; margin-bottom: 15px;">汇聚全球顶级 CEX（Binance, OKX, Bybit 等）与合规出入金通道（Kraken, iFAST）。通过专属邀请码，为架构师提供最高等级的费率折扣与 VIP 权限，降低交易摩擦。</p>
      
      <h4 style="color: #00ff00; margin-bottom: 10px; font-family: monospace;">> 模块 B: DeFi 协议 (DeFi Protocols)</h4>
      <p style="color: #aaa; font-size: 0.9rem; margin-bottom: 15px;">精选链上收益聚合器（Yearn）、去中心化衍生品（Hyperliquid, Paradex）与借贷市场（Aave）。实现资产的无许可增值与跨链流动。</p>
      
      <h4 style="color: #00ff00; margin-bottom: 10px; font-family: monospace;">> 模块 C: 稀有通行证 (Rare Invite Codes)</h4>
      <p style="color: #aaa; font-size: 0.9rem;">为早期参与者提供高潜力 Alpha 项目（如 Monad, Berachain, MegaETH）的入场券，捕获生态早期的指数级红利。</p>
    </div>
  </div>

  <div class="wp-section" style="margin-bottom: 40px;">
    <h3 style="color: var(--gold-bright); font-size: 1.2rem; border-left: 3px solid var(--gold-bright); padding-left: 10px; margin-bottom: 20px;">0x03 觉醒路径：架构师指南 (The Awakening Path)</h3>
    <p style="line-height: 1.8; color: #ddd; margin-bottom: 15px;">
      从“沉睡者”到“觉醒架构师”，需经历三个阶段的蜕变：
    </p>
    <ol style="color: #ddd; line-height: 1.8; padding-left: 20px;">
      <li style="margin-bottom: 10px;"><strong>身份重塑 (Identity & Compliance)：</strong> 解决海外地址证明 (POA) 痛点，合法租赁物理信箱，打通全球 KYC 路由。</li>
      <li style="margin-bottom: 10px;"><strong>法人面纱 (Corporate Veil)：</strong> 注册离岸 LLC，开设机构级账户，彻底规避个人风控，实现资产的隐匿与保护。</li>
      <li style="margin-bottom: 10px;"><strong>链上金库 (On-chain Fortress)：</strong> 部署 Safe 多签智能合约，完成资产跨代传承与“死人开关”设置，确保财富永续。</li>
    </ol>
  </div>

  <div class="wp-section" style="margin-bottom: 40px;">
    <h3 style="color: var(--gold-bright); font-size: 1.2rem; border-left: 3px solid var(--gold-bright); padding-left: 10px; margin-bottom: 20px;">0x04 路线图 (Roadmap)</h3>
    <div style="border-left: 2px solid #333; padding-left: 20px; margin-left: 10px;">
      <div style="position: relative; margin-bottom: 20px;">
        <div style="position: absolute; left: -27px; top: 5px; width: 12px; height: 12px; background: #00ff00; border-radius: 50%; box-shadow: 0 0 10px #00ff00;"></div>
        <h4 style="color: #fff;">Phase 1: 矩阵启航 (Current)</h4>
        <p style="color: #aaa; font-size: 0.9rem;">建立 GAIA 节点目录，整合全球最优邀请码与出入金通道。上线实战智库与觉醒打卡系统。</p>
      </div>
      <div style="position: relative; margin-bottom: 20px;">
        <div style="position: absolute; left: -27px; top: 5px; width: 12px; height: 12px; background: var(--gold-bright); border-radius: 50%; box-shadow: 0 0 10px var(--gold-bright);"></div>
        <h4 style="color: #fff;">Phase 2: 自动化金库 (Q3 2026)</h4>
        <p style="color: #aaa; font-size: 0.9rem;">推出 GOSUN Vaults，通过智能合约实现一键式跨链资产配置与自动化收益复投。</p>
      </div>
      <div style="position: relative;">
        <div style="position: absolute; left: -27px; top: 5px; width: 12px; height: 12px; background: #333; border-radius: 50%;"></div>
        <h4 style="color: #fff;">Phase 3: 架构师 DAO (2027+)</h4>
        <p style="color: #aaa; font-size: 0.9rem;">将 GOSUN CAPITAL 治理权逐步移交至“觉醒架构师”社区，实现完全的去中心化自治。</p>
      </div>
    </div>
  </div>

  <div class="wp-section" style="text-align: center; margin-top: 60px; padding-top: 30px; border-top: 1px dashed #333;">
    <p style="color: var(--gold-bright); font-style: italic; font-size: 1.1rem;">"The future is already here – it's just not evenly distributed."</p>
    <a href="/awakening" class="action-btn" style="display: inline-block; margin-top: 20px; padding: 12px 30px; background: var(--gold-dark); color: #000; text-decoration: none; font-weight: bold; border-radius: 4px; text-transform: uppercase;">开始觉醒打卡</a>
  </div>
</main>
`;

const finalHtml = headAndHeader + '\n' + whitepaperContent + '\n' + footer + '\n</body>\n</html>';

fs.writeFileSync('whitepaper.html', finalHtml);
console.log('whitepaper.html generated.');
