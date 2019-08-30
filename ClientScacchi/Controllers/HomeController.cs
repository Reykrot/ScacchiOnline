using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ClientScacchi.Models;
using System.IO;

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

        public string ToServerSoket(string test)
        {
            SynchronousSocketClient.StartClient(test, out string respFromSeerver);

            return respFromSeerver;
        }
        public IActionResult startGame()
        {
            return View();
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
            foreach (string userinfo in account)
            {
                if (userinfo.ToLower().Contains(info.Name.ToLower()))
                {
                    if (userinfo.ToLower().Contains(info.Password.ToLower()))
                    {
                        returnpage = "Lobby";
                        SynchronousSocketClient.StartClient("Player ; User: "+info.Name + ";" +"Password: "+info.Password, out string respfromServer);
                        break;
                    }
                    else
                    {
                        returnpage = "LogIn";
                        break;
                    }
                }
            }
            return View(returnpage);
        }
    }
}
