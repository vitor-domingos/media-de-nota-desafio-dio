
let nomeAluno = 'Felipe'

let primeiraNota = 10

let segundaNota = 9

let terceieraNota = 8

let mediaFelipe = (primeiraNota + segundaNota + terceieraNota) /3

let nomeDoSegundoAluno = 'Breno'

let primeiraNotaDoSegundoAluno = 5;

let segundaNotaDoSegundoAluno = 6;

let terceiraNotaDoSegundoAluno = 7;

let mediaBreno = (primeiraNotaDoSegundoAluno + segundaNotaDoSegundoAluno                      + terceiraNotaDoSegundoAluno)  / 3;

let nomeDoTerceiroAluno = 'Julia'

let primeiraNotaDoTerceiroAluno = 5

let segundaNotaDoTerceiroAluno = 4

let terceiraNotaDoTerceiroAluno = 3

let mediaJulia = (primeiraNotaDoTerceiroAluno + segundaNotaDoTerceiroAluno + terceiraNotaDoTerceiroAluno) / 3

let primeiroAlunoAprovado = (mediaFelipe) > 7 

let primeiroAlunoRecuperacao = (mediaFelipe) >= 5 && (mediaFelipe) <= 7

let primeiroAlunoReprovado = (mediaFelipe) <= 4

if(primeiroAlunoAprovado){
console.log('O aluno' + nomeAluno + 'foi aprovado.')
} else if(primeiroAlunoRecuperacao){
console.log('O aluno' + nomeAluno + 'está de recuperação.')
}else if(primeiroAlunoReprovado){
console.log('O aluno' + nomeAluno + 'foi reprovado.')
}else{
console.log('O aluno' + nomeAluno + 'não compareceu as aulas')
}

let segundoAlunoAprovado = (mediaBreno) > 7 

let segundoAlunoRecuperacao = (mediaBreno) >= 5 && (mediaBreno) <= 7

let segundoAlunoReprovado = (mediaBreno) <= 4

if(segundoAlunoAprovado){
    console.log('O aluno' + nomeDoSegundoAluno + 'foi aprovado.')
    } else if(segundoAlunoRecuperacao){
    console.log('O aluno' + nomeDoSegundoAluno + 'está de recuperação.')
    }else if(segundoAlunoReprovado){
    console.log('O aluno' + nomeDoSegundoAluno + 'foi reprovado.')
    }else{
    console.log('O aluno' + nomeDoSegundoAluno + 'não compareceu as aulas.')
    }
    
    let terceiroAlunoAprovado = (mediaJulia) > 7 

    let terceiroAlunoRecuperacao = (mediaJulia) >= 5 && (mediaJulia) <= 7
    
    let terceiroAlunoReprovado = (mediaJulia) <= 4
    
    if(terceiroAlunoAprovado){
        console.log('A aluna' + nomeDoTerceiroAluno + 'foi aprovada.')
        } else if(terceiroAlunoRecuperacao){
        console.log('A aluna' + nomeDoTerceiroAluno + 'está de recuperação.')
        }else if(terceiroAlunoReprovado){
        console.log('A aluna' + nomeDoTerceiroAluno + 'foi reprovada.')
        }else{
        console.log('A aluna' + nomeDoTerceiroAluno + 'não compareceu as aulas.')
        }