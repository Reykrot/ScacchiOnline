using System;
using System.Collections.Generic;
using System.Text;

namespace ServerScacchi
{
    public class GameManager
    {
        public string GameInfo { get; }
        public GameRoom GameRoom { get; }
        public GameManager(GameRoom gameRoom, string gameInfo)
        {
            GameRoom = gameRoom;
            GameInfo = gameInfo;
        }

        

    }
}
