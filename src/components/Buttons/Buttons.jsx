export function Buttons({ handleClick, names }) {
  return names.map(name => {
    if (name !== 'total') {
      return (
        <button
          key={name}
          type="button"
          onClick={() => {
            handleClick(name);
          }}
        >
          {name}
        </button>
      );
    }
    return '';
  });
}
