import { useState } from "react";
import Chevron from "../images/chevron-down.svg?react";

interface Language {
  name: string;
  colour?: string;
}

interface Link {
  name: string;
  url: string;
}

interface DropdownProps {
  expanded?: boolean;
  name: string;
  languages?: Language[];
  description: string;
  links?: Link[];
}

export const Dropdown = (props: DropdownProps) => {
  const [expanded, setExpanded] = useState<boolean>(props.expanded ?? false);

  return (
    <>
      <span className="w-full cursor-pointer flex gap-1 items-center select-none" onClick={() => { setExpanded(!expanded) }}>
        <Chevron height="32px" width="32px" className={`fill-neutral-200 transition duration-200 ${expanded ? "" : "-rotate-90"}`} />
        <p className="text-2xl pr-1">{props.name}</p>
        {(props.languages ?? []).map((language) => <p key={language.name} className="text-zinc-900 leading-tight py-px px-1 rounded-md" style={{ backgroundColor: language.colour ?? "#e5e5e5" }}>{language.name}</p>)}
      </span>
      <div
        className={`grid transition-[grid-template-rows] duration-200 ease-in-out ${
          expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <p>{props.description}</p>
          <div className="flex items-center gap-2">
            {(props.links ?? []).map((link) => (
              <a href={link.url} target="_blank" className="text-lg">{link.name}</a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};