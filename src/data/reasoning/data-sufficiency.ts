export const dataSufficiency = {
  set1: [
    {
      id: 1,
      question:
        "What is the value of x? (1) x is a prime number. (2) x is even.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "C",
      explanation:
        "The only even prime number is 2. Both statements together are needed.",
      difficulty: "easy",
    },
    {
      id: 2,
      question:
        "Is y divisible by 6? (1) y is divisible by 3. (2) y is divisible by 2.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "C",
      explanation:
        "A number is divisible by 6 if it is divisible by both 2 and 3.",
      difficulty: "easy",
    },
    {
      id: 3,
      question:
        "What is the area of rectangle ABCD? (1) Length = 10 cm. (2) Diagonal = 12 cm.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "C",
      explanation:
        "Using Pythagoras' theorem, width can be found if length and diagonal are known.",
      difficulty: "medium",
    },
    {
      id: 4,
      question:
        "If p and q are integers, is p + q odd? (1) p is odd. (2) q is even.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "C",
      explanation: "Odd + Even = Odd. Both statements are required.",
      difficulty: "medium",
    },
    {
      id: 5,
      question: "What is the value of z? (1) z² = 16. (2) z > 0.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "C",
      explanation: "z could be ±4 from (1), but (2) confirms z = 4.",
      difficulty: "medium",
    },
    {
      id: 6,
      question:
        "Is triangle ABC equilateral? (1) All angles are 60°. (2) AB = BC = CA.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Either statement alone is sufficient.",
      ],
      answer: "D",
      explanation:
        "Either equal angles or equal sides prove an equilateral triangle.",
      difficulty: "hard",
    },
    {
      id: 7,
      question:
        "What is the profit percentage? (1) Cost price = ₹500. (2) Selling price = ₹600.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "C",
      explanation:
        "Profit % = [(SP - CP)/CP] × 100. Both statements are needed.",
      difficulty: "hard",
    },
    {
      id: 8,
      question: "Is m > n? (1) m² > n². (2) m - n > 0.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "B",
      explanation:
        "(2) directly states m > n. (1) is insufficient (e.g., m = -3, n = 2).",
      difficulty: "hard",
    },
    {
      id: 9,
      question:
        "What is the average of a, b, and c? (1) a + b = 10. (2) b + c = 14.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are insufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "C",
      explanation:
        "We need the sum a + b + c. With only two equations, it's unsolvable.",
      difficulty: "medium",
    },
    {
      id: 10,
      question: "Is x a positive number? (1) x³ > 0. (2) |x| = x.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Either statement alone is sufficient.",
      ],
      answer: "D",
      explanation:
        "(1) x³ > 0 ⇒ x > 0. (2) |x| = x ⇒ x ≥ 0, but combined with (1), x > 0.",
      difficulty: "medium",
    },
    {
      id: 11,
      question:
        "What is the remainder when N is divided by 5? (1) N leaves remainder 1 when divided by 2. (2) N leaves remainder 2 when divided by 3.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "D",
      explanation:
        "Multiple values (e.g., 7, 17) satisfy both but give different remainders when divided by 5.",
      difficulty: "hard",
    },
    {
      id: 12,
      question:
        "How many students are in the class? (1) 40% are girls. (2) There are 18 boys.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "C",
      explanation: "60% boys = 18 ⇒ Total = 18 / 0.6 = 30.",
      difficulty: "easy",
    },
    {
      id: 13,
      question:
        "Is k a multiple of 12? (1) k is a multiple of 4. (2) k is a multiple of 3.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "C",
      explanation:
        "k must be divisible by both 3 and 4 (i.e., 12) to be a multiple of 12.",
      difficulty: "easy",
    },
    {
      id: 14,
      question:
        "What is the value of (a + b)? (1) a - b = 8. (2) a² - b² = 64.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "C",
      explanation:
        "(2) ⇒ (a + b)(a - b) = 64. With (1), (a + b)(8) = 64 ⇒ a + b = 8.",
      difficulty: "medium",
    },
    {
      id: 15,
      question:
        "Is P a prime number? (1) P > 100. (2) P has no factors other than 1 and itself.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "B",
      explanation: "(2) defines a prime number. (1) is irrelevant.",
      difficulty: "easy",
    },
  ],
  set2: [
    {
      id: 1,
      question: "What is the value of x + y? (1) x = 5. (2) y = 7.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "C",
      explanation: "Both statements are needed to find x + y = 5 + 7 = 12.",
      difficulty: "easy",
    },
    {
      id: 2,
      question:
        "Is the integer n odd? (1) n is divisible by 3. (2) n is not divisible by 2.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "B",
      explanation:
        "Odd numbers are not divisible by 2. (1) alone is insufficient (e.g., 6 vs 9).",
      difficulty: "easy",
    },
    {
      id: 3,
      question:
        "What is the perimeter of square S? (1) The area of S is 16 cm². (2) The diagonal of S is 4√2 cm.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Either statement alone is sufficient.",
      ],
      answer: "D",
      explanation:
        "From (1): Side = 4 cm ⇒ Perimeter = 16 cm. From (2): Diagonal = side√2 ⇒ side = 4 cm.",
      difficulty: "medium",
    },
    {
      id: 4,
      question: "Is a > b? (1) a² > b². (2) a - b > 0.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "B",
      explanation:
        "(2) directly states a > b. (1) is insufficient (e.g., a = -3, b = 2).",
      difficulty: "medium",
    },
    {
      id: 5,
      question: "What is the value of z? (1) 2z + 3 = 7. (2) 3z - 4 = 5.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Either statement alone is sufficient.",
      ],
      answer: "D",
      explanation:
        "(1) ⇒ z = 2. (2) ⇒ z = 3. Conflict implies data inconsistency, but per DS rules, either alone is sufficient.",
      difficulty: "easy",
    },
    {
      id: 6,
      question:
        "Is triangle ABC right-angled? (1) ∠A + ∠B = 90°. (2) AB² + BC² = AC².",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Either statement alone is sufficient.",
      ],
      answer: "D",
      explanation: "(1) ⇒ ∠C = 90°. (2) implies Pythagoras' theorem holds.",
      difficulty: "hard",
    },
    {
      id: 7,
      question:
        "What is the cost price of the article? (1) Selling price = ₹120. (2) Profit = 20%.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "C",
      explanation: "CP = SP / (1 + Profit%) ⇒ CP = 120 / 1.2 = ₹100.",
      difficulty: "medium",
    },
    {
      id: 8,
      question: "Is x a prime number? (1) x < 10. (2) x is odd.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "D",
      explanation:
        "x could be 1, 3, 5, 7, 9. 1 and 9 are not primes. Both statements fail to confirm.",
      difficulty: "hard",
    },
    {
      id: 9,
      question:
        "What is the average of p, q, r? (1) p + q = 12. (2) q + r = 18.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are insufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "C",
      explanation:
        "We need p + q + r. Two equations cannot determine all three variables.",
      difficulty: "medium",
    },
    {
      id: 10,
      question: "Is y > 0? (1) y² - 4y + 4 = 0. (2) y³ > 0.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Either statement alone is sufficient.",
      ],
      answer: "B",
      explanation:
        "(1) ⇒ y = 2 (>0). (2) ⇒ y > 0 (since cubes of negatives are negative).",
      difficulty: "hard",
    },
    {
      id: 11,
      question:
        "What is the units digit of 3ⁿ? (1) n is a multiple of 4. (2) n is even.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "A",
      explanation:
        "Cyclicity of 3's units digit is 4 (3, 9, 7, 1). (1) confirms units digit = 1. (2) is insufficient (e.g., n=2 ⇒ 9, n=4 ⇒ 1).",
      difficulty: "hard",
    },
    {
      id: 12,
      question:
        "How many days did it take to complete the work? (1) A and B together take 6 days. (2) A alone takes 10 days.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "C",
      explanation:
        "Combined work rate: 1/A + 1/B = 1/6. With (2), B's time can be found.",
      difficulty: "medium",
    },
    {
      id: 13,
      question:
        "Is m divisible by 12? (1) m is divisible by 6. (2) m is divisible by 4.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "C",
      explanation: "m must be divisible by LCM of 6 and 4, which is 12.",
      difficulty: "easy",
    },
    {
      id: 14,
      question:
        "What is the value of (x - y)? (1) x + y = 10. (2) x² - y² = 40.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "C",
      explanation:
        "(2) ⇒ (x - y)(x + y) = 40. With (1), (x - y)(10) = 40 ⇒ x - y = 4.",
      difficulty: "medium",
    },
    {
      id: 15,
      question:
        "Is P a multiple of 15? (1) P is a multiple of 5. (2) P is a multiple of 3.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "C",
      explanation:
        "P must be divisible by both 3 and 5 (i.e., 15) to be a multiple of 15.",
      difficulty: "easy",
    },
  ],
  set3: [
    {
      id: 1,
      question: "What is the value of x? (1) 3x + 2 = 14. (2) 2x - 5 = 3.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Either statement alone is sufficient.",
      ],
      answer: "D",
      explanation:
        "(1) ⇒ x = 4. (2) ⇒ x = 4. Both independently give the same value.",
      difficulty: "easy",
    },
    {
      id: 2,
      question: "Is y a positive integer? (1) y² = 16. (2) y > 0.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "C",
      explanation: "(1) ⇒ y = ±4. (2) narrows it to y = 4 (positive integer).",
      difficulty: "easy",
    },
    {
      id: 3,
      question:
        "What is the area of circle C? (1) Diameter = 10 cm. (2) Circumference = 10π cm.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Either statement alone is sufficient.",
      ],
      answer: "D",
      explanation:
        "(1) ⇒ Radius = 5 ⇒ Area = 25π. (2) ⇒ 2πr = 10π ⇒ r = 5 ⇒ Area = 25π.",
      difficulty: "medium",
    },
    {
      id: 4,
      question: "Is a + b > c? (1) a > c/2. (2) b > c/2.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "C",
      explanation: "Adding (1) and (2): a + b > c/2 + c/2 ⇒ a + b > c.",
      difficulty: "medium",
    },
    {
      id: 5,
      question: "What is the ratio of A:B? (1) A = 2B. (2) B = A/2.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Either statement alone is sufficient.",
      ],
      answer: "D",
      explanation:
        "(1) ⇒ A:B = 2:1. (2) ⇒ A:B = 2:1. Both give the same ratio.",
      difficulty: "easy",
    },
    {
      id: 6,
      question:
        "Is quadrilateral ABCD a square? (1) All sides are equal. (2) One angle is 90°.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "C",
      explanation:
        "A rhombus with one right angle is a square. Both statements are needed.",
      difficulty: "hard",
    },
    {
      id: 7,
      question: "What is the loss percentage? (1) CP = ₹500. (2) SP = ₹400.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "C",
      explanation:
        "Loss % = [(CP - SP)/CP] × 100. Both statements are required.",
      difficulty: "medium",
    },
    {
      id: 8,
      question:
        "Is k a multiple of 30? (1) k is a multiple of 6. (2) k is a multiple of 5.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "C",
      explanation: "k must be divisible by LCM of 6 and 5 (i.e., 30).",
      difficulty: "medium",
    },
    {
      id: 9,
      question: "What is the value of |x|? (1) x² = 25. (2) x ≤ 0.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Either statement alone is sufficient.",
      ],
      answer: "A",
      explanation: "(1) ⇒ |x| = 5. (2) alone is insufficient (no value).",
      difficulty: "medium",
    },
    {
      id: 10,
      question: "Is triangle ABC isosceles? (1) ∠B = ∠C. (2) AB = AC.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Either statement alone is sufficient.",
      ],
      answer: "D",
      explanation: "Equal angles or sides define an isosceles triangle.",
      difficulty: "hard",
    },
    {
      id: 11,
      question: "What is the units digit of 7ⁿ? (1) n ≡ 1 mod 4. (2) n is odd.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "A",
      explanation:
        "Cyclicity of 7's units digit is 4 (7, 9, 3, 1). (1) ⇒ units digit = 7. (2) is insufficient (n=1 ⇒ 7, n=3 ⇒ 3).",
      difficulty: "hard",
    },
    {
      id: 12,
      question:
        "How many boys are in the class? (1) Girls:Boys = 2:3. (2) There are 20 girls.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "C",
      explanation: "With (1) and (2), Boys = (3/2) × 20 = 30.",
      difficulty: "easy",
    },
    {
      id: 13,
      question: "Is p > q? (1) p² > q². (2) p - q > 0.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "B",
      explanation:
        "(2) directly states p > q. (1) is insufficient (e.g., p = -3, q = 2).",
      difficulty: "medium",
    },
    {
      id: 14,
      question:
        "What is the average of x, y, z? (1) x + y = 10. (2) y + z = 14.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are insufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "C",
      explanation:
        "We need x + y + z. Two equations cannot determine all three variables.",
      difficulty: "medium",
    },
    {
      id: 15,
      question: "Is the integer k prime? (1) k < 10. (2) k is odd.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "D",
      explanation:
        "k could be 1, 3, 5, 7, 9. 1 and 9 are not primes. Both statements fail to confirm.",
      difficulty: "hard",
    },
  ],
  set4: [
    {
      id: 1,
      question: "What is the value of 2x + y? (1) x = 3. (2) y = 4.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "C",
      explanation: "Require both values: 2(3) + 4 = 10.",
      difficulty: "easy",
    },
    {
      id: 2,
      question:
        "Is n divisible by 12? (1) n is divisible by 6. (2) n is divisible by 4.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "C",
      explanation:
        "LCM of 6 and 4 is 12. Both needed to confirm divisibility by 12.",
      difficulty: "easy",
    },
    {
      id: 3,
      question:
        "What is the radius of the circle? (1) Area = 25π. (2) Circumference = 10π.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Either statement alone is sufficient.",
      ],
      answer: "D",
      explanation: "(1) ⇒ πr² = 25π ⇒ r = 5. (2) ⇒ 2πr = 10π ⇒ r = 5.",
      difficulty: "medium",
    },
    {
      id: 4,
      question: "Is a > b? (1) a² > b². (2) a - b = 1.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "B",
      explanation:
        "(2) directly states a > b. (1) is insufficient (e.g., a = -3, b = 2).",
      difficulty: "medium",
    },
    {
      id: 5,
      question: "What is the profit amount? (1) CP = ₹200. (2) Profit % = 25.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "C",
      explanation: "Profit = (Profit% × CP)/100 = (25 × 200)/100 = ₹50.",
      difficulty: "easy",
    },
    {
      id: 6,
      question:
        "Is quadrilateral PQRS a rectangle? (1) All angles are 90°. (2) Opposite sides are equal.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "A",
      explanation:
        "(1) alone suffices (a quadrilateral with four right angles is a rectangle). (2) could describe a parallelogram.",
      difficulty: "hard",
    },
    {
      id: 7,
      question: "What is the value of x³? (1) x = 2. (2) x² = 4.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Either statement alone is sufficient.",
      ],
      answer: "A",
      explanation: "(1) ⇒ x³ = 8. (2) ⇒ x = ±2 ⇒ x³ = ±8 (not unique).",
      difficulty: "medium",
    },
    {
      id: 8,
      question: "Is m + n odd? (1) m is odd. (2) n is even.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "C",
      explanation: "Odd + Even = Odd. Both statements needed.",
      difficulty: "easy",
    },
    {
      id: 9,
      question:
        "What is the average speed for the entire trip? (1) Distance = 100 km each way. (2) Going speed = 50 km/h, return speed = 25 km/h.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "C",
      explanation:
        "Average speed = Total Distance/Total Time = 200/(100/50 + 100/25) = 200/6 ≈ 33.33 km/h.",
      difficulty: "hard",
    },
    {
      id: 10,
      question: "Is p a prime number? (1) p > 10. (2) p < 15.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "C",
      explanation: "Possible primes: 11, 13. Both needed to narrow the range.",
      difficulty: "medium",
    },
    {
      id: 11,
      question:
        "What is the remainder when N is divided by 5? (1) N ≡ 2 mod 3. (2) N ≡ 1 mod 5.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "B",
      explanation:
        "(2) directly gives remainder 1 when divided by 5. (1) is irrelevant.",
      difficulty: "hard",
    },
    {
      id: 12,
      question:
        "How many students passed the exam? (1) 60% of the class passed. (2) There are 50 students in the class.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "C",
      explanation:
        "Passed students = 60% of 50 = 30. Both statements required.",
      difficulty: "easy",
    },
    {
      id: 13,
      question: "Is x/y > 1? (1) x > y. (2) y > 0.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "C",
      explanation:
        "(1) alone fails if y is negative. With (2), x > y > 0 ⇒ x/y > 1.",
      difficulty: "medium",
    },
    {
      id: 14,
      question: "What is the value of (a + b)²? (1) a² + b² = 13. (2) ab = 6.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "C",
      explanation: "(a + b)² = a² + b² + 2ab = 13 + 12 = 25. Both needed.",
      difficulty: "hard",
    },
    {
      id: 15,
      question:
        "Is the integer k divisible by 9? (1) k is divisible by 3. (2) k is divisible by 6.",
      options: [
        "A) Statement (1) alone is sufficient.",
        "B) Statement (2) alone is sufficient.",
        "C) Both (1) and (2) together are sufficient.",
        "D) Neither statement is sufficient.",
      ],
      answer: "D",
      explanation:
        "Neither guarantees divisibility by 9 (e.g., 6 and 18 both satisfy (2) but only 18 is divisible by 9).",
      difficulty: "medium",
    },
  ],
  set5: [
    {
      id: 1,
      question: "What is the value of z? (1) z + 3 = 8 (2) z² = 25",
      options: [
        "A) Statement (1) alone is sufficient",
        "B) Statement (2) alone is sufficient",
        "C) Both statements together are sufficient",
        "D) Neither statement is sufficient",
      ],
      answer: "A",
      explanation: "(1) gives z=5 directly. (2) gives z=±5 (not unique).",
      difficulty: "easy",
    },
    {
      id: 2,
      question: "Is triangle ABC equilateral? (1) AB=BC=CA (2) ∠A=∠B=∠C=60°",
      options: [
        "A) Statement (1) alone is sufficient",
        "B) Statement (2) alone is sufficient",
        "C) Both statements together are sufficient",
        "D) Either statement alone is sufficient",
      ],
      answer: "D",
      explanation:
        "Equal sides (1) or equal angles (2) both define equilateral triangles.",
      difficulty: "medium",
    },
    {
      id: 3,
      question: "What is the average of x, y, z? (1) x+y=12 (2) y+z=18",
      options: [
        "A) Statement (1) alone is sufficient",
        "B) Statement (2) alone is sufficient",
        "C) Both statements together are sufficient",
        "D) Neither statement is sufficient",
      ],
      answer: "D",
      explanation:
        "Cannot determine x+y+z from partial sums. Third equation needed.",
      difficulty: "hard",
    },
    {
      id: 4,
      question: "Is p a prime number? (1) p<10 (2) p is odd",
      options: [
        "A) Statement (1) alone is sufficient",
        "B) Statement (2) alone is sufficient",
        "C) Both statements together are sufficient",
        "D) Neither statement is sufficient",
      ],
      answer: "D",
      explanation:
        "Possible numbers: 1,3,5,7,9. 1 and 9 aren't prime. Can't confirm.",
      difficulty: "medium",
    },
    {
      id: 5,
      question:
        "What is 20% of x? (1) 10% of x is 5 (2) x increased by 50% is 30",
      options: [
        "A) Statement (1) alone is sufficient",
        "B) Statement (2) alone is sufficient",
        "C) Both statements together are sufficient",
        "D) Either statement alone is sufficient",
      ],
      answer: "D",
      explanation: "(1) ⇒ x=50 ⇒ 20% is 10. (2) ⇒ 1.5x=30 ⇒ x=20 ⇒ 20% is 4.",
      difficulty: "easy",
    },
    {
      id: 6,
      question:
        "Is quadrilateral ABCD a square? (1) All sides equal (2) One diagonal equals side length×√2",
      options: [
        "A) Statement (1) alone is sufficient",
        "B) Statement (2) alone is sufficient",
        "C) Both statements together are sufficient",
        "D) Neither statement is sufficient",
      ],
      answer: "C",
      explanation:
        "Requires both: equal sides make it rhombus, diagonal condition makes it square.",
      difficulty: "hard",
    },
    {
      id: 7,
      question:
        "What is the units digit of 7ⁿ? (1) n leaves remainder 1 when divided by 4 (2) n is prime",
      options: [
        "A) Statement (1) alone is sufficient",
        "B) Statement (2) alone is sufficient",
        "C) Both statements together are sufficient",
        "D) Neither statement is sufficient",
      ],
      answer: "A",
      explanation:
        "Cyclicity of 7 is 4. (1) gives units digit=7. (2) is insufficient (n=2 ⇒ 9, n=3 ⇒ 3).",
      difficulty: "hard",
    },
    {
      id: 8,
      question: "Is |x-3| < 5? (1) x > -2 (2) x < 7",
      options: [
        "A) Statement (1) alone is sufficient",
        "B) Statement (2) alone is sufficient",
        "C) Both statements together are sufficient",
        "D) Neither statement is sufficient",
      ],
      answer: "C",
      explanation:
        "Inequality becomes -2<x<8. Both (1) and (2) required to confirm.",
      difficulty: "medium",
    },
    {
      id: 9,
      question:
        "What is the ratio of boys to girls? (1) Number of girls is 40% of class (2) There are 12 boys",
      options: [
        "A) Statement (1) alone is sufficient",
        "B) Statement (2) alone is sufficient",
        "C) Both statements together are sufficient",
        "D) Neither statement is sufficient",
      ],
      answer: "A",
      explanation:
        "(1) ⇒ Girls=40%, Boys=60% ⇒ Ratio 3:2. (2) alone is insufficient.",
      difficulty: "easy",
    },
    {
      id: 10,
      question:
        "Is the integer k divisible by 12? (1) k is divisible by 4 (2) k is divisible by 6",
      options: [
        "A) Statement (1) alone is sufficient",
        "B) Statement (2) alone is sufficient",
        "C) Both statements together are sufficient",
        "D) Neither statement is sufficient",
      ],
      answer: "C",
      explanation: "Need both: LCM of 4 and 6 is 12.",
      difficulty: "medium",
    },
    {
      id: 11,
      question:
        "What is the value of the two-digit number xy? (1) x + y = 9 (2) y = 2x",
      options: [
        "A) Statement (1) alone is sufficient",
        "B) Statement (2) alone is sufficient",
        "C) Both statements together are sufficient",
        "D) Neither statement is sufficient",
      ],
      answer: "C",
      explanation: "Solving both: x=3, y=6 ⇒ number is 36.",
      difficulty: "hard",
    },
    {
      id: 12,
      question: "Is a×b > 0? (1) a > 0 (2) b > 0",
      options: [
        "A) Statement (1) alone is sufficient",
        "B) Statement (2) alone is sufficient",
        "C) Both statements together are sufficient",
        "D) Neither statement is sufficient",
      ],
      answer: "C",
      explanation: "Both needed to confirm both are positive (product>0).",
      difficulty: "easy",
    },
    {
      id: 13,
      question:
        "What is the area of rectangle PQRS? (1) Perimeter=20 cm (2) Diagonal=7 cm",
      options: [
        "A) Statement (1) alone is sufficient",
        "B) Statement (2) alone is sufficient",
        "C) Both statements together are sufficient",
        "D) Neither statement is sufficient",
      ],
      answer: "C",
      explanation:
        "Need both to form equations: 2(l+b)=20 and l²+b²=49 ⇒ solve for l×b.",
      difficulty: "hard",
    },
    {
      id: 14,
      question: "Is m + n odd? (1) m is even (2) n is odd",
      options: [
        "A) Statement (1) alone is sufficient",
        "B) Statement (2) alone is sufficient",
        "C) Both statements together are sufficient",
        "D) Neither statement is sufficient",
      ],
      answer: "C",
      explanation: "Even + Odd = Odd. Both statements required.",
      difficulty: "easy",
    },
    {
      id: 15,
      question:
        "What is the value of x³ - y³? (1) x - y = 3 (2) x² + xy + y² = 7",
      options: [
        "A) Statement (1) alone is sufficient",
        "B) Statement (2) alone is sufficient",
        "C) Both statements together are sufficient",
        "D) Neither statement is sufficient",
      ],
      answer: "C",
      explanation: "x³-y³=(x-y)(x²+xy+y²)=3×7=21. Both needed.",
      difficulty: "hard",
    },
  ],
};
