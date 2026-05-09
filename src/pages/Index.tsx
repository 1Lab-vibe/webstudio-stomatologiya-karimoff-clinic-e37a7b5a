import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import {
  Phone,
  MapPin,
  Clock,
  Star,
  ShieldCheck,
  Stethoscope,
  Sparkles,
  HeartPulse,
  Smile,
  Microscope,
  CalendarCheck,
} from "lucide-react";

const PHONE = "8 (495) 235-04-05";
const PHONE_HREF = "tel:+74952350405";
const ADDRESS = "Леонтьевский пер., 8с1, Москва, 125009";

const services = [
  { icon: Stethoscope, title: "Терапия", desc: "Лечение кариеса, пульпита под микроскопом", price: "от 4 500 ₽" },
  { icon: Smile, title: "Имплантация", desc: "Импланты Straumann, Nobel, MIS под ключ", price: "от 45 000 ₽" },
  { icon: Sparkles, title: "Эстетика", desc: "Виниры, реставрация, отбеливание Zoom", price: "от 12 000 ₽" },
  { icon: HeartPulse, title: "Хирургия", desc: "Удаление зубов, в т.ч. сложное", price: "от 3 500 ₽" },
  { icon: Microscope, title: "Ортодонтия", desc: "Брекеты и элайнеры, план лечения", price: "от 18 000 ₽" },
  { icon: ShieldCheck, title: "Профилактика", desc: "Чистка Air Flow, ультразвук, фтор", price: "от 6 000 ₽" },
];

const reviews = [
  {
    name: "Анна М.",
    text: "Очень аккуратное лечение, без боли и спешки. Доктор всё объяснил, показал снимки. Спасибо клинике.",
  },
  {
    name: "Игорь С.",
    text: "Делал имплант — всё прошло спокойно, прижился без проблем. Чисто, современно, в центре удобно.",
  },
  {
    name: "Екатерина В.",
    text: "Привожу всю семью. Отдельное спасибо за работу с детьми — нашли подход, ребёнок больше не боится.",
  },
];

const steps = [
  { n: "01", t: "Запись", d: "Звонок или форма. Подбираем удобное время в течение дня." },
  { n: "02", t: "Осмотр и КТ", d: "Бесплатная первичная консультация, диагностика на 3D-томографе." },
  { n: "03", t: "План и смета", d: "Прозрачный план лечения с ценами. Без навязанных услуг." },
  { n: "04", t: "Лечение", d: "Работаем под микроскопом, с гарантией на работы и материалы." },
];

