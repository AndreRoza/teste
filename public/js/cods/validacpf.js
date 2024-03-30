function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, ''); // Remove caracteres não numéricos
    if (cpf.length !== 11 || /^(.)\1+$/.test(cpf)) return false; // Verifica se o CPF tem 11 dígitos e não são todos iguais

    // Calcula o primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let digit1 = sum % 11 < 2 ? 0 : 11 - (sum % 11);

    // Calcula o segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    let digit2 = sum % 11 < 2 ? 0 : 11 - (sum % 11);

    // Verifica se os dígitos verificadores calculados correspondem aos dígitos do CPF
    let resultado = parseInt(cpf.charAt(9)) === digit1 && parseInt(cpf.charAt(10)) === digit2;

    console.log(resultado);
    dmx.app.set('rcpf', resultado);
    return resultado;
}

function validarCNPJ(cnpj) {
    cnpj = cnpj.replace(/[^\d]/g, ''); // Remove caracteres não numéricos

    if (cnpj.length !== 14 || /^(.)\1+$/.test(cnpj)) {
        console.log("CNPJ inválido");
        return false; // Verifica se o CNPJ tem 14 dígitos e não são todos iguais
    }

    // Calcula o primeiro dígito verificador
    let sum = 0;
    let peso = 5;
    for (let i = 0; i < 12; i++) {
        sum += parseInt(cnpj.charAt(i)) * peso;
        peso = peso === 2 ? 9 : peso - 1;
    }
    let digit1 = sum % 11 < 2 ? 0 : 11 - (sum % 11);

    // Calcula o segundo dígito verificador
    sum = 0;
    peso = 6;
    for (let i = 0; i < 13; i++) {
        sum += parseInt(cnpj.charAt(i)) * peso;
        peso = peso === 2 ? 9 : peso - 1;
    }
    let digit2 = sum % 11 < 2 ? 0 : 11 - (sum % 11);

    // Verifica se os dígitos verificadores calculados correspondem aos dígitos do CNPJ
    let resultado = parseInt(cnpj.charAt(12)) === digit1 && parseInt(cnpj.charAt(13)) === digit2;

    console.log("CNPJ " + (resultado ? "válido" : "inválido"));
    dmx.app.set('rcnpj', resultado);
    return resultado;
}
