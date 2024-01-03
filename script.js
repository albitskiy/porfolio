document.addEventListener('DOMContentLoaded', (event) => {
    // Ya no necesitamos la referencia a 'central-text', así que podemos eliminarla
    // const centralText = document.getElementById('central-text');

    document.querySelectorAll('.clickable').forEach((item, index) => {
        item.addEventListener('click', function() {
            // Ya no necesitamos la variable 'isFirstVideoActive', así que podemos eliminarla
            // let isFirstVideoActive = false;

            // Recorre todos los contenedores para detener y ocultar los videos, mostrar las imágenes y ocultar los textos adicionales
            document.querySelectorAll('.image-container').forEach((container, containerIndex) => {
                const video = container.querySelector('.video-container');
                const image = container.querySelector('img');
                const imageText = container.querySelector('.image-text');
                const additionalText = container.querySelector('.additional-text');

                if (video) {
                    video.pause(); // Detiene el video
                    video.currentTime = 0; // Reinicia el video
                    // Esta parte ya no es necesaria, así que la eliminamos
                    // if (index === 0 && containerIndex === 0) {
                    //     isFirstVideoActive = video.style.display === 'none' || video.style.display === '';
                    // }
                    video.style.display = 'none'; // Oculta el video
                }
                if (image) {
                    image.style.display = 'block'; // Muestra la imagen
                }
                if (imageText) {
                    imageText.style.display = 'block'; // Muestra el texto de la imagen
                }
                if (additionalText) {
                    additionalText.style.display = 'none'; // Oculta el texto adicional
                }
            });

            // Encuentra el contenedor específico de la imagen o texto clicado
            const imageContainer = this.closest('.image-container');
            const video = imageContainer.querySelector('.video-container');
            const image = imageContainer.querySelector('img');
            const imageText = imageContainer.querySelector('.image-text');
            const additionalText = imageContainer.querySelector('.additional-text');

            if (video && image && additionalText) {
                video.style.display = 'block'; // Muestra el video
                image.style.display = 'none'; // Oculta la imagen
                imageText.style.display = 'none'; // Oculta el texto de la imagen
                additionalText.style.display = 'block'; // Muestra el texto adicional

                video.muted = true; // Silencia el video
                video.play(); // Reproduce el video

                // Eliminamos toda la lógica relacionada con 'centralText'
                // if (centralText) {
                //     if (index === 0) {
                //         centralText.style.display = isFirstVideoActive ? 'none' : 'block';
                //     } else {
                //         centralText.style.display = 'block';
                //     }
                // }
            }
        });
    });
});
