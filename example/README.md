# 用于测试 rule log 对 sourcemap 的影响

1. 调整 rule log 只处理 .html 文件
2. 测试 vconsole 使用新 log 前后是否显示正确的错误堆栈

以下表格有无解析指的是 `source map` 解析

| 处理方式           | chrome console | vconsole | whistle |
|----------------|----------------|----------|---------|
| 默认             | 完全准确           | 无解析，但正确  | 无解析，但正确 |
| 域名 log://      | 有解析，不正确        | 无解析，且错误  | 无解析，且错误 |
| 正则屏蔽 js log:// | 完全正确           | 无解析，但正确  | 无解析，但正确 |

结论：
1. vconsole 并没有做 sourcemap 处理
2. 正则屏蔽 js log:// 是有效的，但想让 whistle log 完全正确，还要想办法让其能解析 source map

[参考社区库 source map](https://www.npmjs.com/package/source-map)
