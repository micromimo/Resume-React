/**
 * 简历数据文件
 * ============================================================
 * 修改此文件即可自定义你的简历内容，页面组件会自动渲染。
 * 所有数组支持任意条数，增删项目无需改动页面代码。
 */

export interface HeaderInfo {
  /** 头像图片 URL（留空则显示占位方块） */
  photo: string;
  /** 姓名 */
  name: string;
  /** 英文名 / 拼音（显示在姓名下方小字） */
  englishName: string;
  /** 邮箱 */
  email: string;
  /** 电话 */
  phone: string;
  /** 专业 */
  major: string;
  /** 求职岗位 / 意向 */
  position: string;
}

export interface EducationItem {
  /** 学校名称 - 学院 (学历) */
  school: string;
  /** 描述 / 荣誉 / 学生工作经历 */
  description: string;
  /** 时间段 */
  period: string;
}

export interface ExperienceItem {
  /** 公司 / 组织名称 */
  company: string;
  /** 职位 / 工作内容简述 */
  role: string;
  /** 时间段 */
  period: string;
}

export interface ProjectItem {
  /** 项目名称 */
  name: string;
  /** 标签，例如 "主导 · 省级大创" */
  tag: string;
  /** 技术栈 */
  techStack: string;
  /** 项目描述 */
  description: string;
}

export interface SkillItem {
  /** 特长 / 标签 */
  label: string;
  /** 具体内容 */
  desc: string;
}

export interface ResumeData {
  header: HeaderInfo;
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  awards: string[];
  skills: SkillItem[];
}

// ------------------------------------------------------------
// 示例数据：请将下列内容替换为你自己的真实信息
// ------------------------------------------------------------

export const resumeData: ResumeData = {
  header: {
    photo: "",
    name: "莫里亚蒂",
    englishName: "Moriarty",
    email: "your.email@example.com",
    phone: "138-0000-0000",
    major: "计算机科学与技术",
    position: "Rust / 后端开发",
  },

  education: [
    {
      school: "示例大学 - 计算机学院 (本科)",
      description: "期间担任班级学习委员，多次获得一等奖学金",
      period: "2021.09 ～ 2025.07",
    },
  ],

  experience: [
    {
      company: "示例科技有限公司",
      role: "后端开发实习生，负责核心业务接口开发与维护",
      period: "2024.06 ～ 2024.12",
    },
    {
      company: "示例实验室",
      role: "研究助理，参与 AI 相关课题调研",
      period: "2023.09 ～ 2024.05",
    },
  ],

  projects: [
    {
      name: "示例项目一 · 全栈 Web 应用",
      tag: "主导 · 课程设计",
      techStack: "Vue3, Spring Boot, MySQL, Redis",
      description:
        "一个面向小型团队的协作管理平台，支持任务分配、实时通知和数据统计。前端基于 Vue3 + Pinia 构建响应式界面，后端使用 Spring Boot 提供 RESTful API，引入 Redis 缓存高频查询。部署在 Linux 服务器上，通过 Nginx 反向代理。",
    },
    {
      name: "示例项目二 · 数据可视化大屏",
      tag: "参与 · 企业内部工具",
      techStack: "React, ECharts, Node.js, WebSocket",
      description:
        "为运营团队打造的实时数据看板，整合多个业务系统的数据，通过 WebSocket 实现秒级刷新。使用 ECharts 渲染复杂图表，支持钻取、筛选等交互操作。",
    },
  ],

  awards: [
    "2024 学年 校级一等奖学金",
    "全国大学生程序设计竞赛 (CCPC) 区域赛 铜奖",
    "蓝桥杯 Java 组 省级一等奖",
    '校"三好学生"荣誉称号',
  ],

  skills: [
    {
      label: "编程语言",
      desc: "熟练掌握 Java、Python，熟悉 TypeScript / JavaScript；了解 Rust、Go 基础",
    },
    {
      label: "框架与工具",
      desc: "Spring Boot、React、Vue3、Docker、Git、Linux",
    },
    {
      label: "数据库",
      desc: "MySQL、PostgreSQL、Redis，了解 MongoDB",
    },
    {
      label: "软素质",
      desc: "良好的沟通与团队协作能力，主动学习新技术，乐于分享",
    },
    {
      label: "爱好",
      desc: "开源贡献、技术写作、摄影、骑行",
    },
  ],
};
