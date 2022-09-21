export class Banco {
    clienteNome: string;
    clienteCpf: string;
    contaCorrente: number;
    contaCredito: number;
    faturaCredito: number;
    contaInvetimento: number;
    contaPoupanca: number;
    clienteSaldo: number;
    limiteDisponivel: number;


    nome() {
        console.log(`Bem-Vindo ao Banco. \n Nome do Cliente: ${interacao.clienteNome}`)
    }

    cpf() {
        console.log(`CPF do Cliente: ${interacao.clienteCpf}`)

    }

    corrente() {
        console.log(`Saldo na Conta Corrente: R$${interacao.contaCorrente}`)
    }

    credito() {
        console.log(`Limite no Crédito é de: R$${interacao.contaCredito}`)
    }
    
    fatCredito() {
        console.log(`A fatura desse mês é de: R$${interacao.faturaCredito}`)
    }

    investimento() {
        interacao.contaInvetimento = interacao.clienteSaldo * 0.25
        console.log(`Você já envistiu: R$${interacao.contaInvetimento}`)
    }

    poupanca() {
        console.log(`Saldo na Conta Poupança: R$${interacao.contaPoupanca}`)
    }

    saldo() {
        console.log(`Seu saldo é de: R$${interacao.clienteSaldo}`)
    }

    limiDisponivel() {
        console.log(`Você ainda pode usar R$:${interacao.limiteDisponivel} do seu limite.`)
    }
}

var interacao = new Banco();
interacao.clienteNome = "Bernardo da Silva Frazão Bezerra"
interacao.clienteCpf = "117.678.435.07"
interacao.contaCorrente = 1200
interacao.contaCredito = 3600
interacao.faturaCredito = 570
interacao.contaPoupanca = 1000
interacao.clienteSaldo = interacao.contaCorrente + interacao.contaPoupanca
interacao.limiteDisponivel = interacao.contaCredito - interacao.faturaCredito

interacao.nome()
interacao.cpf()
interacao.corrente()
interacao.credito()
interacao.fatCredito()
interacao.investimento()
interacao.poupanca()
interacao.saldo()
interacao.limiDisponivel()
