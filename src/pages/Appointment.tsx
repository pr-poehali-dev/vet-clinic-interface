import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

export default function Appointment() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30'
  ];

  const doctors = [
    'Смирнова Е.В. - Терапевт',
    'Петров Д.С. - Хирург',
    'Козлова А.М. - Офтальмолог',
    'Новиков А.П. - Стоматолог',
    'Федорова М.А. - Дерматолог',
    'Васильев И.Н. - Орнитолог',
    'Морозова О.Д. - Анестезиолог',
    'Лебедев А.В. - УЗИ-специалист'
  ];

  const services = [
    'Первичный приём',
    'Повторный приём',
    'УЗИ диагностика',
    'Хирургическая операция',
    'Вакцинация',
    'Стоматология',
    'Груминг',
    'Анализы'
  ];

  const animalTypes = [
    'Собака',
    'Кошка',
    'Кролик',
    'Грызун',
    'Птица',
    'Рептилия',
    'Другое'
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-16 bg-gradient-to-br from-primary/5 via-accent/30 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Онлайн-запись</h1>
            <p className="text-lg text-muted-foreground">
              Выберите удобное время и заполните форму. Мы перезвоним вам для подтверждения записи.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Выберите дату и время</CardTitle>
                    <CardDescription>Доступные слоты для записи</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex justify-center">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border"
                      />
                    </div>

                    <div>
                      <Label>Доступное время</Label>
                      <div className="grid grid-cols-4 gap-2 mt-3">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            variant="outline"
                            size="sm"
                            className="hover:bg-primary hover:text-white"
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Быстрая запись по телефону</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="Phone" className="text-primary" size={24} />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Позвоните нам</div>
                        <a href="tel:+79001234567" className="text-xl font-bold text-primary hover:underline">
                          +7 900 123-45-67
                        </a>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Мы работаем круглосуточно. Администратор подберёт удобное время и ответит на все вопросы.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Форма записи</CardTitle>
                    <CardDescription>Заполните данные для записи</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Ваше имя *</Label>
                          <Input id="name" placeholder="Иван Иванов" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Телефон *</Label>
                          <Input id="phone" type="tel" placeholder="+7 900 123-45-67" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="example@mail.ru" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Услуга *</Label>
                        <Select>
                          <SelectTrigger id="service">
                            <SelectValue placeholder="Выберите услугу" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="doctor">Врач</Label>
                        <Select>
                          <SelectTrigger id="doctor">
                            <SelectValue placeholder="Выберите врача (необязательно)" />
                          </SelectTrigger>
                          <SelectContent>
                            {doctors.map((doctor) => (
                              <SelectItem key={doctor} value={doctor}>
                                {doctor}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="petName">Кличка питомца *</Label>
                        <Input id="petName" placeholder="Например: Барсик" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="petType">Вид животного *</Label>
                        <Select>
                          <SelectTrigger id="petType">
                            <SelectValue placeholder="Выберите вид" />
                          </SelectTrigger>
                          <SelectContent>
                            {animalTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="petAge">Возраст питомца</Label>
                        <Input id="petAge" placeholder="Например: 2 года" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="comment">Комментарий</Label>
                        <Textarea
                          id="comment"
                          placeholder="Опишите симптомы или причину обращения"
                          rows={4}
                        />
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        <Icon name="Calendar" size={20} className="mr-2" />
                        Записаться на приём
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
                        Мы перезвоним вам для подтверждения записи.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Как проходит приём</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold mb-2">Запись</h3>
                <p className="text-sm text-muted-foreground">
                  Заполните форму или позвоните нам
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold mb-2">Подтверждение</h3>
                <p className="text-sm text-muted-foreground">
                  Администратор перезвонит для уточнения деталей
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold mb-2">Приём</h3>
                <p className="text-sm text-muted-foreground">
                  Врач осмотрит питомца и поставит диагноз
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="font-semibold mb-2">Лечение</h3>
                <p className="text-sm text-muted-foreground">
                  Назначит лечение и даст рекомендации
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
