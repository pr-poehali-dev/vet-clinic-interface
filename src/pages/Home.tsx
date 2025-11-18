import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Home = () => {
  const services = [
    {
      icon: "Stethoscope",
      title: "Терапия",
      description: "Диагностика и лечение всех видов животных"
    },
    {
      icon: "Scissors",
      title: "Хирургия",
      description: "Плановые и экстренные операции любой сложности"
    },
    {
      icon: "Syringe",
      title: "Вакцинация",
      description: "Полный комплекс прививок по графику"
    },
    {
      icon: "TestTube",
      title: "Лабораторная диагностика",
      description: "Анализы крови, мочи, биохимия"
    },
    {
      icon: "Heart",
      title: "Кардиология",
      description: "УЗИ сердца, ЭКГ, консультации кардиолога"
    },
    {
      icon: "Sparkles",
      title: "Груминг",
      description: "Стрижка, уход за шерстью и когтями"
    }
  ];

  const stats = [
    { value: "15+", label: "Лет опыта" },
    { value: "12", label: "Специалистов" },
    { value: "5000+", label: "Довольных клиентов" },
    { value: "24/7", label: "Круглосуточно" }
  ];

  const faqs = [
    {
      question: "Принимаете ли вы экзотических животных?",
      answer: "Да, мы принимаем все виды животных, включая рептилий, птиц, грызунов и других экзотических питомцев. У нас есть специалисты с опытом работы с экзотикой."
    },
    {
      question: "Работаете ли вы круглосуточно?",
      answer: "Да, наша клиника работает 24/7. В любое время суток вы можете обратиться к нам за экстренной помощью или записаться на плановый прием."
    },
    {
      question: "Какие документы нужны для первого визита?",
      answer: "Для первого визита желательно иметь ветеринарный паспорт питомца (если есть). Если паспорта нет, мы оформим его в клинике."
    },
    {
      question: "Можно ли вызвать врача на дом?",
      answer: "Да, мы предоставляем услугу вызова ветеринара на дом. Стоимость зависит от удаленности и типа процедур."
    },
    {
      question: "Есть ли у вас стационар?",
      answer: "Да, в нашей клинике есть комфортный стационар с круглосуточным наблюдением для животных, которым требуется длительное лечение."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <Navigation />
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDE1MCwxMzYsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                🐾 Забота о ваших питомцах с 2009 года
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Ветеринарная клиника полного цикла
              </h1>
              <p className="text-xl text-muted-foreground">
                Профессиональная помощь для всех видов животных, включая экзотических. 
                Современное оборудование и опытные врачи.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/appointment">
                  <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8">
                    Записаться на прием
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-8">
                    Наши услуги
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <span className="font-medium">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Clock" size={20} className="text-primary" />
                  <span className="font-medium">24/7</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm flex items-center justify-center border border-primary/20">
                <div className="text-center p-8">
                  <Icon name="Heart" size={120} className="text-primary/30 mx-auto mb-6" />
                  <p className="text-2xl font-semibold text-primary">Здоровье ваших питомцев — наша миссия</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/30 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр ветеринарных услуг для здоровья и комфорта ваших питомцев
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-primary/10">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services">
              <Button size="lg" variant="outline" className="text-lg h-12">
                Все услуги и цены
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground">
              Забота, профессионализм и современные технологии
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-primary/10">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={32} className="text-primary" />
                </div>
                <CardTitle>Опытные специалисты</CardTitle>
                <CardDescription className="text-base">
                  Наши врачи регулярно проходят обучение и имеют сертификаты международного уровня
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-primary/10">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Monitor" size={32} className="text-primary" />
                </div>
                <CardTitle>Современное оборудование</CardTitle>
                <CardDescription className="text-base">
                  Используем новейшее диагностическое и хирургическое оборудование
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-primary/10">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <CardTitle>Индивидуальный подход</CardTitle>
                <CardDescription className="text-base">
                  Учитываем особенности каждого питомца и находим общий язык с любым животным
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Частые вопросы</h2>
            <p className="text-xl text-muted-foreground">
              Ответы на популярные вопросы о наших услугах
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-xl border border-primary/10 px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <Icon name="Calendar" size={64} className="mx-auto mb-6 opacity-90" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Запишитесь на прием прямо сейчас
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Онлайн-запись доступна 24/7. Выберите удобное время и специалиста
          </p>
          <Link to="/appointment">
            <Button size="lg" variant="secondary" className="text-lg h-14 px-8">
              Записаться онлайн
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;