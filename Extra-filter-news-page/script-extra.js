// 1. Selecteer de knoppen om nieuwsartikelen te filteren
let filterButtons = document.querySelectorAll('input[type="radio"]')

// 2. Wacht tot een gebruiker op een knop van de filters klikt

// Van de filterknoppen: voor elke filterknop, doe hetgeen hieronder
// filterButtons.forEach(filterButton =>{

//     // Voeg een 'change'-event aan elke filterknop toe
//     filterButton.addEventListener('change', function(){
        
//         // Laat 'filtered' de waarde (die aangegeven staat in de html bij de inputs) van elke filterknop betekenen
//         let filtered = filterButton.value;

//         // Laat 'selectedArticles' article-elementen + de waarde van de Filterbutton betekenen
//         let selectedArticles = document.querySelectorAll(`article.${filtered}`)


//         // 3. Verander welke nieuwsartikelen worden laten zien

//         // Haalt de 'active' class van elke artikel af  *'el' staat voor 'element'*
//         document.querySelectorAll('article').forEach(el =>
//             el.classList.remove('active')
//         )

//         // Voegt de 'active' class aan de geselecteerde artikel toe
//         selectedArticles.forEach(selectedArticle =>{
//             selectedArticle.classList.add('active')
//         })
//     })  
// })








