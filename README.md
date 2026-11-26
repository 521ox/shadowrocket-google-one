# Shadowrocket Google One

## G1 Ultra 严格复刻版（当前使用）

按原模块 1:1 复制，只改了 `script-path` 的仓库地址；name、desc、rule、MITM 和脚本内容都不变。

- 模块：`G1Ultra.sgmodule`
  `https://cdn.jsdelivr.net/gh/521ox/shadowrocket-google-one@d96596b8d9989785dbcf54d95fa97f0668b96db4/G1Ultra.sgmodule`
- 脚本：`g1.js`，原文件字节级复制，SHA-256 与源文件一致
  `https://cdn.jsdelivr.net/gh/521ox/shadowrocket-google-one@c11975b974a181f70479893ca3bd204c698b6495/g1.js`
- 二维码：`G1Ultra-QR.png`

说明：

- 脚本保留原作者的 `REPORT_URL`（webhook.site），运行时会继续上报 URL、价格和 SKU 片段。
- 原脚本只有 2 条映射：`g1.ios.20tb.m.v2` -> `g1.ios.20tb.m`、`g1.ios.30tb.ai.pro.m` -> `g1.ios.30tb.m`；没有 30GB 那条。

## 自用改进版（可选）

`GoogleOne.sgmodule`：同样结构，脚本 `googleone.js`，额外包含 `g1.ios.30gb.m` -> `g1.ios.30tb.m`，去掉 webhook，protobuf 只应用等长替换。

`https://cdn.jsdelivr.net/gh/521ox/shadowrocket-google-one@0bd510b4aa4cb041188721c181ee164f4bd1b7fb/GoogleOne.sgmodule`

## 配置版（备用）

`https://cdn.jsdelivr.net/gh/521ox/shadowrocket-google-one@227c8d0e4401334fd8f2bdf1448310e6c24ebd0c/GoogleOne.conf`