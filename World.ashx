<%@ WebHandler Language="C#" Class="World" %>

using System;
using System.Web;

public class World : IHttpHandler {
    
    public void ProcessRequest (HttpContext context) {
        context.Response.ContentType = "text/plain";
        string output = "{\"world\" : [";
        output += "{\"name\":\"India\",\"capital\":\"New Delhi\",\"continent\":\"Asia\"},";
        output += "{\"name\":\"US\",\"capital\":\"Washington, DC\",\"continent\":\"NA\"},";
        output += "{\"name\":\"UK\",\"capital\":\"London\",\"continent\":\"Europe\"},";
        output += "{\"name\":\"Brazil\",\"capital\":\"RDJ\",\"continent\":\"SA\"}";
        output += "]}";
        context.Response.Write(output);
    }
 
    public bool IsReusable {
        get {
            return false;
        }
    }

}