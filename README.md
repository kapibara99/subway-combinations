# subway-combinations
サブウェイの組み合わせApp
全メニュー、全トッピング、全パンとか諸々の組み合わせで、値段計算

## TODO
- 画像URLをデータに取り込む
- バーに糖質/kcalを追加（）
- 受け取った値を元にリザルトをソートするロジックを作る
- ヘッダーにsns icon追加 / フッターに諸々追加
- 注文方法コンポーネント / 規約コンポーネント / を仮ページに置く
  - 注文方法
    - キャラクター + コメントUI
    - パンやトッピングを選ぶUI
      - in コメント
      - select list
    - 糖質とkcal,金額のresult
  - 規約
    - 一般的なもの

ここまでやって一度レビュー会
- リザルト画面の意見をもらう

## 課題解決
サブウェイ　難しい
サブウェイ　注文　怖い
的なものの解決

## memo
やれればピザのUXよかったやつっぽく、
選んだら、画像が変わっていく感じに画像は公式から、貰ってくる（要交渉）
https://twitter.com/masahirochaen/status/1485166403565277184

## 参考
https://saizeriya-1000yen.marusho.io/

## デザイン
https://www.figma.com/file/077J1kN5chneLHBlGGS0EE/99-kapy's-team-library?node-id=416%3A33

- add svg icon
  bread https://www.onlinewebfonts.com/icon/181709
  suger https://nukumori-icon.com/tag/%E7%A0%82%E7%B3%96/
    加工okのようなので、pngをsvgへ
  kcal https://icon-icons.com/ja/%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3/%E6%9C%A8-%E7%81%AB/144657

## フローチャート

2 フロントデザイン / 実装
- how to orderページは後回し

- result UI(使わないかもしれないけど、modalで詳細を見れるように)
- button UI
- get data and draw result
-
