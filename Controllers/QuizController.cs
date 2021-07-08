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
    public class QuizController : ApiController
    {
        private DBModel db = new DBModel();

        // GET: api/Quizs
        public IQueryable<Quiz> GetQuizs()
        {
            return db.Quizs;
        }
        // GET: api/Quizs/5
        [ResponseType(typeof(Quiz))]
        public IHttpActionResult GetQuiz(int id)
        {
            Quiz quiz = db.Quizs.Find(id);
            if (quiz == null)
            {
                return NotFound();
            }
            
            return Ok(quiz);
        }

        [HttpGet]
        [Route("api/quizquestions/{id}")]
        [ResponseType(typeof(Question[]))]
        public IHttpActionResult quizquestions(int id)
        {
            var data = db.Quizs.Find(id).Questions;
            return Ok(data);
        }

        // PUT: api/Quizs/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutQuiz(int id, Quiz quiz)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != quiz.Id)
            {
                return BadRequest();
            }

            db.Entry(quiz).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!QuizExists(id))
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

        // POST: api/Quizs
        [ResponseType(typeof(Quiz))]
        public IHttpActionResult PostQuiz(Quiz quiz)
        {
            if (!ModelState.IsValid)
            {
                
                return BadRequest(ModelState);
                
            }


            db.Quizs.Add(quiz);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = quiz.Id }, quiz);
        }

        // DELETE: api/Quizs/5
        [ResponseType(typeof(Quiz))]
        public IHttpActionResult DeleteQuiz(int id)
        {
            Quiz quiz = db.Quizs.Find(id);
            if (quiz == null)
            {
                return NotFound();
            }

            db.Quizs.Remove(quiz);
            db.SaveChanges();

            return Ok(quiz);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool QuizExists(int id)
        {
            return db.Quizs.Count(e => e.Id == id) > 0;
        }
    }
}