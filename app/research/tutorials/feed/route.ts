import { Feed } from "feed";
import { getArtifacts } from "utils";

const SITE_URL = "https://chora.studio/research/tutorials";

function getAllArtifacts() {
  return [
    ...getArtifacts('tutorials'),
  ]
}

export const revalidate = false;

export async function GET() {
  const feed = new Feed({
    title: "chora research (tutorials)",
    description: "chora research (tutorials)",
    id: SITE_URL,
    link: SITE_URL,
    language: "en",
    feedLinks: { rss2: `${SITE_URL}/feed` },
    ttl: 60,
  });

  for (const a of getAllArtifacts()) {
    feed.addItem({
      title: a.title,
      id: `${SITE_URL}/${a.id}`,
      link: `${SITE_URL}/${a.id}`,
      description: a.description,
      date: a.created,
    });
  }

  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
