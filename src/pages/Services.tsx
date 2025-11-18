import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

export default function Services() {
  const serviceCategories = [
    {
      title: 'Терапия и диагностика',
      icon: 'Stethoscope',
      services: [
        { name: 'Первичный приём', price: 'от 1500 ₽' },
        { name: 'Повторный приём', price: 'от 1200 ₽' },
        { name: 'Консультация специалиста', price: 'от 2000 ₽' },
        { name: 'УЗИ диагностика', price: 'от 2500 ₽' },
        { name: 'Рентген', price: 'от 2000 ₽' },
        { name: 'ЭКГ', price: 'от 1800 ₽' }
      ]
    },
    {
      title: 'Хирургия',
      icon: 'Scissors',
      services: [
        { name: 'Кастрация кота', price: 'от 3000 ₽' },
        { name: 'Стерилизация кошки', price: 'от 4500 ₽' },
        { name: 'Кастрация собаки', price: 'от 5000 ₽' },
        { name: 'Стерилизация собаки', price: 'от 6000 ₽' },
        { name: 'Удаление новообразований', price: 'от 4000 ₽' },
        { name: 'Полостные операции', price: 'от 10000 ₽' }
      ]
    },
    {
      title: 'Вакцинация и профилактика',
      icon: 'Syringe',
      services: [
        { name: 'Вакцинация кошек', price: 'от 1500 ₽' },
        { name: 'Вакцинация собак', price: 'от 1800 ₽' },
        { name: 'Вакцинация кроликов', price: 'от 1200 ₽' },
        { name: 'Оформление ветпаспорта', price: 'от 500 ₽' },
        { name: 'Обработка от паразитов', price: 'от 800 ₽' },
        { name: 'Чипирование', price: 'от 2000 ₽' }
      ]
    },
    {
      title: 'Лабораторные исследования',
      icon: 'Pill',
      services: [
        { name: 'Общий анализ крови', price: 'от 1200 ₽' },
        { name: 'Биохимия крови', price: 'от 2500 ₽' },
        { name: 'Анализ мочи', price: 'от 800 ₽' },
        { name: 'Анализ кала', price: 'от 700 ₽' },
        { name: 'Цитология', price: 'от 1500 ₽' },
        { name: 'Гистология', price: 'от 3000 ₽' }
      ]
    },
    {
      title: 'Стоматология',
      icon: 'Activity',
      services: [
        { name: 'Санация ротовой полости', price: 'от 3500 ₽' },
        { name: 'Удаление зубного камня', price: 'от 2500 ₽' },
        { name: 'Удаление зуба', price: 'от 1500 ₽' },
        { name: 'Лечение стоматита', price: 'от 2000 ₽' }
      ]
    },
    {
      title: 'Экзотические животные',
      icon: 'Bird',
      services: [
        { name: 'Приём орнитолога', price: 'от 2000 ₽' },
        { name: 'Приём герпетолога', price: 'от 2500 ₽' },
        { name: 'Лечение грызунов', price: 'от 1500 ₽' },
        { name: 'Подрезка клюва/когтей', price: 'от 800 ₽' }
      ]
    },
    {
      title: 'Груминг',
      icon: 'Sparkles',
      services: [
        { name: 'Стрижка кошек', price: 'от 2000 ₽' },
        { name: 'Стрижка собак', price: 'от 2500 ₽' },
        { name: 'Тримминг', price: 'от 3000 ₽' },
        { name: 'Мытьё и сушка', price: 'от 1500 ₽' },
        { name: 'Стрижка когтей', price: 'от 500 ₽' },
        { name: 'Чистка ушей', price: 'от 400 ₽' }
      ]
    },
    {
      title: 'Вызов на дом',
      icon: 'Home',
      services: [
        { name: 'Вызов терапевта', price: 'от 3000 ₽' },
        { name: 'Вакцинация на дому', price: 'от 2500 ₽' },
        { name: 'Взятие анализов', price: 'от 2000 ₽' },
        { name: 'Установка капельницы', price: 'от 2500 ₽' },
        { name: 'Усыпление (эвтаназия)', price: 'от 5000 ₽' }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-16 bg-gradient-to-br from-primary/5 via-accent/30 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Наши услуги</h1>
            <p className="text-lg text-muted-foreground">
              Полный спектр ветеринарных услуг для вашего питомца. 
              Мы используем современное оборудование и новейшие методики лечения.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={category.icon as any} className="text-primary" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">{category.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.services.map((service, idx) => (
                      <li key={idx} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                        <span className="text-foreground">{service.name}</span>
                        <span className="font-semibold text-primary">{service.price}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Дополнительная информация</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                    <Icon name="Clock" className="text-primary" size={24} />
                  </div>
                  <CardTitle>Работаем 24/7</CardTitle>
                  <CardDescription>
                    Круглосуточная ветеринарная помощь, включая выходные и праздники
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                    <Icon name="CreditCard" className="text-primary" size={24} />
                  </div>
                  <CardTitle>Удобная оплата</CardTitle>
                  <CardDescription>
                    Наличные, банковские карты, рассрочка на дорогостоящие операции
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                    <Icon name="Award" className="text-primary" size={24} />
                  </div>
                  <CardTitle>Гарантия качества</CardTitle>
                  <CardDescription>
                    Все специалисты имеют лицензии и регулярно повышают квалификацию
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/10 via-accent/20 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Готовы записаться?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Выберите удобное время для посещения клиники
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/appointment">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться онлайн
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+79001234567">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
