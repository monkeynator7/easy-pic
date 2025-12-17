'use client'
import { ArrowRight, Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Testimonials from './testimonials'
import Pricing from './pricing'
import { ModeToggle } from './toggle'

const menuItems = [
    { name: 'Features', href: '#' },
    { name: 'Solution', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'About', href: '#' },
]

export default function HeroSection() {
    const [menuState, setMenuState] = useState(false)
    return (
        <>
            <header>
                <nav
                    data-state={menuState && 'active'}
                    className="fixed z-20 w-full border-b border-dashed bg-white backdrop-blur md:relative dark:bg-zinc-950/50 lg:dark:bg-transparent">
                    <div className="m-auto max-w-5xl px-6">
                        <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                            <div className="flex w-full justify-between lg:w-auto">
                                <Link
                                    href="/"
                                    aria-label="home"
                                    className="flex items-center space-x-2">
                                    <Image
                                        src="/easy-pic.png"
                                        alt="easy pic logo"
                                        width={170}
                                        height={60}
                                        className="h-10 w-auto"
                                    />
                                </Link>

                                <button
                                    onClick={() => setMenuState(!menuState)}
                                    aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                    className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                    <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                    <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                                </button>
                            </div>

                            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                                <div className="lg:pr-4">
                                    <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                                        {menuItems.map((item, index) => (
                                            <li key={index}>
                                                <Link
                                                    href={item.href}
                                                    className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                    <span>{item.name}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex items-center lg:ml-4">
                                    <ModeToggle />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <main>
                <section className="overflow-hidden">
                    <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-20">
                        <div className="lg:flex lg:items-center lg:gap-12">
                            <div className="relative z-10 mx-auto max-w-xl text-center lg:ml-0 lg:w-1/2 lg:text-left">
                                <div
                                    className="rounded-(--radius) mx-auto flex w-fit items-center gap-2 border p-1 pr-3 lg:ml-0">
                                    <span className="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs">📍</span>
                                    <span className="text-sm">Torre Ligure, Concepción</span>
                                    <span className="bg-(--color-border) block h-4 w-px"></span>

                                    <ArrowRight className="size-4" />
                                </div>

                                <h1 className="mt-10 text-balance text-4xl font-bold md:text-5xl xl:text-5xl">Fotografias. Fáciles. Rápidas.</h1>
                                <p className="mt-8">Para tu Linkedin, Instagram, Carnet o Retratos. Deja que nosotros nos ocupemos.</p>

                            </div>
                        </div>
                        <div className="absolute inset-0 -mx-4 hidden lg:block">
                            <div className="relative h-full w-full overflow-hidden">

                                <div className="absolute inset-0 flex h-full w-full items-center justify-end mt-20">
                                    <div className="flex h-3/4 w-3/4 items-center justify-end gap-4 opacity-30 pr-8">
                                        <div className="relative h-full w-full flex-1 overflow-hidden opacity-60">
                                            <Image
                                                src="/foto2.jpg"
                                                alt="app illustration"
                                                fill
                                                className="object-cover"
                                                sizes="25vw"
                                            />
                                        </div>
                                        <div className="relative h-full w-full flex-1 overflow-hidden">
                                            <Image
                                                src="/foto3.jpg"
                                                alt="app illustration"
                                                fill
                                                className="object-cover"
                                                sizes="25vw"
                                            />
                                        </div>
                                        <div className="relative h-full w-full flex-1 overflow-hidden">
                                            <Image
                                                src="/foto4.jpg"
                                                alt="app illustration"
                                                fill
                                                className="object-cover"
                                                sizes="25vw"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    <section>
                        <Testimonials />
                    </section>
                    <section>
                        <Pricing />
                    </section>
                </section>
            </main>
        </>
    )
}
