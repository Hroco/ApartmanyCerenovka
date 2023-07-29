import Image from "next/image";
import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";

interface ImageGalleryProps {
  imageList: string[];
}

export default function ImageGallery({ imageList }: ImageGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  // console.log(imageList);

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  console.log(imageList);

  return (
    <div className="main-panel-galery">
      {imageList.map((src, index) => (
        <div className="gallery-item" key={src}>
          <Image
            src={`${src}`}
            alt=""
            width={300}
            height={225}
            onClick={() => openImageViewer(index)}
            loading="lazy"
          />
        </div>
      ))}
      {isViewerOpen && (
        <div
          style={{
            zIndex: 101,
          }}
        >
          <ImageViewer
            src={imageList}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        </div>
      )}
    </div>
  );
}
