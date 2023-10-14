import { NextSeo } from "next-seo";
import { MainLayout } from "../components/Layout/MainLayout";
import { MainHero } from "../components/MainHero";
import { Destination } from "../components/Destination";
import { Weekend } from "../components/Weekend";
import { PeopleReview } from "../components/Review";
import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

const DEFAULT_SEO = {
  title: "Exploring England",
  description: "Discover the best tourist attractions of the UK",
  images: [
    {
      url: "https://exploringengland.uk/assets/bigbenheader.webp",
      width: 1200,
      height: 630,
      alt: "Big Ben Street",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://exploringengland.uk",
    title: "Exploring England",
    description: "Discover the best tourist attractions of the UK",
    image: "https://exploringengland.uk/assets/bigbenheader.webp",
    site_name: "https://exploringengland.uk",
  },
  twitter: {
    handle: "@iamtalvinder",
    cardType: "summary_large_image",
  },
};

export default function Home() {
  const router = useRouter();

  // Define an array of links with different landing tags
  const links = [
    { label: "Top Destinations", landingTag: "top-destinations" },
    { label: "Weekend Getaways", landingTag: "weekend" },
    // Add more links as needed
  ];

  const handleListingClick = (landingTag: string) => {
    // Navigate to the listing page with the selected landing tag in the URL
    router.push(`/listing/${landingTag}`);
  };

  return (
    <>
      <Head>
        <link rel="preload" as="image" href="_next/image?url=%2Fassets%2Fbigbenheader_mobile.webp&w=1920&q=75" />
      </Head>
      <NextSeo
        title="Exploring England"
        description="Discover the best of England from the bustling streets of London to the rolling hills of the Cotswolds. Find inspiration for your next adventure, book your accommodation, and get the latest travel news and updates."
        openGraph={DEFAULT_SEO}
        additionalMetaTags={[
          {
            property: "dc:creator",
            content: "Exploring England",
          },
          {
            name: "application-name",
            content: "Exploring England",
          },
        ]}
      />

      <MainLayout>
        <MainHero />
        <div className="px-5 md:px-20 py-10">
          <h4 className="text-3xl font-semibold">
            Experience History, Culture, and Nature
          </h4>
          <p className="mt-8 w-full leading-relaxed font-semibold text-gray-700">
            Explore historic landmarks, savor diverse cuisines, and indulge in
            world-class entertainment. Your journey to Britain promises a fusion
            of unforgettable moments that will linger in your heart forever.
          </p>
          <Destination />
          <div className="flex justify-center mt-10">
            <Link
              href="/listing?search=top-destinations"
              className="border-red-500 border py-3 px-20 w-full sm:w-auto text-red-500 font-semibold mt-10 rounded-full hover:bg-red-600 hover:text-white"
            >
              More Top Destination
            </Link>
          </div>
        </div>

        <div
          className="px-5 md:px-20 py-10"
          style={{ backgroundColor: "#FFF7F5" }}
        >
          <h4 className="text-3xl font-semibold">
            Plan Your Weekend Escape from London
          </h4>
          <p className="mt-8 w-full leading-relaxed font-semibold text-gray-700">
            Looking for a quick getaway from the hustle and bustle of London?
            Here are 8 amazing destinations that are just a short train ride
            away:
          </p>
          <Weekend />
          <div className="flex justify-center mt-10">
            <Link
              href="/listing?search=weekend"
              className="border-red-500 border py-3 px-20 w-full sm:w-auto text-red-500 font-semibold mt-10 rounded-full hover:bg-red-600 hover:text-white"
            >
              Weekend Destinations
            </Link>
          </div>
        </div>

        <div className="px-5 md:px-20 py-10">
          <div className="container mx-auto text-center w-full lg:w-2/5">
            <h4 className="text-3xl font-semibold">What travellers says</h4>
            <p className="mt-8 leading-relaxed font-semibold text-gray-700 ">
              Travelers consistently praise the United Kingdom for its rich
              history, diverse culture, and iconic attractions. The blend of
              modernity and tradition, from historic landmarks to vibrant
              cities, creates a captivating ambiance that leaves a lasting
              impression.
            </p>
          </div>
          <PeopleReview />
        </div>
        {/* <div className="py-20">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="w-full lg:w-5/12 px-5 lg:px-20 ">
              <h4 className="text-4xl font-bold">
                Protect yourself and your family’s future{" "}
              </h4>
              <p className="leading-relaxed mt-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptates expedita, quibusdam, consequuntur doloribus est, vel
                autem accusamus aut aperiam sed illo consectetur odit impedit
                distinctio! Laborum vitae itaque quo molestias.
              </p>
              <button className="bg-red-600 rounded-full px-5 py-3 shadow-md mt-10 text-white w-2/4">
                Contact Us
              </button>
            </div>
            <div className="w-full lg:w-7/12">
              <Banner />
            </div>
          </div>
        </div> */}
        <Footer />
      </MainLayout>
    </>
  );
}
