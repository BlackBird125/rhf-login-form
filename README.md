# React Hook Form ログインフォーム サンプル

このプロジェクトは、React Hook Form（RHF）を使用したフォーム管理の基本を学ぶためのサンプルアプリケーションです。
Material-UI（MUI）と組み合わせて、バリデーション機能付きのログインフォームを実装しています。

## 機能

- ユーザー名とパスワードの入力フォーム
- フォームバリデーション
  - ユーザー名（必須）
  - パスワード（必須、6 文字以上）
- エラーメッセージの表示
- 入力内容のコンソール出力

## 使用技術

- React 18
- TypeScript
- React Hook Form v7
- Material-UI v5
- @emotion/react & @emotion/styled

## セットアップ

```bash
# 依存パッケージのインストール
npm install

# 開発サーバーの起動
npm start
```

## 学習ポイント

1. React Hook Form の基本的な使い方

   - useForm フックの使用
   - フォームのバリデーション設定
   - エラーハンドリング

2. Material-UI との連携

   - TextField コンポーネントとの統合
   - エラー表示の制御
   - レスポンシブなレイアウト

3. TypeScript による型安全性
   - フォーム入力の型定義
   - コンポーネントの型付け

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
