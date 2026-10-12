import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { site } from "@/config/site";
import { getContent, getLanguage, getTheme } from "@/lib/preferences";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Title and description follow the visitor's language.
export async function generateMetadata(): Promise<Metadata> {
  const { meta } = await getContent();

  return {
    metadataBase: new URL(site.url),
    title: {
      default: meta.title,
      template: `%s | ${site.name}`,
    },
    description: meta.description,
    applicationName: site.name,
    openGraph: {
      type: "website",
      siteName: site.name,
      title: meta.title,
      description: meta.description,
      url: "/",
      locale: meta.locale,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const [language, theme] = await Promise.all([getLanguage(), getTheme()]);

  return (
    <html
      lang={language}
      data-theme={theme}
      data-scroll-behavior="smooth"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
