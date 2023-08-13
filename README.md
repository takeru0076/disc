# [Bulletin board for DualBoot](https://discmyapp-e131419ad102.herokuapp.com)

---
<br>
</br>

## 制作背景
---
私は大学でアルティメット部に所属しています。  


そこでは毎年チームメンバーが変わるごとに同じような内容の壁にぶつかり、解決するのにたくさんの練習時間を費やしてしまいます。  
その時間を短縮するために、項目ごとにまとめられるwebアプリケーションがあれば便利だと思威開発しました。  


LINEのノート機能でもいいという意見が出そうですが、チームの連絡にグループLINEを使っています。毎年新しい新しいLINEグループを作成するため、Note機能では不十分なのです。

<br>
</br>

## 概要
---
僕の所属している部活の戦略や、ルール、その他情報として残っていたら便利なことを記録できるwebアプリケーションです。


また、記録機能に加え、ホワイトボードも実装しました。
スマホ一台あればどこでも作戦会議ができます。

[アプリを使ってみる](https://discmyapp-e131419ad102.herokuapp.com)

<br>
</br>

## 開発環境
---
### 使用言語：

- PHP
- HTML
- CSS（tailwindcss)
- JavaScript(React)

### 環境：

- Laravel(9.52.9)
- MySQL(MariaDB)
- AWS(EC2＋Cloud9)
- Github## 
### デプロイ：
- Heroku

<br>
</br>

## データ構成
---
### 「テーブル構成・リレーション」:
![ER_diagram.jpg](https://boostnote.io/api/teams/kghHunaUm/files/b225b92721698eee5754906d98fa06b44f309cb06986ad2f1228b666fb23e9a8-ER_diagram.jpg)

### 各テーブル詳細：
![スクリーンショット 2023-08-13 7.54.21.png](https://boostnote.io/api/teams/kghHunaUm/files/2638b0d151b72eacb6c04b0e7e6685157b9f79073180dccfef9c7b79319b7213-%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202023-08-13%207.54.21.png)
![スクリーンショット 2023-08-13 7.54.13.png](https://boostnote.io/api/teams/kghHunaUm/files/e1eee2d243eb6144bf5d31c482bdbbe7dfe71383aedc7a53ebfcdbd25fd15c4c-%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202023-08-13%207.54.13.png)
![スクリーンショット 2023-08-13 7.52.42.png](https://boostnote.io/api/teams/kghHunaUm/files/84008634681ea7771415512fc8a08df392a3999facde21a172a48912c3a350b3-%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202023-08-13%207.52.42.png)
![スクリーンショット 2023-08-13 7.54.01.png](https://boostnote.io/api/teams/kghHunaUm/files/8ef5bf9d663c27212d3128f9c911b37a2536a2be946774744dbd513c2b3fa9a2-%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202023-08-13%207.54.01.png)
![スクリーンショット 2023-08-13 7.53.00.png](https://boostnote.io/api/teams/kghHunaUm/files/21e35b5561991d2e16d5bb7f2210e4aee87585bb8128f1ffdc5dd4dbc447f0a6-%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202023-08-13%207.53.00.png)


## 機能
---
- CRUD
- ログイン
- 戦略のタイトル、内容、URL、戦略の種類の投稿、表示
- ルールとその他のタイトル、内容、URLの投稿、表示
- 戦略の種類の作成
- コートと選手、ディスクを使って動きの確認や戦略の話し合いが可能

## こだわり
---
####  **選手とでディスクに見立てたオブジェクトを自由に動かせ、いつでもどこでも視覚的にわかりやすい作戦会議が可能です。**

下のgifはオブジェクトを動かしているデモです。

![画面収録_2023-08-13_12_45_41_AdobeExpress.gif](https://boostnote.io/api/teams/kghHunaUm/files/3431d24b74f9910b7d639a4774d04079f8e1c30fbadd13ad94d07fe069181519-%E7%94%BB%E9%9D%A2%E5%8F%8E%E9%8C%B2_2023-08-13_12_45_41_AdobeExpress.gif)

## 使い方
---
#### **戦略を記録したいユーザー：** 

タイトル、内容、種類、必要があればURLを記述し、投稿します。  
もし戦略の種類に望むものがなければ自作することが可能です。

#### **ルールやその他のことを記録したいユーザー：** 

タイトル、内容、必要があればURLを記述し、投稿します。

#### **記録されている情報を見たいユーザー：** 
戦略、ルールとその他の項目があるので見たい内容のページにボタンを押して遷移してください。

戦略では戦略の種類ごとに一覧で閲覧することが可能です。

## 今後の計画
---
- ページの読み込み速度の向上
- 知りたい内容のタイトルまたは内容検索の実装
