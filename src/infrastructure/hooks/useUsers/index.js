import { useGlobalStore } from '../../store';
import bindActions from '../../store/bindActions';
import usersReducer from '../../store/users';

const { dispatchers } = usersReducer;

const useUsers = () => {
  const { state, dispatch } = useGlobalStore();

  // List of Props
  const { user } = state;

  // List of Dispatchers
	const {
    userCreateRequest,
    userMeRequest,
    userFormCustomerFieldChangeRequest
  } = dispatchers;

  // Bind Actions
	const usersActions = bindActions({
    userCreateRequest,
    userMeRequest,
    userFormCustomerFieldChangeRequest
  }, dispatch);

  return { ...user, ...usersActions };
};

export default useUsers;
