import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { useTranslation } from "react-i18next"

export const ProjectsSection = () => {
  const { t } = useTranslation()

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t("projects.title")}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("projects.subtitle")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              className="group bg-card2 rounded-lg overflow-hidden shadow-xs card2-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={`/portfolio-2025/projects/project${id}.png`}
                  alt={t(`projects.items.${id}.title`)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-2 items-center justify-center">
                  {projects[id - 1].tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-s font-semibold mb-2">
                {t(`projects.items.${id}.title`)}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {t(`projects.items.${id}.description`)}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a
                    href={projects[id - 1].demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={projects[id - 1].githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button2 w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Alexhool2"
          >
            {t("projects.viewGithub")} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

const projects = [
  {
    tags: ["React", "Tailwind", "DaisyUi"],
    demoUrl: "https://bucolic-buttercream-17855b.netlify.app",
    gitgubUrl: "https://github.com/Alexhool2/comfy-store",
  },
  {
    tags: ["Javascript", "React", "Css"],
    demoUrl: "https://cmsproject-reacttest.netlify.app/",
    githubUrl: "https://github.com/Alexhool2/CMsProject2",
  },
  {
    tags: ["React", "Golang", "Bootstrap"],
    demoUrl: "http://54.250.240.137/",
    githubUrl: "https://github.com/Alexhool2/timecard2025final",
  },
]
