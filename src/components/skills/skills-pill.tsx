import { FC, SVGProps } from "react";

export type SkillPillProps = {
  name: string;
  icon: FC<SVGProps<SVGSVGElement>>;
};

export default function SkillPill(props: SkillPillProps) {
  const { name, icon: Icon } = props;
  return (
    <div className="flex w-max items-center gap-2 rounded-lg border border-accent/20 bg-background px-3 py-2 text-sm shadow-sm transition-colors duration-200 hover:border-accent/50">
      <Icon className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
      <span className="font-medium">{name}</span>
    </div>
  );
}
