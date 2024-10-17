print("\\------Ejercicio 1----------------\\")


def imprimir_impares_inverso(inicio, fin):
    for num in range(fin, inicio - 1, -1):
        if num % 2 != 0:
            print(num)

# Ejemplo de uso:
imprimir_impares_inverso(1, 20)

print("\n\\------Ejercicio 2----------------\\")

def imprimir_impares_inverso_horizontal(inicio, fin):
    impares = [str(num) for num in range(fin, inicio - 1, -1) if num % 2 != 0]
    print(", ".join(impares))

# Ejemplo de uso:
imprimir_impares_inverso_horizontal(1, 20)

print("\n\\------Ejercicio 3----------------\\")

def crear_matriz_triangular(n):
    matriz = [[1 if j <= i else 0 for j in range(n)] for i in range(n)]
    return matriz

# Ejemplo de uso:
n = 6  # Tamaño de la matriz
matriz_resultante = crear_matriz_triangular(n)

def imprimir_matriz_cuadrada(matriz):
    for fila in matriz:
        print("[", ", ".join(str(elemento) for elemento in fila)," ]")


# Ejemplo de uso:
n = 6  # Tamaño de la matriz
matriz_resultante = crear_matriz_triangular(n)
imprimir_matriz_cuadrada(matriz_resultante)
def crear_matriz_asteriscos(n):
    matriz = []
    for i in range(n):
        espacios = ' ' * i
        asteriscos = '*' * (2 * (n - i) - 1)
        fila = espacios + asteriscos
        matriz.append(fila)
    return matriz

print("\n\\------Ejercicio 4----------------\\")

# Ejemplo de uso:
n = 5  # Altura del triángulo
matriz_resultante = crear_matriz_asteriscos(n)
for fila in matriz_resultante:
    print(fila)

print("\n\\------Ejercicio 5----------------\\")

def crear_rombo_asteriscos(n):
  matriz = []
  # Parte superior del rombo
  for i in range(1, n + 1):
    fila = [' ' * (n - i) + '*' * (2 * i - 1) + ' ' * (n - i)]
    matriz.append(fila)
  # Parte inferior del rombo (sin la fila central repetida)
  for i in range(n - 1, 0, -1):
    fila = [' ' * (n - i) + '*' * (2 * i - 1) + ' ' * (n - i)]
    matriz.append(fila)
  return matriz

# Ejemplo de uso:
n = 5  # Mitad de la altura del rombo
rombo = crear_rombo_asteriscos(n)
for fila in rombo:
  print(''.join(fila))
