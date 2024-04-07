import { useState } from 'react';
import photo from '../../assets/upload-photo.png';
import bar from '../../assets/bar.png';

export default function Photo({ setBackground }) {
    const [newPhoto, setNewPhoto] = useState({
        photo,
        localPhoto: localStorage.getItem('photo'),
    });

    const setPhoto = (event) => {
        const url = URL.createObjectURL(event.target.files[0]);
        localStorage.setItem('photo', url);
        setBackground(url);

        setNewPhoto({
            photo: url,
            localPhoto: url,
        });
    };

    return (
        <div className="photo">
            <img src={bar} alt="asdasd" />
            {/* <img src={newPhoto.localPhoto || newPhoto.photo} alt="#" /> */}
            <input type="file" title="" onChange={(event) => setPhoto(event)} />
        </div>
    );
}
