import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function About() {
  return (
    <>
      <NextSeo
        title="About Nithin Emmanuel | Python Developer | GenAI Engineer"
        description="Learn more about Nithin Emmanuel, a Python Developer specializing in GenAI and LLM applications. Discover the journey, skills, and experience building Retrieval-Augmented Generation systems."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "Learn About Nithin Emmanuel - Python Developer | GenAI Engineer",
          description:
            "Dive into the story of Nithin Emmanuel, a Python Developer. Uncover the experience, skills, and passion for building GenAI-powered applications.",
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
              "Python Developer portfolio, GenAI Engineer, LLM Applications, FastAPI, LangChain, LlamaIndex, Milvus, RAG, Professional Journey, Skills",
          },
        ]}
      />
      <AboutHero />
      <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}
