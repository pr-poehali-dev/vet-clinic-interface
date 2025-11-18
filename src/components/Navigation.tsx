import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Главная' },
    { path: '/services', label: 'Услуги' },
    { path: '/doctors', label: 'Врачи' },
    { path: '/appointment', label: 'Онлайн-запись' },
    { path: '/contacts', label: 'Контакты' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Icon name="Heart" className="text-white" size={24} />
            </div>
            <div>
              <div className="font-bold text-xl text-foreground">ВетКлиника</div>
              <div className="text-xs text-muted-foreground">Забота о питомцах</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path ? 'text-primary' : 'text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="tel:+79001234567" className="hidden sm:flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Icon name="Phone" size={18} />
              <span className="text-sm font-medium">+7 900 123-45-67</span>
            </a>
            <Button asChild>
              <Link to="/appointment">Записаться</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
