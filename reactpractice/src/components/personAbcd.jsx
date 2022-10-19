function Person() {
  const me = {
    name: 'Eduard',
    age: 29,
  };
  return (
        <div>
            <p>Name: {me.name}</p>
            <p>Age: {me.age}</p>
        </div>
  );
}
export default Person;
