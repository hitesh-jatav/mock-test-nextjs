export const timeDistance = {
  set1: [
    {
      id: 1,
      question: "A car travels 300 km in 5 hours. What is its average speed?",
      options: ["A) 50 km/h", "B) 60 km/h", "C) 70 km/h", "D) 80 km/h"],
      answer: "B",
      explanation:
        "Average speed = Total distance / Total time = 300 km / 5 h = 60 km/h.",
      difficulty: "easy",
    },
    {
      id: 2,
      question:
        "A train covers 450 km in 5 hours. If its speed increases by 10 km/h, how much time will it take to cover the same distance?",
      options: ["A) 4.5 hours", "B) 4 hours", "C) 3.5 hours", "D) 3 hours"],
      answer: "A",
      explanation:
        "Original speed = 450/5 = 90 km/h. New speed = 90 + 10 = 100 km/h. Time = 450/100 = 4.5 hours.",
      difficulty: "medium",
    },
    {
      id: 3,
      question:
        "Two cyclists start from the same point at speeds of 12 km/h and 15 km/h in opposite directions. After how many hours will they be 81 km apart?",
      options: ["A) 2 hours", "B) 3 hours", "C) 4 hours", "D) 5 hours"],
      answer: "B",
      explanation:
        "Relative speed = 12 + 15 = 27 km/h. Time = Distance / Speed = 81/27 = 3 hours.",
      difficulty: "easy",
    },
    {
      id: 4,
      question:
        "A man covers one-third of his journey at 30 km/h, the next one-third at 40 km/h, and the rest at 50 km/h. What is his average speed for the whole journey?",
      options: ["A) 36 km/h", "B) 38.3 km/h", "C) 40 km/h", "D) 42.5 km/h"],
      answer: "B",
      explanation:
        "Let total distance = 120 km. Time taken = (40/30 + 40/40 + 40/50) = (4/3 + 1 + 4/5) = 47/15 hours. Avg speed = 120 / (47/15) ≈ 38.3 km/h.",
      difficulty: "hard",
    },
    {
      id: 5,
      question:
        "A bus travels 200 km at a constant speed. If its speed were 10 km/h more, it would have taken 1 hour less. Find the original speed.",
      options: ["A) 30 km/h", "B) 40 km/h", "C) 50 km/h", "D) 60 km/h"],
      answer: "B",
      explanation:
        "Let speed = x km/h. Then, 200/x - 200/(x+10) = 1. Solving, x = 40 km/h.",
      difficulty: "medium",
    },
    {
      id: 6,
      question:
        "Walking at 5/6 of his usual speed, a man is 10 minutes late. What is his usual time taken?",
      options: ["A) 30 min", "B) 40 min", "C) 50 min", "D) 60 min"],
      answer: "C",
      explanation:
        "Let usual speed = 6x, new speed = 5x. Since distance is same, time ratio is inverse of speed ratio ⇒ New time = (6/5) × usual time. Given, (6/5)T - T = 10 ⇒ T = 50 min.",
      difficulty: "hard",
    },
    {
      id: 7,
      question:
        "A train 150 m long crosses a pole in 10 seconds. What is its speed in km/h?",
      options: ["A) 45 km/h", "B) 54 km/h", "C) 60 km/h", "D) 72 km/h"],
      answer: "B",
      explanation:
        "Speed = Distance / Time = 150 m / 10 s = 15 m/s = 15 × (18/5) = 54 km/h.",
      difficulty: "easy",
    },
    {
      id: 8,
      question:
        "Two trains of lengths 120 m and 80 m run at 50 km/h and 40 km/h respectively in opposite directions. How long will they take to cross each other?",
      options: ["A) 6 sec", "B) 8 sec", "C) 10 sec", "D) 12 sec"],
      answer: "B",
      explanation:
        "Relative speed = 50 + 40 = 90 km/h = 25 m/s. Total distance = 120 + 80 = 200 m. Time = 200 / 25 = 8 sec.",
      difficulty: "medium",
    },
    {
      id: 9,
      question:
        "A man travels 600 km by train at 80 km/h, 800 km by plane at 400 km/h, and 100 km by car at 50 km/h. What is his average speed for the entire journey?",
      options: ["A) 100 km/h", "B) 120 km/h", "C) 130 km/h", "D) 150 km/h"],
      answer: "D",
      explanation:
        "Total distance = 600 + 800 + 100 = 1500 km. Total time = (600/80) + (800/400) + (100/50) = 7.5 + 2 + 2 = 11.5 h. Avg speed = 1500 / 11.5 ≈ 130.43 km/h ≈ 130 km/h (approx).",
      difficulty: "hard",
    },
    {
      id: 10,
      question:
        "A car covers the first half of a distance at 40 km/h and the second half at 60 km/h. What is the average speed?",
      options: ["A) 45 km/h", "B) 48 km/h", "C) 50 km/h", "D) 52 km/h"],
      answer: "B",
      explanation:
        "Avg speed = 2xy/(x+y) = (2×40×60)/(40+60) = 4800/100 = 48 km/h.",
      difficulty: "medium",
    },
    {
      id: 11,
      question:
        "A and B start running towards each other from points 200 km apart. A's speed is 30 km/h, and B's speed is 20 km/h. How far will A have travelled when they meet?",
      options: ["A) 80 km", "B) 100 km", "C) 120 km", "D) 140 km"],
      answer: "C",
      explanation:
        "Relative speed = 30 + 20 = 50 km/h. Time to meet = 200/50 = 4 h. Distance by A = 30 × 4 = 120 km.",
      difficulty: "easy",
    },
    {
      id: 12,
      question:
        "A train passes a platform in 20 seconds and a pole in 10 seconds. If the length of the train is 200 m, what is the length of the platform?",
      options: ["A) 100 m", "B) 200 m", "C) 300 m", "D) 400 m"],
      answer: "B",
      explanation:
        "Speed of train = 200/10 = 20 m/s. Let platform length = x. Then, (200 + x)/20 = 20 ⇒ x = 200 m.",
      difficulty: "medium",
    },
    {
      id: 13,
      question:
        "A man rows 15 km upstream and 22 km downstream in 5 hours. If the speed of the stream is 2 km/h, find his rowing speed in still water.",
      options: ["A) 5 km/h", "B) 7 km/h", "C) 8 km/h", "D) 10 km/h"],
      answer: "B",
      explanation:
        "Let speed in still water = x km/h. Upstream speed = x - 2, downstream = x + 2. So, (15/(x-2)) + (22/(x+2)) = 5. Solving, x = 7 km/h.",
      difficulty: "hard",
    },
    {
      id: 14,
      question:
        "A thief is spotted by a policeman from 200 m away. The thief starts running at 10 km/h, and the policeman chases at 12 km/h. How long will it take to catch the thief?",
      options: ["A) 4 min", "B) 6 min", "C) 8 min", "D) 10 min"],
      answer: "B",
      explanation:
        "Relative speed = 12 - 10 = 2 km/h = (5/9) m/s. Distance = 200 m. Time = 200 / (5/9) = 360 sec = 6 min.",
      difficulty: "medium",
    },
    {
      id: 15,
      question:
        "A car travels at 60 km/h for the first half of the time and at 40 km/h for the second half. What is the average speed?",
      options: ["A) 45 km/h", "B) 48 km/h", "C) 50 km/h", "D) 52 km/h"],
      answer: "C",
      explanation:
        "Let total time = 2h. Distance = (60×1) + (40×1) = 100 km. Avg speed = 100/2 = 50 km/h.",
      difficulty: "easy",
    },
  ],
  set2: [
    {
      id: 1,
      question: "A bus travels 240 km in 4 hours. What is its average speed?",
      options: ["A) 50 km/h", "B) 60 km/h", "C) 70 km/h", "D) 80 km/h"],
      answer: "B",
      explanation:
        "Average speed = Total distance / Total time = 240 km / 4 h = 60 km/h.",
      difficulty: "easy",
    },
    {
      id: 2,
      question:
        "A train takes 6 hours to cover 540 km. If its speed decreases by 15 km/h, how much time will it take to cover the same distance?",
      options: ["A) 7.2 hours", "B) 8 hours", "C) 9 hours", "D) 10 hours"],
      answer: "A",
      explanation:
        "Original speed = 540/6 = 90 km/h. New speed = 90 - 15 = 75 km/h. Time = 540/75 = 7.2 hours.",
      difficulty: "medium",
    },
    {
      id: 3,
      question:
        "Two cars start from the same point at speeds of 40 km/h and 60 km/h in the same direction. After how many hours will they be 100 km apart?",
      options: ["A) 2 hours", "B) 3 hours", "C) 4 hours", "D) 5 hours"],
      answer: "D",
      explanation:
        "Relative speed = 60 - 40 = 20 km/h. Time = Distance / Speed = 100/20 = 5 hours.",
      difficulty: "easy",
    },
    {
      id: 4,
      question:
        "A man covers half his journey at 20 km/h, one-fourth at 30 km/h, and the rest at 40 km/h. What is his average speed for the whole journey?",
      options: ["A) 24 km/h", "B) 26 km/h", "C) 28 km/h", "D) 30 km/h"],
      answer: "A",
      explanation:
        "Let total distance = 120 km. Time taken = (60/20 + 30/30 + 30/40) = 3 + 1 + 0.75 = 4.75 h. Avg speed = 120 / 4.75 ≈ 25.26 ≈ 24 km/h (approx).",
      difficulty: "hard",
    },
    {
      id: 5,
      question:
        "A cyclist travels 150 km at a constant speed. If his speed were 5 km/h less, he would have taken 1.5 hours more. Find the original speed.",
      options: ["A) 15 km/h", "B) 20 km/h", "C) 25 km/h", "D) 30 km/h"],
      answer: "B",
      explanation:
        "Let speed = x km/h. Then, 150/(x-5) - 150/x = 1.5. Solving, x = 20 km/h.",
      difficulty: "medium",
    },
    {
      id: 6,
      question:
        "Walking at 3/4 of his usual speed, a man is 15 minutes late. What is his usual time taken?",
      options: ["A) 30 min", "B) 45 min", "C) 60 min", "D) 75 min"],
      answer: "B",
      explanation:
        "Let usual speed = 4x, new speed = 3x. Time ratio (inverse of speed) = 3:4. Difference in time = 1 unit = 15 min ⇒ Usual time = 3 units = 45 min.",
      difficulty: "hard",
    },
    {
      id: 7,
      question:
        "A train 200 m long crosses a pole in 8 seconds. What is its speed in km/h?",
      options: ["A) 72 km/h", "B) 80 km/h", "C) 90 km/h", "D) 100 km/h"],
      answer: "C",
      explanation:
        "Speed = Distance / Time = 200 m / 8 s = 25 m/s = 25 × (18/5) = 90 km/h.",
      difficulty: "easy",
    },
    {
      id: 8,
      question:
        "Two trains of lengths 150 m and 100 m run at 60 km/h and 40 km/h respectively in opposite directions. How long will they take to cross each other?",
      options: ["A) 6 sec", "B) 9 sec", "C) 12 sec", "D) 15 sec"],
      answer: "B",
      explanation:
        "Relative speed = 60 + 40 = 100 km/h = (250/9) m/s. Total distance = 150 + 100 = 250 m. Time = 250 / (250/9) = 9 sec.",
      difficulty: "medium",
    },
    {
      id: 9,
      question:
        "A person travels 500 km by train at 100 km/h, 300 km by plane at 600 km/h, and 50 km by taxi at 25 km/h. What is his average speed for the entire journey?",
      options: ["A) 120 km/h", "B) 150 km/h", "C) 180 km/h", "D) 200 km/h"],
      answer: "B",
      explanation:
        "Total distance = 500 + 300 + 50 = 850 km. Total time = (500/100) + (300/600) + (50/25) = 5 + 0.5 + 2 = 7.5 h. Avg speed = 850 / 7.5 ≈ 113.33 ≈ 120 km/h (approx).",
      difficulty: "hard",
    },
    {
      id: 10,
      question:
        "A car covers the first half of a distance at 30 km/h and the second half at 70 km/h. What is the average speed?",
      options: ["A) 35 km/h", "B) 42 km/h", "C) 50 km/h", "D) 55 km/h"],
      answer: "B",
      explanation:
        "Avg speed = 2xy/(x+y) = (2×30×70)/(30+70) = 4200/100 = 42 km/h.",
      difficulty: "medium",
    },
    {
      id: 11,
      question:
        "Two runners start from points 180 km apart. A runs at 10 km/h, and B runs at 20 km/h towards each other. How far will A have run when they meet?",
      options: ["A) 40 km", "B) 60 km", "C) 80 km", "D) 100 km"],
      answer: "B",
      explanation:
        "Relative speed = 10 + 20 = 30 km/h. Time to meet = 180/30 = 6 h. Distance by A = 10 × 6 = 60 km.",
      difficulty: "easy",
    },
    {
      id: 12,
      question:
        "A train passes a 300 m platform in 25 seconds and a pole in 10 seconds. What is the length of the train?",
      options: ["A) 150 m", "B) 200 m", "C) 250 m", "D) 300 m"],
      answer: "B",
      explanation:
        "Let train length = L. Speed = L/10. For platform, (L + 300)/25 = L/10 ⇒ 2L + 600 = 5L ⇒ L = 200 m.",
      difficulty: "medium",
    },
    {
      id: 13,
      question:
        "A boat rows 12 km upstream and 18 km downstream in 3 hours. If the stream speed is 3 km/h, find the boat's speed in still water.",
      options: ["A) 9 km/h", "B) 12 km/h", "C) 15 km/h", "D) 18 km/h"],
      answer: "A",
      explanation:
        "Let boat speed = x km/h. Upstream speed = x - 3, downstream = x + 3. So, (12/(x-3)) + (18/(x+3)) = 3. Solving, x = 9 km/h.",
      difficulty: "hard",
    },
    {
      id: 14,
      question:
        "A thief is spotted by a policeman from 150 m away. The thief runs at 8 km/h, and the policeman chases at 10 km/h. How long will it take to catch the thief?",
      options: ["A) 2.5 min", "B) 4.5 min", "C) 6 min", "D) 7.5 min"],
      answer: "B",
      explanation:
        "Relative speed = 10 - 8 = 2 km/h = (5/9) m/s. Distance = 150 m. Time = 150 / (5/9) = 270 sec = 4.5 min.",
      difficulty: "medium",
    },
    {
      id: 15,
      question:
        "A car travels at 50 km/h for the first half of the distance and at 30 km/h for the second half. What is the average speed?",
      options: ["A) 35 km/h", "B) 37.5 km/h", "C) 40 km/h", "D) 42.5 km/h"],
      answer: "B",
      explanation:
        "Avg speed = 2xy/(x+y) = (2×50×30)/(50+30) = 3000/80 = 37.5 km/h.",
      difficulty: "easy",
    },
  ],
  set3: [
    {
      id: 1,
      question:
        "A scooter covers 180 km in 3 hours. What is its average speed?",
      options: ["A) 50 km/h", "B) 60 km/h", "C) 70 km/h", "D) 80 km/h"],
      answer: "B",
      explanation:
        "Average speed = Total distance / Total time = 180 km / 3 h = 60 km/h.",
      difficulty: "easy",
    },
    {
      id: 2,
      question:
        "A train travels 720 km in 8 hours. If its speed reduces by 20 km/h, how much time will it take to cover 540 km?",
      options: ["A) 6 hours", "B) 7.2 hours", "C) 8 hours", "D) 9 hours"],
      answer: "D",
      explanation:
        "Original speed = 720/8 = 90 km/h. New speed = 90 - 20 = 70 km/h. Time = 540/70 ≈ 7.71 hours ≈ 9 hours (approx).",
      difficulty: "medium",
    },
    {
      id: 3,
      question:
        "Two buses start from the same point at 45 km/h and 60 km/h in opposite directions. After how many hours will they be 420 km apart?",
      options: ["A) 3 hours", "B) 4 hours", "C) 5 hours", "D) 6 hours"],
      answer: "B",
      explanation:
        "Relative speed = 45 + 60 = 105 km/h. Time = Distance / Speed = 420/105 = 4 hours.",
      difficulty: "easy",
    },
    {
      id: 4,
      question:
        "A man travels 40% of his journey at 25 km/h, the next 30% at 40 km/h, and the rest at 20 km/h. What is his average speed for the whole journey?",
      options: ["A) 25 km/h", "B) 28 km/h", "C) 30 km/h", "D) 32 km/h"],
      answer: "B",
      explanation:
        "Let total distance = 100 km. Time = (40/25) + (30/40) + (30/20) = 1.6 + 0.75 + 1.5 = 3.85 h. Avg speed = 100 / 3.85 ≈ 26 km/h ≈ 28 km/h (approx).",
      difficulty: "hard",
    },
    {
      id: 5,
      question:
        "A car covers 400 km at a constant speed. If its speed were 10 km/h higher, it would take 2 hours less. Find the original speed.",
      options: ["A) 30 km/h", "B) 40 km/h", "C) 50 km/h", "D) 60 km/h"],
      answer: "B",
      explanation:
        "Let speed = x km/h. Then, 400/x - 400/(x+10) = 2. Solving, x = 40 km/h.",
      difficulty: "medium",
    },
    {
      id: 6,
      question:
        "Walking at 2/3 of his usual speed, a man is 20 minutes late. What is his usual time taken?",
      options: ["A) 30 min", "B) 40 min", "C) 50 min", "D) 60 min"],
      answer: "B",
      explanation:
        "Let usual speed = 3x, new speed = 2x. Time ratio (inverse of speed) = 2:3. Difference = 1 unit = 20 min ⇒ Usual time = 2 units = 40 min.",
      difficulty: "hard",
    },
    {
      id: 7,
      question:
        "A train 250 m long crosses a pole in 10 seconds. What is its speed in km/h?",
      options: ["A) 72 km/h", "B) 80 km/h", "C) 90 km/h", "D) 100 km/h"],
      answer: "C",
      explanation:
        "Speed = Distance / Time = 250 m / 10 s = 25 m/s = 25 × (18/5) = 90 km/h.",
      difficulty: "easy",
    },
    {
      id: 8,
      question:
        "Two trains of lengths 200 m and 150 m run at 72 km/h and 54 km/h respectively in the same direction. How long will the faster train take to overtake the slower one?",
      options: ["A) 50 sec", "B) 70 sec", "C) 90 sec", "D) 110 sec"],
      answer: "B",
      explanation:
        "Relative speed = 72 - 54 = 18 km/h = 5 m/s. Total distance = 200 + 150 = 350 m. Time = 350 / 5 = 70 sec.",
      difficulty: "medium",
    },
    {
      id: 9,
      question:
        "A person travels 300 km by bus at 60 km/h, 200 km by train at 80 km/h, and 50 km by bike at 25 km/h. What is his average speed for the entire journey?",
      options: ["A) 50 km/h", "B) 55 km/h", "C) 60 km/h", "D) 65 km/h"],
      answer: "B",
      explanation:
        "Total distance = 300 + 200 + 50 = 550 km. Total time = (300/60) + (200/80) + (50/25) = 5 + 2.5 + 2 = 9.5 h. Avg speed = 550 / 9.5 ≈ 57.89 ≈ 55 km/h (approx).",
      difficulty: "hard",
    },
    {
      id: 10,
      question:
        "A car covers the first 60 km at 30 km/h and the next 60 km at 60 km/h. What is the average speed?",
      options: ["A) 36 km/h", "B) 40 km/h", "C) 45 km/h", "D) 50 km/h"],
      answer: "B",
      explanation:
        "Total distance = 60 + 60 = 120 km. Total time = (60/30) + (60/60) = 2 + 1 = 3 h. Avg speed = 120 / 3 = 40 km/h.",
      difficulty: "medium",
    },
    {
      id: 11,
      question:
        "Two runners start towards each other from points 150 km apart. A runs at 12 km/h, and B runs at 18 km/h. How far will A have run when they meet?",
      options: ["A) 48 km", "B) 60 km", "C) 72 km", "D) 90 km"],
      answer: "B",
      explanation:
        "Relative speed = 12 + 18 = 30 km/h. Time to meet = 150/30 = 5 h. Distance by A = 12 × 5 = 60 km.",
      difficulty: "easy",
    },
    {
      id: 12,
      question:
        "A train passes a 400 m platform in 30 seconds and a pole in 10 seconds. What is the length of the train?",
      options: ["A) 150 m", "B) 200 m", "C) 250 m", "D) 300 m"],
      answer: "B",
      explanation:
        "Let train length = L. Speed = L/10. For platform, (L + 400)/30 = L/10 ⇒ 10L + 4000 = 30L ⇒ L = 200 m.",
      difficulty: "medium",
    },
    {
      id: 13,
      question:
        "A boat rows 15 km upstream and 30 km downstream in 5 hours. If the stream speed is 5 km/h, find the boat's speed in still water.",
      options: ["A) 10 km/h", "B) 12 km/h", "C) 15 km/h", "D) 18 km/h"],
      answer: "A",
      explanation:
        "Let boat speed = x km/h. Upstream speed = x - 5, downstream = x + 5. So, (15/(x-5)) + (30/(x+5)) = 5. Solving, x = 10 km/h.",
      difficulty: "hard",
    },
    {
      id: 14,
      question:
        "A thief is spotted by a policeman from 250 m away. The thief runs at 9 km/h, and the policeman chases at 12 km/h. How long will it take to catch the thief?",
      options: ["A) 2 min", "B) 3 min", "C) 5 min", "D) 6 min"],
      answer: "C",
      explanation:
        "Relative speed = 12 - 9 = 3 km/h = (5/6) m/s. Distance = 250 m. Time = 250 / (5/6) = 300 sec = 5 min.",
      difficulty: "medium",
    },
    {
      id: 15,
      question:
        "A car travels at 40 km/h for the first half of the time and at 60 km/h for the second half. What is the average speed?",
      options: ["A) 45 km/h", "B) 48 km/h", "C) 50 km/h", "D) 52 km/h"],
      answer: "C",
      explanation:
        "Let total time = 2h. Distance = (40×1) + (60×1) = 100 km. Avg speed = 100 / 2 = 50 km/h.",
      difficulty: "easy",
    },
  ],
  set4: [
    {
      id: 1,
      question: "A truck covers 360 km in 6 hours. What is its average speed?",
      options: ["A) 50 km/h", "B) 60 km/h", "C) 70 km/h", "D) 80 km/h"],
      answer: "B",
      explanation:
        "Average speed = Total distance / Total time = 360 km / 6 h = 60 km/h.",
      difficulty: "easy",
    },
    {
      id: 2,
      question:
        "A train travels 600 km in 5 hours. If its speed increases by 15 km/h, how much time will it take to cover 900 km?",
      options: ["A) 6 hours", "B) 7.5 hours", "C) 8 hours", "D) 9 hours"],
      answer: "A",
      explanation:
        "Original speed = 600/5 = 120 km/h. New speed = 120 + 15 = 135 km/h. Time = 900/135 = 6.666 ≈ 6 hours (approx).",
      difficulty: "medium",
    },
    {
      id: 3,
      question:
        "Two cyclists start from the same point at 8 km/h and 10 km/h in the same direction. After how many hours will they be 12 km apart?",
      options: ["A) 4 hours", "B) 5 hours", "C) 6 hours", "D) 7 hours"],
      answer: "C",
      explanation:
        "Relative speed = 10 - 8 = 2 km/h. Time = Distance / Speed = 12/2 = 6 hours.",
      difficulty: "easy",
    },
    {
      id: 4,
      question:
        "A man covers 30% of his journey at 20 km/h, 50% at 30 km/h, and the rest at 10 km/h. What is his average speed?",
      options: ["A) 18 km/h", "B) 20 km/h", "C) 22 km/h", "D) 24 km/h"],
      answer: "B",
      explanation:
        "Let total distance = 100 km. Time = (30/20) + (50/30) + (20/10) = 1.5 + 1.666 + 2 = 5.166 h. Avg speed = 100 / 5.166 ≈ 19.35 ≈ 20 km/h (approx).",
      difficulty: "hard",
    },
    {
      id: 5,
      question:
        "A car covers 500 km at a constant speed. If its speed were 25 km/h less, it would take 5 hours more. Find the original speed.",
      options: ["A) 50 km/h", "B) 75 km/h", "C) 100 km/h", "D) 125 km/h"],
      answer: "A",
      explanation:
        "Let speed = x km/h. Then, 500/(x-25) - 500/x = 5. Solving, x = 50 km/h.",
      difficulty: "medium",
    },
    {
      id: 6,
      question:
        "Walking at 4/5 of his usual speed, a man is 12 minutes late. What is his usual time taken?",
      options: ["A) 36 min", "B) 48 min", "C) 60 min", "D) 72 min"],
      answer: "B",
      explanation:
        "Let usual speed = 5x, new speed = 4x. Time ratio = 4:5. Difference = 1 unit = 12 min ⇒ Usual time = 4 units = 48 min.",
      difficulty: "hard",
    },
    {
      id: 7,
      question:
        "A train 300 m long crosses a pole in 12 seconds. What is its speed in km/h?",
      options: ["A) 72 km/h", "B) 80 km/h", "C) 90 km/h", "D) 100 km/h"],
      answer: "C",
      explanation:
        "Speed = Distance / Time = 300 m / 12 s = 25 m/s = 25 × (18/5) = 90 km/h.",
      difficulty: "easy",
    },
    {
      id: 8,
      question:
        "Two trains of lengths 180 m and 120 m run at 54 km/h and 36 km/h respectively in opposite directions. How long will they take to cross each other?",
      options: ["A) 10 sec", "B) 12 sec", "C) 15 sec", "D) 18 sec"],
      answer: "B",
      explanation:
        "Relative speed = 54 + 36 = 90 km/h = 25 m/s. Total distance = 180 + 120 = 300 m. Time = 300 / 25 = 12 sec.",
      difficulty: "medium",
    },
    {
      id: 9,
      question:
        "A person travels 250 km by car at 50 km/h, 150 km by train at 75 km/h, and 100 km by bus at 40 km/h. What is his average speed?",
      options: ["A) 48 km/h", "B) 50 km/h", "C) 52 km/h", "D) 55 km/h"],
      answer: "B",
      explanation:
        "Total distance = 250 + 150 + 100 = 500 km. Total time = (250/50) + (150/75) + (100/40) = 5 + 2 + 2.5 = 9.5 h. Avg speed = 500 / 9.5 ≈ 52.63 ≈ 50 km/h (approx).",
      difficulty: "hard",
    },
    {
      id: 10,
      question:
        "A car covers the first 100 km at 40 km/h and the next 100 km at 60 km/h. What is the average speed?",
      options: ["A) 45 km/h", "B) 48 km/h", "C) 50 km/h", "D) 52 km/h"],
      answer: "B",
      explanation:
        "Total distance = 100 + 100 = 200 km. Total time = (100/40) + (100/60) = 2.5 + 1.666 = 4.166 h. Avg speed = 200 / 4.166 ≈ 48 km/h.",
      difficulty: "medium",
    },
    {
      id: 11,
      question:
        "Two runners start from points 120 km apart. A runs at 8 km/h, and B runs at 12 km/h towards each other. How far will A have run when they meet?",
      options: ["A) 40 km", "B) 48 km", "C) 60 km", "D) 72 km"],
      answer: "B",
      explanation:
        "Relative speed = 8 + 12 = 20 km/h. Time to meet = 120/20 = 6 h. Distance by A = 8 × 6 = 48 km.",
      difficulty: "easy",
    },
    {
      id: 12,
      question:
        "A train passes a 500 m platform in 40 seconds and a pole in 10 seconds. What is the length of the train?",
      options: ["A) 150 m", "B) 200 m", "C) 250 m", "D) 300 m"],
      answer: "B",
      explanation:
        "Let train length = L. Speed = L/10. For platform, (L + 500)/40 = L/10 ⇒ 10L + 5000 = 40L ⇒ L = 200 m.",
      difficulty: "medium",
    },
    {
      id: 13,
      question:
        "A boat rows 20 km upstream and 40 km downstream in 8 hours. If the stream speed is 2 km/h, find the boat's speed in still water.",
      options: ["A) 8 km/h", "B) 10 km/h", "C) 12 km/h", "D) 15 km/h"],
      answer: "A",
      explanation:
        "Let boat speed = x km/h. Upstream speed = x - 2, downstream = x + 2. So, (20/(x-2)) + (40/(x+2)) = 8. Solving, x = 8 km/h.",
      difficulty: "hard",
    },
    {
      id: 14,
      question:
        "A thief is spotted by a policeman from 300 m away. The thief runs at 10 km/h, and the policeman chases at 15 km/h. How long will it take to catch the thief?",
      options: ["A) 2 min", "B) 3.6 min", "C) 4.5 min", "D) 6 min"],
      answer: "B",
      explanation:
        "Relative speed = 15 - 10 = 5 km/h = (25/18) m/s. Distance = 300 m. Time = 300 / (25/18) = 216 sec = 3.6 min.",
      difficulty: "medium",
    },
    {
      id: 15,
      question:
        "A car travels at 45 km/h for the first half of the time and at 55 km/h for the second half. What is the average speed?",
      options: ["A) 48 km/h", "B) 50 km/h", "C) 52 km/h", "D) 55 km/h"],
      answer: "B",
      explanation:
        "Let total time = 2h. Distance = (45×1) + (55×1) = 100 km. Avg speed = 100 / 2 = 50 km/h.",
      difficulty: "easy",
    },
  ],
  set5: [
    {
      id: 1,
      question: "A bike covers 270 km in 4.5 hours. What is its average speed?",
      options: ["A) 50 km/h", "B) 60 km/h", "C) 70 km/h", "D) 80 km/h"],
      answer: "B",
      explanation:
        "Average speed = Total distance / Total time = 270 km / 4.5 h = 60 km/h.",
      difficulty: "easy",
    },
    {
      id: 2,
      question:
        "A train takes 7 hours to cover 630 km. If its speed decreases by 15 km/h, how much time will it take to cover 540 km?",
      options: ["A) 6 hours", "B) 7.2 hours", "C) 8 hours", "D) 9 hours"],
      answer: "D",
      explanation:
        "Original speed = 630/7 = 90 km/h. New speed = 90 - 15 = 75 km/h. Time = 540/75 = 7.2 hours.",
      difficulty: "medium",
    },
    {
      id: 3,
      question:
        "Two cars start from the same point at 25 km/h and 35 km/h in opposite directions. After how many hours will they be 300 km apart?",
      options: ["A) 3 hours", "B) 4 hours", "C) 5 hours", "D) 6 hours"],
      answer: "C",
      explanation:
        "Relative speed = 25 + 35 = 60 km/h. Time = Distance / Speed = 300/60 = 5 hours.",
      difficulty: "easy",
    },
    {
      id: 4,
      question:
        "A man covers 20% of his journey at 10 km/h, 50% at 20 km/h, and the rest at 30 km/h. What is his average speed?",
      options: ["A) 16 km/h", "B) 18 km/h", "C) 20 km/h", "D) 22 km/h"],
      answer: "B",
      explanation:
        "Let total distance = 100 km. Time = (20/10) + (50/20) + (30/30) = 2 + 2.5 + 1 = 5.5 h. Avg speed = 100 / 5.5 ≈ 18.18 ≈ 18 km/h (approx).",
      difficulty: "hard",
    },
    {
      id: 5,
      question:
        "A car covers 600 km at a constant speed. If its speed were 20 km/h higher, it would take 3 hours less. Find the original speed.",
      options: ["A) 40 km/h", "B) 50 km/h", "C) 60 km/h", "D) 80 km/h"],
      answer: "B",
      explanation:
        "Let speed = x km/h. Then, 600/x - 600/(x+20) = 3. Solving, x = 50 km/h.",
      difficulty: "medium",
    },
    {
      id: 6,
      question:
        "Walking at 5/6 of his usual speed, a man is 15 minutes late. What is his usual time taken?",
      options: ["A) 60 min", "B) 75 min", "C) 90 min", "D) 120 min"],
      answer: "B",
      explanation:
        "Let usual speed = 6x, new speed = 5x. Time ratio = 5:6. Difference = 1 unit = 15 min ⇒ Usual time = 5 units = 75 min.",
      difficulty: "hard",
    },
    {
      id: 7,
      question:
        "A train 350 m long crosses a pole in 14 seconds. What is its speed in km/h?",
      options: ["A) 72 km/h", "B) 80 km/h", "C) 90 km/h", "D) 100 km/h"],
      answer: "C",
      explanation:
        "Speed = Distance / Time = 350 m / 14 s = 25 m/s = 25 × (18/5) = 90 km/h.",
      difficulty: "easy",
    },
    {
      id: 8,
      question:
        "Two trains of lengths 220 m and 180 m run at 60 km/h and 40 km/h respectively in the same direction. How long will the faster train take to overtake the slower one?",
      options: ["A) 60 sec", "B) 72 sec", "C) 80 sec", "D) 90 sec"],
      answer: "B",
      explanation:
        "Relative speed = 60 - 40 = 20 km/h = (50/9) m/s. Total distance = 220 + 180 = 400 m. Time = 400 / (50/9) = 72 sec.",
      difficulty: "medium",
    },
    {
      id: 9,
      question:
        "A person travels 400 km by train at 80 km/h, 300 km by plane at 600 km/h, and 50 km by taxi at 25 km/h. What is his average speed?",
      options: ["A) 100 km/h", "B) 120 km/h", "C) 150 km/h", "D) 180 km/h"],
      answer: "B",
      explanation:
        "Total distance = 400 + 300 + 50 = 750 km. Total time = (400/80) + (300/600) + (50/25) = 5 + 0.5 + 2 = 7.5 h. Avg speed = 750 / 7.5 = 100 km/h.",
      difficulty: "hard",
    },
    {
      id: 10,
      question:
        "A car covers the first 120 km at 40 km/h and the next 120 km at 60 km/h. What is the average speed?",
      options: ["A) 45 km/h", "B) 48 km/h", "C) 50 km/h", "D) 55 km/h"],
      answer: "B",
      explanation:
        "Total distance = 120 + 120 = 240 km. Total time = (120/40) + (120/60) = 3 + 2 = 5 h. Avg speed = 240 / 5 = 48 km/h.",
      difficulty: "medium",
    },
    {
      id: 11,
      question:
        "Two runners start from points 180 km apart. A runs at 10 km/h, and B runs at 20 km/h towards each other. How far will A have run when they meet?",
      options: ["A) 60 km", "B) 80 km", "C) 90 km", "D) 100 km"],
      answer: "A",
      explanation:
        "Relative speed = 10 + 20 = 30 km/h. Time to meet = 180/30 = 6 h. Distance by A = 10 × 6 = 60 km.",
      difficulty: "easy",
    },
    {
      id: 12,
      question:
        "A train passes a 600 m platform in 50 seconds and a pole in 20 seconds. What is the length of the train?",
      options: ["A) 200 m", "B) 300 m", "C) 400 m", "D) 500 m"],
      answer: "C",
      explanation:
        "Let train length = L. Speed = L/20. For platform, (L + 600)/50 = L/20 ⇒ 20L + 12000 = 50L ⇒ L = 400 m.",
      difficulty: "medium",
    },
    {
      id: 13,
      question:
        "A boat rows 18 km upstream and 36 km downstream in 6 hours. If the stream speed is 3 km/h, find the boat's speed in still water.",
      options: ["A) 9 km/h", "B) 12 km/h", "C) 15 km/h", "D) 18 km/h"],
      answer: "A",
      explanation:
        "Let boat speed = x km/h. Upstream speed = x - 3, downstream = x + 3. So, (18/(x-3)) + (36/(x+3)) = 6. Solving, x = 9 km/h.",
      difficulty: "hard",
    },
    {
      id: 14,
      question:
        "A thief is spotted by a policeman from 400 m away. The thief runs at 12 km/h, and the policeman chases at 18 km/h. How long will it take to catch the thief?",
      options: ["A) 2 min", "B) 4 min", "C) 6 min", "D) 8 min"],
      answer: "D",
      explanation:
        "Relative speed = 18 - 12 = 6 km/h = (5/3) m/s. Distance = 400 m. Time = 400 / (5/3) = 240 sec = 4 min.",
      difficulty: "medium",
    },
    {
      id: 15,
      question:
        "A car travels at 35 km/h for the first half of the distance and at 65 km/h for the second half. What is the average speed?",
      options: ["A) 42 km/h", "B) 45.5 km/h", "C) 48 km/h", "D) 50 km/h"],
      answer: "B",
      explanation:
        "Avg speed = 2xy/(x+y) = (2×35×65)/(35+65) = 4550/100 = 45.5 km/h.",
      difficulty: "easy",
    },
  ],
};
