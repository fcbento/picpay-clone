import React, { Component } from 'react'
import { Container, Details, Title, Img, Description } from './styles';

import img13 from '../imagens/13.png';

export class Banner extends Component {
    render() {
        return (
            <Container>
                <Details>
                    <Title>Cobre um amigo</Title>
                    <Description>
                          Mantenha suas parcerias em dia, 
                          use o picpay para fazer suas cobranças
                    </Description>
                </Details>
                <Img source={img13} />
            </Container>
        )
    }
}

export default Banner
