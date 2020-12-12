import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Container, Option, Title, Img } from './styles';

import img8 from '../imagens/08.png'
import img9 from '../imagens/09.png'
import img10 from '../imagens/10.png'
import img11 from '../imagens/11.png'
import img12 from '../imagens/12.png'

const items = [
    {
        key: String(Math.random()),
        img: img8,
        title: 'Pague suas contas sem sair de casa',
        bgColor: '#172c4a'
    },

    {
        key: String(Math.random()),
        img: img9,
        title: 'Pague suas contas sem sair de casa',
        bgColor: '#660159'
    },

    {
        key: String(Math.random()),
        img: img10,
        title: 'Pague suas contas sem sair de casa',
        bgColor: '#4129c8'
    },

    {
        key: String(Math.random()),
        img: img11,
        title: 'Pague suas contas sem sair de casa',
        bgColor: '#00ab4b'
    },

    {
        key: String(Math.random()),
        img: img12,
        title: 'Pague suas contas sem sair de casa',
        bgColor: '#ba2f76'
    }

];

export class Tips extends Component {
    render() {
        return (

            <Container>
                {items.map((item) => (
                    <Option key={item.key} bgColor={item.bgColor}>
                        <Title>{item.title}</Title>
                        <Img source={item.img} />
                    </Option>
                ))}
            </Container>

        )
    }
}

export default Tips
