export default function productReducer(state = [], action) {
  switch (action.type) {

    case 'FETCH_PRODUCT':
      return {
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
        img_full: action.payload.img_full,
        img_thumbnail: action.payload.img_thumbnail,
        description: action.payload.description.replace(new RegExp('\r?\n','g'), '<br />'),
        sold_out: action.payload.sold_out,
      }

    default:
      return state
  }
}
