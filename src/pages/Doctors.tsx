import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Doctors = () => {
  const doctors = [
    {
      name: "Анна Петровна Смирнова",
      position: "Главный врач, хирург",
      experience: "15 лет опыта",
      specialization: ["Хирургия", "Терапия", "УЗИ-диагностика"],
      education: "МГУ, факультет ветеринарной медицины",
      achievements: [
        "Сертификат European School of Veterinary Surgery",
        "Более 500 успешных операций",
        "Участник международных конференций"
      ],
      schedule: "Пн-Пт: 9:00-18:00"
    },
    {
      name: "Дмитрий Сергеевич Волков",
      position: "Ветеринарный врач-терапевт",
      experience: "10 лет опыта",
      specialization: ["Терапия", "Кардиология", "Дерматология"],
      education: "Санкт-Петербургская академия ветеринарной медицины",
      achievements: [
        "Специализация по кардиологии (Германия)",
        "Эксперт по лечению аллергий",
        "Автор научных статей"
      ],
      schedule: "Вт-Сб: 10:00-19:00"
    },
    {
      name: "Елена Игоревна Новикова",
      position: "Ветеринарный врач-офтальмолог",
      experience: "8 лет опыта",
      specialization: ["Офтальмология", "Микрохирургия глаза"],
      education: "МВА им. К.И. Скрябина",
      achievements: [
        "Стажировка в США по офтальмохирургии",
        "Специалист по редким заболеваниям глаз",
        "Работа с экзотическими животными"
      ],
      schedule: "Ср-Вс: 11:00-20:00"
    },
    {
      name: "Михаил Александрович Козлов",
      position: "Ветеринар-ортопед",
      experience: "12 лет опыта",
      specialization: ["Ортопедия", "Травматология", "Неврология"],
      education: "Казанская академия ветеринарной медицины",
      achievements: [
        "Сертификат по ортопедической хирургии (AO VET)",
        "Эксперт по лечению дисплазии",
        "Применение современных имплантов"
      ],
      schedule: "Пн-Пт: 10:00-19:00"
    },
    {
      name: "Ольга Викторовна Белова",
      position: "Ветеринар-стоматолог",
      experience: "7 лет опыта",
      specialization: ["Стоматология", "Челюстно-лицевая хирургия"],
      education: "Российский университет дружбы народов",
      achievements: [
        "Курсы продвинутой стоматологии (Чехия)",
        "Специалист по имплантации зубов",
        "Работа с брахицефалами"
      ],
      schedule: "Вт-Сб: 9:00-17:00"
    },
    {
      name: "Игорь Павлович Морозов",
      position: "Врач-экзотолог",
      experience: "9 лет опыта",
      specialization: ["Экзотические животные", "Герпетология", "Орнитология"],
      education: "МГУ, кафедра зоологии позвоночных",
      achievements: [
        "Консультант в Московском зоопарке",
        "Лечение рептилий, птиц, грызунов",
        "Автор книги 'Содержание экзотов дома'"
      ],
      schedule: "Ср-Вс: 12:00-20:00"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Наши врачи</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Команда опытных профессионалов с международными сертификатами и 
              искренней любовью к животным
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-primary/20">
              <Icon name="GraduationCap" size={20} className="text-primary" />
              <span className="font-medium">Высшее образование</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-primary/20">
              <Icon name="Award" size={20} className="text-primary" />
              <span className="font-medium">Международные сертификаты</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-primary/20">
              <Icon name="Heart" size={20} className="text-primary" />
              <span className="font-medium">Любовь к животным</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8">
            {doctors.map((doctor, index) => (
              <Card key={index} className="overflow-hidden border-primary/10 hover:shadow-xl transition-all">
                <div className="grid md:grid-cols-[300px_1fr] gap-6">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-8">
                    <div className="w-48 h-48 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center border-4 border-primary/20">
                      <Icon name="UserCircle" size={120} className="text-primary/30" />
                    </div>
                  </div>
                  
                  <div className="p-6 md:p-8">
                    <div className="mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">{doctor.name}</h3>
                      <p className="text-lg text-primary font-semibold mb-2">{doctor.position}</p>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Briefcase" size={18} />
                        <span>{doctor.experience}</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Icon name="Stethoscope" size={18} className="text-primary" />
                          Специализация:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {doctor.specialization.map((spec, idx) => (
                            <Badge key={idx} variant="secondary" className="text-sm">
                              {spec}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Icon name="GraduationCap" size={18} className="text-primary" />
                          Образование:
                        </h4>
                        <p className="text-muted-foreground">{doctor.education}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Icon name="Award" size={18} className="text-primary" />
                          Достижения:
                        </h4>
                        <ul className="space-y-1">
                          {doctor.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-muted-foreground flex items-start gap-2">
                              <Icon name="CheckCircle2" size={16} className="text-primary mt-1 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Icon name="Clock" size={18} className="text-primary" />
                            <span className="font-medium">{doctor.schedule}</span>
                          </div>
                          <Link to="/appointment">
                            <Button>
                              Записаться к врачу
                              <Icon name="ArrowRight" size={18} className="ml-2" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-primary/20">
            <CardHeader className="text-center">
              <Icon name="Users" size={48} className="text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">Почему нашим врачам доверяют</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Постоянное обучение</p>
                    <p className="text-sm text-muted-foreground">
                      Все врачи регулярно проходят курсы повышения квалификации
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Международный опыт</p>
                    <p className="text-sm text-muted-foreground">
                      Стажировки и сертификаты ведущих зарубежных клиник
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Индивидуальный подход</p>
                    <p className="text-sm text-muted-foreground">
                      Каждый питомец получает персональную программу лечения
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Искренняя забота</p>
                    <p className="text-sm text-muted-foreground">
                      Мы любим животных и относимся к ним как к членам семьи
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <Icon name="Calendar" size={64} className="mx-auto mb-6 opacity-90" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Выберите своего врача
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Запишитесь на прием к нужному специалисту онлайн в удобное время
          </p>
          <Link to="/appointment">
            <Button size="lg" variant="secondary" className="text-lg h-14 px-8">
              Онлайн-запись
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Doctors;
