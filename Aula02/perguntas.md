<h1 align="center"> Perguntas </h1>

- Qual a diferença entre a função setup e a função draw?
  - O setup é utilizado para instartar o código, enquanto o draw é utilizado para desenhar na tela

- Qual a diferença entre stroke e fill?
  - stroke: define a cor da linha de contorno
  - fill: define a cor de preenchimento da forma

- Quais as diferentes formas de se passar uma cor para uma função?
  - texto: fill("red"), stroke("blue")
  - rgb: fill(255, 0, 0), stroke(0, 0, 255)
  - cinza: fill(255), stroke(0)
  - rgba: fill(255, 0, 0, 100), stroke(0, 0, 255, 100)
  - hex: fill("#ff0000"), stroke("#0000ff")
  - objetos color: fill(color(255, 0, 0)), stroke(color(0, 0, 255))

- Cite 4 variáveis de globais do P5 que já vem definidas.
  - mouseX e mouseY: dizem respeito a posição do mouse
  - width e height: diz respeito a altura e largura do canvas
  - key: tecla pressionada
  - frameCount: número do frame atual

- Cite duas funções que são invocadas por eventos.
  - mousePressed(): é executada quando o mouse é pressionado
  - keyPressed(): é executada quando uma tecla é pressionada

- O que significam os 4 valores do RGBA?
  - Diz respeito a quantidade de vermelho, verde, azul e o alfa que é a transparência

- Quais funções para remover a borda e o preenchimento de uma forma?
  - noFill() para remover o preenchimento
  - noStroke() para remover a linha de contorno
  