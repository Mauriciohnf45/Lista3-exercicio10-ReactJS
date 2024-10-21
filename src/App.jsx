import React from 'react';
import ImageGallery from './ImageGallery'; // Verifique o caminho do arquivo

function App() {
  const images = [
    {
      url: 'https://gate.ahram.org.eg/Media/News/2022/12/21/19_2022-638072440027028114-702.jpg',
      altText: 'Imagem do Messi',
    },
    {
      url: 'https://th.bing.com/th/id/R.03cf6a418fa7510366d584d9f2179eeb?rik=HlDmaEJsS%2f4v8Q&pid=ImgRaw&r=0',
      altText: 'Imagem do Cristiano Ronaldo',
    },
    {
      url: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/09/13/16630884605041.jpg',
      altText: 'Imagem do Neymar',
    },
  ];

  return (
    <div>
      <h1>Galeria de Imagens</h1>
      <ImageGallery images={images} />
    </div>
  );
}

export default App;
