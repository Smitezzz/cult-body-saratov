"use client";

import { useEffect, useState } from "react";
import { BeforeAfter } from "./components/BeforeAfter";
import { Booking } from "./components/Booking";
import { FAQ } from "./components/FAQ";

const services = [
  ["01", "Коррекция фигуры", ["RSL-скульптурирование", "LPG", "EMS", "Аппаратная коррекция фигуры"]],
  ["02", "Массаж", ["Аппаратный массаж", "Оздоровительный массаж", "Антицеллюлитный массаж", "Релаксирующий массаж", "Лимфодренаж", "Массаж женский", "Массаж мужской"]],
  ["03", "Лазерная эпиляция", ["Женская эпиляция", "Женская эпиляция — комплекс", "Мужская эпиляция"]],
  ["04", "Ногтевой сервис", ["Женский педикюр", "Мужской педикюр", "Мужской маникюр", "Аппаратный маникюр", "Гель-лак", "Наращивание гелем", "Наращивание акрилом"]],
  ["05", "Солярий", ["Вертикальный солярий", "Горизонтальный солярий", "Турбосолярий"]],
  ["06", "Косметология", ["Косметология"]],
  ["07", "Комплексы", ["Комплекс процедур"]],
  ["08", "Абонементы", ["Абонемент"]],
] as const;

const siteBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function Brand({ compact = false }: { compact?: boolean }) {
  return <span className={compact ? "brand compact" : "brand"}><span>CULT</span><span>BODY</span></span>;
}

