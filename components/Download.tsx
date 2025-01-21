import { Download } from 'lucide-react'

export default function DownloadCVButton() {
  const handleDownload = () => {
    // Replace this URL with your actual CV file URL
    const cvUrl = '/path-to-your-cv.pdf'

    // Create a temporary anchor element
    const link = document.createElement('a')
    link.href = cvUrl
    link.download = 'Aleksandra_Klinska_CV_2025.pdf' // The name the file will be downloaded as
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <button
      onClick={handleDownload}
      className="bg-background border-red border rounded-md hover:border-white text-white px-6 py-2 flex items-center gap-2 transition-colors"
      aria-label="Download CV"
    >
      <span className="text-sm text-red tracking-wider font-normal">DOWNLOAD CV</span>
      <Download className="w-4 h-4 text-red" />
    </button>
  )
}

