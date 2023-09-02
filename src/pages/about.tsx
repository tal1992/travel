// pages/about-us.tsx
import { NextSeo } from "next-seo";
import { MainLayout } from "../components/Layout/MainLayout";
import { Footer } from "../components/Footer";
import Link from "next/link";


const AboutUs = () => {
    
  return (
    <>
      <NextSeo
        title="About Us - Exploring England"
        description="Learn more about the developer and the inspiration behind Exploring England."
      />

<MainLayout>
    <div className="px-5 md:px-20 py-10">
      <h1 className="text-4xl font-semibold mb-4">About Us</h1>
      <p className="leading-relaxed font-semibold text-gray-700">
        Hi, I'm <b>Talvinder</b>, the developer behind Exploring England. I'm a software engineer with a passion for travel and exploration. I've lived in London for over a year, and I've fallen in love with the city's vibrant culture, historic landmarks, and diverse cuisine.
      </p>
      <p className="mt-4 leading-relaxed font-semibold text-gray-700">
        Exploring England is a platform where I can share my knowledge and experiences with other travelers. I hope to provide you with valuable insights, travel tips, and the latest updates to make your visit to the UK an unforgettable experience.
      </p>
      <p className="mt-4 leading-relaxed font-semibold text-gray-700">
        Some of the features of Exploring England include:
        <ul className="list-disc list-inside mb-4">
          <li>Detailed travel guides to all the major cities and towns in England</li>
          <li>Itineraries for different types of trips, from weekend getaways to multi-week adventures</li>
          <li>Blog posts about the latest travel news and trends</li>
          <li>A forum where travelers can ask questions and share tips</li>
          <li>A directory of accommodation and other travel services</li>
        </ul>
      </p>
      <p className="mt-4 leading-relaxed font-semibold text-gray-700">
        Stay in touch with me on social media or subscribe to my newsletter to get the latest news from Exploring England.
      </p>
    

    <div className="mt-4 flex space-x-4 items-center justify-center">
  <Link href="https://linkedin.com/in/iamtalvinder" target="_blank" rel="noopener noreferrer" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
    Linkedin
  </Link>
  <Link href="https://www.instagram.com/iamtalvinder" target="_blank" rel="noopener noreferrer" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">
    Instagram
  </Link>
  </div>
</div>

    {/* Add more content or sections as needed */}
  </MainLayout>

      <Footer />
    </>
  );
};

export default AboutUs;
