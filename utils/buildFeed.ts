import { Feed } from "feed";
import { getArtifacts } from "utils";

// const SITE_URL = "http://localhost:3000";
const SITE_URL = "https://chora.studio";

function getAllArtifacts() {
  return [
    // ...getArtifacts('about'),
    ...getArtifacts('concepts'),
    // ...getArtifacts('tutorials'),
  ]
}

export function buildFeed() {
  const feed = new Feed({
    title: "Chora Studio's Feed",
    description: "Chora Studio's Feed",
    id: SITE_URL,
    link: SITE_URL,
    language: "en",
    favicon: `${SITE_URL}/favicon.ico`,
    feedLinks: {
      atom: `${SITE_URL}/feed/atom`,
      json: `${SITE_URL}/feed/json`,
      rss2: `${SITE_URL}/feed/rss`,
    },
    author: { name: "Chora Studio" },
    copyright: "Creative Commons",
    ttl: 60,
  });

  for (const a of getAllArtifacts()) {
    feed.addItem({
      title: a.title,
      id: `${SITE_URL}/${a.category}/${a.id}`,
      link: `${SITE_URL}/${a.category}/${a.id}`,
      description: a.description,
      date: a.updated,
      published: a.created,
      author: [{ name: a.author }],
      category: [{ name: a.category }],
      // content: a.content,
      // audio: a.audio,
      // video: a.video,
      copyright: "Creative Commons",
    });
  }

  return feed;
}
