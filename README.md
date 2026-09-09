# Resume-React

一个用 React + TypeScript + TailwindCSS 构建的简历模版，支持打印(默认A4)，数据与页面解耦，方便自定义。

<img width="1640" height="1710" alt="resume-react-img" src="https://github.com/user-attachments/assets/f6d61c26-aa9b-4d45-a6ac-8ff9f0580405" />


## 快速开始

```bash
npm install
npm run dev
```

## 自定义简历

编辑 [src/data/resumeData.ts](src/data/resumeData.ts)，按 TypeScript 接口填入你的真实信息即可。所有数组区块支持任意条数，增删项目无需改动页面代码。

## 构建 & 打印

```bash
npm run build
npm run preview
```

在浏览器中打开预览页面，Ctrl/Cmd + P 即可打印为 A4 PDF。
