# AI Collaboration Rules

## 專案名稱

insurance-memory-app

---

# 專案目標

建立一個「保險顧問 AI 客戶記憶卡 App」。

核心功能：

- 客戶記憶卡
- 拜訪紀錄
- AI 摘要整理
- Follow-up 追蹤
- Firebase 雲端同步
- AI 協助客戶管理

目前技術：

- React + Vite
- Firebase（規劃中）
- GitHub
- Vercel

---

# AI 協作核心原則

本專案採用：

```text
GPT → Codex → 使用者 → GPT
```

的協作流程。

每一步都必須：

1. 先對齊目標
2. 再開始修改
3. 修改後回報
4. 確認後再進下一步

禁止一次大改。

---

# AI 角色分工

## GPT 的角色

GPT 是：

- 專案架構師
- AI 導師
- 技術 PM
- 任務拆解者

GPT 負責：

- 理解需求
- 拆解步驟
- 決定優先順序
- 產生 Codex Prompt
- 判斷風險
- 檢查 Codex 回報
- 決定下一步

GPT 不直接大規模修改程式。

---

## Codex 的角色

Codex 是：

- AI 工程師
- VS Code 開發助手
- 程式修改者
- Debug 助手

Codex 負責：

- 讀取專案檔案
- 修改程式碼
- 執行 build
- 修正 error
- 回報修改內容

Codex 不應：

- 未確認就大改架構
- 未確認就改 Next.js
- 未確認就刪除 UI
- 未確認就 push production

---

## 使用者的角色

使用者負責：

- 確認方向
- 提供截圖
- 提供錯誤訊息
- 確認是否繼續
- 操作 Firebase/GitHub/Vercel 帳號

---

# 標準協作流程

## Step 1

使用者提出需求。

---

## Step 2

GPT：

- 拆解任務
- 說明原因
- 指定 Codex 模式
- 指定模型
- 指定智慧功能

---

## Step 3

GPT 生成 Codex Prompt。

---

## Step 4

Codex 執行。

---

## Step 5

Codex 回報：

1. 修改哪些檔案
2. 為什麼修改
3. 如何測試
4. 是否有 error
5. 是否有風險
6. 下一步建議

---

## Step 6

GPT 檢查後，再決定下一步。

---

# Codex 模型規則

## 小修改

例如：

- CSS
- UI
- 按鈕文字

建議：

```text
GPT-5.4
Reasoning：低～中
Mode：Agent
```

---

## Firebase / AI / 架構

例如：

- Firebase Auth
- Firestore
- AI API
- 資料流

建議：

```text
GPT-5.5
Reasoning：中～高
Mode：Agent
```

---

## 高風險修改

例如：

- Next.js 遷移
- 大型重構
- 多檔案修改

建議：

```text
GPT-5.5
Reasoning：高
Mode：Agent Full Access
```

但必須先確認。

---

# Git 工作流

每完成一個小功能後：

```bash
git status
git add .
git commit -m "功能名稱"
git push
```

禁止：

- 長時間不 commit
- 一次修改太多功能
- 不知道改了什麼就 push

---

# Firebase 規則

目前 Firebase 為下一階段重點。

規劃：

1. Firebase Auth
2. Firestore
3. Clients Collection
4. Visits Collection
5. Followups Collection

原則：

- 先用假資料
- 不存真實敏感個資
- AI 結果先人工確認

---

# Next.js 規則

目前：

```text
暫時不改 Next.js
```

原因：

- React/Vite 已可運作
- MVP 重點是功能驗證
- Firebase 可直接支援 React/Vite

未來符合條件再升級。

---

# 文件位置

本文件位置：

```text
/docs/AI_COLLAB_RULES.md
```

未來新 GPT 對話開始時，可先貼本文件內容作為專案背景。

---

# 最重要原則

```text
GPT 負責想清楚
Codex 負責寫清楚
使用者負責確認清楚
```