import React from "react";
import { Carousel, CarouselItem, Container } from "reactstrap";
import { Row, Col } from "react";

function Body({ images, ozellikler, pclinks }) {
    const items = images.map((image, index) => (
        <div key={index} style={{ display: "flex" }} >
            <img
                src={image}
                alt="Body"
                className="d-block"
                style={{ width: "300px", height: "200px" }}
            />
            <b style={{ marginLeft: "10px", marginTop: "150px" }}> <a href={pclinks[index]} >Detaylar..</a></b>
            <h3 style={{ marginLeft: "10px", marginTop: "50px" }}>{ozellikler[index]}</h3>
        </div>
    ));

    return (
        <Container style={{ marginTop: "50px" }}>
            {items}
        </Container>);
}

export default Body;
