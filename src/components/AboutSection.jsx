import { Briefcase, Code, User } from "lucide-react"
import { useTranslation } from "react-i18next"

export const AboutSection = () => {
  const { t } = useTranslation()

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t("about.aboutText")}{" "}
          <span className="text-primary2">{t("about.me")}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">{t("about.title")}</h3>
            <p className="text-muted-foreground">{t("about.paragraph1")}</p>

            <p className="text-muted-foreground">{t("about.paragraph2")}</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button2">
                {t("about.getInTouch")}
              </a>
              {/* para colocar o cv no href para download */}
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1kbFPtF_A3d_vgPsv7aXiQ5J7i0gDx9dQ/view?usp=drive_link"
                className="px-3 py-2 rounded-full border border-primary2 text-primary2 hover:bg-primary2/10 transition-colors duration-300"
              >
                {t("about.downloadCV")}
              </a>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1G761uBDqU11NiPLfRDR-rFR1K1AmQCKV/view?usp=drive_link"
                className="px-6 py-2 rounded-full border border-primary2 text-primary2 hover:bg-primary2/10 transition-colors duration-300"
              >
                {t("about.workHistory")}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border2 p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primar2/10">
                  <Code className="h-6 w-6 text-primary2" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {t("about.webDevelopment")}
                  </h4>
                  <p className="text-muted-foreground">{t("about.text1")}</p>
                </div>
              </div>
            </div>
            <div className="gradient-border2 p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary2/10">
                  <User className="h-6 w-6 text-primary2" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {t("about.fullStack")}
                  </h4>
                  <p className="text-muted-foreground">{t("about.text2")}</p>
                </div>
              </div>
            </div>
            <div className="gradient-border2 p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary2/10">
                  <Briefcase className="h-6 w-6 text-primary2" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {t("about.negotiation")}
                  </h4>
                  <p className="text-muted-foreground">{t("about.text3")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
