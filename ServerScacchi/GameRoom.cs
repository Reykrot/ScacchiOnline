using System;
using System.Collections.Generic;
using System.Text;

namespace ServerScacchi
{
    public class GameRoom
    {
        private static Dictionary<Guid, GameRoom> Singleton = new Dictionary<Guid, GameRoom>();
        private Guid TokenRoom { get; set; }
        private static List<User> Player = new List<User>();
        private GameRoom()
        {
            TokenRoom = Guid.NewGuid();
        }
        public GameRoom CreateGetInstance(Guid token)
        {
            if (Singleton.ContainsKey(token))
            {
                Singleton.TryGetValue(token, out GameRoom value);

                return value;
            }
            else
            {
                GameRoom gameRoom = new GameRoom();
                Singleton.Add(TokenRoom, gameRoom);
                return gameRoom;
            }
        }
        public void AddPlayerToList(User user)
        {
            Player.Add(user);
        }
        public User FindPlayer(Guid token)
        {
            User returnuser = null;
            foreach (User user in Player)
            {
                if (user.Token == token)
                {
                    returnuser = user;
                } 
            } 
            return returnuser;
        }
    }
}
