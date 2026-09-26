import SkillPill, {
  type SkillPillProps,
} from "@/components/skills/skills-pill";
import FadeRight from "@/animation/fade-right";

import { useScreenBreakpoint } from "@/hooks/useScreenBreakpoint";
import { useDebounceValue } from "@/hooks/useDebounceValue";

export interface SkillsShowcaseProps {
  skills: {
    sectionName: string;
    skills: SkillPillProps[];
  }[];
}

export default function SkillsShowcase({ skills }: SkillsShowcaseProps) {
  const isMobile = useScreenBreakpoint(640);
  const isMobileDebonced = useDebounceValue(isMobile, 600);

  return (
    <section className="px-6 py-24 sm:px-14 md:px-20 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Toolkit
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Skills
          </h2>
          <p className="mt-3 max-w-2xl text-base font-medium text-muted-foreground">
            The stack I reach for most when building retrieval pipelines,
            backend APIs and data layers.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((section) => (
            <div
              key={section.sectionName}
              className="flex flex-col rounded-2xl border border-border bg-white p-6 transition-shadow duration-200 hover:shadow-lg hover:shadow-accent/5 dark:bg-zinc-800/40"
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-6 shrink-0 bg-accent" />
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {section.sectionName}
                </h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {section.skills.map((pill, index) => (
                  <li key={pill.name}>
                    <FadeRight
                      duration={0.4}
                      delay={0.05 * index}
                      whileInView={!isMobileDebonced}
                      className="-z-10 block"
                    >
                      <SkillPill {...pill} />
                    </FadeRight>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
