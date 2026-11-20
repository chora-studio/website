import { buildFeed } from "utils/buildFeed";

export const revalidate = false;

export async function GET() {
  return new Response(buildFeed().json1(), {
    headers: {
      "Content-Type": "application/feed+json; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
