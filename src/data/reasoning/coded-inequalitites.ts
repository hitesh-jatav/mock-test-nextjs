export const codedInequalitites = {
  set1: [
    {
      id: 1,
      question: "If x > 5 and y < 3, which of the following must be true?",
      options: ["A) x + y > 8", "B) x - y > 2", "C) xy > 15", "D) x/y > 2"],
      answer: "B",
      explanation:
        "The smallest possible value of x is just above 5, and the largest possible y is just below 3. Thus, x - y > 5 - 3 = 2.",
      difficulty: "medium",
    },
    {
      id: 2,
      question:
        "If a ≤ 4 and b ≥ 7, which of the following is definitely false?",
      options: [
        "A) a + b ≥ 11",
        "B) b - a ≤ 3",
        "C) a × b ≥ 28",
        "D) b/a > 1.5",
      ],
      answer: "B",
      explanation:
        "The smallest possible difference (b - a) is 7 - 4 = 3. Thus, b - a ≤ 3 is false because b - a ≥ 3.",
      difficulty: "easy",
    },
    {
      id: 3,
      question: "If P < Q < R < S, which of the following must be true?",
      options: [
        "A) P + R < Q + S",
        "B) Q > (P + S)/2",
        "C) R - P > S - Q",
        "D) S × P > Q × R",
      ],
      answer: "A",
      explanation:
        "Since P < Q < R < S, arranging P + R < Q + S holds true (e.g., 1 < 2 < 3 < 4 → 1+3 < 2+4).",
      difficulty: "hard",
    },
    {
      id: 4,
      question: "If M ≥ N > O = P, which of the following is true?",
      options: ["A) P < N", "B) M ≤ P", "C) O > M", "D) N = P"],
      answer: "A",
      explanation:
        "From M ≥ N > O = P, it follows that N > P. Thus, P < N is correct.",
      difficulty: "easy",
    },
    {
      id: 5,
      question:
        "If A + B < C + D and B + C < A + D, which of the following must hold?",
      options: ["A) A < C", "B) B < D", "C) C < B", "D) D < A"],
      answer: "B",
      explanation:
        "Subtracting the two inequalities: (A+B)-(B+C) < (C+D)-(A+D) → A - C < C - A → 2A < 2C → A < C. But from B + C < A + D and A < C, B < D must hold.",
      difficulty: "hard",
    },
    {
      id: 6,
      question:
        "If X > Y and Z ≤ Y, which of the following is definitely true?",
      options: ["A) X > Z", "B) Z > X", "C) X = Z", "D) Y < Z"],
      answer: "A",
      explanation: "From X > Y and Z ≤ Y, we get X > Y ≥ Z → X > Z.",
      difficulty: "medium",
    },
    {
      id: 7,
      question:
        "If 2K ≥ L + 3 and L ≤ 5, what is the minimum possible value of K?",
      options: ["A) 1", "B) 2", "C) 4", "D) 5"],
      answer: "C",
      explanation:
        "For minimum K, maximize L (L = 5). Then, 2K ≥ 5 + 3 → 2K ≥ 8 → K ≥ 4.",
      difficulty: "medium",
    },
    {
      id: 8,
      question: "If D = E < F > G ≥ H, which of the following is false?",
      options: ["A) F > H", "B) E ≤ G", "C) D < F", "D) G ≥ H"],
      answer: "B",
      explanation:
        "E = D < F > G ≥ H. Since F > G and E < F, E ≤ G is not necessarily true.",
      difficulty: "hard",
    },
    {
      id: 9,
      question: "If P > Q ≥ R = S, which relationship must hold?",
      options: ["A) P > S", "B) Q = S", "C) R > P", "D) S > Q"],
      answer: "A",
      explanation: "From P > Q ≥ R = S, P > Q ≥ S → P > S.",
      difficulty: "easy",
    },
    {
      id: 10,
      question: "If A < B ≤ C = D > E, which is definitely incorrect?",
      options: ["A) A < D", "B) B > E", "C) E > C", "D) C ≥ B"],
      answer: "C",
      explanation: "From C = D > E, E > C contradicts D > E.",
      difficulty: "medium",
    },
    {
      id: 11,
      question: "If M ≤ N < O = P ≤ Q, which is true?",
      options: ["A) O < Q", "B) M < Q", "C) N > P", "D) Q ≤ M"],
      answer: "B",
      explanation: "From M ≤ N < O = P ≤ Q, M ≤ N < P ≤ Q → M < Q.",
      difficulty: "hard",
    },
    {
      id: 12,
      question: "If X + Y > 10 and Y < 4, which must be true?",
      options: ["A) X > 6", "B) Y > 2", "C) X - Y > 6", "D) X < 6"],
      answer: "A",
      explanation:
        "If Y < 4, then X > 10 - Y → X > 6 (since Y can be just below 4).",
      difficulty: "medium",
    },
    {
      id: 13,
      question: "If A × B ≤ 20 and B ≥ 5, which must be true?",
      options: ["A) A ≤ 4", "B) A ≥ 4", "C) B ≤ 10", "D) A × B ≥ 20"],
      answer: "A",
      explanation: "If B ≥ 5, then A ≤ 20/B → A ≤ 4 (since B's minimum is 5).",
      difficulty: "hard",
    },
    {
      id: 14,
      question: "If P > Q and R > S, which of the following must be true?",
      options: [
        "A) P + R > Q + S",
        "B) P + S > Q + R",
        "C) P × R > Q × S",
        "D) P - R > Q - S",
      ],
      answer: "A",
      explanation: "Adding the two inequalities: P + R > Q + S.",
      difficulty: "easy",
    },
    {
      id: 15,
      question: "If T < U = V ≤ W, which is false?",
      options: ["A) T < V", "B) U ≤ W", "C) W > T", "D) V > W"],
      answer: "D",
      explanation: "From V ≤ W, V > W is false.",
      difficulty: "medium",
    },
  ],
  set2: [
    {
      id: 1,
      question:
        "If A > B ≤ C = D > E, which of the following is definitely true?",
      options: ["A) A > E", "B) B > D", "C) C ≤ E", "D) D < B"],
      answer: "A",
      explanation:
        "From A > B ≤ C = D > E, the only certain relationship is A > B ≤ D > E → A > E.",
      difficulty: "medium",
    },
    {
      id: 2,
      question:
        "If X + Y ≤ 15 and Y ≥ 6, what is the maximum possible value of X?",
      options: ["A) 6", "B) 9", "C) 10", "D) 12"],
      answer: "B",
      explanation:
        "For maximum X, minimize Y (Y = 6). Then, X ≤ 15 - 6 → X ≤ 9.",
      difficulty: "easy",
    },
    {
      id: 3,
      question: "If P < Q = R ≥ S > T, which of the following is false?",
      options: ["A) P < S", "B) Q ≥ S", "C) R > T", "D) T < Q"],
      answer: "A",
      explanation:
        "P < Q = R ≥ S > T. P < S is not necessarily true (e.g., P=1, Q=R=S=5, T=2 → P < S is true, but if S=2, P=3, it's false).",
      difficulty: "hard",
    },
    {
      id: 4,
      question: "If M ≥ N > O ≤ P < Q, which relationship must hold?",
      options: ["A) M > P", "B) N < Q", "C) O < Q", "D) Q > M"],
      answer: "C",
      explanation: "From O ≤ P < Q, O < Q must be true.",
      difficulty: "medium",
    },
    {
      id: 5,
      question: "If K ≤ L = M < N ≥ O, which is definitely incorrect?",
      options: ["A) K < N", "B) M ≥ O", "C) L ≤ N", "D) O > N"],
      answer: "D",
      explanation: "N ≥ O, so O > N is false.",
      difficulty: "easy",
    },
    {
      id: 6,
      question: "If A > B < C > D < E, which of the following must be true?",
      options: ["A) A > D", "B) B < E", "C) C > B", "D) E > C"],
      answer: "C",
      explanation: "From C > B, this is always true. Others depend on values.",
      difficulty: "medium",
    },
    {
      id: 7,
      question:
        "If X × Y ≥ 24 and Y ≤ 6, what is the minimum possible value of X?",
      options: ["A) 2", "B) 4", "C) 6", "D) 8"],
      answer: "B",
      explanation: "For minimum X, maximize Y (Y = 6). Then, X ≥ 24/6 → X ≥ 4.",
      difficulty: "hard",
    },
    {
      id: 8,
      question: "If P ≤ Q = R < S ≤ T, which of the following is true?",
      options: ["A) P < T", "B) Q > S", "C) R = T", "D) S ≤ P"],
      answer: "A",
      explanation: "From P ≤ R < S ≤ T, P < T must hold.",
      difficulty: "easy",
    },
    {
      id: 9,
      question: "If A + B > C and B - C > 0, which must be true?",
      options: ["A) A > 0", "B) B > C", "C) C < 0", "D) A > C"],
      answer: "B",
      explanation:
        "From B - C > 0 → B > C. A + B > C doesn’t guarantee A > 0 or C < 0.",
      difficulty: "hard",
    },
    {
      id: 10,
      question: "If X > Y ≥ Z < W ≤ V, which is false?",
      options: ["A) X > Z", "B) Y < W", "C) Z ≤ V", "D) W > Y"],
      answer: "B",
      explanation:
        "Y ≥ Z < W → Y < W is not necessarily true (e.g., Y=5, Z=3, W=4 → Y > W).",
      difficulty: "medium",
    },
    {
      id: 11,
      question: "If M < N ≤ O = P ≥ Q, which must be true?",
      options: ["A) M < P", "B) N ≥ Q", "C) O > Q", "D) P > M"],
      answer: "A",
      explanation: "From M < N ≤ P → M < P.",
      difficulty: "easy",
    },
    {
      id: 12,
      question: "If K ≤ L < M ≥ N > O, which is definitely incorrect?",
      options: ["A) K < M", "B) L ≥ N", "C) M > O", "D) O < K"],
      answer: "B",
      explanation: "L < M ≥ N → L ≥ N is false (e.g., L=2, M=5, N=3 → L < N).",
      difficulty: "hard",
    },
    {
      id: 13,
      question: "If A > B ≤ C < D = E, which is true?",
      options: ["A) A > D", "B) B < E", "C) C > E", "D) D ≤ B"],
      answer: "B",
      explanation: "From B ≤ C < D = E → B < E.",
      difficulty: "medium",
    },
    {
      id: 14,
      question: "If P + Q < R and Q > S, which must be true?",
      options: ["A) P < R", "B) R > S", "C) P + S < R", "D) Q < R"],
      answer: "D",
      explanation:
        "From Q > S and P + Q < R → Q < R (since P could be negative).",
      difficulty: "hard",
    },
    {
      id: 15,
      question: "If X ≥ Y = Z ≤ W < V, which is false?",
      options: ["A) X ≥ Z", "B) W ≥ Y", "C) Z < V", "D) V ≤ X"],
      answer: "D",
      explanation:
        "From Z ≤ W < V → V > X is possible (e.g., X=5, Y=Z=3, W=4, V=6 → V > X).",
      difficulty: "medium",
    },
  ],
  set3: [
    {
      id: 1,
      question: "If A ≤ B = C > D ≥ E, which of the following must be true?",
      options: ["A) A < D", "B) C ≥ E", "C) B > E", "D) D = A"],
      answer: "B",
      explanation:
        "From C > D ≥ E, we get C ≥ E (since C is greater than D, which is ≥ E).",
      difficulty: "easy",
    },
    {
      id: 2,
      question:
        "If P > Q ≤ R < S = T, which of the following is definitely false?",
      options: ["A) P > R", "B) Q < T", "C) S > Q", "D) T ≤ R"],
      answer: "D",
      explanation: "From R < S = T, we get T > R. Thus, T ≤ R is false.",
      difficulty: "medium",
    },
    {
      id: 3,
      question:
        "If X + Y > 15 and Y ≤ 6, what is the minimum possible integer value of X?",
      options: ["A) 9", "B) 10", "C) 11", "D) 12"],
      answer: "B",
      explanation:
        "For minimum X, maximize Y (Y = 6). Then, X > 15 - 6 → X > 9 → X ≥ 10.",
      difficulty: "hard",
    },
    {
      id: 4,
      question: "If M < N = O ≤ P > Q, which of the following must be true?",
      options: ["A) M < P", "B) N > Q", "C) O ≥ Q", "D) P > M"],
      answer: "A",
      explanation: "From M < N ≤ P, we get M < P.",
      difficulty: "easy",
    },
    {
      id: 5,
      question:
        "If K ≥ L > M < N ≤ O, which of the following is definitely false?",
      options: ["A) K > M", "B) L < N", "C) M < O", "D) O ≤ L"],
      answer: "D",
      explanation:
        "From M < N ≤ O and L > M, O ≤ L is false (e.g., K=5, L=4, M=1, N=3, O=5 → O > L).",
      difficulty: "medium",
    },
    {
      id: 6,
      question: "If A > B ≤ C = D < E, which of the following must be true?",
      options: ["A) A > D", "B) B < E", "C) C > A", "D) E ≤ B"],
      answer: "B",
      explanation: "From B ≤ C = D < E, we get B < E.",
      difficulty: "hard",
    },
    {
      id: 7,
      question:
        "If X × Y ≤ 30 and Y ≥ 5, what is the maximum possible integer value of X?",
      options: ["A) 4", "B) 5", "C) 6", "D) 7"],
      answer: "C",
      explanation: "For maximum X, minimize Y (Y = 5). Then, X ≤ 30/5 → X ≤ 6.",
      difficulty: "medium",
    },
    {
      id: 8,
      question: "If P = Q ≥ R < S > T, which of the following is true?",
      options: ["A) P > S", "B) Q ≥ T", "C) R < P", "D) S ≤ Q"],
      answer: "C",
      explanation:
        "From P = Q ≥ R, we get R ≤ P → R < P (since R < S and S could be > P).",
      difficulty: "easy",
    },
    {
      id: 9,
      question: "If A + B < C and B > D, which of the following must be true?",
      options: ["A) A < C", "B) C > D", "C) B < C", "D) A < D"],
      answer: "B",
      explanation: "From B > D and A + B < C, we get C > B > D → C > D.",
      difficulty: "hard",
    },
    {
      id: 10,
      question: "If X > Y = Z ≤ W < V, which of the following is false?",
      options: ["A) X > Z", "B) W ≥ Y", "C) Z < V", "D) V ≤ X"],
      answer: "D",
      explanation:
        "From Z ≤ W < V, we get V > Z. But X > Z does not guarantee V ≤ X (e.g., X=5, Z=3, W=4, V=6 → V > X).",
      difficulty: "medium",
    },
    {
      id: 11,
      question: "If M ≤ N < O = P ≥ Q, which of the following must be true?",
      options: ["A) M < P", "B) N ≥ Q", "C) O > Q", "D) P > M"],
      answer: "A",
      explanation: "From M ≤ N < O = P, we get M < P.",
      difficulty: "easy",
    },
    {
      id: 12,
      question:
        "If K ≤ L > M ≥ N < O, which of the following is definitely incorrect?",
      options: ["A) K < O", "B) L ≥ N", "C) M < K", "D) O > M"],
      answer: "C",
      explanation:
        "From K ≤ L > M, M < K is possible only if K > M, but L > M doesn’t enforce this (e.g., K=2, L=5, M=3 → M > K).",
      difficulty: "hard",
    },
    {
      id: 13,
      question: "If A > B ≤ C < D = E, which of the following must be true?",
      options: ["A) A > D", "B) B < E", "C) C > E", "D) D ≤ B"],
      answer: "B",
      explanation: "From B ≤ C < D = E, we get B < E.",
      difficulty: "medium",
    },
    {
      id: 14,
      question: "If P + Q > R and Q ≤ S, which of the following must be true?",
      options: ["A) P > R", "B) P + S > R", "C) R < S", "D) Q > R"],
      answer: "B",
      explanation: "From Q ≤ S, P + Q > R → P + S > R (since S ≥ Q).",
      difficulty: "hard",
    },
    {
      id: 15,
      question: "If X ≥ Y = Z ≤ W < V, which of the following is false?",
      options: ["A) X ≥ Z", "B) W ≥ Y", "C) Z < V", "D) V ≤ X"],
      answer: "D",
      explanation:
        "From Z ≤ W < V, V > Z. But X ≥ Z does not guarantee V ≤ X (e.g., X=4, Z=3, W=5, V=6 → V > X).",
      difficulty: "medium",
    },
  ],
  set4: [
    {
      id: 1,
      question: "If A > B ≤ C = D > E, which of the following must be true?",
      options: ["A) A > D", "B) B > E", "C) C ≤ E", "D) D < B"],
      answer: "B",
      explanation:
        "From B ≤ C = D > E, it follows that B > E must be true (since B ≤ D > E → B > E).",
      difficulty: "easy",
    },
    {
      id: 2,
      question:
        "If X + Y ≤ 15 and Y ≥ 6, what is the maximum possible value of X?",
      options: ["A) 6", "B) 9", "C) 10", "D) 12"],
      answer: "B",
      explanation:
        "For maximum X, use minimum Y (Y=6). Then X ≤ 15 - 6 → X ≤ 9.",
      difficulty: "medium",
    },
    {
      id: 3,
      question:
        "If P < Q = R ≥ S > T, which of the following is definitely false?",
      options: ["A) P < S", "B) Q ≥ S", "C) R > T", "D) T < Q"],
      answer: "A",
      explanation:
        "P < Q = R ≥ S > T. P < S is not necessarily true (e.g., if P=1, Q=R=5, S=3, T=2 then P < S is true; but if S=2 and P=3, it's false).",
      difficulty: "hard",
    },
    {
      id: 4,
      question: "If M ≥ N > O ≤ P < Q, which relationship must hold?",
      options: ["A) M > P", "B) N < Q", "C) O < Q", "D) Q > M"],
      answer: "C",
      explanation: "From O ≤ P < Q, it must be true that O < Q.",
      difficulty: "medium",
    },
    {
      id: 5,
      question:
        "If K ≤ L = M < N ≥ O, which statement is definitely incorrect?",
      options: ["A) K < N", "B) M ≥ O", "C) L ≤ N", "D) O > N"],
      answer: "D",
      explanation: "From N ≥ O, the statement O > N is always false.",
      difficulty: "easy",
    },
    {
      id: 6,
      question: "If A > B < C > D < E, which of the following must be true?",
      options: ["A) A > D", "B) B < E", "C) C > B", "D) E > C"],
      answer: "C",
      explanation:
        "From C > B, this is always true. Other options depend on specific values.",
      difficulty: "medium",
    },
    {
      id: 7,
      question:
        "If X × Y ≥ 24 and Y ≤ 6, what is the minimum possible value of X?",
      options: ["A) 2", "B) 4", "C) 6", "D) 8"],
      answer: "B",
      explanation: "For minimum X, use maximum Y (Y=6). Then X ≥ 24/6 → X ≥ 4.",
      difficulty: "hard",
    },
    {
      id: 8,
      question: "If P ≤ Q = R < S ≤ T, which of the following must be true?",
      options: ["A) P < T", "B) Q > S", "C) R = T", "D) S ≤ P"],
      answer: "A",
      explanation: "From P ≤ R < S ≤ T, it follows that P < T.",
      difficulty: "easy",
    },
    {
      id: 9,
      question: "If A + B > C and B - C > 0, which must be true?",
      options: ["A) A > 0", "B) B > C", "C) C < 0", "D) A > C"],
      answer: "B",
      explanation:
        "From B - C > 0, we know B > C. The first inequality doesn't guarantee A > 0 or C < 0.",
      difficulty: "hard",
    },
    {
      id: 10,
      question: "If X > Y ≥ Z < W ≤ V, which statement is false?",
      options: ["A) X > Z", "B) Y < W", "C) Z ≤ V", "D) W > Y"],
      answer: "B",
      explanation:
        "Y ≥ Z < W does not guarantee Y < W (e.g., Y=5, Z=3, W=4 → Y > W).",
      difficulty: "medium",
    },
    {
      id: 11,
      question: "If M < N ≤ O = P ≥ Q, which must be true?",
      options: ["A) M < P", "B) N ≥ Q", "C) O > Q", "D) P > M"],
      answer: "A",
      explanation: "From M < N ≤ P, we get M < P.",
      difficulty: "easy",
    },
    {
      id: 12,
      question:
        "If K ≤ L < M ≥ N > O, which statement is definitely incorrect?",
      options: ["A) K < M", "B) L ≥ N", "C) M > O", "D) O < K"],
      answer: "B",
      explanation:
        "L < M ≥ N does not imply L ≥ N (e.g., L=2, M=5, N=3 → L < N).",
      difficulty: "hard",
    },
    {
      id: 13,
      question: "If A > B ≤ C < D = E, which must be true?",
      options: ["A) A > D", "B) B < E", "C) C > E", "D) D ≤ B"],
      answer: "B",
      explanation: "From B ≤ C < D = E, we get B < E.",
      difficulty: "medium",
    },
    {
      id: 14,
      question: "If P + Q < R and Q > S, which must be true?",
      options: ["A) P < R", "B) R > S", "C) P + S < R", "D) Q < R"],
      answer: "D",
      explanation:
        "From Q > S and P + Q < R, we get Q < R (since P could be negative).",
      difficulty: "hard",
    },
    {
      id: 15,
      question: "If X ≥ Y = Z ≤ W < V, which statement is false?",
      options: ["A) X ≥ Z", "B) W ≥ Y", "C) Z < V", "D) V ≤ X"],
      answer: "D",
      explanation:
        "From Z ≤ W < V, V > Z. But X ≥ Z does not guarantee V ≤ X (e.g., X=5, Z=3, W=4, V=6 → V > X).",
      difficulty: "medium",
    },
  ],
  set5: [
    {
      id: 1,
      question: "If A > B ≥ C < D = E, which of the following must be true?",
      options: ["A) A > D", "B) B ≥ E", "C) C < E", "D) D > B"],
      answer: "C",
      explanation:
        "From C < D = E, we directly get C < E. Other options cannot be confirmed.",
      difficulty: "easy",
    },
    {
      id: 2,
      question:
        "If X + Y > 20 and Y ≤ 8, what is the minimum possible integer value of X?",
      options: ["A) 12", "B) 13", "C) 14", "D) 15"],
      answer: "B",
      explanation:
        "For minimum X, maximize Y (Y=8). Then X > 20-8 → X > 12 → X ≥ 13.",
      difficulty: "medium",
    },
    {
      id: 3,
      question:
        "If P ≤ Q < R = S ≥ T, which of the following is definitely false?",
      options: ["A) P < S", "B) Q ≥ T", "C) R > P", "D) S ≤ Q"],
      answer: "D",
      explanation: "From Q < R = S, we get Q < S, making S ≤ Q impossible.",
      difficulty: "hard",
    },
    {
      id: 4,
      question: "If M > N ≤ O = P < Q, which relationship must hold?",
      options: ["A) M > Q", "B) N < Q", "C) O ≥ Q", "D) P > M"],
      answer: "B",
      explanation: "From N ≤ P < Q, we get N < Q.",
      difficulty: "medium",
    },
    {
      id: 5,
      question:
        "If K ≥ L = M < N ≤ O, which statement is definitely incorrect?",
      options: ["A) K ≥ M", "B) L < O", "C) N > K", "D) O ≤ M"],
      answer: "D",
      explanation: "From M < N ≤ O, we get O > M, making O ≤ M false.",
      difficulty: "easy",
    },
    {
      id: 6,
      question: "If A < B = C > D ≤ E, which must be true?",
      options: ["A) A < E", "B) B > D", "C) C ≤ E", "D) D > A"],
      answer: "B",
      explanation: "From B = C > D, we get B > D directly.",
      difficulty: "medium",
    },
    {
      id: 7,
      question:
        "If X × Y ≤ 40 and Y ≥ 8, what is the maximum possible integer value of X?",
      options: ["A) 4", "B) 5", "C) 6", "D) 7"],
      answer: "B",
      explanation: "For maximum X, minimize Y (Y=8). Then X ≤ 40/8 → X ≤ 5.",
      difficulty: "hard",
    },
    {
      id: 8,
      question: "If P = Q ≤ R > S ≥ T, which must be true?",
      options: ["A) P > S", "B) Q ≥ T", "C) R > T", "D) S ≤ Q"],
      answer: "C",
      explanation: "From R > S ≥ T, we get R > T.",
      difficulty: "easy",
    },
    {
      id: 9,
      question: "If A + B < C and C > D, which must be true?",
      options: ["A) A < D", "B) B < C", "C) C > A + D", "D) D < A + B"],
      answer: "B",
      explanation:
        "From A + B < C, we know B < C must be true (since A could be negative).",
      difficulty: "hard",
    },
    {
      id: 10,
      question: "If X > Y = Z ≥ W < V, which is false?",
      options: ["A) X > W", "B) Z < V", "C) W ≥ Y", "D) V > Z"],
      answer: "C",
      explanation:
        "From Y = Z ≥ W, we get W ≤ Y, making W ≥ Y false unless W=Y.",
      difficulty: "medium",
    },
    {
      id: 11,
      question: "If M ≤ N = O < P ≥ Q, which must be true?",
      options: ["A) M < P", "B) N ≥ Q", "C) O > Q", "D) P > M"],
      answer: "A",
      explanation: "From M ≤ N < P, we get M < P.",
      difficulty: "easy",
    },
    {
      id: 12,
      question: "If K < L ≤ M > N ≤ O, which is definitely incorrect?",
      options: ["A) K < O", "B) L > N", "C) M ≤ O", "D) O > K"],
      answer: "C",
      explanation:
        "From M > N ≤ O, M ≤ O is only possible if M=N=O, which isn't guaranteed.",
      difficulty: "hard",
    },
    {
      id: 13,
      question: "If A ≥ B < C = D ≤ E, which must be true?",
      options: ["A) A > D", "B) B < E", "C) C ≥ E", "D) D ≤ B"],
      answer: "B",
      explanation: "From B < C = D ≤ E, we get B < E.",
      difficulty: "medium",
    },
    {
      id: 14,
      question: "If P + Q ≤ R and Q > S, which must be true?",
      options: ["A) P < R", "B) R > S", "C) P ≤ R - Q", "D) Q < R"],
      answer: "D",
      explanation:
        "From Q > S and P + Q ≤ R, we get Q < R (since P could be zero).",
      difficulty: "hard",
    },
    {
      id: 15,
      question: "If X ≥ Y = Z ≤ W > V, which is false?",
      options: ["A) X ≥ Z", "B) W ≥ Y", "C) Z < W", "D) V ≥ X"],
      answer: "D",
      explanation:
        "From X ≥ Z ≤ W > V, V ≥ X would require X ≤ V, which isn't guaranteed.",
      difficulty: "medium",
    },
  ],
};
