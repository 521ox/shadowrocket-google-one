# Shadowrocket Google One

## G1 Ultra 模块（订阅时启用）

- 模块（GitHub Raw，`text/plain`）
  `https://raw.githubusercontent.com/521ox/shadowrocket-google-one/3aa31a531b7dd7b2966c36c5b8602ee47586e45e/G1Ultra.sgmodule`
- 脚本（GitHub Raw，`text/plain`）
  `https://raw.githubusercontent.com/521ox/shadowrocket-google-one/f01fdf036613250fde0e5d843459afe96a5142d2/g1.js`

添加方式：Shadowrocket → 配置 → 模块 → 右上角 `+` → 粘贴上面的模块 URL。二维码在部分版本无法导入，优先手动添加。

模块的 `[Rule]` 现在包含：

- QUIC 阻断：`AND,((PROTOCOL,UDP),(DEST-PORT,443)),REJECT-NO-DROP`
- Apple 域名走 `PROXY`：
  - `apple.com`
  - `itunes.com`
  - `mzstatic.com`
  - `cdn-apple.com`

这些规则只在模块启用时生效。订阅时启用模块并在首页选土耳其节点；完成后关闭模块，`peizhi.conf` 仍然保持 Apple `DIRECT`。

说明：

- 旧的模块 URL 是固定 commit，更新模块不会自动拿到新规则；删掉旧模块，用上面的新 URL 重新添加。
- `DIAG = false` 后脚本不再调用 `report()`，不会向外 POST。
- 原脚本只有 2 条映射：`g1.ios.20tb.m.v2` -> `g1.ios.20tb.m`、`g1.ios.30tb.ai.pro.m` -> `g1.ios.30tb.m`；没有 30GB 那条。

## 自用改进版（可选）

`GoogleOne.sgmodule`：同样结构，脚本 `googleone.js`，额外包含 `g1.ios.30gb.m` -> `g1.ios.30tb.m`，没有 webhook，protobuf 只应用等长替换。

`https://cdn.jsdelivr.net/gh/521ox/shadowrocket-google-one@0bd510b4aa4cb041188721c181ee164f4bd1b7fb/GoogleOne.sgmodule`

## 配置版（备用，不用于订阅）

`GoogleOne.conf` 也包含 Apple 规则，但订阅时不需要切到它；用上面的 G1 Ultra 模块即可。