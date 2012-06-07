trello-colorize
===============

Greasemonkey script for adding background colors to Trello cards. This is
helpful for those using Trello for Kanban-esque purposes who want to see, at a
glance, the breakdown of the types of cards and what's blocked. The background
color of each card is determined by the color of the label applied to that
card.

Tested on:

* Chrome, using the Tampermonkey extension

Special cases:

* Purple signifies _blocked_, and is thus rendered as a border around a card of
  another color as opposed to a background color itself. This is meant to mirror
  how many teams add a flag or sticker or magnet to cards that are blocked.

Limitations:

* For cards with more than one label, a single color will win.

[Click here](https://github.com/grimradical/trello-colorize/raw/master/trello-colorize.user.js)
to install.

![Colorized trello cards](https://github.com/grimradical/trello-colorize/raw/master/trello-colorize.png)
