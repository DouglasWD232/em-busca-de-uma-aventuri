// Reconhecimento de voz
const voiceBtn = document.getElementById("voiceBtn");
const userInput = document.getElementById("userInput");
const output = document.getElementById("output");

// Função para processar voz
voiceBtn.addEventListener("click", () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = "pt-BR";

            recognition.onresult = (event) => {
                    const text = event.results[0][0].transcript;
                            userInput.value = text;
                                    processCommand(text);
                                        };

                                            recognition.start();
                                            });

                                            // Processar entrada de texto
                                            document.getElementById("sendBtn").addEventListener("click", () => {
                                                const text = userInput.value;
                                                    processCommand(text);
                                                    });

                                                    // Processar comandos
                                                    function processCommand(command) {
                                                        if (command.includes("lembrete")) {
                                                                output.innerText = "Lembrete salvo: " + command.replace("lembrete", "").trim();
                                                                        // Salvar lembrete (exemplo simples)
                                                                                localStorage.setItem("lembrete", command.replace("lembrete", "").trim());
                                                                                    } else if (command.includes("pesquisar")) {
                                                                                            const query = command.replace("pesquisar", "").trim();
                                                                                                    output.innerText = `Pesquisando por: ${query}`;
                                                                                                            // Abrir pesquisa
                                                                                                                    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`);
                                                                                                                        } else {
                                                                                                                                output.innerText = "Desculpe, não entendi o comando.";
                                                                                                                                    }
                                                                                                                                    }
                        
                                                                                                                                    const circle = document.getElementById("circleMagic");

                                                                                                                                    // Função para alterar a cor do círculo mágico
                                                                                                                                    function changeCircleColor(color) {
                                                                                                                                        circle.style.boxShadow = `0 0 30px ${color}, 0 0 60px ${color}`;
                                                                                                                                            setTimeout(() => {
                                                                                                                                                    circle.style.boxShadow = "0 0 20px #0ff, 0 0 40px #0ff"; // Volta ao azul
                                                                                                                                                        }, 1000);
                                                                                                                                                        }

                                                                                                                                                        // Função principal para processar comandos
                                                                                                                                                        function processCommand(command) {
                                                                                                                                                            if (command.includes("lembrete")) {
                                                                                                                                                                    output.innerText = "Lembrete salvo: " + command.replace("lembrete", "").trim();
                                                                                                                                                                            localStorage.setItem("lembrete", command.replace("lembrete", "").trim());
                                                                                                                                                                                    changeCircleColor("#0f0"); // Verde para função concluída
                                                                                                                                                                                        } else if (command.includes("pesquisar")) {
                                                                                                                                                                                                const query = command.replace("pesquisar", "").trim();
                                                                                                                                                                                                        output.innerText = `Pesquisando por: ${query}`;
                                                                                                                                                                                                                changeCircleColor("#ff0"); // Amarelo durante a pesquisa
                                                                                                                                                                                                                        setTimeout(() => {
                                                                                                                                                                                                                                    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`);
                                                                                                                                                                                                                                                changeCircleColor("#0f0"); // Verde quando concluir
                                                                                                                                                                                                                                                        }, 1500); // Simula um tempo de resposta
                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                    output.innerText = "Desculpe, não entendi o comando.";
                                                                                                                                                                                                                                                                            changeCircleColor("#f00"); // Vermelho para erro (opcional)
                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  }
             const circleImage = document.getElementById("circleImage");

             function changeCircleState(color, imageSrc) {
                 // Altera a cor
                     circle.style.boxShadow = `0 0 30px ${color}, 0 0 60px ${color}`;
                         // Atualiza a imagem central
                             circleImage.src = imageSrc;

                                 setTimeout(() => {
                                         circle.style.boxShadow = "0 0 20px #0ff, 0 0 40px #0ff"; // Volta ao azul
                                                 circleImage.src = "default.png"; // Imagem padrão
                                                     }, 1000);
                                                     }

                                                     // Exemplo para alterar estados
                                                     function processCommand(command) {
                                                         if (command.includes("lembrete")) {
                                                                 output.innerText = "Lembrete salvo!";
                                                                         changeCircleState("#0f0", "green.png"); // Verde
                                                                             } else if (command.includes("pesquisar")) {
                                                                                     output.innerText = "Pesquisando...";
                                                                                             changeCircleState("#ff0", "yellow.png"); // Amarelo
                                                                                                 } else {
                                                                                                         output.innerText = "Desculpe, não entendi.";
                                                                                                                 changeCircleState("#f00", "error.png"); // Vermelho
                                                                                                                     }                                                                                                                    }
                                                                                                                     function changeCircleState(color, imageSrc) {
                                                                                                                            circle.style.boxShadow = `0 0 30px ${color}, 0 0 60px ${color}`;
                                                                                                                                circleImage.src = `assets/images/${imageSrc}`; // Atualize o caminho aqui
                                                                                                                                    setTimeout(() => {
                                                                                                                                            circle.style.boxShadow = "0 0 20px #0ff, 0 0 40px #0ff"; // Volta ao azul
                                                                                                                                                    circleImage.src = "assets/images/default.png"; // Caminho da imagem padrão
                                                                                                                                                        }, 1000);
                                                                                                                                                        }