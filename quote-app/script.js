
const categories = ['amazing', 'anger', 'attitude', 'beauty', 'best', 'birthday', 'business', 'change', 'communications', 'computers', 'cool', 'courage', 'design', 'dreams', 'amazing', 'anger', 'art', 'attitude', 'beauty', 'best', 'birthday', 'business', 'car', 'change', 'communications', 'computers', 'cool', 'courage', 'dad', 'dating', 'death', 'design', 'dreams', 'education','environmental', 'equality', 'experience', 'failure', 'faith', 'family', 'famous', 'fear', 'fitness', 'food', 'forgiveness', 'freedom', 'friendship', 'funny', 'future', 'god', 'good', 'government', 'graduation', 'great', 'happiness', 'health', 'history', 'home', 'hope', 'humor', 'imagination', 'inspirational', 'intelligence', 'jealousy', 'knowledge', 'leadership', 'learning', 'legal', 'life', 'love', 'marriage', 'medical', 'men', 'mom', 'money', 'morning', 'movies', 'success',]
const randomIndex = Math.floor(Math.random() * categories.length);
const randomElement = categories[randomIndex];

async function generateQuote() {

    try {
  
      const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=' + randomElement, {
        headers: { 'X-Api-Key': 'cSPmkhPl4Lc13X1xlhBM6w==3kPbVrPjtCRn6rsG' },
        contentType: 'application/json',
      });
  
      const result = await response.json();
  
      if (result && result.length > 0) {
        const quoteData = result[0];
        const quote = `"${quoteData.quote}" - ${quoteData.author}`;
        document.getElementById("quote").innerHTML = quote;
      } else {
        document.getElementById("quote").innerHTML = "No quotes available for the selected category.";
      }
    } catch (error) {
      console.error('Error fetching quotes:', error);
      document.getElementById("quote").innerHTML = "Error fetching quotes. Please check the console for more details.";
    }
  }
  
  

  

