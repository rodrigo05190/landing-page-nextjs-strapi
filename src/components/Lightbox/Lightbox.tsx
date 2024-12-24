import React, { useEffect, useState } from 'react';
import LightboxReact from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';

interface LightboxProps {
  open: boolean;
  images: any[];
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({
  images,
  open,
  onClose,
}) => {
  const [dataGallery, setDataGallery] =
    useState<string[]>(images);
  const [currentGallery, setCurrentGallery] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setDataGallery(images.map(item => item.img));
    }, 100);
  }, [open]);

  if (open) {
    return (
      <LightboxReact
        mainSrc={dataGallery[currentGallery]}
        nextSrc={
          dataGallery[(currentGallery + 1) % dataGallery.length]
        }
        prevSrc={
          dataGallery[
            (currentGallery + dataGallery.length - 1) %
              dataGallery.length
          ]
        }
        onCloseRequest={onClose}
        onMovePrevRequest={() =>
          setCurrentGallery(
            (currentGallery + dataGallery.length - 1) %
              dataGallery.length,
          )
        }
        onMoveNextRequest={() =>
          setCurrentGallery(
            (currentGallery + 1) % dataGallery.length,
          )
        }
      />
    );
  }

  return <></>;
};

export default Lightbox;
