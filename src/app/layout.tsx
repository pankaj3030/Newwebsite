import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gurujitechglobal.com"),
  title: "Guruji Tech Global | Professional IT Support & Cloud Services",
  description: "Guruji Tech Global provides fully managed IT support, cloud services, cybersecurity, Microsoft 365 and infrastructure solutions with 24/7 UK-based support. Expert IT solutions for businesses.",
  keywords: [
    "IT support",
    "cloud services",
    "cybersecurity",
    "Microsoft 365",
    "managed IT services",
    "Azure",
    "AWS",
    "network solutions",
    "UK IT support",
    "IT infrastructure"
  ],
  authors: [{ name: "Guruji Tech Global" }],
  robots: "index, follow",
  openGraph: {
    title: "Guruji Tech Global - Professional IT Services & Cloud Solutions",
    description: "Enterprise-grade IT support, cloud migration, cybersecurity and Microsoft 365 services with 24/7 UK-based support",
    url: "https://www.gurujitechglobal.com",
    siteName: "Guruji Tech Global",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Guruji Tech Global Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Guruji Tech Global - Professional IT Services",
    description: "Enterprise IT support, cloud services & cybersecurity with 24/7 UK support",
    images: ["/logo.png"]
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png"
  },
  manifest: "/site.webmanifest"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://cloudflare-static.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Guruji Tech Global",
              image: "https://www.gurujitechglobal.com/logo.png",
              description: "Professional IT support and managed IT services with 24/7 UK-based support",
              address: {
                "@type": "PostalAddress",
                streetAddress: "111 Union House, New Union Street",
                addressLocality: "Coventry",
                postalCode: "CV1 2NT",
                addressCountry: "GB"
              },
              telephone: "+44-7488564873",
              email: "contact@gurujitechglobal.com",
              url: "https://www.gurujitechglobal.com",
              priceRange: "$$"
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
