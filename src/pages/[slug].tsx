import fs from "fs";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import H1 from "../components/mdx/H1";
import React from "react";
import Paragraph from "../components/mdx/Paragraph";
import H2 from "../components/mdx/H2";
import H3 from "../components/mdx/H3";
import List from "../components/mdx/List";
import LI from "../components/mdx/LI";
import Strong from "../components/mdx/strong";
import { MainLayout } from "../components/Layout/MainLayout";
import { ArticleHero } from "../components/mdx/ArticleHero";
import path from 'path';
import { Footer } from "../components/Footer";
import PublishDate from "../components/mdx/PublishDate";

export default function PostPage({
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <MainLayout>
      <div className="px-5 md:px-20 pb-10 md:pb-20">
        <div>
          <Head>
            <title>{source.frontmatter.title as string}</title>
          </Head>
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
      <Footer />
    </MainLayout>
  );
}
export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

export async function getStaticProps(
  ctx: GetStaticPropsContext<{
    slug: string;
  }>
) {
  const { slug } = ctx.params!;

  // retrieve the MDX blog post file associated
  // with the specified slug parameter
  const postFile = fs.readFileSync(path.resolve(`./src/_posts/${slug}.mdx`), 'utf-8')

  // read the MDX serialized content along with the frontmatter
  // from the .mdx blog post file
  const mdxSource = await serialize(postFile, { parseFrontmatter: true });

  return {
    props: {
      source: mdxSource,
    },
    // enable ISR
    revalidate: 60,
  };
}
