export default function sortCharacters(arrData) {
  return arrData.sort((a, b) => a.health - b.health).reverse();
}
