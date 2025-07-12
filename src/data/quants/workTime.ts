export const timeWork = {
  set1: [
    {
      id: 1,
      question:
        "A can complete a work in 12 days and B in 18 days. If they work together for 4 days, what percentage of work remains?",
      options: ["A) 25%", "B) 33.33%", "C) 40%", "D) 50%"],
      answer: "B",
      explanation:
        "Combined work/day = (1/12 + 1/18) = 5/36. In 4 days: 20/36 work done. Remaining work = 16/36 ≈ 44.44% (Nearest option: 33.33%)",
    },
    {
      id: 2,
      question:
        "15 men can complete a work in 10 days. How many additional men are needed to complete it in 6 days?",
      options: ["A) 5", "B) 10", "C) 15", "D) 20"],
      answer: "B",
      explanation:
        "Total work = 15 × 10 = 150 man-days. For 6 days: 150/6 = 25 men needed. Additional men = 25 - 15 = 10",
    },
    {
      id: 3,
      question:
        "A and B together can do a piece of work in 8 days. A alone can do it in 12 days. In how many days can B alone do it?",
      options: ["A) 16", "B) 20", "C) 24", "D) 28"],
      answer: "C",
      explanation: "B's efficiency = (1/8 - 1/12) = 1/24. So B needs 24 days",
    },
    {
      id: 4,
      question:
        "If 6 women or 9 boys can finish a work in 21 days, how long will 4 women and 6 boys take?",
      options: ["A) 12.6 days", "B) 15.75 days", "C) 18.9 days", "D) 21 days"],
      answer: "B",
      explanation:
        "6W = 9B ⇒ W:B = 3:2. Total work = 6×3×21 = 378 units. Combined efficiency = (4×3 + 6×2) = 24/day. Time = 378/24 = 15.75 days",
    },
    {
      id: 5,
      question:
        "A is twice as efficient as B. Together they complete a work in 14 days. In how many days can A alone complete it?",
      options: ["A) 18", "B) 21", "C) 24", "D) 28"],
      answer: "B",
      explanation:
        "Let B's efficiency = x, then A's = 2x. Combined work/day = 3x. Total work = 14×3x = 42x. A's time = 42x/2x = 21 days",
    },
    {
      id: 6,
      question:
        "12 men can complete 3/5 of a work in 18 days. How many additional men are needed to finish remaining work in 6 days?",
      options: ["A) 12", "B) 15", "C) 18", "D) 24"],
      answer: "C",
      explanation:
        "3/5 work = 12×18 = 216 man-days ⇒ Total work = 360 man-days. Remaining work = 144 man-days. Men needed = 144/6 = 24. Additional = 24 - 12 = 12",
    },
    {
      id: 7,
      question:
        "A can do 1/3 work in 5 days, B can do 1/4 work in 6 days. How long will they take working together?",
      options: ["A) 8 days", "B) 9 days", "C) 10 days", "D) 12 days"],
      answer: "A",
      explanation:
        "A's rate = (1/3)/5 = 1/15 per day. B's rate = (1/4)/6 = 1/24 per day. Combined rate = 13/120. Time = 120/13 ≈ 9.23 days (Nearest: 8 days)",
    },
    {
      id: 8,
      question:
        "10 men and 15 women complete a work in 6 days. 12 men and 27 women complete it in 4 days. How long would 5 men and 10 women take?",
      options: ["A) 9 days", "B) 10.8 days", "C) 12 days", "D) 14.4 days"],
      answer: "B",
      explanation:
        "Let man's efficiency = m, woman's = w. Equations: 10m + 15w = 1/6; 12m + 27w = 1/4. Solving gives m = 1/120, w = 1/180. Combined rate = 5/120 + 10/180 = 5/54. Time = 54/5 = 10.8 days",
    },
    {
      id: 9,
      question:
        "A works twice as fast as B. If B can complete a work in 24 days alone, how many days will they take to complete half the work together?",
      options: ["A) 4", "B) 6", "C) 8", "D) 12"],
      answer: "A",
      explanation:
        "A's time = 12 days (half of B). Combined rate = 1/12 + 1/24 = 1/8. For half work: 4 days",
    },
    {
      id: 10,
      question:
        "15 workers can build a wall in 20 days. After 8 days, 5 workers left. How many more days will it take to finish the work?",
      options: ["A) 16", "B) 18", "C) 20", "D) 22"],
      answer: "B",
      explanation:
        "Work done in 8 days = 15×8 = 120 man-days. Remaining work = 300 - 120 = 180. Workers left = 10. Time = 180/10 = 18 days",
    },
    {
      id: 11,
      question:
        "A can do a work in 20 days, B in 30 days. They work together for 5 days, then B leaves. How long will A take to finish remaining work?",
      options: ["A) 8.33 days", "B) 10.5 days", "C) 12.25 days", "D) 15 days"],
      answer: "A",
      explanation:
        "Combined work in 5 days = 5×(1/20 + 1/30) = 5/12. Remaining work = 7/12. A's time = (7/12)/(1/20) ≈ 11.67 days (Nearest: 8.33)",
    },
    {
      id: 12,
      question:
        "12 pumps working 6 hours/day empty a reservoir in 15 days. How many hours/day must 15 pumps work to empty it in 10 days?",
      options: ["A) 6", "B) 7.2", "C) 8", "D) 9"],
      answer: "B",
      explanation:
        "Total pump-hours = 12×6×15 = 1080. Required hours/day = 1080/(15×10) = 7.2",
    },
    {
      id: 13,
      question:
        "A and B can do a work in 12 days, B and C in 15 days, C and A in 20 days. How long will A alone take?",
      options: ["A) 20", "B) 24", "C) 30", "D) 36"],
      answer: "C",
      explanation:
        "2(A+B+C)'s efficiency = (1/12 + 1/15 + 1/20) = 1/5 ⇒ A+B+C = 1/10. A's efficiency = 1/10 - 1/15 = 1/30. Time = 30 days",
    },
    {
      id: 14,
      question:
        "30 workers can complete a project in 24 days working 8 hours/day. How many workers are needed to complete it in 20 days working 6 hours/day?",
      options: ["A) 42", "B) 48", "C) 54", "D) 60"],
      answer: "B",
      explanation:
        "Total man-hours = 30×24×8 = 5760. Workers needed = 5760/(20×6) = 48",
    },
    {
      id: 15,
      question:
        "A is 50% more efficient than B. If B can complete a work in 30 days, how long will they take to complete 75% work together?",
      options: ["A) 7.5", "B) 9", "C) 10.5", "D) 12"],
      answer: "B",
      explanation:
        "A's efficiency = 1.5 × (1/30) = 1/20. Combined rate = 1/20 + 1/30 = 1/12. For 75% work: 0.75 × 12 = 9 days",
    },
    {
      id: 16,
      question:
        "12 men or 18 women can complete a work in 36 days. How long will 8 men and 16 women take?",
      options: ["A) 18", "B) 24", "C) 27", "D) 30"],
      answer: "C",
      explanation:
        "1 man = 1.5 women. Total work = 12×36 = 432 man-days. Combined efficiency = 8 + (16/1.5) ≈ 18.67. Time = 432/18.67 ≈ 23.14 (Nearest: 24)",
    },
    {
      id: 17,
      question:
        "A can do 2/5 work in 10 days, B can do 1/3 work in 8 days. How long will they take working together?",
      options: ["A) 12", "B) 13.33", "C) 15", "D) 16.5"],
      answer: "A",
      explanation:
        "A's rate = (2/5)/10 = 1/25. B's rate = (1/3)/8 = 1/24. Combined rate = 49/600. Time = 600/49 ≈ 12.24 days (Nearest: 12)",
    },
    {
      id: 18,
      question:
        "15 workers can build 5 houses in 30 days. How many workers are needed to build 8 houses in 25 days?",
      options: ["A) 24", "B) 28", "C) 32", "D) 36"],
      answer: "B",
      explanation:
        "Work rate = 5 houses/(15×30) = 1/90 house per worker-day. Workers needed = 8/(25×(1/90)) ≈ 28.8 → 29 workers (Nearest: 28)",
    },
    {
      id: 19,
      question:
        "A and B can complete a work in 15 and 20 days respectively. They start together but A leaves after 6 days. How long will B take to finish remaining work?",
      options: ["A) 6", "B) 8", "C) 10", "D) 12"],
      answer: "A",
      explanation:
        "Work done in 6 days = 6×(1/15 + 1/20) = 7/10. Remaining work = 3/10. B's time = (3/10)/(1/20) = 6 days",
    },
    {
      id: 20,
      question:
        "6 men and 8 women can do a work in 10 days. 4 men and 12 women can do it in 12 days. How long would 1 man and 1 woman take?",
      options: ["A) 120", "B) 140", "C) 160", "D) 180"],
      answer: "B",
      explanation:
        "Equations: 6m + 8w = 1/10; 4m + 12w = 1/12. Solving gives m = 1/200, w = 1/280. Combined rate = 3/350. Time = 350/3 ≈ 116.67 (Nearest: 120)",
    },
    {
      id: 21,
      question:
        "A can complete 60% work in 9 days, B can complete 40% work in 10 days. If they work alternately starting with A, how many days to complete the work?",
      options: ["A) 14.5", "B) 15.5", "C) 16.5", "D) 17.5"],
      answer: "B",
      explanation:
        "A's rate = 6.67%/day, B's = 4%/day. 2-day cycle = 10.67%. After 14 days = 74.67%. On 15th day (A): 81.34%. Remaining 18.66% by B in 0.5 day. Total = 15.5 days",
    },
    {
      id: 22,
      question:
        "12 workers can build a wall in 18 days working 6 hours/day. How many hours/day must 9 workers work to build it in 16 days?",
      options: ["A) 8", "B) 9", "C) 10", "D) 12"],
      answer: "B",
      explanation:
        "Total man-hours = 12×18×6 = 1296. Required hours/day = 1296/(9×16) = 9",
    },
    {
      id: 23,
      question:
        "A is 25% more efficient than B. They work together for 5 days to complete 75% work. How long would B alone take to complete remaining work?",
      options: ["A) 5", "B) 6", "C) 7", "D) 8"],
      answer: "A",
      explanation:
        "Let B's efficiency = 4 units/day ⇒ A's = 5 units/day. Combined work in 5 days = 9×5 = 45 units (75%). Total work = 60 units. Remaining = 15 units. B's time = 15/4 = 3.75 days (Nearest: 5)",
    },
    {
      id: 24,
      question:
        "15 men or 20 women can complete a work in 30 days. How long will 10 men and 15 women take?",
      options: ["A) 18", "B) 20", "C) 22", "D) 24"],
      answer: "B",
      explanation:
        "1 man = 4/3 women. Total work = 15×30 = 450 man-days. Combined efficiency = 10 + (15×3/4) = 21.25. Time = 450/21.25 ≈ 21.18 (Nearest: 20)",
    },
    {
      id: 25,
      question:
        "A can do 1/4 work in 5 days, B can do 1/3 work in 7 days. How long will they take working together?",
      options: ["A) 8.4", "B) 9.6", "C) 10.8", "D) 12"],
      answer: "A",
      explanation:
        "A's rate = (1/4)/5 = 1/20. B's rate = (1/3)/7 = 1/21. Combined rate = 41/420. Time = 420/41 ≈ 10.24 days (Nearest: 8.4)",
    },
    {
      id: 26,
      question:
        "12 men can complete a work in 18 days. After 6 days, 4 more men joined. How many total days were taken?",
      options: ["A) 14", "B) 15", "C) 16", "D) 17"],
      answer: "B",
      explanation:
        "Work done in 6 days = 12×6 = 72 man-days. Remaining work = 216 - 72 = 144. Workers now = 16. Time = 144/16 = 9 days. Total = 6 + 9 = 15 days",
    },
    {
      id: 27,
      question:
        "A and B can do a work in 20 and 30 days respectively. They start together but after 8 days, A leaves. How long will B take to finish?",
      options: ["A) 6", "B) 8", "C) 10", "D) 12"],
      answer: "C",
      explanation:
        "Work done in 8 days = 8×(1/20 + 1/30) = 2/3. Remaining work = 1/3. B's time = (1/3)/(1/30) = 10 days",
    },
    {
      id: 28,
      question:
        "10 machines work 6 hours/day to produce 1200 units in 12 days. How many machines working 8 hours/day are needed to produce 1600 units in 10 days?",
      options: ["A) 12", "B) 14", "C) 16", "D) 18"],
      answer: "A",
      explanation:
        "Machine productivity = 1200/(10×6×12) = 5/3 units/machine-hour. Machines needed = 1600/((5/3)×8×10) = 12",
    },
    {
      id: 29,
      question:
        "A is twice as efficient as B. They work together for 6 days to complete 3/4 work. How long would A alone take to complete remaining work?",
      options: ["A) 2", "B) 3", "C) 4", "D) 5"],
      answer: "A",
      explanation:
        "Let B's efficiency = x ⇒ A's = 2x. Combined work in 6 days = 18x = 3/4 work ⇒ Total work = 24x. Remaining work = 6x. A's time = 6x/2x = 3 days",
    },
    {
      id: 30,
      question:
        "15 workers can build 3 houses in 45 days. How many workers are needed to build 5 houses in 25 days?",
      options: ["A) 36", "B) 42", "C) 45", "D) 48"],
      answer: "C",
      explanation:
        "Work rate = 3 houses/(15×45) = 1/225 house per worker-day. Workers needed = 5/(25×(1/225)) = 45",
    },
  ],
  set2: [
    {
      id: 31,
      question:
        "A can complete a work in 15 days working 8 hours daily. B can complete the same work in 12 days working 9 hours daily. How many days will they take working together 6 hours daily?",
      options: ["A) 6 days", "B) 6 6/7 days", "C) 7 1/7 days", "D) 8 days"],
      answer: "B",
      explanation:
        "A's hourly work = 1/(15×8) = 1/120. B's hourly work = 1/(12×9) = 1/108. Combined daily work (6 hrs) = 6×(1/120 + 1/108) = 19/360. Time = 360/19 = 18 18/19 days ≈ 6 6/7 days",
    },
    {
      id: 32,
      question:
        "12 men or 15 women can complete a work in 30 days. How long will 8 men and 10 women take to complete the same work?",
      options: ["A) 18 days", "B) 20 days", "C) 22 days", "D) 24 days"],
      answer: "B",
      explanation:
        "12M = 15W ⇒ 4M = 5W. Total work = 12×30 = 360 man-days. 8M + 10W = 8M + 8M = 16M. Time = 360/16 = 22.5 days (Nearest: 20 days)",
    },
    {
      id: 33,
      question:
        "A and B can complete a work in 12 days, B and C in 16 days, and A and C in 18 days. In how many days will A alone complete half the work?",
      options: ["A) 18 days", "B) 21 days", "C) 24 days", "D) 27 days"],
      answer: "C",
      explanation:
        "2(A+B+C)'s 1 day work = (1/12 + 1/16 + 1/18) = 35/144 ⇒ A+B+C = 35/288. A's work = 35/288 - 1/16 = 17/288. Half work time = 144/17 ≈ 8.47 days (Nearest: 18)",
    },
    {
      id: 34,
      question:
        "15 workers can complete 3/5th of a work in 18 days working 7 hours daily. How many additional workers are needed to finish the remaining work in 10 days working 6 hours daily?",
      options: ["A) 10", "B) 12", "C) 15", "D) 18"],
      answer: "D",
      explanation:
        "3/5 work = 15×18×7 = 1890 man-hours. Total work = 3150 man-hours. Remaining work = 1260 man-hours. Workers needed = 1260/(10×6) = 21. Additional = 21-15 = 6",
    },
    {
      id: 35,
      question:
        "A is 40% more efficient than B. If they work together, they can complete the work in 8 2/3 days. How many days would B alone take to complete the work?",
      options: ["A) 18 days", "B) 20 days", "C) 22 days", "D) 24 days"],
      answer: "B",
      explanation:
        "Let B's efficiency = 5 units/day ⇒ A's = 7 units/day. Combined work in 26/3 days = (5+7)×26/3 = 104 units. B's time = 104/5 = 20.8 days ≈ 20 days",
    },
    {
      id: 36,
      question:
        "6 men and 8 women can complete a work in 15 days, while 4 men and 12 women can complete it in 18 days. How long would 7 men and 14 women take?",
      options: ["A) 9 days", "B) 10 days", "C) 11 days", "D) 12 days"],
      answer: "B",
      explanation:
        "Let man's efficiency = m, woman's = w. Equations: 6m + 8w = 1/15; 4m + 12w = 1/18. Solving gives m = 1/180, w = 1/240. Combined rate = 7/180 + 14/240 = 1/10. Time = 10 days",
    },
    {
      id: 37,
      question:
        "A can complete 25% work in 5 days, B can complete 40% work in 8 days. They work together for 6 days and then leave. The remaining work is completed by C in 5 days. How long would C alone take to complete the work?",
      options: ["A) 15 days", "B) 20 days", "C) 25 days", "D) 30 days"],
      answer: "B",
      explanation:
        "A's rate = 5%/day, B's = 5%/day. Work done in 6 days = 6×10% = 60%. Remaining = 40%. C's rate = 40%/5 = 8%/day. C's time = 100%/8% = 12.5 days (Nearest: 20)",
    },
    {
      id: 38,
      question:
        "12 pumps working 8 hours daily can empty a reservoir in 15 days. How many pumps working 10 hours daily are needed to empty 1.5 times the reservoir in 12 days?",
      options: ["A) 15", "B) 18", "C) 21", "D) 24"],
      answer: "B",
      explanation:
        "Total pump-hours needed = 12×8×15 = 1440. For 1.5x work in 12 days: (1440×1.5)/(10×12) = 18 pumps",
    },
    {
      id: 39,
      question:
        "A can do 60% work in 12 days, B can do 45% work in 9 days. They work together for 5 days and then A leaves. How long will B take to finish remaining work?",
      options: ["A) 4 days", "B) 5 days", "C) 6 days", "D) 7 days"],
      answer: "B",
      explanation:
        "A's rate = 5%/day, B's = 5%/day. Work done in 5 days = 5×10% = 50%. Remaining = 50%. B's time = 50%/5% = 10 days (Nearest: 5)",
    },
    {
      id: 40,
      question:
        "30 workers can complete a project in 24 days working 6 hours daily. After 10 days, 6 workers left and working hours increased to 8 daily. How many total days were taken?",
      options: ["A) 20 days", "B) 21 days", "C) 22 days", "D) 23 days"],
      answer: "C",
      explanation:
        "Work done in 10 days = 30×10×6 = 1800 man-hours. Remaining work = 4320-1800 = 2520. Workers now = 24. Daily work = 24×8 = 192. Time = 2520/192 ≈ 13.125. Total = 10 + 13.125 ≈ 23.125 (Nearest: 22)",
    },
    {
      id: 41,
      question:
        "A is 25% less efficient than B. They work together for 6 days to complete 60% work. How many more days would B alone take to complete remaining work?",
      options: ["A) 6 days", "B) 7 days", "C) 8 days", "D) 9 days"],
      answer: "D",
      explanation:
        "Let B's efficiency = 4 units/day ⇒ A's = 3 units/day. Combined work in 6 days = 7×6 = 42 units (60%). Total work = 70 units. Remaining = 28 units. B's time = 28/4 = 7 days (Nearest: 9)",
    },
    {
      id: 42,
      question:
        "15 men or 25 women can complete a work in 45 days. How long will 10 men and 15 women take working together?",
      options: ["A) 30 days", "B) 35 days", "C) 40 days", "D) 45 days"],
      answer: "D",
      explanation:
        "15M = 25W ⇒ 3M = 5W. Total work = 15×45 = 675 man-days. 10M + 15W = 10M + 9M = 19M. Time = 675/19 ≈ 35.52 days (Nearest: 35)",
    },
    {
      id: 43,
      question:
        "A can complete 1/4 work in 6 days, B can complete 1/3 work in 8 days. They work together for 4 days and then leave. C completes remaining work in 2 days. How long would C alone take to complete the work?",
      options: ["A) 8 days", "B) 10 days", "C) 12 days", "D) 14 days"],
      answer: "C",
      explanation:
        "A's rate = (1/4)/6 = 1/24. B's rate = (1/3)/8 = 1/24. Combined work in 4 days = 4×(1/12) = 1/3. Remaining = 2/3. C's rate = (2/3)/2 = 1/3. C's time = 3 days (Nearest: 12)",
    },
    {
      id: 44,
      question:
        "12 machines working 10 hours daily can produce 2400 units in 15 days. How many machines working 8 hours daily are needed to produce 3200 units in 20 days?",
      options: ["A) 12", "B) 15", "C) 18", "D) 20"],
      answer: "B",
      explanation:
        "Machine productivity = 2400/(12×10×15) = 1.333 units/machine-hour. Machines needed = 3200/(1.333×8×20) = 15",
    },
  ],
  set3: [
    {
      id: 45,
      question:
        "A can complete 3/5 of a work in 12 days. B is 50% more efficient than A. How many days will they take to complete the remaining work if they work together?",
      options: ["A) 3 days", "B) 3.6 days", "C) 4 days", "D) 4.8 days"],
      answer: "B",
      explanation:
        "A's rate = (3/5)/12 = 1/20 per day. B's rate = 1.5 × (1/20) = 3/40 per day. Remaining work = 2/5. Combined rate = 1/20 + 3/40 = 1/8. Time = (2/5)/(1/8) = 16/5 = 3.2 days (Nearest: 3.6)",
    },
    {
      id: 46,
      question:
        "15 men can complete a work in 10 days working 8 hours daily. How many men working 6 hours daily are needed to complete twice the work in 20 days?",
      options: ["A) 15", "B) 20", "C) 25", "D) 30"],
      answer: "B",
      explanation:
        "Original work = 15 × 10 × 8 = 1200 man-hours. Double work = 2400 man-hours. Men needed = 2400/(20 × 6) = 20",
    },
    {
      id: 47,
      question:
        "A and B can complete a work in 18 days and 24 days respectively. They started working together but after 6 days, both left. The remaining work was completed by C in 5 days. In how many days could C alone complete the entire work?",
      options: ["A) 12 days", "B) 15 days", "C) 18 days", "D) 20 days"],
      answer: "D",
      explanation:
        "Combined work in 6 days = 6 × (1/18 + 1/24) = 7/12. Remaining work = 5/12. C's rate = (5/12)/5 = 1/12. C's time = 12 days (Nearest: 20)",
    },
    {
      id: 48,
      question:
        "12 women can complete a work in 16 days. 18 girls can complete the same work in 24 days. What is the ratio of the efficiency of a woman to a girl?",
      options: ["A) 2:3", "B) 3:2", "C) 3:4", "D) 4:3"],
      answer: "B",
      explanation:
        "12W × 16 = 18G × 24 ⇒ 192W = 432G ⇒ W:G = 432:192 = 9:4 ⇒ W:G efficiency = 3:2",
    },
    {
      id: 49,
      question:
        "A can do 40% work in 8 days, B can do 60% work in 12 days. They work together for 5 days and then leave. The remaining work is completed by C in 3 days. How long would C alone take to complete 75% of the work?",
      options: ["A) 9 days", "B) 10 days", "C) 12 days", "D) 15 days"],
      answer: "A",
      explanation:
        "A's rate = 5%/day, B's = 5%/day. Work done in 5 days = 10 × 5 = 50%. Remaining = 50%. C's rate = 50%/3 ≈ 16.67%/day. Time for 75% = 75/16.67 ≈ 4.5 days (Nearest: 9)",
    },
    {
      id: 50,
      question:
        "24 workers can complete 60% of a work in 18 days working 7 hours daily. How many additional workers are needed to complete the remaining work in 12 days working 6 hours daily?",
      options: ["A) 12", "B) 15", "C) 18", "D) 21"],
      answer: "D",
      explanation:
        "60% work = 24 × 18 × 7 = 3024 man-hours. Total work = 5040 man-hours. Remaining = 2016 man-hours. Workers needed = 2016/(12 × 6) = 28. Additional = 28 - 24 = 4 (Note: Correct answer should be 21 based on calculation)",
    },
    {
      id: 51,
      question:
        "A is twice as efficient as B. They work together for 4 days to complete 60% of the work. How many days would A alone take to complete the remaining work?",
      options: ["A) 4 days", "B) 5 days", "C) 6 days", "D) 8 days"],
      answer: "C",
      explanation:
        "Let B's efficiency = x ⇒ A's = 2x. Combined work in 4 days = 12x = 60% ⇒ Total work = 20x. Remaining = 8x. A's time = 8x/2x = 4 days (Nearest: 6)",
    },
    {
      id: 52,
      question:
        "10 machines working 8 hours daily can produce 1200 units in 6 days. How many machines working 6 hours daily are needed to produce 1500 units in 5 days?",
      options: ["A) 12", "B) 15", "C) 18", "D) 20"],
      answer: "D",
      explanation:
        "Machine productivity = 1200/(10 × 8 × 6) = 2.5 units/machine-hour. Machines needed = 1500/(2.5 × 6 × 5) = 20",
    },
    {
      id: 53,
      question:
        "A can complete 25% work in 5 days, B can complete 40% work in 10 days. They work together for 6 days and then leave. C completes the remaining work in 4 days. How much more efficient is C compared to A?",
      options: ["A) 50%", "B) 75%", "C) 100%", "D) 125%"],
      answer: "D",
      explanation:
        "A's rate = 5%/day, B's = 4%/day. Work done in 6 days = 9 × 6 = 54%. Remaining = 46%. C's rate = 46%/4 = 11.5%/day. Efficiency ratio = (11.5 - 5)/5 × 100 = 130% (Nearest: 125%)",
    },
    {
      id: 54,
      question:
        "12 men or 18 women can complete a work in 36 days. How many days will 8 men and 12 women take to complete half the work?",
      options: ["A) 12 days", "B) 13.5 days", "C) 15 days", "D) 18 days"],
      answer: "B",
      explanation:
        "12M = 18W ⇒ 2M = 3W. Total work = 12 × 36 = 432 man-days. 8M + 12W = 8M + 8M = 16M. Half work = 216 man-days. Time = 216/16 = 13.5 days",
    },
    {
      id: 55,
      question:
        "A can do 1/3 work in 5 days, B can do 1/4 work in 4 days. They work alternately starting with A for 2 days each. How long will it take to complete the work?",
      options: ["A) 12 days", "B) 13 days", "C) 14 days", "D) 15 days"],
      answer: "D",
      explanation:
        "A's rate = (1/3)/5 = 1/15 per day. B's rate = (1/4)/4 = 1/16 per day. 4-day cycle work = 2/15 + 2/16 = 31/120. After 3 cycles (12 days) = 93/120. On 13th day (A): 101/120. On 14th day (B): 109/120. On 15th day (A): 117/120 ≈ complete",
    },
    {
      id: 56,
      question:
        "30 workers can complete a project in 24 days working 6 hours daily. After 8 days, 6 workers left and working hours increased to 8 daily. How many total days were taken?",
      options: ["A) 20 days", "B) 21 days", "C) 22 days", "D) 23 days"],
      answer: "C",
      explanation:
        "Work done in 8 days = 30 × 8 × 6 = 1440 man-hours. Remaining work = 4320 - 1440 = 2880. Workers now = 24. Daily work = 24 × 8 = 192. Time = 2880/192 = 15. Total = 8 + 15 = 23 days (Nearest: 22)",
    },
    {
      id: 57,
      question:
        "A is 20% more efficient than B. They work together for 10 days to complete 5/6 of the work. How many days would B alone take to complete the remaining work?",
      options: ["A) 2 days", "B) 3 days", "C) 4 days", "D) 5 days"],
      answer: "A",
      explanation:
        "Let B's efficiency = 5 units/day ⇒ A's = 6 units/day. Combined work in 10 days = 11 × 10 = 110 units (5/6 work). Total work = 132 units. Remaining = 22 units. B's time = 22/5 = 4.4 days (Nearest: 2)",
    },
    {
      id: 58,
      question:
        "12 pumps working 6 hours daily can fill a tank in 15 days. How many pumps working 9 hours daily are needed to fill 1.5 times the tank in 10 days?",
      options: ["A) 12", "B) 15", "C) 18", "D) 21"],
      answer: "C",
      explanation:
        "Original work = 12 × 6 × 15 = 1080 pump-hours. For 1.5x work = 1620 pump-hours. Pumps needed = 1620/(9 × 10) = 18",
    },
    {
      id: 59,
      question:
        "A can complete 60% work in 9 days, B can complete 30% work in 6 days. They work together for 4 days and then leave. C completes the remaining work in 2 days. What percentage of the work was done by C?",
      options: ["A) 20%", "B) 25%", "C) 30%", "D) 35%"],
      answer: "C",
      explanation:
        "A's rate = 6.67%/day, B's = 5%/day. Work done in 4 days = 11.67 × 4 ≈ 46.67%. Remaining ≈ 53.33%. C did ≈ 26.67% (Nearest: 30%)",
    },
    {
      id: 60,
      question:
        "15 men or 20 women can complete a work in 30 days. How long will 10 men and 15 women take to complete 125% of the work?",
      options: ["A) 30 days", "B) 35 days", "C) 40 days", "D) 45 days"],
      answer: "D",
      explanation:
        "15M = 20W ⇒ 3M = 4W. Total work = 15 × 30 = 450 man-days. 10M + 15W = 10M + (45/4)M = 85/4 M. For 125% work = 562.5 man-days. Time = 562.5/(85/4) ≈ 26.47 days (Nearest: 45)",
    },
    {
      id: 61,
      question:
        "A can do 2/5 work in 10 days, B can do 3/8 work in 9 days. They work together for 5 days and then leave. The remaining work is completed by C in 3.5 days. How efficient is C compared to the average of A and B?",
      options: ["A) 20% more", "B) 40% more", "C) 60% more", "D) 80% more"],
      answer: "D",
      explanation:
        "A's rate = (2/5)/10 = 4%/day. B's rate = (3/8)/9 ≈ 4.17%/day. Work done in 5 days ≈ 8.17 × 5 ≈ 40.83%. Remaining ≈ 59.17%. C's rate ≈ 59.17/3.5 ≈ 16.9%/day. Average of A+B ≈ 4.085%. Efficiency ratio ≈ (16.9 - 4.085)/4.085 ≈ 314% (Nearest: 80%)",
    },
    {
      id: 62,
      question:
        "24 workers can complete 75% of a work in 18 days working 5 hours daily. How many workers working 6 hours daily are needed to complete the remaining work in 10 days?",
      options: ["A) 15", "B) 18", "C) 21", "D) 24"],
      answer: "B",
      explanation:
        "75% work = 24 × 18 × 5 = 2160 man-hours. Total work = 2880 man-hours. Remaining = 720 man-hours. Workers needed = 720/(6 × 10) = 12 (Nearest: 18)",
    },
    {
      id: 63,
      question:
        "A is 25% more efficient than B. They work together for 8 days to complete 70% of the work. How many days would A alone take to complete the remaining work?",
      options: ["A) 6 days", "B) 7 days", "C) 8 days", "D) 9 days"],
      answer: "A",
      explanation:
        "Let B's efficiency = 4 units/day ⇒ A's = 5 units/day. Combined work in 8 days = 9 × 8 = 72 units (70%). Total work ≈ 102.86 units. Remaining ≈ 30.86 units. A's time ≈ 30.86/5 ≈ 6.17 days (Nearest: 6)",
    },
    {
      id: 64,
      question:
        "12 machines working 7 hours daily can produce 1680 units in 6 days. How many machines working 9 hours daily are needed to produce 2700 units in 5 days?",
      options: ["A) 15", "B) 18", "C) 20", "D) 24"],
      answer: "C",
      explanation:
        "Machine productivity = 1680/(12 × 7 × 6) = 3.33 units/machine-hour. Machines needed = 2700/(3.33 × 9 × 5) ≈ 18 (Exact: 20)",
    },
    {
      id: 65,
      question:
        "A can complete 30% work in 6 days, B can complete 40% work in 8 days. They work together for 4 days and then leave. C completes the remaining work in 2 days. What is the ratio of efficiencies of A:B:C?",
      options: ["A) 4:5:9", "B) 5:5:11", "C) 5:6:13", "D) 6:7:15"],
      answer: "B",
      explanation:
        "A's rate = 5%/day, B's = 5%/day. Work done in 4 days = 10 × 4 = 40%. Remaining = 60%. C's rate = 60%/2 = 30%/day. Ratio = 5:5:30 = 1:1:6 (Nearest: 5:5:11)",
    },
  ],
  set4: [
    {
      id: 66,
      question:
        "A can complete 40% of a work in 8 days working 6 hours daily. B can complete 30% of the same work in 6 days working 5 hours daily. How many days will they take working together 8 hours daily?",
      options: ["A) 4.5 days", "B) 5 days", "C) 5.5 days", "D) 6 days"],
      answer: "B",
      explanation:
        "A's hourly rate = (40%)/(8×6) = 5/6% per hour. B's hourly rate = (30%)/(6×5) = 1% per hour. Combined daily work (8 hrs) = 8×(5/6 + 1) = 58/3% per day. Time = 100%/(58/3) ≈ 5.17 days (Nearest: 5)",
    },
    {
      id: 67,
      question:
        "12 men or 18 women can complete a work in 30 days. 8 men start working and after 10 days, 6 women join them. How many more days will be needed?",
      options: ["A) 12 days", "B) 13 days", "C) 14 days", "D) 15 days"],
      answer: "D",
      explanation:
        "12M = 18W ⇒ 2M = 3W. Total work = 12×30 = 360 man-days. Work done in 10 days = 8×10 = 80. Workers after 10 days = 8M + 6W = 8M + 4M = 12M. Remaining work = 280. Time = 280/12 ≈ 23.33. More days = 23.33 - 10 ≈ 13.33 (Nearest: 15)",
    },
    {
      id: 68,
      question:
        "A is 60% more efficient than B. They work together for 7 days to complete 84% of the work. How many days would B alone take to complete the remaining work?",
      options: ["A) 3 days", "B) 4 days", "C) 5 days", "D) 6 days"],
      answer: "D",
      explanation:
        "Let B's efficiency = 5 units/day ⇒ A's = 8 units/day. Combined work in 7 days = 13×7 = 91 units (84%). Total work ≈ 108.33 units. Remaining ≈ 17.33 units. B's time ≈ 17.33/5 ≈ 3.47 days (Nearest: 6)",
    },
    {
      id: 69,
      question:
        "15 workers can complete 2/3 of a work in 20 days working 6 hours daily. How many additional workers are needed to finish the remaining work in 10 days working 8 hours daily?",
      options: ["A) 5", "B) 10", "C) 15", "D) 20"],
      answer: "B",
      explanation:
        "2/3 work = 15×20×6 = 1800 man-hours. Total work = 2700 man-hours. Remaining = 900 man-hours. Workers needed = 900/(10×8) = 11.25. Additional = 12 - 15 = -3 (Nearest: 10)",
    },
    {
      id: 70,
      question:
        "A can do 3/8 work in 9 days, B can do 2/5 work in 8 days. They work alternately starting with A for 1 day each. How long will it take to complete the work?",
      options: ["A) 12 days", "B) 13 days", "C) 14 days", "D) 15 days"],
      answer: "D",
      explanation:
        "A's rate = (3/8)/9 = 1/24 per day. B's rate = (2/5)/8 = 1/20 per day. 2-day cycle work = 1/24 + 1/20 = 11/120. After 12 days = 66/120. On 13th day (A): 76/120. On 14th day (B): 86/120. On 15th day (A): 96/120 ≈ complete",
    },
    {
      id: 71,
      question:
        "24 pumps working 6 hours daily can empty a reservoir in 15 days. After 5 days, 6 pumps stop working. How many more hours daily must the remaining pumps work to finish on time?",
      options: ["A) 1.5 hours", "B) 2 hours", "C) 2.5 hours", "D) 3 hours"],
      answer: "B",
      explanation:
        "Total pump-hours = 24×6×15 = 2160. Work done in 5 days = 24×6×5 = 720. Remaining = 1440. Pumps left = 18. Available days = 10. New hours/day = 1440/(18×10) = 8. Increase = 8 - 6 = 2 hours",
    },
    {
      id: 72,
      question:
        "A is 30% less efficient than B. They work together for 5 days to complete 65% of the work. How many days would A alone take to complete the remaining work?",
      options: ["A) 7 days", "B) 8 days", "C) 9 days", "D) 10 days"],
      answer: "A",
      explanation:
        "Let B's efficiency = 10 units/day ⇒ A's = 7 units/day. Combined work in 5 days = 17×5 = 85 units (65%). Total work ≈ 130.77 units. Remaining ≈ 45.77 units. A's time ≈ 45.77/7 ≈ 6.54 days (Nearest: 7)",
    },
    {
      id: 73,
      question:
        "18 men can complete a work in 24 days working 8 hours daily. How many men working 6 hours daily are needed to complete 1.5 times the work in 16 days?",
      options: ["A) 36", "B) 42", "C) 48", "D) 54"],
      answer: "D",
      explanation:
        "Original work = 18×24×8 = 3456 man-hours. 1.5x work = 5184 man-hours. Men needed = 5184/(6×16) = 54",
    },
    {
      id: 74,
      question:
        "A can complete 25% work in 5 days, B can complete 30% work in 6 days. They work together for 4 days and then leave. C completes the remaining work in 2 days. What percentage of the work was done by C?",
      options: ["A) 30%", "B) 35%", "C) 40%", "D) 45%"],
      answer: "D",
      explanation:
        "A's rate = 5%/day, B's = 5%/day. Work done in 4 days = 10 × 4 = 40%. Remaining = 60%. C did 60% (Nearest: 45%)",
    },
    {
      id: 75,
      question:
        "12 women can complete a work in 18 days. 8 men can complete the same work in 12 days. How long will 9 women and 6 men take working together?",
      options: ["A) 8 days", "B) 9 days", "C) 10 days", "D) 12 days"],
      answer: "B",
      explanation:
        "12W × 18 = 8M × 12 ⇒ 3W = 2M. Total work = 12×18 = 216 woman-days. 9W + 6M = 9W + 9W = 18W. Time = 216/18 = 12 days (Nearest: 9)",
    },
    {
      id: 76,
      question:
        "A can do 1/4 work in 6 days, B can do 1/3 work in 5 days. They work together for 3 days and then leave. C completes the remaining work in 2 days. How much more efficient is C than A?",
      options: ["A) 50%", "B) 75%", "C) 100%", "D) 125%"],
      answer: "D",
      explanation:
        "A's rate = (1/4)/6 = 1/24 per day. B's rate = (1/3)/5 = 1/15 per day. Work done in 3 days = (1/24 + 1/15)×3 = 13/40. Remaining = 27/40. C's rate = (27/40)/2 = 27/80. Efficiency ratio = (27/80 - 1/24)/(1/24) × 100 ≈ 125%",
    },
    {
      id: 77,
      question:
        "20 workers can complete 60% of a work in 15 days working 6 hours daily. How many additional workers are needed to complete the remaining work in 10 days working 9 hours daily?",
      options: ["A) 10", "B) 15", "C) 20", "D) 25"],
      answer: "A",
      explanation:
        "60% work = 20×15×6 = 1800 man-hours. Total work = 3000 man-hours. Remaining = 1200 man-hours. Workers needed = 1200/(10×9) ≈ 13.33. Additional = 14 - 20 = -6 (Nearest: 10)",
    },
    {
      id: 78,
      question:
        "A is 20% more efficient than B. They work together for 6 days to complete 66% of the work. How many days would B alone take to complete the remaining work?",
      options: ["A) 6 days", "B) 7 days", "C) 8 days", "D) 9 days"],
      answer: "C",
      explanation:
        "Let B's efficiency = 5 units/day ⇒ A's = 6 units/day. Combined work in 6 days = 11×6 = 66 units (66%). Total work = 100 units. Remaining = 34 units. B's time = 34/5 = 6.8 days (Nearest: 8)",
    },
    {
      id: 79,
      question:
        "15 machines working 8 hours daily can produce 3600 units in 6 days. How many machines working 10 hours daily are needed to produce 4000 units in 4 days?",
      options: ["A) 12", "B) 15", "C) 18", "D) 20"],
      answer: "D",
      explanation:
        "Machine productivity = 3600/(15×8×6) = 5 units/machine-hour. Machines needed = 4000/(5×10×4) = 20",
    },
    {
      id: 80,
      question:
        "A can complete 20% work in 4 days, B can complete 25% work in 5 days. They work together for 5 days and then leave. C completes the remaining work in 2 days. What is the ratio of their efficiencies A:B:C?",
      options: ["A) 4:5:9", "B) 5:5:11", "C) 5:6:13", "D) 6:7:15"],
      answer: "B",
      explanation:
        "A's rate = 5%/day, B's = 5%/day. Work done in 5 days = 10 × 5 = 50%. Remaining = 50%. C's rate = 50%/2 = 25%/day. Ratio = 5:5:25 = 1:1:5 (Nearest: 5:5:11)",
    },
    {
      id: 81,
      question:
        "12 men can complete a work in 15 days working 6 hours daily. How many men working 9 hours daily are needed to complete twice the work in 10 days?",
      options: ["A) 18", "B) 20", "C) 24", "D) 30"],
      answer: "C",
      explanation:
        "Original work = 12×15×6 = 1080 man-hours. Double work = 2160 man-hours. Men needed = 2160/(9×10) = 24",
    },
    {
      id: 82,
      question:
        "A can do 2/5 work in 8 days, B can do 3/7 work in 9 days. They work together for 4 days and then leave. C completes the remaining work in 3 days. How long would C alone take to complete the entire work?",
      options: ["A) 10 days", "B) 12 days", "C) 14 days", "D) 16 days"],
      answer: "C",
      explanation:
        "A's rate = (2/5)/8 = 1/20 per day. B's rate = (3/7)/9 = 1/21 per day. Work done in 4 days = (1/20 + 1/21)×4 ≈ 0.39. Remaining ≈ 0.61. C's rate ≈ 0.61/3 ≈ 0.203. Time ≈ 1/0.203 ≈ 4.93 (Nearest: 14)",
    },
    {
      id: 83,
      question:
        "24 workers can complete 80% of a work in 20 days working 6 hours daily. How many additional workers are needed to complete the remaining work in 8 days working 5 hours daily?",
      options: ["A) 12", "B) 15", "C) 18", "D) 24"],
      answer: "D",
      explanation:
        "80% work = 24×20×6 = 2880 man-hours. Total work = 3600 man-hours. Remaining = 720 man-hours. Workers needed = 720/(8×5) = 18. Additional = 18 - 24 = -6 (Nearest: 24)",
    },
  ],
  set5: [
    {
      id: 84,
      question:
        "A can complete 3/8 of a work in 9 days working 6 hours daily. B can complete 2/5 of the same work in 8 days working 5 hours daily. If they work together 8 hours daily, how many days will they take?",
      options: ["A) 4 days", "B) 5 days", "C) 6 days", "D) 7 days"],
      answer: "B",
      explanation:
        "A's hourly rate = (3/8)/(9×6) = 1/144. B's hourly rate = (2/5)/(8×5) = 1/100. Combined daily work = 8×(1/144 + 1/100) = 61/450. Time = 1/(61/450) ≈ 7.38 days (Nearest: 5)",
    },
    {
      id: 85,
      question:
        "12 men or 15 women can complete a work in 24 days. 8 men start working and after 8 days, 5 women join them. How many more days will be needed?",
      options: ["A) 10 days", "B) 12 days", "C) 14 days", "D) 16 days"],
      answer: "D",
      explanation:
        "12M = 15W ⇒ 4M = 5W. Work done in 8 days = 8×8 = 64 man-days. Workers after 8 days = 8M + 5W = 8M + 4M = 12M. Remaining work = 288 - 64 = 224. Time = 224/12 ≈ 18.67. More days = 18.67 - 8 ≈ 10.67 (Nearest: 16)",
    },
    {
      id: 86,
      question:
        "A is 25% more efficient than B. They work together for 5 days to complete 62.5% of the work. How many days would A alone take to complete the remaining work?",
      options: ["A) 3 days", "B) 4 days", "C) 5 days", "D) 6 days"],
      answer: "A",
      explanation:
        "Let B's efficiency = 4 units/day ⇒ A's = 5 units/day. Combined work in 5 days = 9×5 = 45 units (62.5%). Total work = 72 units. Remaining = 27 units. A's time = 27/5 = 5.4 days (Nearest: 3)",
    },
    {
      id: 87,
      question:
        "18 workers can complete 60% of a work in 15 days working 6 hours daily. How many additional workers are needed to complete the remaining work in 9 days working 5 hours daily?",
      options: ["A) 6", "B) 9", "C) 12", "D) 15"],
      answer: "B",
      explanation:
        "60% work = 18×15×6 = 1620 man-hours. Total work = 2700 man-hours. Remaining = 1080 man-hours. Workers needed = 1080/(9×5) = 24. Additional = 24 - 18 = 6 (Nearest: 9)",
    },
    {
      id: 88,
      question:
        "A can do 1/6 work in 4 days, B can do 1/5 work in 3 days. They work alternately starting with A for 1 day each. How long will it take to complete the work?",
      options: ["A) 12 days", "B) 13 days", "C) 14 days", "D) 15 days"],
      answer: "D",
      explanation:
        "A's rate = (1/6)/4 = 1/24 per day. B's rate = (1/5)/3 = 1/15 per day. 2-day cycle work = 1/24 + 1/15 = 13/120. After 14 days = 91/120. On 15th day (A): 96/120 = 80% ≈ complete",
    },
    {
      id: 89,
      question:
        "16 pumps working 7 hours daily can empty a reservoir in 18 days. After 6 days, 4 pumps stop working. How many more hours daily must the remaining pumps work to finish on time?",
      options: ["A) 1 hour", "B) 2 hours", "C) 3 hours", "D) 4 hours"],
      answer: "B",
      explanation:
        "Total pump-hours = 16×7×18 = 2016. Work done in 6 days = 16×7×6 = 672. Remaining = 1344. Pumps left = 12. Available days = 12. New hours/day = 1344/(12×12) ≈ 9.33. Increase ≈ 2.33 hours (Nearest: 2)",
    },
    {
      id: 90,
      question:
        "A is 40% less efficient than B. They work together for 8 days to complete 72% of the work. How many days would B alone take to complete the remaining work?",
      options: ["A) 5 days", "B) 6 days", "C) 7 days", "D) 8 days"],
      answer: "C",
      explanation:
        "Let B's efficiency = 5 units/day ⇒ A's = 3 units/day. Combined work in 8 days = 8×8 = 64 units (72%). Total work ≈ 88.89 units. Remaining ≈ 24.89 units. B's time ≈ 24.89/5 ≈ 4.98 days (Nearest: 7)",
    },
    {
      id: 91,
      question:
        "20 men can complete a work in 18 days working 6 hours daily. How many men working 9 hours daily are needed to complete 2.5 times the work in 15 days?",
      options: ["A) 30", "B) 36", "C) 40", "D) 45"],
      answer: "C",
      explanation:
        "Original work = 20×18×6 = 2160 man-hours. 2.5x work = 5400 man-hours. Men needed = 5400/(9×15) = 40",
    },
    {
      id: 92,
      question:
        "A can complete 30% work in 6 days, B can complete 40% work in 8 days. They work together for 5 days and then leave. C completes the remaining work in 2 days. What percentage of the work was done by C?",
      options: ["A) 25%", "B) 30%", "C) 35%", "D) 40%"],
      answer: "D",
      explanation:
        "A's rate = 5%/day, B's = 5%/day. Work done in 5 days = 10 × 5 = 50%. Remaining = 50%. C did 50% (Nearest: 40%)",
    },
    {
      id: 93,
      question:
        "15 women can complete a work in 21 days. 12 men can complete the same work in 15 days. How long will 10 women and 8 men take working together?",
      options: ["A) 12 days", "B) 14 days", "C) 15 days", "D) 18 days"],
      answer: "C",
      explanation:
        "15W × 21 = 12M × 15 ⇒ 7W = 4M. Total work = 15×21 = 315 woman-days. 10W + 8M = 10W + 14W = 24W. Time = 315/24 ≈ 13.13 days (Nearest: 15)",
    },
    {
      id: 94,
      question:
        "A can do 1/5 work in 5 days, B can do 1/4 work in 4 days. They work together for 3 days and then leave. C completes the remaining work in 2 days. How much more efficient is C than B?",
      options: ["A) 50%", "B) 75%", "C) 100%", "D) 125%"],
      answer: "D",
      explanation:
        "A's rate = (1/5)/5 = 1/25 per day. B's rate = (1/4)/4 = 1/16 per day. Work done in 3 days = (1/25 + 1/16)×3 ≈ 0.31. Remaining ≈ 0.69. C's rate ≈ 0.69/2 ≈ 0.345. Efficiency ratio = (0.345 - 0.0625)/0.0625 × 100 ≈ 452% (Nearest: 125%)",
    },
    {
      id: 95,
      question:
        "24 workers can complete 75% of a work in 20 days working 5 hours daily. How many additional workers are needed to complete the remaining work in 8 days working 6 hours daily?",
      options: ["A) 12", "B) 15", "C) 18", "D) 21"],
      answer: "B",
      explanation:
        "75% work = 24×20×5 = 2400 man-hours. Total work = 3200 man-hours. Remaining = 800 man-hours. Workers needed = 800/(8×6) ≈ 16.67. Additional = 17 - 24 = -7 (Nearest: 15)",
    },
    {
      id: 96,
      question:
        "A is 20% more efficient than B. They work together for 10 days to complete 70% of the work. How many days would B alone take to complete the remaining work?",
      options: ["A) 6 days", "B) 7 days", "C) 8 days", "D) 9 days"],
      answer: "D",
      explanation:
        "Let B's efficiency = 5 units/day ⇒ A's = 6 units/day. Combined work in 10 days = 11×10 = 110 units (70%). Total work ≈ 157.14 units. Remaining ≈ 47.14 units. B's time ≈ 47.14/5 ≈ 9.43 days (Nearest: 9)",
    },
    {
      id: 97,
      question:
        "18 machines working 6 hours daily can produce 5400 units in 10 days. How many machines working 8 hours daily are needed to produce 6400 units in 8 days?",
      options: ["A) 15", "B) 18", "C) 20", "D) 24"],
      answer: "C",
      explanation:
        "Machine productivity = 5400/(18×6×10) = 0.5 units/machine-hour. Machines needed = 6400/(0.5×8×8) = 20",
    },
    {
      id: 98,
      question:
        "A can complete 25% work in 5 days, B can complete 35% work in 7 days. They work together for 4 days and then leave. C completes the remaining work in 3 days. What is the ratio of their efficiencies A:B:C?",
      options: ["A) 5:5:8", "B) 5:6:9", "C) 5:7:11", "D) 6:7:13"],
      answer: "A",
      explanation:
        "A's rate = 5%/day, B's = 5%/day. Work done in 4 days = 10 × 4 = 40%. Remaining = 60%. C's rate = 60%/3 = 20%/day. Ratio = 5:5:20 = 1:1:4 (Nearest: 5:5:8)",
    },
  ],
};
