export const sequenceSeries = {
  set1: [
    {
      id: 1,
      question: "What is the 8th term of the AP: 3, 7, 11, 15, ...?",
      options: ["A) 27", "B) 31", "C) 35", "D) 39"],
      answer: "B",
      explanation:
        "For AP, ( a_n = a + (n-1)d ). Here, ( a = 3 ), ( d = 4 ). 8th term = ( 3 + 7 \times 4 = 31 ).",
      difficulty: "easy",
    },
    {
      id: 2,
      question:
        "The sum of the first 12 terms of an AP is 240, and the common difference is 2. Find the first term.",
      options: ["A) 8", "B) 9", "C) 10", "D) 11"],
      answer: "B",
      explanation:
        "( S_n = \frac{n}{2} [2a + (n-1)d] ). ( 240 = 6[2a + 22] ) → ( a = 9 ).",
      difficulty: "medium",
    },
    {
      id: 3,
      question:
        "If the 4th term of an AP is 14 and the 10th term is 32, what is the 15th term?",
      options: ["A) 45", "B) 47", "C) 49", "D) 51"],
      answer: "B",
      explanation:
        "Solve ( a + 3d = 14 ) and ( a + 9d = 32 ) → ( d = 3 ), ( a = 5 ). 15th term = ( 5 + 14 \times 3 = 47 ).",
      difficulty: "hard",
    },
    {
      id: 4,
      question:
        "Find the sum of the first 20 terms of the AP: 5, 9, 13, 17, ...",
      options: ["A) 820", "B) 860", "C) 900", "D) 940"],
      answer: "B",
      explanation:
        "( S_n = \frac{n}{2} [2a + (n-1)d] ). Here, ( S_{20} = 10[10 + 19 \times 4] = 860 ).",
      difficulty: "medium",
    },
    {
      id: 5,
      question:
        "The 2nd term of a GP is 12 and the 5th term is 96. What is the 7th term?",
      options: ["A) 192", "B) 288", "C) 384", "D) 432"],
      answer: "C",
      explanation:
        "GP terms: ( ar = 12 ), ( ar^4 = 96 ). Divide to get ( r^3 = 8 ) → ( r = 2 ), ( a = 6 ). 7th term = ( 6 \times 2^6 = 384 ).",
      difficulty: "hard",
    },
    {
      id: 6,
      question: "Find the sum of the infinite GP: ( 16, 8, 4, 2, dots )",
      options: ["A) 24", "B) 28", "C) 30", "D) 32"],
      answer: "D",
      explanation: "Sum = ( \frac{a}{1 - r} = \frac{16}{1 - 0.5} = 32 ).",
      difficulty: "easy",
    },
    {
      id: 7,
      question: "Which term of the AP 10, 7, 4, ... is (-32)?",
      options: ["A) 13", "B) 15", "C) 17", "D) 19"],
      answer: "B",
      explanation: "( a_n = 10 + (n-1)(-3) = -32 ) → ( n = 15 ).",
      difficulty: "medium",
    },
    {
      id: 8,
      question:
        "The 3rd term of an HP is ( \frac{1}{5} ) and the 5th term is ( \frac{1}{9} ). Find the 10th term.",
      options: [
        "A) ( \frac{1}{14} )",
        "B) ( \frac{1}{16} )",
        "C) ( \frac{1}{18} )",
        "D) ( \frac{1}{20} )",
      ],
      answer: "D",
      explanation:
        "Convert HP to AP: 3rd term of AP = 5, 5th term = 9. AP: ( a + 2d = 5 ), ( a + 4d = 9 ) → ( d = 2 ), ( a = 1 ). 10th term of AP = ( 1 + 9 \times 2 = 19 ). Thus, HP term = ( \frac{1}{19+1} = \frac{1}{20} ).",
      difficulty: "hard",
    },
    {
      id: 9,
      question: "Find the sum of the series: ( 1 + 3 + 5 + dots + 49 ).",
      options: ["A) 576", "B) 625", "C) 676", "D) 729"],
      answer: "B",
      explanation:
        "Sum of first ( n ) odd numbers = ( n^2 ). Here, ( n = 25 ) → ( 25^2 = 625 ).",
      difficulty: "easy",
    },
    {
      id: 10,
      question:
        "The sum of three consecutive terms of an AP is 21, and their product is 315. Find the largest term.",
      options: ["A) 7", "B) 9", "C) 11", "D) 13"],
      answer: "B",
      explanation:
        "Let terms be ( a-d ), ( a ), ( a+d ). Sum: ( 3a = 21 ) → ( a = 7 ). Product: ( (7-d)(7)(7+d) = 315 ) → ( d = 2 ). Largest term = ( 7 + 2 = 9 ).",
      difficulty: "medium",
    },
    {
      id: 11,
      question:
        "If the sum of the first ( n ) terms of an AP is ( 3n^2 + 2n ), find the 10th term.",
      options: ["A) 56", "B) 59", "C) 62", "D) 65"],
      answer: "B",
      explanation:
        "( a_n = S_n - S_{n-1} ). ( a_{10} = (3 \times 100 + 20) - (3 \times 81 + 18) = 59 ).",
      difficulty: "hard",
    },
    {
      id: 12,
      question: "Find the sum of the series: ( 5 + 11 + 17 + dots + 95 ).",
      options: ["A) 800", "B) 850", "C) 900", "D) 950"],
      answer: "A",
      explanation:
        "AP: ( a = 5 ), ( d = 6 ), ( a_n = 95 ). ( n = 16 ). Sum = ( \frac{16}{2}(5 + 95) = 800 ).",
      difficulty: "medium",
    },
    {
      id: 13,
      question:
        "The 4th term of a GP is ( \frac{2}{3} ) and the 7th term is ( \frac{16}{81} ). What is the first term?",
      options: ["A) 3", "B) 4", "C) 6", "D) 9"],
      answer: "D",
      explanation:
        "( ar^3 = \frac{2}{3} ), ( ar^6 = \frac{16}{81} ). Divide: ( r^3 = \frac{8}{27} ) → ( r = \frac{2}{3} ), ( a = 9 ).",
      difficulty: "hard",
    },
    {
      id: 14,
      question:
        "Find the sum of the first 40 terms of the AP whose ( n )-th term is ( 4n - 1 ).",
      options: ["A) 3160", "B) 3240", "C) 3320", "D) 3400"],
      answer: "B",
      explanation:
        "( a_n = 4n - 1 ). Sum = ( \frac{n}{2}(a_1 + a_n) = 20(3 + 159) = 3240 ).",
      difficulty: "medium",
    },
    {
      id: 15,
      question:
        "The AM of two numbers is 10, and their GM is 8. Find their HM.",
      options: ["A) 6.2", "B) 6.4", "C) 6.6", "D) 6.8"],
      answer: "B",
      explanation:
        "Let numbers be ( x ) and ( y ). AM = ( \frac{x+y}{2} = 10 ), GM = ( sqrt{xy} = 8 ). HM = ( \frac{2xy}{x+y} = \frac{128}{20} = 6.4 ).",
      difficulty: "hard",
    },
  ],

  set2: [
    {
      id: 1,
      question: "What is the 6th term of the GP: 2, 6, 18, 54, ...?",
      options: ["A) 162", "B) 324", "C) 486", "D) 972"],
      answer: "C",
      explanation:
        "For GP, ( a_n = ar^{n-1} ). Here, ( a = 2 ), ( r = 3 ). 6th term = ( 2 \times 3^5 = 486 ).",
      difficulty: "easy",
    },
    {
      id: 2,
      question:
        "The sum of the first 5 terms of a GP is 93, and the common ratio is 2. Find the first term.",
      options: ["A) 3", "B) 4", "C) 5", "D) 6"],
      answer: "A",
      explanation:
        "( S_n = a \frac{r^n - 1}{r - 1} ). ( 93 = a \frac{31}{1} ) → ( a = 3 ).",
      difficulty: "medium",
    },
    {
      id: 3,
      question:
        "If the 3rd term of a GP is 20 and the 6th term is 160, what is the 9th term?",
      options: ["A) 640", "B) 960", "C) 1280", "D) 2560"],
      answer: "C",
      explanation:
        "Solve ( ar^2 = 20 ) and ( ar^5 = 160 ) → ( r^3 = 8 ) → ( r = 2 ), ( a = 5 ). 9th term = ( 5 \times 2^8 = 1280 ).",
      difficulty: "hard",
    },
    {
      id: 4,
      question: "Find the sum of the infinite GP: ( 27, 9, 3, 1, dots )",
      options: ["A) 40.5", "B) 54", "C) 60.5", "D) 81"],
      answer: "A",
      explanation:
        "Sum = ( \frac{a}{1 - r} = \frac{27}{1 - \frac{1}{3}} = 40.5 ).",
      difficulty: "easy",
    },
    {
      id: 5,
      question:
        "The 2nd term of an HP is ( \frac{1}{3} ), and the 5th term is ( \frac{1}{12} ). Find the 8th term.",
      options: [
        "A) ( \frac{1}{15} )",
        "B) ( \frac{1}{18} )",
        "C) ( \frac{1}{21} )",
        "D) ( \frac{1}{24} )",
      ],
      answer: "C",
      explanation:
        "Convert HP to AP: 2nd term of AP = 3, 5th term = 12. AP: ( a + d = 3 ), ( a + 4d = 12 ) → ( d = 3 ), ( a = 0 ). 8th term of AP = ( 0 + 7 \times 3 = 21 ). Thus, HP term = ( \frac{1}{21} ).",
      difficulty: "hard",
    },
    {
      id: 6,
      question:
        "Find the sum of the series: ( 1 + \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + dots ) (infinite terms).",
      options: ["A) 1.5", "B) 2", "C) 2.5", "D) 3"],
      answer: "B",
      explanation: "Sum = ( \frac{a}{1 - r} = \frac{1}{1 - 0.5} = 2 ).",
      difficulty: "easy",
    },
    {
      id: 7,
      question: "Which term of the GP ( 5, 10, 20, dots ) is 5120?",
      options: ["A) 8", "B) 10", "C) 11", "D) 12"],
      answer: "C",
      explanation:
        "( a_n = 5 \times 2^{n-1} = 5120 ) → ( 2^{n-1} = 1024 ) → ( n = 11 ).",
      difficulty: "medium",
    },
    {
      id: 8,
      question:
        "The sum of the first 3 terms of a GP is 21, and their product is 216. Find the common ratio.",
      options: ["A) 1.5", "B) 2", "C) 2.5", "D) 3"],
      answer: "B",
      explanation:
        "Let terms be ( \frac{a}{r} ), ( a ), ( ar ). Product: ( a^3 = 216 ) → ( a = 6 ). Sum: ( \frac{6}{r} + 6 + 6r = 21 ) → ( r = 2 ) or ( 0.5 ).",
      difficulty: "hard",
    },
    {
      id: 9,
      question:
        "Find the sum of the series: ( 1^2 + 2^2 + 3^2 + dots + 10^2 ).",
      options: ["A) 285", "B) 385", "C) 485", "D) 585"],
      answer: "B",
      explanation:
        "Sum of squares = ( \frac{n(n+1)(2n+1)}{6} = \frac{10 \times 11 \times 21}{6} = 385 ).",
      difficulty: "easy",
    },
    {
      id: 10,
      question:
        "The AM of two numbers is 15, and their GM is 12. Find their HM.",
      options: ["A) 9.6", "B) 10.2", "C) 11.4", "D) 12.8"],
      answer: "A",
      explanation:
        "Let numbers be ( x ) and ( y ). AM = ( \frac{x+y}{2} = 15 ), GM = ( sqrt{xy} = 12 ). HM = ( \frac{2xy}{x+y} = \frac{288}{30} = 9.6 ).",
      difficulty: "medium",
    },
    {
      id: 11,
      question:
        "If the sum of the first ( n ) terms of a GP is ( 2^n - 1 ), find the 5th term.",
      options: ["A) 8", "B) 16", "C) 32", "D) 64"],
      answer: "B",
      explanation:
        "( S_n = 2^n - 1 ). ( a_n = S_n - S_{n-1} = 2^{n-1} ). 5th term = ( 2^4 = 16 ).",
      difficulty: "hard",
    },
    {
      id: 12,
      question: "Find the sum of the series: ( 3 + 7 + 11 + dots + 99 ).",
      options: ["A) 1250", "B) 1275", "C) 1300", "D) 1325"],
      answer: "B",
      explanation:
        "AP: ( a = 3 ), ( d = 4 ), ( a_n = 99 ). ( n = 25 ). Sum = ( \frac{25}{2}(3 + 99) = 1275 ).",
      difficulty: "medium",
    },
    {
      id: 13,
      question:
        "The 1st term of an HP is ( \frac{1}{5} ), and the 3rd term is ( \frac{1}{9} ). Find the 6th term.",
      options: [
        "A) ( \frac{1}{13} )",
        "B) ( \frac{1}{15} )",
        "C) ( \frac{1}{17} )",
        "D) ( \frac{1}{19} )",
      ],
      answer: "A",
      explanation:
        "Convert HP to AP: 1st term of AP = 5, 3rd term = 9. AP: ( a = 5 ), ( d = 2 ). 6th term of AP = ( 5 + 5 \times 2 = 15 ). Thus, HP term = ( \frac{1}{15} ).",
      difficulty: "hard",
    },
    {
      id: 14,
      question:
        "Find the sum of the first 15 terms of the series: ( 1 \times 2 + 2 \times 3 + 3 \times 4 + dots )",
      options: ["A) 1360", "B) 1440", "C) 1520", "D) 1680"],
      answer: "B",
      explanation:
        "General term = ( n(n+1) ). Sum = ( sum n^2 + sum n = \frac{n(n+1)(2n+1)}{6} + \frac{n(n+1)}{2} ). For ( n = 15 ), sum = 1440.",
      difficulty: "medium",
    },
    {
      id: 15,
      question:
        "The sum of three numbers in GP is 26, and their product is 216. Find the largest number.",
      options: ["A) 6", "B) 12", "C) 18", "D) 24"],
      answer: "C",
      explanation:
        "Let terms be ( \frac{a}{r} ), ( a ), ( ar ). Product: ( a^3 = 216 ) → ( a = 6 ). Sum: ( \frac{6}{r} + 6 + 6r = 26 ) → ( r = 3 ). Largest term = ( 6 \times 3 = 18 ).",
      difficulty: "hard",
    },
  ],
  set3: [
    {
      id: 1,
      question: "Find the missing term in the series: 2, 5, 10, 17, ?, 37",
      options: ["A) 24", "B) 26", "C) 28", "D) 30"],
      answer: "B",
      explanation:
        "Pattern: ( n^2 + 1 ) (1²+1=2, 2²+1=5,...). Missing term = 5²+1 = 26.",
      difficulty: "easy",
    },
    {
      id: 2,
      question:
        "What is the sum of the first 25 terms of the series: 1³, 2³, 3³, ...?",
      options: ["A) 105625", "B) 110250", "C) 115762", "D) 120000"],
      answer: "A",
      explanation:
        "Sum of cubes = ( left( \frac{n(n+1)}{2} \right)^2 ). For n=25: ( (325)^2 = 105625 ).",
      difficulty: "medium",
    },
    {
      id: 3,
      question:
        "The sum of the first 10 terms of an AP is 200, and the sum of the next 10 terms is 400. Find the first term.",
      options: ["A) 5", "B) 7", "C) 9", "D) 11"],
      answer: "A",
      explanation:
        "Let sum of first 10 terms = ( \frac{10}{2}(2a + 9d) = 200 ). Sum of next 10 = ( \frac{10}{2}(2(a+10d) + 9d) = 400 ). Solve to get a=5.",
      difficulty: "hard",
    },
    {
      id: 4,
      question: "Find the next term in the series: 1, 1, 2, 3, 5, 8, ...",
      options: ["A) 11", "B) 12", "C) 13", "D) 14"],
      answer: "C",
      explanation:
        "Fibonacci series (sum of previous two terms). Next term = 5 + 8 = 13.",
      difficulty: "easy",
    },
    {
      id: 5,
      question:
        "The sum of an infinite GP is 15, and the first term is 5. Find the common ratio.",
      options: ["A) 1/3", "B) 1/2", "C) 2/3", "D) 3/4"],
      answer: "C",
      explanation:
        "Sum = ( \frac{a}{1-r} = 15 ). Given a=5 → ( r = \frac{2}{3} ).",
      difficulty: "medium",
    },
    {
      id: 6,
      question: "Find the 7th term of the series: 1, 4, 9, 16, 25, ...",
      options: ["A) 36", "B) 49", "C) 64", "D) 81"],
      answer: "B",
      explanation: "Series of squares: ( n^2 ). 7th term = ( 7^2 = 49 ).",
      difficulty: "easy",
    },
    {
      id: 7,
      question:
        "If the 3rd term of an HP is 1/7 and the 5th term is 1/11, find the 8th term.",
      options: ["A) 1/15", "B) 1/16", "C) 1/17", "D) 1/18"],
      answer: "C",
      explanation:
        "Convert HP to AP: 3rd term of AP = 7, 5th term = 11. AP: a + 2d = 7, a + 4d = 11 → d=2, a=3. 8th term of AP = 3 + 7×2 = 17 → HP term = 1/17.",
      difficulty: "hard",
    },
    {
      id: 8,
      question: "Find the sum of the series: 1×2 + 2×3 + 3×4 + ... + 10×11",
      options: ["A) 385", "B) 440", "C) 495", "D) 550"],
      answer: "B",
      explanation:
        "Sum = ( sum n(n+1) = sum n^2 + sum n ). Using formulas: ( \frac{10×11×21}{6} + \frac{10×11}{2} = 440 ).",
      difficulty: "medium",
    },
    {
      id: 9,
      question: "What is the 10th term of the series: 3, 8, 15, 24, ...?",
      options: ["A) 99", "B) 120", "C) 143", "D) 168"],
      answer: "B",
      explanation:
        "Pattern: ( n^2 - 1 ) for even n, ( n^2 ) for odd n. 10th term (even) = ( 10^2 - 1 = 99 ).",
      difficulty: "hard",
    },
    {
      id: 10,
      question:
        "The sum of three numbers in AP is 27, and their product is 504. Find the largest number.",
      options: ["A) 9", "B) 12", "C) 14", "D) 16"],
      answer: "C",
      explanation:
        "Let terms be a-d, a, a+d. Sum: 3a=27 → a=9. Product: (9-d)(9)(9+d)=504 → d=5. Largest term = 9 + 5 = 14.",
      difficulty: "medium",
    },
    {
      id: 11,
      question: "Find the sum of all even numbers between 1 and 100.",
      options: ["A) 2450", "B) 2500", "C) 2550", "D) 2600"],
      answer: "C",
      explanation:
        "AP: 2, 4, 6,..., 98. n=49. Sum = ( \frac{49}{2}(2 + 98) = 2550 ).",
      difficulty: "easy",
    },
    {
      id: 12,
      question:
        "The 4th term of a GP is 8 times the 1st term. If the 2nd term is 12, find the 5th term.",
      options: ["A) 96", "B) 192", "C) 384", "D) 768"],
      answer: "B",
      explanation:
        "Given ( ar^3 = 8a ) → r=2. 2nd term ( ar=12 ) → a=6. 5th term = ( 6×2^4 = 96 ).",
      difficulty: "hard",
    },
    {
      id: 13,
      question:
        "Find the sum of the series: ( \frac{1}{2} + \frac{1}{6} + \frac{1}{12} + dots + \frac{1}{90} )",
      options: ["A) 9/10", "B) 10/11", "C) 11/12", "D) 12/13"],
      answer: "A",
      explanation:
        "Series = ( sum \frac{1}{n(n+1)} = sum left( \frac{1}{n} - \frac{1}{n+1} \right) ). Telescoping sum = ( 1 - \frac{1}{10} = \frac{9}{10} ).",
      difficulty: "medium",
    },
    {
      id: 14,
      question:
        "If the AM of two numbers is 25 and their GM is 15, find their HM.",
      options: ["A) 9", "B) 12", "C) 15", "D) 18"],
      answer: "A",
      explanation:
        "AM = ( \frac{x+y}{2} = 25 ), GM = ( sqrt{xy} = 15 ). HM = ( \frac{2xy}{x+y} = \frac{450}{50} = 9 ).",
      difficulty: "hard",
    },
    {
      id: 15,
      question: "Find the missing term in the series: 5, 16, 51, 158, ?",
      options: ["A) 475", "B) 481", "C) 483", "D) 485"],
      answer: "B",
      explanation:
        "Pattern: ( a_n = 3 \times a_{n-1} + 1 ). Missing term = 3×158 + 1 = 475.",
      difficulty: "hard",
    },
  ],

  set4: [
    {
      id: 1,
      question:
        "The sum of the first 20 terms of an AP is 400, and the sum of the first 40 terms is 1600. What is the sum of the first 60 terms?",
      options: ["A) 3200", "B) 3600", "C) 4000", "D) 4400"],
      answer: "B",
      explanation:
        "Using the formula for sum of AP: S₂₀ = 10(2a + 19d) = 400 and S₄₀ = 20(2a + 39d) = 1600. Solve to get a = -5, d = 2. Then S₆₀ = 30(2a + 59d) = 3600.",
      difficulty: "hard",
    },
    {
      id: 2,
      question:
        "If the 5th term of a GP is 81 and the 8th term is 2187, what is the sum of the first 6 terms?",
      options: ["A) 364", "B) 486", "C) 728", "D) 972"],
      answer: "A",
      explanation:
        "ar⁴ = 81 and ar⁷ = 2187 → r³ = 27 → r = 3, a = 1. Sum = 1(3⁶ - 1)/(3 - 1) = 728/2 = 364.",
      difficulty: "medium",
    },
    {
      id: 3,
      question:
        "The sum of three numbers in GP is 56, and their product is 512. Find the largest number.",
      options: ["A) 8", "B) 16", "C) 32", "D) 64"],
      answer: "C",
      explanation:
        "Let terms be a/r, a, ar. Product: a³ = 512 → a = 8. Sum: 8/r + 8 + 8r = 56 → r = 2 or 0.5. Largest term = 8 × 2² = 32.",
      difficulty: "hard",
    },
    {
      id: 4,
      question:
        "Find the sum to infinity of the series: 1 + 2x + 3x² + 4x³ + ... (where |x| < 1)",
      options: ["A) 1/(1-x)", "B) 1/(1-x)²", "C) 1/(1+x)", "D) 1/(1+x)²"],
      answer: "B",
      explanation:
        "This is the derivative of the standard infinite GP sum. d/dx(1/(1-x)) = 1/(1-x)².",
      difficulty: "hard",
    },
    {
      id: 5,
      question:
        "The AM of two numbers is 34 and their HM is 16. Find their GM.",
      options: ["A) 24", "B) 26", "C) 28", "D) 32"],
      answer: "A",
      explanation:
        "Using the relationship AM × HM = GM² → 34 × 16 = GM² → GM = √544 ≈ 23.32 (nearest option: 24).",
      difficulty: "hard",
    },
    {
      id: 6,
      question: "Find the sum of the series: 1² + 3² + 5² + ... + 19²",
      options: ["A) 1330", "B) 1460", "C) 1610", "D) 1820"],
      answer: "A",
      explanation:
        "Sum of first n odd squares = n(2n+1)(2n-1)/3. Here n=10 → 10×21×19/3 = 1330.",
      difficulty: "medium",
    },
    {
      id: 7,
      question:
        "If the sum of n terms of an AP is 3n² + 5n, find its 15th term.",
      options: ["A) 86", "B) 92", "C) 98", "D) 104"],
      answer: "B",
      explanation: "aₙ = Sₙ - Sₙ₋₁ = 6n + 2. So a₁₅ = 6×15 + 2 = 92.",
      difficulty: "medium",
    },
    {
      id: 8,
      question:
        "The sum of the first 10 terms of an AP is equal to the sum of the first 5 terms of the same AP. If the first term is 5, find the common difference.",
      options: ["A) -2", "B) -1", "C) 1", "D) 2"],
      answer: "A",
      explanation:
        "5/2[2×5 + 9d] = 5/2[2×5 + 4d] → 10 + 9d = 10 + 4d → d = -2.",
      difficulty: "hard",
    },
    {
      id: 9,
      question:
        "Find the sum of the series: 1 + (1+2) + (1+2+3) + ... + (1+2+...+20)",
      options: ["A) 1540", "B) 1610", "C) 1720", "D) 1820"],
      answer: "A",
      explanation:
        "Sum = Σ[n(n+1)/2] = ½[Σn² + Σn] = ½[20×21×41/6 + 20×21/2] = 1540.",
      difficulty: "hard",
    },
    {
      id: 10,
      question:
        "The 7th term of an HP is 1/10 and the 12th term is 1/25. Find the 20th term.",
      options: ["A) 1/41", "B) 1/42", "C) 1/43", "D) 1/44"],
      answer: "D",
      explanation:
        "Convert to AP: 7th term = 10, 12th term = 25. AP: a + 6d = 10, a + 11d = 25 → d = 3, a = -8. 20th term of AP = -8 + 19×3 = 49 → HP term = 1/49.",
      difficulty: "hard",
    },
    {
      id: 11,
      question: "Find the sum of all three-digit numbers divisible by 7.",
      options: ["A) 70336", "B) 71064", "C) 72128", "D) 73290"],
      answer: "A",
      explanation:
        "AP: 105, 112,..., 994. n = (994-105)/7 + 1 = 128. Sum = 128/2(105+994) = 70336.",
      difficulty: "medium",
    },
    {
      id: 12,
      question:
        "The product of three numbers in GP is 216 and their sum is 19. Find the middle term.",
      options: ["A) 3", "B) 6", "C) 9", "D) 12"],
      answer: "B",
      explanation:
        "Let terms be a/r, a, ar. Product: a³ = 216 → a = 6. Sum: 6/r + 6 + 6r = 19 → r = 2 or 0.5. Middle term is always 6.",
      difficulty: "medium",
    },
    {
      id: 13,
      question: "Find the sum of the series: 1×3 + 2×4 + 3×5 + ... + 10×12",
      options: ["A) 570", "B) 610", "C) 650", "D) 690"],
      answer: "B",
      explanation:
        "Sum = Σn(n+2) = Σn² + 2Σn = 10×11×21/6 + 2×10×11/2 = 385 + 110 = 495.",
      difficulty: "medium",
    },
    {
      id: 14,
      question:
        "If the sum of n terms of two APs are in ratio (3n+5):(5n-3), find the ratio of their 7th terms.",
      options: ["A) 5:7", "B) 7:9", "C) 9:11", "D) 11:13"],
      answer: "D",
      explanation:
        "For ratio of mth terms, use (2m-1) in place of n: (3×13+5)/(5×13-3) = 44/62 = 22/31.",
      difficulty: "hard",
    },
    {
      id: 15,
      question:
        "The sum of an infinite GP is 4 and the sum of their cubes is 192. Find the common ratio.",
      options: ["A) 1/2", "B) 1/3", "C) 1/4", "D) 1/5"],
      answer: "A",
      explanation: "a/(1-r) = 4 and a³/(1-r³) = 192. Solve to get r = 1/2.",
      difficulty: "hard",
    },
  ],

  set5: [
    {
      id: 1,
      question:
        "A bacteria doubles every 3 hours. Starting with 50 bacteria, how many will there be after 24 hours?",
      options: ["A) 12,800", "B) 25,600", "C) 51,200", "D) 102,400"],
      answer: "A",
      explanation:
        "GP where terms double (r=2). Number of periods = 24/3 = 8. Final count = 50 × 2⁸ = 12,800.",
      difficulty: "medium",
      tags: ["real-world", "GP"],
    },
    {
      id: 2,
      question:
        "A ball is dropped from 128m height. It rebounds 3/4 of its previous height each time. What's the total distance traveled when it hits the ground the 4th time?",
      options: ["A) 476m", "B) 504m", "C) 532m", "D) 560m"],
      answer: "C",
      explanation:
        "Initial drop = 128m. Rebounds: 128×(3/4) up+down for 3 hits. Sum = 128 + 2×[96 + 72 + 54] = 532m.",
      difficulty: "hard",
      tags: ["real-world", "GP"],
    },
    {
      id: 3,
      question:
        "In a savings plan, you deposit ₹1000 in Jan, ₹2000 in Feb, ₹3000 in Mar, and so on for 12 months. What's the total savings?",
      options: ["A) ₹72,000", "B) ₹78,000", "C) ₹84,000", "D) ₹90,000"],
      answer: "B",
      explanation:
        "AP series: 1000, 2000,..., 12000. Sum = n/2(first+last) = 12/2(1000+12000) = ₹78,000.",
      difficulty: "easy",
      tags: ["real-world", "AP"],
    },
    {
      id: 4,
      question:
        "A clock strikes once at 1:00, twice at 2:00, etc. How many strikes in 24 hours?",
      options: ["A) 78", "B) 156", "C) 180", "D) 196"],
      answer: "B",
      explanation:
        "Two 12-hour cycles. Each cycle sum = 1+2+...+12 = 78. Total = 2×78 = 156.",
      difficulty: "medium",
      tags: ["logic", "AP"],
    },
    {
      id: 5,
      question:
        "A tree grows 20cm in Year 1, 18cm in Year 2, 16.2cm in Year 3, and so on. What's its maximum possible growth?",
      options: ["A) 1m", "B) 1.5m", "C) 2m", "D) Infinite"],
      answer: "C",
      explanation:
        "Infinite GP with a=20, r=0.9. Max growth = a/(1-r) = 20/(1-0.9) = 200cm = 2m.",
      difficulty: "hard",
      tags: ["real-world", "GP"],
    },
    {
      id: 6,
      question:
        "A car depreciates 15% annually. If its current value is ₹8L, what will be its value after 3 years?",
      options: ["A) ₹4.91L", "B) ₹5.12L", "C) ₹5.43L", "D) ₹5.67L"],
      answer: "A",
      explanation: "GP with r=0.85. Value = 8 × (0.85)³ ≈ ₹4.91L.",
      difficulty: "medium",
      tags: ["real-world", "GP"],
    },
    {
      id: 7,
      question:
        "A staircase has steps forming an AP: 1st step 20 bricks, 2nd 19 bricks, etc. If total bricks used is 210, how many steps are there?",
      options: ["A) 10", "B) 12", "C) 15", "D) 20"],
      answer: "D",
      explanation:
        "AP: 20, 19, 18,... Sum = n/2[2×20 + (n-1)(-1)] = 210 → n² - 41n + 420 = 0 → n=20.",
      difficulty: "hard",
      tags: ["logic", "AP"],
    },
    {
      id: 8,
      question:
        "A worker gets paid ₹500/day for 10 days, ₹600/day for next 10 days, and so on up to ₹1000/day. What's total earnings?",
      options: ["A) ₹37,500", "B) ₹40,000", "C) ₹42,500", "D) ₹45,000"],
      answer: "B",
      explanation:
        "AP in chunks: 10×(500+600+...+1000) = 10×[6/2(500+1000)] = ₹40,000.",
      difficulty: "medium",
      tags: ["real-world", "AP"],
    },
    {
      id: 9,
      question:
        "A fractal pattern repeats such that each iteration has 3 times the elements of the previous one. How many elements in 5th iteration if 1st had 2?",
      options: ["A) 162", "B) 243", "C) 486", "D) 729"],
      answer: "A",
      explanation: "GP with a=2, r=3. 5th term = 2 × 3⁴ = 162.",
      difficulty: "easy",
      tags: ["logic", "GP"],
    },
    {
      id: 10,
      question:
        "A phone network spreads such that each user recruits 2 new users every month. Starting with 1 user, how many total users after 6 months?",
      options: ["A) 63", "B) 127", "C) 255", "D) 511"],
      answer: "B",
      explanation: "GP where sum = (2ⁿ - 1). For n=6 months: 2⁷ - 1 = 127.",
      difficulty: "medium",
      tags: ["real-world", "GP"],
    },
    {
      id: 11,
      question:
        "A book has pages numbered from 1. If digits used total 642, how many pages are there?",
      options: ["A) 240", "B) 250", "C) 260", "D) 270"],
      answer: "A",
      explanation:
        "Pages 1-9: 9 digits. 10-99: 180 digits. Remaining digits = 642-189 = 453 → 453/3 = 151 pages (100-250). Total = 250 pages.",
      difficulty: "hard",
      tags: ["logic", "digits"],
    },
    {
      id: 12,
      question:
        "A pyramid has 1 block in top layer, 4 in next, 9 in next, etc. How many blocks for 10 layers?",
      options: ["A) 285", "B) 385", "C) 485", "D) 585"],
      answer: "B",
      explanation: "Sum of squares: n(n+1)(2n+1)/6 = 10×11×21/6 = 385.",
      difficulty: "medium",
      tags: ["real-world", "special series"],
    },
    {
      id: 13,
      question:
        "A radio station gives prize money in AP: ₹1000, ₹2000, ₹3000, etc. If total prizes given is ₹55,000, how many winners?",
      options: ["A) 10", "B) 11", "C) 12", "D) 13"],
      answer: "A",
      explanation:
        "Sum = n/2[2000 + (n-1)1000] = 55000 → n² + n - 110 = 0 → n=10.",
      difficulty: "easy",
      tags: ["real-world", "AP"],
    },
    {
      id: 14,
      question:
        "A Fibonacci sequence starts with 3, 5. What's the first term to exceed 1000?",
      options: ["A) 13th term", "B) 14th term", "C) 15th term", "D) 16th term"],
      answer: "D",
      explanation:
        "Sequence: 3,5,8,13,21,34,55,89,144,233,377,610,987,1597. 16th term = 1597 > 1000.",
      difficulty: "hard",
      tags: ["logic", "Fibonacci"],
    },
    {
      id: 15,
      question:
        "A town's population grows as 10% the first year, 20% the next, 30% the next, etc. If initial population is 10,000, what's population after 5 years?",
      options: ["A) 18,744", "B) 19,872", "C) 20,736", "D) 21,384"],
      answer: "B",
      explanation:
        "Growth multipliers: 1.1 × 1.2 × 1.3 × 1.4 × 1.5 ≈ 3.6036. Final population = 10,000 × 1.1 × 1.2 × 1.3 × 1.4 × 1.5 ≈ 19,872.",
      difficulty: "hard",
      tags: ["real-world", "variable rates"],
    },
  ],
};
