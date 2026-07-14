import type { Metadata } from "next";
import Script from "next/script";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileStickyCta } from "@/components/MobileStickyCta";
import { JsonLd } from "@/components/JsonLd";
import { catererSchema } from "@/lib/schema";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";
import { site, assets } from "@/lib/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Dragonfly Catering | Boutique Catering & Private Events in Downingtown, PA",
    template: "%s | Dragonfly Catering",
  },
  description:
    "Chef-led custom catering, private chef experiences, event bartending, and an intimate event space in Downingtown, PA — serving Chester County and the Main Line.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Dragonfly Catering | Boutique Catering & Private Events in Downingtown, PA",
    description:
      "Chef-led custom catering, private chef experiences, event bartending, and an intimate event space in Downingtown, PA — serving Chester County and the Main Line.",
    url: site.url,
    siteName: site.fullName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: assets.socialPreview,
        width: 1200,
        height: 630,
        alt: "Dragonfly Catering chef-led catering in Chester County",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Dragonfly Catering | Boutique Catering & Private Events in Downingtown, PA",
    description:
      "Chef-led custom catering, private chef experiences, event bartending, and an intimate event space in Downingtown, PA — serving Chester County and the Main Line.",
    images: [
      {
        url: assets.twitterPreview,
        alt: "Dragonfly Catering chef-led catering in Chester County",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <JsonLd data={catererSchema()} />
        {/* Analytics placeholder — set NEXT_PUBLIC_GA_MEASUREMENT_ID to activate GA4. */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');`}
            </Script>
          </>
        )}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyCta />
      </body>
    </html>
  );
}
