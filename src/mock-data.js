const getAvatar = () => {
  return `https://api.adorable.io/avatars/50/${Math.floor(
    Math.random() * Math.floor(100)
  )}.png`;
};

export const contacts = [
  {
    avatar: getAvatar(),
    name: "Vladyslav Khrystych",
    msgCount: 0,
    msg:
      "Here’s how to follow the summit and weekend festivities, featuring CEOs, actors, authors, scientists, and engineers."
  },
  {
    avatar: getAvatar(),
    name: "Frol Enazt",
    msgCount: 0,
    msg:
      "We’ll have climate activists and CEOs, actors and authors, scientists and engineers—plus a guy who can teach you to make the world's best paper airplane."
  },
  {
    avatar: getAvatar(),
    name: "Anton Syrovatka",
    msgCount: 3,
    msg:
      "In the meantime, you can catch up on everything that happened at last year’s inaugural event"
  },
  {
    avatar: getAvatar(),
    name: "Anastasiya Kurhan",
    msgCount: 5,
    msg: "Below is the full schedule of Friday’s summit."
  },
  {
    avatar: getAvatar(),
    name: "Artyom Sazonov",
    msgCount: 1,
    msg: "Jeff Weiner, CEO, LinkedIn, with Nicholas Thompson, WIRED"
  },
  {
    avatar: getAvatar(),
    name: "Vladyslav Khrystych",
    msgCount: 0,
    msg:
      "Here’s how to follow the summit and weekend festivities, featuring CEOs, actors, authors, scientists, and engineers."
  },
  {
    avatar: getAvatar(),
    name: "Frol Enazt",
    msgCount: 0,
    msg:
      "We’ll have climate activists and CEOs, actors and authors, scientists and engineers—plus a guy who can teach you to make the world's best paper airplane."
  },
  {
    avatar: getAvatar(),
    name: "Anton Syrovatka",
    msgCount: 3,
    msg:
      "In the meantime, you can catch up on everything that happened at last year’s inaugural event"
  },
  {
    avatar: getAvatar(),
    name: "Anastasiya Kurhan",
    msgCount: 5,
    msg: "Below is the full schedule of Friday’s summit."
  },
  {
    avatar: getAvatar(),
    name: "Artyom Sazonov",
    msgCount: 1,
    msg: "Jeff Weiner, CEO, LinkedIn, with Nicholas Thompson, WIRED"
  },
  {
    avatar: getAvatar(),
    name: "Vladyslav Khrystych",
    msgCount: 0,
    msg:
      "Here’s how to follow the summit and weekend festivities, featuring CEOs, actors, authors, scientists, and engineers."
  },
  {
    avatar: getAvatar(),
    name: "Frol Enazt",
    msgCount: 0,
    msg:
      "We’ll have climate activists and CEOs, actors and authors, scientists and engineers—plus a guy who can teach you to make the world's best paper airplane."
  },
  {
    avatar: getAvatar(),
    name: "Anton Syrovatka",
    msgCount: 3,
    msg:
      "In the meantime, you can catch up on everything that happened at last year’s inaugural event"
  },
  {
    avatar: getAvatar(),
    name: "Anastasiya Kurhan",
    msgCount: 5,
    msg: "Below is the full schedule of Friday’s summit."
  },
  {
    avatar: getAvatar(),
    name: "Artyom Sazonov",
    msgCount: 1,
    msg: "Jeff Weiner, CEO, LinkedIn, with Nicholas Thompson, WIRED"
  }
];

