# Shadowrocket Google One 模块

自用模块，脚本和地址都在本仓库，没有外部上报。

- `[Rule]` 阻断 UDP/443（QUIC），让 MITM 能工作
- `[Script]` 使用仓库内的 `googleone.js`
- `[MITM]` 用 `%APPEND%` 追加 `one.google.com, payments.google.com, play.googleapis.com`，不覆盖日常配置

## 导入

1. 扫描 `GoogleOne-QR.png`，或在 Shadowrocket 的模块里添加：
   `https://cdn.jsdelivr.net/gh/521ox/shadowrocket-google-one@0bd510b4aa4cb041188721c181ee164f4bd1b7fb/GoogleOne.sgmodule`
2. 模块会追加 MITM 域名；确保当前配置的 HTTPS 解密已打开、证书已信任。
3. 建议打开「通过 HTTP/2 进行中间人攻击」。
4. 全局路由设为「配置」，断开 VPN 重连一次。

## 脚本映射

- `g1.ios.30gb.m` → `g1.ios.30tb.m`
- `g1.ios.20tb.m.v2` → `g1.ios.20tb.m`
- `g1.ios.30tb.ai.pro.m` → `g1.ios.30tb.m`

脚本只在小火箭本地打印 `[GoogleOne]` 日志，没有 webhook。protobuf 响应里只应用等长替换；长度不同的替换会跳过，避免破坏长度前缀。

## 配置版（备用）

如果不想用模块，`GoogleOne.conf` 是同样逻辑的独立配置：

`https://cdn.jsdelivr.net/gh/521ox/shadowrocket-google-one@227c8d0e4401334fd8f2bdf1448310e6c24ebd0c/GoogleOne.conf`