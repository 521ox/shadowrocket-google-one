# Shadowrocket Google One 脚本版

- `[Rule]` 阻断 UDP/443（QUIC），让 MITM 能工作
- `[Script]` 使用仓库内的 `g1.js`
- `[MITM]`：`one.google.com, payments.google.com, play.googleapis.com`

脚本做三条替换：

- `g1.ios.30gb.m` → `g1.ios.30tb.m`
- `g1.ios.20tb.m.v2` → `g1.ios.20tb.m`
- `g1.ios.30tb.ai.pro.m` → `g1.ios.30tb.m`

本地 console 日志，没有 webhook 或外部上报。protobuf 响应里只应用等长替换；长度不同的替换会跳过，避免破坏长度前缀。

## 导入

1. 删除旧的 Google One 配置，重新扫描 `GoogleOne-QR.png`，或添加固定版本地址：
   `https://cdn.jsdelivr.net/gh/521ox/shadowrocket-google-one@227c8d0e4401334fd8f2bdf1448310e6c24ebd0c/GoogleOne.conf`
2. 打开配置的 `ⓘ` > HTTPS 解密：打开开关，域名已列出 `one.google.com`；证书使用已信任的那张。
3. 建议打开「通过 HTTP/2 进行中间人攻击」。
4. 首页选一个节点，全局路由设为「配置」。

## 说明

- 配置和脚本都固定在 commit 地址，避免 jsDelivr 的 `@main` 旧缓存。
- 如果响应是文本/JSON，三条替换都会生效；如果是 protobuf，只有 30GB→30TB 这条等长替换会应用。
- 需要排查时看「数据 → 代理」；没有 `MITM` 标签的条目没有请求详情。