import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});

  const timeline = [
    { year: '1945', title: 'Потсдамская конференция', desc: 'Раздел Германии на 4 оккупационные зоны: СССР, США, Великобритания, Франция' },
    { year: '1949', title: 'Образование двух государств', desc: 'ФРГ (23 мая) и ГДР (7 октября) — официальное разделение Германии' },
    { year: '1961', title: 'Строительство Берлинской стены', desc: '13 августа начато возведение стены, разделившей Берлин на 28 лет' },
    { year: '1989', title: 'Падение Берлинской стены', desc: '9 ноября — историческое событие, открывшее путь к объединению' },
    { year: '1990', title: 'Объединение Германии', desc: '3 октября — официальное воссоединение ФРГ и ГДР в единое государство' }
  ];

  const personalities = [
    {
      name: 'Гельмут Коль',
      role: 'Канцлер ФРГ (1982-1998)',
      contribution: 'Главный архитектор объединения Германии, провел активную дипломатию с СССР и западными партнерами',
      icon: 'User'
    },
    {
      name: 'Михаил Горбачев',
      role: 'Генеральный секретарь ЦК КПСС',
      contribution: 'Политика перестройки и гласности сделала возможным мирное объединение Германии',
      icon: 'Star'
    },
    {
      name: 'Эгон Кренц',
      role: 'Последний лидер ГДР',
      contribution: 'Принял решение об открытии границ 9 ноября 1989 года',
      icon: 'UserCheck'
    },
    {
      name: 'Ханс-Дитрих Геншер',
      role: 'Министр иностранных дел ФРГ',
      contribution: 'Провел ключевые переговоры о международном признании объединенной Германии',
      icon: 'Users'
    }
  ];

  const wallFacts = [
    {
      title: 'Строительство стены (1961)',
      content: 'В ночь с 12 на 13 августа 1961 года власти ГДР начали возведение стены. Первоначально это была колючая проволока, затем — бетонная стена высотой 3,6 метра. Протяженность составила 155 км, из них 43 км через Берлин.'
    },
    {
      title: 'Жизнь у стены',
      content: 'Стена разделила семьи, друзей и целый город. Более 5000 человек пытались бежать через стену, около 140 погибли при попытке побега. Создана «полоса смерти» с вышками, собаками и минами.'
    },
    {
      title: 'Падение стены (1989)',
      content: '9 ноября 1989 года на пресс-конференции Гюнтер Шабовски объявил о свободе передвижения. Тысячи берлинцев устремились к пограничным переходам. Стену начали разрушать народными силами.'
    }
  ];

  const quiz = [
    {
      question: 'В каком году была построена Берлинская стена?',
      options: ['1949', '1961', '1953', '1945'],
      correct: 1
    },
    {
      question: 'Какое событие напрямую привело к падению стены?',
      options: ['Военный переворот', 'Ошибка на пресс-конференции', 'Решение ООН', 'Референдум'],
      correct: 1
    },
    {
      question: 'Кто был канцлером ФРГ во время объединения?',
      options: ['Вилли Брандт', 'Конрад Аденауэр', 'Гельмут Коль', 'Ангела Меркель'],
      correct: 2
    },
    {
      question: 'Когда произошло официальное объединение Германии?',
      options: ['3 октября 1990', '9 ноября 1989', '1 января 1991', '23 мая 1990'],
      correct: 0
    }
  ];

  const checkQuiz = () => {
    let score = 0;
    quiz.forEach((q, i) => {
      if (selectedAnswers[i] === q.correct) score++;
    });
    setQuizScore(score);
  };

  return (
    <div className="min-h-screen vintage-texture">
      <header className="vintage-paper border-b-4 border-primary py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-primary text-center mb-4 animate-fade-in">
            Объединение Германии
          </h1>
          <p className="text-xl md:text-2xl text-center text-muted-foreground font-serif italic animate-fade-in">
            и падение Берлинской стены
          </p>
          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            <div className="flex items-center gap-2 text-primary">
              <Icon name="Calendar" size={20} />
              <span className="font-semibold">1945 - 1990</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <Icon name="MapPin" size={20} />
              <span className="font-semibold">Берлин, Германия</span>
            </div>
          </div>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-slide-in">
              <h2 className="text-4xl font-bold text-primary mb-6">Исторический момент</h2>
              <p className="text-lg leading-relaxed mb-4">
                Падение Берлинской стены 9 ноября 1989 года стало символом конца холодной войны и 
                началом нового этапа в истории Европы. Это событие открыло путь к объединению Германии 
                и изменило геополитическую карту мира.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Процесс объединения занял менее года — от падения стены до официального воссоединения 
                3 октября 1990 года. Этот день стал национальным праздником Германии.
              </p>
            </div>
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/8799f63c-7642-4c08-84ff-e68bdeeeffed/files/3738fdfc-ec48-4874-a23f-16dfecbb828e.jpg" 
                alt="Падение Берлинской стены" 
                className="rounded-lg shadow-2xl border-4 border-primary/20"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 vintage-paper">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary text-center mb-12 flex items-center justify-center gap-3">
            <Icon name="Clock" size={36} />
            Хронология событий
          </h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-accent/30"></div>
            {timeline.map((event, idx) => (
              <div 
                key={idx} 
                className={`relative mb-12 animate-fade-in ${idx % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-primary/20">
                  <div className={`absolute top-6 w-8 h-8 bg-accent rounded-full border-4 border-background flex items-center justify-center ${idx % 2 === 0 ? 'md:-right-4' : 'md:-left-4'} -left-12`}>
                    <span className="text-xs font-bold text-background">{idx + 1}</span>
                  </div>
                  <div className="text-3xl font-bold text-accent mb-2">{event.year}</div>
                  <h3 className="text-xl font-bold text-primary mb-2">{event.title}</h3>
                  <p className="text-muted-foreground">{event.desc}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary text-center mb-12 flex items-center justify-center gap-3">
            <Icon name="Users" size={36} />
            Ключевые персоналии
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalities.map((person, idx) => (
              <Card 
                key={idx} 
                className="p-6 hover:scale-105 transition-transform shadow-lg border-2 border-primary/20 animate-fade-in"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center border-4 border-accent">
                    <Icon name={person.icon} size={36} className="text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary text-center mb-2">{person.name}</h3>
                <p className="text-sm font-semibold text-accent text-center mb-3">{person.role}</p>
                <p className="text-sm text-muted-foreground text-center">{person.contribution}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 vintage-paper">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-primary text-center mb-12 flex items-center justify-center gap-3">
            <Icon name="Building" size={36} />
            Берлинская стена: история
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {wallFacts.map((fact, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`} 
                className="border-2 border-primary/20 rounded-lg px-6 bg-card shadow-md animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <AccordionTrigger className="text-xl font-bold text-primary hover:text-accent">
                  {fact.title}
                </AccordionTrigger>
                <AccordionContent className="text-lg leading-relaxed text-foreground pt-4">
                  {fact.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-primary text-center mb-12 flex items-center justify-center gap-3">
            <Icon name="Image" size={36} />
            Фотогалерея
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Строительство стены, 1961', desc: 'Восточногерманские солдаты возводят заграждения' },
              { title: 'Жизнь у стены, 1970-е', desc: 'Повседневная жизнь разделенного города' },
              { title: 'Падение стены, 1989', desc: 'Берлинцы празднуют историческое событие' },
              { title: 'Объединение, 1990', desc: 'Официальная церемония воссоединения Германии' }
            ].map((photo, idx) => (
              <Card 
                key={idx} 
                className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border-2 border-primary/20 animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="h-64 bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                  <Icon name="Camera" size={64} className="text-muted-foreground/40" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-primary mb-1">{photo.title}</h3>
                  <p className="text-sm text-muted-foreground">{photo.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 vintage-paper">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold text-primary text-center mb-12 flex items-center justify-center gap-3">
            <Icon name="GraduationCap" size={36} />
            Проверь свои знания
          </h2>
          <Card className="p-8 shadow-xl border-2 border-primary/20">
            {quiz.map((q, idx) => (
              <div key={idx} className="mb-8 last:mb-0">
                <h3 className="text-lg font-bold text-primary mb-4">
                  {idx + 1}. {q.question}
                </h3>
                <div className="space-y-2">
                  {q.options.map((option, optIdx) => (
                    <Button
                      key={optIdx}
                      variant={selectedAnswers[idx] === optIdx ? 'default' : 'outline'}
                      className={`w-full justify-start text-left h-auto py-3 ${
                        quizScore !== null && optIdx === q.correct 
                          ? 'border-green-500 bg-green-50 text-green-900' 
                          : quizScore !== null && selectedAnswers[idx] === optIdx && optIdx !== q.correct
                          ? 'border-red-500 bg-red-50 text-red-900'
                          : ''
                      }`}
                      onClick={() => {
                        if (quizScore === null) {
                          setSelectedAnswers({ ...selectedAnswers, [idx]: optIdx });
                        }
                      }}
                      disabled={quizScore !== null}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
            <div className="mt-8 flex flex-col items-center gap-4">
              {quizScore === null ? (
                <Button 
                  size="lg" 
                  onClick={checkQuiz}
                  disabled={Object.keys(selectedAnswers).length !== quiz.length}
                  className="text-lg px-8"
                >
                  Проверить ответы
                </Button>
              ) : (
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">
                    Результат: {quizScore} из {quiz.length}
                  </div>
                  <p className="text-lg text-muted-foreground mb-4">
                    {quizScore === quiz.length ? 'Отлично! Вы знаете историю!' : 
                     quizScore >= quiz.length / 2 ? 'Хорошо! Продолжайте изучать!' : 
                     'Изучите материал еще раз!'}
                  </p>
                  <Button 
                    onClick={() => {
                      setQuizScore(null);
                      setSelectedAnswers({});
                    }}
                  >
                    Пройти еще раз
                  </Button>
                </div>
              )}
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-primary text-center mb-12 flex items-center justify-center gap-3">
            <Icon name="BookOpen" size={36} />
            Материалы для уроков
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Конспект урока', desc: 'Подробный план урока с заданиями', icon: 'FileText' },
              { title: 'Презентация', desc: 'Слайды для демонстрации в классе', icon: 'Presentation' },
              { title: 'Рабочие листы', desc: 'Задания для самостоятельной работы', icon: 'ClipboardList' },
              { title: 'Видеоматериалы', desc: 'Ссылки на документальные фильмы', icon: 'Video' }
            ].map((material, idx) => (
              <Card 
                key={idx}
                className="p-6 hover:scale-105 transition-transform shadow-lg border-2 border-primary/20 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon name={material.icon} size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{material.title}</h3>
                    <p className="text-muted-foreground">{material.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="vintage-paper border-t-4 border-primary py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            Образовательный сайт для уроков истории • 2024
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Материалы предназначены для использования на уроках истории в образовательных учреждениях
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
