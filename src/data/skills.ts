import { SiFlask } from "react-icons/si";
import {
  FastApiIcon,
  JiraIcon,
  LangChainIcon,
  LlamaIndexIcon,
  MilvusIcon,
  PytestIcon,
} from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import PythonSvg from "@/public/icons/python.svg";

// Databases
import PostgressSvg from "@/public/icons/postgresql.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import DockerSvg from "@/public/icons/docker.svg";
import PostmanSvg from "@/public/icons/postman.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "Python",
        icon: PythonSvg,
      },
    ],
  },
  {
    sectionName: "GenAI / LLM",
    skills: [
      {
        name: "LangChain",
        icon: LangChainIcon,
      },
      {
        name: "LlamaIndex",
        icon: LlamaIndexIcon,
      },
      {
        name: "FastAPI",
        icon: FastApiIcon,
      },
      {
        name: "Flask",
        icon: SiFlask,
      },
    ],
  },
  {
    sectionName: "Retrieval and Vector Search",
    skills: [
      {
        name: "Milvus",
        icon: MilvusIcon,
      },
    ],
  },
  {
    sectionName: "Databases",
    skills: [
      {
        name: "PostgreSQL / SQL",
        icon: PostgressSvg,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "Docker",
        icon: DockerSvg,
      },
      {
        name: "Postman",
        icon: PostmanSvg,
      },
      {
        name: "JIRA",
        icon: JiraIcon,
      },
      {
        name: "pytest",
        icon: PytestIcon,
      },
    ],
  },
];
