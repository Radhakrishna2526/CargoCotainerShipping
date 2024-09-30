using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace CargoContainerShipping.Filters
{
    public class MyAuthorizeAttribute : AuthorizeAttribute, IAuthorizationFilter
    {
        public void OnAuthorization(AuthorizationFilterContext context)
        {
            // If the user is not authenticated, return 401 Unauthorized
            if (!context.HttpContext.User.Identity.IsAuthenticated)
            {
                context.Result = new UnauthorizedResult();
            }
            else
            {
                // Check if user is authorized based on roles
                var roles = Roles?.Split(',');
                if (roles != null && roles.Any(role => !context.HttpContext.User.IsInRole(role)))
                {
                    // If the user is authenticated but not authorized, return 403 Forbidden
                    context.Result = new ForbidResult();
                }
            }
        }
    }
}
