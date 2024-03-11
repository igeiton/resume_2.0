import { useState } from 'react';
import photo from '../../assets/upload-photo.png';

export default function Photo({ setBackground }) {
    const [newPhoto, setNewPhoto] = useState({
        photo,
        localPhoto: localStorage.getItem('photo'),
    });

    return (
        <div className="photo">
            <img src={newPhoto.localPhoto || newPhoto.photo} alt="#" />
            <input
                type="file"
                title=""
                onChange={(event) => {
                    const url = URL.createObjectURL(event.target.files[0]);
                    setNewPhoto({
                        photo: url,
                        localPhoto: url,
                    });
                    localStorage.setItem('photo', url);
                    setBackground(url);
                }}
            />
        </div>
    );
}
