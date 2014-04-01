<%@ WebHandler Language="C#" Class="TestWCF" %>

using System;
using System.Web;
using System.IO;

public class TestWCF : IHttpHandler {
    
    public void ProcessRequest (HttpContext context) {
        context.Response.ContentType = "text/plain";

        MemoryStream msInput = new MemoryStream();
        context.Request.InputStream.CopyTo(msInput);
        byte[] byteInput = msInput.ToArray();
        msInput.Seek(0, SeekOrigin.Begin);
        context.Response.Write(context.Request.InputStream);
        
        // content goes here
       // context.Response.Write("Hello World");
    }
 
    public bool IsReusable {
        get {
            return false;
        }
    }

}