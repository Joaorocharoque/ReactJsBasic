import './styles.css'

export const TextInput = ({actionFn, inputValue}) => {
  return (
      <input
        className='text-input'
        placeholder="Pesquisar: "
        onChange={actionFn}
        value={inputValue}
        type="search"
      />
  );
}
