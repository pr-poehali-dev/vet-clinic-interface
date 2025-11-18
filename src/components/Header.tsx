import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Главная' },
    { path: '/services', label: 'Услуги' },
    { path: '/doctors', label: 'Врачи' },
    { path: '/appointment', label: 'Онлайн-запись' },
    { path: '/contacts', label: 'Контакты' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Icon name="Heart" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">ВетКлиника</h1>
              <p className="text-xs text-muted-foreground">Забота о ваших питомцах</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
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
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+74951234567" className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              <Icon name="Phone" size={18} />
              +7 (495) 123-45-67
            </a>
            <Button asChild>
              <Link to="/appointment">Записаться</Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Меню"
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === item.path ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a href="tel:+74951234567" className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Icon name="Phone" size={18} />
                +7 (495) 123-45-67
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
