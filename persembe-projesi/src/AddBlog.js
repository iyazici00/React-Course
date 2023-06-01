import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'


var blogid = 0
export default class AddBlog extends Component {
    render() {


        const GetBlog = (event) => {
            event.preventDefault();

            blogid = blogid + 1
            const title = event.target.elements.title.value;
            const blogtext = event.target.elements.blogtext.value;
            const blogimg = event.target.elements.blogimg.value;



            let blog = {
                id: blogid,
                userid: this.props.currentuserid,
                title: title,
                content: blogtext,
                img: blogimg,

            }
            this.props.addToBlogList(blog)


            // console.log(blog.id)
            // console.log(blog.userid)
            // console.log(blog.title)

            // const [inputs, setInputs] = useState({});
            // const handleChange = (event) => {
            //     const name = event.target.name;
            //     const value = event.target.value;
            //     setInputs(values => ({ ...values, [name]: value }));
            // }

            // const handleSubmit = (event) => {
            //     event.preventDefault();
            //     props.loginSubmit(inputs)
            // }
        };


        return (
            <div>
                <h1>ADD BLOG</h1>


                <Form onSubmit={GetBlog} >
                    <FormGroup>
                        <Label for="title">
                            Title
                        </Label>
                        <Input
                            id="title"
                            name="inputTitle"
                            placeholder="başlık giriniz"
                            type="text"
                        />
                        <Label for="blogtext">
                            Blog Text
                        </Label>
                        <Input
                            id="blogtext"
                            name="inputBlogtext"
                            placeholder="blog içeriğini yazınız"
                            type="textarea"
                        />

                        <Label for="blogimg">
                            Image
                        </Label>
                        <Input
                            id="blogimg"
                            name="inputBlogimg"
                            placeholder="blog image url"
                            type="text"
                        />

                    </FormGroup>


                    <Button >
                        Add Blog
                    </Button>

                </Form>

            </div>


        )
    }
}
