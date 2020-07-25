import { useGlobalStore } from '../../store';
import bindActions from '../../store/bindActions';
import productsReducer from '../../store/products';

const { dispatchers } = productsReducer;

const useProducts = () => {
  const { state, dispatch } = useGlobalStore();

  // List of Props
  const { product } = state;

  // List of Dispatchers
	const {
    productsRequest,
    productsChangePageRequest
  } = dispatchers;

  // Bind Actions
	const productsActions = bindActions({
    productsRequest,
    productsChangePageRequest
  }, dispatch);

  return { ...product, ...productsActions };
};

export default useProducts;
