export interface Note {
  id: string;
  title: string;
  content: string;
  tag: string; // якщо в завданні чітко не визначен тип, то я буду робити так як Я ВВАЖАЮ ЗА ПОТРІБНЕ
  createdAt: string;
  updatedAt: string;
}

export interface CreateNote {
  title: string;
  content: string;
  tag: string;
}
