# Shadowrocket Google One 基本配置

按手机里的设置整理的最小配置：

- 两条正文重写：30TB、20TB
- MITM：`one.google.com`
- 不含 `block-quic`，不含额外规则

## 导入

1. 删掉旧的 Google One 配置，重新扫描 `GoogleOne-QR.png`，或添加：
   - 固定版本（推荐）：`https://cdn.jsdelivr.net/gh/521ox/shadowrocket-google-one@dd87eac/GoogleOne.conf`
   - 备用地址：`https://raw.githubusercontent.com/521ox/shadowrocket-google-one/main/GoogleOne.conf`
2. 打开配置的 `ⓘ` > HTTPS 解密：打开开关，域名填 `one.google.com`，证书使用已信任的那张。
3. 建议打开「通过 HTTP/2 进行中间人攻击」；部分 HTTP/2 请求在关闭时可能不解密。
4. 首页选一个节点，全局路由设为「配置」。

> jsDelivr 的 `@main` 地址可能缓存旧版本；上面的固定 commit 地址不会，适合直接导入。

## 规则内容

```ini
[Body Rewrite]
http-response ^https://one.google.com/ai\?.*$ 30tb\.ai\.pro\.m 30tb.m
http-response ^https://one.google.com/ai\?.*$ 20tb\.m\.v2 20tb.m
```

- `g1.ios.30tb.ai.pro.m` 会变成 `g1.ios.30tb.m`
- `g1.ios.20tb.m.v2` 会变成 `g1.ios.20tb.m`

## 说明

- 正文重写处理文本响应；protobuf 二进制响应由 g1-acq 模块的脚本改写，日志里的 `[REWRITE:protobuf]` 就是脚本输出的。
- 日志里只有 UDP 条目是 QUIC，没有 HTTP 详情；需要看详情时再在 `[General]` 加 `block-quic = all-proxy`。