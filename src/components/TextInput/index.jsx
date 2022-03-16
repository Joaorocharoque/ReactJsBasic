import './styles.css'

export const TextInput = ({searchValue, handleChange}) => {
  return (
      <input
        className='text-input'
        placeholder="Pesquisar: "
        onChange={handleChange}
        value={searchValue}
        type="search"
      />
  );
}
