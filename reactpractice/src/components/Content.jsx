/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-key */
import sampleData from './sampleData.json';

const Content = () => (
        <div>
            {sampleData.map((person) => (
                <p>Hello, {person.name} from {person.address.city}!</p>
            ))}
        </div>
);
export default Content;
