"use client";
import { useState } from "react";
const items = [
  ["С чего начинается работа?", "С консультации и оценки исходного состояния. После неё специалист предлагает программу, срок и стоимость."],
  ["Когда оценивают результат?", "Промежуточную динамику фиксируем в ходе курса. Итоговую — после завершения программы в одинаковых условиях."],
  ["Есть ли противопоказания?", "Да. Перед процедурой специалист собирает анамнез. При наличии ограничений визит переносится до консультации врача."],
  ["Можно ли прийти на одну процедуру?", "Да. Разовые процедуры доступны. Если задача требует курса, специалист скажет об этом до начала работы."],
];
export function FAQ(){ const [open,setOpen]=useState(0); return <section className="faq section" id="faq"><div className="section-no">07</div><div className="faq-title"><p className="label">Вопросы</p><h2>До первого визита.</h2><a href="mailto:hello@cultbody.ru">Задать вопрос ↗</a></div><div className="faq-list">{items.map((item,i)=><article className={open===i?"active":""} key={item[0]}><button onClick={()=>setOpen(open===i?-1:i)} aria-expanded={open===i}><span>0{i+1}</span><b>{item[0]}</b><i>{open===i?'−':'+'}</i></button><div><p>{item[1]}</p></div></article>)}</div></section> }
