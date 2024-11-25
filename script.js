// Obtém o ID do vídeo da URL
const urlParams = new URLSearchParams(window.location.search);
const videoId = urlParams.get('id');

// URL base do Mega (substitua isso pela URL base correta do Mega)
const megaBaseUrl = "https://mega.nz/file/";

// Gera a URL completa do vídeo no Mega
const megaVideoUrl = `${megaBaseUrl}${videoId}`;

// Redireciona para o vídeo no Mega
if (videoId) {
    window.location.href = megaVideoUrl;
} else {
    document.body.innerHTML = "<h1>Erro: ID do vídeo não fornecido.</h1>";
}
