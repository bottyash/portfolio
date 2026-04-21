import { tool } from 'ai';
import { z } from 'zod';

export const getProjects = tool({
  description:
    'This tool will show a list of all projects made by Yash Parmar, fetched from GitHub.',
  parameters: z.object({}),
  execute: async () => {
    try {
      const baseUrl = process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : 'http://localhost:3000';

      const res = await fetch(`${baseUrl}/api/projects`);
      const data = await res.json();

      if (data.projects && data.projects.length > 0) {
        const projectList = data.projects
          .map(
            (p: { title: string; description: string; category: string; githubUrl: string }) =>
              `- **${p.title}** (${p.category}): ${p.description} [GitHub](${p.githubUrl})`
          )
          .join('\n');

        return `Here are all my projects! Don't hesitate to ask me more about them!\n\n${projectList}`;
      }

      return "Here are all my projects! Don't hesitate to ask me more about them!";
    } catch {
      return "Here are all my projects! Don't hesitate to ask me more about them!";
    }
  },
});