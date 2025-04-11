programa
{
	
	funcao inicio()
	{
		inteiro contador,limite,resultado,numero

		contador = 0 
		limite = 10
		escreva("Digite o número: ")
		leia (numero)
		escreva("Qual é o Limite? ")
		leia (limite)

		faca{ 
			
			resultado = numero * contador
			escreva("Tabuada do: " + numero + " X " + contador + " = " + resultado + "\n")
			contador++
			
		} enquanto (contador<=limite)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 266; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */