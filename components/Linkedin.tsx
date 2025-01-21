import { Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function LinkedInButton() {
  return (
    <Link
      href="https://www.linkedin.com/in/aleksandra-kli%C5%84ska-a983352b9"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center border-red justify-center w-12 h-12 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors rounded-md hover:border-white"
      aria-label="Visit LinkedIn Profile"
    >
      <Linkedin className="w-5 h-5 text-red" />
    </Link>
  )
}

