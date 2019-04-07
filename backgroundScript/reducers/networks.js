import {
  CHANGE_CURRENT_NETWORK,
  UPDATE_NETWORK_LIST,
  SHOW_NETWORK_LIST,
} from '../actions/networks';
import { DOT_NETWORK_LIST } from '../../lib/constants/networks';

const initialState = {
  networks: DOT_NETWORK_LIST,
  //KP: selected Aion Network must be same as in initializeWeb3() call in browser/extension/contentScript.js
  currentNetwork: DOT_NETWORK_LIST[0], // network object, should have 'name' and 'chainId'
  showNetworkList: false,
};

const networkState = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NETWORK_LIST:
      return { ...state, networks: action.payload };
    case CHANGE_CURRENT_NETWORK:
      return { ...state, currentNetwork: action.payload };
    case SHOW_NETWORK_LIST:
      return { ...state, showNetworkList: action.payload };
    default:
      return state;
  }
};

export default networkState;
