export const inputOutput = {
  set1: [
    {
      id: 1,
      question:
        "In a certain code, 'APPLE' is written as 'CRRNG'. How is 'ORANGE' written in that code?",
      options: ["A) QTCPIG", "B) QTBPIG", "C) QTBQIG", "D) QTCQIG"],
      answer: "B",
      explanation:
        "Each letter shifts +2, +1 alternately (A→C, P→R, P→R, L→N, E→G). Hence, ORANGE → QTBPIG.",
      difficulty: "easy",
    },
    {
      id: 2,
      question:
        "If 'MATHS' is coded as 'PDWKV', how is 'LOGIC' coded in the same pattern?",
      options: ["A) ORJLF", "B) NRJLF", "C) ORKLE", "D) NRKLE"],
      answer: "A",
      explanation:
        "Each letter shifts +3 (M→P, A→D, etc.). Thus, LOGIC → ORJLF.",
      difficulty: "easy",
    },
    {
      id: 3,
      question:
        "Input: 32 67 14 89 45. Step 1: 14 32 67 89 45. Step 2: 14 32 45 67 89. What is Step 3 if the pattern continues?",
      options: [
        "A) 14 32 45 67 89",
        "B) 14 45 32 67 89",
        "C) 14 32 67 45 89",
        "D) No change",
      ],
      answer: "D",
      explanation:
        "The steps sort two numbers at a time. After Step 2, the sequence is already sorted.",
      difficulty: "medium",
    },
    {
      id: 4,
      question: "If 'BLUE' is written as 'DMWG', what is the code for 'GREEN'?",
      options: ["A) ITGGP", "B) ITGHP", "C) HTGGP", "D) HTGHP"],
      answer: "A",
      explanation:
        "Letters shift +2 (B→D, L→N, U→W, E→G). Thus, GREEN → ITGGP.",
      difficulty: "medium",
    },
    {
      id: 5,
      question:
        "Input: 5 2 8 1 6. Step 1: 1 5 2 8 6. Step 2: 1 2 5 8 6. Step 3: 1 2 5 6 8. What is the final step?",
      options: ["A) 1 2 5 6 8", "B) 1 2 6 5 8", "C) 1 5 2 6 8", "D) 2 1 5 6 8"],
      answer: "A",
      explanation:
        "The pattern sorts one number per step. Step 3 is the final sorted order.",
      difficulty: "easy",
    },
    {
      id: 6,
      question:
        "If 'TIGER' is coded as 'VKIGT', how is 'LION' coded in the same pattern?",
      options: ["A) NKQP", "B) NKQO", "C) NJQP", "D) NJQO"],
      answer: "A",
      explanation:
        "Letters shift +2, +1 alternately (T→V, I→K, G→I, etc.). Thus, LION → NKQP.",
      difficulty: "hard",
    },
    {
      id: 7,
      question:
        "Input: 12 34 56 78. Step 1: 21 43 65 87. Step 2: 12 34 56 78. What is Step 3?",
      options: [
        "A) 21 43 65 87",
        "B) 12 34 56 78",
        "C) 34 12 78 56",
        "D) 43 21 87 65",
      ],
      answer: "A",
      explanation:
        "Step 1 reverses digits, Step 2 undoes it. The pattern repeats, so Step 3 = Step 1.",
      difficulty: "hard",
    },
    {
      id: 8,
      question:
        "If 'DOG' is written as 'FQI', how is 'CAT' written in the same code?",
      options: ["A) ECV", "B) EBV", "C) FCV", "D) FBV"],
      answer: "A",
      explanation: "Letters shift +2, +3, +4 (D→F, O→Q, G→I). Thus, CAT → ECV.",
      difficulty: "medium",
    },
    {
      id: 9,
      question:
        "Input: 9 3 6 1 4. Step 1: 1 9 3 6 4. Step 2: 1 3 9 6 4. Step 3: 1 3 4 9 6. What is Step 4?",
      options: ["A) 1 3 4 6 9", "B) 1 3 6 4 9", "C) 1 3 4 9 6", "D) 1 4 3 6 9"],
      answer: "A",
      explanation:
        "The pattern sorts the smallest number to the left each step. Step 4 completes the sort.",
      difficulty: "medium",
    },
    {
      id: 10,
      question:
        "If 'PENCIL' is coded as 'RGPENK', how is 'PAPER' coded in the same pattern?",
      options: ["A) RCRGT", "B) RCRGS", "C) RDRGT", "D) RDRGS"],
      answer: "A",
      explanation:
        "Letters shift +2, +1 alternately (P→R, E→G, N→P, etc.). Thus, PAPER → RCRGT.",
      difficulty: "hard",
    },
    {
      id: 11,
      question:
        "Input: 25 17 39 44. Step 1: 17 25 39 44. Step 2: 17 25 44 39. Step 3: 17 25 39 44. What is Step 4?",
      options: [
        "A) 17 25 39 44",
        "B) 17 25 44 39",
        "C) 17 39 25 44",
        "D) 25 17 39 44",
      ],
      answer: "B",
      explanation:
        "Step 1 sorts the first two numbers, Step 2 swaps the last two, Step 3 undoes Step 2. The pattern repeats, so Step 4 = Step 2.",
      difficulty: "hard",
    },
    {
      id: 12,
      question:
        "If 'MOUSE' is written as 'OMWUG', how is 'KEYBOARD' written in the same code?",
      options: ["A) MGADQCTF", "B) MGAEQCTF", "C) MGBDQCTF", "D) MGBEQCTF"],
      answer: "B",
      explanation:
        "Letters shift +1, +2 alternately (M→O, O→M, U→W, etc.). Thus, KEYBOARD → MGAEQCTF.",
      difficulty: "hard",
    },
    {
      id: 13,
      question:
        "Input: 7 4 2 9 5. Step 1: 2 7 4 9 5. Step 2: 2 4 7 9 5. Step 3: 2 4 5 7 9. What is Step 4?",
      options: ["A) 2 4 5 7 9", "B) 2 4 7 5 9", "C) 2 5 4 7 9", "D) 4 2 5 7 9"],
      answer: "A",
      explanation:
        "The pattern sorts the sequence in ascending order. Step 3 is the final sorted state.",
      difficulty: "easy",
    },
    {
      id: 14,
      question:
        "If 'FRUIT' is coded as 'HQWLV', how is 'VEGETABLE' coded in the same pattern?",
      options: ["A) XGIGVCDNG", "B) XGIGVCNGD", "C) XGJGVCDNG", "D) XGJGVCNGD"],
      answer: "A",
      explanation:
        "Each letter shifts +2 (F→H, R→T, etc.). Thus, VEGETABLE → XGIGVCDNG.",
      difficulty: "medium",
    },
    {
      id: 15,
      question:
        "Input: 50 30 10 40 20. Step 1: 10 50 30 40 20. Step 2: 10 20 50 30 40. Step 3: 10 20 30 50 40. What is Step 4?",
      options: [
        "A) 10 20 30 40 50",
        "B) 10 20 30 50 40",
        "C) 10 20 50 30 40",
        "D) 10 30 20 50 40",
      ],
      answer: "A",
      explanation:
        "The pattern sorts the smallest remaining number to the left each step. Step 4 completes the sort.",
      difficulty: "hard",
    },
  ],
  set2: [
    {
      id: 1,
      question:
        "If 'TRAIN' is coded as 'VTCKP', how is 'PLANE' coded in the same pattern?",
      options: ["A) RNCPG", "B) RNCQG", "C) RMCPG", "D) RMCQG"],
      answer: "A",
      explanation:
        "Letters shift +2, +1 alternately (T→V, R→T, A→C, etc.). Thus, PLANE → RNCPG.",
      difficulty: "easy",
    },
    {
      id: 2,
      question:
        "Input: 18 72 36 54 90. Step 1: 18 36 72 54 90. Step 2: 18 36 54 72 90. What is Step 3?",
      options: [
        "A) 18 36 54 72 90",
        "B) 18 54 36 72 90",
        "C) 36 18 54 72 90",
        "D) No change",
      ],
      answer: "A",
      explanation:
        "The steps sort numbers in ascending order. Step 2 is already the final sorted sequence.",
      difficulty: "easy",
    },
    {
      id: 3,
      question:
        "If 'WATER' is written as 'YCVGT', how is 'EARTH' written in that code?",
      options: ["A) GCTVJ", "B) GCTUJ", "C) GDTVJ", "D) GDTUJ"],
      answer: "A",
      explanation:
        "Letters shift +2, +3, +4, +5, +6 (W→Y, A→C, T→V, etc.). Thus, EARTH → GCTVJ.",
      difficulty: "medium",
    },
    {
      id: 4,
      question:
        "Input: 5 3 9 7 1. Step 1: 1 5 3 9 7. Step 2: 1 3 5 9 7. Step 3: 1 3 5 7 9. What is Step 4?",
      options: ["A) 1 3 5 7 9", "B) 1 3 7 5 9", "C) 1 5 3 7 9", "D) 3 1 5 7 9"],
      answer: "A",
      explanation:
        "The pattern sorts the sequence step-by-step. Step 3 is the final sorted order.",
      difficulty: "medium",
    },
    {
      id: 5,
      question:
        "If 'CLOCK' is coded as 'ENQEM', how is 'WATCH' coded in the same pattern?",
      options: ["A) YCVEG", "B) YBUEG", "C) YCVEF", "D) YBUEF"],
      answer: "A",
      explanation:
        "Letters shift +2 (C→E, L→N, O→Q, etc.). Thus, WATCH → YCVEG.",
      difficulty: "easy",
    },
    {
      id: 6,
      question:
        "Input: 12 24 48 96. Step 1: 24 12 48 96. Step 2: 24 48 12 96. Step 3: 24 48 96 12. What is Step 4?",
      options: [
        "A) 48 24 96 12",
        "B) 48 96 24 12",
        "C) 96 48 24 12",
        "D) No change",
      ],
      answer: "B",
      explanation:
        "The pattern moves the second number to the front each step. Step 4 swaps 48 and 96.",
      difficulty: "hard",
    },
    {
      id: 7,
      question:
        "If 'BREAD' is written as 'DTGCF', how is 'BUTTER' written in that code?",
      options: ["A) DWVVGT", "B) DWVVHT", "C) DWVVGS", "D) DWVVHS"],
      answer: "A",
      explanation:
        "Letters shift +2, +3, +4, +5, +6 (B→D, U→W, T→V, etc.). Thus, BUTTER → DWVVGT.",
      difficulty: "hard",
    },
    {
      id: 8,
      question:
        "Input: 33 11 55 22 44. Step 1: 11 33 55 22 44. Step 2: 11 22 33 55 44. Step 3: 11 22 33 44 55. What is Step 4?",
      options: [
        "A) 11 22 33 44 55",
        "B) 22 11 33 44 55",
        "C) 11 33 22 44 55",
        "D) 11 22 44 33 55",
      ],
      answer: "A",
      explanation:
        "The steps sort numbers in ascending order. Step 3 is the final sorted sequence.",
      difficulty: "medium",
    },
    {
      id: 9,
      question:
        "If 'SUN' is coded as 'UWP', how is 'MOON' coded in the same pattern?",
      options: ["A) OQPQ", "B) OQQP", "C) OPPQ", "D) OPQP"],
      answer: "A",
      explanation: "Letters shift +2 (S→U, U→W, N→P). Thus, MOON → OQPQ.",
      difficulty: "medium",
    },
    {
      id: 10,
      question:
        "Input: 8 4 2 6 10. Step 1: 2 8 4 6 10. Step 2: 2 4 8 6 10. Step 3: 2 4 6 8 10. What is Step 4?",
      options: [
        "A) 2 4 6 8 10",
        "B) 2 4 8 6 10",
        "C) 2 6 4 8 10",
        "D) 4 2 6 8 10",
      ],
      answer: "A",
      explanation:
        "The pattern sorts the sequence step-by-step. Step 3 is the final sorted order.",
      difficulty: "hard",
    },
    {
      id: 11,
      question:
        "If 'FISH' is written as 'HKUK', how is 'BIRD' written in that code?",
      options: ["A) DKTF", "B) DLTF", "C) DKUF", "D) DLUF"],
      answer: "A",
      explanation:
        "Letters shift +2, +3, +4, +5 (F→H, I→K, S→U, H→K). Thus, BIRD → DKTF.",
      difficulty: "hard",
    },
    {
      id: 12,
      question:
        "Input: 7 14 21 28. Step 1: 14 7 21 28. Step 2: 14 21 7 28. Step 3: 14 21 28 7. What is Step 4?",
      options: [
        "A) 21 14 28 7",
        "B) 21 28 14 7",
        "C) 28 21 14 7",
        "D) No change",
      ],
      answer: "B",
      explanation:
        "The pattern moves the second number to the front each step. Step 4 swaps 21 and 28.",
      difficulty: "hard",
    },
    {
      id: 13,
      question:
        "If 'LAMP' is coded as 'OCRU', how is 'BULB' coded in the same pattern?",
      options: ["A) EXQG", "B) EYQG", "C) EXPF", "D) EYPF"],
      answer: "A",
      explanation: "Letters shift +3 (L→O, A→D, M→P, P→S). Thus, BULB → EXQG.",
      difficulty: "medium",
    },
    {
      id: 14,
      question:
        "Input: 9 6 3 12 15. Step 1: 3 9 6 12 15. Step 2: 3 6 9 12 15. What is Step 3?",
      options: [
        "A) 3 6 9 12 15",
        "B) 3 6 12 9 15",
        "C) 6 3 9 12 15",
        "D) 3 9 6 12 15",
      ],
      answer: "A",
      explanation:
        "The steps sort numbers in ascending order. Step 2 is the final sorted sequence.",
      difficulty: "easy",
    },
    {
      id: 15,
      question:
        "If 'CRICKET' is written as 'ETKEMGV', how is 'HOCKEY' written in that code?",
      options: ["A) JQEMGA", "B) JQENGA", "C) JREMGZ", "D) JRENGZ"],
      answer: "A",
      explanation:
        "Letters shift +2, +3, +4, +5, +6, +7 (C→E, R→T, I→K, etc.). Thus, HOCKEY → JQEMGA.",
      difficulty: "hard",
    },
  ],
  set3: [
    {
      id: 1,
      question:
        "If 'APPLE' is coded as 'CRRNG', how is 'GRAPE' coded in the same pattern?",
      options: ["A) ITCRG", "B) ITCSG", "C) ISCRG", "D) ISCSG"],
      answer: "A",
      explanation:
        "Letters shift +2, +1 alternately (A→C, P→R, P→R, L→N, E→G). Thus, GRAPE → ITCRG.",
      difficulty: "easy",
    },
    {
      id: 2,
      question:
        "Input: 25 50 75 100. Step 1: 50 25 75 100. Step 2: 50 75 25 100. Step 3: 50 75 100 25. What is Step 4?",
      options: [
        "A) 75 50 100 25",
        "B) 75 100 50 25",
        "C) 100 75 50 25",
        "D) No change",
      ],
      answer: "B",
      explanation:
        "The pattern moves the second number to the front each step. Step 4 swaps 75 and 100.",
      difficulty: "easy",
    },
    {
      id: 3,
      question:
        "If 'TIGER' is written as 'VKIGT', how is 'LION' written in the same code?",
      options: ["A) NKQP", "B) NKQO", "C) NJQP", "D) NJQO"],
      answer: "A",
      explanation:
        "Letters shift +2, +1 alternately (T→V, I→K, G→I, etc.). Thus, LION → NKQP.",
      difficulty: "medium",
    },
    {
      id: 4,
      question:
        "Input: 8 16 24 32. Step 1: 16 8 24 32. Step 2: 16 24 8 32. Step 3: 16 24 32 8. What is Step 4?",
      options: [
        "A) 24 16 32 8",
        "B) 24 32 16 8",
        "C) 32 24 16 8",
        "D) No change",
      ],
      answer: "B",
      explanation:
        "The pattern moves the second number to the front each step. Step 4 swaps 24 and 32.",
      difficulty: "medium",
    },
    {
      id: 5,
      question:
        "If 'DOG' is written as 'FQI', how is 'CAT' written in the same code?",
      options: ["A) ECV", "B) EBV", "C) FCV", "D) FBV"],
      answer: "A",
      explanation: "Letters shift +2, +3, +4 (D→F, O→Q, G→I). Thus, CAT → ECV.",
      difficulty: "easy",
    },
    {
      id: 6,
      question:
        "Input: 10 20 30 40. Step 1: 20 10 30 40. Step 2: 20 30 10 40. Step 3: 20 30 40 10. What is Step 4?",
      options: [
        "A) 30 20 40 10",
        "B) 30 40 20 10",
        "C) 40 30 20 10",
        "D) No change",
      ],
      answer: "B",
      explanation:
        "The pattern moves the second number to the front each step. Step 4 swaps 30 and 40.",
      difficulty: "hard",
    },
    {
      id: 7,
      question:
        "If 'FRUIT' is coded as 'HQWLV', how is 'VEGETABLE' coded in the same pattern?",
      options: ["A) XGIGVCDNG", "B) XGIGVCNGD", "C) XGJGVCDNG", "D) XGJGVCNGD"],
      answer: "A",
      explanation:
        "Each letter shifts +2 (F→H, R→T, etc.). Thus, VEGETABLE → XGIGVCDNG.",
      difficulty: "hard",
    },
    {
      id: 8,
      question:
        "Input: 5 10 15 20. Step 1: 10 5 15 20. Step 2: 10 15 5 20. Step 3: 10 15 20 5. What is Step 4?",
      options: [
        "A) 15 10 20 5",
        "B) 15 20 10 5",
        "C) 20 15 10 5",
        "D) No change",
      ],
      answer: "B",
      explanation:
        "The pattern moves the second number to the front each step. Step 4 swaps 15 and 20.",
      difficulty: "medium",
    },
    {
      id: 9,
      question:
        "If 'PENCIL' is coded as 'RGPENK', how is 'PAPER' coded in the same pattern?",
      options: ["A) RCRGT", "B) RCRGS", "C) RDRGT", "D) RDRGS"],
      answer: "A",
      explanation:
        "Letters shift +2, +1 alternately (P→R, E→G, N→P, etc.). Thus, PAPER → RCRGT.",
      difficulty: "medium",
    },
    {
      id: 10,
      question:
        "Input: 2 4 6 8. Step 1: 4 2 6 8. Step 2: 4 6 2 8. Step 3: 4 6 8 2. What is Step 4?",
      options: ["A) 6 4 8 2", "B) 6 8 4 2", "C) 8 6 4 2", "D) No change"],
      answer: "B",
      explanation:
        "The pattern moves the second number to the front each step. Step 4 swaps 6 and 8.",
      difficulty: "hard",
    },
    {
      id: 11,
      question:
        "If 'MOUSE' is written as 'OMWUG', how is 'KEYBOARD' written in the same code?",
      options: ["A) MGADQCTF", "B) MGAEQCTF", "C) MGBDQCTF", "D) MGBEQCTF"],
      answer: "B",
      explanation:
        "Letters shift +1, +2 alternately (M→O, O→M, U→W, etc.). Thus, KEYBOARD → MGAEQCTF.",
      difficulty: "hard",
    },
    {
      id: 12,
      question:
        "Input: 3 6 9 12. Step 1: 6 3 9 12. Step 2: 6 9 3 12. Step 3: 6 9 12 3. What is Step 4?",
      options: ["A) 9 6 12 3", "B) 9 12 6 3", "C) 12 9 6 3", "D) No change"],
      answer: "B",
      explanation:
        "The pattern moves the second number to the front each step. Step 4 swaps 9 and 12.",
      difficulty: "hard",
    },
    {
      id: 13,
      question:
        "If 'CLOCK' is coded as 'ENQEM', how is 'WATCH' coded in the same pattern?",
      options: ["A) YCVEG", "B) YBUEG", "C) YCVEF", "D) YBUEF"],
      answer: "A",
      explanation:
        "Letters shift +2 (C→E, L→N, O→Q, etc.). Thus, WATCH → YCVEG.",
      difficulty: "medium",
    },
    {
      id: 14,
      question:
        "Input: 4 8 12 16. Step 1: 8 4 12 16. Step 2: 8 12 4 16. Step 3: 8 12 16 4. What is Step 4?",
      options: ["A) 12 8 16 4", "B) 12 16 8 4", "C) 16 12 8 4", "D) No change"],
      answer: "B",
      explanation:
        "The pattern moves the second number to the front each step. Step 4 swaps 12 and 16.",
      difficulty: "easy",
    },
    {
      id: 15,
      question:
        "If 'BREAD' is written as 'DTGCF', how is 'BUTTER' written in that code?",
      options: ["A) DWVVGT", "B) DWVVHT", "C) DWVVGS", "D) DWVVHS"],
      answer: "A",
      explanation:
        "Letters shift +2, +3, +4, +5, +6 (B→D, U→W, T→V, etc.). Thus, BUTTER → DWVVGT.",
      difficulty: "hard",
    },
  ],
  set4: [
    {
      id: 1,
      question:
        "If 'BLUE' is coded as 'DNXG', how is 'RED' coded in the same pattern?",
      options: ["A) TGF", "B) TGE", "C) SGF", "D) SGE"],
      answer: "A",
      explanation: "Letters shift +2 (B→D, L→N, U→X, E→G). Thus, RED → TGF.",
      difficulty: "easy",
    },
    {
      id: 2,
      question:
        "Input: 12 24 36 48. Step 1: 24 12 36 48. Step 2: 24 36 12 48. Step 3: 24 36 48 12. What is Step 4?",
      options: [
        "A) 36 24 48 12",
        "B) 36 48 24 12",
        "C) 48 36 24 12",
        "D) No change",
      ],
      answer: "B",
      explanation:
        "Pattern moves second number forward each step. Step 4 swaps 36 and 48.",
      difficulty: "easy",
    },
    {
      id: 3,
      question:
        "If 'TRAIN' is written as 'VUKCP', how is 'PLANE' written in that code?",
      options: ["A) RNCMG", "B) RNCNG", "C) RNCQG", "D) RNCPG"],
      answer: "D",
      explanation:
        "Letters shift +2, -1, +3, -2, +4 pattern. Thus, PLANE → RNCPG.",
      difficulty: "medium",
    },
    {
      id: 4,
      question:
        "Input: 5 25 125 625. Step 1: 25 5 125 625. Step 2: 25 125 5 625. Step 3: 25 125 625 5. What is Step 4?",
      options: [
        "A) 125 25 625 5",
        "B) 125 625 25 5",
        "C) 625 125 25 5",
        "D) No change",
      ],
      answer: "B",
      explanation:
        "Pattern moves second number forward. Step 4 swaps 125 and 625.",
      difficulty: "medium",
    },
    {
      id: 5,
      question:
        "If 'APPLE' is written as 'CRRNG', how is 'ORANGE' written in that code?",
      options: ["A) QTBPIG", "B) QTBPJG", "C) QTBPIH", "D) QTBPJH"],
      answer: "A",
      explanation: "Letters shift +2, +1 alternately. Thus, ORANGE → QTBPIG.",
      difficulty: "easy",
    },
    {
      id: 6,
      question:
        "Input: 3 9 27 81. Step 1: 9 3 27 81. Step 2: 9 27 3 81. Step 3: 9 27 81 3. What is Step 4?",
      options: ["A) 27 9 81 3", "B) 27 81 9 3", "C) 81 27 9 3", "D) No change"],
      answer: "B",
      explanation:
        "Pattern moves second number forward. Step 4 swaps 27 and 81.",
      difficulty: "hard",
    },
    {
      id: 7,
      question:
        "If 'WATER' is coded as 'YCVHT', how is 'EARTH' coded in the same pattern?",
      options: ["A) GCTWJ", "B) GCTVJ", "C) GCTXJ", "D) GCTYJ"],
      answer: "B",
      explanation:
        "Letters shift +2, +3, +4, +5, +6 pattern. Thus, EARTH → GCTVJ.",
      difficulty: "hard",
    },
    {
      id: 8,
      question:
        "Input: 8 16 32 64. Step 1: 16 8 32 64. Step 2: 16 32 8 64. Step 3: 16 32 64 8. What is Step 4?",
      options: [
        "A) 32 16 64 8",
        "B) 32 64 16 8",
        "C) 64 32 16 8",
        "D) No change",
      ],
      answer: "B",
      explanation:
        "Pattern moves second number forward. Step 4 swaps 32 and 64.",
      difficulty: "medium",
    },
    {
      id: 9,
      question:
        "If 'SUN' is coded as 'UWP', how is 'MOON' coded in the same pattern?",
      options: ["A) OQQP", "B) OQPQ", "C) OPPQ", "D) OPQP"],
      answer: "A",
      explanation: "Letters shift +2 (S→U, U→W, N→P). Thus, MOON → OQQP.",
      difficulty: "medium",
    },
    {
      id: 10,
      question:
        "Input: 7 14 21 28. Step 1: 14 7 21 28. Step 2: 14 21 7 28. Step 3: 14 21 28 7. What is Step 4?",
      options: [
        "A) 21 14 28 7",
        "B) 21 28 14 7",
        "C) 28 21 14 7",
        "D) No change",
      ],
      answer: "B",
      explanation:
        "Pattern moves second number forward. Step 4 swaps 21 and 28.",
      difficulty: "hard",
    },
    {
      id: 11,
      question:
        "If 'CRICKET' is written as 'ETKEMGV', how is 'HOCKEY' written in that code?",
      options: ["A) JQEMGA", "B) JQENGA", "C) JREMGZ", "D) JRENGZ"],
      answer: "A",
      explanation:
        "Letters shift +2, +3, +4, +5, +6, +7 pattern. Thus, HOCKEY → JQEMGA.",
      difficulty: "hard",
    },
    {
      id: 12,
      question:
        "Input: 4 12 36 108. Step 1: 12 4 36 108. Step 2: 12 36 4 108. Step 3: 12 36 108 4. What is Step 4?",
      options: [
        "A) 36 12 108 4",
        "B) 36 108 12 4",
        "C) 108 36 12 4",
        "D) No change",
      ],
      answer: "B",
      explanation:
        "Pattern moves second number forward. Step 4 swaps 36 and 108.",
      difficulty: "hard",
    },
    {
      id: 13,
      question:
        "If 'LAMP' is coded as 'OCRU', how is 'BULB' coded in the same pattern?",
      options: ["A) EXQG", "B) EYQG", "C) EXPF", "D) EYPF"],
      answer: "A",
      explanation: "Letters shift +3 (L→O, A→D, M→P, P→S). Thus, BULB → EXQG.",
      difficulty: "medium",
    },
    {
      id: 14,
      question:
        "Input: 6 12 24 48. Step 1: 12 6 24 48. Step 2: 12 24 6 48. Step 3: 12 24 48 6. What is Step 4?",
      options: [
        "A) 24 12 48 6",
        "B) 24 48 12 6",
        "C) 48 24 12 6",
        "D) No change",
      ],
      answer: "B",
      explanation:
        "Pattern moves second number forward. Step 4 swaps 24 and 48.",
      difficulty: "easy",
    },
    {
      id: 15,
      question:
        "If 'FISH' is written as 'HKUK', how is 'BIRD' written in that code?",
      options: ["A) DKTF", "B) DLTF", "C) DKUF", "D) DLUF"],
      answer: "A",
      explanation: "Letters shift +2, +3, +4, +5 pattern. Thus, BIRD → DKTF.",
      difficulty: "hard",
    },
  ],
  set5: [
    {
      id: 1,
      question:
        "If 'BOOK' is coded as 'DQQM', how is 'PAGE' coded in the same pattern?",
      options: ["A) RCIG", "B) RCIH", "C) RBIG", "D) RBIH"],
      answer: "A",
      explanation: "Letters shift +2 (B→D, O→Q, O→Q, K→M). Thus, PAGE → RCIG.",
      difficulty: "easy",
    },
    {
      id: 2,
      question:
        "Input: 2 5 10 17. Step 1: 5 2 10 17. Step 2: 5 10 2 17. Step 3: 5 10 17 2. What is Step 4?",
      options: ["A) 10 5 17 2", "B) 10 17 5 2", "C) 17 10 5 2", "D) No change"],
      answer: "B",
      explanation:
        "Pattern moves second number forward each step. Step 4 swaps 10 and 17.",
      difficulty: "easy",
    },
    {
      id: 3,
      question:
        "If 'CLOCK' is written as 'ENQEM', how is 'WATCH' written in that code?",
      options: ["A) YCVEG", "B) YCVFG", "C) YBVEG", "D) YBVFG"],
      answer: "A",
      explanation:
        "Letters shift +2 (C→E, L→N, O→Q, etc.). Thus, WATCH → YCVEG.",
      difficulty: "medium",
    },
    {
      id: 4,
      question:
        "Input: 3 6 11 18. Step 1: 6 3 11 18. Step 2: 6 11 3 18. Step 3: 6 11 18 3. What is Step 4?",
      options: ["A) 11 6 18 3", "B) 11 18 6 3", "C) 18 11 6 3", "D) No change"],
      answer: "B",
      explanation:
        "Pattern moves second number forward. Step 4 swaps 11 and 18.",
      difficulty: "medium",
    },
    {
      id: 5,
      question:
        "If 'DOG' is written as 'FQI', how is 'CAT' written in the same code?",
      options: ["A) ECV", "B) EBV", "C) FCV", "D) FBV"],
      answer: "A",
      explanation: "Letters shift +2, +3, +4 (D→F, O→Q, G→I). Thus, CAT → ECV.",
      difficulty: "easy",
    },
    {
      id: 6,
      question:
        "Input: 1 3 7 13. Step 1: 3 1 7 13. Step 2: 3 7 1 13. Step 3: 3 7 13 1. What is Step 4?",
      options: ["A) 7 3 13 1", "B) 7 13 3 1", "C) 13 7 3 1", "D) No change"],
      answer: "B",
      explanation:
        "Pattern moves second number forward. Step 4 swaps 7 and 13.",
      difficulty: "hard",
    },
    {
      id: 7,
      question:
        "If 'FRUIT' is coded as 'HQWLV', how is 'VEGETABLE' coded in the same pattern?",
      options: ["A) XGIGVCDNG", "B) XGIGVCNGD", "C) XGJGVCDNG", "D) XGJGVCNGD"],
      answer: "A",
      explanation:
        "Each letter shifts +2 (F→H, R→T, etc.). Thus, VEGETABLE → XGIGVCDNG.",
      difficulty: "hard",
    },
    {
      id: 8,
      question:
        "Input: 4 9 16 25. Step 1: 9 4 16 25. Step 2: 9 16 4 25. Step 3: 9 16 25 4. What is Step 4?",
      options: ["A) 16 9 25 4", "B) 16 25 9 4", "C) 25 16 9 4", "D) No change"],
      answer: "B",
      explanation:
        "Pattern moves second number forward. Step 4 swaps 16 and 25.",
      difficulty: "medium",
    },
    {
      id: 9,
      question:
        "If 'PENCIL' is coded as 'RGPENK', how is 'PAPER' coded in the same pattern?",
      options: ["A) RCRGT", "B) RCRGS", "C) RDRGT", "D) RDRGS"],
      answer: "A",
      explanation:
        "Letters shift +2, +1 alternately (P→R, E→G, N→P, etc.). Thus, PAPER → RCRGT.",
      difficulty: "medium",
    },
    {
      id: 10,
      question:
        "Input: 1 4 9 16. Step 1: 4 1 9 16. Step 2: 4 9 1 16. Step 3: 4 9 16 1. What is Step 4?",
      options: ["A) 9 4 16 1", "B) 9 16 4 1", "C) 16 9 4 1", "D) No change"],
      answer: "B",
      explanation:
        "Pattern moves second number forward. Step 4 swaps 9 and 16.",
      difficulty: "hard",
    },
    {
      id: 11,
      question:
        "If 'MOUSE' is written as 'OMWUG', how is 'KEYBOARD' written in the same code?",
      options: ["A) MGADQCTF", "B) MGAEQCTF", "C) MGBDQCTF", "D) MGBEQCTF"],
      answer: "B",
      explanation:
        "Letters shift +1, +2 alternately (M→O, O→M, U→W, etc.). Thus, KEYBOARD → MGAEQCTF.",
      difficulty: "hard",
    },
    {
      id: 12,
      question:
        "Input: 2 5 10 17. Step 1: 5 2 10 17. Step 2: 5 10 2 17. Step 3: 5 10 17 2. What is Step 4?",
      options: ["A) 10 5 17 2", "B) 10 17 5 2", "C) 17 10 5 2", "D) No change"],
      answer: "B",
      explanation:
        "Pattern moves second number forward. Step 4 swaps 10 and 17.",
      difficulty: "hard",
    },
    {
      id: 13,
      question:
        "If 'LAMP' is coded as 'OCRU', how is 'BULB' coded in the same pattern?",
      options: ["A) EXQG", "B) EYQG", "C) EXPF", "D) EYPF"],
      answer: "A",
      explanation: "Letters shift +3 (L→O, A→D, M→P, P→S). Thus, BULB → EXQG.",
      difficulty: "medium",
    },
    {
      id: 14,
      question:
        "Input: 1 8 27 64. Step 1: 8 1 27 64. Step 2: 8 27 1 64. Step 3: 8 27 64 1. What is Step 4?",
      options: ["A) 27 8 64 1", "B) 27 64 8 1", "C) 64 27 8 1", "D) No change"],
      answer: "B",
      explanation:
        "Pattern moves second number forward. Step 4 swaps 27 and 64.",
      difficulty: "easy",
    },
    {
      id: 15,
      question:
        "If 'BREAD' is written as 'DTGCF', how is 'BUTTER' written in that code?",
      options: ["A) DWVVGT", "B) DWVVHT", "C) DWVVGS", "D) DWVVHS"],
      answer: "A",
      explanation:
        "Letters shift +2, +3, +4, +5, +6 (B→D, U→W, T→V, etc.). Thus, BUTTER → DWVVGT.",
      difficulty: "hard",
    },
  ],
};
