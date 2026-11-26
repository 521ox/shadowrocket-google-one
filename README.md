# Shadowrocket Google One 独立配置

目标：土区 30TB 旧价 2949.99 TRY（公开历史记录，实际金额与周期以 App Store 面板为准）。
只包含本次用途需要的内容，不含去广告、规则集等。

- `GoogleOne.conf`：HTTPS 解密 + `one.google.com/ai` 响应体重写
- 规则：Google 相关域名走代理，其余直连
- `block-quic = all`：调试用，屏蔽所有 QUIC，让 Google 回落到 TCP/TLS，便于 MITM 和查看详细日志；确认日志正常后可改回 `all-proxy`

## 导入

1. 建议在 Shadowrocket 里删除旧的 Google One 配置，再用 iPhone 相机重新扫描 `GoogleOne-QR.png`。远程配置的“更新”有时不会替换 `[General]`，重新导入最稳。
2. 打开该配置的 `ⓘ` > HTTPS 解密 > 打开开关并复用已安装的 CA 证书；同时打开「通过 HTTP/2 进行中间人攻击」。
3. 首页选择一个节点，全局路由设为「配置」。
4. 断开再重连 VPN，或开关一次飞行模式，清掉已建立的 QUIC 会话。
5. 打开 `one.google.com/ai`，在「数据 → 代理」里看新的记录。

## 规则内容

- Gemini 30TB：`com.google.gemini.30tb.ai.pro.m` → `g1.ios.30tb.m`
- iOS 30TB AI Pro：`30tb.ai.pro.m` → `30tb.m`（`g1.ios.30tb.ai.pro.m` → `g1.ios.30tb.m`）
- iOS 20TB v2：`20tb.m.v2` → `20tb.m`
- 具体规则放在通用规则前面，避免 `30tb.ai.pro.m` 先匹配掉 Gemini 的完整 SKU。
- MITM：`one.google.com`

## 日志

- 网络记录在「数据 → 代理」，先打开「启用日志记录」。
- 记录显示 `MITM` 才是已解密；只显示 UDP/QUIC 的条目没有 HTTP 详情。
- 若屏蔽 QUIC 后仍是 UDP，先确认当前勾选的是这份配置，并检查模块是否覆盖了 `block-quic`。

## 注意

- 2949.99 TRY 是公开历史报价，不保证当前账号、区服或周期可用；付款前核对 App Store 弹窗。
- 这是独立配置，不会改动日常使用的配置；用完切回日常配置即可。
- 本配置没有去广告规则。