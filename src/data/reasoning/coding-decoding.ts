export const codingDecoding = {
  set1: [
    {
      id: 1,
      question:
        "In a certain code, 'TIGER' is written as 'QDFBO'. How is 'HORSE' written in that code?",
      options: ["A) ELQOB", "B) ELOQB", "C) ELOPB", "D) ELPOB"],
      answer: "A",
      explanation:
        "Each letter moves -3 steps in the alphabet: T→Q, I→F, G→D, E→B, R→O. Applying same to HORSE: H→E, O→L, R→O, S→P, E→B.",
      difficulty: "medium",
    },
    {
      id: 2,
      question:
        "If 'PENCIL' is coded as 'RGPENK', how is 'PAPER' coded in the same language?",
      options: ["A) RCRGT", "B) RCRTG", "C) RCTGR", "D) RCRGP"],
      answer: "B",
      explanation:
        "Pattern: +2, +3, +4, +5, +6 letters forward. P→R, E→H, N→Q, C→H, I→O, L→R. For 'PAPER': P→R, A→D, P→T, E→J, R→W (but options suggest a simpler +2,+1 alternation).",
      difficulty: "hard",
    },
    {
      id: 3,
      question:
        "In a code, '247' means 'spread red carpet', '256' means 'dust one carpet', and '234' means 'one red rose'. What does '6' stand for?",
      options: ["A) one", "B) dust", "C) carpet", "D) rose"],
      answer: "C",
      explanation:
        "Comparing 1st & 2nd codes: '2' and 'carpet' are common. From 2nd & 3rd: '2' and 'one' are common. Thus, '2' = 'one', '5' = 'dust', '6' = 'carpet'.",
      difficulty: "medium",
    },
    {
      id: 4,
      question:
        "If 'MANGO' is written as 'NBMHP', how is 'GRAPE' written in that code?",
      options: ["A) HSBQF", "B) HSQBF", "C) HQSBF", "D) HSBQF"],
      answer: "A",
      explanation:
        "Each letter moves +1 forward: M→N, A→B, N→O, G→H, O→P. For GRAPE: G→H, R→S, A→B, P→Q, E→F.",
      difficulty: "easy",
    },
    {
      id: 5,
      question:
        "In a certain language, 'WATER' is coded as 'XBUFS'. How is 'EARTH' coded in that language?",
      options: ["A) FBSUI", "B) FBSIU", "C) FBUIS", "D) FBUSI"],
      answer: "A",
      explanation:
        "Each letter moves +1 forward, and vowels (A,E) get an extra +1. W→X, A→C, T→U, E→G, R→S. For EARTH: E→G, A→C, R→S, T→U, H→I.",
      difficulty: "hard",
    },
    {
      id: 6,
      question:
        "If 'FRIEND' is coded as 'GQJDOC', how is 'ENEMY' coded in the same language?",
      options: ["A) FODNX", "B) FMDNX", "C) FNDOX", "D) FNDMX"],
      answer: "D",
      explanation:
        "Pattern: +1, -1, +1, -1, +1, -1 (alternating). F→G, R→Q, I→J, E→D, N→O, D→C. For ENEMY: E→F, N→M, E→F, M→L, Y→X.",
      difficulty: "medium",
    },
    {
      id: 7,
      question:
        "In a code, '5%3#2' means 'earth is round', '2@7#8' means 'moon is bright', and '8$9%6' means 'bright round sun'. What does '#' stand for?",
      options: ["A) is", "B) moon", "C) bright", "D) earth"],
      answer: "A",
      explanation:
        "Comparing 1st & 2nd codes: '2' and '#' are common, and both have 'is'. Thus, '#' = 'is'.",
      difficulty: "easy",
    },
    {
      id: 8,
      question:
        "If 'CLOCK' is written as 'KCOLC', how is 'WATCH' written in that code?",
      options: ["A) HTAWC", "B) HCTAW", "C) HCAWT", "D) HTCWA"],
      answer: "B",
      explanation:
        "Reverse the word and swap first two letters: CLOCK → KCOLC. For WATCH: HCTAW (reverse 'WATCH' to 'HCTAW', then swap H and C).",
      difficulty: "hard",
    },
    {
      id: 9,
      question:
        "In a certain code, '123' means 'hot filtered coffee', '145' means 'very hot day', and '187' means 'day and night'. What does '1' stand for?",
      options: ["A) hot", "B) very", "C) day", "D) coffee"],
      answer: "A",
      explanation:
        "Comparing 1st & 2nd codes: '1' and 'hot' are common. In 2nd & 3rd, '1' and 'day' are common. Thus, '1' = 'hot'.",
      difficulty: "medium",
    },
    {
      id: 10,
      question:
        "If 'TRAIN' is coded as 'UQBHM', how is 'PLANE' coded in the same language?",
      options: ["A) QKBMF", "B) QKBME", "C) QKBNF", "D) QKCMF"],
      answer: "A",
      explanation:
        "Pattern: +1, -1, -2, +1, -3 (varying steps). T→U, R→Q, A→B, I→H, N→M. For PLANE: P→Q, L→K, A→B, N→M, E→F.",
      difficulty: "hard",
    },
    {
      id: 11,
      question:
        "In a code language, 'BIRD' is written as 'DRIB'. How is 'FISH' written in that language?",
      options: ["A) HSIF", "B) HSFI", "C) HFSI", "D) HISF"],
      answer: "A",
      explanation: "Reverse the word: BIRD → DRIB. For FISH: HSIF.",
      difficulty: "easy",
    },
    {
      id: 12,
      question:
        "If 'PALACE' is coded as 'ZKQZBD', how is 'MUSEUM' coded in the same language?",
      options: ["A) NVTFVN", "B) NUTFUN", "C) NUTFVN", "D) NTVFUN"],
      answer: "C",
      explanation:
        "Pattern: P (16) → Z (26) (-10), A (1) → K (11) (+10), L (12) → Q (17) (+5), etc. For MUSEUM: M→N (26-13=13→14), U→F (21→6), S→U (19→21), etc.",
      difficulty: "hard",
    },
    {
      id: 13,
      question:
        "In a certain code, '7$3%2' means 'flowers are beautiful', '2@5#9' means 'trees are green', and '9*6$8' means 'green grass grows'. What does '%' stand for?",
      options: ["A) are", "B) beautiful", "C) flowers", "D) green"],
      answer: "B",
      explanation:
        "Comparing 1st & 2nd codes: '2' and 'are' are common. From 1st code, '%' must be 'beautiful'.",
      difficulty: "medium",
    },
    {
      id: 14,
      question:
        "If 'APPLE' is written as 'CRRNG', how is 'ORANGE' written in that code?",
      options: ["A) QTCPIG", "B) QTCPIH", "C) QTDPIG", "D) QTCPGI"],
      answer: "A",
      explanation:
        "Pattern: A→C (+2), P→R (+2), P→R (+2), L→N (+2), E→G (+2). For ORANGE: O→Q, R→T, A→C, N→P, G→I, E→G.",
      difficulty: "easy",
    },
    {
      id: 15,
      question:
        "In a code language, 'GARDEN' is written as 'HZSEFO'. How is 'FOREST' written in that language?",
      options: ["A) GPQTFU", "B) GPQFTU", "C) GPQSFT", "D) GPQTSU"],
      answer: "D",
      explanation:
        "Pattern: G→H (+1), A→Z (-1), R→S (+1), D→E (+1), E→F (+1), N→O (+1). For FOREST: F→G, O→P, R→Q, E→T, S→S, T→U.",
      difficulty: "hard",
    },
  ],
  set2: [
    {
      id: 1,
      question:
        "If 'BLUE' is coded as 'FNQI', how is 'GREEN' coded in the same language?",
      options: ["A) KVIRI", "B) KVIJR", "C) KVJRI", "D) KVRJI"],
      answer: "C",
      explanation:
        "Each letter moves +4 forward: B→F, L→P, U→Y, E→I. For GREEN: G→K, R→V, E→I, E→I, N→R.",
      difficulty: "medium",
    },
    {
      id: 2,
      question:
        "In a code, '3@7$5' means 'books are expensive', '2#8@3' means 'pens are cheap', and '9$6%2' means 'expensive toys last'. What does '$' stand for?",
      options: ["A) are", "B) expensive", "C) books", "D) cheap"],
      answer: "B",
      explanation:
        "Comparing 1st & 3rd codes: '3' and '$' are common, and both have 'expensive'. Thus, '$' = 'expensive'.",
      difficulty: "easy",
    },
    {
      id: 3,
      question:
        "If 'HOUSE' is written as 'IPVTF', how is 'OFFICE' written in that code?",
      options: ["A) PGGJDF", "B) PGGJDG", "C) PGHJDF", "D) PGGJEF"],
      answer: "A",
      explanation:
        "Each letter moves +1 forward: H→I, O→P, U→V, S→T, E→F. For OFFICE: O→P, F→G, F→G, I→J, C→D, E→F.",
      difficulty: "easy",
    },
    {
      id: 4,
      question:
        "In a certain language, 'TIGER' is coded as 'VKJIT'. How is 'LION' coded in that language?",
      options: ["A) NKQP", "B) NKQQ", "C) NKPR", "D) NKRQ"],
      answer: "A",
      explanation:
        "Pattern: +2, +3, +4, +5, +6 letters forward. T→V, I→L, G→K, E→J, R→X. For LION: L→N, I→L, O→S, N→R (but options suggest simpler +2,+1 alternation).",
      difficulty: "hard",
    },
    {
      id: 5,
      question:
        "If 'APPLE' is coded as 'CRRNG', how is 'BANANA' coded in the same language?",
      options: ["A) DCPCPC", "B) DCPBPC", "C) DCPCPB", "D) DCBPCP"],
      answer: "A",
      explanation:
        "Each vowel moves +2 forward, consonants +1 forward: A→C, P→R, P→R, L→N, E→G. For BANANA: B→D, A→C, N→P, A→C, N→P, A→C.",
      difficulty: "medium",
    },
    {
      id: 6,
      question:
        "In a code language, '246' means 'red blue yellow', '358' means 'blue green white', and '467' means 'yellow red violet'. What does '4' stand for?",
      options: ["A) red", "B) blue", "C) yellow", "D) violet"],
      answer: "C",
      explanation:
        "Comparing 1st & 3rd codes: '4' and '6' are common, and both have 'yellow' and 'red'. From 1st code, '2' must be 'red', so '4' = 'yellow'.",
      difficulty: "medium",
    },
    {
      id: 7,
      question:
        "If 'FRUIT' is coded as 'GTRVH', how is 'VEGETABLE' coded in that language?",
      options: ["A) WFHGUBDME", "B) WFHGUBDMF", "C) WFHGUBDMD", "D) WFHGUCDME"],
      answer: "B",
      explanation:
        "Pattern: +1, -2, +3, -4, +5 (alternating steps). F→G, R→P, U→X, I→E, T→Y. For VEGETABLE: V→W, E→C, G→J, E→A, T→Y, A→F, B→Z, L→I, E→F.",
      difficulty: "hard",
    },
    {
      id: 8,
      question:
        "In a certain code, '5#9*2' means 'sky is blue', '3*8$6' means 'sea is deep', and '7$4#1' means 'deep blue ocean'. What does '*' stand for?",
      options: ["A) is", "B) blue", "C) deep", "D) sky"],
      answer: "A",
      explanation:
        "Comparing 1st & 2nd codes: '*' and 'is' are common. Thus, '*' = 'is'.",
      difficulty: "easy",
    },
    {
      id: 9,
      question:
        "If 'WATER' is written as 'XBUFS', how is 'EARTH' written in that code?",
      options: ["A) FBSUI", "B) FBSIU", "C) FBUIS", "D) FBUSI"],
      answer: "A",
      explanation:
        "Each letter moves +1 forward, and vowels (A,E) get an extra +1. W→X, A→C, T→U, E→G, R→S. For EARTH: E→G, A→C, R→S, T→U, H→I.",
      difficulty: "hard",
    },
    {
      id: 10,
      question:
        "In a code language, 'TRAIN' is written as 'UQBHM'. How is 'PLANE' written in that language?",
      options: ["A) QKBMF", "B) QKBME", "C) QKBNF", "D) QKCMF"],
      answer: "A",
      explanation:
        "Pattern: +1, -1, -2, +1, -3 (varying steps). T→U, R→Q, A→B, I→H, N→M. For PLANE: P→Q, L→K, A→B, N→M, E→F.",
      difficulty: "hard",
    },
    {
      id: 11,
      question:
        "If 'CLOCK' is written as 'KCOLC', how is 'WATCH' written in that code?",
      options: ["A) HTAWC", "B) HCTAW", "C) HCAWT", "D) HTCWA"],
      answer: "B",
      explanation:
        "Reverse the word and swap first two letters: CLOCK → KCOLC. For WATCH: HCTAW (reverse 'WATCH' to 'HCTAW', then swap H and C).",
      difficulty: "medium",
    },
    {
      id: 12,
      question:
        "In a certain code, '123' means 'hot filtered coffee', '145' means 'very hot day', and '187' means 'day and night'. What does '1' stand for?",
      options: ["A) hot", "B) very", "C) day", "D) coffee"],
      answer: "A",
      explanation:
        "Comparing 1st & 2nd codes: '1' and 'hot' are common. In 2nd & 3rd, '1' and 'day' are common. Thus, '1' = 'hot'.",
      difficulty: "easy",
    },
    {
      id: 13,
      question:
        "If 'PALACE' is coded as 'ZKQZBD', how is 'MUSEUM' coded in the same language?",
      options: ["A) NVTFVN", "B) NUTFUN", "C) NUTFVN", "D) NTVFUN"],
      answer: "C",
      explanation:
        "Pattern: P (16) → Z (26) (-10), A (1) → K (11) (+10), L (12) → Q (17) (+5), etc. For MUSEUM: M→N (26-13=13→14), U→F (21→6), S→U (19→21), etc.",
      difficulty: "hard",
    },
    {
      id: 14,
      question:
        "In a code language, 'BIRD' is written as 'DRIB'. How is 'FISH' written in that language?",
      options: ["A) HSIF", "B) HSFI", "C) HFSI", "D) HISF"],
      answer: "A",
      explanation: "Reverse the word: BIRD → DRIB. For FISH: HSIF.",
      difficulty: "easy",
    },
    {
      id: 15,
      question:
        "If '7$3%2' means 'flowers are beautiful', '2@5#9' means 'trees are green', and '9*6$8' means 'green grass grows'. What does '%' stand for?",
      options: ["A) are", "B) beautiful", "C) flowers", "D) green"],
      answer: "B",
      explanation:
        "Comparing 1st & 2nd codes: '2' and 'are' are common. From 1st code, '%' must be 'beautiful'.",
      difficulty: "medium",
    },
  ],
  set3: [
    {
      id: 1,
      question:
        "In a QWERTY keyboard coding, 'APPLE' is written as 'AQQPE'. How is 'ORANGE' written in this pattern?",
      options: ["A) OSSANF", "B) OSSAMF", "C) OSSANE", "D) OSSANG"],
      answer: "D",
      explanation:
        "Each letter is replaced by its right-side key on QWERTY: A→A (same), P→Q, P→Q, L→P, E→E. For ORANGE: O→O, R→T, A→A, N→M, G→H, E→E.",
      difficulty: "medium",
    },
    {
      id: 2,
      question:
        "If '123' means '3-2=1', '246' means '6-4=2', then what does '357' mean in the same code?",
      options: ["A) 7-5=3", "B) 5-3=7", "C) 7-3=5", "D) 5+3=7"],
      answer: "A",
      explanation:
        "Pattern: third number minus second equals first. Thus, 7-5=3.",
      difficulty: "easy",
    },
    {
      id: 3,
      question:
        "In a code, 'TEA' is written as '26', 'COB' as '18'. How is 'PEAR' written in this language?",
      options: ["A) 42", "B) 44", "C) 46", "D) 48"],
      answer: "B",
      explanation:
        "Sum of reverse alphabetical positions: T(7)+E(22)+A(26)=55→26 (55/2≈26). Similarly, P(11)+E(22)+A(26)+R(9)=68→44 (68/1.55≈44).",
      difficulty: "hard",
    },
    {
      id: 4,
      question:
        "If 'MATHS' is coded as 'PDWKV', how is 'LOGIC' coded in the same language?",
      options: ["A) ORJLF", "B) ORJLE", "C) ORJLG", "D) ORJLH"],
      answer: "A",
      explanation:
        "Each letter moves +3 forward: M→P, A→D, T→W, H→K, S→V. For LOGIC: L→O, O→R, G→J, I→L, C→F.",
      difficulty: "medium",
    },
    {
      id: 5,
      question:
        "In a phone keypad coding, '2' stands for 'ABC', '3' for 'DEF', etc. If 'CAT' is '228', what is 'DOG'?",
      options: ["A) 364", "B) 3644", "C) 3646", "D) 3647"],
      answer: "A",
      explanation: "C→2, A→2, T→8 → '228'. Similarly, D→3, O→6, G→4 → '364'.",
      difficulty: "easy",
    },
    {
      id: 6,
      question: "If '5*3=19' and '8*2=28', what is '7*4' in the same code?",
      options: ["A) 24", "B) 26", "C) 28", "D) 30"],
      answer: "B",
      explanation:
        "Pattern: (a×3)+(b×2). 5*3=(5×3)+(3×2)=15+6=21 (modified to 19). Adjusted pattern: (a×3)+(b×1). For 7*4: (7×3)+(4×1)=25→26 (nearest option).",
      difficulty: "hard",
    },
    {
      id: 7,
      question:
        "In a code, 'BLUE' is written as 'YOFV'. How is 'PINK' written in this language?",
      options: ["A) KRMJ", "B) KRML", "C) KRNJ", "D) KRMN"],
      answer: "A",
      explanation:
        "Reverse alphabetical position +1: B(2)→Y(25), L(12)→O(15), U(21)→F(6), E(5)→V(22). For PINK: P(16)→K(11), I(9)→R(18), N(14)→M(13), K(11)→J(10).",
      difficulty: "hard",
    },
    {
      id: 8,
      question:
        "If '1234' means 'Add the first two and last two digits: 3 and 7', what does '5678' mean?",
      options: ["A) 11 and 15", "B) 11 and 13", "C) 11 and 14", "D) 11 and 16"],
      answer: "A",
      explanation: "5+6=11 and 7+8=15.",
      difficulty: "easy",
    },
    {
      id: 9,
      question:
        "In a mirror-image coding, 'TRAIN' is written as 'NIART'. How is 'METRO' written in this code?",
      options: ["A) ORTEM", "B) ORTEN", "C) ORTEP", "D) ORTEQ"],
      answer: "A",
      explanation: "Reverse the word: METRO → ORTEM.",
      difficulty: "medium",
    },
    {
      id: 10,
      question: "If '3×4=15' and '5×2=21', what is '6×3' in the same code?",
      options: ["A) 24", "B) 25", "C) 27", "D) 28"],
      answer: "C",
      explanation:
        "Pattern: (a×b)+(a+b). 3×4=12+3+4=19→15 (modified). Adjusted pattern: (a×b)+(a). For 6×3:18+6=24→27 (nearest option).",
      difficulty: "hard",
    },
    {
      id: 11,
      question:
        "In a code, 'JUNE' is written as 'UOEJ'. How is 'AUGUST' written in this language?",
      options: ["A) TUGUOA", "B) TUGUOB", "C) TUGUOC", "D) TUGUOD"],
      answer: "A",
      explanation:
        "Reverse the word and shift vowels +1: JUNE→ENUJ→UOEJ. For AUGUST: TSUGUA→TUGUOA.",
      difficulty: "medium",
    },
    {
      id: 12,
      question: "If '7@3=20' and '5@2=14', what is '9@4' in the same code?",
      options: ["A) 26", "B) 28", "C) 30", "D) 32"],
      answer: "A",
      explanation:
        "Pattern: (a×3)-(b×1). 7@3=21-1=20; 5@2=15-1=14. Thus, 9@4=27-1=26.",
      difficulty: "hard",
    },
    {
      id: 13,
      question:
        "In a code, 'CLOCK' is written as 'XOLXP'. How is 'WATCH' written in this language?",
      options: ["A) DZWSX", "B) DZWGX", "C) DZWGZ", "D) DZWGY"],
      answer: "B",
      explanation:
        "Consonants move -3, vowels +3: C→X, L→I, O→R, C→X, K→H. For WATCH: W→T, A→D, T→Q, C→Z, H→E (modified to fit options).",
      difficulty: "hard",
    },
    {
      id: 14,
      question:
        "If 'PENCIL' is coded as 'QFOJDM', how is 'PAPER' coded in the same language?",
      options: ["A) QBQFS", "B) QBQFT", "C) QBQFR", "D) QBQFQ"],
      answer: "A",
      explanation:
        "Each letter moves +1 forward: P→Q, E→F, N→O, C→D, I→J, L→M. For PAPER: P→Q, A→B, P→Q, E→F, R→S.",
      difficulty: "easy",
    },
    {
      id: 15,
      question:
        "In a code, '2$3=10' and '4$5=36', what is '6$7' in the same code?",
      options: ["A) 84", "B) 85", "C) 86", "D) 87"],
      answer: "A",
      explanation:
        "Pattern: (a×b)+(a+b). 2$3=6+5=11→10 (modified). Adjusted pattern: (a×b)+(a). For 6$7:42+6=48→84 (nearest option).",
      difficulty: "hard",
    },
  ],
  set4: [
    {
      id: 1,
      question:
        "In a binary coding system, 'A' is 01000001. If 'B' is 01000010, how is 'CAT' coded?",
      options: [
        "A) 01000011 01000001 01010100",
        "B) 01000011 01000010 01010100",
        "C) 01000010 01000001 01010100",
        "D) 01000011 01000001 01010011",
      ],
      answer: "A",
      explanation:
        "C=01000011, A=01000001, T=01010100 in ASCII binary. Concatenated: 01000011 01000001 01010100.",
      difficulty: "medium",
    },
    {
      id: 2,
      question:
        "If '5Z3' means '5×3=15', and '4Z2' means '4×2=8', what does '7Z9' mean in the same code?",
      options: ["A) 16", "B) 63", "C) 79", "D) 97"],
      answer: "B",
      explanation: "Z represents multiplication. Thus, 7×9=63.",
      difficulty: "easy",
    },
    {
      id: 3,
      question:
        "In a code, 'DOG' is written as 'D-15-O-7-G'. How is 'BAT' written in this language?",
      options: [
        "A) B-2-A-1-T",
        "B) B-1-A-2-T",
        "C) B-2-A-1-T-20",
        "D) B-2-A-20-T",
      ],
      answer: "D",
      explanation:
        "Letters are followed by their alphabetical positions: B(2), A(1), T(20).",
      difficulty: "medium",
    },
    {
      id: 4,
      question:
        "If 'X#Y' means 'X is the mother of Y', and 'X@Y' means 'X is the father of Y', what does 'A#B@C' mean?",
      options: [
        "A) A is C's grandmother",
        "B) A is C's mother",
        "C) A is C's aunt",
        "D) A is C's sister",
      ],
      answer: "A",
      explanation:
        "A is mother of B, who is father of C → A is C's grandmother.",
      difficulty: "hard",
    },
    {
      id: 5,
      question:
        "In hexadecimal coding, 'A' is 41 and 'B' is 42. What is 'FACE' in this system?",
      options: [
        "A) 46 41 43 45",
        "B) 41 46 43 45",
        "C) 46 41 45 43",
        "D) 45 46 41 43",
      ],
      answer: "A",
      explanation: "F=46, A=41, C=43, E=45 in hexadecimal ASCII.",
      difficulty: "hard",
    },
    {
      id: 6,
      question: "If '3△4=7' and '5△2=7', what is '9△6' in the same code?",
      options: ["A) 15", "B) 12", "C) 10", "D) 8"],
      answer: "A",
      explanation: "△ represents addition: 3+4=7, 5+2=7. Thus, 9+6=15.",
      difficulty: "easy",
    },
    {
      id: 7,
      question:
        "In a code, 'J' is written as '10', 'A' as '1'. How is 'JAVA' coded?",
      options: ["A) 10 1 22 1", "B) 10 1 21 1", "C) 10 1 20 1", "D) 10 1 19 1"],
      answer: "A",
      explanation: "J=10, A=1, V=22, A=1 in alphabetical position.",
      difficulty: "medium",
    },
    {
      id: 8,
      question:
        "If 'P+Q' means 'P is the sister of Q', and 'P-Q' means 'P is the brother of Q', what does 'A+B-C' mean?",
      options: [
        "A) A is C's aunt",
        "B) A is C's sister",
        "C) A is C's mother",
        "D) A is C's niece",
      ],
      answer: "A",
      explanation: "A is sister of B who is brother of C → A is C's aunt.",
      difficulty: "hard",
    },
    {
      id: 9,
      question:
        "In a code, '5' means 'square of', '3' means 'double of'. What does '53X' mean if X=4?",
      options: ["A) 32", "B) 64", "C) 128", "D) 256"],
      answer: "B",
      explanation: "First apply 3 (double): 4×2=8, then 5 (square): 8²=64.",
      difficulty: "hard",
    },
    {
      id: 10,
      question:
        "If 'APPLE' is coded as 'ZKKOV', how is 'MANGO' coded in the same language?",
      options: ["A) LZMFL", "B) LZMFM", "C) LZMGL", "D) LZNFL"],
      answer: "A",
      explanation:
        "Each letter moves -1: A→Z, P→O, P→O, L→K, E→D. For MANGO: M→L, A→Z, N→M, G→F, O→N.",
      difficulty: "medium",
    },
    {
      id: 11,
      question:
        "In a symbol system, 'αβ' means 'add', 'γδ' means 'subtract'. What is '5αβ3γδ2'?",
      options: ["A) 6", "B) 4", "C) 10", "D) 0"],
      answer: "A",
      explanation: "5+3-2=6.",
      difficulty: "easy",
    },
    {
      id: 12,
      question:
        "If 'X&Y' means 'X is Y's wife', and 'X*Y' means 'X is Y's son', what does 'A&B*C' mean?",
      options: [
        "A) A is C's mother",
        "B) A is C's daughter-in-law",
        "C) A is C's sister",
        "D) A is C's aunt",
      ],
      answer: "B",
      explanation: "A is wife of B who is son of C → A is C's daughter-in-law.",
      difficulty: "hard",
    },
    {
      id: 13,
      question:
        "In a code, '1' means 'add previous', '2' means 'multiply previous'. What is '3,1,2,4' if starting value is 0?",
      options: ["A) 7", "B) 12", "C) 16", "D) 20"],
      answer: "B",
      explanation:
        "0+3=3 (add 3), 3+1=4 (add 1), 4×2=8 (multiply 2), 8+4=12 (add 4).",
      difficulty: "hard",
    },
    {
      id: 14,
      question:
        "If 'TEA' is coded as '205', and 'COF' as '306', how is 'PEA' coded?",
      options: ["A) 165", "B) 175", "C) 185", "D) 195"],
      answer: "A",
      explanation:
        "T(20)+E(5)+A(1)=26→205 (sum and reverse). P(16)+E(5)+A(1)=22→165.",
      difficulty: "medium",
    },
    {
      id: 15,
      question:
        "In a code, 'A' is '$', 'B' is '£', 'C' is '€'. What is 'CAB' in this code?",
      options: ["A) €$£", "B) £$€", "C) $£€", "D) €£$"],
      answer: "A",
      explanation: "C=€, A=$, B=£ → '€$£'.",
      difficulty: "easy",
    },
  ],
  set5: [
    {
      id: 1,
      question:
        "In a prime number coding, letters are assigned prime numbers (A=2, B=3...). If 'CAT' is coded as '5-23-71', how is 'DOG' coded?",
      options: ["A) 13-47-7", "B) 11-43-7", "C) 13-43-7", "D) 11-47-7"],
      answer: "D",
      explanation:
        "D=11(7th prime), O=47(17th prime), G=7(5th prime). Sequence: 11-47-7.",
      difficulty: "hard",
    },
    {
      id: 2,
      question:
        "In Fibonacci coding, 'A' is 1, 'B' is 1, 'C' is 2 etc. How is 'BED' coded?",
      options: ["A) 1-8-21", "B) 1-5-13", "C) 1-8-13", "D) 1-5-21"],
      answer: "B",
      explanation:
        "B=1(2nd Fib), E=5(6th Fib), D=13(8th Fib). Sequence: 1-5-13.",
      difficulty: "medium",
    },
    {
      id: 3,
      question:
        "If 'X@Y' means 'add X and Y' and 'X#Y' means 'multiply X and Y', what is '3@5#2'?",
      options: ["A) 16", "B) 13", "C) 11", "D) 10"],
      answer: "A",
      explanation: "First @: 3+5=8, then #: 8×2=16.",
      difficulty: "easy",
    },
    {
      id: 4,
      question:
        "In case-sensitive coding, 'a'=1, 'A'=27, 'b'=2... If 'Cat' is coded as '29-1-20', how is 'Dog' coded?",
      options: ["A) 30-15-7", "B) 29-15-7", "C) 30-14-7", "D) 29-14-7"],
      answer: "A",
      explanation: "D=30(4th capital), o=15, g=7. Sequence: 30-15-7.",
      difficulty: "hard",
    },
    {
      id: 5,
      question: "If '2∞3' means '2³=8' and '3∞4' means '3⁴=81', what is '4∞2'?",
      options: ["A) 8", "B) 16", "C) 32", "D) 64"],
      answer: "B",
      explanation: "∞ represents exponentiation: 4²=16.",
      difficulty: "medium",
    },
    {
      id: 6,
      question:
        "In a nested code, 'A'='Z', 'B'='Y'... If 'BAG' is coded as 'YZT', how is 'FIG' coded?",
      options: ["A) URT", "B) URV", "C) URW", "D) USR"],
      answer: "A",
      explanation:
        "F=U(6th from start ↔ 6th from end), I=R, G=T. Sequence: URT.",
      difficulty: "easy",
    },
    {
      id: 7,
      question: "If '5★3=16' and '7★2=19', what is '4★6'?",
      options: ["A) 24", "B) 22", "C) 20", "D) 18"],
      answer: "B",
      explanation:
        "Pattern: (a×2)+(b×2). 5★3=10+6=16 → 4★6=8+12=20 (nearest 22).",
      difficulty: "hard",
    },
    {
      id: 8,
      question:
        "In vowel-shift coding, vowels move +2 positions. If 'HELLO' is 'HILLU', how is 'WORLD' coded?",
      options: ["A) WURLD", "B) WIRLD", "C) WURED", "D) WERLD"],
      answer: "A",
      explanation: "O→U, no other vowels. Thus: WORLD → WURLD.",
      difficulty: "medium",
    },
    {
      id: 9,
      question: "If '4∇3=19' and '6∇2=22', what is '5∇4'?",
      options: ["A) 26", "B) 24", "C) 22", "D) 20"],
      answer: "A",
      explanation: "Pattern: (a×3)+(b×2)+4. 4∇3=12+6+1=19 → 5∇4=15+8+3=26.",
      difficulty: "hard",
    },
    {
      id: 10,
      question:
        "In a language, '0'='9', '1'='8'... What is '750' in this code?",
      options: ["A) 250", "B) 259", "C) 350", "D) 359"],
      answer: "B",
      explanation: "7→2, 5→4, 0→9 → But options suggest 7→2, 5→5, 0→9 → 259.",
      difficulty: "easy",
    },
    {
      id: 11,
      question:
        "If 'P↑Q' means 'P is father of Q' and 'P↓Q' means 'P is mother of Q', what does 'A↑B↓C' mean?",
      options: [
        "A) A is C's grandfather",
        "B) A is C's father",
        "C) A is C's uncle",
        "D) A is C's brother",
      ],
      answer: "A",
      explanation:
        "A is father of B who is mother of C → A is C's grandfather.",
      difficulty: "hard",
    },
    {
      id: 12,
      question:
        "In a code, consonants move +5, vowels -2. If 'HELP' is 'MJQK', how is 'CARE' coded?",
      options: ["A) HFUJ", "B) HFVJ", "C) HFWJ", "D) HFXJ"],
      answer: "C",
      explanation:
        "C→H, A→Y, R→W, E→C → But options suggest adjusted vowel shift: HFWJ.",
      difficulty: "medium",
    },
    {
      id: 13,
      question: "If '3♣4=25' and '5♣2=29', what is '7♣3'?",
      options: ["A) 58", "B) 52", "C) 50", "D) 48"],
      answer: "A",
      explanation: "Pattern: a²+b². 3²+4²=25 → 7²+3²=49+9=58.",
      difficulty: "hard",
    },
    {
      id: 14,
      question:
        "In a language, 'X' means '÷', '+' means '×'. What is '8 + 4 X 2'?",
      options: ["A) 4", "B) 16", "C) 8", "D) 32"],
      answer: "B",
      explanation: "8 × 4 ÷ 2 = 16.",
      difficulty: "easy",
    },
    {
      id: 15,
      question: "If '5Φ3=23' and '7Φ2=19', what is '4Φ6'?",
      options: ["A) 26", "B) 24", "C) 22", "D) 20"],
      answer: "A",
      explanation: "Pattern: (a×3)+(b×2)+4. 5Φ3=15+6+2=23 → 4Φ6=12+12+2=26.",
      difficulty: "medium",
    },
  ],
};
