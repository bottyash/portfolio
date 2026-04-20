// File: data.tsx

import Image from 'next/image';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// --- PROJECT DATABASE ---
// This array holds the detailed information for each project.
const PROJECT_CONTENT = [
  {
    title: 'GCET Management System',
    description:
      'A departmental full-stack project which aimed at improving pre-existing home-grown College Management Infrastructure. Built with modern web technologies featuring APIs, payment modules, and real-time development capabilities.',
    techStack: [
      'Full Stack',
      'APIs',
      'Payment Modules',
      'Real-Time Development',
      'Database Systems',
    ],
    date: 'Jan 2025 – May 2025',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/bottyash',
      },
    ],
    images: [] as { src: string; alt: string }[],
  },
  {
    title: 'The Voice',
    description:
      'A Data Collection initiation idea to help Language Data Collection for Machine Learning implementations. This research/ideation project explores innovative approaches to collecting and processing language data for AI/ML applications.',
    techStack: [
      'Artificial Intelligence',
      'Machine Learning',
      'Data Science',
      'Natural Language Processing',
    ],
    date: 'Aug 2024 – Feb 2025',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/bottyash',
      },
    ],
    images: [] as { src: string; alt: string }[],
  },
  {
    title: 'Smart Attendance System',
    description:
      'An IoT and Android-based smart attendance system built during diploma, combining hardware sensors with a mobile application for efficient and automated attendance tracking.',
    techStack: [
      'IoT',
      'Android',
      'Arduino',
      'Embedded Systems',
      'Mobile Development',
    ],
    date: 'May 2022 – May 2023',
    links: [] as { name: string; url: string }[],
    images: [] as { src: string; alt: string }[],
  },
  {
    title: 'AI-Native Portfolio',
    description:
      'This AI-powered interactive portfolio you\'re looking at right now! It features an AI avatar that answers questions about me in real time, built with Next.js, React, and Mistral AI.',
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Mistral AI API',
      'Vercel',
    ],
    date: 'March 2026',
    links: [
      {
        name: 'Live Demo - You Are Here!',
        url: 'https://yashkparmar.vercel.app',
      },
      {
        name: 'GitHub Repository',
        url: 'https://github.com/bottyash/',
      },
    ],
    images: [] as { src: string; alt: string }[],
  },
];

// --- COMPONENT & INTERFACE DEFINITIONS ---
// Define interface for project prop
interface ProjectProps {
  title: string;
}

// This component dynamically renders the project details
const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data from the database
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// --- MAIN DATA EXPORT ---
// This is the data used by your main portfolio page.
export const data = [
  {
    category: 'Full-Stack',
    title: 'GCET Management System',
    src: '/projects/gms-preview.png',
    content: (
      <ProjectContent project={{ title: 'GCET Management System' }} />
    ),
  },
  {
    category: 'AI/ML Research',
    title: 'The Voice',
    src: '/projects/voice-preview.png',
    content: (
      <ProjectContent project={{ title: 'The Voice' }} />
    ),
  },
  {
    category: 'IoT & Mobile',
    title: 'Smart Attendance System',
    src: '/projects/attendance-preview.png',
    content: (
      <ProjectContent project={{ title: 'Smart Attendance System' }} />
    ),
  },
  {
    category: 'AI & Next.js',
    title: 'AI-Native Portfolio',
    src: '/projects/ai-portfolio-preview.png',
    content: (
      <ProjectContent project={{ title: 'AI-Native Portfolio' }} />
    ),
  },
];