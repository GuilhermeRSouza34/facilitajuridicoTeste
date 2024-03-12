function calcularDistancia(ponto1, ponto2) {
    console.log('Pontos: ' + ponto1.coord_x + ' ' + ponto2.coord_y);
    const deltaX = ponto1.coord_x - ponto2.coord_x;
    const deltaY = ponto1.coord_y - ponto2.coord_y;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  }
  
function calcularCaminhoDistancia(caminho, pontos) {
    let distanciaTotal = 0;
    for (let i = 0; i < caminho.length - 1; i++) {
      const pontoAtual = pontos[caminho[i]];
      const proximoPonto = pontos[caminho[i + 1]];
      distanciaTotal += calcularDistancia(pontoAtual, proximoPonto);
    }
    return distanciaTotal;
  }
  
function swap(caminho, i, j) {
    const novoCaminho = [...caminho];
    const temp = novoCaminho[i];
    novoCaminho[i] = novoCaminho[j];
    novoCaminho[j] = temp;
    return novoCaminho;
  }
  
function tsp2opt(pontos) {
    const numPontos = pontos.length;
  
    // Inicialização com um caminho simples: 0, 1, 2, ..., n-1
    let melhorCaminho = Array.from({ length: numPontos }, (_, i) => i);
  
    let melhorDistancia = calcularCaminhoDistancia(melhorCaminho, pontos);
  
    let melhorado = true;
  
    while (melhorado) {
      melhorado = false;
  
      for (let i = 1; i < numPontos - 1; i++) {
        for (let j = i + 1; j < numPontos; j++) {
          const novoCaminho = swap(melhorCaminho, i, j);
          const novaDistancia = calcularCaminhoDistancia(novoCaminho, pontos);
  
          if (novaDistancia < melhorDistancia) {
            melhorCaminho = novoCaminho;
            melhorDistancia = novaDistancia;
            melhorado = true;
          }
        }
      }
    }
  
    return melhorCaminho;
  }

 
 module.exports = {
    calcularDistancia,
    calcularCaminhoDistancia,
    swap,
    tsp2opt
  };