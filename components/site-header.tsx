import Image from 'next/image';
import { ModeToggle } from '@/components/theme-toggle';
import { MessagesSquare, Mic2, Ticket, Lightbulb, Menu, Calendar, Users, ChevronDown, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';

export function SiteHeader() {
    const internalLinks = [
        {
            href: '/speakers',
            label: 'Speakers',
            icon: Users,
        },
        {
            href: '/agenda',
            label: 'Agenda',
            icon: Calendar,
        },
    ];

    const externalLinks = [
        {
            href: 'https://www.entrio.hr/event/devfest-2025-21473',
            label: 'Get Tickets',
            icon: Ticket,
            highlight: true,
        },
        {
            href: 'https://linktr.ee/zagrebgdg',
            label: 'Talk to us!',
            icon: MessagesSquare,
        },
        {
            href: 'https://docs.google.com/forms/d/e/1FAIpQLScrrAm6aIN9C2WPPI3Ir1xQmtXz67SOE-qhE97YarNaPFiq9w/viewform',
            label: 'Become a speaker!',
            icon: Mic2,
        },
        {
            href: 'https://docs.google.com/forms/d/e/1FAIpQLSeUlJI3paMOEgSJXL1gFvVRUYFQIdN0stdrgXtNKVRzgG3Elg/viewform',
            label: 'Become a pitcher!',
            icon: Lightbulb,
        },
    ];

    return (
        <header className='supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur'>
            <div className='container flex h-14 items-center'>
                <Link href={'/'}>
                    <div className='flex gap-x-2 hover:opacity-80 transition-opacity'>
                        <Image
                            src={'/GDG.png'}
                            height={35}
                            width={35}
                            alt={'GDG logo'}
                        />
                        <div className='text-md mt-1 hidden lg:inline font-medium'>
                            Google Developer Groups
                        </div>
                    </div>
                </Link>

                <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
                    <div className='w-full flex-1 md:w-auto md:flex-none'></div>

                    {/* Desktop Navigation */}
                    <nav className='hidden md:flex items-center gap-x-2'>
                        {/* Internal Navigation Links */}
                        {internalLinks.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Link key={item.label} href={item.href}>
                                    <Button variant={'ghost'} size="sm" className="h-9">
                                        <Icon className='h-4 w-4 mr-2' />
                                        {item.label}
                                    </Button>
                                </Link>
                            );
                        })}

                        {/* Divider */}
                        <div className='h-6 w-px bg-border' />

                        {/* Get Tickets - Highlighted */}
                        <Link href={externalLinks[0].href} target='_blank' rel='noopener noreferrer'>
                            <Button size="sm" className="h-9 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                                <Ticket className='h-4 w-4 mr-2' />
                                Get Tickets
                            </Button>
                        </Link>

                        {/* More Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm" className="h-9">
                                    More
                                    <ChevronDown className='h-4 w-4 ml-1' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56">
                                <DropdownMenuLabel>Get Involved</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                {externalLinks.slice(1).map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <DropdownMenuItem key={item.label} asChild>
                                            <Link
                                                href={item.href}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className="flex items-center justify-between cursor-pointer"
                                            >
                                                <div className="flex items-center gap-x-2">
                                                    <Icon className='h-4 w-4' />
                                                    <span>{item.label}</span>
                                                </div>
                                                <ExternalLink className='h-3 w-3 opacity-50' />
                                            </Link>
                                        </DropdownMenuItem>
                                    );
                                })}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <ModeToggle />
                    </nav>

                    {/* Mobile Navigation */}
                    <div className='flex md:hidden items-center gap-x-2'>
                        <ModeToggle />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm" className="h-9 w-9 p-0">
                                    <Menu className="h-4 w-4" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56">
                                <DropdownMenuLabel>Navigation</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                {/* Internal Links */}
                                {internalLinks.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <DropdownMenuItem key={item.label} asChild>
                                            <Link
                                                href={item.href}
                                                className="flex items-center gap-x-2 cursor-pointer"
                                            >
                                                <Icon className='h-4 w-4' />
                                                <span>{item.label}</span>
                                            </Link>
                                        </DropdownMenuItem>
                                    );
                                })}
                                <DropdownMenuSeparator />
                                <DropdownMenuLabel>Get Involved</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                {/* External Links */}
                                {externalLinks.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <DropdownMenuItem key={item.label} asChild>
                                            <Link
                                                href={item.href}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className="flex items-center justify-between cursor-pointer"
                                            >
                                                <div className="flex items-center gap-x-2">
                                                    <Icon className='h-4 w-4' />
                                                    <span>{item.label}</span>
                                                </div>
                                                <ExternalLink className='h-3 w-3 opacity-50' />
                                            </Link>
                                        </DropdownMenuItem>
                                    );
                                })}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </header>
    );
}