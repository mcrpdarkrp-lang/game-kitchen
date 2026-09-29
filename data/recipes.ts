export type GameTag =
  | "The Legend of Zelda"
  | "Stardew Valley"
  | "Final Fantasy"
  | "Skyrim"
  | "Minecraft"
  | "Persona"
  | "Animal Crossing"
  | "Monster Hunter";

export type Recipe = {
  slug: string;
  title: string;
  game: GameTag;
  difficulty: "Fácil" | "Médio" | "Difícil";
  prepTime: string;
  servings: number;
  image: string;
  accent: string;
  summary: string;
  warning: string;
  ingredients: string[];
  steps: string[];
  inGame: string;
  mood: string;
  category: string;
};

export const recipes: Recipe[] = [
  {
    slug: "ensopado-de-zelda",
    title: "Ensopado de Zelda",
    game: "The Legend of Zelda",
    difficulty: "Médio",
    prepTime: "45 min",
    servings: 2,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
    accent: "#7ef9a6",
    summary: "Um caldo quente e reconfortante com cogumelos, batata e ervas.",
    warning: "Receita de fã inspirada em um prato de Zelda. Não oficial.",
    ingredients: [
      "2 colheres de sopa de azeite",
      "1 cebola roxa picada",
      "2 batatas médias cortadas",
      "200g de cogumelos",
      "1 cenoura em fatias",
      "500ml de caldo vegetal",
      "1 colher de chá de alecrim",
      "Sal e pimenta a gosto",
    ],
    steps: [
      "Refogue a cebola em azeite até dourar.",
      "Adicione as batatas, cogumelos e cenoura.",
      "Despeje o caldo e cozinhe até os legumes ficarem macios.",
      "Tempere com alecrim, sal e pimenta.",
      "Sirva em tigela com pão rústico.",
    ],
    inGame: "No jogo, esse prato restaura saúde e te dá energia para explorar cavernas em segurança.",
    mood: "Aconchegante",
    category: "Soup",
  },
  {
    slug: "ramen-de-persona",
    title: "Ramen de Persona",
    game: "Persona",
    difficulty: "Médio",
    prepTime: "35 min",
    servings: 2,
    image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?auto=format&fit=crop&w=1200&q=80",
    accent: "#ff5ea8",
    summary: "Macarrão com caldo aromático, ovo e vegetais para um boost de coragem.",
    warning: "Receita de fã inspirada no ramen de Persona. Não oficial.",
    ingredients: [
      "2 porções de macarrão instantâneo",
      "500ml de caldo de frango",
      "1 colher de sopa de molho de soja",
      "1 colher de chá de gengibre ralado",
      "1 ovo",
      "1 colher de sopa de cebolinha",
      "Espinafre e shiitake",
    ],
    steps: [
      "Aqueça o caldo com soja e gengibre.",
      "Cozinhe o macarrão e reserve.",
      "Adicione os cogumelos e o espinafre ao caldo.",
      "Monte o prato com macarrão, ovo e cebolinha.",
      "Sirva em tigela quente.",
    ],
    inGame: "No jogo, funciona como um prato energético que melhora a disposição antes de uma noite intensa.",
    mood: "Energetizante",
    category: "Noodles",
  },
  {
    slug: "salmão-do-vale",
    title: "Salmão do Vale",
    game: "Stardew Valley",
    difficulty: "Fácil",
    prepTime: "20 min",
    servings: 2,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80",
    accent: "#facc15",
    summary: "Peixe grelhado com ervas e limão, simples e irresistível.",
    warning: "Receita fan-made inspirada em uma refeição do Stardew Valley. Não oficial.",
    ingredients: [
      "2 filés de salmão",
      "1 colher de sopa de manteiga",
      "1 limão",
      "1 colher de chá de alho",
      "Ervas frescas",
      "Sal e pimenta",
    ],
    steps: [
      "Tempere o peixe com sal, pimenta e alho.",
      "Grelhe em uma frigideira com manteiga.",
      "Finalize com suco de limão e ervas.",
      "Sirva com arroz ou batata.",
    ],
    inGame: "No jogo, esse prato é um alimento básico de produtividade e conforto para o dia de trabalho.",
    mood: "Rustic",
    category: "Main",
  },
  {
    slug: "frango-de-skyrim",
    title: "Frango de Skyrim",
    game: "Skyrim",
    difficulty: "Médio",
    prepTime: "50 min",
    servings: 3,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1200&q=80",
    accent: "#8b5cf6",
    summary: "Uma assadeira poderosa com batata, alho e ervas silvestres.",
    warning: "Receita interpretativa inspirada em Skyrim. Não oficial.",
    ingredients: [
      "500g de peito de frango",
      "4 batatas",
      "3 dentes de alho",
      "1 colher de sopa de alecrim",
      "200ml de creme de leite",
      "Sal e pimenta",
    ],
    steps: [
      "Tempere o frango e deixe descansar.",
      "Corte as batatas e cozinhe levemente.",
      "Misture alho, creme e ervas.",
      "Asse até dourar e ficar macio.",
      "Servir com salada simples.",
    ],
    inGame: "No jogo, seria uma comida tradicional de viagem que dá energia para longas jornadas.",
    mood: "Fortificante",
    category: "Roast",
  },
  {
    slug: "pao-de-minecraft",
    title: "Pão de Minecraft",
    game: "Minecraft",
    difficulty: "Fácil",
    prepTime: "25 min",
    servings: 4,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    accent: "#7ef9a6",
    summary: "Pão caseiro com textura crocante e ótima para compartilhar.",
    warning: "Receita fan-made inspirada em um item clássico de Minecraft. Não oficial.",
    ingredients: [
      "500g de farinha",
      "300ml de água morna",
      "1 colher de sopa de fermento",
      "1 colher de chá de sal",
      "1 colher de sopa de mel",
    ],
    steps: [
      "Misture ingredientes até dar liga.",
      "Modelar e deixar descansar.",
      "Asse até dourar.",
      "Sirva em fatias.",
    ],
    inGame: "No jogo, seria o alimento básico que sustenta a jornada e o progresso de cada dia.",
    mood: "Clássico",
    category: "Bread",
  },
  {
    slug: "sopa-de-final-fantasy",
    title: "Sopa de Final Fantasy",
    game: "Final Fantasy",
    difficulty: "Médio",
    prepTime: "40 min",
    servings: 2,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=80",
    accent: "#8b5cf6",
    summary: "Uma sopa rica com legumes, ervas e textura encorpada.",
    warning: "Receita inspirada em um prato lendário de Final Fantasy. Não oficial.",
    ingredients: [
      "1 litro de caldo",
      "1 cenoura",
      "2 batatas",
      "1 cebola",
      "1 colher de sopa de manteiga",
      "Hortelã e alecrim",
    ],
    steps: [
      "Refogue cebola e cenoura.",
      "Adicione batata e caldo.",
      "Cozinhe até ficar macio.",
      "Batida levemente para textura cremosa.",
      "Finalize com ervas.",
    ],
    inGame: "No jogo, essa sopa seria o tipo de preparo que recupera energia em missões longas.",
    mood: "Energizante",
    category: "Soup",
  },
  {
    slug: "macarrao-de-animal-crossing",
    title: "Macarrão de Animal Crossing",
    game: "Animal Crossing",
    difficulty: "Fácil",
    prepTime: "30 min",
    servings: 2,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=1200&q=80",
    accent: "#ff9f43",
    summary: "Uma massa simples, acolhedora e cheia de sabor de casa.",
    warning: "Receita interpretativa inspirada em Animal Crossing. Não oficial.",
    ingredients: [
      "250g de macarrão",
      "2 colheres de manteiga",
      "1 xícara de queijo ralado",
      "1 colher de sopa de alho",
      "Pimenta e sal",
    ],
    steps: [
      "Cozinhe o macarrão.",
      "Refogue o alho em manteiga.",
      "Misture ao macarrão e queijo.",
      "Finalize com pimenta e ervas.",
    ],
    inGame: "No jogo, seria a comida perfeita para um churrasco tranquilo com vizinhos.",
    mood: "Conforto",
    category: "Pasta",
  },
  {
    slug: "cauda-de-monster-hunter",
    title: "Cauda de Monstro",
    game: "Monster Hunter",
    difficulty: "Difícil",
    prepTime: "55 min",
    servings: 2,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    accent: "#ff5ea8",
    summary: "Receita intensa com carne, molho e vegetais de sabor profundo.",
    warning: "Receita fan-made inspirada em Monster Hunter. Não oficial.",
    ingredients: [
      "400g de carne de caça",
      "1 cebola",
      "2 colheres de molho shoyu",
      "1 colher de chá de pimenta",
      "Cogumelos",
      "Tomate e alho",
    ],
    steps: [
      "Marinar a carne com molho e pimenta.",
      "Refogar cebola e alho.",
      "Adicionar a carne e os legumes.",
      "Cozinhar até o molho reduzir.",
      "Servir com arroz ou batata.",
    ],
    inGame: "No jogo, seria um prato de aventura, ideal para recuperar resistência em caçadas longas.",
    mood: "Pesado",
    category: "Hunt",
  },
];

export const gameFilters = [
  "Todos",
  "The Legend of Zelda",
  "Stardew Valley",
  "Final Fantasy",
  "Skyrim",
  "Minecraft",
  "Persona",
  "Animal Crossing",
  "Monster Hunter",
];
