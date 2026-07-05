import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import fs from 'node:fs/promises';

// 各ドキュメントページのURL末尾に .md を付けると、MDXの生ファイルを返す
export const getStaticPaths = (async () => {
	const docs = await getCollection('docs');
	return docs
		.filter((entry) => entry.filePath)
		.map((entry) => ({
			params: { slug: entry.id },
			props: { filePath: entry.filePath as string },
		}));
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
	const raw = await fs.readFile(props.filePath, 'utf-8');
	return new Response(raw, {
		headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
	});
};
