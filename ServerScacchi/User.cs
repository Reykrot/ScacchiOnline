using System;
using System.Collections.Generic;
using System.Text;

namespace ServerScacchi
{
    public class User
    {
        internal Guid UserToken { get; set; }
        public User()
        {
            UserToken = Guid.NewGuid();
        }
    }
}
