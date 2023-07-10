import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Github, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by GDG Zagreb with love.
        </p>
        <div className="flex flex-row">
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <div className={cn('w-9 px-0')}>
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <div className={cn('w-9 px-0')}>
              <Twitter className="h-4 w-4 fill-current" />
              <span className="sr-only">Twitter</span>
            </div>
          </Link>
          <Link
            href={siteConfig.links.linkedIn}
            target="_blank"
            rel="noreferrer"
          >
            <div className={cn('w-9 px-0')}>
              <Linkedin className="h-4 w-4 fill-current" />
              <span className="sr-only">LinkedIn</span>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}
