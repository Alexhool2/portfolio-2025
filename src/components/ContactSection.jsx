import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import { useTranslation } from "react-i18next"

export const ContactSection = () => {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t("contact.title")}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("contact.subtitle")}
        </p>
        <div className="bg-card2 p-6 rounded-lg shadow-xs card-hover">
          <div className="grid grid-cols-1 gap-12">
            <div className="space-y-8 ">
              <h3 className="text-2xl font-semibold mb-8 pt-8">
                {t("contact.title")}
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-start w-full">
                  <div className="p-3 rounded-full bg-primary2/10">
                    <Mail className="h-6 w-6 text-primary2" />
                  </div>
                  <div className="flex flex-col ml-4">
                    <h4 className="font-medium flex justify-start">
                      {t("contact.email")}
                    </h4>
                    <a
                      href="mailto:alex.jp.oliveira@outlook.com"
                      className="text-muted-foreground2 hover:text-primary2 transition-colors"
                    >
                      alex.jp.oliveira@outlook.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-start w-full">
                  <div className="p-3 rounded-full bg-primary2/10">
                    <Phone className="h-6 w-6 text-primary2" />
                  </div>
                  <div className="flex flex-col ml-4">
                    <h4 className="font-medium flex justify-start">
                      {t("contact.phone")}
                    </h4>
                    <a
                      href="tel:08016295974"
                      className="text-muted-foreground2 hover:text-primary2 transition-colors"
                    >
                      +81-080-1629-5974
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-start w-full">
                  <div className="p-3 rounded-full bg-primary2/10">
                    <MapPin className="h-6 w-6 text-primary2" />
                  </div>
                  <div className="flex flex-col ml-4">
                    <h4 className="font-medium flex justify-start">
                      {t("contact.location")}
                    </h4>
                    <a className="text-muted-foreground hover:text-primary transition-colors">
                      {t("contact.address")}
                    </a>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <h4 className="font-medium mb-4">{t("contact.connect")}</h4>
                <div className="flex space-x-4 justify-center">
                  <a
                    href="https://www.linkedin.com/in/alex-oliveira-84424a280/"
                    target="_blank"
                  >
                    <Linkedin />
                  </a>
                  <a
                    href="https://www.facebook.com/alex.m.oliveira"
                    target="_blank"
                  >
                    <Facebook />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
