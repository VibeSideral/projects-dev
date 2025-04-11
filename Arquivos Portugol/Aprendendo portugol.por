programa
{
	
	funcao inicio()
	{
		real janeiro,fevereiro,marco,abril,media
		real total
		cadeia vendedor
		

		escreva("Digite o nome do vendedor: ")
		leia(vendedor)
		
		escreva("digite o valor de janeiro: ")
		leia(janeiro)
		escreva("digite o valor de fevereiro: ")
		leia(fevereiro)
		escreva("digite o valor de marco ")
		leia(marco)
		escreva("digite o valor de abril: ")
		leia(abril)

		media = (janeiro+fevereiro+marco+abril)/4
		total = (janeiro+fevereiro+marco+abril)

		escreva("O vendedor: " + vendedor + " Obteve a média de vendas de: " + media)
		
		escreva("O vendedor: " + vendedor + " Vendeu o total de: " + total)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 611; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */