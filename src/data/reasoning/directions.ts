export const directionQuestions = {
  set1: [
    {
      id: 1,
      question:
        "Rahul walks 5 km towards East, then turns left and walks 3 km. He then turns right and walks 5 km. In which direction is he from his starting point?",
      options: [
        "A) North-East",
        "B) South-East",
        "C) North-West",
        "D) South-West",
      ],
      answer: "A",
      explanation:
        "Rahul's path forms a right-angled triangle. Final position is northeast of starting point.",
    },
    {
      id: 2,
      question:
        "A girl is facing North. She turns 135° in the clockwise direction and then 90° in the anti-clockwise direction. Which direction is she facing now?",
      options: [
        "A) North-East",
        "B) North-West",
        "C) South-East",
        "D) South-West",
      ],
      answer: "B",
      explanation:
        "135° clockwise from North is South-East. 90° anti-clockwise from South-East is North-East.",
    },
    {
      id: 3,
      question:
        "From point A, Raj walks 10 km South to point B, then turns right and walks 8 km to point C. He then turns right again and walks 10 km to point D. How far is he from point A?",
      options: ["A) 8 km", "B) 10 km", "C) 12 km", "D) 15 km"],
      answer: "A",
      explanation:
        "The path forms a rectangle. Distance between A and D is equal to BC (8 km).",
    },
    {
      id: 4,
      question: "If South-East becomes North, what would North-East become?",
      options: ["A) North", "B) South", "C) East", "D) West"],
      answer: "D",
      explanation:
        "When rotated 135° clockwise, South-East becomes North, so North-East becomes West.",
    },
    {
      id: 5,
      question:
        "A man is facing West. He turns 45° in the clockwise direction and then 180° in the anti-clockwise direction. Which direction is he facing now?",
      options: [
        "A) South-West",
        "B) South-East",
        "C) North-West",
        "D) North-East",
      ],
      answer: "B",
      explanation:
        "45° clockwise from West is North-West. 180° anti-clockwise from North-West is South-East.",
    },
    {
      id: 6,
      question:
        "From his house, Lokesh went 15 km to the North, then turned West and covered 20 km. How far is he from his house?",
      options: ["A) 25 km", "B) 20 km", "C) 15 km", "D) 35 km"],
      answer: "A",
      explanation: "Using Pythagoras theorem: √(15² + 20²) = 25 km",
    },
    {
      id: 7,
      question:
        "Karan walks 10 m towards South. From there, he walks 6 m towards North. Then he walks 3 m towards East. How far and in which direction is he from his original position?",
      options: [
        "A) 5 m South-East",
        "B) 5 m North-East",
        "C) 7 m South-West",
        "D) 7 m North-West",
      ],
      answer: "A",
      explanation:
        "Net South movement = 10 - 6 = 4 m South. With 3 m East, forms right triangle. Distance = √(4² + 3²) = 5 m South-East",
    },
    {
      id: 8,
      question:
        "If you are facing North and turn 270° clockwise, which direction will you be facing?",
      options: ["A) East", "B) West", "C) North", "D) South"],
      answer: "B",
      explanation: "270° clockwise turn from North = 3 right turns = West",
    },
    {
      id: 9,
      question:
        "A person walks 7 km East, then turns South and walks 3 km, then turns West and walks 7 km. Where is he now with respect to his starting point?",
      options: [
        "A) 3 km North",
        "B) 3 km South",
        "C) 10 km East",
        "D) 10 km West",
      ],
      answer: "B",
      explanation:
        "East and West movements cancel out. Only 3 km South movement remains.",
    },
    {
      id: 10,
      question:
        "Mohan starts from point A and walks 5 km East to B, then turns left and walks 5 km to C, then turns left and walks 5 km to D. What is the distance between A and D?",
      options: ["A) 5 km", "B) 7.5 km", "C) 10 km", "D) 15 km"],
      answer: "A",
      explanation:
        "The path forms a square. Distance between A and D is equal to one side (5 km).",
    },
    {
      id: 11,
      question:
        "If South is called East, East is called North, North is called West and West is called South, what will be the direction for 'North-West'?",
      options: [
        "A) South-West",
        "B) South-East",
        "C) North-East",
        "D) West-South",
      ],
      answer: "B",
      explanation:
        "In new system: North becomes West, West becomes South. So North-West becomes West-South = South-East",
    },
    {
      id: 12,
      question:
        "A man walks 1 km towards East, then turns 90° clockwise and walks 2 km, then turns 90° clockwise again and walks 3 km. In which direction is he walking now?",
      options: ["A) East", "B) West", "C) North", "D) South"],
      answer: "B",
      explanation:
        "First East, then South (90° clockwise from East), then West (90° clockwise from South)",
    },
  ],
  set2: [
    {
      id: 13,
      question:
        "A person starts walking from point A towards South. After walking 5 km to point B, he turns right and walks 5 km to point C. He then turns right again and walks 5 km to point D. Finally, he turns left and walks 5 km to point E. What is the direction of point E with respect to point A?",
      options: [
        "A) South-East",
        "B) South-West",
        "C) North-East",
        "D) North-West",
      ],
      answer: "B",
      explanation:
        "The path forms a zig-zag pattern. Final position E is southwest of starting point A.",
    },
    {
      id: 14,
      question:
        "If Northwest becomes South, what would Southeast become after the same rotation?",
      options: ["A) North", "B) East", "C) West", "D) South"],
      answer: "A",
      explanation:
        "135° clockwise rotation makes NW→S, so SE would become North after same rotation.",
    },
    {
      id: 15,
      question:
        "From point X, Aman walks 15 m North to point Y, turns left and walks 20 m to point Z, then turns right and walks 10 m to point W. What is the straight-line distance between X and W?",
      options: ["A) 25 m", "B) 30 m", "C) 35 m", "D) 40 m"],
      answer: "A",
      explanation:
        "Forms right triangle with legs 15m (North) and 20m (West). Distance = √(15²+20²) = 25m",
    },
    {
      id: 16,
      question:
        "A girl is facing West. She turns 225° in the clockwise direction and then 135° in the anti-clockwise direction. Which direction is she facing now?",
      options: ["A) North", "B) South", "C) East", "D) West"],
      answer: "C",
      explanation:
        "225° clockwise from West is Northeast. 135° anti-clockwise from Northeast is East.",
    },
    {
      id: 17,
      question:
        "Point A is to the North of point B. Point C is to the East of point B. Point D is to the South of point C. What is the position of point D with respect to point A?",
      options: [
        "A) South-East",
        "B) South-West",
        "C) North-East",
        "D) North-West",
      ],
      answer: "A",
      explanation:
        "D is southeast of A as it's south of C (east of B) which is east of B (south of A).",
    },
    {
      id: 18,
      question:
        "A man walks 10 km North, then turns right and walks 5 km, then turns right again and walks 10 km, and finally turns left and walks 5 km. What is his final direction?",
      options: ["A) North", "B) South", "C) East", "D) West"],
      answer: "C",
      explanation:
        "After complete movement, he's moving towards East direction.",
    },
    {
      id: 19,
      question:
        "If you are facing North-West and turn 315° clockwise, which direction will you be facing?",
      options: ["A) North", "B) South", "C) East", "D) West"],
      answer: "C",
      explanation:
        "315° clockwise from NW = 3.5 right angles = East direction.",
    },
    {
      id: 20,
      question:
        "From his office, Raj walks 12 km West, then turns left and walks 5 km, then turns right and walks 12 km. How far and in which direction is he from his office?",
      options: [
        "A) 5 km North",
        "B) 13 km South",
        "C) 5 km South",
        "D) 13 km North",
      ],
      answer: "C",
      explanation:
        "Net movement is 5 km South (West and East movements cancel out).",
    },
    {
      id: 21,
      question:
        "A ship sails 20 km East, then turns 120° to its right and sails 20 km. What is its bearing from the starting point?",
      options: ["A) North-East", "B) South-East", "C) East", "D) South-West"],
      answer: "B",
      explanation:
        "Forms equilateral triangle. Final position is southeast of starting point.",
    },
    {
      id: 22,
      question:
        "If South is called Northwest, Northwest is called East, East is called Southeast, what is North called?",
      options: ["A) Southwest", "B) Northwest", "C) Southeast", "D) East"],
      answer: "A",
      explanation:
        "Original North is 135° clockwise from NW, which becomes SW in new system.",
    },
    {
      id: 23,
      question:
        "A man walks 1 km East, then 2 km North, then 3 km West, then 4 km South. What is his position relative to start?",
      options: [
        "A) 2 km West and 2 km South",
        "B) 2 km East and 2 km North",
        "C) 2 km West and 2 km North",
        "D) 2 km East and 2 km South",
      ],
      answer: "A",
      explanation: "Net East-West: 1E-3W = 2W. Net North-South: 2N-4S = 2S.",
    },
    {
      id: 24,
      question:
        "A person facing North turns 45° clockwise, then 180° anti-clockwise, then 270° clockwise. Which direction is he facing?",
      options: [
        "A) North-West",
        "B) South-East",
        "C) North-East",
        "D) South-West",
      ],
      answer: "D",
      explanation:
        "After all turns: North → NE → SW (180° from NE) → SW (270° clockwise from SW remains SW).",
    },
    {
      id: 25,
      question:
        "Point X is north of Y and west of Z. What is the position of Y relative to Z?",
      options: ["A) Southeast", "B) Southwest", "C) Northeast", "D) Northwest"],
      answer: "A",
      explanation:
        "If X is west of Z and north of Y, then Y must be southeast of Z.",
    },
    {
      id: 26,
      question:
        "A car drives 10 km North, turns 135° right and drives 10√2 km, then turns 90° left and drives 10 km. What is its final position?",
      options: [
        "A) 10 km East of start",
        "B) 20 km North of start",
        "C) At starting point",
        "D) 10 km West of start",
      ],
      answer: "C",
      explanation:
        "The path forms a perfect square, returning to starting point.",
    },
    {
      id: 27,
      question:
        "If you walk while always keeping the sun at your left at noon in the northern hemisphere, what is your direction?",
      options: ["A) North", "B) South", "C) East", "D) West"],
      answer: "B",
      explanation:
        "At noon, sun is south in northern hemisphere. Keeping it left means facing south.",
    },
  ],
  set3: [
    {
      id: 28,
      question:
        "A person starts walking from point P towards North. After walking 10 km to point Q, he turns 135° clockwise and walks 14.14 km to point R. What is the straight-line distance between P and R?",
      options: ["A) 10 km", "B) 12 km", "C) 15 km", "D) 20 km"],
      answer: "A",
      explanation:
        "135° turn from North points Southwest. The path forms a 45-45-90 triangle with PQ=10 km, QR=10√2 km. PR=10 km (forms isosceles right triangle)",
    },
    {
      id: 29,
      question:
        "If South-Southwest becomes East, what would West become after the same rotation?",
      options: [
        "A) North-Northeast",
        "B) South-Southeast",
        "C) East-Northeast",
        "D) West-Northwest",
      ],
      answer: "B",
      explanation:
        "SSW to East requires 157.5° clockwise rotation. Applying same to West (270°) gives 427.5° ≡ 67.5° (South-Southeast)",
    },
    {
      id: 30,
      question:
        "From point A, Neha walks 15 m East to B, turns 60° left and walks 15 m to C, then turns 120° right and walks 15 m to D. What is the direction of D from A?",
      options: [
        "A) North-East",
        "B) South-East",
        "C) North-West",
        "D) South-West",
      ],
      answer: "A",
      explanation:
        "Forms equilateral triangle. Final position is northeast of starting point (30° north of east)",
    },
    {
      id: 31,
      question:
        "A ship sails 30 km North, then turns 60° to port side and sails 30 km, then turns 60° to starboard and sails 30 km. What is its bearing from start?",
      options: [
        "A) 30° East of North",
        "B) 30° West of North",
        "C) Due North",
        "D) Due East",
      ],
      answer: "A",
      explanation:
        "Path forms equilateral triangle. Final position is 30° east of north from start",
    },
    {
      id: 32,
      question:
        "Point X is to the Northwest of Y and Southwest of Z. What is the position of Y relative to Z?",
      options: ["A) Southeast", "B) Southwest", "C) Northeast", "D) Northwest"],
      answer: "A",
      explanation:
        "If X is NW of Y and SW of Z, then Y must be SE of Z (draw diagram to visualize)",
    },
    {
      id: 33,
      question:
        "A drone flies 50 m East, turns 36° right and flies 50 m, repeating this turn-and-fly pattern 5 times. What is its final direction?",
      options: ["A) East", "B) North", "C) South", "D) West"],
      answer: "D",
      explanation:
        "36° × 5 = 180° total turn. After 5 segments, it faces opposite to initial direction (West)",
    },
    {
      id: 34,
      question:
        "If you face North and make three consecutive left turns of 60° each, which direction are you facing?",
      options: ["A) East", "B) South", "C) West", "D) North"],
      answer: "A",
      explanation:
        "Total 180° left turn from North points South, but since turns are sequential (60°→NW, 120°→SW, 180°→South)",
    },
    {
      id: 35,
      question:
        "A hiker walks 1 km North, then 1 km Northeast, then 1 km East. What is her bearing from start?",
      options: [
        "A) 30° East of North",
        "B) 45° East of North",
        "C) 60° East of North",
        "D) Due East",
      ],
      answer: "B",
      explanation:
        "Net North displacement = 1 + √2/2 ≈ 1.707 km, East = √2/2 + 1 ≈ 1.707 km. Equal components give 45° bearing",
    },
    {
      id: 36,
      question:
        "If Northwest is called South, South is called East, and East is called Northwest, what is Southeast called?",
      options: ["A) North", "B) West", "C) Southwest", "D) Northeast"],
      answer: "B",
      explanation:
        "The substitution represents 135° clockwise rotation. Southeast (135°) becomes West (270°) after rotation",
    },
  ],
  set4: [
    {
      id: 37,
      question:
        "A man walks 5 km South, then turns right and walks 3 km, then turns left and walks 2 km. In which direction is he facing now?",
      options: ["A) East", "B) West", "C) North", "D) South"],
      answer: "B",
      explanation:
        "After South, right turn faces West. Left turn from West faces South but the question asks for facing direction which remains West after the moves.",
    },
    {
      id: 38,
      question:
        "If Northwest becomes South after rotation, what would Northeast become after the same rotation?",
      options: ["A) North", "B) East", "C) West", "D) South"],
      answer: "C",
      explanation:
        "135° clockwise rotation makes NW→S, so NE would become West after same rotation.",
    },
    {
      id: 39,
      question:
        "From point X, Raj walks 20 m North to Y, turns right and walks 30 m to Z, then turns left and walks 10 m to W. What is the straight-line distance between X and W?",
      options: ["A) 20√2 m", "B) 30 m", "C) 10√13 m", "D) 40 m"],
      answer: "C",
      explanation:
        "Net movement: 10m North and 30m East. Distance = √(10² + 30²) = 10√13 m",
    },
    {
      id: 40,
      question:
        "A woman is facing Southeast. She turns 180° clockwise, then 45° anticlockwise. Which direction is she facing now?",
      options: ["A) Northwest", "B) Southwest", "C) Northeast", "D) Southeast"],
      answer: "A",
      explanation:
        "180° from SE is NW. 45° anticlockwise from NW is WNW, but closest option is Northwest.",
    },
    {
      id: 41,
      question:
        "Point A is to the East of point B. Point C is to the North of point A. Point D is to the East of point C. What is the position of point D with respect to point B?",
      options: ["A) Northeast", "B) Northwest", "C) Southeast", "D) Southwest"],
      answer: "A",
      explanation:
        "D is northeast of B as it's north of A (east of B) and east of C (north of A).",
    },
    {
      id: 42,
      question:
        "A car drives 8 km West, turns left and drives 6 km, then turns right and drives 8 km. How far is it from the starting point?",
      options: ["A) 6 km", "B) 10 km", "C) 12 km", "D) 14 km"],
      answer: "B",
      explanation:
        "Forms right triangle with legs 6 km (South) and 8 km (West-East cancel out). Distance = 10 km",
    },
    {
      id: 43,
      question:
        "If you are facing North-Northeast and turn 112.5° anticlockwise, which direction will you be facing?",
      options: ["A) North", "B) East", "C) West", "D) South"],
      answer: "C",
      explanation:
        "NNE is 22.5° east of north. 112.5° anticlockwise makes 135° west of north = Northwest but closest option is West.",
    },
    {
      id: 44,
      question:
        "From his home, Arun walks 25 m South, turns left and walks 15 m, then turns right and walks 25 m. How far and in which direction is he from his home?",
      options: ["A) 15 m East", "B) 15 m West", "C) 25 m East", "D) 25 m West"],
      answer: "A",
      explanation:
        "Net movement: 15 m East (South and North movements cancel out).",
    },
    {
      id: 45,
      question:
        "A ship sails 40 km East, then turns 120° to its left and sails 40 km. What is its bearing from the starting point?",
      options: ["A) Northeast", "B) Southeast", "C) East", "D) North"],
      answer: "D",
      explanation:
        "Forms equilateral triangle. Final position is due north of starting point.",
    },
    {
      id: 46,
      question:
        "If South is called Northwest, Northwest is called East, East is called Southeast, what is North called?",
      options: ["A) Southwest", "B) Northwest", "C) Southeast", "D) East"],
      answer: "A",
      explanation:
        "Original North is 135° anticlockwise from NW, which becomes SW in new system.",
    },
    {
      id: 47,
      question:
        "A man walks 2 km East, then 3 km North, then 4 km West, then 5 km South. What is his position relative to start?",
      options: [
        "A) 2 km West and 2 km South",
        "B) 2 km East and 2 km North",
        "C) 2 km West and 2 km North",
        "D) 2 km East and 2 km South",
      ],
      answer: "A",
      explanation: "Net East-West: 2E-4W = 2W. Net North-South: 3N-5S = 2S.",
    },
    {
      id: 48,
      question:
        "A person facing North turns 90° anticlockwise, then 135° clockwise, then 225° anticlockwise. Which direction is he facing?",
      options: ["A) Northwest", "B) Southeast", "C) Northeast", "D) Southwest"],
      answer: "D",
      explanation:
        "North → West (90° AC) → Northeast (135° C) → Southwest (225° AC).",
    },
    {
      id: 49,
      question:
        "Point X is northeast of Y and northwest of Z. What is the position of Z relative to Y?",
      options: ["A) Southeast", "B) Southwest", "C) Northeast", "D) Northwest"],
      answer: "A",
      explanation: "If X is NE of Y and NW of Z, then Z must be SE of Y.",
    },
    {
      id: 50,
      question:
        "A drone flies 100 m North, turns 60° right and flies 100 m, then turns 60° left and flies 100 m. What is its final direction?",
      options: ["A) North", "B) East", "C) South", "D) West"],
      answer: "A",
      explanation:
        "Net turn is 0° (60° right + 60° left), so still facing original North direction.",
    },
    {
      id: 51,
      question:
        "If you walk with the morning sun behind you and to your left, what is your direction?",
      options: ["A) North", "B) South", "C) East", "D) West"],
      answer: "B",
      explanation: "Morning sun in east, behind and left implies facing south.",
    },
    {
      id: 52,
      question:
        "A hiker walks 2 km North, then 2 km Northwest, then 2 km West. What is her bearing from start?",
      options: [
        "A) 30° West of North",
        "B) 45° West of North",
        "C) 60° West of North",
        "D) Due West",
      ],
      answer: "B",
      explanation:
        "Net North displacement ≈ 3.414 km, West ≈ 3.414 km. Equal components give 45° west of north.",
    },
    {
      id: 53,
      question:
        "If North is called Southwest, Southwest is called East, and East is called North, what is Southeast called?",
      options: ["A) Northwest", "B) Southwest", "C) Northeast", "D) Southeast"],
      answer: "A",
      explanation:
        "The substitution represents 225° clockwise rotation. Southeast becomes Northwest after rotation.",
    },
    {
      id: 54,
      question:
        "A person starts facing North, turns 45° right, then 90° left, then 135° right. Which direction is he facing?",
      options: ["A) Northeast", "B) Southeast", "C) Southwest", "D) Northwest"],
      answer: "B",
      explanation:
        "North → Northeast (45° R) → Northwest (90° L) → Southeast (135° R).",
    },
  ],
};
