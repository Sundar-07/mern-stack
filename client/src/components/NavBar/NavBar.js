import React from 'react';

const NavBar = () => {
    return ( 
        <>
        <h2>NavBar</h2>
        <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-4">
  <div>
    1
  </div>
  <div class="col-start-3">
    2
  </div>
  <div>
    3
  </div>
  <div>
    4
  </div>
  <div class="row-start-1 col-start-2 col-span-2">
    5
  </div>
</div>
        </>
     );
}
 
export default NavBar;