# 藤原研究室 Webサイト

## サイト構築に使われている技術

このWebサイトは [Vue.js](https://ja.vuejs.org/) + [Nuxt](https://nuxt.com/) + [TypeScript](https://www.typescriptlang.org/) で作成されています．Webサイトのデザインを大きく変更したり，動的なページを作成するためにはこれらの技術の習得は必要不可欠です．しかし，最新ニュースを投稿したり，ちょっとだけ内容を更新するだけの場合は深い理解をする必要はありません．その場合はHTMLやCSSの知識が重要になってきます．

以下，それぞれの技術について簡単に紹介していきます．

### Vue.js

Vue.jsはWebアプリケーションのフロントエンド（ブラウザ側で処理や描画を行う部分）を作成するためのフレームワークです．似たような思想のフレームワークとしては [React](https://ja.legacy.reactjs.org/)も有名です．ReactではなくVue.jsを使っているのは深い理由はなく藤原の趣味です．

Vue.jsはバージョンアップにつれて昔の情報があまり意味をなさなくなるような大きな変更がいくつか行われています．また，プログラム部分の記述に使える言語もJavaScriptとTypeScriptと2種類選択肢があり，適当に書き方を検索するだけだと混乱してしまうかもしれません．

藤原研のWebサイトではVue 3以降を前提として[Composition API](https://ja.vuejs.org/guide/extras/composition-api-faq.html) + TypeScriptでのコンポーネント記述をしています．違いが良く分からない，インターネットを検索してもJavascriptやOptionsAPIでの例が出てくるという場合はChatGPTなどに「<script setup lang="ts">を使って教えてください」などと質問して見るのも良いと思います．

### Nuxt

藤原研のWebサイトは[GitHub Pages](https://docs.github.com/ja/pages/getting-started-with-github-pages/about-github-pages)の機能を使ってデプロイしています．GitHub Pagesは動的コンテンツでなく静的コンテンツを配布するためのサービスなので静的サイトとして研究室のWebサイトを作る必要があります．Vue.jsだけでは静的サイトの作成はできないのでNuxtを使っています．細かい説明は省きますが [SPA, SSR, SSGって結局なんなんだっけ？](https://zenn.dev/rinda_1994/articles/e6d8e3150b312d) で説明されているSSGをするために使っています．NuxtもVue.jsと同じくバージョンによる違いがありますが今は3系列を採用しています．

このNuxtを使うと最終的には `yarn nuxt generate` または `yarn generate` で静的ページを生成できます．

### TypeScript

JavaScriptは型の扱いが雑なのでTypeScriptを使っています．両者の違いは自分で検索したり入門書を読むなどして理解してください．



## その他フレームワークなど

* [Gridsome Articles Starter - Gridsome](https://gridsome.org/starters/gridsome-articles-starter/)
  * 最初期は[Gridsome](https://gridsome.org/)というフレームワークを使ってサイトを作っていました．
    * いつまで経ってもVue3に対応しないし対応する様子も見られなかったので逃げました．
  * その際にサイトのデザインとして上記Gridsome Article Starterを採用しました．
  * 現在は藤原が割と頑張ってNuxtに移植した状況ですが一部未実装のままの機能があります．
* [Tailwind CSS - Rapidly build modern websites without ever leaving your HTML.](https://tailwindcss.com/)
  * Gridsome Article Starterが使ってたのでそのまま利用しています．



# Webサイトを更新する

## 自分でVueの開発環境を構築できる人向けの説明

nodeとyarnをインストールしてください．README作成時点の藤原の環境は以下の通りです．

* node: v18.16.0 (nodebrewでいれた)
* yarn: 1.22.19 (homebrewでいれた)

次にリポジトリクローンして`yarn install`してください．

```sh
git clone git@github.com:tcu-sdlab/tcu-sdlab.github.io.git
cd tcu-sdlab.github.io
yarn isntall
```

ローカル環境での開発時は以下のコマンドでサーバを起動してください．

```sh
yarn dev
```

開発用のサーバが起動したらブラウザで http://localhost にアクセスするとローカルで動作している研究室Webサイトが表示されるはずです．ちょっとした内容更新ならvueファイルなどを更新して保存するだけで即座にリロードされます．

サーバが起動したら後は実際に更新作業をしていくのですがその辺はもう少し後で説明します．

### Vueの環境を用意するのが難しそうな人向けの説明

自分でnodeやyarnをインストールするのが難しそうという人は研究室のDockerサーバに接続してそこで作業しましょう．まずは研究室のサーバにSSHで接続してください．

```sh
ssh <研究室のWebサーバのアドレス>
```

`<研究室のWebサーバのアドレス>` は藤原に聞くか研究室のesaを確認してください．このREADMEは全世界に公開されているのでここには記載しません．（追記もしないでください）



この節は以降要追記

ToDo

* Dockerコンテナの起動方法を書く
* Docker用のdocker composeファイルを作成する

### 更新をデプロイする

実際に更新ができたらGitHubにプルリクエストを作成してください．

研究室のWebサイトはGitHub Actionsを使って `main` ブランチが更新されたら自動的に最新版に更新されるようになっています．ビルドされたHTMLファイル群は `gh-pages` ブランチにある（ここのブランチがGitHub Pagesのコンテンツとして認識される）ので更新が上手くいかない場合はGitHub Actionsのビルドログや `gh-pages` ブランチも確認してみてください．

**mainブランチには直接pushできません．**必ずブランチを切ってプルリクエストを作成してください．

典型的な作業フローを以下に示します．

1. mainブランチを最新版に更新する

   ```sh 
   git switch main
   git pull oringin main
   ```

2. 作業用のブランチを作成する．例えば，SES2022の記事を作成する場合は以下のようにする． `news/ses2022`はブランチの名前なので適切な名称を考えましょう． 

   ```sh
   git swtich -c news/ses2022
   ```

3. 更新作業を実施する．どこをどう変更すれば良いかは後で説明します．

4. 更新をコミットする． `git add` と `git commit` を使ってコミットを作成してください．

5. 更新をpushする．以下は`news/ses2022` ブランチをpushする時の例です．

   ```sh
   git push origin new/ses2022
   ```

6. Pull Reequestを作成する．[プルリクエストのページ](https://github.com/tcu-sdlab/tcu-sdlab.github.io/pulls)にアクセスしてください（GitHubの上の方にリンクがあります）．`New pull request` から新しいプルリクエストの作成ができます．マージ先は`main`（デフォルトでそうなっている），マージ元は自分が作成したブランチを選択してください．以下，プルリクエスト作成時の注意点です．
   * プルリクエストは藤原かWebサイトの管理者責任を持つ学生がレビューします．プルリクエストの概要に簡単に何をしたかを記載してください．ニュース記事の追加とかなら「XXの記事を作成した」ぐらいの簡単なもので構いません」
7. Pull Requestのレビューを待つ．あなたがすべき更新作業はここで終わりです．プルリクエストのレビューは藤原か管理責任者が行います．いつまで経ってもレビューされない場合は研究室のSlackでリマインドしましょう．
