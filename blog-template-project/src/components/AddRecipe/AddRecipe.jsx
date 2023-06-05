import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './addrecipe.css';

var id = 0;
export default class AddRecipe extends Component {
    state = {
        image: null,
    };

    handleImageChange = (event) => {
        const file = event.target.files[0];
        this.setState({ image: URL.createObjectURL(file) });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const title = event.target.elements.title.value;
        const recipeContent = event.target.elements.recipeContent.value;
        const kisi = event.target.elements.kisi.value;
        const sure = event.target.elements.sure.value;


        const image = this.state.image;
        id = id + 1;

        const recipe = {
            id: id,
            title: title,
            kisi: kisi,
            sure: sure,
            content: recipeContent,
            image: image,
        };

        document.getElementById('form1').reset();
        this.props.addToRecipeList(recipe);

    };

    render() {
        return (
            <div style={{ marginTop: 50 }}>
                <span style={{ fontSize: 50, marginLeft: 200, color: '#FB693C' }}>
                    <Link id="deneme" style={{ fontFamily: 'Rakkas, serif' }} to="/">
                        &lt; Tarifler
                    </Link>
                </span>
                <h1 id="baslik" className="text-center">
                    Tarif Ekleme Sayfası
                </h1>
                <Container>
                    <Form id="form1" onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="title">Tarif Başlığı</Label>
                            <Input id="title" name="inputTitle" placeholder="başlık giriniz" type="text" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="recipeContent">Tarif İçeriği</Label>
                            <Input type="textarea" name="text" id="recipeContent" placeholder="içeriği giriniz" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="kisi">Yemek kaç kişilik?</Label>
                            <Input type="number" name="kisi" id="kisi" placeholder="kişi sayısı giriniz" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="sure">Hazırlanma süresi</Label>
                            <Input type="number" name="sure" id="sure" placeholder="süreyi giriniz" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="image">Resim</Label>
                            <Input type="file" name="image" id="image" onChange={this.handleImageChange} />
                        </FormGroup>

                        <Button id="buton" type="submit">
                            Add Recipe
                        </Button>
                    </Form>
                </Container>
            </div>
        );
    }
}
