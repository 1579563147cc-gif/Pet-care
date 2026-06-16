import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "\u6ce1\u6ce1\u722a Pet Spa",
  description:
    "\u6ce1\u6ce1\u722a Pet Spa \u63d0\u4f9b\u5ba0\u7269\u6d17\u62a4\u3001\u9020\u578b\u4fee\u526a\u3001\u76ae\u6bdb\u517b\u62a4\u548c\u5230\u5e97\u9884\u7ea6\u670d\u52a1\u3002"
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
