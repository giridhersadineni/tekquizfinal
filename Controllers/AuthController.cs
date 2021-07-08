using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Net.Http.Handlers;
using Newtonsoft.Json;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class AuthController : ApiController
    {
        DBModel db = new DBModel();
        
        [HttpPost]
        [Route("api/userlogin")]
        public HttpResponseMessage UserLogin(User user)
        {
            var userdata = db.Users.Where ( u => u.email == user.email );
            if (userdata.Any())
            {
                return this.Request.CreateResponse(HttpStatusCode.OK, userdata);
            }
            else
            {
                return this.Request.CreateResponse(HttpStatusCode.NotFound);
            }

        }

        [HttpPost]
        [Route("api/adminlogin")]
        public HttpResponseMessage AdminLogin(AdminUser user)
        {
            var userdata = db.AdminUsers.Where(u => u.Email == user.Email);
            if (userdata.Any())
            {
                return this.Request.CreateResponse(HttpStatusCode.OK, userdata);
            }
            else
            {
                return this.Request.CreateResponse(HttpStatusCode.NotFound);
            }

        }




        [HttpGet]
        [Route("api/getalladmins")]
        public HttpResponseMessage getAdminDetails()
        {
            var users = db.AdminUsers.ToList();

            return this.Request.CreateResponse(HttpStatusCode.OK, users);
        }


        [HttpPost]
        [Route("api/createAdmin")]
       
        public HttpResponseMessage addAdmin()
        {
            var user = new AdminUser();
            user.Name = "Test User";
            user.Password = "hello@123";
            user.Phone = "9123123123";
            user.Email = "test@gmail.com";
            db.AdminUsers.Add(user);
            db.SaveChanges();
            return this.Request.CreateResponse(HttpStatusCode.OK, "{Success}");
        }






    }
}
