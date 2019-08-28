using System;
using System.Collections.Generic;
using System.Text;

namespace ServerScacchi
{
    class ColorAssignManager
    {
        private static bool playercolor = true;
        public string ColorAssignation(string content)
        {
            string ColorRespons = "";
            if (!content.Contains("blackplayer") && !content.Contains("whiteplayer"))
            {
                if (playercolor)
                {
                    ColorRespons = "whiteplayer";
                    playercolor = false;
                }

            }
            else if (content.Contains("whiteplayer"))
            {
                ColorRespons = "blackplayer";
            }
            else if (content.Contains("blackplayer"))
            {
                ColorRespons = "whiteplayer";
            }else
            {
                ColorRespons = "error Color not create";
            }

                return ColorRespons;
        }

    }
}
