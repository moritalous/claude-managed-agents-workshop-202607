// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { unified } from '@astrojs/markdown-remark';
import rehypeExternalLinks from 'rehype-external-links';

const base = '/claude-managed-agents-workshop-202607';

// 本文中のルート相対リンク(/guide/…など)にbaseを付与する
function rehypeBaseLinks() {
	const walk = (node) => {
		if (node.type === 'element' && node.tagName === 'a') {
			const href = node.properties?.href;
			if (typeof href === 'string' && href.startsWith('/') && !href.startsWith('//') && !href.startsWith(`${base}/`)) {
				node.properties.href = base + href;
			}
		}
		for (const child of node.children ?? []) walk(child);
	};
	return (tree) => walk(tree);
}

// https://astro.build/config
export default defineConfig({
	site: 'https://moritalous.github.io',
	base,
	markdown: {
		processor: unified({
			rehypePlugins: [
				[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
				rehypeBaseLinks,
			],
		}),
	},
	integrations: [
		starlight({
			title: 'Claude Managed Agents Workshop',
			description:
				'Claude Managed Agents のハンズオン教材。クラウドで動く自律エージェントを自分の手で作って動かします。',
			defaultLocale: 'root',
			locales: {
				root: { label: '日本語', lang: 'ja' },
				en: { label: 'English' },
			},
			customCss: [
				'@fontsource/line-seed-jp/400.css',
				'@fontsource/line-seed-jp/700.css',
				'./src/styles/custom.css',
			],
			social: [
				{ icon: 'rocket', label: 'イベントページ (Luma)', href: 'https://luma.com/claude-e5yf' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/moritalous' },
			],
			sidebar: [
				{
					label: 'はじめに',
					translations: { en: 'Getting Started' },
					items: [
						{ label: '事前準備', translations: { en: 'Preparation' }, slug: 'guide/preparation' },
						{ label: 'Claude Managed Agents とは', translations: { en: 'What are Claude Managed Agents' }, slug: 'guide/introduction' },
					],
				},
				{
					label: '初級',
					translations: { en: 'Beginner' },
					items: [{ autogenerate: { directory: 'beginner/' } }]
				},
				{
					label: '中級',
					translations: { en: 'Intermediate' },
					items: [{ autogenerate: { directory: 'intermediate/'}}]
				},
				{
					label: '上級',
					translations: { en: 'Advanced' },
					items: [{ autogenerate: { directory: 'advanced/'}}]
				},
				{
					label: '参考資料',
					translations: { en: 'Reference' },
					items: [
						{ label: 'トラブルシューティング', translations: { en: 'Troubleshooting' }, slug: 'reference/troubleshooting' },
						{ label: 'リンク集・次のステップ', translations: { en: 'Links & Next Steps' }, slug: 'reference/links' },
						{ label: '参加者のブログ', translations: { en: 'Participant Blogs' }, slug: 'reference/blogs' },
					],
				},
			],
		}),
	],
});
