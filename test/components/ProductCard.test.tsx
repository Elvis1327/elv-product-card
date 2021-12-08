import React from 'react';
import renderer from 'react-test-renderer';

import { ProductCard } from '../../src/components/index';
import { product1 } from '../data/products';

describe('ProductCard', () => {

    test('Debe de mostrar el comopnente Correctamente', () => {
        const wrapper = renderer.create(
            <ProductCard
                product={product1}
            >
                {
                    () => (
                        <h1>Proudct Card</h1>
                    )
                }
            </ProductCard>
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('debe de incrementer el contador', () => {
        const wrapper = renderer.create(
            <ProductCard
                product={product1}
            >
                {
                    ({count, increaseBy}) => (
                        <>
                            <h1>Porudct Card</h1>
                            <span>
                                {count}
                            </span>
                            <button
                                onClick={ () => increaseBy(1) }
                            >

                            </button>
                        </>
                    )
                }
            </ProductCard>
        );
        let tree = wrapper.toJSON();
        expect(tree).toMatchSnapshot();
    })

})
