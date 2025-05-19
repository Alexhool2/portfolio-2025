import { ArrowUp } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-background2 relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      <p className="text-sm text-muted-foreground2">
        &copy; {new Date().getFullYear()} Alex Moura developer. All rights
        reserved
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary2/10 hover:bg-primary2/20 text-primary2 transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  )
}
