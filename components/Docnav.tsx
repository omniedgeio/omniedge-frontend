import { FunctionComponent } from "react";
import { ArticleMeta } from "./interfaces/article";
import { Link} from "@chakra-ui/react"
interface IProps {
	article: ArticleMeta;
}

interface IPropss {
	articles: ArticleMeta[];
}

export const Docnav: FunctionComponent<IProps> = ({ article }) => {
	return (
        <Link href={`/docs/article/${article.slug}`} color="gray.500" fontWeight="medium">
        {article.title}
      </Link>
	);
}

export const Docnavs: FunctionComponent<IPropss> = ({ articles }) => {
	return (<>
    {articles.map((article, i) => (
      <Link href={`/docs/article/${article.slug}`} color="gray.500" fontWeight="medium">
      {article.title}
    </Link>
  ))}
  </>
	);
}