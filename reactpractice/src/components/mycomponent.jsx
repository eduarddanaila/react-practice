import ComponentWithProps from '../src/ComponentWithProps';

const MyComponent = () => (
        <>
        <h1>Hello World</h1>
        <h2>Good Day</h2>
        <ComponentWithProps
        header="This is a header"
        content="Some content"
        number={10}
        nonexistent="something that doesn't exist"/>
        </>
);
export default MyComponent;
