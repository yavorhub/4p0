import React from 'react';
import { Form, Input, Tooltip, Icon, Button } from 'antd';
const FormItem = Form.Item;

class ContactFormBase extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Item>
                    {getFieldDecorator('Name', {
                        rules: [{ required: true, message: 'Please input your Name!' }],
                    })(
                    <Input placeholder="Name" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('E-mail', {
                        rules: [{ required: true, message: 'Please input your Email!' }],
                    })(
                    <Input name="Email" placeholder="E-mail" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('Message', {
                        rules: [{ required: true, message: 'Please input your idea!' }],
                    })(
                    <textarea placeholder="Tell us about your idea">
                    </textarea>
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Send
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}
export const ContactForm = Form.create()(ContactFormBase);