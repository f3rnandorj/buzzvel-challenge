import { BetaItem } from "./components/BetaItem";
import { RequestDemoLink } from "./components/RequestDemoLink";
import { SectionListProps } from "./components/SectionList";

export const navSectionsToMap: SectionListProps[] = [
  {
    title: "Product",
    items: ["Pricing", "Overview", "Browse"],
    CustomItem: <BetaItem text="Accessibility" />,
  },
  {
    title: "Solutions",
    items: ["Brainstorming", "Ideation", "Wireframing", "Research"],
  },
  {
    title: "Resources",
    items: ["Help Center", "Blog", "Tutorials", "FAQs"],
  },
  {
    title: "Support",
    items: ["Contact Us", "Developers", "Documentation", "Integrations"],
  },
  {
    title: "Company",
    items: ["About", "Press", "Events"],
    CustomItem: <RequestDemoLink href="" />,
  },
];
