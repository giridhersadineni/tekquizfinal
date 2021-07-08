//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebAPI.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class AdminUser
    {
        public AdminUser()
        {
            this.Topics = new HashSet<Topic>();
            this.Quizzes = new HashSet<Quiz>();
            this.Questions = new HashSet<Question>();
        }
    
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Phone { get; set; }
    
        protected virtual ICollection<Topic> Topics { get; set; }
        protected virtual ICollection<Quiz> Quizzes { get; set; }
        protected virtual ICollection<Question> Questions { get; set; }
    }
}
