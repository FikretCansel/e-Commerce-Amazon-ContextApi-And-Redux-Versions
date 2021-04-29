import React,{useState} from 'react'
import {db,storage} from "../firebase"

function ProductUpdater() {
    const [caption, setCaption] = useState("");
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [eventImage, seteventImage] = useState(true);


    const handleUpload = () => {
        const uploadTash = storage.ref(`images/${image.name}`).put(image);
        uploadTash.on(
          "state_changed",
          (snaphot) => {
            //progress function...
            const progress = Math.round(
              (snaphot.bytesTransferred / snaphot.totalBytes) * 100
            );
            setProgress(progress);
          },
          (error) => {
            //Error function
            console.log(error);
            alert(error.message);
          },
          () => {
            //complete function ...
            storage
              .ref("images")
              .child(image.name)
              .getDownloadURL()
              .then((url) => {
                db.collection("posts").add({
                  caption: caption,
                  imageUrl: url,
                  eventImage: eventImage,
                });
              });
            setProgress(0);
            setCaption("");
            setImage(null);
          }
        );
      };

    return (
        <div className="form-group">
            <form>
                <input type="text" className="form-control" placeholder="title"/>
                <input type="text" className="form-control" placeholder="price"/>
                <button onClick={handleUpload}>Upload</button>
            </form>
        </div>
    )
}

export default ProductUpdater
