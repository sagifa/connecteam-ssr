import { Box } from "@chakra-ui/react";
import Hero from "../components/hero/Hero";
import { FILE_PATHS } from "../utils/consts";
import { getPath } from "../utils/helpers";
import Main from "./Main";

type homeDataType = {
  title: string;
  slug: string;
  content: {
    hero: {
      title: string;
      subtitle: string;
      links: {
        primary: boolean;
        href: string;
        label: string;
        icon?: string;
      }[];
    };
    items: {
      name: string;
      linkLabel: string;
      layout: string;
      additionalLinks?: {
        href: string;
        label: string;
        icon: string;
      }[];
    }[];
  };
};
export async function getServerSideProps() {
  // Fetch data from external API
  const homeRes = await fetch(getPath(FILE_PATHS.HOME, "data"));

  const footerRes = await fetch(getPath(FILE_PATHS.FOOTER, "data"));
  const footer = await footerRes.json();

  const home: homeDataType = await homeRes.json();
  const requests: Promise<any>[] = [];
  home.content.items.map((section) => {
    requests.push(
      fetch(getPath(section.name + ".json", "data")).then((res) => res.json())
    );
  });

  const sections = await Promise.all(requests);

  return { props: { sections, footer, home } };
}

export default function Home(props: any) {
  return <Main {...props} />;
}
