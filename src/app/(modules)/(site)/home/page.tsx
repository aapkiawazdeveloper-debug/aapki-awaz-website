import ArticleCard from "@/app/shared/components/site/ui/cards/ArticleCard";
import Pagination from "@/app/shared/components/site/Pagination";
import PageHeader from "@/app/shared/components/site/ui/PageHeader";
import PageFilter from "@/app/shared/components/site/ui/filters/PageFilter";
import { Metadata } from "next";

const buttons = [
  {
    id: 1,
    title: "View More",
    link: "/",
  },
];

export const metadata: Metadata = {
  title: "Aap ki Awaz - Latest Hindi & English News",
  description:
    "Aap ki Awaz brings you breaking Hindi and English news. Covering India & World News, Politics, Business, Sports, Entertainment, Health, Education, Tech and more.",
  keywords: [
    "Hindi News",
    "English News",
    "India News",
    "Politics",
    "Business",
    "Sports",
    "Entertainment",
    "Health",
    "Education",
    "Technology",
  ],
  authors: [{ name: "Arun Koolwal" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.aapkiawaz.in/",
  },
  openGraph: {
    type: "website",
    url: "https://www.aapkiawaz.in/",
    title: "Aap ki Awaz - Latest Hindi & English News",
    description:
      "Stay updated with the latest Hindi & English news on Politics, Business, Sports, Entertainment, Tech, and more.",
    siteName: "Aap Ki Awaz",
    images: [
      {
        url: "https://www.aapkiawaz.in/images/upload_aapkiawaz/logo.jpg",
        width: 1200,
        height: 628,
        alt: "Aap ki Awaz Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@aapkiawaz",
    creator: "@aapkiawaz",
    title: "Aap ki Awaz - Latest Hindi & English News",
    description:
      "Breaking news in Hindi & English. Covering Politics, Business, Sports, Entertainment, Health, Education, Tech and more.",
    images: ["https://www.aapkiawaz.in/images/upload_aapkiawaz/logo.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
  metadataBase: new URL("https://www.aapkiawaz.in"),
};

const HomePage = () => {
  return (
    <>
      <PageHeader pageTitle="News / Events" buttons={buttons} />

      <PageFilter />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Array(13)
          .fill(null)
          .map((_, index) => (
            <ArticleCard key={index} />
          ))}
      </div>

      <Pagination />
    </>
  );
};

export default HomePage;
