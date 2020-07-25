import { useGlobalStore } from '../../store';
import bindActions from '../../store/bindActions';
import ordersReducer from '../../store/orders';

const { dispatchers } = ordersReducer;

const useOrders = () => {
  const { state, dispatch } = useGlobalStore();

  // List of Props
  const { order } = state;

  // List of Dispatchers
	const {
    ordersListRequest,
    addShoppingCartRequest,
    updateUnitsCartRequest,
    ordersCreateRequest
  } = dispatchers;

  // Bind Actions
	const ordersActions = bindActions({
    ordersListRequest,
    addShoppingCartRequest,
    updateUnitsCartRequest,
    ordersCreateRequest
  }, dispatch);

  return { ...order, ...ordersActions };
};

export default useOrders;
