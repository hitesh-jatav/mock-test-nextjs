export const syllogism = {
  set1: [
    {
      id: 1,
      question:
        "Statements: 1. All cats are dogs. 2. Some dogs are tigers. Conclusions: I. Some cats are tigers. II. Some tigers are cats.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "D",
      explanation:
        "No direct relation between cats and tigers is established. Hence, neither conclusion follows.",
      difficulty: "Easy",
    },
    {
      id: 2,
      question:
        "Statements: 1. No apple is orange. 2. All oranges are bananas. Conclusions: I. No apple is banana. II. Some bananas are not apples.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "B",
      explanation:
        "Conclusion II follows because oranges (a subset of bananas) are not apples. Conclusion I is false as apples could still be bananas.",
      difficulty: "Medium",
    },
    {
      id: 3,
      question:
        "Statements: 1. Some pens are pencils. 2. All pencils are erasers. Conclusions: I. Some pens are erasers. II. All erasers are pens.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "A",
      explanation:
        "Since some pens are pencils and all pencils are erasers, some pens must be erasers. Conclusion II is invalid as it reverses the logic.",
      difficulty: "Easy",
    },
    {
      id: 4,
      question:
        "Statements: 1. All books are novels. 2. Some novels are magazines. Conclusions: I. Some books are magazines. II. Some magazines are books.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "D",
      explanation:
        "No direct link between books and magazines exists. The 'some' relation doesn't guarantee overlap between books and magazines.",
      difficulty: "Medium",
    },
    {
      id: 5,
      question:
        "Statements: 1. Some teachers are doctors. 2. All doctors are engineers. Conclusions: I. Some engineers are teachers. II. All teachers are engineers.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "A",
      explanation:
        "Conclusion I follows because some teachers (doctors) are engineers. Conclusion II is false as not all teachers must be engineers.",
      difficulty: "Hard",
    },
    {
      id: 6,
      question:
        "Statements: 1. All roses are flowers. 2. Some flowers fade quickly. Conclusions: I. Some roses fade quickly. II. All flowers that fade quickly are roses.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "D",
      explanation:
        "The 'some' relation doesn't specify which flowers fade quickly, so neither conclusion necessarily follows.",
      difficulty: "Medium",
    },
    {
      id: 7,
      question:
        "Statements: 1. No bird is a mammal. 2. All bats are mammals. Conclusions: I. No bat is a bird. II. Some mammals are not bats.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "A",
      explanation:
        "Conclusion I follows because bats are mammals and no mammal is a bird. Conclusion II is not necessarily true.",
      difficulty: "Hard",
    },
    {
      id: 8,
      question:
        "Statements: 1. Some phones are gadgets. 2. All gadgets are expensive. Conclusions: I. Some phones are expensive. II. All expensive things are gadgets.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "A",
      explanation:
        "Conclusion I follows because some phones (gadgets) are expensive. Conclusion II is false (reverse logic).",
      difficulty: "Easy",
    },
    {
      id: 9,
      question:
        "Statements: 1. All politicians are leaders. 2. Some leaders are corrupt. Conclusions: I. Some politicians are corrupt. II. All corrupt people are leaders.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "D",
      explanation:
        "No direct link between politicians and corrupt individuals is given. Conclusion II is also unsupported.",
      difficulty: "Hard",
    },
    {
      id: 10,
      question:
        "Statements: 1. Some artists are poets. 2. All poets are creative. Conclusions: I. Some artists are creative. II. All creative people are poets.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "A",
      explanation:
        "Conclusion I follows because some artists (poets) are creative. Conclusion II is false (reverse logic).",
      difficulty: "Medium",
    },
    {
      id: 11,
      question:
        "Statements: 1. No tree is a plant. 2. All plants are green. Conclusions: I. No tree is green. II. Some green things are not trees.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "B",
      explanation:
        "Conclusion II follows because plants (green) are not trees. Conclusion I is false (trees could still be green independently).",
      difficulty: "Hard",
    },
    {
      id: 12,
      question:
        "Statements: 1. All students are learners. 2. Some learners are teachers. Conclusions: I. Some students are teachers. II. Some teachers are students.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "D",
      explanation:
        "The 'some' relation doesn’t guarantee an overlap between students and teachers.",
      difficulty: "Medium",
    },
    {
      id: 13,
      question:
        "Statements: 1. Some cars are vehicles. 2. All vehicles are machines. Conclusions: I. Some cars are machines. II. All machines are vehicles.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "A",
      explanation:
        "Conclusion I follows because some cars (vehicles) are machines. Conclusion II is false (reverse logic).",
      difficulty: "Easy",
    },
    {
      id: 14,
      question:
        "Statements: 1. No fish is a bird. 2. Some birds are swans. Conclusions: I. No swan is a fish. II. Some swans are not fish.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "C",
      explanation:
        "Both conclusions follow because swans are birds, and no bird is a fish.",
      difficulty: "Hard",
    },
    {
      id: 15,
      question:
        "Statements: 1. All lawyers are graduates. 2. Some graduates are criminals. Conclusions: I. Some lawyers are criminals. II. Some criminals are lawyers.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "D",
      explanation:
        "No direct connection between lawyers and criminals is established.",
      difficulty: "Medium",
    },
  ],
  set2: [
    {
      id: 1,
      question:
        "Statements: 1. All roses are flowers. 2. Some flowers fade quickly. Conclusions: I. Some roses fade quickly. II. All flowers that fade quickly are roses.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "D",
      explanation:
        "The 'some' relation doesn't specify which flowers fade quickly, so neither conclusion necessarily follows.",
      difficulty: "Medium",
    },
    {
      id: 2,
      question:
        "Statements: 1. No bird is a mammal. 2. All bats are mammals. Conclusions: I. No bat is a bird. II. Some mammals are not bats.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "A",
      explanation:
        "Conclusion I follows because bats are mammals and no mammal is a bird. Conclusion II is not necessarily true.",
      difficulty: "Hard",
    },
    {
      id: 3,
      question:
        "Statements: 1. Some phones are gadgets. 2. All gadgets are expensive. Conclusions: I. Some phones are expensive. II. All expensive things are gadgets.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "A",
      explanation:
        "Conclusion I follows because some phones (gadgets) are expensive. Conclusion II is false (reverse logic).",
      difficulty: "Easy",
    },
    {
      id: 4,
      question:
        "Statements: 1. All politicians are leaders. 2. Some leaders are corrupt. Conclusions: I. Some politicians are corrupt. II. All corrupt people are leaders.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "D",
      explanation:
        "No direct link between politicians and corrupt individuals is given. Conclusion II is also unsupported.",
      difficulty: "Hard",
    },
    {
      id: 5,
      question:
        "Statements: 1. Some artists are poets. 2. All poets are creative. Conclusions: I. Some artists are creative. II. All creative people are poets.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "A",
      explanation:
        "Conclusion I follows because some artists (poets) are creative. Conclusion II is false (reverse logic).",
      difficulty: "Medium",
    },
    {
      id: 6,
      question:
        "Statements: 1. No tree is a plant. 2. All plants are green. Conclusions: I. No tree is green. II. Some green things are not trees.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "B",
      explanation:
        "Conclusion II follows because plants (green) are not trees. Conclusion I is false (trees could still be green independently).",
      difficulty: "Hard",
    },
    {
      id: 7,
      question:
        "Statements: 1. All students are learners. 2. Some learners are teachers. Conclusions: I. Some students are teachers. II. Some teachers are students.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "D",
      explanation:
        "The 'some' relation doesn't guarantee an overlap between students and teachers.",
      difficulty: "Medium",
    },
    {
      id: 8,
      question:
        "Statements: 1. Some cars are vehicles. 2. All vehicles are machines. Conclusions: I. Some cars are machines. II. All machines are vehicles.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "A",
      explanation:
        "Conclusion I follows because some cars (vehicles) are machines. Conclusion II is false (reverse logic).",
      difficulty: "Easy",
    },
    {
      id: 9,
      question:
        "Statements: 1. No fish is a bird. 2. Some birds are swans. Conclusions: I. No swan is a fish. II. Some swans are not fish.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "C",
      explanation:
        "Both conclusions follow because swans are birds, and no bird is a fish.",
      difficulty: "Hard",
    },
    {
      id: 10,
      question:
        "Statements: 1. All lawyers are graduates. 2. Some graduates are criminals. Conclusions: I. Some lawyers are criminals. II. Some criminals are lawyers.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "D",
      explanation:
        "No direct connection between lawyers and criminals is established.",
      difficulty: "Medium",
    },
    {
      id: 11,
      question:
        "Statements: 1. All rings are circles. 2. Some circles are wheels. Conclusions: I. Some rings are wheels. II. Some wheels are rings.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "D",
      explanation:
        "No direct link between rings and wheels exists. The 'some' relation doesn't guarantee overlap.",
      difficulty: "Easy",
    },
    {
      id: 12,
      question:
        "Statements: 1. No laptop is a tablet. 2. All tablets are gadgets. Conclusions: I. No laptop is a gadget. II. Some gadgets are not laptops.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "B",
      explanation:
        "Conclusion II follows because tablets (gadgets) are not laptops. Conclusion I is false (laptops could still be gadgets).",
      difficulty: "Medium",
    },
    {
      id: 13,
      question:
        "Statements: 1. Some actors are singers. 2. All singers are artists. Conclusions: I. Some actors are artists. II. All artists are singers.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "A",
      explanation:
        "Conclusion I follows because some actors (singers) are artists. Conclusion II is false (reverse logic).",
      difficulty: "Easy",
    },
    {
      id: 14,
      question:
        "Statements: 1. All politicians are debaters. 2. Some debaters are liars. Conclusions: I. Some politicians are liars. II. Some liars are politicians.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "D",
      explanation:
        "No direct connection between politicians and liars is established.",
      difficulty: "Hard",
    },
    {
      id: 15,
      question:
        "Statements: 1. Some metals are gold. 2. All gold are expensive. Conclusions: I. Some metals are expensive. II. All expensive things are gold.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "A",
      explanation:
        "Conclusion I follows because some metals (gold) are expensive. Conclusion II is false (reverse logic).",
      difficulty: "Medium",
    },
  ],
  set3: [
    {
      id: 1,
      question:
        "Statements: 1. All rivers are water bodies. 2. Some water bodies are lakes. Conclusions: I. Some rivers are lakes. II. Some lakes are rivers.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "D",
      explanation:
        "No direct connection between rivers and lakes is established by the statements.",
      difficulty: "Easy",
    },
    {
      id: 2,
      question:
        "Statements: 1. No pen is a pencil. 2. All pencils are stationery. Conclusions: I. No pen is stationery. II. Some stationery are not pens.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "B",
      explanation:
        "Conclusion II follows because pencils (stationery) are not pens. Conclusion I is invalid as pens could be other types of stationery.",
      difficulty: "Medium",
    },
    {
      id: 3,
      question:
        "Statements: 1. Some doctors are surgeons. 2. All surgeons are specialists. Conclusions: I. Some doctors are specialists. II. All specialists are surgeons.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "A",
      explanation:
        "Conclusion I follows because some doctors (surgeons) are specialists. Conclusion II reverses the logic and is invalid.",
      difficulty: "Hard",
    },
    {
      id: 4,
      question:
        "Statements: 1. All computers are machines. 2. Some machines are electronic. Conclusions: I. Some computers are electronic. II. All electronic things are computers.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "D",
      explanation:
        "No definite relationship between computers and electronic items is established.",
      difficulty: "Easy",
    },
    {
      id: 5,
      question:
        "Statements: 1. No vegetable is a fruit. 2. All fruits are nutritious. Conclusions: I. No vegetable is nutritious. II. Some nutritious things are not vegetables.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "B",
      explanation:
        "Conclusion II follows because fruits (nutritious) are not vegetables. Conclusion I is false as vegetables may be nutritious independently.",
      difficulty: "Medium",
    },
    {
      id: 6,
      question:
        "Statements: 1. Some books are novels. 2. All novels are interesting. Conclusions: I. Some books are interesting. II. All interesting things are novels.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "A",
      explanation:
        "Conclusion I follows logically. Conclusion II makes an invalid universal claim.",
      difficulty: "Hard",
    },
    {
      id: 7,
      question:
        "Statements: 1. All soldiers are brave. 2. Some brave people are martyrs. Conclusions: I. Some soldiers are martyrs. II. Some martyrs are soldiers.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "D",
      explanation:
        "The 'some' relation doesn't guarantee overlap between soldiers and martyrs.",
      difficulty: "Easy",
    },
    {
      id: 8,
      question:
        "Statements: 1. No diamond is cheap. 2. Some rings are diamonds. Conclusions: I. Some rings are not cheap. II. All cheap things are rings.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "A",
      explanation:
        "Conclusion I follows because diamond rings cannot be cheap. Conclusion II is illogical.",
      difficulty: "Medium",
    },
    {
      id: 9,
      question:
        "Statements: 1. All banks are financial institutions. 2. Some financial institutions are corrupt. Conclusions: I. Some banks are corrupt. II. All corrupt institutions are banks.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "D",
      explanation:
        "No direct connection between banks and corrupt institutions is established.",
      difficulty: "Hard",
    },
    {
      id: 10,
      question:
        "Statements: 1. Some teachers are professors. 2. All professors are educated. Conclusions: I. Some teachers are educated. II. All educated people are professors.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "A",
      explanation:
        "Conclusion I follows logically. Conclusion II makes an invalid universal claim.",
      difficulty: "Easy",
    },
    {
      id: 11,
      question:
        "Statements: 1. No cat is a dog. 2. Some pets are cats. Conclusions: I. Some pets are not dogs. II. All dogs are pets.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "A",
      explanation:
        "Conclusion I follows because pet cats are not dogs. Conclusion II is unsupported.",
      difficulty: "Medium",
    },
    {
      id: 12,
      question:
        "Statements: 1. All scientists are researchers. 2. Some researchers are Nobel laureates. Conclusions: I. Some scientists are Nobel laureates. II. All Nobel laureates are researchers.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "D",
      explanation:
        "No definite relationship between scientists and Nobel laureates is established.",
      difficulty: "Hard",
    },
    {
      id: 13,
      question:
        "Statements: 1. Some shoes are boots. 2. All boots are waterproof. Conclusions: I. Some shoes are waterproof. II. All waterproof footwear are boots.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "A",
      explanation:
        "Conclusion I follows logically. Conclusion II makes an invalid universal claim.",
      difficulty: "Easy",
    },
    {
      id: 14,
      question:
        "Statements: 1. No mountain is a valley. 2. All valleys are landscapes. Conclusions: I. No mountain is a landscape. II. Some landscapes are not mountains.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "B",
      explanation:
        "Conclusion II follows because valleys (landscapes) are not mountains. Conclusion I is false as mountains are landscapes.",
      difficulty: "Medium",
    },
    {
      id: 15,
      question:
        "Statements: 1. Some artists are painters. 2. All painters are creative. Conclusions: I. Some artists are creative. II. All creative people are painters.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "A",
      explanation:
        "Conclusion I follows logically. Conclusion II reverses the logic and is invalid.",
      difficulty: "Hard",
    },
  ],
  set4: [
    {
      id: 1,
      question:
        "Statements: 1. All lions are cats. 2. Some cats are pets. Conclusions: I. Some lions are pets. II. Some pets are lions.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "D",
      explanation:
        "The 'some' relation doesn't guarantee overlap between lions and pets.",
      difficulty: "Easy",
    },
    {
      id: 2,
      question:
        "Statements: 1. No paper is plastic. 2. All plastics are recyclable. Conclusions: I. No paper is recyclable. II. Some recyclables are not paper.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "B",
      explanation:
        "Conclusion II follows because plastics (recyclable) are not paper. Conclusion I is false as paper may be recyclable.",
      difficulty: "Medium",
    },
    {
      id: 3,
      question:
        "Statements: 1. Some ministers are honest. 2. All honest people are trustworthy. Conclusions: I. Some ministers are trustworthy. II. All trustworthy people are ministers.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "A",
      explanation:
        "Conclusion I follows because some ministers (honest) are trustworthy. Conclusion II reverses the logic.",
      difficulty: "Hard",
    },
    {
      id: 4,
      question:
        "Statements: 1. All keyboards are input devices. 2. Some input devices are wireless. Conclusions: I. Some keyboards are wireless. II. All wireless devices are keyboards.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "D",
      explanation:
        "No definite relationship between keyboards and wireless devices is established.",
      difficulty: "Easy",
    },
    {
      id: 5,
      question:
        "Statements: 1. No desert is cold. 2. All cold places have snow. Conclusions: I. No desert has snow. II. Some snowy places are not deserts.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "C",
      explanation:
        "Both conclusions follow because deserts (not cold) cannot have snow, and snowy places (cold) exclude deserts.",
      difficulty: "Medium",
    },
    {
      id: 6,
      question:
        "Statements: 1. Some investors are wealthy. 2. All wealthy people pay taxes. Conclusions: I. Some investors pay taxes. II. All tax-payers are wealthy.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "A",
      explanation:
        "Conclusion I follows logically. Conclusion II makes an invalid universal claim.",
      difficulty: "Hard",
    },
    {
      id: 7,
      question:
        "Statements: 1. All planets orbit stars. 2. Some stars are binary. Conclusions: I. Some planets orbit binary stars. II. All binary systems have planets.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "A",
      explanation:
        "Conclusion I is possible. Conclusion II is an unsupported universal claim.",
      difficulty: "Easy",
    },
    {
      id: 8,
      question:
        "Statements: 1. No virus is a living organism. 2. All living organisms reproduce. Conclusions: I. Viruses do not reproduce. II. Some non-living things are viruses.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "B",
      explanation:
        "Conclusion II follows from Statement 1. Conclusion I cannot be definitively drawn.",
      difficulty: "Medium",
    },
    {
      id: 9,
      question:
        "Statements: 1. Some algorithms are complex. 2. All complex systems fail. Conclusions: I. Some algorithms fail. II. All failing systems are complex.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "D",
      explanation:
        "No direct connection between algorithms and failing systems is established.",
      difficulty: "Hard",
    },
    {
      id: 10,
      question:
        "Statements: 1. All entrepreneurs are risk-takers. 2. Some risk-takers succeed. Conclusions: I. Some entrepreneurs succeed. II. All successful people are risk-takers.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "A",
      explanation:
        "Conclusion I follows logically. Conclusion II makes an invalid universal claim.",
      difficulty: "Easy",
    },
    {
      id: 11,
      question:
        "Statements: 1. No reptile is warm-blooded. 2. All mammals are warm-blooded. Conclusions: I. No reptile is a mammal. II. Some warm-blooded animals are not reptiles.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "C",
      explanation:
        "Both conclusions follow from the exclusion between reptiles and mammals.",
      difficulty: "Medium",
    },
    {
      id: 12,
      question:
        "Statements: 1. Some fiction books are bestsellers. 2. No bestseller is poorly written. Conclusions: I. Some fiction books are not poorly written. II. All poorly written books are fiction.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "A",
      explanation:
        "Conclusion I follows because bestsellers (including some fiction) are not poorly written. Conclusion II is unsupported.",
      difficulty: "Hard",
    },
    {
      id: 13,
      question:
        "Statements: 1. All engineers are problem-solvers. 2. Some problem-solvers are artists. Conclusions: I. Some engineers are artists. II. All artists are problem-solvers.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "D",
      explanation:
        "No direct connection between engineers and artists is established.",
      difficulty: "Easy",
    },
    {
      id: 14,
      question:
        "Statements: 1. No inorganic compound contains carbon. 2. All organic compounds contain carbon. Conclusions: I. No organic compound is inorganic. II. Some carbon-containing compounds are not organic.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "A",
      explanation:
        "Conclusion I follows from mutual exclusion. Conclusion II contradicts Statement 2.",
      difficulty: "Medium",
    },
    {
      id: 15,
      question:
        "Statements: 1. Some legal documents are contracts. 2. All contracts are binding. Conclusions: I. Some legal documents are binding. II. All binding agreements are contracts.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "A",
      explanation:
        "Conclusion I follows logically. Conclusion II makes an invalid universal claim.",
      difficulty: "Hard",
    },
  ],
  set5: [
    {
      id: 1,
      question:
        "Statements: 1. All smartphones are gadgets. 2. Some gadgets are expensive. Conclusions: I. Some smartphones are expensive. II. All expensive items are gadgets.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "D",
      explanation:
        "No direct link between smartphones and expensive items is established. Conclusion II is an invalid generalization.",
      difficulty: "Easy",
    },
    {
      id: 2,
      question:
        "Statements: 1. No herbivore eats meat. 2. All cows are herbivores. Conclusions: I. No cow eats meat. II. Some meat-eaters are not cows.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "C",
      explanation:
        "Both conclusions follow - Conclusion I via direct classification, II because non-herbivores exist.",
      difficulty: "Medium",
    },
    {
      id: 3,
      question:
        "Statements: 1. Some AI systems are self-learning. 2. All self-learning systems improve with data. Conclusions: I. Some AI systems improve with data. II. Only self-learning systems improve with data.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "A",
      explanation:
        "Conclusion I logically follows. Conclusion II's 'only' claim is unsupported.",
      difficulty: "Hard",
    },
    {
      id: 4,
      question:
        "Statements: 1. Every rectangle is a quadrilateral. 2. Some quadrilaterals are squares. Conclusions: I. Some rectangles are squares. II. All squares are rectangles.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "B",
      explanation:
        "Conclusion II is mathematically correct. Conclusion I doesn't necessarily follow from given statements.",
      difficulty: "Easy",
    },
    {
      id: 5,
      question:
        "Statements: 1. No tropical bird migrates. 2. Some parrots are tropical birds. Conclusions: I. Some parrots do not migrate. II. All migrating birds are non-tropical.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "C",
      explanation:
        "Both conclusions follow - I via direct classification, II by contrapositive of Statement 1.",
      difficulty: "Medium",
    },
    {
      id: 6,
      question:
        "Statements: 1. Some cryptocurrencies are volatile. 2. All volatile assets are high-risk. Conclusions: I. Some cryptocurrencies are high-risk. II. To avoid risk, avoid all cryptocurrencies.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "A",
      explanation:
        "Conclusion I follows logically. Conclusion II makes an extreme, unsupported claim.",
      difficulty: "Hard",
    },
    {
      id: 7,
      question:
        "Statements: 1. All vitamins are essential. 2. Some supplements contain vitamins. Conclusions: I. Some supplements contain essential nutrients. II. All essential nutrients are vitamins.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "A",
      explanation:
        "Conclusion I follows from the chain. Conclusion II is an invalid reversal.",
      difficulty: "Easy",
    },
    {
      id: 8,
      question:
        "Statements: 1. No desert plant needs daily watering. 2. All cacti are desert plants. Conclusions: I. No cactus needs daily watering. II. If a plant needs daily watering, it's not a cactus.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "C",
      explanation:
        "Both conclusions follow - I directly, II via contrapositive logic.",
      difficulty: "Medium",
    },
    {
      id: 9,
      question:
        "Statements: 1. Some startups become unicorns. 2. No unicorn company is poorly managed. Conclusions: I. Some well-managed companies are startups. II. All poorly managed companies fail.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "A",
      explanation:
        "Conclusion I follows because unicorns (subset of startups) are well-managed. Conclusion II introduces new, unsupported information.",
      difficulty: "Hard",
    },
    {
      id: 10,
      question:
        "Statements: 1. All prime numbers are integers. 2. Some even numbers are prime. Conclusions: I. Some integers are even. II. No even number is prime.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "A",
      explanation:
        "Conclusion I follows mathematically (since 2 is even and prime). Conclusion II contradicts Statement 2.",
      difficulty: "Easy",
    },
    {
      id: 11,
      question:
        "Statements: 1. No antibiotic works on viruses. 2. Some infections are viral. Conclusions: I. Some infections can't be treated with antibiotics. II. All non-viral infections can be treated with antibiotics.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "A",
      explanation:
        "Conclusion I follows directly. Conclusion II makes an unsupported absolute claim.",
      difficulty: "Medium",
    },
    {
      id: 12,
      question:
        "Statements: 1. All quantum computers use qubits. 2. Some qubit systems are error-prone. Conclusions: I. Some quantum computers are error-prone. II. Error-free computing requires avoiding qubits.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "A",
      explanation:
        "Conclusion I follows via the chain. Conclusion II introduces an extreme, unsupported solution.",
      difficulty: "Hard",
    },
    {
      id: 13,
      question:
        "Statements: 1. Every soccer player is an athlete. 2. Some athletes use performance enhancers. Conclusions: I. Some soccer players use performance enhancers. II. Only athletes use performance enhancers.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "D",
      explanation:
        "Neither conclusion necessarily follows - the 'some' relation doesn't specify which athletes.",
      difficulty: "Easy",
    },
    {
      id: 14,
      question:
        "Statements: 1. All NFTs are digital assets. 2. No digital asset is tangible. Conclusions: I. No NFT is tangible. II. Some non-digital assets are tangible.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "C",
      explanation:
        "Both conclusions follow - I via direct classification, II because tangible assets must be non-digital.",
      difficulty: "Medium",
    },
    {
      id: 15,
      question:
        "Statements: 1. Some algorithms are heuristic. 2. All heuristic methods involve approximation. Conclusions: I. Some algorithms involve approximation. II. For exact solutions, avoid all algorithms.",
      options: [
        "A) Only I follows",
        "B) Only II follows",
        "C) Both I and II follow",
        "D) Neither I nor II follows",
      ],
      answer: "A",
      explanation:
        "Conclusion I follows logically. Conclusion II makes an extreme, unsupported claim about all algorithms.",
      difficulty: "Hard",
    },
  ],
};
