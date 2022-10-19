/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import sampleData from './sampleData.json';
import Person from './Person';

const SubContent = () => (
        <>
            {sampleData.map((person) => (
                <Person key={person.id} name={person.name} city={person.address.city}/>
            ))}
        </>
);
export default SubContent;
