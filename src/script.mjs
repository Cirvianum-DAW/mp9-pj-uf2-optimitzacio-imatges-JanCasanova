import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminJpegtran from 'imagemin-jpegtran';

(async () => {
  try {
    const files = await imagemin(['img/*.{jpg,png}'], {
      destination: '../dist/img',
      plugins: [
        imageminJpegtran(),
        imageminPngquant({
          quality: [0.6, 0.8]
        })
      ].map((plugin) => plugin.default || plugin) 
    });

    console.log('Imagen optimizada:', files);
  } catch (error) {
    console.error('Error durante la optimización de imágenes:', error);
  }
})();
