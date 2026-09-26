import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";
import { siteMetadata } from "@/data/siteMetaData.mjs";

const SNIPPET = [
  "# retrieval-augmented generation",
  "from langchain.chains import RetrievalQA",
  "from llama_index import VectorStoreIndex",
  "from milvus import MilvusClient",
  "",
  "client = MilvusClient(uri=milvus_uri)",
  "index = VectorStoreIndex.from_documents(docs, store=client)",
  "",
  "chain = RetrievalQA.from_chain_type(",
  "    llm=llm,",
  "    retriever=index.as_retriever(similarity_top_k=5),",
].join("\n");

function Terminal() {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-border bg-white shadow-xl shadow-accent/5 dark:bg-zinc-900">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className="ml-2 text-xs text-muted-foreground">rag_pipeline.py</span>
      </div>
      <pre className="overflow-x-auto p-5 text-[13px] leading-relaxed">
        <code>
          {SNIPPET.split("\n").map((line, i) => (
            <span
              key={i}
              className={
                line.trimStart().startsWith("#")
                  ? "block text-muted-foreground"
                  : "block"
              }
            >
              {line || " "}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}

export default function LandingHero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const socials = [
    { label: "GitHub", href: siteMetadata.github, Icon: GithubIcon },
    { label: "LinkedIn", href: siteMetadata.linkedin, Icon: LinkedinIcon },
  ].filter((social) => Boolean(social.href));

  return (
    <motion.section
      animate={{
        transform: "translateY(" + progress * 12 + "vh)",
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="pointer-events-none flex min-h-[calc(100vh-180px)] items-center px-6 pt-20 sm:px-14 md:px-20"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <AnimatePresence>
            <FadeUp key="eyebrow" duration={0.5}>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                {siteMetadata.location}
              </span>
            </FadeUp>
            <FadeUp key="title" duration={0.6} delay={0.1}>
              <h1 className="mt-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
                {siteMetadata.headerTitle}
              </h1>
            </FadeUp>
            <FadeUp key="role" duration={0.6} delay={0.2}>
              <p className="mt-3 text-xl font-semibold text-accent sm:text-2xl md:text-3xl">
                Python Developer{" "}
                <span className="text-muted-foreground">|</span> GenAI Engineer
              </p>
            </FadeUp>
            <FadeUp key="description" duration={0.6} delay={0.3}>
              <p className="mt-6 max-w-xl text-base font-medium text-muted-foreground sm:text-lg">
                I build GenAI and LLM-powered applications: retrieval-augmented
                pipelines, Text2SQL, and fast, well-tested backend APIs with
                FastAPI, LangChain, LlamaIndex and Milvus.
              </p>
            </FadeUp>
            <FadeUp key="cta" duration={0.6} delay={0.4}>
              <div className="pointer-events-auto mt-9 flex flex-wrap items-center gap-3">
                <a
                  href={"mailto:" + siteMetadata.email}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-transform duration-200 hover:scale-[1.03]"
                >
                  <MailIcon className="h-4 w-4" />
                  Get in touch
                </a>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
                >
                  About me
                </Link>
              </div>
            </FadeUp>
            <FadeUp key="socials" duration={0.6} delay={0.5}>
              <div className="pointer-events-auto mt-8 flex items-center gap-3">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </FadeUp>
          </AnimatePresence>
        </div>

        <div className="pointer-events-auto w-full">
          <FadeUp key="terminal" duration={0.8} delay={0.25}>
            <Terminal />
          </FadeUp>
        </div>
      </div>
    </motion.section>
  );
}
