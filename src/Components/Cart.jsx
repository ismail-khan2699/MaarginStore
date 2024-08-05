import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import xButton from './../assets/x.png';
import xCart from './../assets/Xcart.png'
import Carts from './CartHandle';
import { useCart } from '../Context/CartContext';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });
  const {totalQuantity, } = useCart();

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer('right', false)}
      onKeyDown={toggleDrawer('right', false)}
      className="bg-gradient-custom h-full"
      
    >
      <img src={xButton} className='h-4 w-4 right-0 top-0'  alt="Cross Mark" />
      {totalQuantity === 0?(
        <div className='text-2xl font-semibold p-10 text-center'>
          Cart is Empty
        </div>
      ) : (
        
        <Carts/>
        )}
      
    </Box>
  );

  return (
    <div>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
       
      >
        {list}
      </Drawer>
      
      <button type="button" onClick={toggleDrawer('right', true)} className=" bg-b-c relative inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg">
        <img src={xCart} className='w-6 h-6'/>
        <span className="sr-only">Notifications</span>
        {totalQuantity !== 0 && (
          <div id='notification' className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{totalQuantity}</div>
  
        )}
      </button>

      
</div>
  );
}
