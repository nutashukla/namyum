export function filterData(searchText, foodCards){
    const filterData = Cards.filter((cards) => 
    cards?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
  }

export const Cards = [
    {   
        id: "2",
        name:"Kadhi Pakoda",
        imageID: "https://www.cookwithmanali.com/wp-content/uploads/2020/04/Punjabi-Kadhi-Pakora-768x1164.jpg",
    },
    {
        id: "1",
        name:"Rajma",
        imageID:"https://www.cubesnjuliennes.com/wp-content/uploads/2020/04/Punjabi-Rajma-Recipe.jpg"

    },
    {
        id: "3",
        name:"Gajar Ka Halwa",
        imageID:"https://www.cookwithmanali.com/wp-content/uploads/2018/10/Easy-Instant-Pot-Gajar-Halwa-768x1164.jpg"
    },
    {
        id: "4",
        name:"Kadhai Paneer",
        imageID:"https://www.cookwithmanali.com/wp-content/uploads/2017/03/Best-Kadai-Paneer.jpg"
    },
    {
        id: "5",
        name:"Chole",
        imageID:"https://www.cookwithmanali.com/wp-content/uploads/2023/04/Punjabi-Chole-Masala-768x1164.jpg"
    }

]

export const Menu  =  [
   {
    name:"Rajma",
    id : "1",
    imageID: "https://i0.wp.com/www.flavoursonplate.com/wp-content/uploads/2020/09/Rajma-masala.jpg?w=1200&ssl=1",
    ingridient : ["Ingredients:-",
        "For Rajma",
        "2 cups Rajma, soaked overnight",
        "Salt to taste",
        "Water to boil",
        
        "For Masala:-",
       " 1 tbsp ghee",
        "1 tsp cumin seeds",
        "1 tbsp ginger garlic, coarsely ground",
        "3 large onions, chopped/ grated",
        "Salt to taste",
        "1 tsp turmeric powder",
        "1 tsp red chilli powder",
        "1 tsp coriander powder",
        "1 tsp garam masala",
        "3 large tomatoes, paste",
        "For Garnish:-",
        "Coriander sprig",
        "Ginger julienne",
        ]

   },
   {
    name:"Kadhi pakoda",
    id : "2",
    imageID: "https://i0.wp.com/www.flavoursonplate.com/wp-content/uploads/2020/09/Rajma-masala.jpg?w=1200&ssl=1",
    ingridient : ["Ingredients:-",
        "For Rajma",
        "2 cups Rajma, soaked overnight",
        "Salt to taste",
        "Water to boil",
        
        "For Masala:-",
       " 1 tbsp ghee",
        "1 tsp cumin seeds",
        "1 tbsp ginger garlic, coarsely ground",
        "3 large onions, chopped/ grated",
        "Salt to taste",
        "1 tsp turmeric powder",
        "1 tsp red chilli powder",
        "1 tsp coriander powder",
        "1 tsp garam masala",
        "3 large tomatoes, paste",
        "For Garnish:-",
        "Coriander sprig",
        "Ginger julienne",
        ]

   },
   {
    name:"Gajar Ka Halwa",
    id : "3",
    imageID: "https://i0.wp.com/www.flavoursonplate.com/wp-content/uploads/2020/09/Rajma-masala.jpg?w=1200&ssl=1",
    ingridient : ["Ingredients:-",
        "For Rajma",
        "2 cups Rajma, soaked overnight",
        "Salt to taste",
        "Water to boil",
        
        "For Masala:-",
       " 1 tbsp ghee",
        "1 tsp cumin seeds",
        "1 tbsp ginger garlic, coarsely ground",
        "3 large onions, chopped/ grated",
        "Salt to taste",
        "1 tsp turmeric powder",
        "1 tsp red chilli powder",
        "1 tsp coriander powder",
        "1 tsp garam masala",
        "3 large tomatoes, paste",
        "For Garnish:-",
        "Coriander sprig",
        "Ginger julienne",
        ]

   },
   {
    name:"Kadhai Paneer",
    id : "4",
    imageID: "https://i0.wp.com/www.flavoursonplate.com/wp-content/uploads/2020/09/Rajma-masala.jpg?w=1200&ssl=1",
    ingridient : ["Ingredients:-",
        "For Rajma",
        "2 cups Rajma, soaked overnight",
        "Salt to taste",
        "Water to boil",
        
        "For Masala:-",
       " 1 tbsp ghee",
        "1 tsp cumin seeds",
        "1 tbsp ginger garlic, coarsely ground",
        "3 large onions, chopped/ grated",
        "Salt to taste",
        "1 tsp turmeric powder",
        "1 tsp red chilli powder",
        "1 tsp coriander powder",
        "1 tsp garam masala",
        "3 large tomatoes, paste",
        "For Garnish:-",
        "Coriander sprig",
        "Ginger julienne",
        ]

   },
   {
    name:"Chole",
    id : "5",
    imageID: "https://i0.wp.com/www.flavoursonplate.com/wp-content/uploads/2020/09/Rajma-masala.jpg?w=1200&ssl=1",
    ingridient : ["Ingredients:-",
        "For Rajma",
        "2 cups Rajma, soaked overnight",
        "Salt to taste",
        "Water to boil",
        
        "For Masala:-",
       " 1 tbsp ghee",
        "1 tsp cumin seeds",
        "1 tbsp ginger garlic, coarsely ground",
        "3 large onions, chopped/ grated",
        "Salt to taste",
        "1 tsp turmeric powder",
        "1 tsp red chilli powder",
        "1 tsp coriander powder",
        "1 tsp garam masala",
        "3 large tomatoes, paste",
        "For Garnish:-",
        "Coriander sprig",
        "Ginger julienne",
        ]

   }





]
  