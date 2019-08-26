using System;
using System.Collections.Generic;
using System.Text;

namespace ServerScacchi
{
    class GameRoom
    {
        private Guid TokenRoom { get; set; }
        private User WhitePlayerId;
        private User BlackPlayerId;
        private Dictionary<Guid, User> Player = new Dictionary<Guid, User>();
        public GameRoom(List<User> user)
        {
            user[1] = BlackPlayerId;
            user[0] = WhitePlayerId;
            TokenRoom = Guid.NewGuid();
        }
    }
}
