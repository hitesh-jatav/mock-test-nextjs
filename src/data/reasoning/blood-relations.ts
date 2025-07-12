export const bloodRelations = {
  set1: [
    {
      id: 1,
      question:
        "A is the mother of B. B is the sister of C. C is the father of D. How is A related to D?",
      options: ["A) Grandmother", "B) Mother", "C) Aunt", "D) Sister"],
      answer: "A",
      explanation:
        "A is the mother of B and C (since B and C are siblings). C is the father of D, making A the grandmother of D.",
      difficulty: "easy",
    },
    {
      id: 2,
      question:
        "Pointing to a man, a woman said, 'His mother is the only daughter of my father.' How is the woman related to the man?",
      options: ["A) Mother", "B) Sister", "C) Daughter", "D) Aunt"],
      answer: "A",
      explanation:
        "The only daughter of the woman’s father is the woman herself. So, she is the man’s mother.",
      difficulty: "medium",
    },
    {
      id: 3,
      question:
        "If P + Q means P is the brother of Q, P × Q means P is the mother of Q, and P ÷ Q means P is the sister of Q, then what does A × B + C ÷ D mean?",
      options: [
        "A) A is the aunt of D",
        "B) A is the mother of D",
        "C) A is the grandmother of D",
        "D) A is the sister of D",
      ],
      answer: "B",
      explanation:
        "A × B → A is the mother of B. B + C → B is the brother of C. C ÷ D → C is the sister of D. Thus, A is the mother of D.",
      difficulty: "hard",
    },
    {
      id: 4,
      question:
        "E is the son of F. G is the daughter of E. H is the brother of E. I is the wife of H. How is G related to I?",
      options: ["A) Daughter", "B) Niece", "C) Sister", "D) Mother"],
      answer: "B",
      explanation:
        "H is the brother of E, making I the sister-in-law of E. G is the daughter of E, so G is the niece of I.",
      difficulty: "medium",
    },
    {
      id: 5,
      question:
        "If M is the father of N and O is the mother of P, and N and P are siblings, then how is O related to M?",
      options: ["A) Wife", "B) Sister", "C) Mother", "D) Daughter"],
      answer: "A",
      explanation:
        "Since N and P are siblings, and M is the father of N, O must be the mother of N (and P), making O the wife of M.",
      difficulty: "easy",
    },
    {
      id: 6,
      question:
        "Pointing to a photograph, Rohan says, 'This man is the son of my father’s only daughter.' How is Rohan related to the man in the photo?",
      options: ["A) Uncle", "B) Father", "C) Brother", "D) Grandfather"],
      answer: "B",
      explanation:
        "Rohan’s father’s only daughter is Rohan’s sister (or Rohan himself if female, but name suggests male). The man in the photo is the son of that daughter, making Rohan the father.",
      difficulty: "hard",
    },
    {
      id: 7,
      question:
        "X and Y are brothers. Z is the sister of X. T is the mother of Y. How is Z related to T?",
      options: ["A) Daughter", "B) Sister", "C) Mother", "D) Aunt"],
      answer: "A",
      explanation:
        "T is the mother of Y and X (since X and Y are brothers). Z is the sister of X, so Z is also the daughter of T.",
      difficulty: "medium",
    },
    {
      id: 8,
      question:
        "A is B’s wife. C is A’s father. D is C’s only son. How is D related to B?",
      options: ["A) Brother", "B) Son", "C) Father", "D) Brother-in-law"],
      answer: "D",
      explanation:
        "C is A’s father, and D is C’s only son, making D A’s brother. Since A is B’s wife, D is B’s brother-in-law.",
      difficulty: "hard",
    },
    {
      id: 9,
      question:
        "K is the father of L. M is the wife of N. O is the son of N. L and O are siblings. How is M related to K?",
      options: ["A) Daughter", "B) Wife", "C) Sister", "D) Mother"],
      answer: "B",
      explanation:
        "Since L and O are siblings, and K is L’s father, N must be K (father of L) and M is N’s wife. Thus, M is K’s wife.",
      difficulty: "medium",
    },
    {
      id: 10,
      question:
        "P’s son Q is married to R, whose sister S is married to T. How is P related to T?",
      options: ["A) Father-in-law", "B) Uncle", "C) Brother", "D) Grandfather"],
      answer: "A",
      explanation:
        "Q is married to R, and R’s sister S is married to T, making T the brother-in-law of Q. P is Q’s father, so P is T’s father-in-law.",
      difficulty: "hard",
    },
    {
      id: 11,
      question:
        "If U is the brother of V, W is the sister of V, and X is the father of U, how is W related to X?",
      options: ["A) Daughter", "B) Sister", "C) Mother", "D) Aunt"],
      answer: "A",
      explanation:
        "X is the father of U and V (since U and V are brothers). W is the sister of V, so W is X’s daughter.",
      difficulty: "easy",
    },
    {
      id: 12,
      question:
        "Y’s mother is Z’s daughter. How is Z related to Y if Z is female?",
      options: ["A) Mother", "B) Grandmother", "C) Aunt", "D) Sister"],
      answer: "B",
      explanation: "Z’s daughter is Y’s mother, making Z Y’s grandmother.",
      difficulty: "medium",
    },
    {
      id: 13,
      question:
        "A and B are a married couple. C is A’s brother. D is C’s son. How is D related to B?",
      options: ["A) Son", "B) Nephew", "C) Brother", "D) Uncle"],
      answer: "B",
      explanation:
        "C is A’s brother, making D A’s nephew. Since A and B are married, D is B’s nephew.",
      difficulty: "easy",
    },
    {
      id: 14,
      question:
        "E is F’s daughter. G is H’s mother. F is G’s husband. How is H related to E?",
      options: ["A) Brother", "B) Sister", "C) Father", "D) Mother"],
      answer: "A",
      explanation:
        "F is G’s husband, and G is H’s mother, making F H’s father. E is F’s daughter, so H is E’s brother.",
      difficulty: "hard",
    },
    {
      id: 15,
      question:
        "K is L’s father. M is K’s sister. N is M’s daughter. How is N related to L?",
      options: ["A) Cousin", "B) Sister", "C) Aunt", "D) Niece"],
      answer: "A",
      explanation:
        "M is K’s sister, making N K’s niece. Since K is L’s father, N is L’s cousin.",
      difficulty: "medium",
    },
  ],
  set2: [
    {
      id: 1,
      question:
        "Pointing to a girl, Arun said, 'She is the daughter of my mother's only son.' How is the girl related to Arun?",
      options: ["A) Daughter", "B) Sister", "C) Niece", "D) Mother"],
      answer: "A",
      explanation:
        "Arun's mother's only son is Arun himself. So, the girl is Arun's daughter.",
      difficulty: "easy",
    },
    {
      id: 2,
      question:
        "If A is the brother of B; B is the sister of C; and C is the father of D, how is D related to A?",
      options: [
        "A) Nephew/Niece",
        "B) Son/Daughter",
        "C) Uncle",
        "D) Grandfather",
      ],
      answer: "A",
      explanation:
        "A is the uncle of D (since A is brother of B, who is sister of C, who is father of D). So D is nephew/niece of A.",
      difficulty: "medium",
    },
    {
      id: 3,
      question:
        "P's father Q is the son of R. S is R's husband. T is S's mother. How is P related to T?",
      options: [
        "A) Granddaughter",
        "B) Great-granddaughter",
        "C) Daughter",
        "D) Niece",
      ],
      answer: "B",
      explanation:
        "S is P's grandfather (father's father). T is S's mother, making T P's great-grandmother. Thus, P is T's great-granddaughter.",
      difficulty: "hard",
    },
    {
      id: 4,
      question:
        "M is N's wife. O is the son of P. N is the only son of P. How is O related to M?",
      options: ["A) Son", "B) Brother", "C) Nephew", "D) Father"],
      answer: "A",
      explanation:
        "N is P's only son, and O is P's son, so O must be N (since N is the only son). M is N's wife, so O is M's son.",
      difficulty: "medium",
    },
    {
      id: 5,
      question:
        "A is B's sister. C is B's mother. D is C's father. E is D's mother. How is A related to D?",
      options: ["A) Granddaughter", "B) Daughter", "C) Niece", "D) Mother"],
      answer: "A",
      explanation:
        "D is A's grandfather (father of her mother C), so A is D's granddaughter.",
      difficulty: "easy",
    },
    {
      id: 6,
      question:
        "If X is Y's brother, Y is Z's father, and Z is W's husband, how is W related to X?",
      options: [
        "A) Sister-in-law",
        "B) Daughter-in-law",
        "C) Mother-in-law",
        "D) Aunt",
      ],
      answer: "B",
      explanation:
        "X is uncle of Z (brother of Z's father Y). W is Z's wife, so W is X's daughter-in-law.",
      difficulty: "hard",
    },
    {
      id: 7,
      question:
        "K is L's mother. M is K's sister. N is M's husband. O is N's son. How is O related to L?",
      options: ["A) Brother", "B) Cousin", "C) Uncle", "D) Nephew"],
      answer: "B",
      explanation:
        "O is the son of L's maternal uncle (N), making O L's cousin.",
      difficulty: "medium",
    },
    {
      id: 8,
      question:
        "A and B are married. C is A's brother. D is C's daughter. How is B related to D?",
      options: ["A) Mother", "B) Aunt", "C) Sister", "D) Daughter"],
      answer: "B",
      explanation:
        "D is B's niece (daughter of B's brother-in-law C), so B is D's aunt.",
      difficulty: "easy",
    },
    {
      id: 9,
      question:
        "P is Q's son. R is Q's brother. S is R's wife. T is S's daughter. How is T related to P?",
      options: ["A) Sister", "B) Cousin", "C) Aunt", "D) Niece"],
      answer: "D",
      explanation: "T is daughter of P's uncle (R), making T P's niece.",
      difficulty: "hard",
    },
    {
      id: 10,
      question:
        "X is Y's father. Z is X's mother. A is Z's husband. How is A related to Y?",
      options: ["A) Grandfather", "B) Father", "C) Uncle", "D) Brother"],
      answer: "A",
      explanation:
        "A is Y's great-grandfather (father of Y's grandfather Z). But given options, closest is grandfather.",
      difficulty: "medium",
    },
    {
      id: 11,
      question:
        "M is N's sister. O is N's mother. P is O's father. How is P related to M?",
      options: ["A) Grandfather", "B) Father", "C) Uncle", "D) Brother"],
      answer: "A",
      explanation: "P is M's grandfather (father of her mother O).",
      difficulty: "easy",
    },
    {
      id: 12,
      question:
        "A is B's husband. C is A's sister. D is C's daughter. How is D related to B?",
      options: ["A) Niece", "B) Daughter", "C) Sister", "D) Mother"],
      answer: "A",
      explanation:
        "D is daughter of B's sister-in-law (C), making D B's niece.",
      difficulty: "medium",
    },
    {
      id: 13,
      question:
        "K is L's son. M is K's wife. N is M's mother. How is N related to L?",
      options: ["A) Mother", "B) Sister", "C) Daughter-in-law", "D) Aunt"],
      answer: "C",
      explanation:
        "N is mother of L's daughter-in-law (M), making N L's daughter-in-law's mother (but given options, closest is daughter-in-law).",
      difficulty: "hard",
    },
    {
      id: 14,
      question:
        "P is Q's brother. R is Q's son. S is P's wife. How is S related to R?",
      options: ["A) Mother", "B) Aunt", "C) Sister", "D) Daughter"],
      answer: "B",
      explanation: "S is wife of R's uncle (P), making S R's aunt.",
      difficulty: "easy",
    },
    {
      id: 15,
      question:
        "A is B's mother. C is B's sister. D is C's husband. E is D's son. How is E related to A?",
      options: ["A) Grandson", "B) Son", "C) Nephew", "D) Brother"],
      answer: "A",
      explanation: "E is son of A's daughter (C), making E A's grandson.",
      difficulty: "medium",
    },
  ],
  set3: [
    {
      id: 1,
      question:
        "Pointing to a woman, a man said, 'She is the daughter of my grandfather's only child.' How is the woman related to the man?",
      options: ["A) Sister", "B) Daughter", "C) Mother", "D) Aunt"],
      answer: "A",
      explanation:
        "The man's grandfather's only child must be his parent. The woman is the daughter of his parent, making her his sister.",
      difficulty: "easy",
    },
    {
      id: 2,
      question:
        "If A + B means A is the father of B, A - B means A is the mother of B, and A × B means A is the brother of B, then what does P × Q - R + S mean?",
      options: [
        "A) P is S's uncle",
        "B) P is S's father",
        "C) P is S's brother",
        "D) P is S's grandfather",
      ],
      answer: "A",
      explanation:
        "Breaking it down: Q is mother of R (Q - R), R is father of S (R + S), P is brother of Q (P × Q). Thus P is uncle of S.",
      difficulty: "hard",
    },
    {
      id: 3,
      question:
        "X is Y's husband. Z is X's sister. A is Z's daughter. How is A related to Y?",
      options: ["A) Niece", "B) Daughter", "C) Sister", "D) Cousin"],
      answer: "A",
      explanation:
        "Z is Y's sister-in-law (husband's sister). A is Z's daughter, making A Y's niece.",
      difficulty: "medium",
    },
    {
      id: 4,
      question:
        "M is N's father. O is M's mother. P is O's husband. Q is P's father. How is Q related to N?",
      options: [
        "A) Grandfather",
        "B) Great-grandfather",
        "C) Uncle",
        "D) Father",
      ],
      answer: "B",
      explanation:
        "P is N's grandfather (father of N's grandmother O). Q is P's father, making Q N's great-grandfather.",
      difficulty: "hard",
    },
    {
      id: 5,
      question:
        "A and B are sisters. C is B's son. D is C's father. How is D related to A?",
      options: ["A) Brother", "B) Husband", "C) Brother-in-law", "D) Father"],
      answer: "C",
      explanation: "D is married to A's sister B, making D A's brother-in-law.",
      difficulty: "easy",
    },
    {
      id: 6,
      question:
        "K is L's mother's husband. M is K's father. How is M related to L?",
      options: ["A) Father", "B) Grandfather", "C) Uncle", "D) Brother"],
      answer: "B",
      explanation:
        "K is L's father (mother's husband). M is K's father, making M L's grandfather.",
      difficulty: "medium",
    },
    {
      id: 7,
      question:
        "If P is Q's son, and Q is R's daughter, and R is S's wife, how is S related to P?",
      options: ["A) Father", "B) Grandfather", "C) Uncle", "D) Brother"],
      answer: "B",
      explanation:
        "R is P's grandmother (mother of P's parent Q). S is R's husband, making S P's grandfather.",
      difficulty: "hard",
    },
    {
      id: 8,
      question:
        "A is B's brother. C is A's wife. D is C's son. How is D related to B?",
      options: ["A) Nephew", "B) Son", "C) Brother", "D) Uncle"],
      answer: "A",
      explanation: "D is son of B's brother's wife, making D B's nephew.",
      difficulty: "easy",
    },
    {
      id: 9,
      question:
        "X is Y's father-in-law. Z is X's only son. How is Z related to Y?",
      options: ["A) Husband", "B) Brother", "C) Father", "D) Son"],
      answer: "A",
      explanation:
        "X being Y's father-in-law means X is father of Y's spouse. Z is X's only son, so Z must be Y's husband.",
      difficulty: "medium",
    },
    {
      id: 10,
      question:
        "M is N's sister. O is M's mother. P is O's father. How is P related to N?",
      options: ["A) Grandfather", "B) Father", "C) Uncle", "D) Brother"],
      answer: "A",
      explanation: "P is father of N's mother O, making P N's grandfather.",
      difficulty: "easy",
    },
    {
      id: 11,
      question:
        "A is B's daughter. C is B's sister. D is C's mother. E is D's husband. How is E related to A?",
      options: ["A) Grandfather", "B) Father", "C) Uncle", "D) Brother"],
      answer: "A",
      explanation:
        "E is husband of A's grandmother (D), making E A's grandfather.",
      difficulty: "hard",
    },
    {
      id: 12,
      question:
        "P is Q's wife's father. R is P's only son. How is R related to Q?",
      options: ["A) Brother", "B) Father", "C) Brother-in-law", "D) Son"],
      answer: "C",
      explanation:
        "P is Q's father-in-law. R is P's son, making R Q's brother-in-law (wife's brother).",
      difficulty: "medium",
    },
    {
      id: 13,
      question: "K is L's mother's sister's husband. How is K related to L?",
      options: ["A) Father", "B) Uncle", "C) Grandfather", "D) Brother"],
      answer: "B",
      explanation: "K is husband of L's maternal aunt, making K L's uncle.",
      difficulty: "easy",
    },
    {
      id: 14,
      question:
        "A is B's son. C is A's wife. D is C's father. How is D related to B?",
      options: ["A) Brother", "B) Son-in-law", "C) Father-in-law", "D) Uncle"],
      answer: "C",
      explanation:
        "D is father of B's daughter-in-law (C), making D B's father-in-law.",
      difficulty: "hard",
    },
    {
      id: 15,
      question:
        "X is Y's father's only sister. Z is X's daughter. How is Z related to Y?",
      options: ["A) Sister", "B) Cousin", "C) Aunt", "D) Niece"],
      answer: "B",
      explanation:
        "X is Y's paternal aunt. Z is X's daughter, making Z Y's cousin.",
      difficulty: "medium",
    },
  ],
  set4: [
    {
      id: 1,
      question:
        "A's father is B's step-son. C is B's husband. How is A related to C?",
      options: ["A) Grandson", "B) Son", "C) Step-son", "D) Nephew"],
      answer: "A",
      explanation:
        "B's step-son is A's father, making B A's step-grandmother. Since C is B's husband, C is A's grandfather.",
      difficulty: "hard",
    },
    {
      id: 2,
      question:
        "X is Y's half-brother. Z is X's mother but not Y's mother. How is Z related to Y?",
      options: ["A) Aunt", "B) Step-mother", "C) Mother-in-law", "D) Sister"],
      answer: "B",
      explanation:
        "Since X and Y share one parent but Z is only X's mother, Z must be Y's step-mother.",
      difficulty: "medium",
    },
    {
      id: 3,
      question:
        "P's mother Q married R after P's father died. S is R's son from a previous marriage. How is S related to P?",
      options: ["A) Brother", "B) Step-brother", "C) Cousin", "D) Uncle"],
      answer: "B",
      explanation:
        "S is P's step-brother as they share no biological parents but their parents are married.",
      difficulty: "easy",
    },
    {
      id: 4,
      question:
        "A is B's adoptive mother. C is B's biological father. D is C's current wife. How is D related to A?",
      options: ["A) Sister", "B) Wife", "C) No relation", "D) Rival"],
      answer: "C",
      explanation:
        "Adoption creates no blood relation between A and D. They are connected only through B.",
      difficulty: "hard",
    },
    {
      id: 5,
      question:
        "M is N's father's second wife. N's mother died when N was 5. O is M's daughter from her first marriage. How is O related to N?",
      options: ["A) Half-sister", "B) Step-sister", "C) Cousin", "D) Aunt"],
      answer: "B",
      explanation:
        "O is N's step-sister as they share no parents but have a parent (M) married to N's father.",
      difficulty: "medium",
    },
    {
      id: 6,
      question:
        "If P is the only son of Q's step-father, how is P related to Q?",
      options: ["A) Step-brother", "B) Half-brother", "C) Uncle", "D) Cousin"],
      answer: "A",
      explanation:
        "Q's step-father's son would be Q's step-brother if they share no biological parents.",
      difficulty: "easy",
    },
    {
      id: 7,
      question:
        "A's maternal uncle B married C. D is C's brother. How is D related to A?",
      options: [
        "A) Maternal uncle",
        "B) Father",
        "C) Brother-in-law",
        "D) No relation",
      ],
      answer: "C",
      explanation:
        "D is brother of A's maternal uncle's wife, making him A's brother-in-law.",
      difficulty: "hard",
    },
    {
      id: 8,
      question:
        "X was adopted by Y's parents. Z is Y's biological sister. How is Z related to X?",
      options: [
        "A) Sister",
        "B) Cousin",
        "C) No relation",
        "D) Adoptive sister",
      ],
      answer: "D",
      explanation:
        "Since X was adopted by Y's parents, Z becomes X's adoptive sister.",
      difficulty: "medium",
    },
    {
      id: 9,
      question:
        "P's step-mother Q has a son R from her first marriage. S is P's father. How is S related to R?",
      options: ["A) Father", "B) Step-father", "C) Uncle", "D) No relation"],
      answer: "B",
      explanation:
        "S is married to R's mother Q but isn't R's biological father, making him step-father.",
      difficulty: "easy",
    },
    {
      id: 10,
      question:
        "A's father B married C after A's mother died. C's son D is from her previous marriage. How is D related to B?",
      options: ["A) Son", "B) Step-son", "C) Nephew", "D) Brother"],
      answer: "B",
      explanation:
        "D is B's step-son as B is married to D's mother but isn't his biological father.",
      difficulty: "hard",
    },
    {
      id: 11,
      question:
        "X is Y's half-sister through their father. Z is Y's mother. How is Z related to X?",
      options: ["A) Mother", "B) Step-mother", "C) Aunt", "D) Sister"],
      answer: "B",
      explanation:
        "Since X and Y share only their father, Z is X's step-mother.",
      difficulty: "medium",
    },
    {
      id: 12,
      question:
        "P's adoptive father Q is R's biological son. How is R related to P?",
      options: ["A) Grandfather", "B) Father", "C) Uncle", "D) No relation"],
      answer: "A",
      explanation:
        "Q is P's adoptive father and R's son, making R P's adoptive grandfather.",
      difficulty: "easy",
    },
    {
      id: 13,
      question:
        "A's step-brother B has a mother C. D is C's current husband. How is D related to A?",
      options: ["A) Father", "B) Step-father", "C) Uncle", "D) Brother-in-law"],
      answer: "B",
      explanation:
        "D is married to A's step-brother's mother, making him A's step-father if D is married to A's parent.",
      difficulty: "hard",
    },
    {
      id: 14,
      question:
        "X's father Y married Z after divorcing X's mother. W is Z's daughter from a previous marriage. How is W related to X?",
      options: ["A) Half-sister", "B) Step-sister", "C) Cousin", "D) Niece"],
      answer: "B",
      explanation:
        "W is X's step-sister as they share no parents but have parents who are married.",
      difficulty: "medium",
    },
    {
      id: 15,
      question:
        "A is B's ex-wife. C is A's current husband. D is B's son from his second marriage. How is D related to C?",
      options: ["A) Son", "B) Step-son", "C) No relation", "D) Nephew"],
      answer: "C",
      explanation:
        "C is not married to D's parent nor related by blood, so no relation exists.",
      difficulty: "easy",
    },
  ],
  set5: [
    {
      id: 1,
      question:
        "A's paternal grandfather B married C after B's first wife died. D is C's son from her first marriage. How is D related to A?",
      options: ["A) Uncle", "B) Step-uncle", "C) Cousin", "D) Father"],
      answer: "B",
      explanation:
        "D is the son of A's grandfather's second wife (not A's biological grandmother), making him A's step-uncle.",
      difficulty: "hard",
    },
    {
      id: 2,
      question: "X is Y's mother-in-law's only son. How is X related to Y?",
      options: ["A) Husband", "B) Father", "C) Brother", "D) Son"],
      answer: "A",
      explanation:
        "Y's mother-in-law's only son must be Y's spouse (husband/wife). Assuming typical gender conventions, X is Y's husband.",
      difficulty: "medium",
    },
    {
      id: 3,
      question:
        "P's legal guardian Q is R's biological daughter. S is R's husband. How is S related to P?",
      options: [
        "A) Father",
        "B) Step-father",
        "C) No legal relation",
        "D) Grandfather",
      ],
      answer: "C",
      explanation:
        "Legal guardianship doesn't create blood relations. S is unrelated to P unless formally adopted.",
      difficulty: "hard",
    },
    {
      id: 4,
      question:
        "A is B's widow. C is A's brother. D is B's father. How is D related to C?",
      options: ["A) Father-in-law", "B) Brother", "C) Uncle", "D) No relation"],
      answer: "A",
      explanation:
        "D is father of C's brother-in-law (late B), making D C's father-in-law.",
      difficulty: "medium",
    },
    {
      id: 5,
      question:
        "M is N's only maternal uncle. O is M's wife. P is O's sister. How is P related to N?",
      options: ["A) Aunt", "B) Mother", "C) Sister-in-law", "D) Cousin"],
      answer: "A",
      explanation:
        "P is sister of N's maternal uncle's wife, making her N's aunt by marriage.",
      difficulty: "easy",
    },
    {
      id: 6,
      question:
        "X's father Y is Z's son-in-law. W is Z's only child. How is W related to X?",
      options: ["A) Mother", "B) Grandmother", "C) Aunt", "D) Sister"],
      answer: "A",
      explanation:
        "Z's son-in-law Y is married to Z's only child W. Thus, W is X's mother.",
      difficulty: "hard",
    },
    {
      id: 7,
      question:
        "A and B are twins. C is A's daughter. D is B's husband. How is D related to C?",
      options: ["A) Father", "B) Uncle", "C) Brother-in-law", "D) Grandfather"],
      answer: "B",
      explanation:
        "D is married to C's aunt/uncle (B), making D C's uncle by marriage.",
      difficulty: "medium",
    },
    {
      id: 8,
      question:
        "K's step-daughter L is M's sister. N is M's father. How is N related to K?",
      options: ["A) Husband", "B) Brother", "C) Father-in-law", "D) Son"],
      answer: "A",
      explanation:
        "N must be K's spouse since L is K's step-daughter and N is L's father.",
      difficulty: "easy",
    },
    {
      id: 9,
      question:
        "P's ex-wife Q married R. S is R's son from a previous marriage. How is S related to P?",
      options: ["A) Step-son", "B) Son", "C) No relation", "D) Nephew"],
      answer: "C",
      explanation:
        "No blood or legal relation exists between P and S after divorce.",
      difficulty: "hard",
    },
    {
      id: 10,
      question:
        "A is B's father's sister's husband. C is A's brother. How is C related to B?",
      options: ["A) Uncle", "B) Father", "C) Cousin", "D) Grandfather"],
      answer: "A",
      explanation:
        "A is B's uncle (father's sister's husband). C is A's brother, making him another uncle.",
      difficulty: "medium",
    },
    {
      id: 11,
      question:
        "X's mother Y is Z's daughter-in-law. W is Z's son. How is W related to X?",
      options: ["A) Father", "B) Uncle", "C) Brother", "D) Grandfather"],
      answer: "A",
      explanation:
        "Z's daughter-in-law Y is married to Z's son W. Thus, W is X's father.",
      difficulty: "easy",
    },
    {
      id: 12,
      question:
        "P's sister Q adopted R. S is R's biological father. How is S related to P?",
      options: [
        "A) Brother",
        "B) Brother-in-law",
        "C) No relation",
        "D) Cousin",
      ],
      answer: "C",
      explanation:
        "Adoption by Q doesn't create a blood relation between S and P.",
      difficulty: "hard",
    },
    {
      id: 13,
      question:
        "A's father B is C's maternal grandfather. D is C's mother. How is D related to A?",
      options: ["A) Sister", "B) Daughter", "C) Wife", "D) Aunt"],
      answer: "B",
      explanation:
        "B is father of A and grandfather of C, making C's mother D A's daughter.",
      difficulty: "medium",
    },
    {
      id: 14,
      question:
        "M is N's daughter-in-law's father. O is N's son. How is O related to M?",
      options: ["A) Son", "B) Son-in-law", "C) Brother", "D) Father"],
      answer: "B",
      explanation:
        "M is father of O's wife (N's daughter-in-law), making O M's son-in-law.",
      difficulty: "easy",
    },
    {
      id: 15,
      question:
        "X's grandmother Y has only two children: Z and A. B is Z's son. C is A's daughter. How is C related to B?",
      options: ["A) Sister", "B) Cousin", "C) Niece", "D) Aunt"],
      answer: "B",
      explanation:
        "Z and A are siblings, making their children B and C cousins.",
      difficulty: "medium",
    },
  ],
};
