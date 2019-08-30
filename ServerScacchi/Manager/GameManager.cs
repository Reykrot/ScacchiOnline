using System;
using System.Collections.Generic;
using System.Text;

namespace ServerScacchi
{
    public class GameManager
    {
        public string GameInfo { get; set; }
        public GameRoom GameRoom { get; set; }
        public void setGameinfo(string gameInfo)
        {
            GameInfo = gameInfo;
        }

        public string RequestManager()
        {
            return "pippo";
        }
        public void CreateRoom(List<User> players)
        {
            GameRoom.CreateGetInstance(Guid.NewGuid());
            foreach (User users in players)
            {
                GameRoom.AddPlayerToList(users);
            }

        }
    }
}
