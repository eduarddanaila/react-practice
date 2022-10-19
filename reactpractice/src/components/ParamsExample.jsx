/* eslint-disable no-undef */
/* eslint-disable no-console */
import { useParams } from 'react-router-dom';
import Person from './Person.jsx';
import people from '../sampleData.json';

function ParamsId() {
  const params = useParams();
  console.log('PARAMS:', params);
  const { id } = params;
  const person = people[id];
  return (
         <>
         <Person name={person.name} city={person.address.city} />
         </>
  );
}

export default ParamsId;
