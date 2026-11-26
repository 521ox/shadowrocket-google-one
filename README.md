# Shadowrocket Google One 独立配置

只包含本次用途需要的内容，不含去广告、规则集等。

- `GoogleOne.conf`：HTTPS 解密 + `one.google.com/ai` 响应体重写
- 规则：Google 相关域名走代理，其余直连

## 导入

1. 用 iPhone 相机扫描 `GoogleOne-QR.png`，或在 Shadowrocket 的「配置」里添加：
   - 主地址（jsDelivr）：`https://cdn.jsdelivr.net/gh/521ox/shadowrocket-google-one@main/GoogleOne.conf`
   - 备用地址（GitHub Raw）：`https://raw.githubusercontent.com/521ox/shadowrocket-google-one/main/GoogleOne.conf`
2. 打开该配置的 `ⓘ` > HTTPS 解密 > 生成并安装 CA 证书，然后在系统设置里信任证书。
3. 首页选择一个节点，全局路由设为「配置」。
4. 打开 `one.google.com/ai` 验证。

## 规则内容

- 20TB：`20tb.m.v2` → `20tb.m`
- 30TB：`30tb.ai.pro.m` → `30tb.m`
- 两条规则配合使用，匹配 URL：`^https://one.google.com/ai\?.*$`
- MITM：`one.google.com`

## 注意

- 这是独立配置，不会改动日常使用的配置；用完切回日常配置即可。
- 本配置没有去广告规则。