import React from "react";
import One from "../assets/one.jpg";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src={One} alt="" />
        <div className="user">
          <img src={One} alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 1 day ago</p>
          </div>
          <div className="edit">
            <Link to={"/write?edit=2"}>
              <i
                class="fa-solid fa-pen-to-square "
                style={{ color: "rgb(41, 218, 218)" }}
              />
            </Link>
            <i
              class="fa-solid fa-trash"
              style={{ color: "rgb(41, 218, 218)" }}
            ></i>
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet, dolor adipisicing elit</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          iusto ipsa cum sapiente autem dolores eaque nihil minus quisquam totam
          officia odit, nulla ullam? Iure neque debitis laudantium aperiam
          repudiandae! Eius eveniet repellat neque reiciendis voluptatum eos
          modi iusto perspiciatis accusantium aspernatur saepe laboriosam,
          reprehenderit est.
          <br />
          <br />
          Quos laboriosam a consectetur iste error, minima, excepturi dolores
          ipsum, sint eaque assumenda? Iure veniam nihil sed voluptatibus
          quibusdam non sapiente hic facilis quidem ratione sequi atque, fugiat
          ab cupiditate dolore eligendi aspernatur mollitia a id laborum in
          laboriosam doloribus! Ea ipsum at cumque consequatur tenetur optio,
          voluptatum, exercitationem dolores nihil modi eos adipisci.
          <br />
          <br />
          Quos laboriosam a consectetur iste error, minima, excepturi dolores
          ipsum, sint eaque assumenda? Iure veniam nihil sed voluptatibus
          quibusdam non sapiente hic facilis quidem ratione sequi atque, fugiat
          ab cupiditate dolore eligendi aspernatur mollitia a id laborum in
          laboriosam doloribus! Ea ipsum at cumque consequatur tenetur optio,
          voluptatum, exercitationem dolores nihil modi eos adipisci.
          <br />
          <br />
          Quos laboriosam a consectetur iste error, minima, excepturi dolores
          ipsum, sint eaque assumenda? Iure veniam nihil sed voluptatibus
          quibusdam non sapiente hic facilis quidem ratione sequi atque, fugiat
          ab cupiditate dolore eligendi aspernatur mollitia a id laborum in
          laboriosam doloribus! Ea ipsum at cumque consequatur tenetur optio,
          voluptatum, exercitationem dolores nihil modi eos adipisci.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
