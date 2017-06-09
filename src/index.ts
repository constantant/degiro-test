import { Expect, Test, TestCase } from 'alsatian';

import { sortProducts } from './app';
import { PRODUCTS1, PRODUCTS2, PRODUCTS3 } from './data';


export module SomeModuleTests {

    @Test()
    public Tas(PRODUCTS1) {
        let instance = new SomeModule();

        Expect(instance.status).toBe(true);
    }

    @Test("Name should be null by default")
    public nameShouldBeNullByDefault() {
        let instance = new SomeModule();

        Expect(instance.name).toBe(null);
    }

    @TestCase("first name")
    @TestCase("apples")
    public shouldSetNameCorrectly(name: string) {
        let instance = new SomeModule();

        instance.setName(name);

        Expect(instance.name).toBe(name);
    }

}