document.getElementById("cep-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let cep = document.getElementById("cep").value;

    // Remover qualquer caractere que não seja número
    cep = cep.replace(/\D/g, "");

    if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (data.erro) {
                    alert("CEP não encontrado!");
                } else {
                    document.getElementById("logradouro").textContent = data.logradouro;
                    document.getElementById("bairro").textContent = data.bairro;
                    document.getElementById("cidade").textContent = data.localidade;
                    document.getElementById("estado").textContent = data.uf;
                    document.getElementById("cep-result").textContent = data.cep;
                }
            })
            .catch(error => {
                alert("Erro ao buscar o CEP. Tente novamente mais tarde.");
            });
    } else {
        alert("Por favor, insira um CEP válido!");
    }
});