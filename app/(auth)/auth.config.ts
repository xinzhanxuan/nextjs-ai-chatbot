import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
    newUser: "/",
  },
  providers: [
    // added later in auth.ts since it requires bcrypt which is only compatible with Node.js
    // while this file is also used in non-Node.js environments
  ],
  callbacks: {},
} satisfies NextAuthConfig;

/**
 * | key             | 说明                       |
| --------------- | ------------------------ |
| `signIn`        | 登录页（用户未认证时被重定向到这里）       |
| `signOut`       | 登出页（可选）                  |
| `error`         | 登录出错时跳转的页面（可用于展示自定义错误信息） |
| `verifyRequest` | 邮件登录验证提示页（magic link）    |
| `newUser`       | 新用户第一次登录成功后跳转的页面（只触发一次）  |
 */
