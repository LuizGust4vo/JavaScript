// Calculadora criada para simular investimentos:
// Obs: criada para uso pessoal com base em meus investimentos

function Fcalculator() {
    const option = Number(prompt("Escolha a modalidade de investimento para simular: \n 1 - CDI PicPay \n 2 - CDB PagBank \n 3 - Fundos de Investimento"));

    if (option > 3 || option < 1) {
        alert("ERRO: opção inválida ou inexistente, digite novamente!");
        Fcalculator();
    }
    else {
        let Vatual = Number(prompt("Digite o valor atual (R$): "));
        let Ratual = Number(prompt("Digite o rendimento atual (R$): "));
        let Vfuturo = Number(prompt("Digite o valor futuro (R$): "));
        let Rfuturo, RfuturoR;

        // Cálculos baseados em porcentagem básica e na seguinte regra de três:
        // Vatual  --- Ratual
        //          X
        // Vfuturo --- Rfuturo

        function conso() {
            alert(`Possível rendimento futuro: R$ ${Rfuturo} \nPossível rendimento futuro real: R$ ${RfuturoR}`);
            console.log(`Valor Atual: R$ ${Vatual} \nRendimento Atual: R$ ${Ratual} \nValor Futuro: R$ ${Vfuturo}\nRendimento Futuro: R$ ${Rfuturo} \nRendimento Futuro Real: R$ ${RfuturoR}`);
        }

        function conso1() {
            alert(`Possível rendimento futuro real: R$ ${Rfuturo}`);
            console.log(`Valor Atual: R$ ${Vatual} \nRendimento Atual: R$ ${Ratual} \nValor Futuro: R$ ${Vfuturo}\nRendimento Futuro Real: R$ ${Rfuturo}`);
        }

        // PicPay
        function PicPay() {
            Rfuturo = ((Vfuturo * Ratual) / Vatual).toFixed(2);
            conso1();
        }

        // PagBank
        function PagBank() {
            const invest1 = Number(prompt("Para realizar o cálculo do rendimento futuro real, com base no IOF, indique quantos dias você pretende deixar o dinheiro aplicado? \n 1 - Entre 0 e 180 dias (IOF = 22,5%) \n 2 - Entre 181 e 360 dias (IOF = 20,0%) \n 3 - Entre 361 e 720 dias (IOF = 17,5%) \n 4 - Mais de 720 dias (IOF = 15,0 %)"));
            if (invest1 == 1) {
                Rfuturo = ((Vfuturo * Ratual) / Vatual).toFixed(2);
                RfuturoR = (Rfuturo - ((Rfuturo / 100) * 22.5)).toFixed(2);
                conso();
            }
            else if (invest1 == 2) {
                Rfuturo = ((Vfuturo * Ratual) / Vatual).toFixed(2);
                RfuturoR = (Rfuturo - ((Rfuturo / 100) * 20)).toFixed(2);
                conso();
            }
            else if (invest1 == 3) {
                Rfuturo = ((Vfuturo * Ratual) / Vatual).toFixed(2);
                RfuturoR = (Rfuturo - ((Rfuturo / 100) * 17.5)).toFixed(2);
                conso();
            }
            else if (invest1 == 4) {
                Rfuturo = ((Vfuturo * Ratual) / Vatual).toFixed(2);
                RfuturoR = (Rfuturo - ((Rfuturo / 100) * 15)).toFixed(2);
                conso();
            }
            else {
                alert("Opção inválida ou inexistente, digite novamente a opção!");
                PagBank();
            }
        }

        // Kinea IPCA, Kinea Chronos, Daycoval
        function Fundos() {
            const invest2 = Number(prompt("Para realizar o cálculo do rendimento futuro real, com base no IOF, indique quantos dias você pretende deixar o dinheiro aplicado? \n 1 - 10 dias (IOF = 66,0%) \n 2 - 20 dias (IOF = 33,0%) \n 3 - 30 dias (IOF = 0,0%)"));
            if (invest2 == 1) {
                Rfuturo = ((Vfuturo * Ratual) / Vatual).toFixed(2);
                RfuturoR = (Rfuturo - ((Rfuturo / 100) * 66)).toFixed(2);
                conso();
            }
            else if (invest2 == 2) {
                Rfuturo = ((Vfuturo * Ratual) / Vatual).toFixed(2);
                RfuturoR = (Rfuturo - ((Rfuturo / 100) * 33)).toFixed(2);
                conso();
            }
            else if (invest2 == 3) {
                Rfuturo = ((Vfuturo * Ratual) / Vatual).toFixed(2);
                conso1();
            }
            else {
                alert("Opção inválida ou inexistente, digite novamente a opção!");
                Fundos();
            }
        }

        switch (option) {
            case 1:
                PicPay();
                break;
            case 2:
                PagBank();
                break;
            case 3:
                Fundos();
                break;
        }

        function repetir() {
            const option2 = Number(prompt("Deseja realizar uma nova simulação? \n1 - Sim \n2 - Não"));

            if (option2 == 1) {
                Fcalculator();
            }
            else if (option2 == 2) {
                alert("Ok, encerrando calculadora...");
            }
            else {
                alert("Opção inválida ou inexistente, digite novamente!");
                repetir();
            }
        }
        repetir();
    }
}
Fcalculator();