using Microsoft.AspNetCore.Mvc;
using RayoCinemaAPI.Data;
using RayoCinemaAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace RayoCinemaAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsuariosController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UsuariosController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] Usuario login)
        {
            var user = await _context.Usuarios.FirstOrDefaultAsync(u =>
                u.Correo == login.Correo && u.Contrasena == login.Contrasena);

            if (user == null)
                return Unauthorized("Usuario o contraseña incorrectos");

            return Ok(user);
        }

        [HttpPost("registro")]
        public async Task<IActionResult> Registro([FromBody] Usuario nuevoUsuario)
        {
            _context.Usuarios.Add(nuevoUsuario);
            await _context.SaveChangesAsync();
            return Ok(nuevoUsuario);
        }
    }
}
