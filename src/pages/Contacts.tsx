import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

export default function Contacts() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-16 bg-gradient-to-br from-primary/5 via-accent/30 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Контакты</h1>
            <p className="text-lg text-muted-foreground">
              Мы всегда рады помочь вашим питомцам. Свяжитесь с нами удобным способом.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Свяжитесь с нами</h2>
                
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon name="Phone" className="text-primary" size={24} />
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-2">Телефон</CardTitle>
                          <CardDescription className="space-y-1">
                            <div>
                              <a href="tel:+79001234567" className="text-lg font-semibold text-primary hover:underline">
                                +7 900 123-45-67
                              </a>
                            </div>
                            <div className="text-sm">Круглосуточно, без выходных</div>
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon name="Mail" className="text-primary" size={24} />
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-2">Email</CardTitle>
                          <CardDescription>
                            <a href="mailto:info@vetclinic.ru" className="text-lg font-semibold text-primary hover:underline">
                              info@vetclinic.ru
                            </a>
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon name="MapPin" className="text-primary" size={24} />
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-2">Адрес</CardTitle>
                          <CardDescription className="space-y-1">
                            <div className="text-base">г. Москва, ул. Примерная, д. 123</div>
                            <div className="text-sm">м. Площадь Революции, 5 минут пешком</div>
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon name="Clock" className="text-primary" size={24} />
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-2">Режим работы</CardTitle>
                          <CardDescription className="space-y-1">
                            <div className="flex justify-between">
                              <span>Понедельник - Пятница</span>
                              <span className="font-semibold">9:00 - 21:00</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Суббота - Воскресенье</span>
                              <span className="font-semibold">10:00 - 19:00</span>
                            </div>
                            <div className="pt-2 text-primary font-semibold">
                              Экстренная помощь круглосуточно
                            </div>
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Мы в социальных сетях</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                  >
                    <Icon name="Facebook" size={24} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                  >
                    <Icon name="Instagram" size={24} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                  >
                    <Icon name="MessageCircle" size={24} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                  >
                    <Icon name="Send" size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Форма обратной связи</CardTitle>
                  <CardDescription>
                    Оставьте сообщение, и мы свяжемся с вами в ближайшее время
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Ваше имя *</Label>
                      <Input id="contact-name" placeholder="Иван Иванов" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-phone">Телефон *</Label>
                      <Input id="contact-phone" type="tel" placeholder="+7 900 123-45-67" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email</Label>
                      <Input id="contact-email" type="email" placeholder="example@mail.ru" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-subject">Тема обращения *</Label>
                      <Input id="contact-subject" placeholder="Например: Вопрос о вакцинации" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-message">Сообщение *</Label>
                      <Textarea
                        id="contact-message"
                        placeholder="Опишите ваш вопрос подробнее"
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить сообщение
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Как до нас добраться</h2>
          
          <div className="max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/30 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="MapPin" size={64} className="text-primary mx-auto mb-4" />
                    <p className="text-xl font-semibold text-foreground">Карта с местоположением клиники</p>
                    <p className="text-muted-foreground mt-2">г. Москва, ул. Примерная, д. 123</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Icon name="Train" className="text-primary" size={24} />
                    <CardTitle>На метро</CardTitle>
                  </div>
                  <CardDescription>
                    Станция "Площадь Революции", выход №3. От метро 5 минут пешком по ул. Примерной.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Icon name="Car" className="text-primary" size={24} />
                    <CardTitle>На автомобиле</CardTitle>
                  </div>
                  <CardDescription>
                    Бесплатная парковка для клиентов во дворе здания. Въезд со стороны ул. Примерной.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Icon name="Bus" className="text-primary" size={24} />
                    <CardTitle>На автобусе</CardTitle>
                  </div>
                  <CardDescription>
                    Остановка "Примерная улица": автобусы №10, 25, 48. Троллейбус №2.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
