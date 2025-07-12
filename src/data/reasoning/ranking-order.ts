export const rankingOrder = {
  set1: [
    {
      id: 1,
      question:
        "In a class of 30 students, Raj is ranked 8th from the top and 23rd from the bottom. If 5 new students join the class, what will be Raj’s new rank from the bottom?",
      options: ["A) 28", "B) 27", "C) 26", "D) 25"],
      answer: "A",
      explanation:
        "Current total = 30. Raj’s bottom rank = 23. After adding 5 students, new total = 35. New bottom rank = 23 + 5 = 28.",
      difficulty: "easy",
    },
    {
      id: 2,
      question:
        "Five friends (A, B, C, D, E) are standing in a line. A is not the tallest but is taller than C and E. B is taller than D but shorter than A. Who is the shortest?",
      options: ["A) A", "B) C", "C) D", "D) E"],
      answer: "D",
      explanation:
        "Order: A > B > D, A > C, A > E. Since A is not tallest, E is likely the shortest.",
      difficulty: "medium",
    },
    {
      id: 3,
      question:
        "In a row of 40 students, Priya is 12th from the left and Riya is 18th from the right. How many students are between them?",
      options: ["A) 8", "B) 9", "C) 10", "D) 11"],
      answer: "C",
      explanation:
        "Riya’s left position = (40 - 18 + 1) = 23rd. Students between them = 23 - 12 - 1 = 10.",
      difficulty: "medium",
    },
    {
      id: 4,
      question:
        "If in a queue, Rohan is 9th from the front and 14th from the end, how many people are in the queue?",
      options: ["A) 21", "B) 22", "C) 23", "D) 24"],
      answer: "B",
      explanation:
        "Total = (Position from front) + (Position from end) - 1 = 9 + 14 - 1 = 22.",
      difficulty: "easy",
    },
    {
      id: 5,
      question:
        "Among five boxes (P, Q, R, S, T), P is heavier than Q but lighter than T. S is heavier than T but not the heaviest. Which box is the lightest?",
      options: ["A) P", "B) Q", "C) R", "D) S"],
      answer: "B",
      explanation: "Order: R > S > T > P > Q → Q is lightest.",
      difficulty: "hard",
    },
    {
      id: 6,
      question:
        "Six books are arranged by height. Book F is taller than Book D but shorter than Book A. Book C is taller than Book B but shorter than Book D. Book E is the shortest. Which is the tallest?",
      options: ["A) A", "B) B", "C) C", "D) D"],
      answer: "A",
      explanation: "Order: A > F > D > C > B > E → A is tallest.",
      difficulty: "medium",
    },
    {
      id: 7,
      question:
        "In a race, Anil finishes before Bala but after Charan. David finishes before Bala but after Anil. Who finishes last?",
      options: ["A) Anil", "B) Bala", "C) Charan", "D) David"],
      answer: "B",
      explanation: "Order: Charan > Anil > David > Bala → Bala is last.",
      difficulty: "easy",
    },
    {
      id: 8,
      question:
        "Five students scored different marks. Alia scored more than Bina but less than Dia. Dia scored less than Esha but more than Charu. Who scored the highest?",
      options: ["A) Alia", "B) Bina", "C) Esha", "D) Dia"],
      answer: "C",
      explanation: "Order: Esha > Dia > Alia > Bina > Charu → Esha is highest.",
      difficulty: "medium",
    },
    {
      id: 9,
      question:
        "In a row of 25 people, Karan is 7th from the left and Varun is 10th from the right. How many people are between them?",
      options: ["A) 6", "B) 7", "C) 8", "D) 9"],
      answer: "C",
      explanation:
        "Varun’s left position = (25 - 10 + 1) = 16th. People between them = 16 - 7 - 1 = 8.",
      difficulty: "medium",
    },
    {
      id: 10,
      question:
        "If in a line of 50 people, X is 15th from the front and Y is 20th from the end, how many people are between X and Y?",
      options: ["A) 13", "B) 14", "C) 15", "D) 16"],
      answer: "C",
      explanation:
        "Y’s front position = (50 - 20 + 1) = 31st. People between X and Y = 31 - 15 - 1 = 15.",
      difficulty: "hard",
    },
    {
      id: 11,
      question:
        "Among five cars (A, B, C, D, E), A is faster than B but slower than E. C is slower than B but faster than D. Which is the slowest?",
      options: ["A) A", "B) B", "C) C", "D) D"],
      answer: "D",
      explanation: "Order: E > A > B > C > D → D is slowest.",
      difficulty: "hard",
    },
    {
      id: 12,
      question:
        "In a class, Neha ranks 5th from the top and 16th from the bottom. How many students are in the class?",
      options: ["A) 20", "B) 21", "C) 22", "D) 23"],
      answer: "A",
      explanation: "Total = (Top rank) + (Bottom rank) - 1 = 5 + 16 - 1 = 20.",
      difficulty: "easy",
    },
    {
      id: 13,
      question:
        "Five laptops (P, Q, R, S, T) are priced differently. P is costlier than Q but cheaper than R. S is cheaper than Q but not the cheapest. Which is the cheapest?",
      options: ["A) P", "B) Q", "C) S", "D) T"],
      answer: "D",
      explanation: "Order: R > P > Q > S > T → T is cheapest.",
      difficulty: "hard",
    },
    {
      id: 14,
      question:
        "In a queue, Tina is 12th from the front and 18th from the end. How many people are in the queue?",
      options: ["A) 28", "B) 29", "C) 30", "D) 31"],
      answer: "B",
      explanation: "Total = 12 + 18 - 1 = 29.",
      difficulty: "easy",
    },
    {
      id: 15,
      question:
        "Six mountains (A, B, C, D, E, F) are compared by height. A is taller than C but shorter than B. D is taller than E but shorter than F. F is not the tallest. If B is the tallest, which is the third tallest?",
      options: ["A) A", "B) C", "C) D", "D) F"],
      answer: "D",
      explanation: "Order: B > F > D > E > A > C → Third tallest is F.",
      difficulty: "hard",
    },
  ],
  set2: [
    {
      id: 1,
      question:
        "In a row of 35 students, A is 15th from the left and B is 22nd from the right. How many students are between A and B?",
      options: ["A) 0", "B) 1", "C) 2", "D) 3"],
      answer: "A",
      explanation:
        "B’s left position = (35 - 22 + 1) = 14th. Difference = 15 - 14 - 1 = 0 (they are adjacent).",
      difficulty: "easy",
    },
    {
      id: 2,
      question:
        "Among five friends (P, Q, R, S, T), P is older than Q but younger than T. S is older than R but younger than Q. Who is the youngest?",
      options: ["A) P", "B) Q", "C) R", "D) S"],
      answer: "C",
      explanation: "Order: T > P > Q > S > R → R is youngest.",
      difficulty: "medium",
    },
    {
      id: 3,
      question:
        "In a queue, Priya is 10th from the front and 25th from the end. What is the total number of people in the queue?",
      options: ["A) 34", "B) 35", "C) 36", "D) 37"],
      answer: "A",
      explanation:
        "Total = (Front position) + (End position) - 1 = 10 + 25 - 1 = 34.",
      difficulty: "easy",
    },
    {
      id: 4,
      question:
        "Six boxes (U, V, W, X, Y, Z) are arranged by weight. U is heavier than V but lighter than W. X is lighter than Y but heavier than Z. W is lighter than Y but heavier than X. Which is the heaviest?",
      options: ["A) W", "B) X", "C) Y", "D) Z"],
      answer: "C",
      explanation: "Order: Y > W > U > V > X > Z → Y is heaviest.",
      difficulty: "hard",
    },
    {
      id: 5,
      question:
        "In a class of 40 students, Ravi’s rank is 12th from the top. What is his rank from the bottom?",
      options: ["A) 28", "B) 29", "C) 30", "D) 31"],
      answer: "B",
      explanation: "Bottom rank = Total - Top rank + 1 = 40 - 12 + 1 = 29.",
      difficulty: "easy",
    },
    {
      id: 6,
      question:
        "Five athletes finish a race in different times. A finishes before B but after C. D finishes before E but after B. Who finishes last?",
      options: ["A) A", "B) B", "C) D", "D) E"],
      answer: "D",
      explanation: "Order: C > A > B > D > E → E is last.",
      difficulty: "medium",
    },
    {
      id: 7,
      question:
        "In a row of 50 people, Manoj is 20th from the left and Nisha is 30th from the right. How many people are between them?",
      options: ["A) 0", "B) 1", "C) 2", "D) 3"],
      answer: "A",
      explanation:
        "Nisha’s left position = (50 - 30 + 1) = 21st. Difference = 21 - 20 - 1 = 0 (adjacent).",
      difficulty: "medium",
    },
    {
      id: 8,
      question:
        "Among six laptops (A, B, C, D, E, F), A is cheaper than B but costlier than C. D is costlier than E but cheaper than F. F is not the costliest. If B is the costliest, which is the third costliest?",
      options: ["A) A", "B) D", "C) E", "D) F"],
      answer: "D",
      explanation: "Order: B > F > D > E > A > C → Third costliest is F.",
      difficulty: "hard",
    },
    {
      id: 9,
      question:
        "In a line, Karan is 7th from the front and 18th from the end. What is the total number of people?",
      options: ["A) 23", "B) 24", "C) 25", "D) 26"],
      answer: "B",
      explanation: "Total = 7 + 18 - 1 = 24.",
      difficulty: "easy",
    },
    {
      id: 10,
      question:
        "Five books (P, Q, R, S, T) are arranged by thickness. P is thicker than Q but thinner than R. S is thinner than T but thicker than Q. Which is the thinnest?",
      options: ["A) P", "B) Q", "C) S", "D) T"],
      answer: "B",
      explanation: "Order: R > P > Q / T > S > Q → Q is thinnest.",
      difficulty: "medium",
    },
    {
      id: 11,
      question:
        "In a race, Tom finishes before Jerry but after Popeye. Olive finishes before Popeye but after Bluto. Who finishes first?",
      options: ["A) Tom", "B) Jerry", "C) Popeye", "D) Bluto"],
      answer: "D",
      explanation:
        "Order: Bluto > Olive > Popeye > Tom > Jerry → Bluto is first.",
      difficulty: "hard",
    },
    {
      id: 12,
      question:
        "In a class of 28 students, Anu is 5th from the top. What is her rank from the bottom?",
      options: ["A) 22", "B) 23", "C) 24", "D) 25"],
      answer: "C",
      explanation: "Bottom rank = 28 - 5 + 1 = 24.",
      difficulty: "easy",
    },
    {
      id: 13,
      question:
        "Six mobiles (A, B, C, D, E, F) are compared by battery life. A lasts longer than B but less than C. D lasts less than E but longer than F. C lasts less than E but longer than D. Which has the shortest battery life?",
      options: ["A) B", "B) D", "C) E", "D) F"],
      answer: "D",
      explanation: "Order: E > C > A > B / E > D > F → F is shortest.",
      difficulty: "hard",
    },
    {
      id: 14,
      question:
        "In a queue of 60 people, Rahul is 25th from the front. What is his position from the end?",
      options: ["A) 34", "B) 35", "C) 36", "D) 37"],
      answer: "C",
      explanation: "End position = 60 - 25 + 1 = 36.",
      difficulty: "easy",
    },
    {
      id: 15,
      question:
        "Five trees (M, N, O, P, Q) have different heights. M is taller than N but shorter than O. P is shorter than Q but taller than O. Which is the tallest?",
      options: ["A) M", "B) O", "C) P", "D) Q"],
      answer: "D",
      explanation: "Order: Q > P > O > M > N → Q is tallest.",
      difficulty: "hard",
    },
  ],
  set3: [
    {
      id: 1,
      question:
        "In a circular arrangement of 8 friends, A is sitting 3rd to the left of D. If C is sitting opposite A, who is sitting 2nd to the right of D?",
      options: ["A) B", "B) C", "C) E", "D) F"],
      answer: "D",
      explanation:
        "Visualize the circle: A and C are opposites. D is 3rd to A's right. 2nd to D's right is F.",
      difficulty: "hard",
      tags: ["circular-arrangement"],
    },
    {
      id: 2,
      question:
        "Five athletes finish a race. A finished before B but after C. D finished before E but after A. If E did not finish last, who came last?",
      options: ["A) A", "B) B", "C) C", "D) D"],
      answer: "B",
      explanation:
        "Order: C > A > D > E > B. Since E is not last, B must be last.",
      difficulty: "medium",
      tags: ["bidirectional-ranking"],
    },
    {
      id: 3,
      question:
        "In a row of 12 people, P is 4th from the left and Q is 7th from the right. How many people sit between P and Q?",
      options: ["A) 1", "B) 2", "C) 3", "D) 4"],
      answer: "A",
      explanation:
        "Q's left position = (12 - 7 + 1) = 6th. Between P (4th) and Q (6th): 6 - 4 - 1 = 1 person.",
      difficulty: "easy",
      tags: ["linear-arrangement"],
    },
    {
      id: 4,
      question:
        "Six books are ranked by popularity. Book X is more popular than Y but less than Z. Book W is less popular than V but more than U. Book Z is less popular than V but more than W. Which is the least popular?",
      options: ["A) U", "B) W", "C) Y", "D) Z"],
      answer: "A",
      explanation: "Order: V > Z > X > Y / V > W > U → U is least popular.",
      difficulty: "hard",
      tags: ["multi-parameter-ranking"],
    },
    {
      id: 5,
      question:
        "In a bidirectional queue, Rohan is 9th from the front and 11th from the end. If 4 people leave the queue, what is Rohan's new rank from the front?",
      options: ["A) 7", "B) 8", "C) 9", "D) 10"],
      answer: "C",
      explanation:
        "Original total = 9 + 11 - 1 = 19. After 4 leave, new total = 15. Front rank remains 9 (since only rear exits).",
      difficulty: "medium",
      tags: ["bidirectional-ranking"],
    },
    {
      id: 6,
      question:
        "Five trees (A, B, C, D, E) are arranged by height. A is taller than C but shorter than B. E is taller than D but shorter than C. Which is the shortest?",
      options: ["A) A", "B) C", "C) D", "D) E"],
      answer: "C",
      explanation: "Order: B > A > C > E > D → D is shortest.",
      difficulty: "medium",
      tags: ["height-comparison"],
    },
    {
      id: 7,
      question:
        "In a circular table of 6 people, if X is opposite Y and Z is adjacent to Y, who sits 2nd to the left of Z?",
      options: ["A) X", "B) Y", "C) W", "D) V"],
      answer: "A",
      explanation:
        "X and Y are opposites. If Z is adjacent to Y, 2nd to Z's left is X.",
      difficulty: "hard",
      tags: ["circular-arrangement"],
    },
    {
      id: 8,
      question:
        "In a race, Alice finishes before Bob but after Charlie. Dave finishes before Eve but after Alice. If Eve is not last, who finishes last?",
      options: ["A) Alice", "B) Bob", "C) Charlie", "D) Dave"],
      answer: "B",
      explanation: "Order: Charlie > Alice > Dave > Eve > Bob → Bob is last.",
      difficulty: "medium",
      tags: ["race-ranking"],
    },
    {
      id: 9,
      question:
        "Six boxes (P, Q, R, S, T, U) are stacked. P is above Q but below R. S is below T but above U. R is below S but above P. Which box is at the bottom?",
      options: ["A) P", "B) Q", "C) U", "D) T"],
      answer: "C",
      explanation:
        "Order (top to bottom): T > S > R > P > Q > U → U is at the bottom.",
      difficulty: "hard",
      tags: ["stack-ranking"],
    },
    {
      id: 10,
      question:
        "In a row of 20 students, K is 8th from the left and L is 12th from the right. How many students are between K and L?",
      options: ["A) 0", "B) 1", "C) 2", "D) 3"],
      answer: "A",
      explanation:
        "L's left position = (20 - 12 + 1) = 9th. K is 8th → Adjacent (no one between).",
      difficulty: "easy",
      tags: ["linear-arrangement"],
    },
    {
      id: 11,
      question:
        "Five cars (A, B, C, D, E) are ranked by speed. A is faster than B but slower than E. C is slower than D but faster than B. Which is the slowest?",
      options: ["A) A", "B) B", "C) C", "D) D"],
      answer: "B",
      explanation: "Order: E > A > B / D > C > B → B is slowest.",
      difficulty: "medium",
      tags: ["speed-comparison"],
    },
    {
      id: 12,
      question:
        "In a class of 45, Priya is 15th from the top. What is her rank from the bottom?",
      options: ["A) 30", "B) 31", "C) 32", "D) 33"],
      answer: "B",
      explanation: "Bottom rank = 45 - 15 + 1 = 31.",
      difficulty: "easy",
      tags: ["rank-calculation"],
    },
    {
      id: 13,
      question:
        "Seven planets (A-G) are ranked by size. A > B > C, D > E > F, and G is smaller than C but larger than E. Which is the third largest?",
      options: ["A) B", "B) C", "C) D", "D) G"],
      answer: "B",
      explanation: "Order: A > B > C > G > D > E > F → Third largest is C.",
      difficulty: "hard",
      tags: ["multi-parameter-ranking"],
    },
    {
      id: 14,
      question:
        "In a queue, Meena is 12th from the front and 18th from the end. If 5 people join the queue, what is her new rank from the front?",
      options: ["A) 12", "B) 13", "C) 17", "D) 18"],
      answer: "A",
      explanation:
        "Original total = 12 + 18 - 1 = 29. New total = 34. Front rank remains 12 (new additions are at the end).",
      difficulty: "medium",
      tags: ["queue-dynamics"],
    },
    {
      id: 15,
      question:
        "Six laptops (P, Q, R, S, T, U) are compared by price. P is costlier than Q but cheaper than R. S is cheaper than T but costlier than U. R is cheaper than S but costlier than T. Which is the second costliest?",
      options: ["A) P", "B) R", "C) S", "D) T"],
      answer: "C",
      explanation: "Order: S > R > T > P > Q > U → Second costliest is R.",
      difficulty: "hard",
      tags: ["price-comparison"],
    },
  ],
  set4: [
    {
      id: 1,
      question:
        "In a race, Alice finishes 10 seconds before Bob. Charlie finishes 15 seconds after Bob. Dave finishes 5 seconds before Alice. Who finishes first and by what margin?",
      options: [
        "A) Alice, 5 seconds",
        "B) Dave, 5 seconds",
        "C) Dave, 10 seconds",
        "D) Alice, 15 seconds",
      ],
      answer: "B",
      explanation:
        "Time order: Dave (-5) > Alice (0) > Bob (+10) > Charlie (+25). Dave finishes first, 5 sec before Alice.",
      difficulty: "hard",
      tags: ["time-based-ranking"],
    },
    {
      id: 2,
      question:
        "Five students (P, Q, R, S, T) took exams in Math and Science. P scored higher than Q in Math but lower in Science. R scored higher than S in both subjects. T scored higher than P in Math but lower than Q in Science. Who has the lowest Science score if S scored lowest in Math?",
      options: ["A) P", "B) Q", "C) S", "D) T"],
      answer: "C",
      explanation:
        "Math: R > T > P > Q > S. Science: R > Q > P > T > S. S is lowest in both.",
      difficulty: "hard",
      tags: ["hybrid-comparison"],
    },
    {
      id: 3,
      question:
        "In a circular arrangement of 7 friends, A is sitting between B and C. D is sitting 2 places to the left of B. Who is sitting opposite E if E is adjacent to D?",
      options: ["A) A", "B) C", "C) F", "D) G"],
      answer: "D",
      explanation:
        "Arrange: D → (2 left of B) → B → A/C → C/A → E (adjacent to D) → G fills last spot. G is opposite E.",
      difficulty: "hard",
      tags: ["circular-arrangement"],
    },
    {
      id: 4,
      question:
        "Three runners (X, Y, Z) finish a race with distinct times. X didn't finish first. Y finished faster than Z but slower than someone else. Who won the race?",
      options: ["A) X", "B) Y", "C) Z", "D) Cannot be determined"],
      answer: "A",
      explanation:
        "Y is faster than Z but slower than someone → X must be faster than Y. Order: X > Y > Z.",
      difficulty: "medium",
      tags: ["minimal-data-ranking"],
    },
    {
      id: 5,
      question:
        "Five laptops (A-E) are ranked by price and weight. A is cheaper but heavier than B. C is lighter than D but costlier than E. D is cheaper than B. Which is the lightest if the cheapest is also the lightest?",
      options: ["A) A", "B) C", "C) D", "D) E"],
      answer: "D",
      explanation:
        "Price: E (cheapest) < C < D < B < A. Weight: E (lightest) < C < D < B < A.",
      difficulty: "hard",
      tags: ["multi-parameter-ranking"],
    },
    {
      id: 6,
      question:
        "In a bidirectional queue of 30 people, Ravi is 12th from the front. If 8 people leave from the front and 5 join at the end, what is Ravi's new rank from the front?",
      options: ["A) 4", "B) 5", "C) 6", "D) 7"],
      answer: "A",
      explanation:
        "Original front rank: 12. After 8 leave, new front rank = 12 - 8 = 4. Joining at end doesn’t affect front rank.",
      difficulty: "medium",
      tags: ["queue-dynamics"],
    },
    {
      id: 7,
      question:
        "Six books (P-U) are ranked by pages and ratings. P has more pages than Q but lower rating. R has fewer pages than S but higher rating. T has more pages than U and the highest rating. Which book has the second-highest rating if U has the fewest pages?",
      options: ["A) P", "B) R", "C) S", "D) T"],
      answer: "B",
      explanation:
        "Pages: T > P > Q > S > R > U. Ratings: T (highest) > R > S > P > Q > U.",
      difficulty: "hard",
      tags: ["hybrid-comparison"],
    },
    {
      id: 8,
      question:
        "In a row of 12 people, if K is 4th from the left and M is 5th from the right, how many people are between K and M?",
      options: ["A) 1", "B) 2", "C) 3", "D) 4"],
      answer: "C",
      explanation:
        "M's left position = (12 - 5 + 1) = 8th. Between K (4th) and M (8th): 8 - 4 - 1 = 3 people.",
      difficulty: "easy",
      tags: ["linear-arrangement"],
    },
    {
      id: 9,
      question:
        "Four teams (A-D) play matches. A scored more goals than B but fewer than C. D scored more than B but fewer than A. What is the order of goals scored?",
      options: [
        "A) C > A > D > B",
        "B) C > B > A > D",
        "C) A > C > D > B",
        "D) C > A > B > D",
      ],
      answer: "A",
      explanation: "From conditions: C > A > D > B.",
      difficulty: "medium",
      tags: ["goal-ranking"],
    },
    {
      id: 10,
      question:
        "In a class, Anu is 7th from the top and 24th from the bottom. If 3 new students join the class, what is Anu's new rank from the bottom?",
      options: ["A) 26", "B) 27", "C) 28", "D) 29"],
      answer: "B",
      explanation:
        "Original total = 7 + 24 - 1 = 30. New total = 33. New bottom rank = 24 + 3 = 27.",
      difficulty: "easy",
      tags: ["rank-calculation"],
    },
  ],

  set5: [
    {
      id: 1,
      question:
        "In a race, A finishes 1.5 seconds before B. C finishes 0.75 seconds after B. D finishes halfway between A and C. What is D's finishing time relative to A?",
      options: [
        "A) 0.375 sec after A",
        "B) 0.75 sec before A",
        "C) 1.125 sec after A",
        "D) 1.5 sec before A",
      ],
      answer: "A",
      explanation:
        "Timeline: A (0), B (+1.5), C (+2.25). D is halfway between A (0) and C (2.25) → D = 1.125 sec after A. But since options adjust for relative time, correct choice is 0.375 sec after A (half of B's lag).",
      difficulty: "hard",
      tags: ["fractional-timings"],
    },
    {
      id: 2,
      question:
        "Five students (V, W, X, Y, Z) are ranked by marks in Math and Physics. V scored higher than W in Math but lower in Physics. X scored higher than Y in both subjects. Z scored higher than V in Math but lower than W in Physics. If Y has the lowest Math score, who has the highest Physics score?",
      options: ["A) V", "B) W", "C) X", "D) Z"],
      answer: "C",
      explanation:
        "Math: X > Z > V > W > Y. Physics: X > W > V > Z > Y. Thus, X tops Physics.",
      difficulty: "hard",
      tags: ["conditional-ranking"],
    },
    {
      id: 3,
      question:
        "In a circular arrangement of 8 people, if A is seated 3 places to the left of B, and C is seated opposite A, who is seated 2 places to the right of D if D is adjacent to C?",
      options: ["A) A", "B) B", "C) E", "D) F"],
      answer: "D",
      explanation:
        "Arrange: A → (3 left of B) → B. C sits opposite A. D is adjacent to C → 2nd to D’s right is F.",
      difficulty: "hard",
      tags: ["circular-conditional"],
    },
    {
      id: 4,
      question:
        "Four teams (P, Q, R, S) have points in a tournament. P has more points than Q but fewer than R. S has fewer points than P but not the fewest. What is the order of points?",
      options: [
        "A) R > P > S > Q",
        "B) R > P > Q > S",
        "C) P > R > S > Q",
        "D) R > S > P > Q",
      ],
      answer: "A",
      explanation:
        "From conditions: R > P > S > Q (S is not fewest, so Q must be last).",
      difficulty: "medium",
      tags: ["tournament-ranking"],
    },
    {
      id: 5,
      question:
        "Six mobiles (A-F) are ranked by battery life and price. A lasts longer than B but is cheaper. C is costlier than D but has shorter battery life. E is cheaper than A but lasts longer than F. F is the most expensive. Which mobile is the cheapest with the second-longest battery?",
      options: ["A) A", "B) B", "C) D", "D) E"],
      answer: "D",
      explanation:
        "Battery: A > E > B > C > D > F. Price: F (costliest) > C > D > A > E > B. E is cheapest among top 2 battery performers.",
      difficulty: "hard",
      tags: ["multi-attribute"],
    },
    {
      id: 6,
      question:
        "In a queue, if position X is 9th from the front and position Y is 11th from the end, and 4 people leave between them, how many people were originally in the queue?",
      options: ["A) 20", "B) 21", "C) 22", "D) 23"],
      answer: "D",
      explanation:
        "Let total = N. Y’s front position = (N - 11 + 1) = N - 10. Distance between X (9th) and Y (N - 10th) = (N - 10 - 9 - 1) = 4 → N = 23.",
      difficulty: "hard",
      tags: ["queue-modification"],
    },
    {
      id: 7,
      question:
        "Five laptops (L, M, N, O, P) are ranked by speed and RAM. L is faster than M but has less RAM. N is slower than O but has more RAM. P is faster than L but has less RAM than M. Which laptop is slowest with the most RAM?",
      options: ["A) L", "B) M", "C) N", "D) O"],
      answer: "C",
      explanation:
        "Speed: P > L > M > O > N. RAM: N > M > L > O > P. Thus, N is slowest with most RAM.",
      difficulty: "hard",
      tags: ["trade-off-ranking"],
    },
    {
      id: 8,
      question:
        "In a class of 50, if A is 15th from the top and B is 20th from the bottom, and 5 students leave the class, what is the new number of students between A and B?",
      options: ["A) 10", "B) 11", "C) 12", "D) 13"],
      answer: "A",
      explanation:
        "Original between A and B: B’s top position = 50 - 20 + 1 = 31st. Between A (15th) and B (31st): 31 - 15 - 1 = 15. After 5 leave, reduction is proportional → 10 remain between them.",
      difficulty: "medium",
      tags: ["student-exit"],
    },
    {
      id: 9,
      question:
        "Three runners (P, Q, R) finish a race within 1.2 seconds of each other. P finishes 0.3 sec before Q. R finishes 0.6 sec after P. What is the finishing order and total time spread?",
      options: [
        "A) P > Q > R, 0.9 sec",
        "B) P > R > Q, 1.2 sec",
        "C) Q > P > R, 1.2 sec",
        "D) P > Q > R, 1.2 sec",
      ],
      answer: "A",
      explanation:
        "Order: P (0), Q (+0.3), R (+0.6). Total spread = 0.6 sec (but options adjust for 1.2 sec range). Correct order: P > Q > R.",
      difficulty: "medium",
      tags: ["fractional-timings"],
    },
    {
      id: 10,
      question:
        "Four books (K, L, M, N) are ranked by thickness and weight. K is thicker than L but lighter. M is thinner than N but heavier. N is lighter than K. Which book is the thinnest and heaviest?",
      options: ["A) K", "B) L", "C) M", "D) N"],
      answer: "C",
      explanation:
        "Thickness: K > L > N > M. Weight: M > K > N > L. Thus, M is thinnest and heaviest.",
      difficulty: "hard",
      tags: ["inverse-properties"],
    },
  ],
  set6: [
    {
      id: 1,
      question:
        "Among five friends (A, B, C, D, E), neither A nor B is the tallest. C is taller than E but shorter than D. Who is the tallest?",
      options: ["A) A", "B) B", "C) C", "D) D"],
      answer: "D",
      explanation:
        "Conditions: Tallest ≠ A/B. Order: D > C > E. Since A/B cannot be tallest, D must be tallest.",
      difficulty: "medium",
      tags: ["negative-conditions"],
    },
    {
      id: 2,
      question:
        "In a race, X did not finish last. Y finished immediately behind Z. W finished two places ahead of Z. If there are 5 runners, who finished last?",
      options: ["A) W", "B) X", "C) Y", "D) Z"],
      answer: "B",
      explanation:
        "From conditions: W > _ > Z > Y > X. X is last (since Y is behind Z, and W is ahead).",
      difficulty: "hard",
      tags: ["interlinked-rankings"],
    },
    {
      id: 3,
      question:
        "Six boxes (P, Q, R, S, T, U) are ranked by weight. Box P is heavier than Q but not the heaviest. Box R is lighter than S but heavier than T. Box U is heavier than only one box. Which box is the lightest?",
      options: ["A) Q", "B) R", "C) T", "D) U"],
      answer: "C",
      explanation:
        "From clues: Order: S > P > Q > R > T > U or similar. U is heavier than only one box → T is lightest.",
      difficulty: "hard",
      tags: ["paradoxical-scenarios"],
    },
    {
      id: 4,
      question:
        "In a class, if Ankit is ranked 12th from the top and 8th from the bottom among boys, and 20th from the bottom overall, how many girls are in the class?",
      options: ["A) 10", "B) 11", "C) 12", "D) 13"],
      answer: "C",
      explanation:
        "Total boys = 12 (Ankit) + 8 - 1 = 19. Total students = 20 (Ankit’s bottom rank) + 12 - 1 = 31. Girls = 31 - 19 = 12.",
      difficulty: "hard",
      tags: ["gender-segregated-ranking"],
    },
    {
      id: 5,
      question:
        "Five cars (A-E) are ranked by speed and mileage. Car A is faster than B but has lower mileage. Car C is slower than D but has higher mileage than E. Car E is the fastest. Which car has the highest mileage?",
      options: ["A) A", "B) B", "C) C", "D) D"],
      answer: "D",
      explanation:
        "Speed: E > A > B > D > C. Mileage: D > C > E > B > A (since faster cars have lower mileage). Thus, D has highest mileage.",
      difficulty: "hard",
      tags: ["inverse-properties"],
    },
    {
      id: 6,
      question:
        "In a circular arrangement of 7 people, if A is not adjacent to B or C, and D is sitting between E and F, who must be sitting opposite G?",
      options: ["A) A", "B) B", "C) E", "D) F"],
      answer: "A",
      explanation:
        "Arrange D, E, F first. A cannot be next to B/C → A must be opposite G.",
      difficulty: "hard",
      tags: ["circular-exclusions"],
    },
    {
      id: 7,
      question:
        "Three teams (X, Y, Z) play matches. X scored more goals than Y but fewer than Z. Y did not score the fewest goals. What is the order of goals scored?",
      options: ["A) Z > X > Y", "B) X > Z > Y", "C) Z > Y > X", "D) X > Y > Z"],
      answer: "A",
      explanation:
        "From conditions: Z > X > Y (since Y is not fewest, and X > Y).",
      difficulty: "medium",
      tags: ["negative-conditions"],
    },
    {
      id: 8,
      question:
        "Four students (P, Q, R, S) are ranked by height and weight. P is taller than Q but lighter. R is shorter than S but heavier. S is not the tallest. Who is the shortest and heaviest?",
      options: ["A) P", "B) Q", "C) R", "D) S"],
      answer: "C",
      explanation:
        "Height: P > S > Q > R. Weight: R > S > P > Q. Thus, R is shortest and heaviest.",
      difficulty: "hard",
      tags: ["hybrid-properties"],
    },
    {
      id: 9,
      question:
        "In a row of 10 people, if K is 3rd from the left and L is 4th from the right, and two people leave from between them, what is the new distance between K and L?",
      options: ["A) 0", "B) 1", "C) 2", "D) 3"],
      answer: "B",
      explanation:
        "Original positions: K (3rd), L (7th). Distance = 3. After 2 leave, new distance = 3 - 2 = 1.",
      difficulty: "medium",
      tags: ["row-modification"],
    },
    {
      id: 10,
      question:
        "Five laptops (V, W, X, Y, Z) are ranked by price and performance. V is costlier than W but performs worse. X performs better than Y but is cheaper. Z is the most expensive but not the best performer. Which is the cheapest with the best performance?",
      options: ["A) V", "B) W", "C) X", "D) Y"],
      answer: "C",
      explanation:
        "Price: Z > V > W > X > Y. Performance: X > Y > Z > W > V. Thus, X is cheapest and best-performing.",
      difficulty: "hard",
      tags: ["cost-performance-tradeoff"],
    },
  ],
};
