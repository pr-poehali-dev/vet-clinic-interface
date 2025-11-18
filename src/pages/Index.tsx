import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    petType: "",
    service: "",
    doctor: "",
    date: "",
    message: ""
  });

  const services = [
    {
      icon: "Stethoscope",
      title: "Терапия",
      description: "Диагностика и лечение заболеваний",
      animals: "Все виды"
    },
    {
      icon: "Scissors",
      title: "Хирургия",
      description: "Плановые и экстренные операции",
      animals: "Все виды"
    },
    {
      icon: "Syringe",
      title: "Вакцинация",
      description: "Профилактические прививки",
      animals: "Все виды"
    },
    {
      icon: "Heart",
      title: "Кардиология",
      description: "Диагностика сердечно-сосудистых заболеваний",
      animals: "Собаки, кошки"
    },
    {
      icon: "Sparkles",
      title: "Экзотические животные",
      description: "Специализированная помощь рептилиям, птицам, грызунам",
      animals: "Экзотика"
    },
    {
      icon: "Smile",
      title: "Стоматология",
      description: "Лечение и профилактика заболеваний зубов",
      animals: "Все виды"
    }
  ];

  const doctors = [
    {
      name: "Анна Петрова",
      specialty: "Главный ветеринар, хирург",
      experience: "15 лет",
      image: "👩‍⚕️"
    },
    {
      name: "Игорь Смирнов",
      specialty: "Терапевт, кардиолог",
      experience: "10 лет",
      image: "👨‍⚕️"
    },
    {
      name: "Мария Козлова",
      specialty: "Экзотические животные",
      experience: "8 лет",
      image: "👩‍⚕️"
    },
    {
      name: "Дмитрий Волков",
      specialty: "Стоматолог",
      experience: "12 лет",
      image: "👨‍⚕️"
    }
  ];

  const faqs = [
    {
      question: "Как подготовить питомца к первому визиту?",
      answer: "Возьмите с собой ветеринарный паспорт (если есть), любимое лакомство питомца и поводок/переноску. Постарайтесь не кормить животное за 2-3 часа до визита."
    },
    {
      question: "Принимаете ли вы экзотических животных?",
      answer: "Да, у нас есть специалист по экзотическим животным. Мы принимаем рептилий, птиц, грызунов, хорьков и других необычных питомцев."
    },
    {
      question: "Работаете ли вы в выходные?",
      answer: "Да, наша клиника работает 7 дней в неделю с 9:00 до 21:00. В экстренных случаях доступна круглосуточная связь с дежурным врачом."
    },
    {
      question: "Нужна ли предварительная запись?",
      answer: "Для планового приема рекомендуем предварительную запись. В экстренных случаях принимаем без записи."
    },
    {
      question: "Какие способы оплаты вы принимаете?",
      answer: "Мы принимаем наличные, банковские карты и безналичный расчет. Также возможна оплата в рассрочку для дорогостоящих процедур."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо за запись! Мы свяжемся с вами в ближайшее время.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Heart" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold">ВетКлиника</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#doctors" className="hover:text-primary transition-colors">Врачи</a>
            <a href="#appointment" className="hover:text-primary transition-colors">Запись</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hover-scale">
            <Icon name="Phone" size={18} className="mr-2" />
            +7 (495) 123-45-67
          </Button>
        </div>
      </header>

      <section className="py-20 px-4 animate-fade-in">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
              Забота о ваших питомцах
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Профессиональная ветеринарная помощь для всех видов животных, включая экзотических
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hover-scale text-lg">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на прием
              </Button>
              <Button size="lg" variant="outline" className="hover-scale text-lg">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Задать вопрос
              </Button>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="hover-scale">
              <CardHeader>
                <Icon name="Clock" size={40} className="text-primary mb-2" />
                <CardTitle>Работаем 7 дней</CardTitle>
                <CardDescription>С 9:00 до 21:00 без выходных</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover-scale">
              <Icon name="Award" size={40} className="text-primary mb-2 mt-6 mx-auto" />
              <CardHeader>
                <CardTitle>Опытные врачи</CardTitle>
                <CardDescription>Средний стаж более 10 лет</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover-scale">
              <Icon name="Sparkles" size={40} className="text-primary mb-2 mt-6 mx-auto" />
              <CardHeader>
                <CardTitle>Все виды животных</CardTitle>
                <CardDescription>Включая экзотических</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Icon name={service.icon as any} size={48} className="text-primary mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Info" size={16} />
                    <span>{service.animals}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="doctors" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Наши врачи</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doctor, index) => (
              <Card key={index} className="hover-scale text-center">
                <CardHeader>
                  <div className="text-6xl mb-4">{doctor.image}</div>
                  <CardTitle className="text-xl">{doctor.name}</CardTitle>
                  <CardDescription className="text-base">{doctor.specialty}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Briefcase" size={16} />
                    <span>Опыт: {doctor.experience}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="appointment" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-12">Онлайн-запись</h2>
          <Card>
            <CardHeader>
              <CardTitle>Запишитесь на прием</CardTitle>
              <CardDescription>Заполните форму, и мы свяжемся с вами для подтверждения</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input 
                      id="name" 
                      required 
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      required 
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="petType">Вид животного *</Label>
                    <Select value={formData.petType} onValueChange={(value) => setFormData({...formData, petType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите вид" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dog">Собака</SelectItem>
                        <SelectItem value="cat">Кошка</SelectItem>
                        <SelectItem value="bird">Птица</SelectItem>
                        <SelectItem value="reptile">Рептилия</SelectItem>
                        <SelectItem value="rodent">Грызун</SelectItem>
                        <SelectItem value="other">Другое</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="service">Услуга *</Label>
                    <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="therapy">Терапия</SelectItem>
                        <SelectItem value="surgery">Хирургия</SelectItem>
                        <SelectItem value="vaccination">Вакцинация</SelectItem>
                        <SelectItem value="cardiology">Кардиология</SelectItem>
                        <SelectItem value="exotic">Экзотические животные</SelectItem>
                        <SelectItem value="dentistry">Стоматология</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="doctor">Врач</Label>
                    <Select value={formData.doctor} onValueChange={(value) => setFormData({...formData, doctor: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Любой специалист" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="petrova">Анна Петрова</SelectItem>
                        <SelectItem value="smirnov">Игорь Смирнов</SelectItem>
                        <SelectItem value="kozlova">Мария Козлова</SelectItem>
                        <SelectItem value="volkov">Дмитрий Волков</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="date">Желаемая дата</Label>
                    <Input 
                      id="date" 
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">Комментарий</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Опишите симптомы или причину визита"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full hover-scale">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12">Частые вопросы</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Свяжитесь с нами</CardTitle>
                <CardDescription>Мы ответим на все ваши вопросы</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-muted-foreground">г. Москва, ул. Ветеринарная, д. 15</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Phone" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    <p className="text-sm text-muted-foreground">Круглосуточная горячая линия</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">info@vetclinic.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Режим работы</p>
                    <p className="text-muted-foreground">Пн-Вс: 9:00 - 21:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Напишите нам</CardTitle>
                <CardDescription>Форма обратной связи</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="contact-name">Имя</Label>
                    <Input id="contact-name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="contact-email">Email</Label>
                    <Input id="contact-email" type="email" placeholder="email@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="contact-message">Сообщение</Label>
                    <Textarea id="contact-message" placeholder="Ваше сообщение" rows={4} />
                  </div>
                  <Button type="submit" className="w-full hover-scale">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 rounded-xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.344088748486!2d37.617633976901476!3d55.75582129045869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JrRgNC10LzQu9GM!5e0!3m2!1sru!2sru!4v1699999999999!5m2!1sru!2sru"
              width="100%" 
              height="400" 
              style={{border: 0}} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Heart" size={28} className="text-primary" />
                <h3 className="text-xl font-bold">ВетКлиника</h3>
              </div>
              <p className="text-background/80">
                Профессиональная ветеринарная помощь с 2010 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Быстрые ссылки</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#services" className="hover:text-primary transition-colors">Услуги</a></li>
                <li><a href="#doctors" className="hover:text-primary transition-colors">Врачи</a></li>
                <li><a href="#appointment" className="hover:text-primary transition-colors">Онлайн-запись</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-background/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@vetclinic.ru</li>
                <li>г. Москва, ул. Ветеринарная, 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/60 text-sm">
            <p>© 2024 ВетКлиника. Все права защищены.</p>
            <p className="mt-2">Лицензия на медицинскую деятельность № ЛО-77-01-012345 от 15.03.2010</p>
            <p className="mt-1">Ветеринарная клиника "ВетКлиника" | ИНН 7701234567 | ОГРН 1027700123456</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;