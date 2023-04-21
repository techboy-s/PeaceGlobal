import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";

interface ResponseData {
  image: string;
}

const ProfileImage = () => {
  const [image, setImage] = useState<string | undefined>(undefined);
  const [images, setImages] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = "http://localhost:8000/api/upload";
    const data = new FormData();
    data.append("image", image!);
    axios.post(url, data).then((res: AxiosResponse<ResponseData>) => {
      setImages([...images, res.data.image]);
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-4">
          <div className="card p-4">
            <form onSubmit={submitForm} encType="multipart/form-data">
              <input
                type="file"
                className="form-control"
                onChange={handleChange}
              />
              <button className="btn btn-success mt-3" type="submit">
                Upload
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="row">
        {images.map((image) => (
          <div className="col-sm-3">
            <img
              className="img-thumbnail"
              src={"http://localhost:8000/images/" + image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileImage;
