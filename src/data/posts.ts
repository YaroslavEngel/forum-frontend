import type { Post } from '../types/post';

export const posts: Post[] = [
  {
    id: 1,
    title: 'Вступ до Node.js',
    content:
      'Node.js — це середовище виконання JavaScript, побудоване на движку V8 від Chrome.',
    author: 'Ярослав I',
    category: 'programming',
  },
  {
    id: 2,
    title: 'Розуміння Express Middleware',
    content:
      "Middleware-функції мають доступ до об'єктів запиту та відповіді.",
    author: 'Ярослав II',
    category: 'programming',
  },
  {
    id: 3,
    title: 'Что сказати куратору при першій зустрічі',
    content:
      'Куди ідешь? Це моя парта. Я не буду вчити вашу дисципліну',
    author: 'Ярослав III',
    category: 'lifestyle',
  },
  {
    id: 4,
    title: 'Початок роботи з VSCODE',
    content:
      'У Visual Studio Code треба писати код, а не використовувати це як замітки',
    author: 'Ярослав IV',
    category: 'programming',
  },
  {
    id: 5,
    title: 'Моя кандидатура на пост президента Венісуели',
    content: "Якщо ви виберете мою партію Кабанотоплі, кожен особисто отримає ДЯКУЮ від президента",
    author: 'Ярослав V',
    category: 'Policy',
  },
];