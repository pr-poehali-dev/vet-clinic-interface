import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Heart" className="text-white" size={24} />
              </div>
              <div>
                <div className="font-bold text-lg">ВетКлиника</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Современная ветеринарная помощь для всех видов животных, включая экзотических.
            </p>
            <div className="flex gap-3">
              <a href="tel:+74951234567" className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Icon name="Phone" size={18} />
              </a>
              <a href="mailto:info@vetclinic.ru" className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Icon name="Mail" size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Главная</Link></li>
              <li><Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Услуги</Link></li>
              <li><Link to="/doctors" className="text-sm text-muted-foreground hover:text-primary transition-colors">Врачи</Link></li>
              <li><Link to="/appointment" className="text-sm text-muted-foreground hover:text-primary transition-colors">Онлайн-запись</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Icon name="MapPin" size={16} className="mt-0.5 text-primary" />
                <span>г. Москва, ул. Ветеринарная, д. 15</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Phone" size={16} className="text-primary" />
                <a href="tel:+74951234567" className="hover:text-primary transition-colors">+7 (495) 123-45-67</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Mail" size={16} className="text-primary" />
                <a href="mailto:info@vetclinic.ru" className="hover:text-primary transition-colors">info@vetclinic.ru</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Режим работы</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="font-semibold text-foreground">Круглосуточно 24/7</li>
              <li>Без выходных</li>
              <li className="pt-2 text-primary font-medium">Экстренная помощь</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © 2025 ВетКлиника. Все права защищены.
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                ООО "Ветеринарная клиника" • ИНН 7701234567
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Icon name="FileCheck" size={16} className="text-primary" />
              <span>Лицензия № ЛО-77-01-020123 от 15.03.2020</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}