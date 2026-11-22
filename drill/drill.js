import { questions } from './questions.js';

// Tells the page's fallback notice that the script and its questions loaded.
window.drillStarted = true;

// Every poker fact on this page comes from questions.js, which is generated from the app. This file only lays it
// out: it draws the table and the cards, marks the choice and keeps the score. It sends and stores nothing.

const element = (id) => document.getElementById(id);
const make = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
};
const fill = (node, children) => {
  node.textContent = '';
  children.forEach((child) => node.appendChild(child));
};

// The app joins a hand's ranks with a non-breaking hyphen (U+2011). Find-in-page and some screen readers miss that
// character, so the page writes a plain hyphen and keeps the hand on one line itself.
const write = (node, text) => {
  fill(node, text.split(/(\S*\u2011\S*)/).map((part, i) => (
    i % 2 ? make('span', 'nowrap', part.replace(/\u2011/g, '-')) : document.createTextNode(part)
  )));
};

const SUITS = [['♠', 'black'], ['♥', 'red'], ['♦', 'red'], ['♣', 'black']];
const options = element('options');
const progress = element('progress');
let index = 0;
let correct = 0;
// A second tap that lands just after the page changes is not an answer: nothing counts until this time. The clock
// is the page's own, which never runs backwards.
let readyAt = 0;
const settle = () => { readyAt = performance.now() + 350; };
const settled = () => performance.now() >= readyAt;

// The seats in order of action, clockwise around the table, with the player at the bottom.
function drawTable(question) {
  const hero = question.seats.findIndex((seat) => seat.state === 'hero');
  const step = (2 * Math.PI) / question.seats.length;
  const pieces = [make('div', 'felt')];
  question.seats.forEach((seat, i) => {
    const angle = Math.PI / 2 + (i - hero) * step;
    const place = (node, reach) => {
      node.style.left = `${50 + 50 * reach * Math.cos(angle)}%`;
      node.style.top = `${50 + 50 * reach * Math.sin(angle)}%`;
      pieces.push(node);
    };
    const chair = make('span', `seat ${seat.state}`);
    chair.appendChild(make('span', 'name', seat.chip));
    if (seat.state === 'hero') chair.appendChild(make('span', 'you', 'You'));
    place(chair, 1);
    // Chips sit between the seat and the middle; the player's own seat is larger, so its chips sit further in.
    if (seat.bet) place(make('span', 'bet', seat.bet), seat.state === 'hero' ? 0.44 : 0.5);
  });
  fill(element('table'), pieces);
  element('table').setAttribute('aria-label', question.action);
  element('pot').textContent = `Pot: ${question.pot}. Chips are counted in big blinds.`;
  write(element('action'), question.action);
  element('story').open = false;
}

// A hand class has no suits, so the page picks them: one suit for a suited hand, two for the rest.
function drawCards(hand, n) {
  const first = SUITS[n % 4];
  const second = hand.kind === 'suited' ? first : SUITS[(n + 1 + (Math.floor(n / 4) % 3)) % 4];
  const card = (rank, [suit, colour]) => {
    const face = make('span', `playing-card ${colour}`);
    face.appendChild(make('span', 'rank', rank));
    face.appendChild(make('span', 'suit', suit));
    return face;
  };
  fill(element('cards'), [card(hand.ranks[0], first), card(hand.ranks[1], second)]);
  element('cards').setAttribute('aria-label', hand.spoken);
}

function listWords(words) {
  const rows = [];
  words.forEach(({ word, definition }) => {
    const term = make('dt');
    const meaning = make('dd');
    write(term, word);
    write(meaning, definition);
    rows.push(term, meaning);
  });
  fill(element('words'), rows);
}

function showQuestion(moveFocus = true) {
  const question = questions[index];
  element('question').hidden = false;
  element('glossary').hidden = false;
  element('feedback').hidden = true;
  element('result').hidden = true;
  element('position').textContent = `Hand ${index + 1} of ${questions.length} · ${question.chapter}`;
  progress.value = index;
  write(element('spot'), question.spot);
  drawTable(question);
  drawCards(question.hand, index);
  write(element('hand'), question.hand.name);
  write(element('prompt'), question.prompt);
  fill(options, question.options.map((option) => {
    const button = make('button');
    write(button, option.label);
    button.type = 'button';
    button.addEventListener('click', () => grade(question, option, button));
    return button;
  }));
  listWords(question.words);
  element('glossary').open = false;
  settle();
  if (moveFocus) element('position').focus();
}

// Says which choice was the play and which was the visitor's, in a mark for the eye and in words for a screen reader.
function mark(button, sign, words) {
  const icon = make('span', 'sign', ` ${sign}`);
  icon.setAttribute('aria-hidden', 'true');
  button.appendChild(icon);
  button.appendChild(make('span', 'visually-hidden', ` (${words})`));
}

function grade(question, option, chosen) {
  if (!settled() || !element('feedback').hidden) return;
  const right = option.id === question.answer;
  const play = question.options.find((each) => each.id === question.answer);
  correct += Number(right);
  progress.value = index + 1;
  Array.from(options.children).forEach((button, i) => {
    button.disabled = true;
    if (question.options[i].id !== question.answer) return;
    button.classList.add('right');
    mark(button, '✓', right ? 'your answer, and the play' : 'the play');
  });
  if (!right) {
    chosen.classList.add('wrong');
    mark(chosen, '✗', 'your answer');
  }
  element('verdict').textContent = right ? 'Right' : 'Not quite';
  element('verdict').className = right ? 'right' : 'wrong';
  write(element('play'), play.label);
  write(element('chose'), `You chose: ${option.label}`);
  element('chose').hidden = right;
  write(element('line'), question.line);
  write(element('size'), question.size);
  element('size').hidden = !question.size;
  element('size-label').hidden = !question.size;
  write(element('rule'), question.rule);
  listWords(question.words.concat(question.moreWords));
  element('next').textContent = index + 1 === questions.length ? 'See your score' : 'Next hand';
  element('feedback').hidden = false;
  settle();
  element('verdict').focus();
}

function showResult() {
  element('question').hidden = true;
  element('feedback').hidden = true;
  element('glossary').hidden = true;
  element('result').hidden = false;
  element('position').textContent = 'Drill complete';
  element('score').textContent = `${correct} of ${questions.length} right`;
  settle();
  element('score').focus();
}

element('next').addEventListener('click', () => {
  if (!settled()) return;
  index += 1;
  if (index === questions.length) showResult();
  else showQuestion();
});

element('again').addEventListener('click', () => {
  if (!settled()) return;
  index = 0;
  correct = 0;
  showQuestion();
});

// The store link is plain markup; this only stops a stray second tap from following it.
element('store').addEventListener('click', (event) => {
  if (!settled()) event.preventDefault();
});

try {
  progress.max = questions.length;
  showQuestion(false);
  element('practice').hidden = false;
  element('unsupported').hidden = true;
} catch (problem) {
  element('practice').hidden = true;
  element('unsupported').hidden = false;
}
