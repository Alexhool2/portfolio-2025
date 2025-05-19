import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { useTranslation } from "react-i18next"

const navItems = [
  { key: "home", href: "#hero" },
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
]

export const Navbar = () => {
  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ja" : "en"
    i18n.changeLanguage(newLang)
  }
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background2/80 background-blur-md shadow-xs"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary2 flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow2 text-foreground2">Moura Alex</span>
            {""} Portolio
          </span>
        </a>

        {/* desktop nav*/}
        <div className="hidden md:flex space-x-8 items-center">
          <button
            onClick={toggleLanguage}
            className="px-2 py-1 rounded-md bg-primary2/10 hover:bg-primary2/20 text-primary2 transition-colors duration-300"
          >
            {i18n.language === "en" ? "日本語" : "EN"}
          </button>
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground2/80 hover:text-primary2 transition-colors duration-300"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </div>
        {/* mobile nav*/}

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div
          className={cn(
            "fixed inset-0 bg-background2/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl items-center">
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 rounded-md bg-primary2/10 hover:bg-primary2/20 text-primary2 transition-colors duration-300 mb-4"
            >
              {i18n.language === "en" ? "JA" : "EN"}
            </button>
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground2/80 hover:text-primary2 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
