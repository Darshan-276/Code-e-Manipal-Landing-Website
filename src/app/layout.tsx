import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/public/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Code-e-Manipal 2.0",
    template: "%s | Code-e-Manipal 2.0",
  },
  description: "The public home for Code-e-Manipal 2.0.",
  applicationName: "Code-e-Manipal 2.0",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Code-e-Manipal 2.0",
    title: "Code-e-Manipal 2.0",
    description: "The public home for Code-e-Manipal 2.0.",
    images: [{ url: "/images/brand/code-e-manipal-logo.png", alt: "Code-e-Manipal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Code-e-Manipal 2.0",
    description: "The public home for Code-e-Manipal 2.0.",
    images: ["/images/brand/code-e-manipal-logo.png"],
  },
};

const themeInitialization = `
  (() => {
    try {
      const stored = localStorage.getItem('code-e-manipal-theme');
      const theme = stored === 'dark' || stored === 'light'
        ? stored
        : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
    } catch (_) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitialization }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
