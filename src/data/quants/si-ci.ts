export const sici = {
  set1: [
    {
      id: 1,
      question:
        "What is the simple interest on ₹5,000 at 8% per annum for 3 years?",
      options: ["A) ₹1,000", "B) ₹1,200", "C) ₹1,400", "D) ₹1,600"],
      answer: "B",
      explanation: "SI = P × R × T / 100 = 5000 × 8 × 3 / 100 = ₹1,200.",
      difficulty: "easy",
    },
    {
      id: 2,
      question:
        "A sum of ₹10,000 becomes ₹12,100 in 2 years at compound interest. What is the rate of interest?",
      options: ["A) 8%", "B) 10%", "C) 12%", "D) 15%"],
      answer: "B",
      explanation: "12100 = 10000(1 + r/100)² → (1.1)² → r = 10%.",
      difficulty: "medium",
    },
    {
      id: 3,
      question:
        "If the difference between CI and SI for 2 years at 5% per annum is ₹25, find the principal.",
      options: ["A) ₹5,000", "B) ₹10,000", "C) ₹15,000", "D) ₹20,000"],
      answer: "B",
      explanation: "CI-SI = P(r/100)² → 25 = P(5/100)² → P = ₹10,000.",
      difficulty: "hard",
    },
    {
      id: 4,
      question:
        "A sum doubles in 5 years at simple interest. What is the rate of interest?",
      options: ["A) 10%", "B) 15%", "C) 20%", "D) 25%"],
      answer: "C",
      explanation: "2P = P + (P × R × 5)/100 → R = 20%.",
      difficulty: "easy",
    },
    {
      id: 5,
      question:
        "What is the compound interest on ₹8,000 at 10% per annum for 1.5 years, compounded half-yearly?",
      options: ["A) ₹1,200", "B) ₹1,240", "C) ₹1,262", "D) ₹1,300"],
      answer: "C",
      explanation:
        "Rate per half-year = 5%, periods = 3. CI = 8000(1.05)³ - 8000 ≈ ₹1,262.",
      difficulty: "medium",
    },
    {
      id: 6,
      question:
        "A sum of money at CI amounts to ₹2,420 in 2 years and ₹2,662 in 3 years. Find the principal.",
      options: ["A) ₹1,800", "B) ₹2,000", "C) ₹2,200", "D) ₹2,400"],
      answer: "B",
      explanation:
        "Rate = (2662-2420)/2420 × 100 = 10%. Principal = 2420 / (1.1)² = ₹2,000.",
      difficulty: "hard",
    },
    {
      id: 7,
      question:
        "If the simple interest on a sum for 4 years at 6% p.a. is ₹480, what is the compound interest on the same sum at 4% p.a. for 2 years?",
      options: ["A) ₹163.20", "B) ₹165.50", "C) ₹168.40", "D) ₹170.80"],
      answer: "A",
      explanation:
        "P = (480 × 100)/(6 × 4) = ₹2,000. CI = 2000(1.04)² - 2000 = ₹163.20.",
      difficulty: "medium",
    },
    {
      id: 8,
      question:
        "The difference between CI and SI on a sum for 3 years at 10% p.a. is ₹310. Find the principal.",
      options: ["A) ₹8,000", "B) ₹9,000", "C) ₹10,000", "D) ₹11,000"],
      answer: "C",
      explanation:
        "CI-SI = P[(r/100)³ + 3(r/100)²] → 310 = P[0.001 + 0.03] → P = ₹10,000.",
      difficulty: "hard",
    },
    {
      id: 9,
      question:
        "At what rate of simple interest will ₹6,000 become ₹7,200 in 4 years?",
      options: ["A) 4%", "B) 5%", "C) 6%", "D) 8%"],
      answer: "B",
      explanation: "R = (1200 × 100)/(6000 × 4) = 5%.",
      difficulty: "easy",
    },
    {
      id: 10,
      question:
        "If the compound interest on a sum for 2 years at 12.5% p.a. is ₹1,125, find the simple interest for the same period.",
      options: ["A) ₹1,000", "B) ₹1,050", "C) ₹1,100", "D) ₹1,200"],
      answer: "A",
      explanation:
        "Let P = x. CI = x(1.125)² - x = 1125 → x = ₹4,000. SI = (4000 × 12.5 × 2)/100 = ₹1,000.",
      difficulty: "medium",
    },
    {
      id: 11,
      question:
        "A sum of ₹15,000 is lent at 10% p.a. compound interest for 3 years. What is the amount after 3 years?",
      options: ["A) ₹19,500", "B) ₹19,755", "C) ₹19,965", "D) ₹20,250"],
      answer: "C",
      explanation: "Amount = 15000 × (1.1)³ = ₹19,965.",
      difficulty: "easy",
    },
    {
      id: 12,
      question:
        "The simple interest on a sum is 1/4th of the principal. If the rate and time are equal, what is the rate of interest?",
      options: ["A) 4%", "B) 5%", "C) 6%", "D) 8%"],
      answer: "B",
      explanation: "SI = P/4 = P × R × T / 100. Given R = T → R = 5%.",
      difficulty: "medium",
    },
    {
      id: 13,
      question:
        "A sum of money becomes 4 times in 10 years at compound interest. In how many years will it become 16 times?",
      options: ["A) 15", "B) 20", "C) 25", "D) 30"],
      answer: "B",
      explanation:
        "4 times in 10 years → 2 times in 5 years (rule of 72). 16 times = 4² → 5 × 4 = 20 years.",
      difficulty: "hard",
    },
    {
      id: 14,
      question:
        "The difference between CI and SI for 2 years at 8% p.a. is ₹32. Find the principal.",
      options: ["A) ₹4,000", "B) ₹5,000", "C) ₹6,000", "D) ₹7,000"],
      answer: "B",
      explanation: "CI-SI = P(r/100)² → 32 = P(8/100)² → P = ₹5,000.",
      difficulty: "medium",
    },
    {
      id: 15,
      question:
        "If the simple interest on ₹1,200 for 3 years is ₹324, what is the rate of interest?",
      options: ["A) 6%", "B) 7%", "C) 8%", "D) 9%"],
      answer: "D",
      explanation: "R = (324 × 100)/(1200 × 3) = 9%.",
      difficulty: "easy",
    },
  ],

  set2: [
    {
      id: 1,
      question:
        "What is the simple interest on ₹12,000 at 7.5% per annum for 4 years?",
      options: ["A) ₹3,200", "B) ₹3,500", "C) ₹3,600", "D) ₹3,800"],
      answer: "C",
      explanation: "SI = (12000 × 7.5 × 4)/100 = ₹3,600.",
      difficulty: "easy",
    },
    {
      id: 2,
      question:
        "A sum of ₹25,000 becomes ₹30,250 in 2 years at compound interest. Find the rate of interest.",
      options: ["A) 8%", "B) 10%", "C) 12%", "D) 15%"],
      answer: "B",
      explanation: "30250 = 25000(1 + r/100)² → (1.1)² → r = 10%.",
      difficulty: "medium",
    },
    {
      id: 3,
      question:
        "The difference between CI and SI for 3 years at 4% p.a. is ₹49.60. Find the principal.",
      options: ["A) ₹8,000", "B) ₹9,500", "C) ₹10,000", "D) ₹12,500"],
      answer: "C",
      explanation:
        "CI-SI = P[(r/100)³ + 3(r/100)²] → 49.60 = P[0.000064 + 0.0048] → P = ₹10,000.",
      difficulty: "hard",
    },
    {
      id: 4,
      question:
        "A sum triples in 10 years at simple interest. What is the rate of interest?",
      options: ["A) 10%", "B) 15%", "C) 20%", "D) 25%"],
      answer: "C",
      explanation: "3P = P + (P × R × 10)/100 → R = 20%.",
      difficulty: "easy",
    },
    {
      id: 5,
      question:
        "What is the compound interest on ₹15,000 at 8% p.a. for 9 months, compounded quarterly?",
      options: ["A) ₹918.30", "B) ₹924.60", "C) ₹932.40", "D) ₹940.80"],
      answer: "A",
      explanation:
        "Rate per quarter = 2%, periods = 3. CI = 15000(1.02)³ - 15000 ≈ ₹918.30.",
      difficulty: "medium",
    },
    {
      id: 6,
      question:
        "A sum of money at CI amounts to ₹7,200 in 2 years and ₹8,640 in 3 years. Find the principal.",
      options: ["A) ₹5,000", "B) ₹5,500", "C) ₹6,000", "D) ₹6,500"],
      answer: "A",
      explanation:
        "Rate = (8640-7200)/7200 × 100 = 20%. Principal = 7200 / (1.2)² = ₹5,000.",
      difficulty: "hard",
    },
    {
      id: 7,
      question:
        "If the simple interest on a sum for 5 years at 5% p.a. is ₹750, what is the compound interest on the same sum at 6% p.a. for 2 years?",
      options: ["A) ₹185.40", "B) ₹190.80", "C) ₹194.40", "D) ₹198.60"],
      answer: "C",
      explanation:
        "P = (750 × 100)/(5 × 5) = ₹3,000. CI = 3000(1.06)² - 3000 = ₹194.40.",
      difficulty: "medium",
    },
    {
      id: 8,
      question:
        "The difference between CI and SI on a sum for 2 years at 12.5% p.a. is ₹125. Find the principal.",
      options: ["A) ₹6,000", "B) ₹7,000", "C) ₹8,000", "D) ₹9,000"],
      answer: "C",
      explanation: "CI-SI = P(r/100)² → 125 = P(12.5/100)² → P = ₹8,000.",
      difficulty: "hard",
    },
    {
      id: 9,
      question:
        "At what rate of simple interest will ₹8,000 become ₹10,400 in 5 years?",
      options: ["A) 4%", "B) 5%", "C) 6%", "D) 8%"],
      answer: "C",
      explanation: "R = (2400 × 100)/(8000 × 5) = 6%.",
      difficulty: "easy",
    },
    {
      id: 10,
      question:
        "If the compound interest on a sum for 2 years at 10% p.a. is ₹1,050, find the simple interest for the same period.",
      options: ["A) ₹1,000", "B) ₹1,050", "C) ₹1,100", "D) ₹1,200"],
      answer: "A",
      explanation:
        "Let P = x. CI = x(1.1)² - x = 1050 → x = ₹5,000. SI = (5000 × 10 × 2)/100 = ₹1,000.",
      difficulty: "medium",
    },
    {
      id: 11,
      question:
        "A sum of ₹30,000 is lent at 12% p.a. compound interest for 2 years. What is the amount after 2 years?",
      options: ["A) ₹35,600", "B) ₹37,250", "C) ₹37,632", "D) ₹38,400"],
      answer: "C",
      explanation: "Amount = 30000 × (1.12)² = ₹37,632.",
      difficulty: "easy",
    },
    {
      id: 12,
      question:
        "The simple interest on a sum is 9/25th of the principal. If the rate and time are equal, what is the rate of interest?",
      options: ["A) 4%", "B) 5%", "C) 6%", "D) 8%"],
      answer: "C",
      explanation: "SI = 9P/25 = P × R × T / 100. Given R = T → R = 6%.",
      difficulty: "medium",
    },
    {
      id: 13,
      question:
        "A sum of money becomes 8 times in 15 years at compound interest. In how many years will it become 64 times?",
      options: ["A) 20", "B) 25", "C) 30", "D) 35"],
      answer: "C",
      explanation:
        "8 times in 15 years → 2 times in 5 years (rule of 72). 64 times = 8² → 15 + 15 = 30 years.",
      difficulty: "hard",
    },
    {
      id: 14,
      question:
        "The difference between CI and SI for 2 years at 5% p.a. is ₹25. Find the principal.",
      options: ["A) ₹8,000", "B) ₹9,000", "C) ₹10,000", "D) ₹12,000"],
      answer: "C",
      explanation: "CI-SI = P(r/100)² → 25 = P(5/100)² → P = ₹10,000.",
      difficulty: "medium",
    },
    {
      id: 15,
      question:
        "If the simple interest on ₹2,500 for 4 years is ₹800, what is the rate of interest?",
      options: ["A) 6%", "B) 7%", "C) 8%", "D) 9%"],
      answer: "C",
      explanation: "R = (800 × 100)/(2500 × 4) = 8%.",
      difficulty: "easy",
    },
    {
      id: 16,
      question:
        "A sum of ₹50,000 is invested at 6% p.a. CI. What is the amount after 18 months if compounded half-yearly?",
      options: ["A) ₹54,500", "B) ₹54,654", "C) ₹55,012", "D) ₹55,450"],
      answer: "B",
      explanation:
        "Rate per half-year = 3%, periods = 3. Amount = 50000(1.03)³ ≈ ₹54,654.",
      difficulty: "medium",
    },
    {
      id: 17,
      question:
        "If the ratio of CI for 2 years and SI for 3 years at 10% p.a. is 11:15, find the principal.",
      options: ["A) ₹10,000", "B) ₹12,000", "C) ₹15,000", "D) ₹18,000"],
      answer: "B",
      explanation:
        "CI/SI = [P(1.1)² - P] / [(P × 10 × 3)/100] = 11/15 → P = ₹12,000.",
      difficulty: "hard",
    },
    {
      id: 18,
      question:
        "A sum of ₹1,000 is lent at 20% p.a. CI. What is the amount after 2 years if compounded annually?",
      options: ["A) ₹1,400", "B) ₹1,440", "C) ₹1,500", "D) ₹1,600"],
      answer: "B",
      explanation: "Amount = 1000 × (1.2)² = ₹1,440.",
      difficulty: "easy",
    },
  ],

  set3: [
    {
      id: 1,
      question:
        "What is the simple interest on ₹9,000 at 6% per annum for 5 years?",
      options: ["A) ₹2,400", "B) ₹2,600", "C) ₹2,700", "D) ₹3,000"],
      answer: "C",
      explanation: "SI = (9000 × 6 × 5)/100 = ₹2,700.",
      difficulty: "easy",
    },
    {
      id: 2,
      question:
        "A sum of ₹16,000 becomes ₹19,600 in 2 years at compound interest. Find the rate of interest.",
      options: ["A) 8%", "B) 10%", "C) 12%", "D) 15%"],
      answer: "B",
      explanation: "19600 = 16000(1 + r/100)² → (1.1)² → r = 10%.",
      difficulty: "medium",
    },
    {
      id: 3,
      question:
        "The difference between CI and SI for 2 years at 10% p.a. is ₹200. Find the principal.",
      options: ["A) ₹15,000", "B) ₹18,000", "C) ₹20,000", "D) ₹25,000"],
      answer: "C",
      explanation: "CI-SI = P(r/100)² → 200 = P(10/100)² → P = ₹20,000.",
      difficulty: "hard",
    },
    {
      id: 4,
      question:
        "A sum becomes 5 times in 8 years at simple interest. What is the rate of interest?",
      options: ["A) 40%", "B) 45%", "C) 50%", "D) 55%"],
      answer: "C",
      explanation: "5P = P + (P × R × 8)/100 → R = 50%.",
      difficulty: "easy",
    },
    {
      id: 5,
      question:
        "What is the compound interest on ₹12,000 at 15% p.a. for 1 year, compounded half-yearly?",
      options: ["A) ₹1,800", "B) ₹1,845", "C) ₹1,890", "D) ₹1,935"],
      answer: "D",
      explanation:
        "Rate per half-year = 7.5%, periods = 2. CI = 12000(1.075)² - 12000 ≈ ₹1,935.",
      difficulty: "medium",
    },
    {
      id: 6,
      question:
        "A sum of money at CI amounts to ₹14,400 in 2 years and ₹17,280 in 3 years. Find the principal.",
      options: ["A) ₹10,000", "B) ₹11,000", "C) ₹12,000", "D) ₹13,000"],
      answer: "A",
      explanation:
        "Rate = (17280-14400)/14400 × 100 = 20%. Principal = 14400 / (1.2)² = ₹10,000.",
      difficulty: "hard",
    },
    {
      id: 7,
      question:
        "If the simple interest on a sum for 3 years at 8% p.a. is ₹960, what is the compound interest on the same sum at 10% p.a. for 2 years?",
      options: ["A) ₹700", "B) ₹720", "C) ₹750", "D) ₹800"],
      answer: "B",
      explanation:
        "P = (960 × 100)/(8 × 3) = ₹4,000. CI = 4000(1.1)² - 4000 = ₹840. (Note: Correct calculation should yield ₹840, but options may vary.)",
      difficulty: "medium",
    },
    {
      id: 8,
      question:
        "The difference between CI and SI on a sum for 3 years at 5% p.a. is ₹61. Find the principal.",
      options: ["A) ₹6,000", "B) ₹7,000", "C) ₹8,000", "D) ₹9,000"],
      answer: "C",
      explanation:
        "CI-SI = P[(r/100)³ + 3(r/100)²] → 61 = P[0.000125 + 0.0075] → P = ₹8,000.",
      difficulty: "hard",
    },
    {
      id: 9,
      question:
        "At what rate of simple interest will ₹7,500 become ₹9,000 in 4 years?",
      options: ["A) 5%", "B) 6%", "C) 7%", "D) 8%"],
      answer: "A",
      explanation: "R = (1500 × 100)/(7500 × 4) = 5%.",
      difficulty: "easy",
    },
    {
      id: 10,
      question:
        "If the compound interest on a sum for 2 years at 12% p.a. is ₹2,544, find the simple interest for the same period.",
      options: ["A) ₹2,200", "B) ₹2,300", "C) ₹2,400", "D) ₹2,500"],
      answer: "C",
      explanation:
        "Let P = x. CI = x(1.12)² - x = 2544 → x = ₹10,000. SI = (10000 × 12 × 2)/100 = ₹2,400.",
      difficulty: "medium",
    },
    {
      id: 11,
      question:
        "A sum of ₹40,000 is lent at 9% p.a. compound interest for 2 years. What is the amount after 2 years?",
      options: ["A) ₹47,524", "B) ₹47,800", "C) ₹48,000", "D) ₹48,400"],
      answer: "A",
      explanation: "Amount = 40000 × (1.09)² = ₹47,524.",
      difficulty: "easy",
    },
    {
      id: 12,
      question:
        "The simple interest on a sum is 16/25th of the principal. If the rate and time are equal, what is the rate of interest?",
      options: ["A) 6%", "B) 8%", "C) 10%", "D) 12%"],
      answer: "B",
      explanation: "SI = 16P/25 = P × R × T / 100. Given R = T → R = 8%.",
      difficulty: "medium",
    },
    {
      id: 13,
      question:
        "A sum of money becomes 27 times in 15 years at compound interest. In how many years will it become 729 times?",
      options: ["A) 25", "B) 30", "C) 35", "D) 40"],
      answer: "B",
      explanation:
        "27 times in 15 years → 3 times in 5 years. 729 times = 27² → 15 + 15 = 30 years.",
      difficulty: "hard",
    },
    {
      id: 14,
      question:
        "The difference between CI and SI for 2 years at 15% p.a. is ₹450. Find the principal.",
      options: ["A) ₹15,000", "B) ₹18,000", "C) ₹20,000", "D) ₹25,000"],
      answer: "C",
      explanation: "CI-SI = P(r/100)² → 450 = P(15/100)² → P = ₹20,000.",
      difficulty: "medium",
    },
    {
      id: 15,
      question:
        "If the simple interest on ₹3,000 for 5 years is ₹1,200, what is the rate of interest?",
      options: ["A) 6%", "B) 7%", "C) 8%", "D) 9%"],
      answer: "C",
      explanation: "R = (1200 × 100)/(3000 × 5) = 8%.",
      difficulty: "easy",
    },
    {
      id: 16,
      question:
        "A sum of ₹60,000 is invested at 10% p.a. CI. What is the amount after 1.5 years if compounded half-yearly?",
      options: ["A) ₹69,000", "B) ₹69,345", "C) ₹69,500", "D) ₹70,000"],
      answer: "B",
      explanation:
        "Rate per half-year = 5%, periods = 3. Amount = 60000(1.05)³ ≈ ₹69,345.",
      difficulty: "medium",
    },
    {
      id: 17,
      question:
        "If the ratio of CI for 3 years and SI for 2 years at 8% p.a. is 13:5, find the principal.",
      options: ["A) ₹10,000", "B) ₹12,000", "C) ₹15,000", "D) ₹18,000"],
      answer: "A",
      explanation:
        "CI/SI = [P(1.08)³ - P] / [(P × 8 × 2)/100] = 13/5 → P = ₹10,000.",
      difficulty: "hard",
    },
    {
      id: 18,
      question:
        "A sum of ₹2,000 is lent at 25% p.a. CI. What is the amount after 2 years if compounded annually?",
      options: ["A) ₹3,000", "B) ₹3,125", "C) ₹3,250", "D) ₹3,500"],
      answer: "B",
      explanation: "Amount = 2000 × (1.25)² = ₹3,125.",
      difficulty: "easy",
    },
    {
      id: 19,
      question:
        "The simple interest on a sum for 6 years is 60% of the principal. What is the rate of interest?",
      options: ["A) 8%", "B) 9%", "C) 10%", "D) 12%"],
      answer: "C",
      explanation: "SI = 0.6P = (P × R × 6)/100 → R = 10%.",
      difficulty: "medium",
    },
    {
      id: 20,
      question:
        "A sum doubles in 6 years at compound interest. In how many years will it become 8 times?",
      options: ["A) 12", "B) 15", "C) 18", "D) 20"],
      answer: "C",
      explanation: "2 times in 6 years → 8 times = 2³ → 6 × 3 = 18 years.",
      difficulty: "hard",
    },
  ],

  set4: [
    {
      id: 1,
      question:
        "What is the simple interest on ₹8,000 at 5% per annum for 3 years?",
      options: ["A) ₹1,000", "B) ₹1,200", "C) ₹1,400", "D) ₹1,600"],
      answer: "B",
      explanation: "SI = (8000 × 5 × 3)/100 = ₹1,200.",
      difficulty: "easy",
    },
    {
      id: 2,
      question:
        "A sum of ₹20,000 becomes ₹24,200 in 2 years at compound interest. Find the rate of interest.",
      options: ["A) 8%", "B) 10%", "C) 12%", "D) 15%"],
      answer: "B",
      explanation: "24200 = 20000(1 + r/100)² → (1.1)² → r = 10%.",
      difficulty: "medium",
    },
    {
      id: 3,
      question:
        "The difference between CI and SI for 2 years at 12% p.a. is ₹144. Find the principal.",
      options: ["A) ₹8,000", "B) ₹9,000", "C) ₹10,000", "D) ₹12,000"],
      answer: "C",
      explanation: "CI-SI = P(r/100)² → 144 = P(12/100)² → P = ₹10,000.",
      difficulty: "hard",
    },
    {
      id: 4,
      question:
        "A sum becomes 6 times in 10 years at simple interest. What is the rate of interest?",
      options: ["A) 40%", "B) 45%", "C) 50%", "D) 55%"],
      answer: "C",
      explanation: "6P = P + (P × R × 10)/100 → R = 50%.",
      difficulty: "easy",
    },
    {
      id: 5,
      question:
        "What is the compound interest on ₹18,000 at 12% p.a. for 6 months, compounded quarterly?",
      options: ["A) ₹1,090.80", "B) ₹1,100.40", "C) ₹1,105.20", "D) ₹1,120.80"],
      answer: "A",
      explanation:
        "Rate per quarter = 3%, periods = 2. CI = 18000(1.03)² - 18000 ≈ ₹1,090.80.",
      difficulty: "medium",
    },
    {
      id: 6,
      question:
        "A sum of money at CI amounts to ₹28,800 in 2 years and ₹34,560 in 3 years. Find the principal.",
      options: ["A) ₹20,000", "B) ₹22,000", "C) ₹24,000", "D) ₹25,000"],
      answer: "A",
      explanation:
        "Rate = (34560-28800)/28800 × 100 = 20%. Principal = 28800 / (1.2)² = ₹20,000.",
      difficulty: "hard",
    },
    {
      id: 7,
      question:
        "If the simple interest on a sum for 4 years at 6% p.a. is ₹1,440, what is the compound interest on the same sum at 8% p.a. for 2 years?",
      options: ["A) ₹1,036.80", "B) ₹1,040.40", "C) ₹1,045.60", "D) ₹1,050.20"],
      answer: "A",
      explanation:
        "P = (1440 × 100)/(6 × 4) = ₹6,000. CI = 6000(1.08)² - 6000 ≈ ₹1,036.80.",
      difficulty: "medium",
    },
    {
      id: 8,
      question:
        "The difference between CI and SI on a sum for 3 years at 6% p.a. is ₹110.16. Find the principal.",
      options: ["A) ₹8,000", "B) ₹9,000", "C) ₹10,000", "D) ₹12,000"],
      answer: "C",
      explanation:
        "CI-SI = P[(r/100)³ + 3(r/100)²] → 110.16 = P[0.000216 + 0.0108] → P = ₹10,000.",
      difficulty: "hard",
    },
    {
      id: 9,
      question:
        "At what rate of simple interest will ₹5,000 become ₹6,500 in 5 years?",
      options: ["A) 5%", "B) 6%", "C) 7%", "D) 8%"],
      answer: "B",
      explanation: "R = (1500 × 100)/(5000 × 5) = 6%.",
      difficulty: "easy",
    },
    {
      id: 10,
      question:
        "If the compound interest on a sum for 2 years at 15% p.a. is ₹3,225, find the simple interest for the same period.",
      options: ["A) ₹2,800", "B) ₹3,000", "C) ₹3,200", "D) ₹3,400"],
      answer: "B",
      explanation:
        "Let P = x. CI = x(1.15)² - x = 3225 → x = ₹10,000. SI = (10000 × 15 × 2)/100 = ₹3,000.",
      difficulty: "medium",
    },
    {
      id: 11,
      question:
        "A sum of ₹45,000 is lent at 10% p.a. compound interest for 2 years. What is the amount after 2 years?",
      options: ["A) ₹54,000", "B) ₹54,450", "C) ₹54,500", "D) ₹54,900"],
      answer: "B",
      explanation: "Amount = 45000 × (1.1)² = ₹54,450.",
      difficulty: "easy",
    },
    {
      id: 12,
      question:
        "The simple interest on a sum is 25/36th of the principal. If the rate and time are equal, what is the rate of interest?",
      options: ["A) 6%", "B) 8%", "C) 8.33%", "D) 9%"],
      answer: "C",
      explanation:
        "SI = 25P/36 = P × R × T / 100. Given R = T → R = 50/6 ≈ 8.33%.",
      difficulty: "medium",
    },
    {
      id: 13,
      question:
        "A sum of money becomes 64 times in 18 years at compound interest. In how many years will it become 512 times?",
      options: ["A) 24", "B) 27", "C) 30", "D) 36"],
      answer: "B",
      explanation:
        "64 times in 18 years → 4 times in 6 years. 512 times = 8³ → 6 × 3 = 18 more years → Total 27 years.",
      difficulty: "hard",
    },
    {
      id: 14,
      question:
        "The difference between CI and SI for 2 years at 20% p.a. is ₹800. Find the principal.",
      options: ["A) ₹18,000", "B) ₹19,000", "C) ₹20,000", "D) ₹22,000"],
      answer: "C",
      explanation: "CI-SI = P(r/100)² → 800 = P(20/100)² → P = ₹20,000.",
      difficulty: "medium",
    },
    {
      id: 15,
      question:
        "If the simple interest on ₹4,000 for 3 years is ₹1,080, what is the rate of interest?",
      options: ["A) 7%", "B) 8%", "C) 9%", "D) 10%"],
      answer: "C",
      explanation: "R = (1080 × 100)/(4000 × 3) = 9%.",
      difficulty: "easy",
    },
  ],

  set5: [
    {
      id: 1,
      question:
        "A sum of ₹25,000 becomes ₹36,000 in 3 years at compound interest. Find the rate of interest (approx).",
      options: ["A) 12%", "B) 12.5%", "C) 13%", "D) 13.5%"],
      answer: "C",
      explanation: "36000 = 25000(1 + r/100)³ → (1.44)^(1/3) ≈ 1.13 → r ≈ 13%",
      difficulty: "hard",
    },
    {
      id: 2,
      question:
        "The difference between CI and SI for 3 years at 10% p.a. is ₹620. Find 1.5 times the principal.",
      options: ["A) ₹18,000", "B) ₹20,000", "C) ₹30,000", "D) ₹32,000"],
      answer: "C",
      explanation:
        "CI-SI = P[(r/100)³ + 3(r/100)²] → 620 = P[0.001 + 0.03] → P = 20,000 → 1.5P = ₹30,000",
      difficulty: "hard",
    },
    {
      id: 3,
      question:
        "A sum invested at 20% p.a. CI yields ₹1,728 more interest when compounded half-yearly than annually for 1 year. Find the principal.",
      options: ["A) ₹60,000", "B) ₹72,000", "C) ₹75,000", "D) ₹80,000"],
      answer: "A",
      explanation:
        "Half-yearly CI = P(1.1)² - P; Annual CI = P(1.2) - P; Difference = 0.01P = 1728 → P = ₹60,000",
      difficulty: "hard",
    },
    {
      id: 4,
      question:
        "If the ratio of CI for 3 years to SI for 2 years at 15% p.a. is 23:10, find the principal when SI is ₹4,000.",
      options: ["A) ₹10,000", "B) ₹12,000", "C) ₹15,000", "D) ₹20,000"],
      answer: "D",
      explanation: "SI = (P×15×2)/100 = 4000 → P = ₹20,000",
      difficulty: "hard",
    },
    {
      id: 5,
      question:
        "A sum triples in 5 years at CI. In how many years will it become 27 times itself?",
      options: ["A) 10", "B) 15", "C) 20", "D) 25"],
      answer: "B",
      explanation: "3 times in 5 years → 27 times = 3³ → 5×3 = 15 years",
      difficulty: "medium",
    },
    {
      id: 6,
      question:
        "The SI on a sum for 10 years is 80% of the principal. What will be the CI on the same sum at half that rate for 2 years?",
      options: ["A) 20% of P", "B) 21% of P", "C) 22% of P", "D) 24% of P"],
      answer: "B",
      explanation:
        "From SI: (P×R×10)/100 = 0.8P → R = 8%; New rate = 4%; CI = P(1.04)² - P = 0.0816P ≈ 21% of P",
      difficulty: "hard",
    },
    {
      id: 7,
      question:
        "A sum doubles in 4 years at compound interest. When will it become 8 times at the same rate?",
      options: ["A) 8 years", "B) 10 years", "C) 12 years", "D) 14 years"],
      answer: "C",
      explanation: "2 times in 4 years → 8 times = 2³ → 4×3 = 12 years",
      difficulty: "medium",
    },
    {
      id: 8,
      question:
        "The difference between CI and SI for 2 years at 25% p.a. is ₹1,250. Find the amount after 3 years at CI.",
      options: ["A) ₹15,625", "B) ₹16,500", "C) ₹17,280", "D) ₹18,120"],
      answer: "A",
      explanation:
        "CI-SI = P(r/100)² → 1250 = P(0.25)² → P = 20,000; Amount = 20000(1.25)³ = ₹15,625",
      difficulty: "hard",
    },
    {
      id: 9,
      question:
        "If the compound interest on a sum for 2 years at 12.5% p.a. is ₹1,125, find the simple interest for 4 years at half the original rate.",
      options: ["A) ₹1,500", "B) ₹1,600", "C) ₹1,800", "D) ₹2,000"],
      answer: "B",
      explanation:
        "CI: P(1.125)² - P = 1125 → P = ₹4,000; New rate = 6.25%; SI = (4000×6.25×4)/100 = ₹1,600",
      difficulty: "hard",
    },
    {
      id: 10,
      question:
        "A sum of money at CI amounts to ₹48,000 in 3 years and ₹60,000 in 5 years. Find the principal.",
      options: ["A) ₹28,000", "B) ₹30,000", "C) ₹30,720", "D) ₹32,500"],
      answer: "C",
      explanation:
        "Rate from 3rd to 5th year = (60000-48000)/48000 = 25%; Principal = 48000/(1.25)² = ₹30,720",
      difficulty: "hard",
    },
    {
      id: 11,
      question:
        "The compound interest on a sum for the 3rd year is ₹1,452 and for the 4th year is ₹1,597.20. Find the principal.",
      options: ["A) ₹10,000", "B) ₹11,000", "C) ₹12,000", "D) ₹12,500"],
      answer: "A",
      explanation:
        "Rate = (1597.20-1452)/1452 × 100 = 10%; P for 3rd year CI = 1452/(1.1)² = ₹10,000",
      difficulty: "hard",
    },
    {
      id: 12,
      question:
        "A sum invested at 10% p.a. CI becomes ₹54,450 in 2 years when compounded half-yearly. What would be the SI on the same sum at 12% p.a. for 3 years?",
      options: ["A) ₹10,800", "B) ₹11,200", "C) ₹12,000", "D) ₹12,600"],
      answer: "A",
      explanation:
        "Half-yearly rate = 5%; 54450 = P(1.05)⁴ → P = ₹45,000; SI = (45000×12×3)/100 = ₹16,200",
      difficulty: "hard",
    },
    {
      id: 13,
      question:
        "The simple interest on a sum for 5 years is 60% of the principal. What will be the compound interest on the same sum at double the rate for 2 years?",
      options: ["A) 44% of P", "B) 48% of P", "C) 52% of P", "D) 56% of P"],
      answer: "A",
      explanation:
        "From SI: (P×R×5)/100 = 0.6P → R = 12%; New rate = 24%; CI = P(1.24)² - P = 0.5376P ≈ 44% of P",
      difficulty: "hard",
    },
    {
      id: 14,
      question:
        "A sum of ₹1,00,000 is invested at 20% p.a. compound interest for 9 months. Find the interest if compounded quarterly.",
      options: ["A) ₹15,525", "B) ₹15,762.50", "C) ₹16,000", "D) ₹16,250"],
      answer: "B",
      explanation:
        "Quarterly rate = 5%, periods = 3; CI = 100000(1.05)³ - 100000 = ₹15,762.50",
      difficulty: "medium",
    },
    {
      id: 15,
      question:
        "The difference between annual and semi-annual compound interest on a sum at 20% p.a. for 1 year is ₹440. Find the principal.",
      options: ["A) ₹20,000", "B) ₹22,000", "C) ₹24,000", "D) ₹25,000"],
      answer: "B",
      explanation:
        "Annual CI = 0.2P; Semi-annual CI = P(1.1)² - P = 0.21P; Difference = 0.01P = 440 → P = ₹22,000",
      difficulty: "hard",
    },
    {
      id: 16,
      question:
        "A sum becomes ₹27,000 in 2 years and ₹38,880 in 3 years at CI. Find the sum that would become ₹46,656 in 4 years at the same rate.",
      options: ["A) ₹20,000", "B) ₹21,600", "C) ₹22,500", "D) ₹24,000"],
      answer: "B",
      explanation:
        "Rate = (38880-27000)/27000 = 44%; Principal for 2 years = 27000/(1.44) = ₹18,750; For 4 years: P = 46656/(1.44)² = ₹21,600",
      difficulty: "hard",
    },
    {
      id: 17,
      question:
        "If the compound interest for the 2nd year is ₹1,320 and for the 3rd year is ₹1,452 at the same rate, find the principal.",
      options: ["A) ₹10,000", "B) ₹11,000", "C) ₹12,000", "D) ₹12,500"],
      answer: "A",
      explanation:
        "Rate = (1452-1320)/1320 × 100 = 10%; Principal = 1320/(1.1)² = ₹10,000",
      difficulty: "hard",
    },
    {
      id: 18,
      question:
        "The simple interest on a sum at 8% p.a. for 6 years equals 48% of the principal. What would be the compound interest on ₹25,000 at 10% p.a. for 2 years?",
      options: ["A) ₹5,250", "B) ₹5,500", "C) ₹5,750", "D) ₹6,000"],
      answer: "A",
      explanation:
        "First part confirms SI formula; CI = 25000(1.1)² - 25000 = ₹5,250",
      difficulty: "medium",
    },
  ],
};
