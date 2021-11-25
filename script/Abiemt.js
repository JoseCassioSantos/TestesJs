let pessoa = {
    nome: 'Israel', idade: '27', peso: 98, treino(p = 0) {

        this.peso += p

        if (this.peso > 90) {


            console.log('ta gordo')
        } else {
            console.log('tamagro')
        }
    }
}

pessoa.treino(-10)

console.log(pessoa)

console.log(typeof pessoa)





