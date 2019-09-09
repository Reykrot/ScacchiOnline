using System;
using System.Collections.Generic;
using System.Net.Sockets;
using System.Text;

namespace ServerScacchi.Manager
{
    class ResponseManager
    {


        public static List<User> WhaitingList = new List<User>();
        public static string ToWhitePlayer { get; set; }
        public static string ToBlackPlayer { get; set; }
        public bool counter = true;
        public string RespToServer { get; set; }
        public Guid PlayerToken { get; set; }
        public string Start(string content)
        {
            RespToServer = content;
            string response = Interpreter(PlayerParse(content));
            return response;
        }

        public string Interpreter(Guid guid)
        {
            string finalResponse = "";
            string[] arrayResp = RespToServer.Split(";");

            if (arrayResp[0].Contains("Player"))
            {
                finalResponse = CreatePlayer(arrayResp);
            }
            else if (RespToServer.Contains("RoomRequest"))
            {
                finalResponse = RoomRequest(guid);
            }
            else if (RespToServer.Contains("GameStart"))
            {
                finalResponse = RoomRequest(guid);
                
                if (WhaitingList.Count == 2)
                {
                    WhaitingList.Clear();
                }
            }
            else if (RespToServer.Contains("Color"))
            {
                AssignColor(guid);
                finalResponse = AssignPlayer(guid);
                
            }
            else if (RespToServer.Contains("move"))
            {
                finalResponse = ParseMovement(guid);
            }
            else if (RespToServer.Contains("refresh"))
            {
                finalResponse = AssignRefresh(guid);
            }

            return finalResponse;
        }
        public string CreatePlayer(string[] arrayResp)
        {
            arrayResp = RespToServer.Split(" ");
            User user = new User();
            user.Name = arrayResp[3];
            user.Password = arrayResp[6];
            WhaitingList.Add(user);
            if (user.Name != null && user.Password != null)
            {
                return user.Token.ToString();
            }

            return "errore nella creazione utente";
        }
        public Guid PlayerParse(string token)
        {
            if (!token.Contains("Player") | token.Contains("move"))
            {
                string[] tokenarray = token.Split(" / ");

                PlayerToken = Guid.Parse(tokenarray[0]);

                return PlayerToken;

            }
            else
            {
                Guid pippo = new Guid();
                return pippo;
            }
        }
        public string CreateRoom(Guid Token)
        {
            GameRoom.Instance(Token);
            
            return "ok";
        }

        public string RoomRequest(Guid guid)
        {

            if (GameRoom.Singleton.Count == 0) return CreateRoom(guid);
            foreach (KeyValuePair<Guid, GameRoom> entry in GameRoom.Singleton)
            {
                if (entry.Value.Player.Count < 2)
                {
                    foreach (User user in WhaitingList)
                    {
                        if (user.Token == guid)
                        {
                            entry.Value.Player.Add(user);
                            return "ok";
                        }
                    }

                }
                else
                {
                    return CreateRoom(guid);
                }
            }

            return "something goes wrong!";
        }
        public string AssignColor(Guid guid)
        {
            foreach (User coloruser in WhaitingList)
            {

                if (coloruser.Color == null)
                {
                    if (counter)
                    {
                        coloruser.Color = "whiteplayer";
                        counter = !counter;
                    }
                    else
                    {
                        coloruser.Color = "blackplayer";
                    }
                }
                if (coloruser.Token == guid) return coloruser.Color;
            }

            return "user not found";

        }
#warning value in game room è null su value ho gia modificato una parte ma è da ricotnrollare;
        public string AssignPlayer(Guid guid)
        {
            string returned = "";
            foreach (KeyValuePair<Guid, GameRoom> entry in GameRoom.Singleton)
            {
                foreach (User coloruser in WhaitingList)
                {
                    if (entry.Value.Player.Count == 0)
                    {
                        entry.Value.Player.Add(coloruser);
                    }
                    else if (entry.Value.Player[0].Color != coloruser.Color)
                    {
                        entry.Value.Player.Add(coloruser);
                    }

                    if (coloruser.Token == guid)
                    {
                        returned = coloruser.Color;
                    }
                }
            }
            return returned;
        }

        public string ParseMovement(Guid Token)
        {
            string[] toParse = RespToServer.Split(" ");

            string response = "";

            int count = 0;
            foreach (string item in toParse)
            {
                if (count < 4) { count++; continue; }
                response = response + item + " ";
            }
            foreach (KeyValuePair<Guid, GameRoom> entry in GameRoom.Singleton)
            {
                foreach(User user in entry.Value.Player)
                {
                    if (user.Token == Token)
                    {
                        if (user.Color == "whiteplayer")
                        {
                          ToBlackPlayer  = response;
                        }
                        else if (user.Color == "blackplayer")
                        {
                          ToWhitePlayer = response;
                        }

                    }
                }
            }
                return response;
        }

        public string AssignRefresh(Guid guid)
        {
            string response = "something goes wron in Assignement Refresh";

            foreach (KeyValuePair<Guid, GameRoom> entry in GameRoom.Singleton)
            {
                foreach (User user in entry.Value.Player)
                {
                    if (user.Token == guid)
                    {
                        if (user.Color == "whiteplayer")
                        {
                            return ToBlackPlayer;
                        }
                        else if (user.Color == "blackplayer")
                        {
                            return ToWhitePlayer;
                        }
                    }
                }
                
            }
            return response;
        }
    }
}