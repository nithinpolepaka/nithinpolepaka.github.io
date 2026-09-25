import Head from "next/head";

import { NextSeo } from "next-seo";

import LandingHero from "@/components/landing-hero";
import SkillsShowcase from "@/components/skills/skills-showcase";
import { SKILLS_DATA } from "@/data/skills";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Nithin Emmanuel | Python Developer | GenAI Engineer"
        description="Explore the professional portfolio of Nithin Emmanuel, a Python Developer specializing in GenAI and LLM applications. Discover projects built with FastAPI, LangChain, LlamaIndex, and Milvus."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Nithin Emmanuel - Python Developer | GenAI Engineer",
          description:
            "Dive into the work of Nithin Emmanuel, a Python Developer building GenAI and LLM-powered applications with FastAPI, LangChain, and LlamaIndex.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Nithin Emmanuel - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Python Developer, GenAI Engineer, LLM Applications, FastAPI, LangChain, LlamaIndex, Milvus, RAG, Text2SQL, Portfolio",
          },
        ]}
      />
      <Head>
        {siteMetadata.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={siteMetadata.googleSiteVerification}
          />
        )}
      </Head>
      <LandingHero />
      <SkillsShowcase skills={SKILLS_DATA} />
    </>
  );
}
