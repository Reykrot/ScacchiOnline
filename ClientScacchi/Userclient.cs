using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClientScacchi
{
    public class UserClient
    {
        public static List<UserClient> UserPlayer = new List<UserClient>();
        public string Name { get; set; }
        public string Password { get; set; }
        public string Color { get; set; }
        public string Token { get; set; }
    }
}
