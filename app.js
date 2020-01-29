var matrix = [
  [1, 1, 1, 1],
  [0, 1, 1, 0],
  [0, 1, 0, 1],
  [0, 1, 9, 1],
  [1, 1, 1, 1]
];

function recursiveMatrix(column, row) {
  if (matrix[column][row] == 9) {
    console.log("Achado em: (" + row + ", " + column + ")");
  } else if (matrix[column][row] == 1) {
    console.log("Casa visitada: (" + row + ", " + column + ")");
    matrix[column][row] = "X"; // Casas visitadas (para evitar um loop)

    // Anda para o lado direito
    if (column < matrix.length - 1) {
      recursiveMatrix(column + 1, row);
    }
    // Anda para baixo
    if (row < matrix[column].length - 1) {
      recursiveMatrix(column, row + 1);
    }
    // Anada para o lado esquerdo
    if (column > 0) {
      recursiveMatrix(column - 1, row);
    }
    // Anada para cima
    if (row > 0) {
      recursiveMatrix(column, row - 1);
    }
  }
}

recursiveMatrix(0, 0);
