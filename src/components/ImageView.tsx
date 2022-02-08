import { useEffect, useState } from "react";

function ImageView() {
    let i = 0;
    const [image, setImage] = useState<string>("");
    const [images, setImages] = useState<string[]>([]);
  
    useEffect(() => {
      async function getImage() {
        let response = await fetch("http://localhost:8080/image");
        let blob: Blob = await response.blob();
        const imageObjectURL = URL.createObjectURL(blob);
        console.log("Unique image", imageObjectURL)
        setImage(imageObjectURL);
      }
      async function getImages() {
        let response = await fetch("http://localhost:8080/images");
        let tmp = await response.json();
        const imageObjectURLS: string[] = [];
        for(let i = 0; i < tmp.length; ++i) {
            const byteCharacters = atob(tmp[i]);
            const byteNumbers = new Array(byteCharacters.length);
            for (let j = 0; j < byteCharacters.length; j++) {
                byteNumbers[j] = byteCharacters.charCodeAt(j);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray]);
            const imageObjectURL = URL.createObjectURL(blob);
            imageObjectURLS.push(imageObjectURL)
            
        }
        setImages(imageObjectURLS);
      }
      getImage();
      getImages();
    }, []);
  
    return (
      <div>
        <img src={image} alt="scene" />
        {images.map(img => {
            return (<img src={img} alt="scene" key={++i}/>);
        })}
      </div>
    );
  }

export default ImageView;