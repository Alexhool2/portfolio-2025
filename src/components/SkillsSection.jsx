import { useState } from "react"
import { cn } from "@/lib/utils"
import { useTranslation } from "react-i18next"

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 85, category: "frontend" },
  { name: "TypeScript", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 70, category: "frontend" },

  // Backend
  { name: "Node.js", level: 70, category: "backend" },
  { name: "Express", level: 70, category: "backend" },
  { name: "Golang", level: 85, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "Mysql", level: 80, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 60, category: "tools" },
  { name: "Aws", level: 60, category: "tools" },
]

export const SkillsSection = () => {
  const { t } = useTranslation()
  const categoryMap = {
    [t("skills.all")]: "all",
    [t("skills.frontend")]: "frontend",
    [t("skills.backend")]: "backend",
    [t("skills.tools")]: "tools",
  }

  const categories = Object.keys(categoryMap)
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  )

  const handleCategoryClick = (category) => {
    setActiveCategory(categoryMap[category])
  }

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t("skills.title")}
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              onClick={() => handleCategoryClick(category)}
              key={key}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                categoryMap[category] === activeCategory
                  ? "bg-primary2 text-primary-foreground2"
                  : "bg-secondary2/70 text-foreground2 hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card2 p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary2/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary2 h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
