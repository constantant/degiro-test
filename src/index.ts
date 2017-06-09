import { Expect, Test, TestCase } from 'alsatian';

import { sortProducts } from './app';
import { PRODUCTS1, PRODUCTS2, PRODUCTS3 } from './data';


export class SomeModuleTests {

    @Test('Task 1')
    @TestCase("Case 1")
    public Case1() {
        const result = sortProducts(PRODUCTS1); // {highest: [...], lowest: [...]}

        Expect(result.highest instanceof Array).toBe(true);
    }

    @TestCase("Case 2")
    public Case2() {
        const result = sortProducts(PRODUCTS1); // {highest: [...], lowest: [...]}

        Expect(result.lowest instanceof Array).toBe(true);
    }

}