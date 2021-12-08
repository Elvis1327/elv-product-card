import React from 'react';
import renderer from 'react-test-renderer';

import { ProductImage } from '../../src/components/index';


describe('ProductImage', () => {
    test('Debe de mostrar el componente correctamente con la Imagen del producto', () => {
        const wrapper = renderer.create(
            <ProductImage img="https://res.cloudinary.com/dtp3gqean/image/upload/v1623042649/probar_qjetgg.png" />
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    
})
