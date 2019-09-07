using System;
using System.Collections.Generic;
using System.Text;

namespace ServerScacchi
{
    public class GameRoom
    {
        public static Dictionary<Guid, GameRoom> Singleton = new Dictionary<Guid, GameRoom>();
        public Guid TokenRoom { get; set; }
        public List<User> Player = new List<User>();
        private GameRoom(Guid token)
        {
            TokenRoom = token;
        }
        public static GameRoom Instance(Guid token)
        {
            if (Singleton.ContainsKey(token))
            {
                Singleton.TryGetValue(token, out GameRoom value);

                return value;
            }
            else
            {
                GameRoom gameRoom = new GameRoom(token);
                Singleton.Add(gameRoom.TokenRoom, gameRoom);
                return gameRoom;
            }
        }
    }
}
