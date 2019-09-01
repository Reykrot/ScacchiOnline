using System;
using System.Collections.Generic;
using System.Text;

namespace ServerScacchi
{
    public class User
    {
        public string Name { get; set; }
        public string Color { get; set; }
        public Guid Token { get; set; }
        public string Password { get; set; }
        public User()
        {
            Token = Guid.NewGuid(); 
        }
    }
}
