import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import Icon from "@/components/ui/icon";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contacts = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено!",
      description: "Мы ответим вам в ближайшее время.",
    });
  };

  const contactInfo = [
    {
      icon: "Phone",
      title: "Телефон",
      details: ["+7 (495) 123-45-67", "Круглосуточно, без выходных"]
    },
    {
      icon: "Mail",
      title: "Email",
      details: ["info@vetclinic.ru", "support@vetclinic.ru"]
    },
    {
      icon: "MapPin",
      title: "Адрес",
      details: ["Москва, ул. Ветеринарная, д. 15", "м. Проспект Мира"]
    },
    {
      icon: "Clock",
      title: "График работы",
      details: ["Понедельник - Воскресенье", "Круглосуточно 24/7"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <Navigation />
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Контакты</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Мы всегда на связи и готовы помочь вашим питомцам в любое время суток
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-primary/10 text-center hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name={info.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className={idx === 0 ? "font-semibold text-foreground" : "text-muted-foreground text-sm"}>
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-primary/10">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="MessageCircle" size={28} className="text-primary" />
                  Форма обратной связи
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input
                      id="name"
                      placeholder="Иван Иванов"
                      required
                      className="border-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Телефон *</Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      required
                      className="border-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="example@email.com"
                      className="border-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение *</Label>
                    <Textarea
                      id="message"
                      placeholder="Напишите ваш вопрос или пожелание"
                      rows={6}
                      required
                      className="border-primary/20"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg h-12">
                    Отправить сообщение
                    <Icon name="Send" size={20} className="ml-2" />
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Мы ответим вам в течение 24 часов
                  </p>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-primary/10">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Icon name="MapPin" size={28} className="text-primary" />
                    Как нас найти
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border border-primary/20">
                    <div className="text-center p-6">
                      <Icon name="Map" size={64} className="text-primary/30 mx-auto mb-4" />
                      <p className="text-muted-foreground">Карта клиники</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Москва, ул. Ветеринарная, д. 15
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="Train" size={20} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Метро</p>
                        <p className="text-sm text-muted-foreground">
                          Проспект Мира (5 минут пешком)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Icon name="Car" size={20} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Парковка</p>
                        <p className="text-sm text-muted-foreground">
                          Бесплатная парковка для клиентов
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Icon name="Bus" size={20} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Автобус</p>
                        <p className="text-sm text-muted-foreground">
                          Остановка «Ветеринарная клиника» (маршруты 12, 34, 56)
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/10 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Icon name="Users" size={24} className="text-primary" />
                    Мы в соцсетях
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="justify-start" asChild>
                      <a href="#" target="_blank">
                        <Icon name="Share2" size={18} className="mr-2" />
                        ВКонтакте
                      </a>
                    </Button>
                    <Button variant="outline" className="justify-start" asChild>
                      <a href="#" target="_blank">
                        <Icon name="Share2" size={18} className="mr-2" />
                        Telegram
                      </a>
                    </Button>
                    <Button variant="outline" className="justify-start" asChild>
                      <a href="#" target="_blank">
                        <Icon name="Share2" size={18} className="mr-2" />
                        Instagram
                      </a>
                    </Button>
                    <Button variant="outline" className="justify-start" asChild>
                      <a href="#" target="_blank">
                        <Icon name="Share2" size={18} className="mr-2" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-primary/20">
            <CardHeader className="text-center">
              <Icon name="FileCheck" size={48} className="text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">Лицензии и сертификаты</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-center text-muted-foreground">
                Наша клиника имеет все необходимые лицензии и разрешения для осуществления 
                ветеринарной деятельности на территории Российской Федерации
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-lg bg-white border border-primary/10">
                  <div className="w-24 h-32 mx-auto mb-4 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Icon name="Award" size={48} className="text-primary/50" />
                  </div>
                  <p className="font-semibold mb-1">Лицензия</p>
                  <p className="text-sm text-muted-foreground">№ЛО-77-01-020123</p>
                  <p className="text-sm text-muted-foreground">от 15.03.2020</p>
                </div>

                <div className="text-center p-6 rounded-lg bg-white border border-primary/10">
                  <div className="w-24 h-32 mx-auto mb-4 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Icon name="Shield" size={48} className="text-primary/50" />
                  </div>
                  <p className="font-semibold mb-1">Сертификат</p>
                  <p className="text-sm text-muted-foreground">ISO 9001:2015</p>
                  <p className="text-sm text-muted-foreground">Система качества</p>
                </div>

                <div className="text-center p-6 rounded-lg bg-white border border-primary/10">
                  <div className="w-24 h-32 mx-auto mb-4 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Icon name="FileCheck" size={48} className="text-primary/50" />
                  </div>
                  <p className="font-semibold mb-1">Аккредитация</p>
                  <p className="text-sm text-muted-foreground">Росздравнадзор</p>
                  <p className="text-sm text-muted-foreground">№АК-00458-2021</p>
                </div>
              </div>

              <div className="pt-6 border-t border-border text-center">
                <p className="text-sm text-muted-foreground">
                  ООО "Ветеринарная клиника" • ИНН 7701234567 • ОГРН 1234567890123<br />
                  Юридический адрес: 129110, г. Москва, ул. Ветеринарная, д. 15
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contacts;