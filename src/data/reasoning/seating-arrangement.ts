export const seatingArrangement = {
  set1: [
    {
      id: 1,
      question:
        "Five friends – A, B, C, D, and E – sit in a row facing north. A sits to the immediate left of C. E sits at one of the ends. B sits second to the right of D. Who sits in the middle?",
      options: ["A) A", "B) B", "C) C", "D) D"],
      answer: "C",
      explanation:
        "Possible arrangement: E, D, A, C, B. Thus, C is in the middle.",
      difficulty: "easy",
    },
    {
      id: 2,
      question:
        "Six people – P, Q, R, S, T, U – sit around a circular table facing the center. P sits opposite S. Q sits adjacent to neither P nor R. T sits between U and R. Who sits to the immediate left of U?",
      options: ["A) P", "B) Q", "C) R", "D) T"],
      answer: "D",
      explanation:
        "Final arrangement (clockwise): P, Q, S, U, T, R. Thus, T is to the immediate left of U.",
      difficulty: "medium",
    },
    {
      id: 3,
      question:
        "Eight people – A, B, C, D, E, F, G, H – sit at a rectangular table (4 on each long side). A sits opposite C. B is to the immediate left of F. E sits adjacent to H but not opposite D. G sits between A and D. Who sits opposite E?",
      options: ["A) B", "B) F", "C) G", "D) H"],
      answer: "B",
      explanation:
        "Arrangement logic places F opposite E due to given constraints.",
      difficulty: "hard",
    },
    {
      id: 4,
      question:
        "Seven students – K, L, M, N, O, P, Q – sit in a straight line facing south. K sits at the third position from the left. Q sits between P and M. O sits at an end but not adjacent to L. N sits to the immediate right of K. Who sits at the fourth position from the left?",
      options: ["A) L", "B) N", "C) P", "D) Q"],
      answer: "D",
      explanation:
        "Order: _ _ K N _ _ _. Q must be between P and M, placing Q in position 4.",
      difficulty: "medium",
    },
    {
      id: 5,
      question:
        "Four couples (8 people) sit around a circular table facing inward. No two women sit adjacent. R is married to S. T sits opposite U. V sits two places to the left of W. X is not adjacent to Y. If Z sits between R and U, who sits to the immediate right of S?",
      options: ["A) T", "B) V", "C) W", "D) X"],
      answer: "A",
      explanation:
        "Arrangement constraints fix T as S’s immediate right neighbor.",
      difficulty: "hard",
    },
    // Add remaining 10 questions following the same format...
    {
      id: 6,
      question:
        "Six colleagues – A, B, C, D, E, F – sit in two parallel rows of three each. A sits opposite D. B does not sit at any end. E sits to the immediate left of F. Who sits opposite C?",
      options: ["A) A", "B) B", "C) E", "D) F"],
      answer: "D",
      explanation: "Row 1: A, B, C; Row 2: D, E, F. Thus, F sits opposite C.",
      difficulty: "medium",
    },
    {
      id: 15,
      question:
        "Twelve people sit in a 3x4 rectangular grid. P is in the northwest corner. Q is south of R but east of S. T is adjacent to U diagonally. V and W are in the same row but not adjacent. If X sits west of Y, who sits in the center?",
      options: ["A) R", "B) S", "C) U", "D) V"],
      answer: "C",
      explanation: "Grid constraints place U in the central position.",
      difficulty: "hard",
    },
  ],
  set2: [
    {
      id: 1,
      question:
        "Six friends – P, Q, R, S, T, U – sit in a straight line facing north. P sits at one end. T sits between Q and U. R sits second to the left of S. Who sits at the fourth position from the left?",
      options: ["A) Q", "B) R", "C) S", "D) U"],
      answer: "B",
      explanation: "Arrangement: P, Q, T, R, U, S. R is fourth from the left.",
      difficulty: "easy",
    },
    {
      id: 2,
      question:
        "Eight people – A, B, C, D, E, F, G, H – sit around a circular table facing outward. A sits opposite E. B sits adjacent to neither C nor F. D sits between G and H. If F is to the immediate right of A, who sits opposite B?",
      options: ["A) C", "B) D", "C) G", "D) H"],
      answer: "D",
      explanation:
        "Arrangement (clockwise): A, F, C, G, D, H, E, B. H sits opposite B.",
      difficulty: "medium",
    },
    {
      id: 3,
      question:
        "Five couples (10 people) sit in two parallel rows of five each, facing each other. W is married to X. Y sits opposite Z but not next to A. B sits at an end but not opposite C. If D sits between E and F, who sits opposite W?",
      options: ["A) A", "B) C", "C) E", "D) F"],
      answer: "B",
      explanation:
        "Row 1: W, Y, D, E, F; Row 2: X, Z, C, A, B. C sits opposite W.",
      difficulty: "hard",
    },
    {
      id: 4,
      question:
        "Seven students – K, L, M, N, O, P, Q – sit in a row facing south. K sits third from the left. Q sits between P and M. O sits at an end but not next to L. N sits immediately right of K. Who sits second from the right?",
      options: ["A) L", "B) M", "C) P", "D) Q"],
      answer: "D",
      explanation:
        "Arrangement: _, _, K, N, Q, P, M. Q is second from the right.",
      difficulty: "medium",
    },
    {
      id: 5,
      question:
        "Nine people – A, B, C, D, E, F, G, H, I – sit in a 3x3 grid. A is in the top-left corner. B is in the same row as A but not adjacent. C sits diagonally opposite E. F sits above G and to the left of H. Who sits in the center?",
      options: ["A) D", "B) E", "C) F", "D) I"],
      answer: "A",
      explanation:
        "Grid:\n[A, _, B]\n[F, D, H]\n[G, E, C]. D is in the center.",
      difficulty: "hard",
    },
    {
      id: 6,
      question:
        "Four friends – J, K, L, M – and four enemies – N, O, P, Q – sit alternately in a circle facing inward. No two friends sit adjacent. J sits opposite P. K sits between O and Q. Who sits to the immediate left of J?",
      options: ["A) K", "B) L", "C) N", "D) O"],
      answer: "C",
      explanation: "Arrangement: J, N, K, O, L, P, M, Q. N is to J's left.",
      difficulty: "medium",
    },
    {
      id: 7,
      question:
        "Six colleagues – R, S, T, U, V, W – sit around a hexagonal table. R sits opposite S. T sits adjacent to neither U nor V. W sits between R and U. Who sits opposite T?",
      options: ["A) U", "B) V", "C) W", "D) S"],
      answer: "B",
      explanation: "Hexagonal arrangement places V opposite T.",
      difficulty: "easy",
    },
    {
      id: 8,
      question:
        "Twelve people sit in a 4x3 rectangular arrangement. A is in the northwest corner. B is south of C but east of D. E and F are in the same column but not adjacent. If G sits west of H, who sits in the southeast corner?",
      options: ["A) E", "B) F", "C) G", "D) H"],
      answer: "D",
      explanation: "Grid constraints place H in the southeast corner.",
      difficulty: "hard",
    },
    {
      id: 9,
      question:
        "Five girls – P, Q, R, S, T – and five boys – U, V, W, X, Y – sit alternately in a row. P sits at an end. Q sits between U and W. X sits to the immediate right of S. Who sits in the middle?",
      options: ["A) R", "B) S", "C) V", "D) W"],
      answer: "C",
      explanation:
        "Arrangement: P, U, Q, W, R, X, S, V, T, Y. V is in the middle.",
      difficulty: "medium",
    },
    {
      id: 10,
      question:
        "Eight people – A, B, C, D, E, F, G, H – sit in a circle facing center. A sits opposite C. E sits adjacent to B but not D. F sits between G and H. If D is not next to A, who sits opposite B?",
      options: ["A) D", "B) E", "C) F", "D) G"],
      answer: "A",
      explanation: "Arrangement: A, H, G, F, C, D, E, B. D sits opposite B.",
      difficulty: "hard",
    },
    {
      id: 11,
      question:
        "Seven cars – P, Q, R, S, T, U, V – are parked in a straight line. P is not at an end. Q is next to R but not T. S is two places away from U. V is at the left end. Which car is parked in the middle?",
      options: ["A) Q", "B) R", "C) S", "D) T"],
      answer: "D",
      explanation: "Arrangement: V, S, P, T, Q, R, U. T is in the middle.",
      difficulty: "medium",
    },
    {
      id: 12,
      question:
        "Six friends – A, B, C, D, E, F – sit around a round table. A sits between D and E. C sits opposite F. B does not sit next to A. Who sits to the immediate right of E?",
      options: ["A) A", "B) B", "C) D", "D) F"],
      answer: "B",
      explanation: "Arrangement: D, A, E, B, F, C. B is to E's right.",
      difficulty: "easy",
    },
    {
      id: 13,
      question:
        "Nine people sit in a 3x3 square. P is in row 2, column 2. Q is in the same row as P but not adjacent. R is diagonally opposite S. T is north of U and west of V. Who is in row 1, column 3?",
      options: ["A) Q", "B) R", "C) S", "D) V"],
      answer: "C",
      explanation:
        "Grid:\n[_, _, S]\n[_, P, Q]\n[V, U, R]. S is in row 1, column 3.",
      difficulty: "hard",
    },
    {
      id: 14,
      question:
        "Five students – K, L, M, N, O – sit in a row facing west. K sits left of L but right of M. N sits at an end. O does not sit next to K. Who sits second from the right?",
      options: ["A) K", "B) L", "C) M", "D) O"],
      answer: "A",
      explanation: "Arrangement: M, K, L, O, N. K is second from the right.",
      difficulty: "medium",
    },
    {
      id: 15,
      question:
        "Ten people sit in two parallel rows of five each. In row 1: A, B, C, D, E face row 2: P, Q, R, S, T. A sits opposite Q. B sits opposite neither P nor R. C sits to the immediate left of E. If D sits opposite S, who sits opposite T?",
      options: ["A) A", "B) C", "C) D", "D) E"],
      answer: "D",
      explanation:
        "Row 1: C, A, E, B, D; Row 2: R, Q, T, P, S. E sits opposite T.",
      difficulty: "hard",
    },
  ],
  set3: [
    {
      id: 1,
      question:
        "Six diplomats - A, B, C, D, E, F - sit around a hexagonal table facing center. A sits opposite D. F sits adjacent to neither B nor C. E sits between A and C. Who sits opposite F?",
      options: ["A) B", "B) C", "C) D", "D) E"],
      answer: "A",
      explanation:
        "Hexagonal arrangement: A, E, C, D, B, F. B sits opposite F.",
      difficulty: "medium",
    },
    {
      id: 2,
      question:
        "Eight athletes - P, Q, R, S, T, U, V, W - sit in two parallel rows of four each. In Row 1: P, Q, R, S face Row 2: T, U, V, W. P sits opposite U. Q sits to the immediate left of R. W sits at an end but not opposite S. Who sits opposite V?",
      options: ["A) P", "B) Q", "C) R", "D) S"],
      answer: "D",
      explanation: "Row 1: Q, R, P, S; Row 2: U, V, T, W. S sits opposite V.",
      difficulty: "hard",
    },
    {
      id: 3,
      question:
        "Five judges - J, K, L, M, N - and five lawyers - A, B, C, D, E - sit alternately in a circle. No two judges sit together. J sits opposite C. A sits between K and N. Who sits between D and M?",
      options: ["A) B", "B) E", "C) J", "D) L"],
      answer: "A",
      explanation:
        "Arrangement: J, A, K, B, L, C, M, D, N, E. B sits between D and M.",
      difficulty: "hard",
    },
    {
      id: 4,
      question:
        "Seven cars - H, I, J, K, L, M, N - are parked in a straight line. H is third from the left. K is between I and M. N is at an end. L is immediately right of J. Which car is second from the right?",
      options: ["A) I", "B) J", "C) K", "D) L"],
      answer: "C",
      explanation: "Arrangement: N, I, H, K, M, J, L. K is second from right.",
      difficulty: "medium",
    },
    {
      id: 5,
      question:
        "Nine chess players sit in a 3x3 grid. A is in the center. B is in the same row as C but different column. D sits north of E and west of F. G sits south of H who is east of A. Who sits in the northwest corner?",
      options: ["A) B", "B) D", "C) F", "D) H"],
      answer: "B",
      explanation: "Grid:\n[D, _, H]\n[_, A, _]\n[G, E, F]. D is in northwest.",
      difficulty: "hard",
    },
    {
      id: 6,
      question:
        "Six friends sit around a circular table. A sits two places left of D. B sits opposite E. C sits adjacent to A but not F. Who sits between B and D?",
      options: ["A) A", "B) C", "C) E", "D) F"],
      answer: "D",
      explanation:
        "Arrangement (clockwise): A, C, F, D, B, E. F sits between B and D.",
      difficulty: "medium",
    },
    {
      id: 7,
      question:
        "Ten people sit in two concentric circles (5 inner, 5 outer). Inner: A, B, C, D, E face outer: P, Q, R, S, T. A faces R. B sits adjacent to neither C nor the person facing Q. E sits between A and D. Who faces T?",
      options: ["A) B", "B) C", "C) D", "D) E"],
      answer: "C",
      explanation: "Inner: A, E, D, B, C; Outer: R, S, T, P, Q. D faces T.",
      difficulty: "hard",
    },
    {
      id: 8,
      question:
        "Five couples sit in a row. Wives sit to the right of their husbands. X is married to A. B sits between C and Y. Z sits at an end but isn't married to D. If E sits left of F, who is married to C?",
      options: ["A) A", "B) B", "C) D", "D) E"],
      answer: "D",
      explanation: "Arrangement: Z, X, A, B, C, Y, D, E, F. E is married to C.",
      difficulty: "hard",
    },
    {
      id: 9,
      question:
        "Eight boxes - P, Q, R, S, T, U, V, W - are stacked vertically. P is above Q but below R. S is immediately below T. U is between V and W. If W is at the bottom, which box is third from top?",
      options: ["A) Q", "B) R", "C) S", "D) T"],
      answer: "A",
      explanation: "Order: R, P, Q, T, S, V, U, W. Q is third from top.",
      difficulty: "medium",
    },
    {
      id: 10,
      question:
        "Seven students sit in a row facing north. K sits third from left. M sits between P and Q. O sits at an end. N sits immediately right of L. If Q is fifth from left, who sits at fourth position?",
      options: ["A) L", "B) M", "C) N", "D) P"],
      answer: "B",
      explanation: "Arrangement: O, K, P, M, Q, L, N. M is fourth.",
      difficulty: "medium",
    },
    {
      id: 11,
      question:
        "Twelve people sit in three parallel rows (4 each). In Row 1: A, B, C, D face Row 2: E, F, G, H and Row 3: I, J, K, L. A sits opposite F who sits opposite K. C sits between B and the person opposite J. If G sits left of H, who sits opposite D?",
      options: ["A) E", "B) G", "C) I", "D) L"],
      answer: "D",
      explanation:
        "Row 1: A, B, C, D; Row 2: E, G, F, H; Row 3: I, J, K, L. L sits opposite D.",
      difficulty: "hard",
    },
    {
      id: 12,
      question:
        "Six laptops - Dell, HP, Lenovo, Asus, Acer, Apple - are placed in a circle facing center. Dell is left of HP. Lenovo faces Asus. Acer is between Apple and Dell. Which laptop is right of Asus?",
      options: ["A) Dell", "B) HP", "C) Lenovo", "D) Apple"],
      answer: "B",
      explanation:
        "Arrangement (clockwise): Apple, Acer, Dell, HP, Lenovo, Asus. HP is right of Asus.",
      difficulty: "easy",
    },
    {
      id: 13,
      question:
        "Nine officials sit in a 3x3 grid. The Prime Minister sits diagonally opposite the President. The Treasurer sits north of the Secretary. The Clerk sits west of the Minister who is south of the Speaker. If the President is in row 2, column 3, who sits in row 1, column 1?",
      options: ["A) Clerk", "B) Minister", "C) Speaker", "D) Treasurer"],
      answer: "A",
      explanation:
        "Grid:\n[Clerk, Speaker, Treasurer]\n[_, _, President]\n[Minister, _, _]. Clerk is in row 1, column 1.",
      difficulty: "hard",
    },
    {
      id: 14,
      question:
        "Five children - A, B, C, D, E - sit in a row facing west. A is left of B but right of E. C sits at an end. D doesn't sit next to A. Who sits in the middle?",
      options: ["A) A", "B) B", "C) D", "D) E"],
      answer: "A",
      explanation: "Arrangement: C, E, A, B, D. A is in the middle.",
      difficulty: "easy",
    },
    {
      id: 15,
      question:
        "Eight friends sit around a rectangular table (2 on each side). P sits north of Q who faces S. R sits east of T but west of U. V sits opposite W who isn't adjacent to P. Who sits southwest?",
      options: ["A) Q", "B) R", "C) T", "D) U"],
      answer: "C",
      explanation: "Rectangular arrangement places T in the southwest corner.",
      difficulty: "hard",
    },
  ],
  set4: [
    {
      id: 1,
      question:
        "Eight executives - A, B, C, D, E, F, G, H - sit around a circular table facing center. A sits opposite C. E sits adjacent to neither B nor F. G sits between D and H. If F is to the immediate right of B, who sits opposite E?",
      options: ["A) A", "B) D", "C) F", "D) H"],
      answer: "B",
      explanation:
        "Arrangement (clockwise): A, B, F, C, G, D, H, E. D sits opposite E.",
      difficulty: "medium",
    },
    {
      id: 2,
      question:
        "Five couples (10 people) sit in two concentric circles - inner (wives) facing outer (husbands). Mrs. A sits opposite Mr. D. Mrs. B sits between Mrs. C and Mrs. E. Mr. F sits adjacent to Mr. G but not to Mr. H. If Mrs. E faces Mr. I, who sits opposite Mr. C?",
      options: ["A) Mr. A", "B) Mr. E", "C) Mr. G", "D) Mr. I"],
      answer: "D",
      explanation:
        "Inner: Mrs. C, Mrs. B, Mrs. E, Mrs. A, Mrs. D; Outer: Mr. H, Mr. G, Mr. F, Mr. I, Mr. C. Mr. I sits opposite Mr. C.",
      difficulty: "hard",
    },
    {
      id: 3,
      question:
        "Seven laptops - Dell, HP, Lenovo, Asus, Acer, Apple, MSI - are placed in a straight line. Dell is third from left. Acer is between Apple and MSI. HP is at an end but not adjacent to Lenovo. Asus is immediately left of Apple. Which laptop is second from right?",
      options: ["A) Acer", "B) Apple", "C) Lenovo", "D) MSI"],
      answer: "A",
      explanation:
        "Arrangement: HP, Lenovo, Dell, Asus, Apple, Acer, MSI. Acer is second from right.",
      difficulty: "medium",
    },
    {
      id: 4,
      question:
        "Nine boxes - P, Q, R, S, T, U, V, W, X - are stacked in a 3x3 grid. P is in the northwest corner. Q is south of R but east of S. T is north of U and west of V. W is in the center. X is not adjacent to Q. Which box is in the southeast corner?",
      options: ["A) T", "B) U", "C) V", "D) X"],
      answer: "D",
      explanation: "Grid:\n[P, S, R]\n[T, W, V]\n[Q, U, X]. X is in southeast.",
      difficulty: "hard",
    },
    {
      id: 5,
      question:
        "Six diplomats sit around a hexagonal table. American sits opposite Chinese. British sits between French and Russian. Japanese sits adjacent to neither Indian nor French. Who sits opposite Indian?",
      options: ["A) British", "B) French", "C) Japanese", "D) Russian"],
      answer: "B",
      explanation:
        "Arrangement: American, Japanese, Russian, British, French, Indian. French sits opposite Indian.",
      difficulty: "hard",
    },
    {
      id: 6,
      question:
        "Twelve people sit in three parallel rows (4 each). Row 1: A, B, C, D face Row 2: E, F, G, H and Row 3: I, J, K, L. A sits opposite G who sits opposite K. C sits between B and the person opposite J. If H sits left of E, who sits opposite D?",
      options: ["A) E", "B) F", "C) I", "D) L"],
      answer: "D",
      explanation:
        "Row 1: A, B, C, D; Row 2: H, F, G, E; Row 3: I, J, K, L. L sits opposite D.",
      difficulty: "hard",
    },
    {
      id: 7,
      question:
        "Five judges and five lawyers sit alternately in a circle. No two judges sit together. Judge A sits opposite Lawyer C. Lawyer B sits between Judges D and E. Who sits between Lawyer A and Judge C?",
      options: ["A) Judge B", "B) Lawyer D", "C) Judge E", "D) Lawyer E"],
      answer: "D",
      explanation:
        "Arrangement: Judge A, Lawyer E, Judge C, Lawyer B, Judge D, Lawyer A, Judge E, Lawyer C, Judge B, Lawyer D. Lawyer E sits between Judge A and Lawyer A.",
      difficulty: "hard",
    },
    {
      id: 8,
      question:
        "Seven cars - H, I, J, K, L, M, N - are parked in a straight line. H is third from left. K is between I and M. N is at an end. L is immediately right of J. Which car is second from right?",
      options: ["A) I", "B) J", "C) K", "D) L"],
      answer: "C",
      explanation: "Arrangement: N, I, H, K, M, J, L. K is second from right.",
      difficulty: "medium",
    },
    {
      id: 9,
      question:
        "Eight friends sit around a rectangular table (2 on each side). P sits north of Q who faces S. R sits east of T but west of U. V sits opposite W who isn't adjacent to P. Who sits southwest?",
      options: ["A) Q", "B) R", "C) T", "D) U"],
      answer: "C",
      explanation: "Rectangular arrangement places T in the southwest corner.",
      difficulty: "hard",
    },
    {
      id: 10,
      question:
        "Six colleagues - A, B, C, D, E, F - sit around a circular table facing center. A sits opposite D. B sits adjacent to neither C nor E. F sits between A and C. Who sits opposite E?",
      options: ["A) B", "B) C", "C) D", "D) F"],
      answer: "A",
      explanation:
        "Arrangement (clockwise): A, F, C, D, B, E. B sits opposite E.",
      difficulty: "medium",
    },
    {
      id: 11,
      question:
        "Nine officials sit in a 3x3 grid. The Prime Minister sits diagonally opposite the President. The Treasurer sits north of the Secretary. The Clerk sits west of the Minister who is south of the Speaker. If the President is in row 2, column 3, who sits in row 1, column 1?",
      options: ["A) Clerk", "B) Minister", "C) Speaker", "D) Treasurer"],
      answer: "A",
      explanation:
        "Grid:\n[Clerk, Speaker, Treasurer]\n[_, _, President]\n[Minister, _, _]. Clerk is in row 1, column 1.",
      difficulty: "hard",
    },
    {
      id: 12,
      question:
        "Five children - A, B, C, D, E - sit in a row facing west. A is left of B but right of E. C sits at an end. D doesn't sit next to A. Who sits in the middle?",
      options: ["A) A", "B) B", "C) D", "D) E"],
      answer: "A",
      explanation: "Arrangement: C, E, A, B, D. A is in the middle.",
      difficulty: "easy",
    },
    {
      id: 13,
      question:
        "Four couples sit around a circular table. No two women sit adjacent. Mr. A sits opposite Mrs. D. Mr. B sits between Mrs. C and Mrs. E. Mrs. F sits adjacent to Mr. G but not to Mr. H. Who sits opposite Mrs. E?",
      options: ["A) Mr. A", "B) Mr. B", "C) Mr. F", "D) Mr. H"],
      answer: "D",
      explanation:
        "Arrangement: Mr. A, Mrs. C, Mr. B, Mrs. E, Mr. H, Mrs. D, Mr. G, Mrs. F. Mr. H sits opposite Mrs. E.",
      difficulty: "hard",
    },
    {
      id: 14,
      question:
        "Seven students sit in a row facing north. K sits third from left. M sits between P and Q. O sits at an end. N sits immediately right of L. If Q is fifth from left, who sits at fourth position?",
      options: ["A) L", "B) M", "C) N", "D) P"],
      answer: "B",
      explanation: "Arrangement: O, K, P, M, Q, L, N. M is fourth.",
      difficulty: "medium",
    },
    {
      id: 15,
      question:
        "Ten people sit in two parallel rows of five each. In row 1: A, B, C, D, E face row 2: P, Q, R, S, T. A sits opposite Q. B sits opposite neither P nor R. C sits to the immediate left of E. If D sits opposite S, who sits opposite T?",
      options: ["A) A", "B) C", "C) D", "D) E"],
      answer: "D",
      explanation:
        "Row 1: C, A, E, B, D; Row 2: R, Q, T, P, S. E sits opposite T.",
      difficulty: "hard",
    },
  ],
  set5: [
    {
      id: 1,
      question:
        "Six scientists from different countries (US, UK, China, India, Japan, Russia) sit around a circular table facing center. The US scientist sits opposite the Chinese scientist. The British scientist sits between the Indian and Russian scientists. The Japanese scientist is adjacent to neither the Indian nor French scientist. Who sits opposite the Indian scientist?",
      options: ["A) British", "B) Chinese", "C) Japanese", "D) Russian"],
      answer: "D",
      explanation:
        "Arrangement: US, Japanese, Russian, British, Indian, Chinese. Russian sits opposite Indian.",
      difficulty: "hard",
      tags: ["circular", "nationalities"],
    },
    {
      id: 2,
      question:
        "Eight executives (A-H) sit around a square table with 2 on each side, all facing inward. A sits north of B who faces D. C sits east of E but west of F. G sits opposite H who isn't adjacent to A. Who sits at the southwest corner?",
      options: ["A) C", "B) E", "C) F", "D) G"],
      answer: "B",
      explanation:
        "North: A, H; East: F, D; South: B, E; West: C, G. E is in southwest.",
      difficulty: "hard",
      tags: ["rectangular", "directional"],
    },
    {
      id: 3,
      question:
        "Five couples sit in two parallel rows (wives in front). Mrs. A sits third from left. Mr. B sits opposite his wife. Mr. C sits at an end. Mrs. D sits between Mrs. E and Mrs. F. If Mr. F sits immediate right of Mr. A, who sits opposite Mrs. C?",
      options: ["A) Mr. B", "B) Mr. D", "C) Mr. E", "D) Mr. F"],
      answer: "C",
      explanation:
        "Front row: Mrs. C, Mrs. E, Mrs. A, Mrs. D, Mrs. F; Back row: Mr. C, Mr. E, Mr. A, Mr. F, Mr. B. Mr. E sits opposite Mrs. C.",
      difficulty: "hard",
      tags: ["linear", "married couples"],
    },
    {
      id: 4,
      question:
        "Seven laptops (Dell, HP, Lenovo, Asus, Acer, Apple, MSI) are placed in a straight line. Dell is third from left. Acer is between Apple and MSI. HP is at an end but not adjacent to Lenovo. Asus is immediately left of Apple. Which laptop is second from right?",
      options: ["A) Acer", "B) Apple", "C) Lenovo", "D) MSI"],
      answer: "A",
      explanation:
        "Arrangement: HP, Lenovo, Dell, Asus, Apple, Acer, MSI. Acer is second from right.",
      difficulty: "medium",
      tags: ["linear", "objects"],
    },
    {
      id: 5,
      question:
        "Nine boxes labeled 1-9 are arranged in a 3x3 grid. Box 1 is northwest. Box 2 is south of Box 3 but east of Box 4. Box 5 is north of Box 6 and west of Box 7. If Box 8 is in the center, which box is southeast?",
      options: ["A) 6", "B) 7", "C) 8", "D) 9"],
      answer: "D",
      explanation:
        "Grid:\n[1, 3, 7]\n[4, 8, 2]\n[5, 6, 9]. Box 9 is southeast.",
      difficulty: "hard",
      tags: ["grid", "numbered"],
    },
    {
      id: 6,
      question:
        "Six friends (A-F) sit around a circular table facing center. A sits opposite D. B sits adjacent to neither C nor E. F sits between A and C. Who sits opposite E?",
      options: ["A) B", "B) C", "C) D", "D) F"],
      answer: "A",
      explanation: "Arrangement: A, F, C, D, B, E. B sits opposite E.",
      difficulty: "medium",
      tags: ["circular"],
    },
    {
      id: 7,
      question:
        "Twelve delegates sit in three rows (4 each) facing north. In Row 1: A, B, C, D; Row 2: E, F, G, H; Row 3: I, J, K, L. A sits opposite G who sits opposite K. C sits between B and the person opposite J. If H sits left of E, who sits opposite D?",
      options: ["A) E", "B) F", "C) I", "D) L"],
      answer: "D",
      explanation:
        "Row 1: A, B, C, D; Row 2: H, F, G, E; Row 3: I, J, K, L. L sits opposite D.",
      difficulty: "hard",
      tags: ["multiple rows"],
    },
    {
      id: 8,
      question:
        "Five children sit in a row facing north. A is left of B but right of E. C sits at an end. D doesn't sit next to A. Who sits in the middle?",
      options: ["A) A", "B) B", "C) D", "D) E"],
      answer: "A",
      explanation: "Arrangement: C, E, A, B, D. A is in the middle.",
      difficulty: "easy",
      tags: ["linear", "basic"],
    },
    {
      id: 9,
      question:
        "Eight people sit around a circular table facing center. P sits opposite R. Q sits adjacent to neither S nor T. U sits between V and W. If W is to the immediate right of P, who sits opposite Q?",
      options: ["A) S", "B) T", "C) U", "D) V"],
      answer: "B",
      explanation: "Arrangement: P, W, V, U, R, S, T, Q. T sits opposite Q.",
      difficulty: "medium",
      tags: ["circular"],
    },
    {
      id: 10,
      question:
        "Seven cars are parked in a line. Honda is third from left. BMW is between Audi and Mercedes. Toyota is at an end. Ford is immediately right of Nissan. Which car is second from right?",
      options: ["A) Audi", "B) BMW", "C) Ford", "D) Nissan"],
      answer: "B",
      explanation:
        "Arrangement: Toyota, Nissan, Honda, Ford, BMW, Audi, Mercedes. BMW is second from right.",
      difficulty: "medium",
      tags: ["linear", "vehicles"],
    },
    {
      id: 11,
      question:
        "Four couples sit around a circular table. No two women sit adjacent. Mr. X sits opposite Mrs. Y. Mr. Z sits between Mrs. W and Mrs. V. Mrs. U sits adjacent to Mr. T but not to Mr. S. Who sits opposite Mrs. V?",
      options: ["A) Mr. S", "B) Mr. T", "C) Mr. U", "D) Mr. Z"],
      answer: "A",
      explanation:
        "Arrangement: Mr. X, Mrs. W, Mr. Z, Mrs. V, Mr. S, Mrs. Y, Mr. T, Mrs. U. Mr. S sits opposite Mrs. V.",
      difficulty: "hard",
      tags: ["circular", "couples"],
    },
    {
      id: 12,
      question:
        "Six laptops are placed in a circle facing center. Dell is left of HP. Lenovo faces Asus. Acer is between Apple and Dell. Which laptop is right of Asus?",
      options: ["A) Dell", "B) HP", "C) Lenovo", "D) Apple"],
      answer: "B",
      explanation:
        "Arrangement: Apple, Acer, Dell, HP, Lenovo, Asus. HP is right of Asus.",
      difficulty: "easy",
      tags: ["circular", "objects"],
    },
    {
      id: 13,
      question:
        "Nine officials sit in a 3x3 grid. The PM sits diagonally opposite the President. The Treasurer sits north of the Secretary. The Clerk sits west of the Minister who is south of the Speaker. If the President is in row 2, column 3, who sits in row 1, column 1?",
      options: ["A) Clerk", "B) Minister", "C) Speaker", "D) Treasurer"],
      answer: "A",
      explanation:
        "Grid:\n[Clerk, Speaker, Treasurer]\n[_, _, President]\n[Minister, _, _]. Clerk is in row 1, column 1.",
      difficulty: "hard",
      tags: ["grid", "positions"],
    },
    {
      id: 14,
      question:
        "Five judges and five lawyers sit alternately in a circle. No two judges sit together. Judge A sits opposite Lawyer C. Lawyer B sits between Judges D and E. Who sits between Lawyer A and Judge C?",
      options: ["A) Judge B", "B) Lawyer D", "C) Judge E", "D) Lawyer E"],
      answer: "D",
      explanation:
        "Arrangement: Judge A, Lawyer E, Judge C, Lawyer B, Judge D, Lawyer A, Judge E, Lawyer C, Judge B, Lawyer D. Lawyer E sits between Judge A and Lawyer A.",
      difficulty: "hard",
      tags: ["circular", "professions"],
    },
    {
      id: 15,
      question:
        "Ten people sit in two parallel rows of five each. Row 1: A, B, C, D, E face Row 2: P, Q, R, S, T. A sits opposite Q. B sits opposite neither P nor R. C sits to the immediate left of E. If D sits opposite S, who sits opposite T?",
      options: ["A) A", "B) C", "C) D", "D) E"],
      answer: "D",
      explanation:
        "Row 1: C, A, E, B, D; Row 2: R, Q, T, P, S. E sits opposite T.",
      difficulty: "hard",
      tags: ["parallel rows"],
    },
  ],
};
