# 🎵 AI Sound Cypher - 2月7日1:00自動更新の手順

## ✅ やること（順番に）

### 1. 新しいブランチを作成してコミット

```bash
# ai-sound-cypherフォルダに移動
cd c:\Users\myst\.gemini\antigravity\scratch\ai-sound-cypher

# 新しいブランチを作成
git checkout -b update-feb7

# すべての変更をステージング
git add .

# コミット
git commit -m "🎵 Update Vol.18 Setlist (2026.02.06) - Scheduled for Feb 7 1:00 JST"

# GitHubにプッシュ
git push origin update-feb7
```

### 2. mainブランチに戻る（まだマージしない！）

```bash
git checkout main
```

### 3. GitHub Actionsの権限を設定

1. GitHubのai-sound-cypherリポジトリページに移動
2. **Settings** → **Actions** → **General**
3. **Workflow permissions** で「**Read and write permissions**」を選択
4. **Save** をクリック

## 🚀 自動デプロイのタイミング

**2月7日（金）1:00（JST）**に自動的に：
- `update-feb7`ブランチが`main`にマージされます
- GitHub Pagesが自動的に更新されます
- サイトに最新のセットリストが表示されます

## ⚠️ 重要な注意点

- **mainブランチにはマージしないでください！**
- `update-feb7`ブランチにプッシュするだけでOKです
- GitHub Actionsが自動的に処理します

## 🔧 手動で今すぐ公開したい場合

GitHubの **Actions** タブから `Scheduled Deploy to GitHub Pages` を手動実行できます。

---

作成日時: 2026-02-06
公開予定: 2026-02-07 01:00 JST
