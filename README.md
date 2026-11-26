# Shadowrocket Google One

## G1 Ultra 严格复刻版（当前使用）

按原模块 1:1 复制，只改了 `script-path` 的仓库地址；脚本只把 `DIAG = true` 改成 `false`，其他字节不动。

- 模块（GitHub Raw，`text/plain`）
  `https://raw.githubusercontent.com/521ox/shadowrocket-google-one/721e618aa6738fe245ebd92eec764a776ef639f1/G1Ultra.sgmodule`
- 脚本（GitHub Raw，`text/plain`）
  `https://raw.githubusercontent.com/521ox/shadowrocket-google-one/f01fdf036613250fde0e5d843459afe96a5142d2/g1.js`

添加方式：Shadowrocket → 配置 → 模块 → 右上角 `+` → 粘贴上面的模块 URL。二维码在部分版本无法导入，优先手动添加。

说明：

- jsDelivr 对 `.sgmodule` 返回 `application/octet-stream`；GitHub Raw 返回 `text/plain`，与原模块一致。
- `DIAG = false` 后不再调用 `report()`，不会向外 POST；代码里仍保留原 webhook 地址，但不会执行。
- 原脚本只有 2 条映射：`g1.ios.20tb.m.v2` -> `g1.ios.20tb.m`、`g1.ios.30tb.ai.pro.m` -> `g1.ios.30tb.m`；没有 30GB 那条。
- 模块名称、描述、QUIC 阻断规则、MITM 列表都保持原样。

## 配置版（带 Apple 域名规则）

`GoogleOne.conf` 在 Google 规则前增加了 Apple 域名走 `PROXY`：

- `apple.com`
- `itunes.com`
- `mzstatic.com`
- `cdn-apple.com`

导入后在首页选择土耳其节点。配置固定地址：

`https://cdn.jsdelivr.net/gh/521ox/shadowrocket-google-one@51084a0a9b1cc4e73e29465776492f7ee38ec158/GoogleOne.conf`

二维码：`GoogleOne-QR-config.png`

## 自用改进版（可选）

`GoogleOne.sgmodule`：同样结构，脚本 `googleone.js`，额外包含 `g1.ios.30gb.m` -> `g1.ios.30tb.m`，没有 webhook，protobuf 只应用等长替换。

`https://cdn.jsdelivr.net/gh/521ox/shadowrocket-google-one@0bd510b4aa4cb041188721c181ee164f4bd1b7fb/GoogleOne.sgmodule`