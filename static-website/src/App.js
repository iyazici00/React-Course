import React from "react";
import Navbar from "./Navbar";
import Body from "./Body";
import About from "./About";
import Footer from "./Footer";
import { Container } from "reactstrap";

function App() {
  const links = [
    { title: "Anasayfa", url: "/" },
    { title: "Hakkımızda", url: "/about" },
    { title: "İletişim", url: "/contact" }
  ];

  const images = [

    "https://st-vans.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/637639363468969344.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm0fYeH1xCtsqpdw40O7uOMLXUz68jtcSlkg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuBG7xvzWSyQZ5GaD3EGgU-HC-bVYJptPhOA&usqp=CAU",
    "https://akn-ss.b-cdn.net/products/2022/01/28/340690/5f2e615e-3ed0-47eb-a7b8-7022d59dc0d3_size1400x1400_quality100.jpg"
  ];
  const pclinks = [
    "https://www.adidas.com.tr/tr",
    "https://www.adidas.com.tr/tr",
    "https://www.adidas.com.tr/tr",
    "https://www.adidas.com.tr/tr"


  ]


  const ozellikler = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quidem, repellendus soluta eaque unde labore! Sequi inventore iste officia velit!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quidem, repellendus soluta eaque unde labore! Sequi inventore iste officia velit!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quidem, repellendus soluta eaque unde labore! Sequi inventore iste officia velit!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quidem, repellendus soluta eaque unde labore! Sequi inventore iste officia velit!"

  ];

  const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, arcu quis tempor aliquam, magna diam aliquet nunc, sed";

  return (
    <div>
      <Navbar links={links} />

      <Container>
        <Body images={images} ozellikler={ozellikler} pclinks={pclinks} />
        <About content={content} />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
