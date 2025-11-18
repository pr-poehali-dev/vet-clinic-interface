import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/components/ui/use-toast";
import Icon from "@/components/ui/icon";

const Appointment = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { toast } = useToast();

  const doctors = [
    "Анна Петровна Смирнова (Хирург)",
    "Дмитрий Сергеевич Волков (Терапевт)",
    "Елена Игоревна Новикова (Офтальмолог)",
    "Михаил Александрович Козлов (Ортопед)",
    "Ольга Викторовна Белова (Стоматолог)",
    "Игорь Павлович Морозов (Экзотолог)"
  ];

  const timeSlots = [
    "09:00", "10:00", "11:00", "12:00", "13:00", 
    "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"
  ];

  const services = [
    "Первичный прием",
    "Повторный прием",
    "Вакцинация",
    "УЗИ диагностика",
    "Хирургическая операция",
    "Лабораторные анализы",
    "Стоматология",
    "Груминг",
    "Консультация экзотолога"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время для подтверждения записи.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Онлайн-запись</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Выберите удобное время, специалиста и услугу. Мы свяжемся с вами для подтверждения записи.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-primary/20">
              <Icon name="Clock" size={20} className="text-primary" />
              <span className="font-medium">Работаем 24/7</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-primary/20">
              <Icon name="Phone" size={20} className="text-primary" />
              <span className="font-medium">+7 (495) 123-45-67</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-primary/10">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="Calendar" size={28} className="text-primary" />
                  Выберите дату и время
                </CardTitle>
                <CardDescription>
                  Доступные слоты для записи на ближайшие дни
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-lg border border-primary/20"
                    disabled={(date) => date < new Date()}
                  />
                </div>

                <div>
                  <Label className="text-base mb-3 block">Доступное время</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant="outline"
                        className="hover:bg-primary hover:text-white transition-colors"
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/10">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="ClipboardList" size={28} className="text-primary" />
                  Форма записи
                </CardTitle>
                <CardDescription>
                  Заполните информацию о питомце и выберите услугу
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="owner-name">Ваше имя *</Label>
                    <Input 
                      id="owner-name" 
                      placeholder="Иван Иванов" 
                      required
                      className="border-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input 
                      id="phone" 
                      type="tel"
                      placeholder="+7 (___) ___-__-__" 
                      required
                      className="border-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="example@email.com"
                      className="border-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pet-name">Кличка питомца *</Label>
                    <Input 
                      id="pet-name" 
                      placeholder="Мурзик" 
                      required
                      className="border-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pet-type">Вид животного *</Label>
                    <Select required>
                      <SelectTrigger className="border-primary/20">
                        <SelectValue placeholder="Выберите вид" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cat">Кошка</SelectItem>
                        <SelectItem value="dog">Собака</SelectItem>
                        <SelectItem value="rabbit">Кролик</SelectItem>
                        <SelectItem value="bird">Птица</SelectItem>
                        <SelectItem value="reptile">Рептилия</SelectItem>
                        <SelectItem value="rodent">Грызун</SelectItem>
                        <SelectItem value="other">Другое</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Услуга *</Label>
                    <Select required>
                      <SelectTrigger className="border-primary/20">
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service.toLowerCase()}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="doctor">Врач (необязательно)</Label>
                    <Select>
                      <SelectTrigger className="border-primary/20">
                        <SelectValue placeholder="Выберите врача" />
                      </SelectTrigger>
                      <SelectContent>
                        {doctors.map((doctor) => (
                          <SelectItem key={doctor} value={doctor.toLowerCase()}>
                            {doctor}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Дополнительная информация</Label>
                    <Textarea
                      id="notes"
                      placeholder="Опишите симптомы или причину обращения"
                      rows={4}
                      className="border-primary/20"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg h-12">
                    Записаться на прием
                    <Icon name="Send" size={20} className="ml-2" />
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Как записаться на прием</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center border-primary/10">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <CardTitle>Заполните форму</CardTitle>
                <CardDescription className="text-base">
                  Укажите ваши контакты, данные питомца и выберите услугу
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-primary/10">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <CardTitle>Подтверждение</CardTitle>
                <CardDescription className="text-base">
                  Наш администратор свяжется с вами в течение 15 минут
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-primary/10">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <CardTitle>Визит в клинику</CardTitle>
                <CardDescription className="text-base">
                  Приходите в назначенное время, мы вас ждем!
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader className="text-center">
              <Icon name="PhoneCall" size={48} className="text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">Экстренная помощь?</CardTitle>
              <CardDescription className="text-base">
                Если вашему питомцу требуется срочная помощь, позвоните нам прямо сейчас
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div>
                <p className="text-3xl font-bold text-primary mb-2">+7 (495) 123-45-67</p>
                <p className="text-muted-foreground">Круглосуточная линия</p>
              </div>
              <Button size="lg" variant="outline" className="text-lg h-12" asChild>
                <a href="tel:+74951234567">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить сейчас
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
