using System;
using System.Collections.Generic;
using System.Net.Sockets;
using System.Text;

namespace ServerScacchi.Manager
{
    class ResponseManager
    {
        public static List<User> WhaitingList = new List<User>();
        public bool counter = true;
        public static string ToBlackPlayer { get; set; }
        public static string ToWhitePlayer { get; set; }
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
            }
            else if (RespToServer.Contains("Color"))
            {
                AssignColor(guid);
                finalResponse = AssignPlayer(guid);
            }
            else if (RespToServer.Contains("move"))
            {
                finalResponse = ResponseAssigment(guid, ParseMovement());
            }
            else if (RespToServer.Contains("refresh"))
            {
                finalResponse = MoveNotification(guid); ;
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
            foreach (User user in WhaitingList)
            {
                if (user.Token == Token)
                {
                    GameRoom.Instance(Token).Player.Add(user);
                }
            }

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
        public string AssignPlayer(Guid guid)
        {
            string returned = "";
            GameRoom.Singleton.TryGetValue(guid, out GameRoom value);
            if (value != null)
            {
                foreach (User coloruser in WhaitingList)
                {
                    if (value.Player.Count == 0)
                    {
                        value.Player.Add(coloruser);
                    }
                    else if (value.Player[0].Color != coloruser.Color)
                    {
                        value.Player.Add(coloruser);
                    }
                    if (coloruser.Token == guid)
                    {
                        returned = coloruser.Color;
                    }
                }
            }
            else
            {
                foreach (KeyValuePair<Guid, GameRoom> Entity in GameRoom.Singleton)
                {
                    if (Entity.Value.Player.Count < 2)
                    {
                        foreach (User coloruser in WhaitingList)
                        {
                            if (coloruser.Token == guid)
                            {
                                Entity.Value.Player.Add(coloruser);
                                returned = coloruser.Color;
                            }
                        }
                    }
                }
            }
            return returned;
        }

        public string ParseMovement()
        {
            string[] toParse = RespToServer.Split(" ");
            string response = "";
            int count = 0;
            foreach (string item in toParse)
            {
                if (count < 4) { count++; continue; }
                response = response + item + " ";
            }
            return response;
        }

        public string ResponseAssigment(Guid guid, string movment)
        {
            string message = "something goes wrong in assegnation move";
            foreach (KeyValuePair<Guid, GameRoom> Entry in GameRoom.Singleton)
            {
                foreach (User player in Entry.Value.Player)
                {
                    if (player.Token == guid)
                    {
                        if (player.Color == "whiteplayer")
                        {
                            ToBlackPlayer = movment;
                        }
                        else if (player.Color == "blackplayer")
                        {
                            ToWhitePlayer = movment;
                        }
                    }
                }
            }

            return message;
        }

        public string MoveNotification(Guid guid)
        {
            string response = "Something goes wron with move";
            foreach (KeyValuePair<Guid, GameRoom> Entry in GameRoom.Singleton)
            {
                foreach (User player in Entry.Value.Player)
                {
                    if (player.Token == guid)
                    {
                        if (player.Color == "whiteplayer")
                        {
                            response = ToWhitePlayer;
                        }
                        else if (player.Color == "blackplayer")
                        {
                            response = ToBlackPlayer;
                        }
                    }
                }
            }
            return "unlock " + response;
        }
    }
}