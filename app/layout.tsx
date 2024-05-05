import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "你是誰？｜2024 台灣數位遊牧者大會",
  description: "你是誰"
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-TW">
  <body>
  <div className="flex h-[100svh] w-screen items-center justify-center" style={{
    backgroundImage: "url('/bg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
    <div
      className="relative z-20 h-[100svh] w-screen overflow-hidden bg-gray-3 shadow-2xl sm:h-[672px] sm:w-[402px] md:rounded-lg">
      <div className="h-full overflow-y-scroll">
        {children}
      </div>
    </div>
  </div>
  </body>
  </html>;
}
