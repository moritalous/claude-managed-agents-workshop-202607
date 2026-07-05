# Claude Managed Agents Workshop

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)
[![License: CC BY-NC-ND 4.0](https://licensebuttons.net/l/by-nc-nd/4.0/88x31.png)](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.ja)

Claude Managed Agentsのハンズオン教材サイトです。クラウドで動く自律エージェントを、自分の手で作って動かしながら学びます。

**📖 教材サイト**: https://moritalous.github.io/claude-managed-agents-workshop-202607/

[Osaka | Claude Managed Agents Workshop](https://luma.com/claude-e5yf)（Osaka Tech Lab開催）のために作成した教材ですが、内容は汎用的で、イベントに参加していない方も自習に利用できます。

## 📚 コンテンツ構成

| セクション | 内容 |
| :--- | :--- |
| はじめに | 事前準備、Claude Managed Agentsの概要解説 |
| 初級 | Claude Consoleだけでエージェントを作成（テンプレート利用〜チャットで新規作成） |
| 中級 | 同じリサーチエージェントをConsole・ant CLI・Python SDKの3通りで作成 |
| 上級 | スキル・ビルトインツール・スケジュール実行・GitHub連携・Gmail連携などを使った実践的なエージェント構築 |
| 参考資料 | トラブルシューティング、リンク集、参加者のブログ |

ハンズオンには各自のClaude APIキーとクレジット（$5程度）が必要です。詳細は教材サイトの「事前準備」を参照してください。

## 🛠️ 開発

[Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/)で構築しています。ページは`src/content/docs/`配下のMarkdown/MDXファイルです。

```sh
bun install   # 依存関係のインストール
bun dev       # 開発サーバー起動 (localhost:4321)
bun build     # 本番ビルド (./dist/)
```

mainブランチへのpushでGitHub Pagesに自動デプロイされます。

## 🤝 コントリビュート

誤りの指摘や改善の提案はPull Request / Issueで歓迎します。Pull Requestの送付をもって、その内容を本コンテンツの一部として下記ライセンスで公開することに同意いただいたものとみなします。

## 📄 ライセンス

本リポジトリのワークショップコンテンツは[クリエイティブ・コモンズ 表示-非営利-改変禁止 4.0 国際ライセンス（CC BY-NC-ND 4.0）](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.ja)の下で公開しています。[LICENSE](./LICENSE)ファイルは[公式のlegal code](https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode.txt)の無改変コピーです。

© 2026 moritalous

- **できること**: 学習・ワークショップ参加などの目的で、自由に閲覧・利用できます。クレジットを表示すれば、非営利かつ改変なしでの共有も可能です。
- **できないこと**: 商用利用、および改変したものの頒布はできません。
- **お願い**: 転載・再配布ではなく、このリポジトリ（またはサイト）へのリンクでの紹介をお願いします。

### 対象外のコンテンツ

- 教材内からリンクしている**ワークショップ参加者の成果物・記事などの外部コンテンツ**は、それぞれの作者に帰属し、本ライセンスの対象外です。
- 教材内の**サンプルコード**は、学習目的でご自身のプロジェクトに自由にコピー・改変して利用いただけます。
