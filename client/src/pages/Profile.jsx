import React, { useContext } from 'react';
import { Container, Image, Button } from 'react-bootstrap';
import photo from '../Photos/wyncastv1.png';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
const Profile = () => {
  const {
    currentUser,
    setCurrentUser,
    preview,
    setPreview,
    image,
    setImage
  } = useContext(AppContext);

  const handleImageSelect = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const avatar = new FormData();
    avatar.append('avatar', image, image.name);
    console.log(currentUser);
    try {
      console.log("I'm HERE!");
      const updatedUser = await axios({
        method: 'POST',
        url: '/api/users/avatar',
        data: avatar,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(updatedUser.data.secure_url);
      setCurrentUser({ ...currentUser, avatar: updatedUser.data.secure_url });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Container className="d-flex justify-content-center align-items-center flex-column">
        <h1 className="mt-4">Your Profile</h1>
        <div className="mt-4">
          <Image
            src={
              preview
                ? preview
                : currentUser?.avatar
                ? currentUser.avatar
                : photo
            }
            alt="profile-picture"
            width={250}
            height={250}
            roundedCircle
          />
        </div>
        <div className="mt-4">
          <form className="d-flex flex-column" onSubmit={handleSubmit}>
            <input type="file" accept="image/*" onChange={handleImageSelect} />
            <Button type="submit" size="sm" className="mt-4">
              Save Image
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Profile;
