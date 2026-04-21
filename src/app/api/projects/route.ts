import { GitHubRepo, MergedProject, ProjectsConfig } from '@/types/projects';
import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const CONFIG_PATH = path.join(process.cwd(), 'src', 'data', 'projects-config.json');

async function readConfig(): Promise<ProjectsConfig> {
    try {
        const raw = await fs.readFile(CONFIG_PATH, 'utf-8');
        return JSON.parse(raw);
    } catch {
        return { repos: {} };
    }
}

function inferCategory(repo: GitHubRepo): string {
    const lang = (repo.language || '').toLowerCase();
    const topics = repo.topics.map((t) => t.toLowerCase());
    const desc = (repo.description || '').toLowerCase();

    if (topics.includes('machine-learning') || topics.includes('ai') || topics.includes('data-science') || lang === 'jupyter notebook' || desc.includes('ml') || desc.includes('ai')) {
        return 'AI/ML';
    }
    if (topics.includes('web') || lang === 'typescript' || lang === 'javascript') {
        return 'Web Development';
    }
    if (topics.includes('iot') || topics.includes('arduino') || topics.includes('embedded')) {
        return 'IoT & Hardware';
    }
    if (lang === 'python') {
        return 'Python';
    }
    return 'Project';
}

function formatTitle(name: string): string {
    return name
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase());
}

// GET — returns merged, display-ready project list (only visible ones)
export async function GET() {
    try {
        // Fetch GitHub repos
        const ghRes = await fetch('https://api.github.com/users/bottyash/repos?per_page=100&sort=updated', {
            headers: {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                Accept: 'application/vnd.github.v3+json',
            },
            next: { revalidate: 3600 },
        });

        if (!ghRes.ok) {
            console.error('[Projects API] GitHub fetch failed:', ghRes.status);
            return NextResponse.json({ projects: [] });
        }

        const allRepos: GitHubRepo[] = await ghRes.json();
        const repos = allRepos.filter((r) => !r.fork);

        // Read config
        const config = await readConfig();

        // Merge
        const merged: MergedProject[] = repos.map((repo) => {
            const cfg = config.repos[repo.name] || {};
            return {
                repoName: repo.name,
                githubUrl: repo.html_url,
                homepage: repo.homepage,
                language: repo.language,
                stars: repo.stargazers_count,
                topics: repo.topics || [],
                updatedAt: repo.updated_at,
                title: cfg.title || formatTitle(repo.name),
                description: cfg.description || repo.description || 'No description available.',
                category: cfg.category || inferCategory(repo),
                visible: cfg.visible ?? false,
                order: cfg.order ?? 999,
            };
        });

        // Return only visible, sorted by order
        const visible = merged
            .filter((p) => p.visible)
            .sort((a, b) => a.order - b.order);

        return NextResponse.json({ projects: visible });
    } catch (err) {
        console.error('[Projects API] Error:', err);
        return NextResponse.json({ projects: [] });
    }
}
