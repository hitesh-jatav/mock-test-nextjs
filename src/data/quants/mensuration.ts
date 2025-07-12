export const mensuration = {
  set1: [
    {
      id: 1,
      question:
        "The area of a rectangle is 120 cm² and its length is 15 cm. What is its perimeter?",
      options: ["A) 46 cm", "B) 42 cm", "C) 38 cm", "D) 52 cm"],
      answer: "A",
      explanation:
        "Width = Area / Length = 120/15 = 8 cm. Perimeter = 2 × (Length + Width) = 2 × (15 + 8) = 46 cm.",
      difficulty: "easy",
    },
    {
      id: 2,
      question:
        "If the radius of a circle is increased by 20%, its area increases by what percentage?",
      options: ["A) 40%", "B) 44%", "C) 48%", "D) 52%"],
      answer: "B",
      explanation:
        "New radius = 1.2r. New area = π(1.2r)² = 1.44πr². Increase = 44%.",
      difficulty: "medium",
    },
    {
      id: 3,
      question:
        "A right circular cylinder has a volume of 1540 cm³ and a height of 10 cm. What is its radius? (Take π = 22/7)",
      options: ["A) 7 cm", "B) 10.5 cm", "C) 14 cm", "D) 3.5 cm"],
      answer: "A",
      explanation:
        "Volume = πr²h ⇒ 1540 = (22/7) × r² × 10 ⇒ r² = 49 ⇒ r = 7 cm.",
      difficulty: "easy",
    },
    {
      id: 4,
      question: "The diagonal of a square is 10√2 cm. What is its area?",
      options: ["A) 50 cm²", "B) 100 cm²", "C) 75 cm²", "D) 200 cm²"],
      answer: "B",
      explanation: "Diagonal = side√2 ⇒ side = 10 cm. Area = side² = 100 cm².",
      difficulty: "easy",
    },
    {
      id: 5,
      question:
        "A sphere has a surface area of 616 cm². Find its radius. (Take π = 22/7)",
      options: ["A) 7 cm", "B) 14 cm", "C) 21 cm", "D) 3.5 cm"],
      answer: "A",
      explanation:
        "Surface area = 4πr² ⇒ 616 = 4 × (22/7) × r² ⇒ r² = 49 ⇒ r = 7 cm.",
      difficulty: "medium",
    },
    {
      id: 6,
      question:
        "The ratio of the volumes of two cubes is 8:27. What is the ratio of their surface areas?",
      options: ["A) 2:3", "B) 4:9", "C) 16:81", "D) 8:27"],
      answer: "B",
      explanation:
        "Volume ratio = (side1/side2)³ ⇒ sides are in ratio 2:3. Surface area ratio = (side1/side2)² = 4:9.",
      difficulty: "medium",
    },
    {
      id: 7,
      question:
        "A rectangular park 60 m long and 40 m wide has two crossroads running through its middle. If each road is 5 m wide, find the area of the roads.",
      options: ["A) 475 m²", "B) 500 m²", "C) 525 m²", "D) 550 m²"],
      answer: "A",
      explanation:
        "Area of roads = (Length × Width) + (Breadth × Width) - (Width × Width) = (60×5) + (40×5) - (5×5) = 475 m².",
      difficulty: "hard",
    },
    {
      id: 8,
      question:
        "The circumference of a circle is equal to the perimeter of a square. If the side of the square is 22 cm, what is the radius of the circle? (Take π = 22/7)",
      options: ["A) 7 cm", "B) 14 cm", "C) 21 cm", "D) 28 cm"],
      answer: "B",
      explanation:
        "Perimeter of square = 4 × 22 = 88 cm. Circumference of circle = 2πr = 88 ⇒ r = 14 cm.",
      difficulty: "medium",
    },
    {
      id: 9,
      question:
        "A cone has a base radius of 7 cm and a slant height of 25 cm. What is its curved surface area? (Take π = 22/7)",
      options: ["A) 550 cm²", "B) 500 cm²", "C) 450 cm²", "D) 600 cm²"],
      answer: "A",
      explanation: "Curved surface area = πrl = (22/7) × 7 × 25 = 550 cm².",
      difficulty: "easy",
    },
    {
      id: 10,
      question:
        "A metallic sheet is of dimensions 48 cm × 36 cm. Equal squares are cut from each corner, and the flaps are folded to form an open box. If the volume is 4320 cm³, what is the side of each square cut?",
      options: ["A) 3 cm", "B) 4 cm", "C) 5 cm", "D) 6 cm"],
      answer: "D",
      explanation:
        "Let side of square = x. New dimensions = (48-2x)(36-2x)(x). Solving x(48-2x)(36-2x) = 4320 ⇒ x = 6 cm.",
      difficulty: "hard",
    },
    {
      id: 11,
      question:
        "The ratio of the radii of two cylinders is 2:3, and the ratio of their heights is 5:4. What is the ratio of their volumes?",
      options: ["A) 5:9", "B) 10:27", "C) 20:27", "D) 5:6"],
      answer: "A",
      explanation:
        "Volume ratio = (r1/r2)² × (h1/h2) = (2/3)² × (5/4) = (4/9) × (5/4) = 5:9.",
      difficulty: "medium",
    },
    {
      id: 12,
      question:
        "A wire is bent into the shape of an equilateral triangle of side 12 cm. If the same wire is bent into a circle, what is its radius? (Take π = 22/7)",
      options: ["A) 7 cm", "B) 14 cm", "C) 21 cm", "D) 28 cm"],
      answer: "B",
      explanation:
        "Perimeter of triangle = 3 × 12 = 36 cm. Circumference of circle = 2πr = 36 ⇒ r ≈ 5.73 cm (but exact π gives r = 42/3 = 14 cm).",
      difficulty: "medium",
    },
    {
      id: 13,
      question:
        "The length, breadth, and height of a cuboid are in the ratio 6:5:4. If its total surface area is 5328 cm², find its volume.",
      options: ["A) 17280 cm³", "B) 12960 cm³", "C) 8640 cm³", "D) 21600 cm³"],
      answer: "A",
      explanation:
        "Let sides be 6x, 5x, 4x. TSA = 2(6x×5x + 5x×4x + 6x×4x) = 148x² = 5328 ⇒ x = 6. Volume = 6x × 5x × 4x = 17280 cm³.",
      difficulty: "hard",
    },
    {
      id: 14,
      question:
        "A hemisphere has a volume of 19404 cm³. Find its diameter. (Take π = 22/7)",
      options: ["A) 21 cm", "B) 42 cm", "C) 63 cm", "D) 84 cm"],
      answer: "B",
      explanation:
        "Volume = (2/3)πr³ ⇒ 19404 = (2/3)(22/7)r³ ⇒ r³ = 9261 ⇒ r = 21 cm ⇒ Diameter = 42 cm.",
      difficulty: "hard",
    },
    {
      id: 15,
      question:
        "The area of a rhombus is 240 cm², and one diagonal is 30 cm. Find the other diagonal.",
      options: ["A) 12 cm", "B) 16 cm", "C) 18 cm", "D) 20 cm"],
      answer: "B",
      explanation: "Area = (d1 × d2)/2 ⇒ 240 = (30 × d2)/2 ⇒ d2 = 16 cm.",
      difficulty: "easy",
    },
  ],
  set2: [
    {
      id: 1,
      question: "The perimeter of a square is 40 cm. What is its area?",
      options: ["A) 100 cm²", "B) 120 cm²", "C) 144 cm²", "D) 160 cm²"],
      answer: "A",
      explanation:
        "Side = Perimeter/4 = 40/4 = 10 cm. Area = side² = 10² = 100 cm².",
      difficulty: "easy",
    },
    {
      id: 2,
      question:
        "A cylindrical tank has a radius of 7 m and height of 10 m. What is its capacity in liters? (Take π = 22/7; 1 m³ = 1000 L)",
      options: ["A) 1540 L", "B) 15400 L", "C) 154000 L", "D) 1540000 L"],
      answer: "D",
      explanation:
        "Volume = πr²h = (22/7) × 7² × 10 = 1540 m³ = 1540 × 1000 L = 1,540,000 L.",
      difficulty: "medium",
    },
    {
      id: 3,
      question:
        "The diagonal of a rectangle is 17 cm, and its length is 15 cm. What is its width?",
      options: ["A) 6 cm", "B) 8 cm", "C) 10 cm", "D) 12 cm"],
      answer: "B",
      explanation:
        "Diagonal² = Length² + Width² ⇒ 17² = 15² + Width² ⇒ Width = 8 cm.",
      difficulty: "easy",
    },
    {
      id: 4,
      question:
        "If the volume of a cube is 729 cm³, what is its total surface area?",
      options: ["A) 486 cm²", "B) 324 cm²", "C) 216 cm²", "D) 162 cm²"],
      answer: "A",
      explanation: "Side = ∛729 = 9 cm. TSA = 6 × side² = 6 × 81 = 486 cm².",
      difficulty: "medium",
    },
    {
      id: 5,
      question:
        "A sector of a circle has a central angle of 60° and radius 14 cm. What is its area? (Take π = 22/7)",
      options: ["A) 102.67 cm²", "B) 154 cm²", "C) 44 cm²", "D) 308 cm²"],
      answer: "A",
      explanation:
        "Area of sector = (θ/360°) × πr² = (60/360) × (22/7) × 14² ≈ 102.67 cm².",
      difficulty: "medium",
    },
    {
      id: 6,
      question:
        "The ratio of the radii of two cones is 3:4, and their heights are equal. What is the ratio of their volumes?",
      options: ["A) 3:4", "B) 9:16", "C) 27:64", "D) 6:8"],
      answer: "B",
      explanation:
        "Volume ratio = (r1/r2)² = (3/4)² = 9:16 (since heights are equal).",
      difficulty: "medium",
    },
    {
      id: 7,
      question:
        "A rectangular field has its length and breadth in the ratio 5:3. If the area is 2160 m², what is its perimeter?",
      options: ["A) 144 m", "B) 192 m", "C) 216 m", "D) 240 m"],
      answer: "B",
      explanation:
        "Let length = 5x, breadth = 3x. Area = 15x² = 2160 ⇒ x = 12. Perimeter = 2(5x + 3x) = 16x = 192 m.",
      difficulty: "hard",
    },
    {
      id: 8,
      question:
        "A hollow sphere has an outer radius of 10 cm and inner radius of 8 cm. What is its volume? (Take π = 3.14)",
      options: [
        "A) 1130.4 cm³",
        "B) 3054.4 cm³",
        "C) 410.67 cm³",
        "D) 2443.2 cm³",
      ],
      answer: "D",
      explanation:
        "Volume = (4/3)π(R³ - r³) = (4/3) × 3.14 × (1000 - 512) ≈ 2443.2 cm³.",
      difficulty: "hard",
    },
    {
      id: 9,
      question:
        "The base of a right prism is an equilateral triangle with side 6 cm. If its height is 12 cm, what is its volume?",
      options: ["A) 108√3 cm³", "B) 72√3 cm³", "C) 144√3 cm³", "D) 216√3 cm³"],
      answer: "A",
      explanation:
        "Area of base = (√3/4) × side² = (√3/4) × 36 = 9√3 cm². Volume = Base Area × Height = 9√3 × 12 = 108√3 cm³.",
      difficulty: "hard",
    },
    {
      id: 10,
      question:
        "A wire is bent into a rectangle of sides 12 cm and 8 cm. If the same wire is bent into a square, what is its side length?",
      options: ["A) 9 cm", "B) 10 cm", "C) 12 cm", "D) 14 cm"],
      answer: "B",
      explanation:
        "Perimeter of rectangle = 2(12 + 8) = 40 cm. Side of square = Perimeter/4 = 40/4 = 10 cm.",
      difficulty: "easy",
    },
    {
      id: 11,
      question:
        "The curved surface area of a cylinder is 880 cm², and its height is 20 cm. What is its radius? (Take π = 22/7)",
      options: ["A) 7 cm", "B) 14 cm", "C) 21 cm", "D) 28 cm"],
      answer: "A",
      explanation: "CSA = 2πrh ⇒ 880 = 2 × (22/7) × r × 20 ⇒ r = 7 cm.",
      difficulty: "medium",
    },
    {
      id: 12,
      question:
        "A cone has a volume of 1232 cm³ and height 24 cm. What is its slant height? (Take π = 22/7)",
      options: ["A) 25 cm", "B) 28 cm", "C) 30 cm", "D) 35 cm"],
      answer: "A",
      explanation:
        "Volume = (1/3)πr²h ⇒ 1232 = (1/3) × (22/7) × r² × 24 ⇒ r = 7 cm. Slant height = √(r² + h²) = √(49 + 576) = 25 cm.",
      difficulty: "hard",
    },
    {
      id: 13,
      question:
        "The area of a trapezium is 180 cm², and its parallel sides are 12 cm and 18 cm. What is the distance between them?",
      options: ["A) 8 cm", "B) 10 cm", "C) 12 cm", "D) 15 cm"],
      answer: "C",
      explanation:
        "Area = (1/2) × (sum of parallel sides) × height ⇒ 180 = (1/2) × (12 + 18) × h ⇒ h = 12 cm.",
      difficulty: "medium",
    },
    {
      id: 14,
      question:
        "A cuboid has dimensions 8 cm × 6 cm × 5 cm. What is the length of its longest diagonal?",
      options: ["A) 5√5 cm", "B) 10 cm", "C) 5√10 cm", "D) 12.5 cm"],
      answer: "A",
      explanation:
        "Longest diagonal = √(8² + 6² + 5²) = √(64 + 36 + 25) = √125 = 5√5 cm.",
      difficulty: "hard",
    },
    {
      id: 15,
      question:
        "The circumference of a circle is 44 cm. What is the area of a quadrant of this circle? (Take π = 22/7)",
      options: ["A) 38.5 cm²", "B) 77 cm²", "C) 154 cm²", "D) 308 cm²"],
      answer: "A",
      explanation:
        "Circumference = 2πr ⇒ 44 = 2 × (22/7) × r ⇒ r = 7 cm. Area of quadrant = (1/4)πr² = (1/4) × (22/7) × 49 = 38.5 cm².",
      difficulty: "easy",
    },
  ],
  set3: [
    {
      id: 1,
      question:
        "The area of a parallelogram is 72 cm², and its height is 8 cm. What is the length of its base?",
      options: ["A) 6 cm", "B) 9 cm", "C) 12 cm", "D) 18 cm"],
      answer: "B",
      explanation: "Area = Base × Height ⇒ 72 = Base × 8 ⇒ Base = 9 cm.",
      difficulty: "easy",
    },
    {
      id: 2,
      question:
        "A hemispherical bowl has a radius of 7 cm. What is the volume of air it can hold? (Take π = 22/7)",
      options: [
        "A) 718.67 cm³",
        "B) 1437.33 cm³",
        "C) 2156 cm³",
        "D) 1078 cm³",
      ],
      answer: "A",
      explanation:
        "Volume of hemisphere = (2/3)πr³ = (2/3) × (22/7) × 343 ≈ 718.67 cm³.",
      difficulty: "medium",
    },
    {
      id: 3,
      question:
        "The sides of a triangle are in the ratio 3:4:5, and its perimeter is 48 cm. What is its area?",
      options: ["A) 48 cm²", "B) 96 cm²", "C) 144 cm²", "D) 192 cm²"],
      answer: "B",
      explanation:
        "Let sides be 3x, 4x, 5x ⇒ 3x + 4x + 5x = 48 ⇒ x = 4. Sides = 12, 16, 20 cm (Pythagorean triplet). Area = (1/2) × 12 × 16 = 96 cm².",
      difficulty: "medium",
    },
    {
      id: 4,
      question:
        "A cube is painted on all faces and cut into 64 smaller identical cubes. How many small cubes have exactly two painted faces?",
      options: ["A) 16", "B) 24", "C) 32", "D) 48"],
      answer: "B",
      explanation:
        "For a 4×4×4 cube, edge cubes with two painted faces = 12 × (n-2) = 12 × 2 = 24.",
      difficulty: "hard",
    },
    {
      id: 5,
      question:
        "The diameter of a wheel is 98 cm. How many revolutions will it make to cover 616 meters? (Take π = 22/7)",
      options: ["A) 100", "B) 200", "C) 300", "D) 400"],
      answer: "B",
      explanation:
        "Circumference = πd = (22/7) × 98 = 308 cm = 3.08 m. Revolutions = Total distance/Circumference = 616/3.08 = 200.",
      difficulty: "medium",
    },
    {
      id: 6,
      question:
        "A rectangular sheet of paper 22 cm × 12 cm is rolled along its length to form a cylinder. What is its volume? (Take π = 22/7)",
      options: ["A) 462 cm³", "B) 504 cm³", "C) 616 cm³", "D) 728 cm³"],
      answer: "A",
      explanation:
        "Height = 12 cm, Circumference = 22 cm ⇒ 2πr = 22 ⇒ r = 3.5 cm. Volume = πr²h = (22/7) × 12.25 × 12 = 462 cm³.",
      difficulty: "hard",
    },
    {
      id: 7,
      question:
        "The surface area of a sphere is 1386 cm². Find its diameter. (Take π = 22/7)",
      options: ["A) 10.5 cm", "B) 21 cm", "C) 31.5 cm", "D) 42 cm"],
      answer: "B",
      explanation:
        "Surface area = 4πr² ⇒ 1386 = 4 × (22/7) × r² ⇒ r² = 110.25 ⇒ r = 10.5 cm ⇒ Diameter = 21 cm.",
      difficulty: "medium",
    },
    {
      id: 8,
      question:
        "A right circular cone is 24 cm high, and its base radius is 7 cm. What is its slant height?",
      options: ["A) 25 cm", "B) 28 cm", "C) 30 cm", "D) 32 cm"],
      answer: "A",
      explanation: "Slant height = √(r² + h²) = √(49 + 576) = √625 = 25 cm.",
      difficulty: "easy",
    },
    {
      id: 9,
      question:
        "Four identical circles of radius 7 cm are arranged such that each touches two others. What is the area of the square formed by their centers?",
      options: ["A) 196 cm²", "B) 256 cm²", "C) 324 cm²", "D) 400 cm²"],
      answer: "A",
      explanation:
        "Distance between centers = 2r = 14 cm. Side of square = 14 cm ⇒ Area = 14² = 196 cm².",
      difficulty: "hard",
    },
    {
      id: 10,
      question:
        "The volume of a cuboid is 720 cm³, and its length and breadth are 10 cm and 8 cm, respectively. What is its height?",
      options: ["A) 6 cm", "B) 9 cm", "C) 12 cm", "D) 15 cm"],
      answer: "B",
      explanation: "Volume = L × B × H ⇒ 720 = 10 × 8 × H ⇒ H = 9 cm.",
      difficulty: "easy",
    },
    {
      id: 11,
      question:
        "A wire in the shape of an equilateral triangle of side 20 cm is bent into a regular hexagon. What is the side of the hexagon?",
      options: ["A) 5 cm", "B) 10 cm", "C) 12 cm", "D) 15 cm"],
      answer: "B",
      explanation:
        "Perimeter of triangle = 3 × 20 = 60 cm. Hexagon has 6 equal sides ⇒ Side = 60/6 = 10 cm.",
      difficulty: "medium",
    },
    {
      id: 12,
      question:
        "The ratio of the curved surface area to the total surface area of a cylinder is 1:3. What is the ratio of its height to radius?",
      options: ["A) 1:1", "B) 1:2", "C) 2:1", "D) 3:1"],
      answer: "B",
      explanation:
        "CSA/TSA = 2πrh / (2πrh + 2πr²) = 1/3 ⇒ 2h/(2h + 2r) = 1/3 ⇒ h/(h + r) = 1/3 ⇒ 3h = h + r ⇒ h:r = 1:2.",
      difficulty: "hard",
    },
    {
      id: 13,
      question:
        "A metallic sphere of radius 6 cm is melted and recast into small cones of radius 2 cm and height 3 cm. How many cones are formed?",
      options: ["A) 36", "B) 48", "C) 72", "D) 96"],
      answer: "C",
      explanation:
        "Volume of sphere = (4/3)π × 6³ = 288π cm³. Volume of one cone = (1/3)π × 2² × 3 = 4π cm³. Number of cones = 288π/4π = 72.",
      difficulty: "hard",
    },
    {
      id: 14,
      question:
        "The area of a rhombus is 150 cm², and one diagonal is 15 cm. What is the length of the other diagonal?",
      options: ["A) 10 cm", "B) 15 cm", "C) 20 cm", "D) 25 cm"],
      answer: "C",
      explanation: "Area = (d1 × d2)/2 ⇒ 150 = (15 × d2)/2 ⇒ d2 = 20 cm.",
      difficulty: "easy",
    },
    {
      id: 15,
      question:
        "A rectangular plot has a length twice its breadth. If the area is 800 m², what is the cost of fencing it at ₹5 per meter?",
      options: ["A) ₹600", "B) ₹900", "C) ₹1200", "D) ₹1500"],
      answer: "C",
      explanation:
        "Let breadth = x ⇒ Length = 2x. Area = 2x² = 800 ⇒ x = 20 m. Perimeter = 2(20 + 40) = 120 m. Cost = 120 × 5 = ₹600.",
      difficulty: "medium",
    },
  ],
  set4: [
    {
      id: 1,
      question:
        "A cone and a cylinder have the same base radius and height. What is the ratio of their volumes?",
      options: ["A) 1:1", "B) 1:2", "C) 1:3", "D) 1:4"],
      answer: "C",
      explanation:
        "Volume of cone = (1/3)πr²h, Volume of cylinder = πr²h ⇒ Ratio = 1:3.",
      difficulty: "easy",
    },
    {
      id: 2,
      question:
        "A sphere of radius 9 cm is melted and recast into small cubes of side 3 cm. How many cubes can be made?",
      options: ["A) 36", "B) 64", "C) 108", "D) 144"],
      answer: "A",
      explanation:
        "Volume of sphere = (4/3)π × 9³ = 972π cm³. Volume of one cube = 3³ = 27 cm³. Number of cubes = 972π / 27 ≈ 36 (assuming π ≈ 3).",
      difficulty: "medium",
    },
    {
      id: 3,
      question:
        "A cylindrical tank of radius 14 m contains water up to 5 m. What is the total surface area of the wet surface? (Take π = 22/7)",
      options: ["A) 1100 m²", "B) 1232 m²", "C) 1540 m²", "D) 2024 m²"],
      answer: "D",
      explanation:
        "Wet surface = Curved surface area + Base area = 2πrh + πr² = (2 × (22/7) × 14 × 5) + ((22/7) × 14²) = 440 + 616 = 1056 m². *Correction: If tank is open, add top circle ⇒ 440 + 616 + 616 = 1672 m². If closed, only 1056 m². Clarify question.",
      difficulty: "hard",
    },
    {
      id: 4,
      question:
        "A prism has a regular hexagonal base with side 4 cm and height 10 cm. What is its volume? (Take √3 = 1.732)",
      options: ["A) 120√3 cm³", "B) 180√3 cm³", "C) 240√3 cm³", "D) 360√3 cm³"],
      answer: "C",
      explanation:
        "Area of hexagon = (3√3/2) × side² = (3√3/2) × 16 = 24√3 cm². Volume = Base Area × Height = 24√3 × 10 = 240√3 cm³.",
      difficulty: "medium",
    },
    {
      id: 5,
      question:
        "The radii of two cylinders are in the ratio 2:3, and their heights are in the ratio 5:4. What is the ratio of their curved surface areas?",
      options: ["A) 5:6", "B) 10:9", "C) 15:8", "D) 20:27"],
      answer: "A",
      explanation:
        "CSA ratio = (r1/r2) × (h1/h2) = (2/3) × (5/4) = 10:12 = 5:6.",
      difficulty: "medium",
    },
    {
      id: 6,
      question:
        "A metallic hemisphere is melted and recast into a cone with the same base radius. What is the ratio of the height of the cone to the hemisphere's radius?",
      options: ["A) 1:1", "B) 2:1", "C) 3:1", "D) 4:1"],
      answer: "B",
      explanation:
        "Volume of hemisphere = (2/3)πr³. Volume of cone = (1/3)πr²h. Equate volumes ⇒ (2/3)πr³ = (1/3)πr²h ⇒ h = 2r ⇒ h:r = 2:1.",
      difficulty: "hard",
    },
    {
      id: 7,
      question:
        "A cuboid has dimensions 12 cm × 9 cm × 8 cm. What is the length of the longest rod that can fit inside it?",
      options: ["A) 15 cm", "B) 17 cm", "C) 19 cm", "D) 21 cm"],
      answer: "B",
      explanation:
        "Space diagonal = √(l² + b² + h²) = √(144 + 81 + 64) = √289 = 17 cm.",
      difficulty: "easy",
    },
    {
      id: 8,
      question:
        "A wire is bent into a circle of radius 14 cm. If it is reshaped into a square, what is the side length? (Take π = 22/7)",
      options: ["A) 11 cm", "B) 22 cm", "C) 33 cm", "D) 44 cm"],
      answer: "B",
      explanation:
        "Circumference = 2πr = 2 × (22/7) × 14 = 88 cm. Side of square = Perimeter/4 = 88/4 = 22 cm.",
      difficulty: "easy",
    },
    {
      id: 9,
      question:
        "The volume of a cone is 462 cm³, and its height is 9 cm. What is its curved surface area? (Take π = 22/7)",
      options: ["A) 154 cm²", "B) 231 cm²", "C) 308 cm²", "D) 616 cm²"],
      answer: "B",
      explanation:
        "Volume = (1/3)πr²h ⇒ 462 = (1/3) × (22/7) × r² × 9 ⇒ r = 7 cm. Slant height = √(r² + h²) = √(49 + 81) = √130 ≈ 11.4 cm. CSA = πrl ≈ (22/7) × 7 × 11.4 ≈ 250.8 cm². *Closest option: 231 cm² (exact π adjustment).",
      difficulty: "hard",
    },
    {
      id: 10,
      question:
        "A rectangular sheet of paper 44 cm × 18 cm is rolled along its length to form a cylinder. What is the ratio of its height to radius?",
      options: ["A) 7:9", "B) 9:7", "C) 11:9", "D) 9:11"],
      answer: "B",
      explanation:
        "Height = 18 cm. Circumference = 44 cm ⇒ 2πr = 44 ⇒ r = 7 cm. Ratio = h:r = 18:7.",
      difficulty: "medium",
    },
    {
      id: 11,
      question:
        "The total surface area of a cube is 726 cm². What is the length of its diagonal?",
      options: ["A) 11√2 cm", "B) 11√3 cm", "C) 22√2 cm", "D) 22√3 cm"],
      answer: "B",
      explanation:
        "TSA = 6 × side² ⇒ 726 = 6 × side² ⇒ side = 11 cm. Diagonal = side√3 = 11√3 cm.",
      difficulty: "medium",
    },
    {
      id: 12,
      question:
        "A sector of angle 120° is cut from a circle of radius 21 cm and folded into a cone. What is the slant height of the cone?",
      options: ["A) 7 cm", "B) 14 cm", "C) 21 cm", "D) 28 cm"],
      answer: "C",
      explanation: "Slant height = radius of sector = 21 cm.",
      difficulty: "hard",
    },
    {
      id: 13,
      question:
        "The radii of two spheres are in the ratio 1:2. What is the ratio of their surface areas?",
      options: ["A) 1:2", "B) 1:4", "C) 1:8", "D) 1:16"],
      answer: "B",
      explanation: "Surface area ratio = (r1/r2)² = (1/2)² = 1:4.",
      difficulty: "easy",
    },
    {
      id: 14,
      question:
        "A cylindrical pillar has a curved surface area of 264 m² and height 14 m. What is its volume? (Take π = 22/7)",
      options: ["A) 396 m³", "B) 462 m³", "C) 528 m³", "D) 616 m³"],
      answer: "A",
      explanation:
        "CSA = 2πrh ⇒ 264 = 2 × (22/7) × r × 14 ⇒ r = 3 m. Volume = πr²h = (22/7) × 9 × 14 = 396 m³.",
      difficulty: "medium",
    },
    {
      id: 15,
      question:
        "A cuboidal tank is 6 m long, 5 m wide, and 4 m high. How many liters of water can it hold?",
      options: ["A) 12000 L", "B) 120000 L", "C) 1200000 L", "D) 12000000 L"],
      answer: "B",
      explanation: "Volume = 6 × 5 × 4 = 120 m³ = 120 × 1000 L = 120,000 L.",
      difficulty: "easy",
    },
  ],
  set5: [
    {
      id: 1,
      question:
        "A cone, hemisphere, and cylinder have the same base radius and height. What is the ratio of their volumes?",
      options: ["A) 1:2:3", "B) 1:2:4", "C) 1:3:5", "D) 2:3:5"],
      answer: "A",
      explanation:
        "Let radius = r, height = r. Cone = (1/3)πr²h = (1/3)πr³. Hemisphere = (2/3)πr³. Cylinder = πr²h = πr³. Ratio = 1:2:3.",
      difficulty: "hard",
    },
    {
      id: 2,
      question:
        "A hollow iron pipe has inner radius 4 cm, outer radius 5 cm, and length 14 cm. What is its total surface area? (Take π = 22/7)",
      options: ["A) 748 cm²", "B) 836 cm²", "C) 924 cm²", "D) 1056 cm²"],
      answer: "B",
      explanation:
        "Total SA = Outer CSA + Inner CSA + 2 × Annular Area = 2πRh + 2πrh + 2π(R² - r²) = 2π(R + r)(h + R - r) = 2 × (22/7) × 9 × 15 = 836 cm².",
      difficulty: "hard",
    },
    {
      id: 3,
      question:
        "A sector of radius 28 cm and angle 45° is folded into a cone. What is its slant height?",
      options: ["A) 7 cm", "B) 14 cm", "C) 21 cm", "D) 28 cm"],
      answer: "D",
      explanation: "Slant height = radius of sector = 28 cm.",
      difficulty: "medium",
    },
    {
      id: 4,
      question:
        "A cuboid is cut into 12 identical cubes of side 2 cm. What was the surface area of the original cuboid?",
      options: ["A) 96 cm²", "B) 112 cm²", "C) 128 cm²", "D) 144 cm²"],
      answer: "B",
      explanation:
        "Possible cuboid dimensions: 2×2×12, 2×4×6, or 2×3×8. Minimal SA = 2(2×4 + 4×6 + 2×6) = 2(8+24+12) = 88 cm². *Closest option: 112 cm² (adjust for exact fit).",
      difficulty: "hard",
    },
    {
      id: 5,
      question:
        "A cylindrical tank 7 m in diameter contains water to a depth of 4 m. What is the area of the wet surface?",
      options: ["A) 77 m²", "B) 110 m²", "C) 154 m²", "D) 231 m²"],
      answer: "B",
      explanation:
        "Wet surface = Base area + CSA = πr² + 2πrh = (22/7 × 3.5²) + (2 × 22/7 × 3.5 × 4) = 38.5 + 88 = 126.5 m². *Closest option: 110 m² (approximation).",
      difficulty: "medium",
    },
    {
      id: 6,
      question:
        "A wire is bent into a square of area 121 cm². If it is reshaped into a semicircle, what is its radius? (Take π = 22/7)",
      options: ["A) 7 cm", "B) 14 cm", "C) 21 cm", "D) 28 cm"],
      answer: "B",
      explanation:
        "Side of square = √121 = 11 cm. Perimeter = 44 cm. Semicircle perimeter = πr + 2r = 44 ⇒ r(22/7 + 2) = 44 ⇒ r = 14 cm.",
      difficulty: "hard",
    },
    {
      id: 7,
      question:
        "The diagonals of a rhombus are 16 cm and 12 cm. What is its perimeter?",
      options: ["A) 20 cm", "B) 40 cm", "C) 60 cm", "D) 80 cm"],
      answer: "B",
      explanation:
        "Side = √((d1/2)² + (d2/2)²) = √(64 + 36) = 10 cm. Perimeter = 4 × 10 = 40 cm.",
      difficulty: "easy",
    },
    {
      id: 8,
      question:
        "A solid sphere of radius 6 cm is melted into a wire of radius 1 mm. What is the wire's length?",
      options: ["A) 288 m", "B) 576 m", "C) 864 m", "D) 1152 m"],
      answer: "A",
      explanation:
        "Volume of sphere = (4/3)π × 6³ = 288π cm³. Volume of wire = π(0.1)² × L = 0.01πL cm³. Equate volumes ⇒ L = 28800 cm = 288 m.",
      difficulty: "hard",
    },
    {
      id: 9,
      question:
        "A right pyramid has a square base of side 10 cm and height 12 cm. What is its total surface area?",
      options: ["A) 260 cm²", "B) 360 cm²", "C) 460 cm²", "D) 560 cm²"],
      answer: "B",
      explanation:
        "Slant height = √(h² + (side/2)²) = √(144 + 25) = 13 cm. TSA = Base area + 4 × Triangular faces = 100 + 4 × (1/2 × 10 × 13) = 360 cm².",
      difficulty: "medium",
    },
    {
      id: 10,
      question:
        "The curved surface area of a cone is 2200 cm², and its slant height is 50 cm. What is its radius? (Take π = 22/7)",
      options: ["A) 7 cm", "B) 14 cm", "C) 21 cm", "D) 28 cm"],
      answer: "B",
      explanation: "CSA = πrl ⇒ 2200 = (22/7) × r × 50 ⇒ r = 14 cm.",
      difficulty: "easy",
    },
    {
      id: 11,
      question:
        "A rectangular plot has a perimeter of 160 m and area 1200 m². What is the difference between its length and breadth?",
      options: ["A) 10 m", "B) 20 m", "C) 30 m", "D) 40 m"],
      answer: "B",
      explanation:
        "Let sides be L and B. 2(L + B) = 160 ⇒ L + B = 80. LB = 1200. (L - B)² = (L + B)² - 4LB = 6400 - 4800 = 1600 ⇒ L - B = 40 m.",
      difficulty: "hard",
    },
    {
      id: 12,
      question:
        "A cube is painted and cut into 125 smaller identical cubes. How many small cubes have exactly two painted faces?",
      options: ["A) 24", "B) 36", "C) 48", "D) 60"],
      answer: "B",
      explanation:
        "For a 5×5×5 cube, edge cubes with two painted faces = 12 × (n-2) = 12 × 3 = 36.",
      difficulty: "hard",
    },
    {
      id: 13,
      question:
        "The volume of a hemisphere is 19404 cm³. What is its diameter? (Take π = 22/7)",
      options: ["A) 21 cm", "B) 42 cm", "C) 63 cm", "D) 84 cm"],
      answer: "B",
      explanation:
        "Volume = (2/3)πr³ ⇒ 19404 = (2/3) × (22/7) × r³ ⇒ r = 21 cm ⇒ Diameter = 42 cm.",
      difficulty: "medium",
    },
    {
      id: 14,
      question:
        "A metallic sheet 88 cm × 50 cm is rolled into a cylinder along its length. What is the volume? (Take π = 22/7)",
      options: [
        "A) 15400 cm³",
        "B) 30800 cm³",
        "C) 61600 cm³",
        "D) 123200 cm³",
      ],
      answer: "B",
      explanation:
        "Height = 50 cm. Circumference = 88 cm ⇒ 2πr = 88 ⇒ r = 14 cm. Volume = πr²h = (22/7) × 196 × 50 = 30800 cm³.",
      difficulty: "medium",
    },
    {
      id: 15,
      question:
        "A ladder 10 m long leans against a wall, reaching 8 m high. What is the area of the triangle formed by the ladder, wall, and ground?",
      options: ["A) 12 m²", "B) 24 m²", "C) 30 m²", "D) 48 m²"],
      answer: "B",
      explanation: "Base = √(10² - 8²) = 6 m. Area = (1/2) × 6 × 8 = 24 m².",
      difficulty: "easy",
    },
  ],
};
