using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class AdminUsersController : ApiController
    {
        private DBModel db = new DBModel();

        // GET: api/AdminUsers
        public IQueryable<AdminUser> GetAdminUsers()
        {
            return db.AdminUsers;
        }
        // GET: api/AdminUsers/5
      

        // GET: api/AdminUsers/5
        [ResponseType(typeof(AdminUser))]
        public IHttpActionResult GetAdminUser(int id)
        {
            AdminUser adminUser = db.AdminUsers.Find(id);
            if (adminUser == null)
            {
                return NotFound();
            }

            return Ok(adminUser);
        }

        // PUT: api/AdminUsers/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutAdminUser(int id, AdminUser adminUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != adminUser.Id)
            {
                return BadRequest();
            }
            db.Entry(adminUser).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AdminUserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/AdminUsers
        [ResponseType(typeof(AdminUser))]
        public IHttpActionResult PostAdminUser(AdminUser adminUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.AdminUsers.Add(adminUser);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = adminUser.Id }, adminUser);
        }

        // DELETE: api/AdminUsers/5
        [ResponseType(typeof(AdminUser))]
        public IHttpActionResult DeleteAdminUser(int id)
        {
            AdminUser adminUser = db.AdminUsers.Find(id);
            if (adminUser == null)
            {
                return NotFound();
            }

            db.AdminUsers.Remove(adminUser);
            db.SaveChanges();

            return Ok(adminUser);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AdminUserExists(int id)
        {
            return db.AdminUsers.Count(e => e.Id == id) > 0;
        }
    }
}