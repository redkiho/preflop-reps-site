// Generated from the app's own lessons and cheat sheet. Do not edit by hand.
export const questions = [
  {
    "chapter": "Opening, and how much",
    "spot": "Under the gun · 100 big blinds",
    "prompt": "You're first to act. Raise or fold?",
    "pot": "1.5 big blinds",
    "action": "The blinds are in.",
    "seats": [
      {
        "chip": "1ST",
        "state": "hero",
        "bet": ""
      },
      {
        "chip": "2ND",
        "state": "waiting",
        "bet": ""
      },
      {
        "chip": "3RD",
        "state": "waiting",
        "bet": ""
      },
      {
        "chip": "4TH",
        "state": "waiting",
        "bet": ""
      },
      {
        "chip": "5TH",
        "state": "waiting",
        "bet": ""
      },
      {
        "chip": "CUTOFF",
        "state": "waiting",
        "bet": ""
      },
      {
        "chip": "BUTTON",
        "state": "waiting",
        "bet": ""
      },
      {
        "chip": "SMALL",
        "state": "waiting",
        "bet": "0.5"
      },
      {
        "chip": "BIG",
        "state": "waiting",
        "bet": "1"
      }
    ],
    "hand": {
      "name": "A‑9 offsuit",
      "spoken": "ace nine offsuit",
      "kind": "offsuit",
      "ranks": [
        "A",
        "9"
      ]
    },
    "options": [
      {
        "id": "fold",
        "label": "Fold"
      },
      {
        "id": "raise",
        "label": "Raise 4 big blinds"
      }
    ],
    "answer": "fold",
    "line": "A‑9 offsuit is two kickers short of opening from under the gun; the last ones in are A‑10 suited and A‑J offsuit.",
    "size": "Raise to 4 big blinds when you're in.",
    "rule": "Fold the rest from up front: weak aces and small cards lose to the hands that call or raise behind you.",
    "words": [
      {
        "word": "UTG",
        "definition": "Under the gun: the first seat to act before the flop, left of the big blind. It has the most players behind it, so it plays the fewest hands."
      },
      {
        "word": "Big blind",
        "definition": "The seat left of the small blind. It posts the full forced bet, and sizes are counted in big blinds: 3bb is three of them."
      },
      {
        "word": "Offsuit",
        "definition": "Two cards of different suits, written with an o: AKo."
      }
    ],
    "moreWords": [
      {
        "word": "Kicker",
        "definition": "The second card of a hand like A9: if both players pair the ace, the better kicker wins."
      },
      {
        "word": "Suited",
        "definition": "Two cards of the same suit, written with an s: AKs."
      }
    ]
  },
  {
    "chapter": "Opening, and how much",
    "spot": "Button · 100 big blinds",
    "prompt": "Everyone folded to you. Raise or fold?",
    "pot": "1.5 big blinds",
    "action": "The first player folds. The second player folds. The third player folds. The fourth player folds. The fifth player folds. The sixth player folds.",
    "seats": [
      {
        "chip": "1ST",
        "state": "folded",
        "bet": ""
      },
      {
        "chip": "2ND",
        "state": "folded",
        "bet": ""
      },
      {
        "chip": "3RD",
        "state": "folded",
        "bet": ""
      },
      {
        "chip": "4TH",
        "state": "folded",
        "bet": ""
      },
      {
        "chip": "5TH",
        "state": "folded",
        "bet": ""
      },
      {
        "chip": "CUTOFF",
        "state": "folded",
        "bet": ""
      },
      {
        "chip": "BUTTON",
        "state": "hero",
        "bet": ""
      },
      {
        "chip": "SMALL",
        "state": "waiting",
        "bet": "0.5"
      },
      {
        "chip": "BIG",
        "state": "waiting",
        "bet": "1"
      }
    ],
    "hand": {
      "name": "A‑J offsuit",
      "spoken": "ace jack offsuit",
      "kind": "offsuit",
      "ranks": [
        "A",
        "J"
      ]
    },
    "options": [
      {
        "id": "fold",
        "label": "Fold"
      },
      {
        "id": "raise",
        "label": "Raise 4 big blinds"
      }
    ],
    "answer": "raise",
    "line": "A‑J offsuit opens from the button; the last ones in are A‑2 suited and A‑2 offsuit.",
    "size": "Raise to 4 big blinds when you're in.",
    "rule": "The button opens the most hands: only the blinds are left. Raise to 4 big blinds, or 3 big blinds at a tighter table.",
    "words": [
      {
        "word": "Button",
        "definition": "The seat that acts last after the flop. A disc marks it and moves one seat to the left each hand."
      },
      {
        "word": "Big blind",
        "definition": "The seat left of the small blind. It posts the full forced bet, and sizes are counted in big blinds: 3bb is three of them."
      },
      {
        "word": "Offsuit",
        "definition": "Two cards of different suits, written with an o: AKo."
      }
    ],
    "moreWords": [
      {
        "word": "Suited",
        "definition": "Two cards of the same suit, written with an s: AKs."
      },
      {
        "word": "Blinds",
        "definition": "The two forced bets posted before the cards are dealt, by the two seats left of the button. They give everyone something to win."
      }
    ]
  },
  {
    "chapter": "Limpers",
    "spot": "Button vs 1 limper · 100 big blinds",
    "prompt": "One player limped. Raise, limp or fold?",
    "pot": "2.5 big blinds",
    "action": "The first player calls 1 big blind. The second player folds. The third player folds. The fourth player folds. The fifth player folds. The sixth player folds.",
    "seats": [
      {
        "chip": "1ST",
        "state": "limped",
        "bet": "1"
      },
      {
        "chip": "2ND",
        "state": "folded",
        "bet": ""
      },
      {
        "chip": "3RD",
        "state": "folded",
        "bet": ""
      },
      {
        "chip": "4TH",
        "state": "folded",
        "bet": ""
      },
      {
        "chip": "5TH",
        "state": "folded",
        "bet": ""
      },
      {
        "chip": "CUTOFF",
        "state": "folded",
        "bet": ""
      },
      {
        "chip": "BUTTON",
        "state": "hero",
        "bet": ""
      },
      {
        "chip": "SMALL",
        "state": "waiting",
        "bet": "0.5"
      },
      {
        "chip": "BIG",
        "state": "waiting",
        "bet": "1"
      }
    ],
    "hand": {
      "name": "A‑J offsuit",
      "spoken": "ace jack offsuit",
      "kind": "offsuit",
      "ranks": [
        "A",
        "J"
      ]
    },
    "options": [
      {
        "id": "fold",
        "label": "Fold"
      },
      {
        "id": "call",
        "label": "Limp"
      },
      {
        "id": "raise",
        "label": "Raise 5 big blinds"
      }
    ],
    "answer": "raise",
    "line": "A‑J offsuit raises over one limper; the last ones in are A‑8 suited and A‑10 offsuit.",
    "size": "Raise to 5 big blinds when you're in: 4 big blinds, plus 1 big blind for the limper.",
    "rule": "Ace-jack is strong enough to raise a limper from the button, and you play the pot in position: one of the best spots at a live table.",
    "words": [
      {
        "word": "Button",
        "definition": "The seat that acts last after the flop. A disc marks it and moves one seat to the left each hand."
      },
      {
        "word": "Limp",
        "definition": "To just call the big blind before the flop instead of raising."
      },
      {
        "word": "Big blind",
        "definition": "The seat left of the small blind. It posts the full forced bet, and sizes are counted in big blinds: 3bb is three of them."
      },
      {
        "word": "Offsuit",
        "definition": "Two cards of different suits, written with an o: AKo."
      }
    ],
    "moreWords": [
      {
        "word": "Suited",
        "definition": "Two cards of the same suit, written with an s: AKs."
      },
      {
        "word": "In position",
        "definition": "Acting after your opponent on every street after the flop."
      }
    ]
  },
  {
    "chapter": "Limpers",
    "spot": "Cutoff vs 1 limper · 100 big blinds",
    "prompt": "One player limped. Raise, limp or fold?",
    "pot": "2.5 big blinds",
    "action": "The first player calls 1 big blind. The second player folds. The third player folds. The fourth player folds. The fifth player folds.",
    "seats": [
      {
        "chip": "1ST",
        "state": "limped",
        "bet": "1"
      },
      {
        "chip": "2ND",
        "state": "folded",
        "bet": ""
      },
      {
        "chip": "3RD",
        "state": "folded",
        "bet": ""
      },
      {
        "chip": "4TH",
        "state": "folded",
        "bet": ""
      },
      {
        "chip": "5TH",
        "state": "folded",
        "bet": ""
      },
      {
        "chip": "CUTOFF",
        "state": "hero",
        "bet": ""
      },
      {
        "chip": "BUTTON",
        "state": "waiting",
        "bet": ""
      },
      {
        "chip": "SMALL",
        "state": "waiting",
        "bet": "0.5"
      },
      {
        "chip": "BIG",
        "state": "waiting",
        "bet": "1"
      }
    ],
    "hand": {
      "name": "Q‑8 offsuit",
      "spoken": "queen eight offsuit",
      "kind": "offsuit",
      "ranks": [
        "Q",
        "8"
      ]
    },
    "options": [
      {
        "id": "fold",
        "label": "Fold"
      },
      {
        "id": "call",
        "label": "Limp"
      },
      {
        "id": "raise",
        "label": "Raise 5 big blinds"
      }
    ],
    "answer": "fold",
    "line": "Q‑8 offsuit: no offsuit queen raises over one limper; the suited ones go down to Q‑10 suited.",
    "size": "Raise to 5 big blinds when you're in: 4 big blinds, plus 1 big blind for the limper.",
    "rule": "Fold weak offsuit hands: in a crowd they make second-best pairs.",
    "words": [
      {
        "word": "Cutoff",
        "definition": "The seat just right of the button: the second-best seat at the table."
      },
      {
        "word": "Limp",
        "definition": "To just call the big blind before the flop instead of raising."
      },
      {
        "word": "Big blind",
        "definition": "The seat left of the small blind. It posts the full forced bet, and sizes are counted in big blinds: 3bb is three of them."
      },
      {
        "word": "Offsuit",
        "definition": "Two cards of different suits, written with an o: AKo."
      }
    ],
    "moreWords": [
      {
        "word": "Suited",
        "definition": "Two cards of the same suit, written with an s: AKs."
      }
    ]
  },
  {
    "chapter": "Opening, and how much",
    "spot": "Under the gun · 100 big blinds",
    "prompt": "You're first to act. Raise or fold?",
    "pot": "1.5 big blinds",
    "action": "The blinds are in.",
    "seats": [
      {
        "chip": "1ST",
        "state": "hero",
        "bet": ""
      },
      {
        "chip": "2ND",
        "state": "waiting",
        "bet": ""
      },
      {
        "chip": "3RD",
        "state": "waiting",
        "bet": ""
      },
      {
        "chip": "4TH",
        "state": "waiting",
        "bet": ""
      },
      {
        "chip": "5TH",
        "state": "waiting",
        "bet": ""
      },
      {
        "chip": "CUTOFF",
        "state": "waiting",
        "bet": ""
      },
      {
        "chip": "BUTTON",
        "state": "waiting",
        "bet": ""
      },
      {
        "chip": "SMALL",
        "state": "waiting",
        "bet": "0.5"
      },
      {
        "chip": "BIG",
        "state": "waiting",
        "bet": "1"
      }
    ],
    "hand": {
      "name": "K‑10 offsuit",
      "spoken": "king ten offsuit",
      "kind": "offsuit",
      "ranks": [
        "K",
        "10"
      ]
    },
    "options": [
      {
        "id": "fold",
        "label": "Fold"
      },
      {
        "id": "raise",
        "label": "Raise 4 big blinds"
      }
    ],
    "answer": "fold",
    "line": "K‑10 offsuit is two kickers short of opening from under the gun; the last ones in are K‑10 suited and K‑Q offsuit.",
    "size": "Raise to 4 big blinds when you're in.",
    "rule": "King-ten looks good, but first to act at a full table it folds: eight players behind you can wake up with better.",
    "words": [
      {
        "word": "UTG",
        "definition": "Under the gun: the first seat to act before the flop, left of the big blind. It has the most players behind it, so it plays the fewest hands."
      },
      {
        "word": "Big blind",
        "definition": "The seat left of the small blind. It posts the full forced bet, and sizes are counted in big blinds: 3bb is three of them."
      },
      {
        "word": "Offsuit",
        "definition": "Two cards of different suits, written with an o: AKo."
      }
    ],
    "moreWords": [
      {
        "word": "Kicker",
        "definition": "The second card of a hand like A9: if both players pair the ace, the better kicker wins."
      },
      {
        "word": "Suited",
        "definition": "Two cards of the same suit, written with an s: AKs."
      },
      {
        "word": "Full table",
        "definition": "A table of nine players, the usual live game. More players behind you means you need better hands to open."
      }
    ]
  },
  {
    "chapter": "Facing a raise",
    "spot": "Button vs cutoff open · 100 big blinds",
    "prompt": "Cutoff raises to 3 big blinds. 3-bet, call or fold?",
    "pot": "4.5 big blinds",
    "action": "The first player folds. The second player folds. The third player folds. The fourth player folds. The fifth player folds. The sixth player raises to 3 big blinds.",
    "seats": [
      {
        "chip": "1ST",
        "state": "folded",
        "bet": ""
      },
      {
        "chip": "2ND",
        "state": "folded",
        "bet": ""
      },
      {
        "chip": "3RD",
        "state": "folded",
        "bet": ""
      },
      {
        "chip": "4TH",
        "state": "folded",
        "bet": ""
      },
      {
        "chip": "5TH",
        "state": "folded",
        "bet": ""
      },
      {
        "chip": "CUTOFF",
        "state": "raised",
        "bet": "3"
      },
      {
        "chip": "BUTTON",
        "state": "hero",
        "bet": ""
      },
      {
        "chip": "SMALL",
        "state": "waiting",
        "bet": "0.5"
      },
      {
        "chip": "BIG",
        "state": "waiting",
        "bet": "1"
      }
    ],
    "hand": {
      "name": "77",
      "spoken": "pair of sevens",
      "kind": "pair",
      "ranks": [
        "7",
        "7"
      ]
    },
    "options": [
      {
        "id": "fold",
        "label": "Fold"
      },
      {
        "id": "call",
        "label": "Call"
      },
      {
        "id": "raise",
        "label": "3-bet 9 big blinds"
      }
    ],
    "answer": "call",
    "line": "77 calls the cutoff open; the last one in is 22. 10‑10 and better 3-bet.",
    "size": "3-bet to 9 big blinds: three times the 3 big blinds open.",
    "rule": "Call with pairs and suited hands that play well after the flop.",
    "words": [
      {
        "word": "Button",
        "definition": "The seat that acts last after the flop. A disc marks it and moves one seat to the left each hand."
      },
      {
        "word": "Cutoff",
        "definition": "The seat just right of the button: the second-best seat at the table."
      },
      {
        "word": "Big blind",
        "definition": "The seat left of the small blind. It posts the full forced bet, and sizes are counted in big blinds: 3bb is three of them."
      },
      {
        "word": "3-bet",
        "definition": "The re-raise after an open: the blind is the first bet, the open the second, this the third."
      }
    ],
    "moreWords": [
      {
        "word": "Suited",
        "definition": "Two cards of the same suit, written with an s: AKs."
      }
    ]
  },
  {
    "chapter": "A raise and callers",
    "spot": "Button vs under the gun open + 1 · 100 big blinds",
    "prompt": "Under the gun raises to 3 big blinds and one player calls. Squeeze or fold?",
    "pot": "7.5 big blinds",
    "action": "The first player raises to 3 big blinds. The second player folds. The third player folds. The fourth player folds. The fifth player folds. The sixth player matches the raise to 3 big blinds.",
    "seats": [
      {
        "chip": "1ST",
        "state": "raised",
        "bet": "3"
      },
      {
        "chip": "2ND",
        "state": "folded",
        "bet": ""
      },
      {
        "chip": "3RD",
        "state": "folded",
        "bet": ""
      },
      {
        "chip": "4TH",
        "state": "folded",
        "bet": ""
      },
      {
        "chip": "5TH",
        "state": "folded",
        "bet": ""
      },
      {
        "chip": "CUTOFF",
        "state": "called",
        "bet": "3"
      },
      {
        "chip": "BUTTON",
        "state": "hero",
        "bet": ""
      },
      {
        "chip": "SMALL",
        "state": "waiting",
        "bet": "0.5"
      },
      {
        "chip": "BIG",
        "state": "waiting",
        "bet": "1"
      }
    ],
    "hand": {
      "name": "Q‑Q",
      "spoken": "pair of queens",
      "kind": "pair",
      "ranks": [
        "Q",
        "Q"
      ]
    },
    "options": [
      {
        "id": "fold",
        "label": "Fold"
      },
      {
        "id": "raise",
        "label": "Squeeze 12 big blinds"
      }
    ],
    "answer": "raise",
    "line": "Q‑Q is the last pair that squeezes the under the gun open and caller; J‑J, one pair lower, is a judgement call this card doesn't cover.",
    "size": "12 big blinds: three opens, plus one for the caller.",
    "rule": "Squeeze pairs Q‑Q and up and A‑K, and small suited aces as a bluff: three times the open plus one more for each caller.",
    "words": [
      {
        "word": "Button",
        "definition": "The seat that acts last after the flop. A disc marks it and moves one seat to the left each hand."
      },
      {
        "word": "UTG",
        "definition": "Under the gun: the first seat to act before the flop, left of the big blind. It has the most players behind it, so it plays the fewest hands."
      },
      {
        "word": "Big blind",
        "definition": "The seat left of the small blind. It posts the full forced bet, and sizes are counted in big blinds: 3bb is three of them."
      },
      {
        "word": "Squeeze",
        "definition": "A 3-bet after an open and one or more calls: the opener and the callers are squeezed in between."
      }
    ],
    "moreWords": [
      {
        "word": "Suited",
        "definition": "Two cards of the same suit, written with an s: AKs."
      }
    ]
  },
  {
    "chapter": "Facing a raise",
    "spot": "Small blind vs button open · 100 big blinds",
    "prompt": "Button raises to 3 big blinds. 3-bet, call or fold?",
    "pot": "4.5 big blinds",
    "action": "The first player folds. The second player folds. The third player folds. The fourth player folds. The fifth player folds. The sixth player folds. The button raises to 3 big blinds.",
    "seats": [
      {
        "chip": "1ST",
        "state": "folded",
        "bet": ""
      },
      {
        "chip": "2ND",
        "state": "folded",
        "bet": ""
      },
      {
        "chip": "3RD",
        "state": "folded",
        "bet": ""
      },
      {
        "chip": "4TH",
        "state": "folded",
        "bet": ""
      },
      {
        "chip": "5TH",
        "state": "folded",
        "bet": ""
      },
      {
        "chip": "CUTOFF",
        "state": "folded",
        "bet": ""
      },
      {
        "chip": "BUTTON",
        "state": "raised",
        "bet": "3"
      },
      {
        "chip": "SMALL",
        "state": "hero",
        "bet": "0.5"
      },
      {
        "chip": "BIG",
        "state": "waiting",
        "bet": "1"
      }
    ],
    "hand": {
      "name": "K‑8 offsuit",
      "spoken": "king eight offsuit",
      "kind": "offsuit",
      "ranks": [
        "K",
        "8"
      ]
    },
    "options": [
      {
        "id": "fold",
        "label": "Fold"
      },
      {
        "id": "call",
        "label": "Call"
      },
      {
        "id": "raise",
        "label": "3-bet 12 big blinds"
      }
    ],
    "answer": "fold",
    "line": "K‑8 offsuit is three kickers short of 3-betting the button open; the last ones in are K‑9 suited and K‑J offsuit.",
    "size": "3-bet to 12 big blinds: four times the 3 big blinds open, out of position.",
    "rule": "Fold the rest: calling from the small blind leaves you out of position with the big blind behind.",
    "words": [
      {
        "word": "Small blind",
        "definition": "The seat left of the button. It posts half a big blind before the cards are dealt and acts first after the flop."
      },
      {
        "word": "Button",
        "definition": "The seat that acts last after the flop. A disc marks it and moves one seat to the left each hand."
      },
      {
        "word": "Big blind",
        "definition": "The seat left of the small blind. It posts the full forced bet, and sizes are counted in big blinds: 3bb is three of them."
      },
      {
        "word": "3-bet",
        "definition": "The re-raise after an open: the blind is the first bet, the open the second, this the third."
      },
      {
        "word": "Offsuit",
        "definition": "Two cards of different suits, written with an o: AKo."
      }
    ],
    "moreWords": [
      {
        "word": "Kicker",
        "definition": "The second card of a hand like A9: if both players pair the ace, the better kicker wins."
      },
      {
        "word": "Suited",
        "definition": "Two cards of the same suit, written with an s: AKs."
      },
      {
        "word": "Out of position",
        "definition": "Acting before your opponent on every street after the flop. It's harder to play, so raises from there are bigger and hands fewer."
      }
    ]
  }
];
