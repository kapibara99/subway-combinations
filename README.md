# subway-combinations
サブウェイの組み合わせApp
全メニュー、全トッピング、全パンとか諸々の組み合わせで、値段計算


## 課題解決
サブウェイ　難しい
サブウェイ　注文　怖い
的なものの解決

## memo
やれれば
ピザのUXよかったやつっぽく、
選んだら、画像が変わっていく感じに
画像は公式から、貰ってくる（要交渉）
https://twitter.com/masahirochaen/status/1485166403565277184

## 参考
https://saizeriya-1000yen.marusho.io/

## デザイン
https://www.figma.com/file/077J1kN5chneLHBlGGS0EE/99-kapy's-team-library?node-id=416%3A33


## フローチャート
1 データ用意 node
get html .js
- リストにあるURLをアクセスして、必要情報を取得する
parse html .js
- 取得したHTMLファイルを解析して
- JSON化する

2 フロントデザイン / 実装
- how to orderページは後回し
- 先にフロントとJSONロジックを作ってみて、
- parseと往復

3