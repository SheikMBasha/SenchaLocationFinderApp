<%@ WebHandler Language="C#" Class="TasksHandler" %>

using System;
using System.Web;
using System.Net;
using System.Collections.Generic;

public class TasksHandler : IHttpHandler {
    
    public void ProcessRequest (HttpContext context) {
        context.Response.ContentType = "text/plain";

        WebClient client = new WebClient();
        string url = "http://localhost/LocationFinder/LocationFinder.svc/tasks";

        string response = client.DownloadString(url);
        context.Response.ContentType = "application/json";
        
        //LocationFinderClient client = new LocationFinderClient("WebHttpBinding_ILocationFinder");
        //LocationFinderClient client = new LocationFinderClient(
        //List<Tasks> collectionList = client.getAllTasks();
        
        context.Response.Write(response);
    }
 
    public bool IsReusable {
        get {
            return false;
        }
    }

}