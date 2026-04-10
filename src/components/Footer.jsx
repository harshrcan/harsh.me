import { Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="border-t border-portfolio-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-portfolio-text-muted">
          &copy; {new Date().getFullYear()} Harsh Rana
        </p>
        <p className="text-sm text-portfolio-text-muted flex items-center gap-1.5">
          Built with <Heart size={14} className="text-portfolio-accent" /> using React & Tailwind
        </p>
      </div>
    </footer>
  )
}

export default Footer
