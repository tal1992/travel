import fs from "fs";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import H1 from "../components/mdx/H1";
import React, { useEffect, useState } from "react";
import Paragraph from "../components/mdx/Paragraph";
import H2 from "../components/mdx/H2";
import H3 from "../components/mdx/H3";
import List from "../components/mdx/List";
import LI from "../components/mdx/LI";
import Strong from "../components/mdx/strong";
import { MainLayout } from "../components/Layout/MainLayout";
import { ArticleHero } from "../components/mdx/ArticleHero";
import path from "path";
import { Footer } from "../components/Footer";
import PublishDate from "../components/mdx/PublishDate";
import { locations } from "../data/locations";
import Link from "next/link";
import LazyLoadImage from "../components/LazyLoadImage";
import { NextSeo } from "next-seo";

export default function PostPage({
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [randomLocations, setRandomLocations] = useState([]);
  const locationsArray = locations; // Your array of locations

  useEffect(() => {
    if (locationsArray.length > 0) {
      const randomIndexes = getRandomIndexes(locationsArray.length, 5);
      const selectedLocations = randomIndexes.map(
        (index) => locationsArray[index]
      );
      setRandomLocations(selectedLocations);
    }
  }, [locationsArray]);

  // Function to generate an array of random indexes
  function getRandomIndexes(max, count) {
    const indexes = [];
    while (indexes.length < count) {
      const randomIndex = Math.floor(Math.random() * max);
      if (!indexes.includes(randomIndex)) {
        indexes.push(randomIndex);
      }
    }
    return indexes;
  }

  return (
    <MainLayout>
      <div className="lg:flex items-start justify-between">
        <div className="px-5 md:px-20 pb-10 md:pb-20 lg:w-4/5">
          <div>
            <Head>
              <title>{source.frontmatter.title as string}</title>
            </Head>
            <NextSeo
              title={source.frontmatter.title as string}
              description={source.frontmatter.description as string}
              openGraph={{
                title: source.frontmatter.title as string,
                description: source.frontmatter.description as string,
                images: [
                  {
                    url: source.frontmatter.previewImage as string,
                    width: 1200,
                    height: 630,
                    alt: source.frontmatter.title as string,
                  },
                ],
              }}
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
            <MDXRemote
              {...source}
              // specifying the custom MDX components
              components={{
                h1: H1,
                ArticleHero: ArticleHero,
                h2: H2,
                h3: H3,
                p: Paragraph,
                Date: PublishDate,
                ul: List,
                li: LI,
                strong: Strong,
              }}
            />
          </div>
        </div>
        <div className="px-5 md-px-20 pb-10 lg:w-1/5 lg:py-20 lg:pl-0 h-screen sticky top-0 lg:mb-20">
          <h2 className="mdx-h2 text-gray-800 font-medium py-4">
            PEOPLE ALSO READ
          </h2>

          <div className="mt-5">
            {randomLocations.map((item, key) => (
              <div className="" key={key}>
                <Link href={item.link} className="flex pb-5">
                  <LazyLoadImage
                    src={item.image_url}
                    alt={item.name}
                    className="object-cover rounded-md hover:opacity-75 w-2/5 lg:w-2/5 xs:h-20 lg:h-16"
                  />

                  <div className="w-3/5 lg:w-3/5 ml-3">
                    <div className="">
                      <h3 className="font-semibold lg:text-sm lg:mt-1 truncate">
                        {item.name}
                      </h3>
                    </div>
                    <div className="flex items-center mt-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-4 h-4 text-red-500 fill-current"
                      >
                        <g data-name="Layer 2">
                          <g data-name="star">
                            <rect
                              width="24"
                              height="24"
                              transform="rotate(90 12 12)"
                              opacity="0"
                            />
                            <path d="M17.56 21a1 1 0 0 1-.46-.11L12 18.22l-5.1 2.67a1 1 0 0 1-1.45-1.06l1-5.63-4.12-4a1 1 0 0 1-.25-1 1 1 0 0 1 .81-.68l5.7-.83 2.51-5.13a1 1 0 0 1 1.8 0l2.54 5.12 5.7.83a1 1 0 0 1 .81.68 1 1 0 0 1-.25 1l-4.12 4 1 5.63a1 1 0 0 1-.4 1 1 1 0 0 1-.62.18z" />
                          </g>
                        </g>
                      </svg>
                      <label className="lg:text-xs ml-2">{item.rate}</label>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </MainLayout>
  );
}

export async function getStaticPaths() {
  const paths = [];
  const blogPostPaths = await fs.readdirSync("./src/_posts");

  for (const blogPostPath of blogPostPaths) {
    console.log('the path ==', blogPostPath);
    if (blogPostPath.endsWith(".mdx") && blogPostPath !== "sitemap.mdx") {
      const slug = blogPostPath.replace(".mdx", "");
      paths.push({
        params: {
          slug,
        },
      });
    }
  }

  return {
    paths,
    fallback: "blocking",
  };
}



export async function getStaticProps(
  ctx: GetStaticPropsContext<{
    slug: string;
  }>
) {
  const { slug } = ctx.params!;

  // Continue with your existing code to retrieve the MDX content for valid slugs
  const postFile = fs.readFileSync(
    path.resolve(`./src/_posts/${slug}.mdx`),
    "utf-8"
  );

  const mdxSource = await serialize(postFile, { parseFrontmatter: true });

  return {
    props: {
      source: mdxSource,
    },
    revalidate: 60,
  };
}

