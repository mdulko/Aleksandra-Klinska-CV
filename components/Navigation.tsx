import Link from 'next/link'
import {useEffect, useRef} from "react";


interface NavItem {
  label: string
  number: string
  href: string
}



interface NavigationProps {
  navItems: NavItem[]
  onSectionChange: (section: string) => void
}


export default function Navigation({ navItems, onSectionChange }: NavigationProps) {
  const refs = useRef<{ [key: string]: HTMLLIElement | null }>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onSectionChange(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    Object.values(refs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [onSectionChange])

  const scrollToSection = (href: string) => {
    const sectionId = href.replace("#", "")
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }


  return (
    <nav className="p-4">
      <div className="max-w-screen-xl mx-auto mt-8">
        <ul className="flex items-center justify-center space-x-8">
          {navItems.map((item) => (
            <li key={item.label} className="relative">
              <Link
                href={item.href}
                className="flex items-center text-gray hover:text-white transition-colors group"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
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

