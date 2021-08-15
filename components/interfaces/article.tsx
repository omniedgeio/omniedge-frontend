interface ArticleMeta {
	title: string;
	slug: string;
	author:string;
	avatar:string;
	description: string;
	thumbnail: string;
	date:Date;
	route:String;
	readtime: BigInt;
	index: BigInteger;
}

interface ArticleInfo {
	meta: ArticleMeta;
	content: string;
}

export type {
	ArticleMeta,
	ArticleInfo
}
