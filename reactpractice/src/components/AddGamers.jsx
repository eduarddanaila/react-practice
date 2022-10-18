/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
const AddGamers = ({ submitHandler, newPlayer, handleAdd }) => (
        <form onSubmit={submitHandler}>
            <input
            type="text"
            placeholder="Enter name:"
            onChange={newPlayer}
            />
            <button
            type="button"
            onClick={handleAdd}
            >
            Add Player
            </button>
        </form>
);

export default AddGamers;
