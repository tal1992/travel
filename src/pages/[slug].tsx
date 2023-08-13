import fs from "fs";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import H1 from "../components/mdx/H1";
import React from "react";
import P from "../components/mdx/P";
import H2 from "../components/mdx/H2";
import { MainLayout } from "../components/Layout/MainLayout";
import { ArticleHero } from "../components/mdx/ArticleHero";

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
              p: P,
              Date: PublishDate,
            }}
          />
        </div>
      </div>
      <Footer/>
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
  const postFile = fs.readFileSync(`src/_posts/${slug}.mdx`);

  // read the MDX serialized content along with the frontmatter
  // from the .mdx blog post file
  const mdxSource = await serialize(postFile, { parseFrontmatter: true });
  return {
    props: {
      source: mdxSource,
    },
  };
}