export const messages = [
  // {
  //   incoming: true,
  //   text:
  //     "На прошедшей конференции FrontendConf было много интересных докладов про CSS."
  // },

  // {
  //   incoming: true,
  //   text:
  //     "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
  // },

  // {
  //   incoming: false,
  //   text:
  //     "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
  // },

  // {
  //   incoming: true,
  //   text:
  //     "Даже если в HTML файле нет тегов, всегда будет сгенерирован DOM из того что есть, в итоге получим:"
  // },

  // {
  //   incoming: false,
  //   text:
  //     "Это точные ответы которые корректны для всех браузеров. Дополнительно вы можете (но не обязательно) сказать что размер шрифта так же:"
  // },

  // {
  //   incoming: false,
  //   text:
  //     "Но эти значения могут быть разными в разных браузерах и могут быть изменены пользовательскими настройками."
  // },

  // {
  //   incoming: true,
  //   text:
  //     "Как уже говорилось выше, браузер создаст DOM структуру и если чего-то не хватает или есть ошибки, то браузер их попытается исправить."
  // },
  // {
  //   incoming: true,
  //   text:
  //     "На прошедшей конференции FrontendConf было много интересных докладов про CSS."
  // },

  // {
  //   incoming: true,
  //   text:
  //     "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
  // },

  // {
  //   incoming: false,
  //   text:
  //     "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
  // },

  // {
  //   incoming: true,
  //   text:
  //     "Даже если в HTML файле нет тегов, всегда будет сгенерирован DOM из того что есть, в итоге получим:"
  // },

  // {
  //   incoming: false,
  //   text:
  //     "Это точные ответы которые корректны для всех браузеров. Дополнительно вы можете (но не обязательно) сказать что размер шрифта так же:"
  // },

  // {
  //   incoming: false,
  //   text:
  //     "Но эти значения могут быть разными в разных браузерах и могут быть изменены пользовательскими настройками."
  // },

  // {
  //   incoming: true,
  //   text:
  //     "Как уже говорилось выше, браузер создаст DOM структуру и если чего-то не хватает или есть ошибки, то браузер их попытается исправить."
  // },
  // {
  //   incoming: true,
  //   text:
  //     "На прошедшей конференции FrontendConf было много интересных докладов про CSS."
  // },

  // {
  //   incoming: true,
  //   text:
  //     "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
  // },

  // {
  //   incoming: false,
  //   text:
  //     "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
  // },

  // {
  //   incoming: true,
  //   text:
  //     "Даже если в HTML файле нет тегов, всегда будет сгенерирован DOM из того что есть, в итоге получим:"
  // },

  // {
  //   incoming: false,
  //   text:
  //     "Это точные ответы которые корректны для всех браузеров. Дополнительно вы можете (но не обязательно) сказать что размер шрифта так же:"
  // },

  // {
  //   incoming: false,
  //   text:
  //     "Но эти значения могут быть разными в разных браузерах и могут быть изменены пользовательскими настройками."
  // },

  // {
  //   incoming: true,
  //   text:
  //     "Как уже говорилось выше, браузер создаст DOM структуру и если чего-то не хватает или есть ошибки, то браузер их попытается исправить."
  // },
  // {
  //   incoming: true,
  //   text:
  //     "На прошедшей конференции FrontendConf было много интересных докладов про CSS."
  // },

  // {
  //   incoming: true,
  //   text:
  //     "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
  // },

  // {
  //   incoming: false,
  //   text:
  //     "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
  // },

  // {
  //   incoming: true,
  //   text:
  //     "Даже если в HTML файле нет тегов, всегда будет сгенерирован DOM из того что есть, в итоге получим:"
  // },

  // {
  //   incoming: false,
  //   text:
  //     "Это точные ответы которые корректны для всех браузеров. Дополнительно вы можете (но не обязательно) сказать что размер шрифта так же:"
  // },

  // {
  //   incoming: false,
  //   text:
  //     "Но эти значения могут быть разными в разных браузерах и могут быть изменены пользовательскими настройками."
  // },

  // {
  //   incoming: true,
  //   text:
  //     "Как уже говорилось выше, браузер создаст DOM структуру и если чего-то не хватает или есть ошибки, то браузер их попытается исправить."
  // },
  // {
  //   incoming: true,
  //   text:
  //     "На прошедшей конференции FrontendConf было много интересных докладов про CSS."
  // },

  // {
  //   incoming: true,
  //   text:
  //     "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
  // },

  // {
  //   incoming: false,
  //   text:
  //     "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
  // },

  // {
  //   incoming: true,
  //   text:
  //     "Даже если в HTML файле нет тегов, всегда будет сгенерирован DOM из того что есть, в итоге получим:"
  // },

  // {
  //   incoming: false,
  //   text:
  //     "Это точные ответы которые корректны для всех браузеров. Дополнительно вы можете (но не обязательно) сказать что размер шрифта так же:"
  // },

  // {
  //   incoming: false,
  //   text:
  //     "Но эти значения могут быть разными в разных браузерах и могут быть изменены пользовательскими настройками."
  // },

  // {
  //   incoming: true,
  //   text:
  //     "Как уже говорилось выше, браузер создаст DOM структуру и если чего-то не хватает или есть ошибки, то браузер их попытается исправить."
  // },
  // {
  //   incoming: true,
  //   text:
  //     "На прошедшей конференции FrontendConf было много интересных докладов про CSS."
  // },

  // {
  //   incoming: true,
  //   text:
  //     "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
  // },

  // {
  //   incoming: false,
  //   text:
  //     "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
  // },

  // {
  //   incoming: true,
  //   text:
  //     "Даже если в HTML файле нет тегов, всегда будет сгенерирован DOM из того что есть, в итоге получим:"
  // },

  // {
  //   incoming: false,
  //   text:
  //     "Это точные ответы которые корректны для всех браузеров. Дополнительно вы можете (но не обязательно) сказать что размер шрифта так же:"
  // },

  // {
  //   incoming: false,
  //   text:
  //     "Но эти значения могут быть разными в разных браузерах и могут быть изменены пользовательскими настройками."
  // },

  // {
  //   incoming: true,
  //   text:
  //     "Как уже говорилось выше, браузер создаст DOM структуру и если чего-то не хватает или есть ошибки, то браузер их попытается исправить."
  // },
  // {
  //   incoming: true,
  //   text:
  //     "На прошедшей конференции FrontendConf было много интересных докладов про CSS."
  // },

  // {
  //   incoming: true,
  //   text:
  //     "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
  // },

  // {
  //   incoming: false,
  //   text:
  //     "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
  // },

  // {
  //   incoming: true,
  //   unread: true,
  //   text:
  //     "Даже если в HTML файле нет тегов, всегда будет сгенерирован DOM из того что есть, в итоге получим:"
  // },

  // {
  //   incoming: false,
  //   text:
  //     "Это точные ответы которые корректны для всех браузеров. Дополнительно вы можете (но не обязательно) сказать что размер шрифта так же:"
  // },

  // {
  //   incoming: false,
  //   text:
  //     "Но эти значения могут быть разными в разных браузерах и могут быть изменены пользовательскими настройками."
  // },

  // {
  //   incoming: true,
  //   text:
  //     "Как уже говорилось выше, браузер создаст DOM структуру и если чего-то не хватает или есть ошибки, то браузер их попытается исправить."
  // },
  // {
  //   incoming: true,
  //   text:
  //     "На прошедшей конференции FrontendConf было много интересных докладов про CSS."
  // },

  // {
  //   incoming: true,
  //   text:
  //     "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
  // },

  // {
  //   incoming: false,
  //   text:
  //     "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
  // },

  // {
  //   incoming: true,
  //   text:
  //     "Даже если в HTML файле нет тегов, всегда будет сгенерирован DOM из того что есть, в итоге получим:"
  // },

  // {
  //   incoming: false,
  //   text:
  //     "Это точные ответы которые корректны для всех браузеров. Дополнительно вы можете (но не обязательно) сказать что размер шрифта так же:"
  // },

  // {
  //   incoming: false,
  //   text:
  //     "Но эти значения могут быть разными в разных браузерах и могут быть изменены пользовательскими настройками."
  // },

  // {
  //   incoming: true,
  //   text:
  //     "Как уже говорилось выше, браузер создаст DOM структуру и если чего-то не хватает или есть ошибки, то браузер их попытается исправить."
  // },
  // {
  //   incoming: true,
  //   text:
  //     "На прошедшей конференции FrontendConf было много интересных докладов про CSS."
  // },

  // {
  //   incoming: true,
  //   text:
  //     "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
  // },

  // {
  //   incoming: false,
  //   text:
  //     "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
  // },

  // {
  //   incoming: true,
  //   text:
  //     "Даже если в HTML файле нет тегов, всегда будет сгенерирован DOM из того что есть, в итоге получим:"
  // },

  // {
  //   incoming: false,
  //   text:
  //     "Это точные ответы которые корректны для всех браузеров. Дополнительно вы можете (но не обязательно) сказать что размер шрифта так же:"
  // },

  // {
  //   incoming: false,
  //   text:
  //     "Но эти значения могут быть разными в разных браузерах и могут быть изменены пользовательскими настройками."
  // },

  // {
  //   incoming: true,
  //   text:
  //     "Как уже говорилось выше, браузер создаст DOM структуру и если чего-то не хватает или есть ошибки, то браузер их попытается исправить."
  // },
  // {
  //   incoming: true,
  //   text:
  //     "На прошедшей конференции FrontendConf было много интересных докладов про CSS."
  // },

  // {
  //   incoming: true,
  //   text:
  //     "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
  // },

  // {
  //   incoming: false,
  //   text:
  //     "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
  // },

  // {
  //   incoming: true,
  //   text:
  //     "Даже если в HTML файле нет тегов, всегда будет сгенерирован DOM из того что есть, в итоге получим:"
  // },

  // {
  //   incoming: false,
  //   text:
  //     "Это точные ответы которые корректны для всех браузеров. Дополнительно вы можете (но не обязательно) сказать что размер шрифта так же:"
  // },

  // {
  //   incoming: false,
  //   text:
  //     "Но эти значения могут быть разными в разных браузерах и могут быть изменены пользовательскими настройками."
  // },

  // {
  //   incoming: true,
  //   text:
  //     "Как уже говорилось выше, браузер создаст DOM структуру и если чего-то не хватает или есть ошибки, то браузер их попытается исправить."
  // },
  // {
  //   incoming: true,
  //   text:
  //     "На прошедшей конференции FrontendConf было много интересных докладов про CSS."
  // },

  // {
  //   incoming: true,
  //   text:
  //     "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
  // },

  // {
  //   incoming: false,
  //   text:
  //     "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
  // },

  // {
  //   incoming: true,
  //   text:
  //     "Даже если в HTML файле нет тегов, всегда будет сгенерирован DOM из того что есть, в итоге получим:"
  // },

  // {
  //   incoming: false,
  //   text:
  //     "Это точные ответы которые корректны для всех браузеров. Дополнительно вы можете (но не обязательно) сказать что размер шрифта так же:"
  // },

  // {
  //   incoming: false,
  //   text:
  //     "Но эти значения могут быть разными в разных браузерах и могут быть изменены пользовательскими настройками."
  // },

  {
    incoming: true,
    time: 1560191167338,
    text:
      "Как уже говорилось выше, браузер создаст DOM структуру и если чего-то не хватает или есть ошибки, то браузер их попытается исправить."
  },
  {
    incoming: true,
    time: 1560191253053,
    text:
      "На прошедшей конференции FrontendConf было много интересных докладов про CSS."
  },

  {
    incoming: true,
    time: 1560191467540,
    text:
      "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
  },

  {
    incoming: false,
    time: 1560191679992,
    text:
      "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
  },

  {
    incoming: true,
    time: 1560191729672,
    text:
      "Даже если в HTML файле нет тегов, всегда будет сгенерирован DOM из того что есть, в итоге получим:"
  },

  {
    incoming: false,
    time: 1560191837498,
    text:
      "Это точные ответы которые корректны для всех браузеров. Дополнительно вы можете (но не обязательно) сказать что размер шрифта так же:"
  },

  {
    incoming: false,
    time: 1562253534040,
    text:
      "Но эти значения могут быть разными в разных браузерах и могут быть изменены пользовательскими настройками."
  },

  {
    incoming: true,
    time: 1565014493652,
    text:
      "Как уже говорилось выше, браузер создаст DOM структуру и если чего-то не хватает или есть ошибки, то браузер их попытается исправить."
  }
];
