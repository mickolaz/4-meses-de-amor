const quotes = [
    { text: "O amor é a asa veloz que Deus deu à alma para que ela voe até o céu.", author: "- Michelangelo" },
    { text: "Você é a razão do meu sorriso todos os dias.", author: "- Autor Desconhecido" },
    { text: "O verdadeiro amor é como os fantasmas. Todos falam sobre ele, mas poucos o viram.", author: "- François de La Rochefoucauld" },
    { text: "O amor é uma força mais formidável que qualquer outra. Ele é invisível - não pode ser visto ou medido - e ainda é suficientemente poderoso para transformar você em um momento e te oferecer mais alegria do que qualquer bem material.", author: "- Barbara de Angelis"},
    { text: "O verdadeiro amor não é outra coisa senão a vontade de viver a vida do outro.", author: "- Hermann Hesse"},
    { text: "Amar é encontrar na felicidade de outro a própria felicidade.", author: "- Gottfried Leibniz" },
    { text: "O amor é a única coisa que cresce à medida que se reparte.", author: "- Antoine de Saint-Exupéry" },
    { text: "Amar é encontrar na felicidade de outro a própria felicidade.", author: "- Gottfried Leibniz" },
    { text: "Amar não é olhar um para o outro, é olhar juntos na mesma direção.", author: "- Antoine de Saint-Exupéry" },
    { text: "O amor é a essência da vida, é o que nos faz querer ser melhores a cada dia.", author: "- Autor Desconhecido" },
    { text: "Amar é cuidar um do outro mesmo quando estamos com raiva.", author: "- Autor Desconhecido" },
    { text: "Amar é quando você olha nos olhos de alguém e vê tudo o que precisa.", author: "- Autor Desconhecido" },
    { text: "O amor não se vê com os olhos, mas com o coração.", author: "- William Shakespeare" },
  ];
  
  let currentQuoteIndex = 0;
  
  function changeQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    const quoteText = document.getElementById("quote-text");
    const quoteAuthor = document.getElementById("quote-author");
    quoteText.textContent = quotes[currentQuoteIndex].text;
    quoteAuthor.textContent = quotes[currentQuoteIndex].author;
  }