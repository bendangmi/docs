import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "Java开发",
    icon:"discover",
    prefix: "/note/Java/",
    children: [
      {
        text: "JavaSE初级",
        icon: "edit",
        link: "JavaSE0",
      },
      {
        text: "JavaSE高级",
        icon: "edit",
        link: "JavaSE1",
      },
    ]
  }
  ,
  {
    text: "前端开发",
    icon:"discover",
    prefix: "/note/Front/",
    children: [
      {
        text: "HTML5",
        icon: "edit",
        link: "HTML5",
      },
      {
        text: "CSS3",
        icon: "edit",
        link: "CSS3",
      },
      {
        text: "JavaScript",
        icon: "edit",
        link: "JS",
      },
    ]
  }
  ,
  {text: "中间件",
    icon:"discover",
    prefix:"/note/Middleware/",
    children: [
      {
        text: "Nginx",
        icon: "edit",
        link: "Nginx",
      },
    ]
  }
  ,
  {
    text: "运维",
    icon:"discover",
    prefix:"/note/DevOps/",
    children: [
      {
        text: "Linux",
        icon: "edit",
        link: "Linux",
      },
    ]
  }
  ,
  {text: "面试",
    icon:"discover",
    prefix:"/note/Interview/",
    children: [
      {
        text: "Java面经",
        icon: "edit",
        link: "JavaInterview",
      },
      {
        text: "前端面经",
        icon: "edit",
        link: "FrontInterview",
      },
    ]
  }
  ,
  {text: "个人简历",
    icon:"discover",
    prefix:"/note/Self/",
    children: [
      {
        text: "简历制作",
        icon: "edit",
        link: "ProductionTutorial",
      },
    ]
  }
  ,{text: "项目",
    icon:"discover",
    prefix:"/note/Project/",
    children: [
      {
        text: "博客项目",
        icon: "edit",
        link: "BlogProject",
      },
    ]
  },
  {
    text: "演示功能",
    icon: "discover",
    link: "/demo/"
  },
]);
