export const center = (
  direction = 'column',
  justify = 'center',
  align = 'center'
) => {
  return `display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};`
}
