import { questions } from './questions.js';

const element = (id) => document.getElementById(id);
const options = element('options');
const progress = element('progress');
const next = element('next');
let index = 0;
let correct = 0;

function showQuestion(moveFocus = true) {
  const question = questions[index];
  element('question').hidden = false;
  element('feedback').hidden = true;
  element('result').hidden = true;
  element('position').textContent = `Word ${index + 1} of ${questions.length}`;
  progress.value = index;
  element('word').textContent = question.word;
  options.replaceChildren(...question.options.map((option) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.lang = 'ko';
    button.textContent = `[${option}]`;
    button.addEventListener('click', () => grade(question, option), { once: true });
    return button;
  }));
  if (moveFocus) element('word').focus();
}

function grade(question, option) {
  if (!element('feedback').hidden) return;
  const right = option === question.answer;
  correct += Number(right);
  progress.value = index + 1;
  options.hidden = true;
  element('verdict').textContent = right ? 'Right' : 'Not quite';
  element('reveal').textContent = `[${question.answer}]`;
  element('reason').textContent = question.reason;
  const articles = question.articles;
  const standard = articles.length === 1 ? 'Article' : 'Articles';
  element('article').textContent = `${question.rule} · Standard Pronunciation Rules · ${standard} ${articles.join(', ')}`;
  next.textContent = index + 1 === questions.length ? 'See result' : 'Next word';
  element('feedback').hidden = false;
  element('verdict').focus();
}

function showResult() {
  element('question').hidden = true;
  element('feedback').hidden = true;
  element('result').hidden = false;
  element('position').textContent = 'Drill complete';
  element('score').textContent = `${correct} of ${questions.length} right`;
  element('score').focus();
}

next.addEventListener('click', () => {
  index += 1;
  if (index === questions.length) {
    showResult();
  } else {
    options.hidden = false;
    showQuestion();
  }
});

element('again').addEventListener('click', () => {
  index = 0;
  correct = 0;
  options.hidden = false;
  showQuestion();
});

progress.max = questions.length;
element('practice').hidden = false;
showQuestion(false);
