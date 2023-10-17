let article = {
  title: 'Why Accessibility Matters in UI UX Design',
  date: 'May 25, 2023',
  description: 'Accessibility is a word that is often thrown around in the design field. As a UI/UX Web Designer, you might have heard this word a few times and you might wonder why it’s important.'
};


let title = document.getElementById('title');
let date = document.getElementById('date');
let description = document.getElementById('description')

title.textContent = article.title;
date.textContent = article.date;
description.textContent = article.description;

let article01 = {
  title: '101 Reasons Why You Need an Emotional Support Waterbottle',
  date: 'October 16, 2023',
  description: 'There are many reasons why we should use reusable water bottles. Two of those reasons include, to save the planet and to add personal style to your everyday objects.'
};

let title01 = document.getElementById('title01');
let date01 = document.getElementById('date01');
let description01 = document.getElementById('description01')

title01.textContent = article01.title;
date01.textContent = article01.date;
description01.textContent = article01.description;