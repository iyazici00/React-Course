import React from "react";
import { CardBody, CardText, Card } from "reactstrap";

function About({ content }) {
    return (
        <Card>
            <CardBody>
                <CardText>Adidas, dünyanın en büyük spor eşyası üreticilerinden birisidir. Adını kurucusu Adolf (Adi) Dassler'den almıştır. Adolf Dassler, 1920'lerde Nürnberg yakınlarındaki Herzogenaurach şehrinde daha sonra Puma'nın kurucusu olan ortağı ve abisi Rudolf Dassler ile ayakkabı üretmeye başlamıştır. 2005 yılında 3,1 milyar Euro'ya İngiliz rakibi Reebok'ı satın alır. 2006 yılı içinde NBA ile resmî forma ve aksesuar üretimi için anlaşma imzalar.</CardText>
            </CardBody>

        </Card>
    );

}

export default About;