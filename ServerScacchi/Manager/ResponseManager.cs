using System;
using System.Collections.Generic;
using System.Text;

namespace ServerScacchi.Manager
{
    class ResponseManager
    {
        public static List<User> UserForGame = new List<User>();
        public string RespToServer { get; set; }
        public string Start(string content)
        {
            content = RespToServer;
            string response = Interpreter();
            return response;
        }

        public string Interpreter()
        {
            string finalResponse = "";
            string[] arrayResp = RespToServer.Split(";");

            if (arrayResp[0].ToLower() == "Player".ToLower())
            {
                
                finalResponse = CreateRoom(CreatePlayer(arrayResp));
            }

            return finalResponse;
        }
        public User CreatePlayer(string[] arrayResp)
        {
            arrayResp = RespToServer.Split(" ");
            User user = new User();
            user.Name = arrayResp[3];
            user.Password = arrayResp[6];
            return user;
        }
        public string CreateRoom(User user)
        {
            GameManager gameManager = new GameManager();
            foreach (User users in UserForGame)
            {
                if (user.Token != users.Token)
                {
                    UserForGame.Add(user);
                }
            }
            if (UserForGame.Count == 2)
            {
                gameManager.CreateRoom(UserForGame);
                return "2 player rady";
            }
            return "only one player";
        }
    }
}