export default function Home() {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")), { threshold: .1 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return <main>
    <header className="header">
      <a href="#top" aria-label="Cult Body — наверх"><Brand compact /></a>
      <nav className={menu ? "nav open" : "nav"} aria-label="Главное меню">
        <a href="#about" onClick={() => setMenu(false)}>О студии</a><a href="#services" onClick={() => setMenu(false)}>Услуги</a><a href="#results" onClick={() => setMenu(false)}>Результаты</a><a href="#contacts" onClick={() => setMenu(false)}>Контакты</a>
      </nav>
      <a className="header-book" href="#booking">Записаться</a>
      <button className="menu-button" onClick={() => setMenu(!menu)} aria-label="Меню" aria-expanded={menu}><i/><i/></button>
    </header>

    <section className="hero" id="top">
      <div className="hero-stone" aria-hidden="true"><div className="seal"><Brand /><small>САРАТОВ · 2026</small></div></div>
      <div className="hero-content">
        <p className="eyebrow">Студия эстетики тела · Саратов</p>
        <h1>Территория<br/><em>красивого</em> тела</h1>
        <div className="hero-info"><p>Эстетика тела · массаж · солярий<br/>эпиляция · ногтевой сервис</p><p>Ежедневно<br/>10:00–21:00</p></div>
        <a className="round-link" href="#booking">Запись <span>↗</span></a>
      </div>
      <div className="hero-rail"><span>CULT BODY</span><span>01 / 08</span></div>
    </section>

    <section className="manifest section" id="about" data-reveal>
      <div className="section-meta"><span>01</span><span>О студии</span></div>
      <div><h2>Красота без<br/>лишнего <em>шума.</em></h2><p>Cult Body — студия в Саратове, где ручные и аппаратные методики собраны в понятную систему ухода за телом.</p></div>
    </section>

    <section className="editorial">
      <div className="editorial-photo" data-reveal style={{ backgroundImage: `linear-gradient(rgba(40,29,20,.12),rgba(40,29,20,.12)),url('${siteBase}/images/cult-body-editorial.jpg')` }}><span>CULT BODY / INSTAGRAM</span></div>
      <div className="editorial-copy"><p className="eyebrow">Подход</p><h2>Точно.<br/>Деликатно.<br/><em>По делу.</em></h2><p>Без универсальных обещаний. Методика и интенсивность подбираются под задачу, исходное состояние и ограничения.</p></div>
    </section>

    <section className="services section" id="services">
      <div className="section-meta"><span>02</span><span>Направления</span></div>
      <div className="services-head" data-reveal><h2>Все услуги.<br/><em>По направлениям.</em></h2><p>Полный перечень по данным карточки Cult Body в 2ГИС. Актуальную стоимость администратор подтвердит при записи.</p></div>
      <div className="service-list">
        {services.map((group) => <article key={group[0]} data-reveal><span>{group[0]}</span><h3>{group[1]}</h3><div>{group[2].map((service) => <a href="#booking" key={service}>{service}<b>↗</b></a>)}</div></article>)}
      </div>
    </section>

    <section className="offer section">
      <div className="section-meta"><span>03</span><span>Первый визит</span></div>
      <div className="offer-mark">−10<sup>%</sup></div>
      <div className="offer-copy"><p className="eyebrow">Знакомство с Cult Body</p><h2>Первый визит<br/><em>на ваших условиях.</em></h2><p>Скидка 10% на первый визит. Предложение не распространяется на RSL.</p><a href="#booking">Выбрать услугу ↗</a></div>
    </section>

    <BeforeAfter />

    <section className="space section" id="space">
      <div className="section-meta"><span>05</span><span>Пространство</span></div>
      <div className="space-title" data-reveal><h2>Спокойная среда.<br/><em>Частный ритм.</em></h2><p>Октябрьский район<br/>1-й Вакуровский проезд, 1<br/>цокольный этаж</p></div>
      <div className="space-collage">
        <figure className="space-main" data-reveal><img src={`${siteBase}/images/cult-body-space.jpg`} alt="Реальный интерьер студии Cult Body"/><figcaption>CULT BODY / САРАТОВ</figcaption></figure>
        <div className="space-stone" data-reveal><div className="mini-seal"><Brand compact /></div><span>NATURAL / TACTILE / QUIET</span></div>
        <a className="route" href="https://2gis.ru/saratov/firm/70000001094191405" target="_blank" rel="noreferrer">Построить маршрут в 2ГИС <span>↗</span></a>
      </div>
    </section>

    <section className="instagram-gallery section" id="gallery">
      <div className="section-meta"><span>06</span><span>Instagram / @cult__body</span></div>
      <div className="gallery-head" data-reveal><p className="eyebrow">Cult Body изнутри</p><h2>Реальные кадры.<br/><em>Реальная студия.</em></h2><a href="https://www.instagram.com/cult__body/" target="_blank" rel="noreferrer">Смотреть Instagram ↗</a></div>
      <div className="gallery-grid">
        <figure className="gallery-a" data-reveal><img src={`${siteBase}/images/cult-body-pause.jpg`} alt="Момент отдыха в Cult Body"/><figcaption>PAUSE / CULT BODY</figcaption></figure>
        <figure className="gallery-b" data-reveal><img src={`${siteBase}/images/cult-body-ritual.jpg`} alt="Тёплая деталь ухода Cult Body"/><figcaption>RITUAL / DETAIL</figcaption></figure>
        <figure className="gallery-c" data-reveal><img src={`${siteBase}/images/cult-body-facial.jpg`} alt="Уходовая процедура для лица в Cult Body"/><figcaption>FACE / CARE</figcaption></figure>
        <figure className="gallery-d" data-reveal><img src={`${siteBase}/images/cult-body-gift.jpg`} alt="Подарочные сертификаты Cult Body"/><figcaption>GIFT / CULT BODY</figcaption></figure>
        <figure className="gallery-e" data-reveal><img src={`${siteBase}/images/cult-body-interior-detail.jpg`} alt="Деталь реального интерьера Cult Body"/><figcaption>SPACE / SARATOV</figcaption></figure>
      </div>
    </section>

    <section className="review section" data-reveal>
      <div className="section-meta"><span>07</span><span>Отзывы</span></div>
      <div className="rating"><strong>4,6</strong><span>из 5</span></div>
      <blockquote>Оценка студии<br/>по данным 2ГИС.</blockquote>
      <div className="review-meta"><span>22 оценки · 17 отзывов</span><a href="https://2gis.ru/saratov/firm/70000001094191405/tab/reviews" target="_blank" rel="noreferrer">Смотреть отзывы ↗</a></div>
    </section>

    <FAQ />
    <Booking />

    <footer id="contacts">
      <div className="footer-brand"><Brand /><p>Территория красивого тела<br/>Саратов</p></div>
      <div className="footer-grid"><div><span>Контакты</span><a href="tel:+78452403340">+7 (8452) 40-33-40</a><p>1-й Вакуровский проезд, 1<br/>цокольный этаж</p></div><div><span>Режим</span><p>Ежедневно<br/>10:00–21:00</p></div><div><span>Связь</span><a href="https://wa.me/79027103340" target="_blank" rel="noreferrer">WhatsApp ↗</a><a href="https://t.me/cult_body_saratov" target="_blank" rel="noreferrer">Telegram ↗</a><a href="https://www.instagram.com/cult__body/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://2gis.ru/saratov/firm/70000001094191405" target="_blank" rel="noreferrer">2ГИС ↗</a></div></div>
      <div className="footer-bottom"><span>© 2026 CULT BODY</span><a href="#top">Наверх ↑</a><span>Саратов</span></div>
    </footer>
  </main>;
}
