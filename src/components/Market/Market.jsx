import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';

const Market = ({handleAddToCart}) => {
     const [players, setPlayers] = useState([]);

     useEffect(() => { 
          fetch('players.json')
               .then(res => res.json())
          .then(data => setPlayers(data))
     }, [])
     return (
          <div className='grid grid-cols-3 gap-3'>
               {
                    players.map(player => <Player
                         player={player}
                         handleAddToCart={handleAddToCart}
                         key={player.id}
                    ></Player>)
               }
          </div>
     );
};

export default Market;