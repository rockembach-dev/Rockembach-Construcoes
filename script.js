function enviarWhatsApp() {
        var nome = document.getElementById("f-nome").value.trim();
        var tel = document.getElementById("f-tel").value.trim();
        var servico = document.getElementById("f-servico").value.trim();
        var msg = document.getElementById("f-msg").value.trim();

        var texto = "Ola! Gostaria de solicitar um orcamento.";

        if (nome || tel || servico || msg) {
          texto = "Ola! Segue meus dados para orcamento:\n\n";
          if (nome) texto += "*Nome:* " + nome + "\n";
          if (tel) texto += "*Telefone:* " + tel + "\n";
          if (servico) texto += "*Servico:* " + servico + "\n";
          if (msg) texto += "*Mensagem:* " + msg;
        }

        var url =
          "https://wa.me/5548984736205?text=" + encodeURIComponent(texto);
        window.open(url, "_blank");
      }