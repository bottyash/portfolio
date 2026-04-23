export async function GET() {
  const res = await fetch('https://api.github.com/users/bottyash/repos?per_page=100', {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github.v3+json',
    },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    return new Response('Failed to fetch stars', { status: res.status });
  }

  const repos: { stargazers_count: number }[] = await res.json();
  const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);
  return Response.json({ stars: totalStars });
}