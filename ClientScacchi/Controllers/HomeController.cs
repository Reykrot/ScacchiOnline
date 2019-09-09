using System;
using System.Web;
using System.Collections.Generic;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ClientScacchi.Models;
using System.IO;
using Microsoft.AspNetCore.Http;
using System.Runtime.InteropServices.ComTypes;
using System.ComponentModel.DataAnnotations;

namespace ClientScacchi.Controllers
{
    public class HomeController : Controller
    {

        public IActionResult Index()
        {

            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public string ToServerSoket(string toserver)
        {
            SynchronousSocketClient.StartClient(TakeTokenFromCookie() + " / " + toserver, out string respFromSeerver);

            return respFromSeerver;
        }
        public IActionResult StartGame()
        {
            SynchronousSocketClient.StartClient(TakeTokenFromCookie() + " / " + "RoomRequest", out string value);

            if (value.Contains("ok"))
            {
                return View();
            }
            else if (value.Contains("ko"))
            {
                return View("Lobby");
            }
            else
            {
                return View("Index");
            }

        }

        [HttpPost]
        public IActionResult LogIn(LogInInfo info)
        {
            string returnpage = "";
            List<string> account = new List<string>();

            using (StreamReader reader = new StreamReader("C:/Users/g.morleschi/source/repos/ScacchiOnline/ClientScacchi/DB.csv"))
            {
                string line = reader.ReadLine();
                while (line != null)
                {
                    account.Add(line);
                    line = reader.ReadLine();
                }
            }
            if (!Request.Cookies.ContainsKey("token"))
            {
                foreach (string userinfo in account)
                {
                    if (userinfo.ToLower().Contains(info.Name.ToLower()))
                    {
                        if (userinfo.ToLower().Contains(info.Password.ToLower()))
                        {
                            Response.Cookies.Delete("token");
                            returnpage = "Lobby";
                            SynchronousSocketClient.StartClient("Player ; User: " + info.Name + " ; " + "Password: " + info.Password, out string respfromServer);

                            UserClient userClient = new UserClient();
                            userClient.Name = info.Name;
                            userClient.Password = info.Password;
                            userClient.Token = respfromServer;
                            //  UserClient.UserPlayer.Add(userClient);
                            CookieOptions options = new CookieOptions();
                            options.Expires = DateTime.Now.AddMinutes(5);
                            options.IsEssential = true;
                            Response.Cookies.Append("token", userClient.Token, options);


                            break;
                        }
                        else
                        {
                            returnpage = "LogIn";
                            break;
                        }
                    }
                }
            }
            else
            {
                returnpage = "Lobby";
            }

            return View(returnpage);
        }


        public string TakeTokenFromCookie()
        {
            Request.Cookies.TryGetValue("token", out string token);
            return token;
        }
    }
}
