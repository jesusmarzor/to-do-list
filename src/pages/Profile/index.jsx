import { AuthConsumer } from "contexts/AuthContext";
import React, {useRef, useState} from "react";
import profileImg from "assets/img/profile.png"; 
import { ButtonBack } from "components/ButtonBack";
import { Button } from "components/Button";  
import { changeUser } from "firebase";
import { Spinner } from "components/Spinner";
import "./styles.scss";

export function Profile(){
  var {user, loading, setUser, setLoading} = AuthConsumer();
  const [name, setName] = useState(user.name);
  const imgRef = useRef(null);
  const nameRef = useRef(null);
  const changeImg = () => {
    changeUser(imgRef.current.files[0], nameRef.current.value, setUser, setLoading)
    .then( () => {
      imgRef.current.value = null;
    })
  }
  const writingName = e => {
    setName(e.target.value);
  }
  return (
    <div className="profile">
      <ButtonBack back="/"/>
      <h1 className="profile__title">Perfil</h1>
      <div className="profile__img img">
        {
          (loading)
          ?
            <Spinner/>
          :

            <img className="img__picture" src={user.img ?? profileImg} alt="profile"/>
        }
        <label className="img__label" for="img__input">+</label>
        <input id="img__input" className="img__input" ref={imgRef} type="file" accept="image/*"/>
        
      </div>
      <input className="profile__name" onChange={writingName} ref={nameRef} value={name} accept=".png, .jpg, .jpeg"/>
      {
          (loading)
          ?
            <Button loading={true} click={changeImg} type="button" value="Actualizar"/>
          :
            <Button click={changeImg} type="button" value="Actualizar"/>
        }
    </div>
    );
}