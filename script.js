// Obtém o ID do vídeo da URL
const urlParams = new URLSearchParams(window.location.search);
const videoId = urlParams.get('id');

// URL base do Google Drive
const googleDriveBaseUrl = "https://drive.google.com/uc?export=download&id=";

// Gera a URL completa do vídeo no Google Drive
const googleDriveVideoUrl = `${googleDriveBaseUrl}${videoId}`;

// Redireciona para o vídeo no Google Drive
if (videoId) {
    window.location.href = googleDriveVideoUrl;
} else {
    document.body.innerHTML = "<h1>Erro: ID do vídeo não fornecido.</h1>";
}