const Index = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast({ title: "Заполните имя и телефон", description: "Мы перезвоним в течение 15 минут." });
      return;
    }
    toast({ title: "Заявка принята", description: "Администратор свяжется с вами в ближайшее время." });
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-hero text-primary-foreground">
              <Smile className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="font-serif text-lg font-semibold text-primary">Karimoff Clinic</div>
              <div className="text-xs text-muted-foreground">Стоматология в центре Москвы</div>
            </div>
          </div>
          <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
            <a href="#services" className="hover:text-primary">Услуги</a>
            <a href="#doctors" className="hover:text-primary">Врачи</a>
            <a href="#process" className="hover:text-primary">Как лечим</a>
            <a href="#contacts" className="hover:text-primary">Контакты</a>
          </nav>
          <a
            href={PHONE_HREF}
            className="hidden items-center gap-2 text-sm font-medium text-primary md:flex"
          >
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-soft">
        <div className="container grid gap-12 py-16 md:grid-cols-2 md:py-24">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground shadow-card">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" /> 5 лет в Леонтьевском переулке
            </div>
            <h1 className="font-serif text-4xl leading-tight text-primary md:text-6xl">
              Спокойная стоматология<br />в центре Москвы
            </h1>
            <p className="mt-5 max-w-lg text-base text-muted-foreground md:text-lg">
              Лечим взвешенно и без лишнего: микроскоп, 3D-диагностика, понятный план и фиксированная смета.
              Принимаем взрослых и детей.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="#request"><CalendarCheck className="mr-2 h-4 w-4" /> Записаться на приём</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={PHONE_HREF}><Phone className="mr-2 h-4 w-4" /> {PHONE}</a>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-muted-foreground">5,0 на Яндекс Картах</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-primary-glow" /> Лицензия Минздрава
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4 text-primary-glow" /> Ежедневно 9:00–21:00
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="relative overflow-hidden border-border shadow-soft">
              <div className="aspect-[4/5] w-full bg-gradient-hero">
                <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center text-primary-foreground">
                  <Smile className="h-16 w-16 opacity-90" strokeWidth={1.2} />
                  <div className="font-serif text-3xl">Karimoff Clinic</div>
                  <div className="max-w-xs text-sm opacity-90">
                    Современная клиника полного цикла: терапия, имплантация, эстетика, ортодонтия.
                  </div>
                </div>
              </div>
            </Card>
            <Card className="absolute -bottom-6 -left-6 hidden w-64 border-border bg-card p-4 shadow-soft md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                  <CalendarCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Первичная консультация</div>
                  <div className="text-xs text-muted-foreground">Бесплатно при лечении</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-card">
        <div className="container grid gap-8 py-10 sm:grid-cols-2 md:grid-cols-4">
          {[
            { n: "5 лет", t: "в Леонтьевском пер." },
            { n: "12+", t: "врачей-специалистов" },
            { n: "3D КТ", t: "собственная диагностика" },
            { n: "До 3 лет", t: "гарантия на работы" },
          ].map((s) => (
            <div key={s.n} className="text-center">
              <div className="font-serif text-3xl text-primary">{s.n}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container py-20">
        <div className="mb-12 max-w-2xl">
          <div className="text-sm uppercase tracking-widest text-primary-glow">Услуги</div>
          <h2 className="mt-2 font-serif text-3xl text-primary md:text-4xl">Что мы делаем</h2>
          <p className="mt-3 text-muted-foreground">
            Полный цикл стоматологической помощи. Цены указаны как ориентир — точный план составляется после осмотра.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className="group border-border p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-soft">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-xl text-primary">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-4 border-t border-border pt-4 text-sm font-medium text-foreground">{s.price}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* Doctors */}
      <section id="doctors" className="bg-secondary/40">
        <div className="container py-20">
          <div className="mb-12 max-w-2xl">
            <div className="text-sm uppercase tracking-widest text-primary-glow">Врачи</div>
            <h2 className="mt-2 font-serif text-3xl text-primary md:text-4xl">Команда клиники</h2>
            <p className="mt-3 text-muted-foreground">
              Все врачи с профильным образованием и регулярным повышением квалификации.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { n: "Каримов А. Р.", r: "Главный врач, имплантолог", e: "Опыт 15 лет" },
              { n: "Соколова Е. В.", r: "Терапевт, эндодонтист", e: "Опыт 10 лет" },
              { n: "Петров Д. М.", r: "Ортодонт", e: "Опыт 8 лет" },
            ].map((d) => (
              <Card key={d.n} className="overflow-hidden border-border shadow-card">
                <div className="aspect-[4/3] bg-gradient-hero" />
                <div className="p-5">
                  <div className="font-serif text-xl text-primary">{d.n}</div>
                  <div className="text-sm text-muted-foreground">{d.r}</div>
                  <div className="mt-2 text-xs text-primary-glow">{d.e}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="container py-20">
        <div className="mb-12 max-w-2xl">
          <div className="text-sm uppercase tracking-widest text-primary-glow">Как мы лечим</div>
          <h2 className="mt-2 font-serif text-3xl text-primary md:text-4xl">Понятный путь от записи до результата</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <Card key={s.n} className="border-border p-6 shadow-card">
              <div className="font-serif text-3xl text-primary-glow">{s.n}</div>
              <div className="mt-3 font-serif text-xl text-primary">{s.t}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.d}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-secondary/40">
        <div className="container py-20">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <div className="text-sm uppercase tracking-widest text-primary-glow">Отзывы пациентов</div>
              <h2 className="mt-2 font-serif text-3xl text-primary md:text-4xl">Что говорят о клинике</h2>
            </div>
            <a
              href="https://yandex.ru/maps/"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-primary underline-offset-4 hover:underline"
            >
              Все отзывы на Яндекс Картах →
            </a>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map((r) => (
              <Card key={r.name} className="border-border p-6 shadow-card">
                <div className="mb-3 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-foreground">«{r.text}»</p>
                <div className="mt-4 text-xs text-muted-foreground">— {r.name}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="container py-20">
        <div className="mb-12 max-w-2xl">
          <div className="text-sm uppercase tracking-widest text-primary-glow">Работы врачей</div>
          <h2 className="mt-2 font-serif text-3xl text-primary md:text-4xl">До и после</h2>
          <p className="mt-3 text-muted-foreground">Несколько примеров — реставрация, виниры, имплантация.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="overflow-hidden border-border shadow-card">
              <div className="grid grid-cols-2">
                <div className="aspect-square bg-muted" />
                <div className="aspect-square bg-gradient-hero" />
              </div>
              <div className="flex justify-between p-4 text-xs text-muted-foreground">
                <span>До</span>
                <span>После</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Request form */}
      <section id="request" className="bg-gradient-soft">
        <div className="container grid gap-10 py-20 md:grid-cols-2">
          <div>
            <div className="text-sm uppercase tracking-widest text-primary-glow">Запись</div>
            <h2 className="mt-2 font-serif text-3xl text-primary md:text-4xl">Оставьте заявку — перезвоним в течение 15 минут</h2>
            <p className="mt-4 text-muted-foreground">
              Подберём удобное время, ответим на вопросы по лечению и стоимости. Без навязывания услуг.
            </p>
            <div className="mt-8 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-primary" />
                <a href={PHONE_HREF} className="text-foreground hover:text-primary">{PHONE}</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                <span className="text-foreground">{ADDRESS}</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 text-primary" />
                <span className="text-foreground">Ежедневно с 9:00 до 21:00</span>
              </div>
            </div>
          </div>

          <Card className="border-border p-6 shadow-soft md:p-8">
            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Ваше имя</label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Как к вам обращаться"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Телефон</label>
                <Input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Комментарий</label>
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Что вас беспокоит или какая услуга интересует"
                  rows={4}
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Отправить заявку
              </Button>
              <p className="text-xs text-muted-foreground">
                Нажимая «Отправить», вы соглашаетесь с обработкой персональных данных.
              </p>
            </form>
          </Card>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="container py-20">
        <div className="mb-10 max-w-2xl">
          <div className="text-sm uppercase tracking-widest text-primary-glow">Контакты</div>
          <h2 className="mt-2 font-serif text-3xl text-primary md:text-4xl">Как нас найти</h2>
        </div>
        <Card className="overflow-hidden border-border shadow-card">
          <div className="grid md:grid-cols-2">
            <div className="space-y-5 p-8">
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Адрес</div>
                <div className="mt-1 text-foreground">{ADDRESS}</div>
                <div className="mt-1 text-sm text-muted-foreground">м. Тверская / Пушкинская — 5 минут пешком</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Телефон</div>
                <a href={PHONE_HREF} className="mt-1 block text-foreground hover:text-primary">{PHONE}</a>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Часы работы</div>
                <div className="mt-1 text-foreground">Ежедневно 9:00 — 21:00</div>
              </div>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a
                  href="https://yandex.ru/maps/?text=Леонтьевский+переулок+8с1+Москва"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MapPin className="mr-2 h-4 w-4" /> Открыть на Яндекс Картах
                </a>
              </Button>
            </div>
            <iframe
              title="Карта"
              src="https://yandex.ru/map-widget/v1/?ll=37.605%2C55.762&z=16&pt=37.605,55.762,pm2rdm"
              className="h-80 w-full border-0 md:h-full"
              loading="lazy"
            />
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Karimoff Clinic. Лицензия Министерства здравоохранения РФ.</div>
          <div className="flex gap-6">
            <a href={PHONE_HREF} className="hover:text-primary">{PHONE}</a>
            <a href="#request" className="hover:text-primary">Записаться</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
