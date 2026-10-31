# Demo App — 下载落地页

一个基于 **React + Vite** 的 App 下载落地页，采用「亚特兰蒂斯海洋风格」，根据访问设备自动识别并展示对应的下载按钮。

## 功能特性

- **应用信息展示**：App 名称、Logo、简介
- **设备自动识别**：页面打开后根据 User-Agent 自动识别 Android / iOS / PC
- **下载跳转**：按设备类型显示对应下载按钮，点击跳转至指定链接
- **链接集中配置**：所有下载地址集中在 `src/config.js`，替换时无需改动组件
- **响应式适配**：PC、Android、iOS 浏览器均可正常访问，无错位、重叠或横向溢出

## 设备识别规则

| 访问设备 | 显示按钮 | 点击跳转 |
| --- | --- | --- |
| Android | Download for Android | https://www.baidu.com |
| iOS（iPhone / iPad） | Download for iOS | https://www.google.com |
| PC / 其他设备 | 同时显示两个下载按钮 | 分别跳转对应链接 |

## 技术栈

- React 19
- Vite 8
- 纯 CSS（渐变 / 波浪 / 粒子 / 光晕动画）

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器（默认 http://localhost:5173）
npm run dev

# 构建生产版本（输出到 dist/）
npm run build

# 本地预览构建产物
npm run preview
```

> 也可使用 `pnpm install` / `yarn` 安装依赖。

## 修改下载链接

所有配置集中在 [`src/config.js`](src/config.js)：

```js
export const DOWNLOAD_LINKS = {
  android: 'https://www.baidu.com',
  ios: 'https://www.google.com',
}
```

替换这里的地址即可，无需改动任何组件代码。

## 目录结构

```
.
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── logo.svg            # App Logo
└── src/
    ├── main.jsx            # 应用入口
    ├── App.jsx             # 页面主体
    ├── App.css             # 页面样式（海洋风格）
    ├── index.css           # 全局样式
    ├── config.js           # 应用信息与下载链接集中配置
    ├── hooks/
    │   └── useDevice.js    # 设备识别逻辑
    └── components/
        ├── DownloadButtons.jsx  # 下载按钮（按设备渲染）
        └── Particles.jsx        # 海底粒子背景
```

## 部署到 Vercel

1. 将项目推送到 GitHub 仓库。
2. 在 [Vercel](https://vercel.com) 中导入该仓库。
3. 框架自动识别为 **Vite**，构建命令 `npm run build`、输出目录 `dist` 无需手动修改。
4. 点击 Deploy，完成后即可获得公开访问链接。
