const Hello = (props) => (
        <h1>Hello, {props.name}</h1>
);
const PropComp = () => (
        <>
            <Hello name="Chris" />
            <Hello name="P." />
            <Hello name="Bacon" />
        </>
);
export default PropComp;
