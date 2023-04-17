using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class Bugger : BaseApiController
    {
        [HttpGet("not-found")]
        public ActionResult GetNotFound()
        {
            return NotFound();
        }

        [HttpGet("bad-request")]
        public ActionResult GetBadRequest()
        {
            return BadRequest(new ProblemDetails{Title = "Bad Request", Detail = "This is a feature, not a bug :)"});
        }

        [HttpGet("unauthorized")]
        public ActionResult GetUnauthorized()
        {
            return Unauthorized();
        }

        [HttpGet("validation-error")]
        public ActionResult GetValidationError()
        {
            ModelState.AddModelError("problem 1", "validation error");
            ModelState.AddModelError("problem 2", "validation error");
            return ValidationProblem();
        }
        [HttpGet("server-error")]
        public ActionResult GetServerError()
        {
            throw new Exception("server error");
        }
    }
}
