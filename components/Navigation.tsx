'use client'

import Link from 'next/link'

interface NavItem {
  label: string
  number: string
  href: string
}

const navItems: NavItem[] = [
  {
    label: 'ABOUT',
    number: '01',
    href: '/',
  },
  {
    label: 'PORTFOLIO',
    number: '02',
    href: '/',
  },
  {
    label: 'CONTACT',
    number: '03',
    href: '/',
  },
]

export default function Navigation() {
  return (
    <nav className="p-4">
      <div className="max-w-screen-xl mx-auto mt-8">
        <ul className="flex items-center justify-center space-x-8">
          {navItems.map((item) => (
            <li key={item.label} className="relative">
              <Link
                href={item.href}
                className="flex items-center text-gray hover:text-white transition-colors group"
              >
                <span className="absolute -left-6 top-[15%] -translate-y-1/2 text-xs font-light opacity-50 group-hover:opacity-100 transition-opacity transform -rotate-90 origin-right">
                  {item.number}
                </span>
                <span className="text-sm font-medium tracking-wider">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

