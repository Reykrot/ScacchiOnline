using ServerScacchi.Manager;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;

namespace ServerScacchi
{
    class SoketServer
    {
        public static ManualResetEvent allDone = new ManualResetEvent(false);
        private static ResponseManager responseManager = new ResponseManager();
        private static string ToOtherUser = "";
        public static void StartListening()
        {
            IPHostEntry ipHostInfo = Dns.GetHostEntry(Dns.GetHostName());
            IPAddress ipAddress = ipHostInfo.AddressList[1];
            IPEndPoint localEndPoint = new IPEndPoint(ipAddress, 11000);

            Socket listener = new Socket(ipAddress.AddressFamily,
                SocketType.Stream, ProtocolType.Tcp);

            Console.WriteLine("Server in ascolto" + ipAddress + 11000);

            try
            {
                listener.Bind(localEndPoint);
                listener.Listen(100);
                while (true)
                {
                    allDone.Reset();
                    listener.BeginAccept(new AsyncCallback(AcceptCallback),
                        listener);
                    allDone.WaitOne();
                }

            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
            }
        }

        public static void AcceptCallback(IAsyncResult ar)
        {
            allDone.Set();

            Socket listener = (Socket)ar.AsyncState;
            Socket handler = listener.EndAccept(ar);

            StateObject state = new StateObject();
            state.workSocket = handler;
            handler.BeginReceive(state.buffer, 0, StateObject.BufferSize, 0,
                new AsyncCallback(ReadCallback), state);
        }

        public static void ReadCallback(IAsyncResult ar)
        {
            SoketResponse soketResponse = new SoketResponse();
            String content = String.Empty;
            StateObject state = (StateObject)ar.AsyncState;
            Socket handler = state.workSocket;

            int bytesRead = handler.EndReceive(ar);

            if (bytesRead > 0)
            {
                state.sb.Append(Encoding.ASCII.GetString(
                    state.buffer, 0, bytesRead));

                content = state.sb.ToString();

                //messaggio del client
                Console.WriteLine(content);

                content = responseManager.Start(content);
                string myBinary = null;
                string[] arraydata = content.Split(' ');
                if (arraydata.Length > 1)
                {
                    if (arraydata[1].Contains("favicon"))
                    {
                        using (StreamReader streamReader = new StreamReader(@"C:\Users\g.morleschi\source\repos\MVCExercize\MVCExercize\staticfile\favicon.ico"))
                        {
                            myBinary = streamReader.ReadToEnd();
                        }
                    }
                }
                //risposta del server
                //if (content != ToOtherUser && ToOtherUser != "")
                //{
                //Send(handler, soketResponse.Response(ToOtherUser));
                //Console.WriteLine(soketResponse.Response(ToOtherUser));
                //}
                else
                {
                    Send(handler, soketResponse.Response(content));
                    //Console.WriteLine(soketResponse.Response(content));
                }
                if (content.Contains("div"))
                {
                    ToOtherUser = content;
                    Send(handler, soketResponse.Response(ToOtherUser));
                }
                //if (content == "")
                //{
                //    Send(handler, soketResponse.Response(ToOtherUser));
                //}




                if (myBinary != null)
                {
                    Send(handler, myBinary);
                }

                //handler.Shutdown(SocketShutdown.Both);
                //handler.Close();
                // }
                // else
                // {
                //     handler.BeginReceive(state.buffer, 0, StateObject.BufferSize, 0,
                //    new AsyncCallback(ReadCallback), state);
                //}
            }
        }

        private static void Send(Socket handler, String data)
        {
            byte[] byteData = Encoding.ASCII.GetBytes(data);
            handler.BeginSend(byteData, 0, byteData.Length, 0,
                new AsyncCallback(SendCallback), handler);
        }

        private static void SendCallback(IAsyncResult ar)
        {
            try
            {
                Socket handler = (Socket)ar.AsyncState;
                int bytesSent = handler.EndSend(ar);
                //handler.Shutdown(SocketShutdown.Both);
                //handler.Close();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
            }
        }
    }
}
